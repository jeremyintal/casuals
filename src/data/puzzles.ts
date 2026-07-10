export interface ChainLink {
  year: string
  teams: string[]
  question: string
  answers: string[]
  canonical: string
  reveal: string
  hint1: string
  hint2: string
}

export interface FinalLink {
  year: string
  teams: string[]
  reveal: string
}

export interface Puzzle {
  id: string
  franchise: string
  difficulty: 1 | 2 | 3 | 4 | 5
  difficultyLabel: string
  // `title` is the full sentence ("Lakers draft Tony Bradley") shown on the
  // chain card; `player` is the bare display name ("Tony Bradley") used for
  // the "Turn X into Y in N moves" GM-framed copy on the menu/share text.
  start: { year: string; title: string; sub: string; team: string; player: string }
  links: ChainLink[]
  final: FinalLink
  target: { name: string; sub: string }
  epilogue: string
}

export const PUZZLES: Puzzle[] = [
  {
    id: 'lal-bradley-luka',
    franchise: 'LAL',
    difficulty: 1,
    difficultyLabel: 'Casual friendly',
    start: {
      year: '2017',
      title: 'Lakers draft Tony Bradley',
      sub: '28th overall pick',
      team: 'LAL',
      player: 'Tony Bradley',
    },
    links: [
      {
        year: '2017',
        teams: ['LAL', 'UTA'],
        question: 'Draft night flip — who did the Lakers get back from Utah?',
        answers: ['Josh Hart', 'Thomas Bryant'],
        canonical: 'Josh Hart',
        reveal:
          'The Lakers sent the rights to Tony Bradley (No. 28) to Utah for the rights to Josh Hart (No. 30) and Thomas Bryant (No. 42).',
        hint1: 'Two rookies came back — a Villanova guard and an Indiana big',
        hint2: 'J.H. — his running mate in the deal was a center, T.B.',
      },
      {
        year: '2019',
        teams: ['LAL', 'NOP'],
        question: 'The blockbuster — who landed in LA?',
        answers: ['Anthony Davis'],
        canonical: 'Anthony Davis',
        reveal:
          'Josh Hart, Lonzo Ball, Brandon Ingram and three first-round picks went to New Orleans for Anthony Davis.',
        hint1: 'A unibrowed big man, No. 1 pick in 2012',
        hint2: 'A.D. — Lonzo Ball and Brandon Ingram went out with Hart',
      },
    ],
    final: {
      year: '2025',
      teams: ['LAL', 'DAL'],
      reveal:
        'Then the midnight stunner: Anthony Davis, Max Christie and a 2029 first went to Dallas for Luka Dončić, Maxi Kleber and Markieff Morris.',
    },
    target: { name: 'Luka Dončić', sub: '2025 · the trade nobody believed' },
    epilogue:
      'The 28th pick in 2017 became a 26-year-old top-3 player. Front offices dream about this chain.',
  },
  {
    id: 'okc-ibaka-sga',
    franchise: 'OKC',
    difficulty: 2,
    difficultyLabel: 'League Pass',
    start: {
      year: '2016',
      title: 'Thunder trade Serge Ibaka to Orlando',
      sub: 'Draft night shocker',
      team: 'OKC',
      player: 'Serge Ibaka',
    },
    links: [
      {
        year: '2016',
        teams: ['OKC', 'ORL'],
        question: 'Who headlined the return for Ibaka?',
        answers: ['Victor Oladipo', 'Domantas Sabonis', 'Ersan Ilyasova'],
        canonical: 'Victor Oladipo',
        reveal:
          'Ibaka went to Orlando for Victor Oladipo, Ersan Ilyasova and the draft rights to No. 11 pick Domantas Sabonis.',
        hint1: 'A high-flying Indiana Hoosier guard, plus a rookie big from Gonzaga',
        hint2: 'V.O. — the other prize was Arvydas’ son',
      },
      {
        year: '2017',
        teams: ['OKC', 'IND'],
        question: 'One year later, both pieces were flipped for a superstar. Who?',
        answers: ['Paul George'],
        canonical: 'Paul George',
        reveal:
          'Oladipo and Sabonis went to Indiana for Paul George — a deal that somehow worked out for everyone.',
        hint1: 'A two-way forward, Fresno State, No. 13 on his back',
        hint2: 'P.G. — he came from the Pacers',
      },
    ],
    final: {
      year: '2019',
      teams: ['OKC', 'LAC'],
      reveal:
        'Paul George forced his way to the Clippers — and OKC extracted Shai Gilgeous-Alexander, Danilo Gallinari, five first-round picks and two swaps.',
    },
    target: { name: 'Shai Gilgeous-Alexander', sub: '2019 · the heist of the decade' },
    epilogue:
      'Serge Ibaka became an MVP and the war chest that rebuilt a contender. Sam Presti thanks you for playing.',
  },
  {
    id: 'bos-rozier-white',
    franchise: 'BOS',
    difficulty: 3,
    difficultyLabel: 'Film junkie',
    start: {
      year: '2015',
      title: 'Celtics draft Terry Rozier',
      sub: '16th overall pick',
      team: 'BOS',
      player: 'Terry Rozier',
    },
    links: [
      {
        year: '2019',
        teams: ['BOS', 'CHA'],
        question: 'Scary Terry left in a sign-and-trade. Who came back?',
        answers: ['Kemba Walker'],
        canonical: 'Kemba Walker',
        reveal:
          'Rozier went to Charlotte in a sign-and-trade for All-Star point guard Kemba Walker.',
        hint1: 'An All-Star point guard, UConn legend, cardiac',
        hint2: 'K.W. — Charlotte’s franchise scoring leader',
      },
      {
        year: '2021',
        teams: ['BOS', 'OKC'],
        question: 'Two years later Kemba and a pick went to OKC. For whom?',
        answers: ['Al Horford', 'Moses Brown'],
        canonical: 'Al Horford',
        reveal:
          'Kemba and the No. 16 pick went to Oklahoma City for Al Horford, Moses Brown and a second-rounder. Keep your eye on Moses Brown.',
        hint1: 'A returning veteran big man — and a young 7-footer from UCLA',
        hint2: 'A.H. — a beloved Florida Gator, back for round two in green',
      },
      {
        year: '2021',
        teams: ['BOS', 'DAL'],
        question: 'That November, Moses Brown was flipped to Dallas. For whom?',
        answers: ['Josh Richardson'],
        canonical: 'Josh Richardson',
        reveal: 'Moses Brown went to Dallas straight up for Josh Richardson.',
        hint1: 'A Tennessee guard who seems to be in every trade ever made',
        hint2: 'J.R. — he was also in the Jimmy Butler and Seth Curry trades',
      },
    ],
    final: {
      year: '2022',
      teams: ['BOS', 'SAS'],
      reveal:
        'At the 2022 deadline, Richardson, Romeo Langford and a 2022 first went to San Antonio for Derrick White.',
    },
    target: { name: 'Derrick White', sub: '2022 · a champion, eventually' },
    epilogue:
      'Terry Rozier → Kemba → Moses Brown → Josh Richardson → banner 18. Chains hide in plain sight.',
  },
  {
    id: 'cle-kyrie-mitchell',
    franchise: 'CLE',
    difficulty: 2,
    difficultyLabel: 'League Pass',
    start: {
      year: '2011',
      title: 'Cavaliers draft Kyrie Irving',
      sub: 'No. 1 overall pick',
      team: 'CLE',
      player: 'Kyrie Irving',
    },
    links: [
      {
        year: '2017',
        teams: ['CLE', 'BOS'],
        question: 'Kyrie demanded out. Who headlined Boston’s package?',
        answers: ['Isaiah Thomas', 'Jae Crowder', 'Ante Zizic'],
        canonical: 'Isaiah Thomas',
        reveal:
          'Kyrie went to Boston for Isaiah Thomas, Jae Crowder, Ante Žižić — and Brooklyn’s unprotected 2018 first. That pick is the thread.',
        hint1: 'A 5’9” folk hero coming off a 28.9 ppg season',
        hint2: 'I.T. — the King of the Fourth',
      },
      {
        year: '2018',
        teams: ['CLE'],
        question: 'The Nets pick landed at No. 8. Who did Cleveland draft?',
        answers: ['Collin Sexton'],
        canonical: 'Collin Sexton',
        reveal: 'With Brooklyn’s pick, the Cavs drafted Collin Sexton — the Young Bull.',
        hint1: 'An Alabama guard with a bovine nickname',
        hint2: 'C.S. — the Young Bull',
      },
    ],
    final: {
      year: '2022',
      teams: ['CLE', 'UTA'],
      reveal:
        'Sexton (in a sign-and-trade), Lauri Markkanen, Ochai Agbaji and three firsts went to Utah for Donovan Mitchell.',
    },
    target: { name: 'Donovan Mitchell', sub: '2022 · Spida lands in Cleveland' },
    epilogue:
      'The No. 1 pick of 2011 became an All-NBA guard eleven years later — by way of a Brooklyn pick and a bull.',
  },
  {
    id: 'bkn-young-simmons',
    franchise: 'BKN',
    difficulty: 3,
    difficultyLabel: 'Film junkie',
    start: {
      year: '2016',
      title: 'Nets trade Thaddeus Young to Indiana',
      sub: 'Draft night deal',
      team: 'BKN',
      player: 'Thaddeus Young',
    },
    links: [
      {
        year: '2016',
        teams: ['BKN', 'IND'],
        question: 'Brooklyn got a No. 20 pick’s rights back. Who?',
        answers: ['Caris LeVert'],
        canonical: 'Caris LeVert',
        reveal:
          'Thad Young went to the Pacers for the draft rights to Michigan wing Caris LeVert.',
        hint1: 'A smooth Michigan wing who slid on injury concerns',
        hint2: 'C.L. — Baby Durant, they said',
      },
      {
        year: '2021',
        teams: ['BKN', 'HOU'],
        question: 'LeVert headlined Brooklyn’s outgoing package in a four-team megadeal. Who arrived?',
        answers: ['James Harden'],
        canonical: 'James Harden',
        reveal:
          'LeVert, Jarrett Allen, three firsts and four pick swaps brought James Harden to Brooklyn. Superteam assembled — briefly.',
        hint1: 'A bearded former MVP demanding out of Texas',
        hint2: 'J.H. — the Beard',
      },
    ],
    final: {
      year: '2022',
      teams: ['BKN', 'PHI'],
      reveal:
        'Thirteen months later, Harden went to Philadelphia for Ben Simmons, Seth Curry, Andre Drummond and two firsts.',
    },
    target: { name: 'Ben Simmons', sub: '2022 · it be like that sometimes' },
    epilogue:
      'Thaddeus Young became James Harden became Ben Simmons. Not every chain has a happy ending.',
  },
  {
    id: 'dal-dsj-kyrie',
    franchise: 'DAL',
    difficulty: 2,
    difficultyLabel: 'League Pass',
    start: {
      year: '2017',
      title: 'Mavericks draft Dennis Smith Jr.',
      sub: '9th overall pick',
      team: 'DAL',
      player: 'Dennis Smith Jr.',
    },
    links: [
      {
        year: '2019',
        teams: ['DAL', 'NYK'],
        question: 'DSJ went to New York in a blockbuster. Who was the headliner back?',
        answers: ['Kristaps Porzingis', 'Tim Hardaway Jr', 'Courtney Lee', 'Trey Burke'],
        canonical: 'Kristaps Porzingis',
        reveal:
          'Smith Jr., DeAndre Jordan, Wesley Matthews and two firsts went to the Knicks for Kristaps Porziņģis, Tim Hardaway Jr., Courtney Lee and Trey Burke.',
        hint1: 'A 7’3” Latvian unicorn rehabbing a torn ACL',
        hint2: 'K.P. — the Unicorn',
      },
      {
        year: '2022',
        teams: ['DAL', 'WAS'],
        question: 'Three years later the unicorn was moved to Washington. For whom?',
        answers: ['Spencer Dinwiddie', 'Davis Bertans'],
        canonical: 'Spencer Dinwiddie',
        reveal:
          'Porziņģis went to the Wizards for Spencer Dinwiddie and Davis Bertāns — a deal widely read as a salary dump. Hold that thought.',
        hint1: 'A Colorado point guard and a Latvian sniper',
        hint2: 'S.D. — a guard who once tried to tokenize his own contract',
      },
    ],
    final: {
      year: '2023',
      teams: ['DAL', 'BKN'],
      reveal:
        'At the 2023 deadline, Dinwiddie, Dorian Finney-Smith, a first and two seconds went to Brooklyn for Kyrie Irving.',
    },
    target: { name: 'Kyrie Irving', sub: '2023 · Luka gets a co-star' },
    epilogue:
      'Dennis Smith Jr. became Kyrie Irving in three moves. The salary dump was the setup.',
  },
  {
    id: 'hou-martin-olynyk',
    franchise: 'HOU',
    difficulty: 3,
    difficultyLabel: 'Film junkie',
    start: {
      year: '2012',
      title: 'Rockets trade Kevin Martin and Jeremy Lamb to OKC',
      sub: 'Plus two firsts and a second',
      team: 'HOU',
      player: 'Kevin Martin',
    },
    links: [
      {
        year: '2012',
        teams: ['HOU', 'OKC'],
        question: 'The most famous trade of the 2010s. Who did Houston get?',
        answers: ['James Harden'],
        canonical: 'James Harden',
        reveal:
          'The Beard arrived: James Harden (with Cole Aldrich, Daequan Cook and Lazar Hayward) for Martin, Lamb and picks. An MVP era began.',
        hint1: 'A Sixth Man of the Year about to become a franchise player',
        hint2: 'J.H. — fear the Beard',
      },
      {
        year: '2021',
        teams: ['HOU', 'BKN'],
        question: 'Nine years later Harden forced his way out. Who headlined Houston’s return?',
        answers: ['Victor Oladipo', 'Dante Exum', 'Rodions Kurucs'],
        canonical: 'Victor Oladipo',
        reveal:
          'The four-team deal brought back Victor Oladipo (rerouted from Indiana), Dante Exum, Rodions Kurucs, three Nets firsts and four swaps.',
        hint1: 'A two-time All-Star guard rerouted from Indiana',
        hint2: 'V.O. — feathery',
      },
    ],
    final: {
      year: '2021',
      teams: ['HOU', 'MIA'],
      reveal:
        'Six weeks later, Oladipo went to Miami for Kelly Olynyk, Avery Bradley and a pick swap. Yes — that’s where the player chain ends.',
    },
    target: { name: 'Kelly Olynyk', sub: '2021 · yes, really' },
    epilogue:
      'James Harden, an MVP and three scoring titles… and the player thread ends at Kelly Olynyk. (The picks became the real return.)',
  },
  {
    id: 'phi-payton-harden',
    franchise: 'PHI',
    difficulty: 5,
    difficultyLabel: 'Sicko special',
    start: {
      year: '2014',
      title: 'Sixers select Elfrid Payton',
      sub: '10th overall — for about ten minutes',
      team: 'PHI',
      player: 'Elfrid Payton',
    },
    links: [
      {
        year: '2014',
        teams: ['PHI', 'ORL'],
        question: 'Payton’s rights went to Orlando. Which No. 12 pick came back?',
        answers: ['Dario Saric'],
        canonical: 'Dario Saric',
        reveal:
          'Payton went to Orlando for the rights to Dario Šarić, a 2017 first and a second. The Process, working.',
        hint1: 'A Croatian forward who stayed overseas two more years',
        hint2: 'D.S. — the Homie',
      },
      {
        year: '2018',
        teams: ['PHI', 'MIN'],
        question: 'Šarić and Covington headlined a November deal. Which disgruntled star arrived?',
        answers: ['Jimmy Butler', 'Justin Patton'],
        canonical: 'Jimmy Butler',
        reveal:
          'Šarić, Robert Covington, Jerryd Bayless and a second went to Minnesota for Jimmy Butler and Justin Patton.',
        hint1: 'A Marquette wing who practiced too hard for Minnesota',
        hint2: 'J.B. — Buckets',
      },
      {
        year: '2019',
        teams: ['PHI', 'MIA'],
        question: 'Butler left for Miami in a sign-and-trade. Who came back?',
        answers: ['Josh Richardson'],
        canonical: 'Josh Richardson',
        reveal: 'The sign-and-trade returned Josh Richardson to Philadelphia.',
        hint1: 'That Tennessee guard again — he is in every chain',
        hint2: 'J.R. — also appears in the Celtics’ Derrick White chain',
      },
      {
        year: '2020',
        teams: ['PHI', 'DAL'],
        question: 'A year later Richardson went to Dallas. For which sharpshooter?',
        answers: ['Seth Curry'],
        canonical: 'Seth Curry',
        reveal: 'Richardson and a second went to Dallas for Seth Curry, the family’s other elite shooter.',
        hint1: 'The other Curry brother',
        hint2: 'S.C. — his father-in-law was his head coach in Philly',
      },
    ],
    final: {
      year: '2022',
      teams: ['PHI', 'BKN'],
      reveal:
        'At the 2022 deadline, Curry, Ben Simmons, Andre Drummond and two firsts went to Brooklyn for James Harden and Paul Millsap.',
    },
    target: { name: 'James Harden', sub: '2022 · the Process delivers a Beard' },
    epilogue:
      'Elfrid Payton → Šarić → Butler → Richardson → Curry → Harden. Five moves across eight years. Certified sicko material.',
  },
  {
    id: 'dal-dsj-morris-davis',
    franchise: 'DAL',
    difficulty: 4,
    difficultyLabel: 'Tape study',
    start: {
      year: '2017',
      title: 'Mavericks draft Dennis Smith Jr.',
      sub: '9th overall pick',
      team: 'DAL',
      player: 'Dennis Smith Jr.',
    },
    links: [
      {
        year: '2019',
        teams: ['DAL', 'NYK'],
        question: 'DSJ and DeAndre Jordan headed to New York in a deadline blockbuster. Who anchored the return?',
        answers: ['Kristaps Porzingis', 'Tim Hardaway Jr', 'Courtney Lee', 'Trey Burke'],
        canonical: 'Kristaps Porziņģis',
        reveal:
          'Dennis Smith Jr., DeAndre Jordan, Wesley Matthews and two future first-round picks went to New York for Kristaps Porziņģis, Tim Hardaway Jr., Courtney Lee and Trey Burke.',
        hint1: 'A 7’3” Latvian unicorn rehabbing a torn ACL',
        hint2: 'K.P. — the Unicorn',
      },
      {
        year: '2022',
        teams: ['DAL', 'WAS'],
        question: 'Three years on, Dallas parted with the Unicorn. Who came to Dallas?',
        answers: ['Spencer Dinwiddie', 'Davis Bertans'],
        canonical: 'Spencer Dinwiddie',
        reveal: 'Porziņģis and a second-round pick went to Washington for Spencer Dinwiddie and Davis Bertāns.',
        hint1: 'A Colorado point guard and a Latvian sharpshooter',
        hint2: 'S.D. — once tried to tokenize his own contract',
      },
      {
        year: '2023',
        teams: ['DAL', 'BKN'],
        question: 'At the deadline, Dinwiddie and Dorian Finney-Smith went to Brooklyn. Two players came back — name either.',
        answers: ['Kyrie Irving', 'Markieff Morris'],
        canonical: 'Kyrie Irving',
        reveal:
          'Dinwiddie, Finney-Smith and three future picks went to Brooklyn for Kyrie Irving — plus a spare part named Markieff Morris. Forget Kyrie for a second. Morris is the thread.',
        hint1: 'An All-Star guard, plus a journeyman big who barely played in Dallas',
        hint2: 'K.I. — his tag-along was M.M.',
      },
    ],
    final: {
      year: '2025',
      teams: ['DAL', 'LAL'],
      reveal:
        'In the three-team trade that sent Luka Dončić to LA, Markieff Morris rode along with Dončić and Maxi Kleber — and Dallas got Max Christie, a 2029 first, and Anthony Davis back.',
    },
    target: { name: 'Anthony Davis', sub: '2025 · the other side of the trade that gave up Luka' },
    epilogue:
      'A 9th overall pick became a top-3 center — and the piece that made it happen wasn’t the All-Star everyone was watching. It was Markieff Morris, still on an expiring contract nobody tracked. That’s the whole sport in one sentence.',
  },
  {
    id: 'lac-paul-harden',
    franchise: 'LAC',
    difficulty: 4,
    difficultyLabel: 'Tape study',
    start: {
      year: '2017',
      title: 'Clippers trade Chris Paul to Houston',
      sub: 'CP3 opts in, then heads to the Rockets',
      team: 'LAC',
      player: 'Chris Paul',
    },
    links: [
      {
        year: '2017',
        teams: ['LAC', 'HOU'],
        question: 'Houston sent seven players back for CP3. Name anyone in the Clippers’ haul.',
        answers: [
          'Patrick Beverley',
          'Sam Dekker',
          'Montrezl Harrell',
          'Darrun Hilliard',
          'DeAndre Liggins',
          'Lou Williams',
          'Kyle Wiltjer',
        ],
        canonical: 'Patrick Beverley',
        reveal:
          'The Clippers sent Chris Paul to Houston for Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer, a first-round pick and cash.',
        hint1: 'A defense-first Arkansas guard came back alongside a former Sixth Man of the Year',
        hint2: 'P.B. — the deal also included Lou Williams and Montrezl Harrell',
      },
      {
        year: '2021',
        teams: ['LAC', 'MEM'],
        question: 'Beverley, Rajon Rondo and Daniel Oturu went to Memphis. Who came back?',
        answers: ['Eric Bledsoe'],
        canonical: 'Eric Bledsoe',
        reveal:
          'The Clippers traded Patrick Beverley, Rajon Rondo and Daniel Oturu to Memphis for Eric Bledsoe, bringing the guard back for a second stint in LA.',
        hint1: 'A downhill Kentucky guard returning for his second Clippers stint',
        hint2: 'E.B. — the Clippers originally acquired his draft rights in 2010',
      },
      {
        year: '2022',
        teams: ['LAC', 'POR'],
        question: 'At the deadline, Bledsoe went to Portland. Name either veteran who came back.',
        answers: ['Robert Covington', 'Norman Powell'],
        canonical: 'Robert Covington',
        reveal:
          'Bledsoe, Justise Winslow, Keon Johnson and a second-round pick went to Portland for Robert Covington and Norman Powell. Covington is the thread.',
        hint1: 'Two wings came back: a switchable forward and a Toronto champion scorer',
        hint2: 'R.C. — his running mate in the deal was N.P.',
      },
    ],
    final: {
      year: '2023',
      teams: ['LAC', 'PHI'],
      reveal:
        'Covington, Nicolas Batum, KJ Martin, Marcus Morris and a pile of draft capital went to Philadelphia in the three-team deal that brought James Harden, P.J. Tucker and Filip Petrušev to the Clippers.',
    },
    target: { name: 'James Harden', sub: '2023 · another MVP guard lands in LA' },
    epilogue:
      'The Clippers turned Chris Paul into James Harden in four trades across six years — with Patrick Beverley, Eric Bledsoe and Robert Covington carrying the thread.',
  },
]

function easternDayStamp(date: Date): number {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(date)
  const year = Number(parts.find((p) => p.type === 'year')?.value)
  const month = Number(parts.find((p) => p.type === 'month')?.value)
  const day = Number(parts.find((p) => p.type === 'day')?.value)
  return Date.UTC(year, month - 1, day)
}

export function dailyIndex(date = new Date()): number {
  const epoch = Date.UTC(2026, 6, 1)
  const now = easternDayStamp(date)
  const days = Math.max(0, Math.floor((now - epoch) / 86400000))
  return days % PUZZLES.length
}

// Total real transactions in the chain (guessable links + the auto-revealed
// final one) — the "N" in "Turn X into Y in N moves" GM-framed copy.
export function totalMoves(puzzle: Puzzle): number {
  return puzzle.links.length + 1
}

// Inverse of dailyNumber: which puzzle a shared link's day number pointed at,
// so a deep link to a past day replays exactly what that day showed.
export function puzzleForDayNumber(dayNum: number): number {
  const days = Math.max(1, Math.floor(dayNum)) - 1
  return ((days % PUZZLES.length) + PUZZLES.length) % PUZZLES.length
}

export function dailyNumber(date = new Date()): number {
  const epoch = Date.UTC(2026, 6, 1)
  const now = easternDayStamp(date)
  return Math.max(0, Math.floor((now - epoch) / 86400000)) + 1
}
