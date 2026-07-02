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
}

const KEY = 'casuals-stats-v1'

export function loadStats(): Stats {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { tiers: {}, completed: {}, ...JSON.parse(raw) }
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
