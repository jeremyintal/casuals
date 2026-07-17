import assert from 'node:assert/strict'
import { PLAYER_LIST, normalizeName } from '../src/data/players'
import { ASSET_LINEAGES } from '../src/data/assetLineages'
import { PUZZLES, totalMoves } from '../src/data/puzzles'
import { TEAMS } from '../src/data/teams'

const normalizedPlayers = new Set(PLAYER_LIST.map(normalizeName))
const puzzleIds = new Set<string>()

for (const puzzle of PUZZLES) {
  assert(!puzzleIds.has(puzzle.id), `Duplicate puzzle id: ${puzzle.id}`)
  puzzleIds.add(puzzle.id)

  assert(TEAMS[puzzle.franchise], `${puzzle.id}: unknown franchise ${puzzle.franchise}`)
  assert(TEAMS[puzzle.start.team], `${puzzle.id}: unknown start team ${puzzle.start.team}`)
  assert(puzzle.start.player.trim(), `${puzzle.id}: start.player is required`)
  assert(puzzle.links.length >= 2 && puzzle.links.length <= 4, `${puzzle.id}: expected 2-4 question links`)
  assert(totalMoves(puzzle) >= 3 && totalMoves(puzzle) <= 5, `${puzzle.id}: expected 3-5 total moves`)

  for (const [index, link] of puzzle.links.entries()) {
    const label = `${puzzle.id} link ${index + 1}`
    assert(link.question.trim(), `${label}: question is required`)
    assert(link.reveal.trim(), `${label}: reveal is required`)
    assert(link.hint1.trim(), `${label}: hint1 is required`)
    assert(link.hint2.trim(), `${label}: hint2 is required`)
    assert(link.answers.length > 0, `${label}: at least one answer is required`)
    assert(
      link.answers.some((answer) => normalizeName(answer) === normalizeName(link.canonical)),
      `${label}: canonical answer must be accepted`
    )

    for (const team of link.teams) assert(TEAMS[team], `${label}: unknown team ${team}`)
    for (const answer of link.answers) {
      assert(normalizedPlayers.has(normalizeName(answer)), `${label}: autocomplete is missing ${answer}`)
    }
  }

  for (const team of puzzle.final.teams) assert(TEAMS[team], `${puzzle.id}: unknown final team ${team}`)
  assert(puzzle.final.reveal.trim(), `${puzzle.id}: final reveal is required`)
  assert(puzzle.target.name.trim(), `${puzzle.id}: target name is required`)
  assert(puzzle.epilogue.trim(), `${puzzle.id}: epilogue is required`)
}

const minnesota = PUZZLES.find((puzzle) => puzzle.id === 'min-lavine-gobert')
assert(minnesota, 'Missing min-lavine-gobert puzzle')
assert.equal(minnesota.target.name, 'Rudy Gobert')
assert.deepEqual(minnesota.links[0].answers, ['Jimmy Butler', 'Justin Patton'])
assert.deepEqual(minnesota.links[1].answers, ['Jerryd Bayless', 'Robert Covington', 'Dario Šarić'])
assert.deepEqual(minnesota.links[2].answers, ['Evan Turner', 'Malik Beasley', 'Juan Hernangómez', 'Jarred Vanderbilt'])

const sacramento = PUZZLES.find((puzzle) => puzzle.id === 'sac-cousins-lavine')
assert(sacramento, 'Missing sac-cousins-lavine puzzle')
assert.equal(sacramento.target.name, 'Zach LaVine')
assert.deepEqual(sacramento.links[0].answers, ['Buddy Hield', 'Tyreke Evans', 'Langston Galloway'])
assert.deepEqual(sacramento.links[1].answers, ['Domantas Sabonis', 'Justin Holiday', 'Jeremy Lamb'])
assert.deepEqual(sacramento.links[2].answers, ['Kevin Huerter'])

const boston = PUZZLES.find((puzzle) => puzzle.id === 'bos-garnett-irving')
assert(boston, 'Missing bos-garnett-irving puzzle')
assert.equal(boston.target.name, 'Kyrie Irving')
assert.deepEqual(boston.links[0].answers, [
  'Gerald Wallace',
  'Kris Humphries',
  'Keith Bogans',
  'MarShon Brooks',
  'Kris Joseph',
])
assert.deepEqual(boston.links[1].answers, ['Dwight Powell', 'Erik Murphy', 'Malcolm Thomas', 'John Lucas III'])
assert.deepEqual(boston.links[2].answers, ['Jae Crowder', 'Jameer Nelson', 'Brandan Wright'])

const lineageIds = new Set<string>()
for (const lineage of ASSET_LINEAGES) {
  assert(!lineageIds.has(lineage.id), `Duplicate asset lineage id: ${lineage.id}`)
  lineageIds.add(lineage.id)

  const nodeIds = new Set(lineage.nodes.map((node) => node.id))
  assert.equal(nodeIds.size, lineage.nodes.length, `${lineage.id}: node ids must be unique`)
  assert(nodeIds.has(lineage.startNodeId), `${lineage.id}: missing start node`)
  assert(nodeIds.has(lineage.targetNodeId), `${lineage.id}: missing target node`)
  assert(lineage.sources.length >= 2, `${lineage.id}: at least two sources are required`)
  assert(
    lineage.sources.every((source) => source.url.startsWith('https://www.nba.com/')),
    `${lineage.id}: sources must be official NBA or team releases`
  )

  for (const edge of lineage.edges) {
    assert(nodeIds.has(edge.from), `${lineage.id}: edge references unknown source ${edge.from}`)
    assert(nodeIds.has(edge.to), `${lineage.id}: edge references unknown target ${edge.to}`)
  }
}

const keonToOg = ASSET_LINEAGES.find((lineage) => lineage.id === 'nyk-keon-og')
assert(keonToOg, 'Missing nyk-keon-og asset lineage')
assert.equal(keonToOg.claim, 'This asset helped contribute to the acquisition of OG Anunoby.')
assert.deepEqual(
  keonToOg.edges.filter((edge) => edge.onContributionPath).map((edge) => [edge.from, edge.to]),
  [
    ['keon-rights', 'trade-down-2021'],
    ['trade-down-2021', 'det-2024-second'],
    ['det-2024-second', 'og-trade-2023'],
    ['og-trade-2023', 'og-anunoby'],
  ]
)
assert(
  keonToOg.edges.some(
    (edge) => edge.from === 'pick-25' && edge.to === 'quentin-grimes' && !edge.onContributionPath
  ),
  'nyk-keon-og: Quentin Grimes must remain a non-contributing sibling branch'
)

console.log(
  `Validated ${PUZZLES.length} puzzles, ${ASSET_LINEAGES.length} asset lineage, and ${PLAYER_LIST.length} autocomplete names.`
)
