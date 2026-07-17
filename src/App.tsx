import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react'
import { ASSET_LINEAGES, type AssetLineage, type AssetLineageNode } from './data/assetLineages'
import { PLAYER_LIST, normalizeName } from './data/players'
import { PUZZLES, dailyIndex, dailyNumber, puzzleForDayNumber, totalMoves, type ChainLink, type Puzzle } from './data/puzzles'
import { TEAMS } from './data/teams'
import { POSSESSIONS, SHOT_CLOCK, challengeText, resultTier, shareText, type ShareSource, useGame } from './game/engine'
import { isMuted, setMuted } from './game/sounds'
import { loadStats, recordArrival, recordResult, recordShareCompletion, type Stats } from './game/storage'

type View = 'menu' | 'game' | 'lineage'

interface DeepLink {
  puzzleIdx: number
  arrivedVia: ShareSource | null
}

// Parsed once per page load (module scope, not component state) — a fresh
// page load is the only time a shared link's query params are meaningful.
function parseDeepLink(): DeepLink | null {
  if (typeof window === 'undefined') return null
  const params = new URLSearchParams(window.location.search)
  const src = params.get('src')
  const arrivedVia: ShareSource | null = src === 'share' || src === 'challenge' ? src : null
  const pParam = params.get('p')
  if (pParam) {
    const idx = PUZZLES.findIndex((p) => p.id === pParam)
    if (idx >= 0) return { puzzleIdx: idx, arrivedVia }
  }
  const dParam = params.get('d')
  if (dParam) {
    const n = Number(dParam)
    if (Number.isFinite(n) && n >= 1) return { puzzleIdx: puzzleForDayNumber(n), arrivedVia }
  }
  return null
}

const DEEP_LINK = parseDeepLink()

function parseLineageLink(): string | null {
  if (typeof window === 'undefined') return null
  const id = new URLSearchParams(window.location.search).get('lineage')
  return ASSET_LINEAGES.some((lineage) => lineage.id === id) ? id : null
}

const LINEAGE_LINK = DEEP_LINK ? null : parseLineageLink()

function BallIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="currentColor" />
      <path
        d="M4 50h92M50 4v92M16 16c20 24 48 52 68 68M84 16C64 40 36 68 16 84"
        fill="none"
        stroke="#0a0a0f"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function TeamPill({ abbr }: { abbr: string }) {
  const team = TEAMS[abbr]
  return (
    <span
      className="badge"
      style={{
        background: team?.color ?? '#999',
        color: abbr === 'SAS' || abbr === 'BKN' ? '#08080c' : '#fff',
      }}
      title={team?.name ?? abbr}
    >
      {abbr}
    </span>
  )
}

function Header({
  stats,
  onHome,
  muted,
  onToggleMuted,
}: {
  stats: Stats
  onHome: () => void
  muted: boolean
  onToggleMuted: () => void
}) {
  return (
    <header className="hdr">
      <button className="hdr-left plain" onClick={onHome} aria-label="Back to menu">
        <BallIcon className="ball" />
        <div className="wordmark">
          CASUALS<span className="num">#{dailyNumber()}</span>
        </div>
      </button>
      <div className="hdr-right">
        <span className="chip" title="Current daily win streak">
          <span className="flame">STK</span> {stats.streak}
        </span>
        <button className="icon-btn" onClick={onToggleMuted} aria-label={muted ? 'Turn sound on' : 'Mute sound'}>
          {muted ? 'S' : 'M'}
        </button>
      </div>
    </header>
  )
}

function Scoreboard({ game, onStart }: { game: ReturnType<typeof useGame>; onStart: () => void }) {
  const { state } = game
  const danger = state.clock <= 5 && state.phase === 'playing'
  const used = POSSESSIONS - state.possessionsLeft
  return (
    <section className={`scoreboard ${danger ? 'danger' : ''}`}>
      {state.phase === 'ready' && (
        <div className="tipoff">
          <button className="btn" onClick={onStart}>
            TIP OFF
          </button>
          <div className="card-sub">6 possessions. 24 seconds each.</div>
        </div>
      )}
      <div className="sb-row">
        <div className="sb-cell">
          <div className="sb-side-val">{state.score}</div>
          <div className="sb-label">PTS</div>
        </div>
        <div className="sb-cell">
          <div className={`led ${danger ? 'danger' : ''}`}>{Math.ceil(state.clock).toString().padStart(2, '0')}</div>
          <div className="sb-label">SHOT CLOCK</div>
        </div>
        <div className="sb-cell">
          <div className="balls" aria-label={`${state.possessionsLeft} possessions left`}>
            {Array.from({ length: POSSESSIONS }).map((_, i) => (
              <BallIcon key={i} className={`ball ${i < used ? 'used' : ''}`} />
            ))}
          </div>
          <div className="sb-label">POS</div>
        </div>
      </div>
      <div className="clockbar-wrap">
        <div
          className={`clockbar ${danger ? 'danger' : ''}`}
          style={{ width: `${Math.max(0, Math.min(100, (state.clock / SHOT_CLOCK) * 100))}%` }}
        />
      </div>
    </section>
  )
}

function LinkCard({
  link,
  index,
  active,
  solved,
  locked,
  result,
  flash,
  clock,
}: {
  link: ChainLink
  index: number
  active: boolean
  solved: boolean
  locked: boolean
  result: { turnovers: number; violations: number }
  flash: string | null
  clock: number
}) {
  const showSoftHint = active && !solved && (clock <= 10 || result.violations > 0)
  const hintText = result.violations >= 2 ? link.hint2 : result.violations >= 1 ? link.hint2 : link.hint1
  return (
    <article className={`card ${solved ? 'solved' : ''} ${active ? 'live' : ''} ${locked ? 'locked' : ''} ${active && flash ? 'shake' : ''}`}>
      <div className="accent" style={{ background: TEAMS[link.teams[0]]?.color ?? '#ffb02e' }} />
      <div className="card-eyebrow">
        LINK {index + 1} · {link.year}
        {link.teams.map((team) => (
          <TeamPill key={team} abbr={team} />
        ))}
      </div>
      <div className="card-title">{solved ? link.canonical : locked ? 'Locked until you solve the prior link' : link.question}</div>
      <div className="card-sub">{solved ? link.reveal : active ? 'Who did the team get back in this deal?' : ' '}</div>
      {active && showSoftHint && <div className={`hint ${result.violations ? 'hard' : ''}`}>{hintText}</div>}
    </article>
  )
}

function ChainView({ puzzle, game }: { puzzle: Puzzle; game: ReturnType<typeof useGame> }) {
  const { state } = game
  return (
    <main className="chain">
      <article className="card solved">
        <div className="accent" style={{ background: TEAMS[puzzle.start.team]?.color ?? '#2fd27d' }} />
        <div className="card-eyebrow">
          START · {puzzle.start.year} <TeamPill abbr={puzzle.start.team} />
        </div>
        <div className="card-title">{puzzle.start.title}</div>
        <div className="card-sub">{puzzle.start.sub}</div>
      </article>
      {puzzle.links.map((link, i) => (
        <div key={`${puzzle.id}-${i}`}>
          <div className={`connector ${state.results[i]?.solved ? 'done' : ''}`} />
          <LinkCard
            link={link}
            index={i}
            active={state.phase === 'playing' && state.linkIdx === i}
            solved={state.results[i]?.solved}
            locked={i > state.linkIdx && state.phase !== 'won' && state.phase !== 'lost'}
            result={state.results[i]}
            flash={state.flash}
            clock={state.clock}
          />
        </div>
      ))}
      <div className="connector done" />
      <article className="card target">
        <div className="card-eyebrow">
          TARGET · {puzzle.final.year}
          {puzzle.final.teams.map((team) => (
            <TeamPill key={team} abbr={team} />
          ))}
        </div>
        <div className="card-title">{puzzle.target.name}</div>
        <div className="card-sub">{state.phase === 'won' || state.phase === 'lost' ? puzzle.final.reveal : puzzle.target.sub}</div>
      </article>
    </main>
  )
}

function AnswerBox({ disabled, onGuess }: { disabled: boolean; onGuess: (name: string) => void }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestions = useMemo(() => {
    const q = normalizeName(query)
    if (!q) return []
    return PLAYER_LIST.filter((p) => normalizeName(p).includes(q)).slice(0, 6)
  }, [query])

  useEffect(() => setActive(0), [query])

  function submit(name = suggestions[active] ?? query) {
    if (!name.trim() || disabled) return
    onGuess(name)
    setQuery('')
    inputRef.current?.focus()
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, suggestions.length - 1))
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
      return
    }
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault()
      submit()
    }
  }

  return (
    <form className="search-wrap" onSubmit={(e: FormEvent) => { e.preventDefault(); submit() }}>
      {suggestions.length > 0 && !disabled && (
        <div className="sugg">
          {suggestions.map((player, i) => (
            <button key={player} type="button" className={i === active ? 'active' : ''} onMouseDown={() => submit(player)}>
              {player}
            </button>
          ))}
        </div>
      )}
      <div className="search-box">
        <SearchIcon />
        <input
          ref={inputRef}
          disabled={disabled}
          value={query}
          placeholder={disabled ? 'Tip off to start' : 'Search NBA player...'}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </form>
  )
}

function EndSheet({
  puzzle,
  game,
  dayNum,
  isDaily,
  onMenu,
  onReplay,
}: {
  puzzle: Puzzle
  game: ReturnType<typeof useGame>
  dayNum: number
  isDaily: boolean
  onMenu: () => void
  onReplay: () => void
}) {
  const { state } = game
  const tier = resultTier(state)
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null)
  const won = state.phase === 'won'
  const secs = Math.round(state.elapsedMs / 1000)
  const stampClass = won && tier === 'SICKO' ? 'win' : won ? 'mid' : 'loss'

  async function doShare(kind: 'share' | 'challenge') {
    const text = kind === 'share' ? shareText(puzzle, state, dayNum, isDaily) : challengeText(puzzle, state, dayNum, isDaily)
    if (navigator.share) {
      try {
        await navigator.share({ text })
      } catch {
        // User cancelled the native share sheet — don't also fall back to clipboard.
      }
      return
    }
    try {
      await navigator.clipboard.writeText(text)
      setCopiedLabel(kind === 'share' ? 'Copied result' : 'Copied challenge')
      setTimeout(() => setCopiedLabel(null), 1400)
    } catch {
      window.prompt('Share your result', text)
    }
  }

  return (
    <div className="overlay" role="dialog" aria-modal="true">
      <section className="sheet">
        <div className={`stamp ${stampClass}`}>{tier}</div>
        <div className="score-row">
          <div className="score-cell"><div className="v">{state.score}</div><div className="k">PTS</div></div>
          <div className="score-cell"><div className="v">{Math.floor(secs / 60)}:{String(secs % 60).padStart(2, '0')}</div><div className="k">TIME</div></div>
          <div className="score-cell"><div className="v">{state.possessionsLeft}</div><div className="k">POS LEFT</div></div>
        </div>
        <div className="recap">
          {puzzle.links.map((link, i) => (
            <div key={link.canonical} className="recap-item">
              <b>{link.year}: {link.canonical}</b> — {link.reveal}
            </div>
          ))}
          <div className="recap-item"><b>{puzzle.final.year}: {puzzle.target.name}</b> — {puzzle.final.reveal}</div>
        </div>
        <p className="epilogue">{puzzle.epilogue}</p>
        <div className="end-actions">
          <button className="btn" onClick={() => doShare('share')}>SHARE</button>
          <button className="btn" onClick={() => doShare('challenge')}>CHALLENGE A FRIEND</button>
          <button className="btn ghost" onClick={onReplay}>REPLAY</button>
          <button className="btn ghost" onClick={onMenu}>MENU</button>
        </div>
      </section>
      {copiedLabel && <div className="copy-toast">{copiedLabel}</div>}
    </div>
  )
}

function Menu({
  stats,
  onPlay,
  onOpenLineage,
}: {
  stats: Stats
  onPlay: (idx: number) => void
  onOpenLineage: (id: string) => void
}) {
  const daily = dailyIndex()
  const dailyPuzzle = PUZZLES[daily]
  const winRate = stats.played ? Math.round((stats.wins / stats.played) * 100) : 0
  return (
    <>
      <section className="hero">
        <BallIcon className="ball logo-ball" />
        <div className="hero-wordmark">CASUALS</div>
        <div className="tagline">Play GM. Turn one player into another. Prove you're not a casual.</div>
      </section>
      <section className="menu-card">
        <h3>Daily Chain</h3>
        <div className="daily-title">
          Turn {dailyPuzzle.start.player} into {dailyPuzzle.target.name} in {totalMoves(dailyPuzzle)} moves
          <span className="diff">{Array.from({ length: 5 }).map((_, i) => <span key={i} className={i < dailyPuzzle.difficulty ? 'on' : ''} />)}</span>
        </div>
        <div className="daily-sub">{dailyPuzzle.difficultyLabel} · #{dailyNumber()}</div>
        <button className="btn" onClick={() => onPlay(daily)}>PLAY DAILY</button>
      </section>
      <section className="menu-card">
        <h3>Stats</h3>
        <div className="stat-grid">
          <div className="score-cell"><div className="v">{stats.played}</div><div className="k">PLAYED</div></div>
          <div className="score-cell"><div className="v">{winRate}%</div><div className="k">WIN</div></div>
          <div className="score-cell"><div className="v">{stats.bestStreak}</div><div className="k">BEST STK</div></div>
          <div className="score-cell"><div className="v">{stats.bestScore}</div><div className="k">BEST</div></div>
        </div>
      </section>
      <section className="menu-card">
        <h3>Classic Games</h3>
        <div className="archive-grid">
          {PUZZLES.map((p, i) => (
            <button className="archive-item" key={p.id} onClick={() => onPlay(i)}>
              <TeamPill abbr={p.franchise} />
              <span>
                <span className="t">{p.start.player} → {p.target.name}</span>
                <span className="s">{p.difficultyLabel} · {totalMoves(p)} moves</span>
              </span>
              {stats.completed[p.id] && <span className="done">{stats.completed[p.id].tier}</span>}
            </button>
          ))}
        </div>
      </section>
      <section className="menu-card">
        <h3>Asset Film Room</h3>
        <div className="archive-grid">
          {ASSET_LINEAGES.map((lineage) => (
            <button className="archive-item lineage-menu-item" key={lineage.id} onClick={() => onOpenLineage(lineage.id)}>
              <TeamPill abbr="NYK" />
              <span>
                <span className="t">{lineage.shortTitle}</span>
                <span className="s">Trace the verified asset path</span>
              </span>
              <span className="lineage-open" aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </section>
      <section className="menu-card">
        <h3>How To Play</h3>
        <ol className="howto-list">
          <li><span className="n">1</span><span>You're the GM. Reconstruct the real moves a front office made to turn the starting player into the target.</span></li>
          <li><span className="n">2</span><span>Fill the chain in order. Each link asks who came back in that transaction.</span></li>
          <li><span className="n">3</span><span>Wrong guesses burn a possession and reset the clock to 14.</span></li>
          <li><span className="n">4</span><span>When the clock expires, you get a stronger hint and lose a possession.</span></li>
        </ol>
      </section>
    </>
  )
}

function AssetNode({ node, emphasized = false }: { node: AssetLineageNode; emphasized?: boolean }) {
  return (
    <article className={`asset-node ${emphasized ? 'emphasized' : ''}`}>
      <div className="asset-node-topline">
        <span>{node.label} · {node.year}</span>
        <span className="asset-node-teams">
          {node.teams.map((team) => <TeamPill key={team} abbr={team} />)}
        </span>
      </div>
      <h2>{node.title}</h2>
      <p>{node.detail}</p>
    </article>
  )
}

function AssetLineageView({ lineage, onMenu }: { lineage: AssetLineage; onMenu: () => void }) {
  const pathNodes = lineage.nodes
    .filter((node) => node.lane === 'contribution')
    .sort((a, b) => a.order - b.order)
  const contextNodes = lineage.nodes
    .filter((node) => node.lane === 'context')
    .sort((a, b) => a.order - b.order)
  const branchEdge = lineage.edges.find((edge) => !edge.onContributionPath && pathNodes.some((node) => node.id === edge.from))

  return (
    <main className="lineage-view">
      <button className="plain lineage-back" onClick={onMenu}>← BACK TO MENU</button>
      <div className="lineage-heading">
        <div className="lineage-kicker">Verified asset lineage</div>
        <h1>{lineage.title}</h1>
        <p>{lineage.claim}</p>
      </div>

      <section className="lineage-path" aria-label={lineage.shortTitle}>
        {pathNodes.map((node, index) => {
          const previous = pathNodes[index - 1]
          const edge = previous
            ? lineage.edges.find((candidate) => candidate.from === previous.id && candidate.to === node.id)
            : null
          return (
            <div key={node.id} className="lineage-stage">
              {edge && <div className="asset-connector"><span>{edge.label}</span></div>}
              <AssetNode node={node} emphasized={node.id === lineage.targetNodeId} />
              {branchEdge?.from === node.id && (
                <aside className="context-branch" aria-label="Additional return that did not continue to the OG trade">
                  <div className="branch-label">Sibling branch · not in the OG trade</div>
                  {contextNodes.map((contextNode, contextIndex) => (
                    <div key={contextNode.id}>
                      {contextIndex > 0 && <div className="context-connector">used to select</div>}
                      <AssetNode node={contextNode} />
                    </div>
                  ))}
                </aside>
              )}
            </div>
          )
        })}
      </section>

      <section className="lineage-clarifier">
        <strong>Lineage, not a player-for-player trade.</strong>
        <span> Keon Johnson was not traded for OG Anunoby. His draft rights produced multiple assets; only the Detroit pick continued into the 2023 package.</span>
      </section>

      <section className="lineage-sources">
        <h2>Sources</h2>
        {lineage.sources.map((source) => (
          <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>
        ))}
      </section>
    </main>
  )
}

function GameScreen({
  puzzleIdx,
  arrivedVia,
  onMenu,
  onStats,
}: {
  puzzleIdx: number
  arrivedVia: ShareSource | null
  onMenu: () => void
  onStats: (s: Stats) => void
}) {
  const puzzle = PUZZLES[puzzleIdx]
  const [session, setSession] = useState(0)
  const game = useGame(puzzle)
  const { state, start, guess } = game
  const recorded = useRef(false)
  const dayNum = dailyNumber()
  const isDaily = puzzleIdx === dailyIndex()

  useEffect(() => {
    recorded.current = false
  }, [session])

  useEffect(() => {
    if ((state.phase === 'won' || state.phase === 'lost') && !recorded.current) {
      recorded.current = true
      let s = recordResult({
        puzzleId: puzzle.id,
        dayNum,
        isDaily,
        won: state.phase === 'won',
        score: state.score,
        tier: resultTier(state),
      })
      if (arrivedVia) s = recordShareCompletion(arrivedVia)
      onStats(s)
    }
  }, [arrivedVia, dayNum, isDaily, onStats, puzzle.id, state])

  return (
    <>
      <Scoreboard game={game} onStart={start} />
      {state.lastEvent && <div className={`toast ${state.flash ?? 'make'}`}>{state.lastEvent}</div>}
      {(state.flash === 'turnover' || state.flash === 'violation') && <div className="vignette" />}
      <ChainView puzzle={puzzle} game={game} />
      <AnswerBox disabled={state.phase !== 'playing'} onGuess={guess} />
      {(state.phase === 'won' || state.phase === 'lost') && (
        <EndSheet
          puzzle={puzzle}
          game={game}
          dayNum={dayNum}
          isDaily={isDaily}
          onMenu={onMenu}
          onReplay={() => {
            setSession((s) => s + 1)
            game.reset()
          }}
        />
      )}
    </>
  )
}

export default function App() {
  const [view, setView] = useState<View>(DEEP_LINK ? 'game' : LINEAGE_LINK ? 'lineage' : 'menu')
  const [puzzleIdx, setPuzzleIdx] = useState(DEEP_LINK?.puzzleIdx ?? dailyIndex())
  const [lineageId, setLineageId] = useState(LINEAGE_LINK ?? ASSET_LINEAGES[0].id)
  const [stats, setStats] = useState<Stats>(() => loadStats())
  const [muted, setMutedState] = useState(() => isMuted())

  // Guarded with a ref, not just an empty dep array — React.StrictMode
  // (see main.tsx) deliberately double-invokes effects in dev, which would
  // otherwise double-count this persisted, non-idempotent counter.
  const arrivalRecorded = useRef(false)
  useEffect(() => {
    if (DEEP_LINK?.arrivedVia && !arrivalRecorded.current) {
      arrivalRecorded.current = true
      setStats(recordArrival(DEEP_LINK.arrivedVia))
    }
  }, [])

  // Keeps the address bar reflecting whatever's on screen, so it stays
  // shareable/bookmarkable and a refresh mid-game reopens the same puzzle.
  useEffect(() => {
    const params = new URLSearchParams()
    if (view === 'game') {
      const isDaily = puzzleIdx === dailyIndex()
      if (isDaily) params.set('d', String(dailyNumber()))
      params.set('p', PUZZLES[puzzleIdx].id)
    } else if (view === 'lineage') {
      params.set('lineage', lineageId)
    }
    const qs = params.toString()
    const url = qs ? `${window.location.pathname}?${qs}` : window.location.pathname
    window.history.replaceState(null, '', url)
  }, [view, puzzleIdx, lineageId])

  function play(idx: number) {
    setPuzzleIdx(idx)
    setView('game')
  }

  function openLineage(id: string) {
    setLineageId(id)
    setView('lineage')
  }

  function toggleMuted() {
    const next = !muted
    setMuted(next)
    setMutedState(next)
  }

  const arrivedVia = view === 'game' && puzzleIdx === DEEP_LINK?.puzzleIdx ? DEEP_LINK.arrivedVia : null

  return (
    <div className="app">
      <svg className="court-bg" viewBox="0 0 460 920" aria-hidden="true">
        <rect x="80" y="0" width="300" height="920" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="230" cy="460" r="84" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M80 120h300M150 0v190h160V0M150 920V730h160v190M80 800h300" fill="none" stroke="currentColor" strokeWidth="4" />
      </svg>
      <Header stats={stats} onHome={() => setView('menu')} muted={muted} onToggleMuted={toggleMuted} />
      {view === 'menu' && <Menu stats={stats} onPlay={play} onOpenLineage={openLineage} />}
      {view === 'game' && (
        <GameScreen
          key={`${puzzleIdx}-${view}`}
          puzzleIdx={puzzleIdx}
          arrivedVia={arrivedVia}
          onMenu={() => setView('menu')}
          onStats={setStats}
        />
      )}
      {view === 'lineage' && (
        <AssetLineageView
          lineage={ASSET_LINEAGES.find((lineage) => lineage.id === lineageId) ?? ASSET_LINEAGES[0]}
          onMenu={() => setView('menu')}
        />
      )}
    </div>
  )
}
