import { useCallback, useEffect, useRef, useState } from 'react'
import type { Puzzle } from '../data/puzzles'
import { normalizeName } from '../data/players'
import { sounds } from './sounds'

export const SHOT_CLOCK = 24
export const TURNOVER_RESET = 14
export const POSSESSIONS = 6
export const BUZZER_WINDOW = 3

export type Phase = 'ready' | 'playing' | 'won' | 'lost'
export type FlashKind = 'make' | 'turnover' | 'violation' | null

export interface LinkResult {
  solved: boolean
  turnovers: number
  violations: number
  banked: number
  buzzerBeater: boolean
}

export interface GameState {
  phase: Phase
  linkIdx: number
  clock: number
  possessionsLeft: number
  results: LinkResult[]
  score: number
  elapsedMs: number
  flash: FlashKind
  lastEvent: string | null
}

function initialState(linkCount: number): GameState {
  return {
    phase: 'ready',
    linkIdx: 0,
    clock: SHOT_CLOCK,
    possessionsLeft: POSSESSIONS,
    results: freshResults(linkCount),
    score: 0,
    elapsedMs: 0,
    flash: null,
    lastEvent: null,
  }
}

function freshResults(n: number): LinkResult[] {
  return Array.from({ length: n }, () => ({
    solved: false,
    turnovers: 0,
    violations: 0,
    banked: 0,
    buzzerBeater: false,
  }))
}

export function useGame(puzzle: Puzzle) {
  const [state, setState] = useState<GameState>(() => initialState(puzzle.links.length))
  const stateRef = useRef(state)
  stateRef.current = state
  const lastTickSound = useRef(0)

  useEffect(() => {
    if (state.phase !== 'playing') return
    const iv = setInterval(() => {
      setState((s) => {
        if (s.phase !== 'playing') return s
        const clock = s.clock - 0.1
        const elapsedMs = s.elapsedMs + 100
        if (clock <= 5.05 && clock > 0) {
          const whole = Math.ceil(clock)
          if (whole !== lastTickSound.current) {
            lastTickSound.current = whole
            sounds.tick()
          }
        }
        if (clock <= 0) {
          sounds.buzzer()
          const results = s.results.map((r, i) =>
            i === s.linkIdx ? { ...r, violations: r.violations + 1 } : r
          )
          const possessionsLeft = s.possessionsLeft - 1
          if (possessionsLeft <= 0) {
            return {
              ...s,
              clock: 0,
              elapsedMs,
              results,
              possessionsLeft: 0,
              phase: 'lost',
              flash: 'violation',
              lastEvent: 'Shot clock violation — and that was your last possession.',
            }
          }
          return {
            ...s,
            clock: SHOT_CLOCK,
            elapsedMs,
            results,
            possessionsLeft,
            flash: 'violation',
            lastEvent: 'Shot clock violation. A hint is revealed — but it cost you a possession.',
          }
        }
        return { ...s, clock, elapsedMs }
      })
    }, 100)
    return () => clearInterval(iv)
  }, [state.phase])

  useEffect(() => {
    if (!state.flash) return
    const t = setTimeout(() => setState((s) => ({ ...s, flash: null })), 900)
    return () => clearTimeout(t)
  }, [state.flash])

  const start = useCallback(() => {
    setState((s) => (s.phase === 'ready' ? { ...s, phase: 'playing' } : s))
  }, [])

  const reset = useCallback(() => {
    lastTickSound.current = 0
    setState(initialState(puzzle.links.length))
  }, [puzzle.links.length])

  const guess = useCallback(
    (name: string) => {
      const s = stateRef.current
      if (s.phase !== 'playing') return
      const link = puzzle.links[s.linkIdx]
      const ok = link.answers.some((a) => normalizeName(a) === normalizeName(name))
      if (ok) {
        const banked = Math.max(1, Math.ceil(s.clock))
        const buzzerBeater = s.clock <= BUZZER_WINDOW
        const bonus = buzzerBeater ? 25 : 0
        const results = s.results.map((r, i) =>
          i === s.linkIdx ? { ...r, solved: true, banked, buzzerBeater } : r
        )
        const isLast = s.linkIdx === puzzle.links.length - 1
        if (isLast) {
          sounds.crowd()
          setState({
            ...s,
            results,
            score: s.score + banked + bonus + s.possessionsLeft * 100,
            phase: 'won',
            flash: 'make',
            lastEvent: buzzerBeater ? 'BANG! Buzzer beater to finish the chain!' : 'Chain complete!',
          })
        } else {
          sounds.swish()
          setState({
            ...s,
            results,
            score: s.score + banked + bonus,
            linkIdx: s.linkIdx + 1,
            clock: SHOT_CLOCK,
            flash: 'make',
            lastEvent: buzzerBeater
              ? `Buzzer beater! +${banked} pts +25 bonus`
              : `Splash. +${banked} pts banked`,
          })
        }
      } else {
        sounds.clank()
        const results = s.results.map((r, i) =>
          i === s.linkIdx ? { ...r, turnovers: r.turnovers + 1 } : r
        )
        const possessionsLeft = s.possessionsLeft - 1
        if (possessionsLeft <= 0) {
          sounds.buzzer()
          setState({
            ...s,
            results,
            possessionsLeft: 0,
            phase: 'lost',
            flash: 'turnover',
            lastEvent: `${name}? Turnover — and you're out of possessions.`,
          })
        } else {
          setState({
            ...s,
            results,
            possessionsLeft,
            clock: TURNOVER_RESET,
            flash: 'turnover',
            lastEvent: `${name}? Turnover. Clock resets to 14.`,
          })
        }
      }
    },
    [puzzle]
  )

  return { state, start, guess, reset }
}

export type Tier = 'SICKO' | 'FILM JUNKIE' | 'LEAGUE PASS' | 'CERTIFIED CASUAL'

export function resultTier(state: GameState): Tier {
  if (state.phase === 'lost') return 'CERTIFIED CASUAL'
  const turnovers = state.results.reduce((a, r) => a + r.turnovers + r.violations, 0)
  if (turnovers === 0) return 'SICKO'
  if (turnovers <= 2) return 'FILM JUNKIE'
  return 'LEAGUE PASS'
}

export type ShareSource = 'share' | 'challenge'

function resultGrid(state: GameState): string {
  return state.results
    .map((r) => {
      if (!r.solved) return '⬛'
      if (r.violations > 0) return '🟥'
      if (r.turnovers > 0) return '🟧'
      return '🟩'
    })
    .join('')
}

function elapsedClock(state: GameState): string {
  const secs = Math.round(state.elapsedMs / 1000)
  const mm = Math.floor(secs / 60)
  const ss = String(secs % 60).padStart(2, '0')
  return `${mm}:${ss}`
}

// Deep link so a clicked share always lands on the exact puzzle being
// bragged about, not whatever the app defaults to that day. Daily puzzles
// link by day number (?d=); archive puzzles link by id (?p=) since "day"
// isn't meaningful once it's not the current day's rotation.
export function shareUrl(
  puzzle: Puzzle,
  dayNum: number,
  isDaily: boolean,
  source: ShareSource
): string {
  const params = new URLSearchParams()
  if (isDaily) params.set('d', String(dayNum))
  else params.set('p', puzzle.id)
  params.set('src', source)
  return `casuals.game/?${params.toString()}`
}

export function shareText(
  puzzle: Puzzle,
  state: GameState,
  dayNum: number,
  isDaily: boolean
): string {
  const tier = resultTier(state)
  const bb = state.results.some((r) => r.buzzerBeater) ? ' 💥' : ''
  return [
    `CASUALS #${dayNum} — ${tier}${bb}`,
    `${resultGrid(state)}  ⏱ ${elapsedClock(state)}  🏀 ${state.score} pts`,
    `${puzzle.start.title} → ${puzzle.target.name}`,
    shareUrl(puzzle, dayNum, isDaily, 'share'),
  ].join('\n')
}

// Direct-dare framing, not a recap — challenge shares convert better than
// broadcast shares because the recipient has a named reason to click.
export function challengeText(
  puzzle: Puzzle,
  state: GameState,
  dayNum: number,
  isDaily: boolean
): string {
  const tier = resultTier(state)
  return [
    `I got ${tier} in ${elapsedClock(state)} on today's Casuals. Think you can beat it?`,
    `${resultGrid(state)}  🏀 ${state.score} pts`,
    shareUrl(puzzle, dayNum, isDaily, 'challenge'),
  ].join('\n')
}
