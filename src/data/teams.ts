export interface Team {
  abbr: string
  name: string
  color: string
  color2: string
}

export const TEAMS: Record<string, Team> = {
  LAL: { abbr: 'LAL', name: 'Lakers', color: '#FDB927', color2: '#552583' },
  UTA: { abbr: 'UTA', name: 'Jazz', color: '#F9A01B', color2: '#002B5C' },
  NOP: { abbr: 'NOP', name: 'Pelicans', color: '#C8102E', color2: '#0C2340' },
  DAL: { abbr: 'DAL', name: 'Mavericks', color: '#00538C', color2: '#002B5E' },
  OKC: { abbr: 'OKC', name: 'Thunder', color: '#EF3B24', color2: '#007AC1' },
  ORL: { abbr: 'ORL', name: 'Magic', color: '#0077C0', color2: '#C4CED4' },
  IND: { abbr: 'IND', name: 'Pacers', color: '#FDBB30', color2: '#002D62' },
  LAC: { abbr: 'LAC', name: 'Clippers', color: '#C8102E', color2: '#1D428A' },
  BOS: { abbr: 'BOS', name: 'Celtics', color: '#007A33', color2: '#BA9653' },
  CHA: { abbr: 'CHA', name: 'Hornets', color: '#00788C', color2: '#1D1160' },
  SAS: { abbr: 'SAS', name: 'Spurs', color: '#C4CED4', color2: '#000000' },
  CLE: { abbr: 'CLE', name: 'Cavaliers', color: '#860038', color2: '#FDBB30' },
  BKN: { abbr: 'BKN', name: 'Nets', color: '#CFCFCF', color2: '#000000' },
  HOU: { abbr: 'HOU', name: 'Rockets', color: '#CE1141', color2: '#000000' },
  PHI: { abbr: 'PHI', name: '76ers', color: '#006BB6', color2: '#ED174C' },
  MIN: { abbr: 'MIN', name: 'Timberwolves', color: '#78BE20', color2: '#0C2340' },
  MIL: { abbr: 'MIL', name: 'Bucks', color: '#00471B', color2: '#EEE1C6' },
  DET: { abbr: 'DET', name: 'Pistons', color: '#C8102E', color2: '#1D42BA' },
  MEM: { abbr: 'MEM', name: 'Grizzlies', color: '#5D76A9', color2: '#12173F' },
  POR: { abbr: 'POR', name: 'Trail Blazers', color: '#E03A3E', color2: '#000000' },
  CHI: { abbr: 'CHI', name: 'Bulls', color: '#CE1141', color2: '#000000' },
  DEN: { abbr: 'DEN', name: 'Nuggets', color: '#0E2240', color2: '#FEC524' },
  ATL: { abbr: 'ATL', name: 'Hawks', color: '#E03A3E', color2: '#C1D32F' },
  SAC: { abbr: 'SAC', name: 'Kings', color: '#5A2D81', color2: '#C4CED4' },
  MIA: { abbr: 'MIA', name: 'Heat', color: '#98002E', color2: '#F9A01B' },
  NYK: { abbr: 'NYK', name: 'Knicks', color: '#F58426', color2: '#006BB6' },
  TOR: { abbr: 'TOR', name: 'Raptors', color: '#CE1141', color2: '#000000' },
  WAS: { abbr: 'WAS', name: 'Wizards', color: '#E31837', color2: '#002B5C' },
}
