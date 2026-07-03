// Renders pipeline/data/candidates.json into a human-readable review file.
// Usage: node pipeline/curate.mjs [count=100]
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const DATA = path.join(here, 'data')
const count = Number(process.argv[2] ?? 100)

const candidates = JSON.parse(await readFile(path.join(DATA, 'candidates.json'), 'utf8'))
const chosen = candidates.slice(0, count)

const lines = []
lines.push('# Casuals — candidate chain curation queue')
lines.push('')
lines.push(
  'Auto-generated, unverified candidates ranked by a heuristic score (endpoint fame, chain length, mid-chain obscurity). ' +
    'A human must verify every fact against Basketball-Reference or another primary source before it becomes a puzzle — see checklist below. ' +
    'Regenerate with `node pipeline/fetch.mjs && node pipeline/parse.mjs && node pipeline/graph.mjs && node pipeline/curate.mjs`.'
)
lines.push('')
lines.push('## Verification checklist per candidate')
lines.push('')
lines.push('- [ ] Every transaction date and full deal text checked against a primary source')
lines.push('- [ ] No player included via a stripped/mis-parsed parenthetical (e.g. "later selected" picks)')
lines.push('- [ ] Chain does not route through a waive → separate free-agent signing (invalid edge per `AGENTS.md`)')
lines.push('- [ ] Multi-team trade legs correctly attributed to each team')
lines.push('- [ ] Draft-pick assets identified with enough context to phrase a fair question, or the link is dropped')
lines.push('- [ ] Reveal text written in the game\'s voice; hint1 (free) and hint2 (post-violation) written')
lines.push('- [ ] All player names added to `src/data/players.ts` with correct diacritics')
lines.push('- [ ] Added to `src/data/puzzles.ts` following the `Puzzle` schema in `AGENTS.md`')
lines.push('')
lines.push('---')
lines.push('')

for (const [i, c] of chosen.entries()) {
  lines.push(`## ${i + 1}. [score ${c.score}] ${c.team} — ${c.startDate} → ${c.endDate} (${c.links.length} links)`)
  lines.push('')
  lines.push(`**Start:** ${c.startPlayers.join(' / ')}`)
  lines.push(`**Target:** ${c.endPlayers.join(' / ')}`)
  lines.push('')
  for (const [j, l] of c.links.entries()) {
    lines.push(`${j + 1}. **${l.date}** (${l.teams.join('-')}) — sent \`${l.sent.join(', ')}\`, received \`${l.received.join(', ')}\``)
    lines.push(`   > ${l.text}`)
  }
  lines.push('')
}

await writeFile(path.join(DATA, 'curation-queue.md'), lines.join('\n'))
console.log(`wrote ${chosen.length} candidates to pipeline/data/curation-queue.md`)
