// Per-device only — counts this browser's own arrivals/completions via a
// shared link. NOT aggregate cross-user analytics; that needs a backend to
// collect events from other people's devices. See GROWTH_PLAN.md §8.
export interface ShareAttribution {
  arrivals: { share: number; challenge: number }
  completions: { share: number; challenge: number }
}

export interface Stats {
  played: number
  wins: number
  streak: number
  bestStreak: number
  bestScore: number
  lastWinDay: number | null
  lastPlayedDay: number | null
  tiers: Record<string, number>
  completed: Record<string, { won: boolean; score: number; tier: string }>
  shareAttribution: ShareAttribution
}

const KEY = 'casuals-stats-v1'

function defaultAttribution(): ShareAttribution {
  return { arrivals: { share: 0, challenge: 0 }, completions: { share: 0, challenge: 0 } }
}

export function loadStats(): Stats {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return {
        tiers: {},
        completed: {},
        shareAttribution: defaultAttribution(),
        ...parsed,
      }
    }
  } catch {}
  return {
    played: 0,
    wins: 0,
    streak: 0,
    bestStreak: 0,
    bestScore: 0,
    lastWinDay: null,
    lastPlayedDay: null,
    tiers: {},
    completed: {},
    shareAttribution: defaultAttribution(),
  }
}

export function saveStats(s: Stats) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s))
  } catch {}
}

export function recordResult(opts: {
  puzzleId: string
  dayNum: number
  isDaily: boolean
  won: boolean
  score: number
  tier: string
}): Stats {
  const s = loadStats()
  const first = !s.completed[opts.puzzleId]
  s.completed[opts.puzzleId] = { won: opts.won, score: opts.score, tier: opts.tier }
  if (first) {
    s.played += 1
    if (opts.won) s.wins += 1
    s.tiers[opts.tier] = (s.tiers[opts.tier] || 0) + 1
  }
  if (opts.score > s.bestScore) s.bestScore = opts.score
  if (opts.isDaily && s.lastPlayedDay !== opts.dayNum) {
    s.lastPlayedDay = opts.dayNum
    if (opts.won) {
      s.streak = s.lastWinDay === opts.dayNum - 1 ? s.streak + 1 : 1
      s.lastWinDay = opts.dayNum
      if (s.streak > s.bestStreak) s.bestStreak = s.streak
    } else {
      s.streak = 0
    }
  }
  saveStats(s)
  return s
}

export function recordArrival(source: 'share' | 'challenge'): Stats {
  const s = loadStats()
  s.shareAttribution.arrivals[source] += 1
  saveStats(s)
  return s
}

export function recordShareCompletion(source: 'share' | 'challenge'): Stats {
  const s = loadStats()
  s.shareAttribution.completions[source] += 1
  saveStats(s)
  return s
}
