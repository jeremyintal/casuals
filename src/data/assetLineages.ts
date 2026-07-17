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
]
