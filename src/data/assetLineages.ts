export type AssetNodeKind = 'draft-rights' | 'draft-pick' | 'player' | 'transaction' | 'acquisition'

export interface AssetLineageNode {
  id: string
  kind: AssetNodeKind
  year: number
  label: string
  title: string
  detail: string
  teams: string[]
  lane: 'contribution' | 'context'
  order: number
}

export interface AssetLineageEdge {
  from: string
  to: string
  label: string
  onContributionPath: boolean
}

export interface AssetLineage {
  id: string
  title: string
  shortTitle: string
  claim: string
  clarification: string
  startNodeId: string
  targetNodeId: string
  nodes: AssetLineageNode[]
  edges: AssetLineageEdge[]
  sources: { label: string; url: string }[]
}

export const ASSET_LINEAGES: AssetLineage[] = [
  {
    id: 'nyk-keon-og',
    title: 'How the No. 21 draft asset helped New York acquire OG Anunoby',
    shortTitle: 'Keon Johnson pick → OG Anunoby',
    claim: 'This asset helped contribute to the acquisition of OG Anunoby.',
    clarification: 'Keon Johnson was not traded for OG Anunoby. His draft rights produced multiple assets; only the Detroit pick continued into the 2023 package.',
    startNodeId: 'keon-rights',
    targetNodeId: 'og-anunoby',
    nodes: [
      {
        id: 'keon-rights',
        kind: 'draft-rights',
        year: 2021,
        label: 'Starting asset',
        title: 'No. 21 draft rights: Keon Johnson',
        detail: 'New York held pick No. 21 and selected Johnson for a draft-night trade with the Clippers.',
        teams: ['NYK', 'LAC'],
        lane: 'contribution',
        order: 1,
      },
      {
        id: 'trade-down-2021',
        kind: 'transaction',
        year: 2021,
        label: 'Draft-night trade',
        title: 'Knicks trade down from No. 21',
        detail: 'The Clippers acquired Johnson\'s draft rights. New York received No. 25 and Detroit\'s 2024 second-round pick.',
        teams: ['NYK', 'LAC'],
        lane: 'contribution',
        order: 2,
      },
      {
        id: 'pick-25',
        kind: 'draft-pick',
        year: 2021,
        label: 'Additional return',
        title: 'Pick No. 25',
        detail: 'The other asset New York received in the trade-down.',
        teams: ['NYK'],
        lane: 'context',
        order: 3,
      },
      {
        id: 'quentin-grimes',
        kind: 'player',
        year: 2021,
        label: 'Selected with No. 25',
        title: 'Quentin Grimes',
        detail: 'A sibling branch of the trade-down return. Grimes was not included in the OG Anunoby trade.',
        teams: ['NYK'],
        lane: 'context',
        order: 4,
      },
      {
        id: 'det-2024-second',
        kind: 'draft-pick',
        year: 2024,
        label: 'Asset carried forward',
        title: 'Detroit 2024 second-round pick',
        detail: 'New York retained this pick after the 2021 trade-down and later used it as trade consideration.',
        teams: ['NYK'],
        lane: 'contribution',
        order: 3,
      },
      {
        id: 'og-trade-2023',
        kind: 'transaction',
        year: 2023,
        label: 'Later trade package',
        title: 'Knicks send three assets to Toronto',
        detail: 'RJ Barrett, Immanuel Quickley, and the 2024 second-round pick via Detroit went to the Raptors.',
        teams: ['NYK', 'TOR'],
        lane: 'contribution',
        order: 4,
      },
      {
        id: 'og-anunoby',
        kind: 'acquisition',
        year: 2023,
        label: 'Acquisition',
        title: 'OG Anunoby',
        detail: 'New York received Anunoby, Precious Achiuwa, and Malachi Flynn in the complete trade.',
        teams: ['NYK', 'TOR'],
        lane: 'contribution',
        order: 5,
      },
    ],
    edges: [
      { from: 'keon-rights', to: 'trade-down-2021', label: 'draft rights traded', onContributionPath: true },
      { from: 'trade-down-2021', to: 'det-2024-second', label: 'future pick received', onContributionPath: true },
      { from: 'trade-down-2021', to: 'pick-25', label: 'additional return', onContributionPath: false },
      { from: 'pick-25', to: 'quentin-grimes', label: 'used to select', onContributionPath: false },
      { from: 'det-2024-second', to: 'og-trade-2023', label: 'included in package', onContributionPath: true },
      { from: 'og-trade-2023', to: 'og-anunoby', label: 'helped acquire', onContributionPath: true },
    ],
    sources: [
      {
        label: 'LA Clippers: 2021 draft-rights trade',
        url: 'https://www.nba.com/clippers/news/la-clippers-acquire-draft-rights-keon-johnson',
      },
      {
        label: 'NBA: 2023 Knicks-Raptors trade details',
        url: 'https://www.nba.com/news/raptors-knicks-trade-og-anunoby-rj-barrett',
      },
      {
        label: 'New York Knicks: OG Anunoby acquisition',
        url: 'https://www.nba.com/knicks/news/new-york-knicks-acquire-og-anunoby-precious-achiuwa-and-malachi-flynn',
      },
    ],
  },
  {
    id: 'mil-jrue-pick-bridges',
    title: 'How a pick from the Jrue Holiday trade helped New York acquire Mikal Bridges',
    shortTitle: 'Jrue Holiday trade pick → Mikal Bridges',
    claim: 'This draft asset helped contribute to the acquisition of Mikal Bridges.',
    clarification: 'Jrue Holiday was not traded for Mikal Bridges. The same Milwaukee 2025 first-round pick moved through four teams before New York included it in the Bridges package.',
    startNodeId: 'jrue-trade-2020',
    targetNodeId: 'mikal-bridges',
    nodes: [
      {
        id: 'jrue-trade-2020',
        kind: 'transaction',
        year: 2020,
        label: 'Starting transaction',
        title: 'Milwaukee acquires Jrue Holiday',
        detail: 'The Bucks sent New Orleans Eric Bledsoe, first-round picks in 2025 and 2027, and swap rights in 2024 and 2026.',
        teams: ['MIL', 'NOP'],
        lane: 'contribution',
        order: 1,
      },
      {
        id: 'nop-mil-2025-first',
        kind: 'draft-pick',
        year: 2020,
        label: 'New Orleans controls asset',
        title: 'Milwaukee 2025 first-round pick',
        detail: 'The pick was consideration Milwaukee conveyed to New Orleans in the Holiday trade; it was not a newly created pick.',
        teams: ['NOP', 'MIL'],
        lane: 'contribution',
        order: 2,
      },
      {
        id: 'cj-trade-2022',
        kind: 'transaction',
        year: 2022,
        label: 'Fallback consideration',
        title: 'Portland trades CJ McCollum to New Orleans',
        detail: 'When the protected 2022 first did not convey, Portland received Milwaukee\'s top-four-protected 2025 first as the fallback asset.',
        teams: ['POR', 'NOP'],
        lane: 'contribution',
        order: 3,
      },
      {
        id: 'por-mil-2025-first',
        kind: 'draft-pick',
        year: 2022,
        label: 'Portland controls asset',
        title: 'Milwaukee 2025 first-round pick',
        detail: 'Portland held the pick through the CJ McCollum return before using it in a separate trade with Detroit.',
        teams: ['POR', 'MIL'],
        lane: 'contribution',
        order: 4,
      },
      {
        id: 'grant-trade-2022',
        kind: 'transaction',
        year: 2022,
        label: 'Jerami Grant trade',
        title: 'Portland sends the pick to Detroit',
        detail: 'The Milwaukee first joined Gabriele Procida\'s rights and two second-round picks in Portland\'s package for Jerami Grant and Ismael Kamagate\'s rights.',
        teams: ['POR', 'DET'],
        lane: 'contribution',
        order: 5,
      },
      {
        id: 'det-mil-2025-first',
        kind: 'draft-pick',
        year: 2022,
        label: 'Detroit controls asset',
        title: 'Milwaukee 2025 first-round pick',
        detail: 'Detroit briefly controlled the same top-four-protected pick after trading Jerami Grant.',
        teams: ['DET', 'MIL'],
        lane: 'contribution',
        order: 6,
      },
      {
        id: 'duren-trade-2022',
        kind: 'transaction',
        year: 2022,
        label: 'Draft-night trade',
        title: 'Detroit acquires Jalen Duren and Kemba Walker',
        detail: 'New York sent Walker and Duren\'s draft rights to Detroit in exchange for the future Milwaukee first.',
        teams: ['DET', 'NYK'],
        lane: 'contribution',
        order: 7,
      },
      {
        id: 'nyk-mil-2025-first',
        kind: 'draft-pick',
        year: 2022,
        label: 'New York controls asset',
        title: 'Milwaukee 2025 first-round pick',
        detail: 'The Knicks retained the protected pick for two years before including it in the Mikal Bridges package.',
        teams: ['NYK', 'MIL'],
        lane: 'contribution',
        order: 8,
      },
      {
        id: 'bridges-trade-2024',
        kind: 'transaction',
        year: 2024,
        label: 'Later trade package',
        title: 'Knicks send five first-round picks to Brooklyn',
        detail: 'The package included four unprotected Knicks firsts, Milwaukee\'s protected 2025 first, players, a pick swap, and a second-round pick.',
        teams: ['NYK', 'BKN'],
        lane: 'contribution',
        order: 9,
      },
      {
        id: 'mikal-bridges',
        kind: 'acquisition',
        year: 2024,
        label: 'Acquisition',
        title: 'Mikal Bridges',
        detail: 'New York received Bridges, Keita Bates-Diop, Juan Pablo Vaulet\'s draft rights, and a future second-round pick.',
        teams: ['NYK', 'BKN'],
        lane: 'contribution',
        order: 10,
      },
    ],
    edges: [
      { from: 'jrue-trade-2020', to: 'nop-mil-2025-first', label: 'pick conveyed', onContributionPath: true },
      { from: 'nop-mil-2025-first', to: 'cj-trade-2022', label: 'used as fallback', onContributionPath: true },
      { from: 'cj-trade-2022', to: 'por-mil-2025-first', label: 'fallback transferred', onContributionPath: true },
      { from: 'por-mil-2025-first', to: 'grant-trade-2022', label: 'included in package', onContributionPath: true },
      { from: 'grant-trade-2022', to: 'det-mil-2025-first', label: 'pick transferred', onContributionPath: true },
      { from: 'det-mil-2025-first', to: 'duren-trade-2022', label: 'included in package', onContributionPath: true },
      { from: 'duren-trade-2022', to: 'nyk-mil-2025-first', label: 'pick transferred', onContributionPath: true },
      { from: 'nyk-mil-2025-first', to: 'bridges-trade-2024', label: 'included in package', onContributionPath: true },
      { from: 'bridges-trade-2024', to: 'mikal-bridges', label: 'helped acquire', onContributionPath: true },
    ],
    sources: [
      {
        label: 'Milwaukee Bucks: Jrue Holiday four-team trade',
        url: 'https://www.nba.com/bucks/news/milwaukee-bucks-acquire-jrue-holiday-new-orleans-pelicans-part-four-team-deal',
      },
      {
        label: 'New Orleans Pelicans: CJ McCollum trade',
        url: 'https://www.nba.com/pelicans/news/pelicans-acquire-cj-mccollum-larry-nance-jr-and-tony-snell',
      },
      {
        label: 'ESPN: CJ trade fallback became Milwaukee 2025 first',
        url: 'https://www.espn.com.au/nba/story/_/id/35026261/the-hoop-collective-victor-wembanyama-rise-spell-end-team-usa-dynasty',
      },
      {
        label: 'Detroit Pistons: Jerami Grant trade',
        url: 'https://www.nba.com/pistons/news/detroit-pistons-acquire-rights-to-gabriele-procida-no-36-pick-in-2022-nba-draft-and-future-draft-considerations-from-portland-trail-blazers-in-exchange-for-jerami-grant-and-rights-to-no-46-selecti',
      },
      {
        label: 'New York Knicks: Jalen Duren draft-rights trade',
        url: 'https://www.nba.com/knicks/news/knicks-acquire-future-first-round-draft-pick',
      },
      {
        label: 'Brooklyn Nets: Mikal Bridges trade',
        url: 'https://www.nba.com/nets/news/brooklyn-nets-complete-trade-with-new-york-knicks',
      },
    ],
  },
]
