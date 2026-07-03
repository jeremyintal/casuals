// Parses cached BBRef season transaction pages into pipeline/data/transactions.json.
// Strategy: replace <a> anchors with indexed tokens so names with punctuation
// ("Dennis Smith Jr.") can't break sentence parsing, then pattern-match clauses.
// Usage: node pipeline/parse.mjs
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const CACHE = path.join(here, 'cache')
const OUT = path.join(here, 'data')

// Nickname → BBRef code. Hornets/Nets/Bobcats resolved per-season below.
const NICKNAMES = {
  hawks: 'ATL', celtics: 'BOS', bulls: 'CHI', cavaliers: 'CLE', mavericks: 'DAL',
  nuggets: 'DEN', pistons: 'DET', warriors: 'GSW', rockets: 'HOU', pacers: 'IND',
  clippers: 'LAC', lakers: 'LAL', grizzlies: 'MEM', heat: 'MIA', bucks: 'MIL',
  timberwolves: 'MIN', pelicans: 'NOP', knicks: 'NYK', thunder: 'OKC', magic: 'ORL',
  '76ers': 'PHI', sixers: 'PHI', suns: 'PHO', 'trail blazers': 'POR', blazers: 'POR',
  kings: 'SAC', spurs: 'SAS', raptors: 'TOR', jazz: 'UTA', wizards: 'WAS',
  bobcats: 'CHA',
}
function nicknameToCode(nick, season) {
  const k = nick.toLowerCase().trim()
  if (k === 'nets') return season <= 2012 ? 'NJN' : 'BRK'
  if (k === 'hornets') return season <= 2013 ? 'NOH' : 'CHO'
  return NICKNAMES[k] ?? null
}

function tokenize(html) {
  const players = []
  const teams = []
  let text = html.replace(/<a ([^>]*?)href="([^"]*)"([^>]*)>(.*?)<\/a>/g, (m, pre, href, post, label) => {
    const attrs = pre + post
    if (href.startsWith('/players/')) {
      const id = href.split('/').pop().replace('.html', '')
      players.push({ id, name: label })
      return `⟦P${players.length - 1}⟧`
    }
    if (href.startsWith('/teams/')) {
      const code = href.split('/')[2]
      const from = /data-attr-from/.test(attrs)
      const to = /data-attr-to/.test(attrs)
      teams.push({ code, from, to, name: label })
      return `⟦T${teams.length - 1}⟧`
    }
    return label
  })
  text = text.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()
  return { text, players, teams }
}

function parseAssets(rawSegment, players) {
  // Parenthetical asides on BBRef ("(Vernon Macklin was later selected)",
  // "(top-10 protected)") are annotations, not assets in the deal — strip
  // them so the enclosed player token isn't mistaken for a return piece.
  const segment = rawSegment.replace(/\([^()]*\)/g, (m) => ' '.repeat(m.length))
  const assets = []
  const re = /⟦P(\d+)⟧|a (\d{4}) (\d)(?:st|nd|rd|th)[- ]round draft pick|cash considerations|cash/gi
  let m
  while ((m = re.exec(segment)) !== null) {
    if (m[1] !== undefined) {
      const p = players[Number(m[1])]
      const before = segment.slice(Math.max(0, m.index - 40), m.index)
      assets.push({
        kind: 'player',
        id: p.id,
        name: p.name,
        draftRights: /draft rights (?:to|of) $/.test(before) || /rights to $/.test(before),
      })
    } else if (m[2] !== undefined) {
      assets.push({ kind: 'pick', text: `${m[2]} round ${m[3]} pick` })
    } else {
      assets.push({ kind: 'cash' })
    }
  }
  return assets
}

function teamTokenCode(tokenIdx, teams) {
  return teams[Number(tokenIdx)]?.code ?? null
}

function parseTrade(text, players, teams, season) {
  // Returns { teams: {CODE:{in:[],out:[]}}, multiTeam } or null.
  const ledger = {}
  const touch = (code) => {
    if (!code) return null
    if (!ledger[code]) ledger[code] = { in: [], out: [] }
    return ledger[code]
  }
  const multiTeam = /\b\d+-team trade\b/i.test(text)
  // Every clause is a directional send: "<sender> traded <assets> to <recipient> [for <assets>]"
  const clauseRe =
    /(?:⟦T(\d+)⟧|[Tt]he ([A-Za-z0-9' .]+?)) traded (.+?) to (?:the )?(?:⟦T(\d+)⟧|([A-Za-z0-9' .]+?))(?: for (.+?))?(?=[;.](?: |$)|$)/g
  let m
  let matched = false
  while ((m = clauseRe.exec(text)) !== null) {
    matched = true
    const sender = m[1] !== undefined ? teamTokenCode(m[1], teams) : nicknameToCode(m[2] ?? '', season)
    const recipient = m[4] !== undefined ? teamTokenCode(m[4], teams) : nicknameToCode(m[5] ?? '', season)
    const sent = parseAssets(m[3], players)
    const got = m[6] ? parseAssets(m[6], players) : []
    const s = touch(sender)
    const r = touch(recipient)
    if (s) {
      s.out.push(...sent)
      s.in.push(...got)
    }
    if (r) {
      r.in.push(...sent)
      r.out.push(...got)
    }
  }
  if (!matched || Object.keys(ledger).length < 2) return null
  return { ledger, multiTeam }
}

function classify(text) {
  if (/ traded /.test(text)) return 'trade'
  if (/claimed .* (?:on|off) waivers/i.test(text)) return 'waiver-claim'
  if (/ waived /.test(text)) return 'waived'
  if (/ signed /.test(text)) return 'signed'
  if (/ released /.test(text)) return 'released'
  if (/ sold /.test(text)) return 'sold'
  return 'other'
}

function plainText(text, players, teams) {
  return text
    .replace(/⟦P(\d+)⟧/g, (_, i) => players[Number(i)]?.name ?? '?')
    .replace(/⟦T(\d+)⟧/g, (_, i) => teams[Number(i)]?.name ?? '?')
}

const files = (await readdir(CACHE)).filter((f) => f.endsWith('.html')).sort()
const transactions = []
let id = 0
const skipped = { trades: 0 }

for (const file of files) {
  const season = Number(file.match(/NBA_(\d{4})/)?.[1])
  const html = await readFile(path.join(CACHE, file), 'utf8')
  const liRe = /<li><span>([^<]+)<\/span>(.*?)<\/li>/gs
  let li
  while ((li = liRe.exec(html)) !== null) {
    const dateStr = li[1].trim()
    const date = new Date(dateStr + ' UTC')
    const iso = isNaN(date) ? null : date.toISOString().slice(0, 10)
    const pRe = /<p>(.*?)<\/p>/gs
    let p
    while ((p = pRe.exec(li[2])) !== null) {
      const { text, players, teams } = tokenize(p[1])
      const type = classify(text)
      if (type === 'other') continue
      const record = {
        id: id++,
        date: iso,
        season,
        type,
        text: plainText(text, players, teams),
      }
      if (type === 'trade') {
        const parsed = parseTrade(text, players, teams, season)
        if (!parsed) {
          skipped.trades++
          continue
        }
        record.teams = parsed.ledger
        record.multiTeam = parsed.multiTeam
      } else if (type === 'waiver-claim') {
        // "The <to> claimed <player> off waivers from the <from>" — a valid chain edge.
        const to = teams.find((t) => t.to)?.code ?? teams[0]?.code
        const from = teams.find((t) => t.from)?.code ?? teams[1]?.code
        const assets = parseAssets(text, players)
        if (to && assets.length) {
          record.teams = { [to]: { in: assets, out: [] } }
          if (from) record.teams[from] = { in: [], out: assets }
        }
      } else {
        const code = teams[0]?.code
        const assets = parseAssets(text, players)
        if (code && assets.length) {
          record.teams = {
            [code]: type === 'signed' ? { in: assets, out: [] } : { in: [], out: assets },
          }
        }
      }
      transactions.push(record)
    }
  }
}

await mkdir(OUT, { recursive: true })
await writeFile(path.join(OUT, 'transactions.json'), JSON.stringify(transactions, null, 1))
const byType = {}
for (const t of transactions) byType[t.type] = (byType[t.type] ?? 0) + 1
console.log(`parsed ${transactions.length} transactions from ${files.length} season pages`)
console.log('by type:', byType)
console.log('unparseable trades skipped:', skipped.trades)
