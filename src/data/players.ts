export const PLAYERS: string[] = [
  'Josh Hart', 'Thomas Bryant', 'Anthony Davis', 'Luka Dončić', 'Victor Oladipo',
  'Domantas Sabonis', 'Ersan Ilyasova', 'Paul George', 'Shai Gilgeous-Alexander',
  'Kemba Walker', 'Al Horford', 'Moses Brown', 'Josh Richardson', 'Derrick White',
  'Isaiah Thomas', 'Jae Crowder', 'Ante Žižić', 'Collin Sexton', 'Donovan Mitchell',
  'Caris LeVert', 'James Harden', 'Ben Simmons', 'Kristaps Porziņģis',
  'Tim Hardaway Jr.', 'Courtney Lee', 'Trey Burke', 'Spencer Dinwiddie',
  'Davis Bertāns', 'Kyrie Irving', 'Kelly Olynyk', 'Dario Šarić', 'Jimmy Butler',
  'Justin Patton', 'Seth Curry', 'Tony Bradley', 'Serge Ibaka', 'Terry Rozier',
  'Thaddeus Young', 'Kevin Martin', 'Jeremy Lamb', 'Elfrid Payton', 'Dennis Smith Jr.',
  'LeBron James', 'Stephen Curry', 'Kevin Durant', 'Giannis Antetokounmpo',
  'Nikola Jokić', 'Joel Embiid', 'Jayson Tatum', 'Jaylen Brown', 'Devin Booker',
  'Damian Lillard', 'Russell Westbrook', 'Chris Paul', 'Kawhi Leonard',
  'DeMar DeRozan', 'Jrue Holiday', 'Bradley Beal', 'Karl-Anthony Towns',
  'Anthony Edwards', 'Ja Morant', 'Zion Williamson', 'Brandon Ingram', 'Lonzo Ball',
  'Rajon Rondo', 'Dwight Howard', 'DeAndre Jordan', 'Wesley Matthews',
  'Robert Covington', 'Jerryd Bayless', 'Andre Drummond', 'Paul Millsap',
  'Jarrett Allen', 'Dante Exum', 'Rodions Kurucs', 'Avery Bradley', 'Cole Aldrich',
  'Daequan Cook', 'Lazar Hayward', 'Romeo Langford', 'Ochai Agbaji',
  'Lauri Markkanen', 'Danilo Gallinari', 'Danny Green', 'Jakob Poeltl',
  'George Hill', 'Goran Dragić', 'Kyle Lowry', 'Fred VanVleet', 'Pascal Siakam',
  'OG Anunoby', 'Mikal Bridges', 'Cam Johnson', 'Deandre Ayton', 'Chris Bosh',
  'Dwyane Wade', 'Klay Thompson', 'Draymond Green',
  'Andrew Wiggins', 'Zach LaVine', 'DeMarcus Cousins', 'Buddy Hield',
  'Tyrese Haliburton', 'Tyrese Maxey', 'De\'Aaron Fox', 'Marcus Smart',
  'Malcolm Brogdon', 'Jalen Brunson', 'Julius Randle',
  'RJ Barrett', 'Immanuel Quickley', 'Evan Fournier', 'Alec Burks',
  'Bojan Bogdanović', 'Bogdan Bogdanović', 'Jusuf Nurkić', 'Nikola Vučević',
  'Wendell Carter Jr.', 'Aaron Gordon', 'Markelle Fultz', 'Jonathan Isaac',
  'Franz Wagner', 'Paolo Banchero', 'Victor Wembanyama', 'Chet Holmgren',
  'Josh Giddey', 'Alex Caruso', 'Lu Dort', 'Jalen Williams', 'Cade Cunningham',
  'Scottie Barnes', 'Evan Mobley', 'Darius Garland', 'Jarace Walker',
  'D\'Angelo Russell', 'Kyle Kuzma', 'Brook Lopez', 'Khris Middleton',
  'Eric Bledsoe', 'Grayson Allen', 'Bobby Portis', 'Gary Trent Jr.',
  'Norman Powell', 'Terance Mann', 'Ivica Zubac', 'Marcus Morris',
  'Markieff Morris', 'Maxi Kleber', 'Max Christie', 'Austin Reaves',
  'Rui Hachimura', 'Jarred Vanderbilt', 'Mo Bamba', 'Christian Wood',
  'John Wall', 'Blake Griffin', 'Kevin Love', 'Tristan Thompson', 'JR Smith',
  'Iman Shumpert', 'Timofey Mozgov', 'Channing Frye', 'Matthew Dellavedova',
  'Ricky Rubio', 'Jordan Clarkson', 'Mike Conley', 'Rudy Gobert', 'Joe Ingles',
  'Royce O\'Neale', 'Jordan Poole', 'Chris Boucher',
  'Precious Achiuwa', 'Thanasis Antetokounmpo', 'Patrick Beverley',
  'Sam Dekker', 'Montrezl Harrell', 'Darrun Hilliard', 'DeAndre Liggins',
  'Lou Williams', 'Kyle Wiltjer', 'Kentavious Caldwell-Pope', 'Talen Horton-Tucker',
  'Malik Beasley', 'Bones Hyland', 'Reggie Jackson', 'Mason Plumlee',
  'Miles Plumlee', 'Marcus Camby', 'Zhaire Smith', 'Elton Brand',
  'Nerlens Noel', 'Michael Carter-Williams', 'Tobias Harris', 'Boban Marjanović',
  'Mike Muscala', 'Furkan Korkmaz', 'Matisse Thybulle', 'Shake Milton',
  'De\'Anthony Melton', 'Danuel House Jr.', 'Georges Niang', 'Kelly Oubre Jr.',
  'PJ Tucker', 'Eric Gordon', 'Clint Capela', 'Trevor Ariza', 'Gerald Green',
  'Austin Rivers', 'Pat Connaughton', 'Delon Wright', 'Dejounte Murray',
  'Keldon Johnson', 'Devin Vassell', 'Zach Collins', 'Tre Jones',
  'Jeremy Sochan', 'Malaki Branham', 'Blake Wesley', 'Doug McDermott',
  'Enes Kanter', 'Steven Adams', 'Andre Roberson', 'Terrance Ferguson',
  'Hamidou Diallo', 'Darius Bazley', 'Kenrich Williams', 'Aleksej Pokusevski',
  'Tony Parker', 'Manu Ginóbili', 'Tim Duncan', 'LaMarcus Aldridge',
  'Rudy Gay', 'Patty Mills', 'Bryn Forbes', 'Lonnie Walker IV',
  'Keita Bates-Diop', 'Devonte\' Graham', 'Miles Bridges', 'PJ Washington',
  'Gordon Hayward', 'Mark Williams', 'Brandon Miller', 'LaMelo Ball',
]

const seen = new Set<string>()
export const PLAYER_LIST = PLAYERS.filter((p) => {
  const k = p.toLowerCase()
  if (seen.has(k)) return false
  seen.add(k)
  return true
})

export function normalizeName(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[.''`-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
