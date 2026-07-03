// Builds an asset-lineage graph from pipeline/data/transactions.json and
// enumerates candidate "six degrees" chains: a player a franchise acquired
// (via trade, waiver claim, or signing) followed by 1-4 further trades that
// each send out an asset received in the previous step, ending on a target
// player. Scored heuristically; a human curator makes the real call.
//
// NOTE ON SCOPE: BBRef's transactions feed does not include draft-day
// selections, so chains here always start at a trade/waiver-claim/sign
// acquisition, not a draft pick. Draft-anchored chains (like the shipped
// Tony Bradley -> Luka Doncic puzzle) still need to be hand-built by cross-
// referencing a draft results source — this generator surfaces the
// post-acquisition trade tree, which a curator can prepend a draft step to.
//
// Usage: node pipeline/graph.mjs [minLinks=2] [maxLinks=4] [topN=150]
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { isStar } from './stars.mjs'

const here = path.dirname(fileURLToPath(import.meta.url))
const DATA = path.join(here, 'data')

const minLinks = Number(process.argv[2] ?? 2)
const maxLinks = Number(process.argv[3] ?? 4)
const topN = Number(process.argv[4] ?? 150)

const transactions = JSON.parse(await readFile(path.join(DATA, 'transactions.json'), 'utf8'))

// Per-team chronological list of "moves": an acquisition (playerIds gained)
// paired with what was given up, tagged with the source transaction.
const byTeam = new Map() // team -> [{txn, date, inPlayers:[{id,name}], inBundle:[assets], outPlayers:[{id,name}]}]

for (const t of transactions) {
  if (!t.teams || !t.date) continue
  if (t.type !== 'trade' && t.type !== 'waiver-claim') continue
  for (const [team, ledger] of Object.entries(t.teams)) {
    const inPlayers = ledger.in.filter((a) => a.kind === 'player')
    const outPlayers = ledger.out.filter((a) => a.kind === 'player')
    if (!inPlayers.length && !outPlayers.length) continue
    if (!byTeam.has(team)) byTeam.set(team, [])
    byTeam.get(team).push({
      txn: t,
      date: t.date,
      inPlayers,
      inBundle: ledger.in,
      outPlayers,
      outBundle: ledger.out,
    })
  }
}
for (const moves of byTeam.values()) moves.sort((a, b) => (a.date < b.date ? -1 : 1))

const candidates = []

function fameScore(name) {
  return isStar(name) ? 1 : 0
}

function walk(team, moves, startIdx, chain, heldPlayerIds) {
  if (chain.length >= 1 && chain.length >= minLinks) {
    emitCandidate(team, chain)
  }
  if (chain.length >= maxLinks) return
  for (let i = startIdx; i < moves.length; i++) {
    const mv = moves[i]
    if (chain.length > 0 && mv.date <= chain[chain.length - 1].move.date) continue
    const sentHeld = mv.outPlayers.filter((p) => heldPlayerIds.has(p.id))
    if (!sentHeld.length) continue
    if (!mv.inPlayers.length) continue // dead end for continuing the player chain
    const nextHeld = new Set(mv.inPlayers.map((p) => p.id))
    chain.push({ move: mv, sentHeld })
    walk(team, moves, i + 1, chain, nextHeld)
    chain.pop()
  }
}

function emitCandidate(team, chain) {
  const first = chain[0]
  const last = chain[chain.length - 1]
  const startNames = first.move.outPlayers.map((p) => p.name)
  const endNames = last.move.inPlayers.map((p) => p.name)
  const midObscure = chain
    .slice(0, -1)
    .flatMap((l) => l.move.inPlayers.map((p) => p.name))
    .filter((n) => !isStar(n))
  const score =
    Math.max(...startNames.map(fameScore), 0) * 3 +
    Math.max(...endNames.map(fameScore), 0) * 5 +
    Math.min(chain.length, 4) * 2 +
    (chain.length >= 3 ? 2 : 0) +
    (midObscure.length ? 1 : 0)
  if (score <= 0) return
  candidates.push({
    team,
    score,
    startDate: first.move.date,
    endDate: last.move.date,
    startPlayers: startNames,
    endPlayers: endNames,
    links: chain.map((l) => ({
      date: l.move.date,
      sent: l.sentHeld.map((p) => p.name),
      received: l.move.inPlayers.map((p) => p.name),
      text: l.move.txn.text,
      teams: Object.keys(l.move.txn.teams),
    })),
  })
}

for (const [team, moves] of byTeam) {
  for (let i = 0; i < moves.length; i++) {
    const mv = moves[i]
    if (!mv.inPlayers.length) continue
    const held = new Set(mv.inPlayers.map((p) => p.id))
    walk(team, moves, i + 1, [{ move: mv, sentHeld: mv.outPlayers }], held)
  }
}

candidates.sort((a, b) => b.score - a.score)

// Dedupe near-identical candidates (same team + same start/end players + same length)
const seen = new Set()
const deduped = []
for (const c of candidates) {
  const key = `${c.team}|${c.startPlayers.join(',')}|${c.endPlayers.join(',')}|${c.links.length}`
  if (seen.has(key)) continue
  seen.add(key)
  deduped.push(c)
}

const top = deduped.slice(0, topN)
await mkdir(DATA, { recursive: true })
await writeFile(path.join(DATA, 'candidates.json'), JSON.stringify(top, null, 1))
console.log(`generated ${candidates.length} raw candidates, ${deduped.length} deduped, wrote top ${top.length}`)
