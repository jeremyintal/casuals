// Downloads Basketball-Reference season transaction pages into pipeline/cache/.
// Polite by design: one request at a time, 3.5s apart, skips files already cached.
// Usage: node pipeline/fetch.mjs [startSeason] [endSeason]
import { mkdir, writeFile, access } from 'node:fs/promises'
import { setTimeout as sleep } from 'node:timers/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const CACHE = path.join(here, 'cache')
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'

const startSeason = Number(process.argv[2] ?? 2010)
const endSeason = Number(process.argv[3] ?? 2027)

await mkdir(CACHE, { recursive: true })

let fetched = 0
let skipped = 0
for (let season = startSeason; season <= endSeason; season++) {
  const file = path.join(CACHE, `NBA_${season}_transactions.html`)
  try {
    await access(file)
    skipped++
    console.log(`cached  NBA_${season}`)
    continue
  } catch {}
  const url = `https://www.basketball-reference.com/leagues/NBA_${season}_transactions.html`
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) {
    console.log(`SKIP    NBA_${season} — HTTP ${res.status}`)
    await sleep(3500)
    continue
  }
  const html = await res.text()
  if (!html.includes('page_index') && !html.includes('traded')) {
    console.log(`SKIP    NBA_${season} — no transaction content`)
    await sleep(3500)
    continue
  }
  await writeFile(file, html)
  fetched++
  console.log(`fetched NBA_${season} (${(html.length / 1024).toFixed(0)} KB)`)
  await sleep(3500)
}
console.log(`done: ${fetched} fetched, ${skipped} cached`)
