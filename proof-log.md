# Casuals Proof Log

Chronological record of completed progress, verification commands, test results, and known proof gaps. Use `project-tasks-queue.md` for open tasks and decisions.

## 2026-07-03 (growth: phase 1 build)

### Implemented GROWTH_PLAN.md §10 phase 1: deep link fix, challenge-a-friend, share attribution

- Files changed: `src/data/puzzles.ts` (added `puzzleForDayNumber`), `src/game/engine.ts` (`shareText` now builds a real deep link instead of the static `'casuals.game'` string; added `challengeText` and `shareUrl`), `src/game/storage.ts` (added `ShareAttribution`, `recordArrival`, `recordShareCompletion`), `src/App.tsx` (deep-link parsing on load, URL sync effect, "Challenge a friend" button in `EndSheet`, attribution wiring in `GameScreen`), `src/styles.css` (`.end-actions` wraps 4 buttons), `.claude/launch.json` (added, first time this project had a preview server config).
- **Bug found and fixed during verification, not caught by build or code review**: the arrival-recording `useEffect` in `App` had no ref guard, only an empty dependency array. `main.tsx` wraps the app in `React.StrictMode`, which deliberately double-invokes effects in dev — this silently doubled the `shareAttribution.arrivals` counter on every deep-link page load. Caught by actually reading `localStorage` after a real navigation (`arrivals.share: 2` after one visit) rather than trusting the code. Fixed with the same ref-guard idiom (`arrivalRecorded.current`) already used elsewhere in this file for the analogous `recordResult` case. Re-verified after the fix: exactly 1 arrival per visit.
- Verification commands and results:
  - `npm run build` after each of the four implementation steps (engine/storage, App wiring, CSS, bugfix): passed every time, no TS errors.
  - Browser verification via `mcp__Claude_Preview` against the dev server: navigated to `http://localhost:5173/?p=lal-bradley-luka&src=share` after `localStorage.clear()` — confirmed the app opened directly to the Lakers→Luka puzzle (skipping the menu), `shareAttribution.arrivals.share` was exactly `1`, and the address bar had already dropped `src` while correctly keeping `p` (via the URL-sync effect). Played the puzzle to completion (`Josh Hart`, `Anthony Davis` via Enter-key submission) — reached `SICKO`, and `shareAttribution.completions.share` incremented to `1` alongside `arrivals.share` staying at `1` (no double-count).
  - Verified generated share text directly by dynamically importing `/src/game/engine.ts` and `/src/data/puzzles.ts` in-page and calling `shareText()`/`challengeText()` with a synthetic win state: confirmed correct deep-link format for both the archive case (`casuals.game/?p=lal-bradley-luka&src=share`) and the daily case (`casuals.game/?d=42&src=share`), and confirmed the challenge copy reads `"I got SICKO in 1:13 on today's Casuals. Think you can beat it?"` per the plan's proposed framing.
  - Clicked the `SHARE` button in the actual UI: did not produce a visible "Copied result" toast or a readable clipboard value. Root cause understood, not a product bug: this automated/headless browser context denies both clipboard read (`NotAllowedError` confirmed directly) and, evidently, write outside a trusted user gesture, so the code correctly fell through to the `window.prompt` fallback path, which doesn't set the toast (correct behavior — nothing was actually copied). This is a limitation of testing clipboard access in headless automation, not of the shipped code; real browsers grant `navigator.clipboard.writeText` on an actual user-initiated click.
- Proof gaps:
  - `navigator.share` (the native share-sheet path, which both buttons prefer when available) was not exercised — this test browser doesn't expose the Web Share API. Only the clipboard-fallback code path was reachable in this environment. Should be spot-checked on a real mobile Safari/Chrome session before relying on it.
  - Share-to-play conversion is tracked per-device only, as scoped in `GROWTH_PLAN.md` §8 and documented directly in the `ShareAttribution` type comment in `storage.ts` — this does not produce cross-user aggregate analytics; that requires a backend, which was explicitly out of scope for this phase.
  - No automated test covers the deep-link parsing, URL sync, or attribution logic — this was verified manually in-browser this session only.

## 2026-07-03 (curation)

### Curated and shipped the top candidate: `dal-dsj-morris-davis`

- Worked the #1-scored candidate from `pipeline/data/curation-queue.md` (tied-top score 19, DAL, 4 real transactions 2019–2025) through the full curation checklist in `AGENTS.md` and added it to `src/data/puzzles.ts` and cross-checked `src/data/players.ts`.
- Verification: pulled the exact scraped source text for all 4 legs directly from `pipeline/data/transactions.json` (not from memory) — 2019-01-31 DAL/NYK (DSJ, Jordan, Matthews, 2 firsts for Porziņģis, Hardaway Jr., Lee, Burke), 2022-02-10 DAL/WAS (Porziņģis for Dinwiddie, Bertāns), 2023-02-06 BKN/DAL (Dinwiddie, Finney-Smith, 3 picks for Kyrie Irving, Markieff Morris), 2025-02-02 3-team DAL/LAL/UTA (Morris rode with Dončić/Kleber to LA; Dallas got Christie, a 2029 first, and Anthony Davis). All four confirmed accurate.
- **Editorial call, not a defect:** this candidate's first two legs are identical to the already-shipped `dal-dsj-kyrie` puzzle (same start, same first two links) — the pipeline correctly found the same real trade tree, then continued two hops further via Markieff Morris (an unglamorous throw-in piece, not Kyrie) to a different, bigger target: Anthony Davis via the actual Dončić trade. Shipped anyway because the full origin-to-superstar arc is genuine flagship content and the twist (the correct thread is the anonymous throw-in, not the All-Star) is exactly the "obscure middle" difficulty design the plan calls for. Wrote fresh question/hint phrasing so the two puzzles don't read as literal duplicates. **Follow-up for whoever schedules the daily rotation: do not run `dal-dsj-kyrie` and `dal-dsj-morris-davis` on adjacent days.**
- Rated difficulty 4, introduced a new difficulty label ("Tape study") between "Film junkie" (3) and "Sicko special" (5) — no schema change needed, `difficultyLabel` is free text.
- All 11 required player names already existed in `src/data/players.ts` from earlier puzzles — no autocomplete additions needed.
- Verified in-browser via `mcp__Claude_Preview` against the dev server (`.claude/launch.json` added, first time this project had one): opened the puzzle from Classic Games, tipped off, submitted `Kristaps Porzingis` (link 1, exact match), `Davis Bertans` (link 2, multi-answer accept), `Markieff Morris` (link 3, multi-answer accept — confirms the alternate-answer path works, not just the canonical name), reached the win sheet: `SICKO`, 647 pts, 6/6 possessions left, all four transaction reveals and the epilogue rendered correctly. Screenshot not saved (accessibility snapshot used instead, sufficient to confirm state).
- `npm run build` after adding the puzzle: passed, no TS errors.
- Proof gaps: only this one candidate was curated this session; the other 149 in the queue remain unverified. Adding a 9th puzzle shifts the daily-rotation mapping for all future dates (expected consequence of `dailyIndex`'s modulo-length logic, not a bug, but note it if exact past/future daily assignments ever need to be reproduced).

## 2026-07-03

### Data pipeline: scrape → parse → graph → curation queue

- Built `pipeline/` (see `pipeline/README.md`): `fetch.mjs`, `parse.mjs`, `graph.mjs`, `stars.mjs`, `curate.mjs`.
- Files added: `pipeline/fetch.mjs`, `pipeline/parse.mjs`, `pipeline/graph.mjs`, `pipeline/stars.mjs`, `pipeline/curate.mjs`, `pipeline/README.md`, `pipeline/data/transactions.json`, `pipeline/data/candidates.json`, `pipeline/data/curation-queue.md`. Updated: `.gitignore` (added `pipeline/cache/`), `AGENTS.md`, `PLAN.md`, `project-tasks-queue.md`.
- Commands run and results:
  - `curl` probe of prosportstransactions.com search endpoint → `HTTP 403` (Cloudflare "Just a moment..." challenge). Confirmed not scrapeable without a headless browser / challenge solver, which is out of scope. Source switched to Basketball-Reference.
  - `curl` probe of `basketball-reference.com/leagues/NBA_2024_transactions.html` → `HTTP 200`, well-formed HTML.
  - `node pipeline/fetch.mjs 2010 2027` → fetched 17 season pages (`NBA_2010`–`NBA_2026`; `NBA_2027` correctly 404s, season hasn't happened), ~5.5 MB total, 3.5s between requests. Result: passed.
  - `node pipeline/parse.mjs` → first run: 12,480 transactions parsed (912 trades, 3,949 waived, 7,589 signed, 27 released, 3 sold, **0 waiver-claim** — bug found), 4 unparseable trade clauses logged.
  - **Bug found and fixed during manual spot-check**, not caught automatically: `parseAssets` was capturing player names inside parenthetical annotations (e.g. `"(Vernon Macklin was later selected)"`, `"(top-5 protected)"`) as if they were real assets received in the trade. Verified by inspecting the Denver/Detroit 2009 Afflalo trade record before and after the fix. Fixed by stripping `\([^()]*\)` (length-preserving, to keep downstream index math correct) before asset extraction in `parseAssets`.
  - **Second bug found**: waiver-claim classifier regex required "off waivers" but BBRef's actual phrasing is "claimed X **on** waivers from the Y" — verified via raw HTML inspection of a known 2014 Carlos Boozer claim. Fixed regex to accept both "on" and "off".
  - `node pipeline/parse.mjs` (re-run after fixes) → 12,570 transactions (912 trades, 90 waiver-claim, phantom players confirmed gone by re-inspecting the same Afflalo record). Result: passed.
  - Spot-check: searched parsed data for the real February 2025 Dallas–LA Lakers–Utah three-team trade (Luka Dončić + Kleber + Morris to LAL; Christie + Davis + 2029 1st to DAL; Hood-Schifino + 2nd to UTA). Found and correctly attributed per-team in every leg, including the multi-team splits. This is the same real trade the hand-curated `lal-bradley-luka` puzzle ends on — independent confirmation the parser handles complex real trades correctly. Note: BBRef renders this instance as "Luka Doncic" without diacritics (inconsistent with other pages); matching is done by BBRef player ID (`doncilu01`), not display string, so this doesn't affect graph correctness — but display names copied into puzzle content must be manually corrected to include diacritics.
  - `node pipeline/graph.mjs 2 4 150` → 1,601 raw candidate chains enumerated across all franchises, 1,569 after dedupe, top 150 written to `candidates.json`. Result: passed.
  - Spot-check of top-scored candidates: the #1 result independently reconstructed a longer version of the shipped Dennis Smith Jr. → Porziņģis → Dinwiddie → Kyrie chain and extended it two more real hops to the Feb 2025 Dončić/Davis trade. A separate high scorer (Clippers, 2011–2023) traced Chris Paul → Lou Williams/Harrell → Rondo → Bledsoe → Covington/Powell → Harden — a real, previously unidentified candidate chain. Confidence: the pipeline concept works end to end on real data.
  - `node pipeline/curate.mjs 150` → wrote `pipeline/data/curation-queue.md` (1,950 lines), one entry per candidate with dates, per-leg detail, source quote text, and a verification checklist.
- Verification evidence:
  - Line counts / sizes: `transactions.json` 5.5 MB, `candidates.json` 396 KB, `curation-queue.md` 1,950 lines.
  - No automated test suite for the pipeline scripts — verification here was manual spot-checking against known real trades, documented above. This is appropriate for a content-generation tool whose output is human-curated before use, not for the game engine itself (which still needs the automated tests tracked in the queue).
- Proof gaps:
  - Only 3 real trades were manually spot-checked in depth (Afflalo/Macklin, Boozer waiver claim, Dončić/Davis 3-team trade). The remaining 909 parsed trades and 150 candidates are unverified — that verification is the next work item, tracked in the queue, and is explicitly a human/agent curation task, not something this session claims to have done.
  - The 4 trade clauses `parse.mjs` logs as unparseable were not individually investigated — likely unusual phrasing (e.g. non-standard team references); low priority given 908/912 trades parsed cleanly, but not confirmed harmless.
  - `stars.mjs` fame list is hand-typed from general knowledge, not sourced or reviewed — it only affects candidate ranking order, never correctness, but could mis-rank some genuinely great chains lower than they deserve.
  - No draft-day selection data exists in this pipeline (BBRef transactions feed doesn't carry it) — all 150 candidates start at a trade/waiver-claim/sign, not a draft. This is documented as a known scope limit in `pipeline/README.md`, not a bug.

## 2026-07-02

### Step 1 P2 Fix Verification

- Fixed and verified the two Step 1 manual Browser QA findings.
- Files changed:
  - `src/App.tsx`
  - `src/styles.css`
  - `proof-log.md`
  - `project-tasks-queue.md`
- Implementation summary:
  - Added explicit Enter handling to `AnswerBox` so keyboard submit calls the same guess path as form submit/autocomplete.
  - Made transient event toasts ignore pointer events so make/turnover banners cannot intercept header home taps.
- Commands/tools used:
  - `npm run build`
  - In-app Browser plugin against `http://127.0.0.1:5173/`
  - Browser viewport checks at `390x844` and `1280x800`
- Build result:
  - Passed: TypeScript build succeeded and Vite production build completed.
- Page identity:
  - URL: `http://127.0.0.1:5173/`
  - Title: `Casuals — prove you're not one`
- Console health:
  - Passed: `tab.dev.logs({ levels: ['error', 'warn'], limit: 50 })` returned no entries after verification.
- Browser verification results:
  - Mobile `390x844`: menu loaded with Daily Chain, `PLAY DAILY`, stats, Classic Games, and How To Play.
  - Mobile `390x844`: `PLAY DAILY` opened gameplay and `TIP OFF` enabled the answer input.
  - Mobile `390x844`: typing exact correct answer `Victor Oladipo` and pressing Enter advanced the chain, cleared the input, reset the clock to `24`, and revealed solved link copy.
  - Mobile `390x844`: typing wrong answer `Michael Jordan` and pressing Enter burned one possession, reset the clock to `14`, and showed turnover text.
  - Mobile `390x844`: autocomplete selection for `Paul George` still worked and reached the end sheet.
  - Mobile `390x844`: header home returned to menu from gameplay immediately after a turnover banner.
  - Mobile `390x844`: end-sheet `MENU` returned to menu after a completed game.
  - Desktop `1280x800`: menu and gameplay first viewport rendered without detected horizontal overflow.
  - Desktop `1280x800`: header home returned to menu from gameplay.
- Evidence screenshots saved outside the repo:
  - `/private/tmp/casuals-fix-mobile-menu.png`
  - `/private/tmp/casuals-fix-mobile-enter-correct.png`
  - `/private/tmp/casuals-fix-mobile-header-home.png`
  - `/private/tmp/casuals-fix-mobile-end-sheet.png`
  - `/private/tmp/casuals-fix-desktop-menu.png`
  - `/private/tmp/casuals-fix-desktop-gameplay.png`
- Proof gaps:
  - Narrow `360x740` viewport remains untested.
  - No automated regression tests were added in this fix pass.

### Step 1 Manual Browser QA

- Ran in-app Browser QA against `http://127.0.0.1:5173/`.
- Browser/tooling:
  - In-app Browser plugin: available and used.
  - Mobile viewport: `390x844`.
  - Desktop viewport attempted: `1280x800`.
- Evidence screenshots saved outside the repo:
  - `/private/tmp/casuals-qa-mobile-menu.png`
  - `/private/tmp/casuals-qa-mobile-ready.png`
  - `/private/tmp/casuals-qa-mobile-suggestions.png`
  - `/private/tmp/casuals-qa-mobile-wrong.png`
  - `/private/tmp/casuals-qa-mobile-correct.png`
  - `/private/tmp/casuals-qa-mobile-win.png`
  - `/private/tmp/casuals-qa-mobile-share.png`
  - `/private/tmp/casuals-qa-mobile-archive-lal.png`
  - `/private/tmp/casuals-qa-mobile-loss.png`
  - `/private/tmp/casuals-qa-mobile-hint.png`
  - `/private/tmp/casuals-qa-mobile-violation.png`
  - `/private/tmp/casuals-qa-header-home-stuck.png`
- Page identity passed:
  - URL: `http://127.0.0.1:5173/`
  - Title: `Casuals — prove you're not one`
- Console health passed during observed mobile runs:
  - `tab.dev.logs({ levels: ['error', 'warn'], limit: 50 })` returned no relevant entries.
- Mobile flow results:
  - App loaded to menu with `Daily Chain` and `PLAY DAILY`.
  - `PLAY DAILY` opened gameplay.
  - `TIP OFF` enabled the answer input.
  - Autocomplete suggestions appeared while typing.
  - Wrong autocomplete selection burned one possession, reset clock to `14`, and showed turnover event text.
  - Correct autocomplete selection advanced the chain, banked points, reset clock to `24`, and revealed solved link copy.
  - Hint appeared at shot clock `10`.
  - Shot-clock violation reduced possessions and revealed stronger hint copy.
  - Win flow reached end sheet with result stamp, score, recap, and `SHARE` / `REPLAY` / `MENU`.
  - `SHARE` copied result text and showed `Copied result`.
  - `REPLAY` restarted the current puzzle from ready state with `TIP OFF` and disabled input.
  - Loss flow reached end sheet with `CERTIFIED CASUAL`.
  - Archive selection opened the Lakers puzzle from Classic Games.
  - Mute button toggled visible state from `Mute sound` / `M` to `Turn sound on` / `S`.
- Findings:
  - P2: Pressing Enter in the answer input after filling an exact correct answer did not submit the guess in the in-app Browser run. Autocomplete mouse/tap selection did submit correctly. Likely owner: `src/App.tsx` `AnswerBox`.
  - P2: Header home button was visible and uniquely locatable, but did not return from gameplay to the menu during the later gameplay run, including a coordinate tap on the header. Evidence: `/private/tmp/casuals-qa-header-home-stuck.png`. Likely owner: `src/App.tsx` `Header` / app view state wiring or click target layering.
- Proof gaps:
  - Desktop `1280x800` screenshot evidence could not be captured cleanly. Two artifacts were invalid/tiny, and a clean re-run timed out in the Browser runtime. Desktop DOM observation was attempted, but screenshot proof remains incomplete.
  - `MENU` button from the end sheet was visible on win/loss sheets, but the dedicated click-to-menu assertion was not completed because the header-home bug and browser timeout interrupted the final desktop/reset pass.
  - Narrow `360x740` viewport was not tested.

### Progress Completed

- Recovered project context from `PLAN.md`, package files, existing data, styles, and game engine files.
- Confirmed workspace is not currently a git repository, so there is no branch/history metadata to inspect.
- Added React app entrypoint in `src/main.tsx`.
- Added playable app shell in `src/App.tsx`:
  - Menu screen with daily chain, stats, archive, and how-to-play.
  - Game screen with scoreboard, possession display, shot clock bar, chain cards, autocomplete answer input, event toasts, and end sheet.
  - Share result support through the existing `shareText` engine helper.
  - Stats recording through the existing `storage` helper.
- Added reset support to `useGame` in `src/game/engine.ts` so Replay restarts the current puzzle.
- Updated daily puzzle date logic in `src/data/puzzles.ts` to roll over at midnight America/New_York instead of UTC.
- Added small CSS polish in `src/styles.css` for header button reset and basketball icon coloring.
- Started Vite dev server at `http://127.0.0.1:5173/`.
- Replaced `WORKLOG.md` with split tracking files:
  - `project-tasks-queue.md`
  - `proof-log.md`
- Created `qa-agent-step-1-prompt.md` for manual browser QA handoff.

### Verification Evidence

- `npm run build`
  - Result: passed.
  - Output summary: TypeScript build succeeded; Vite production build completed.
- `curl -I http://127.0.0.1:5173/`
  - Result: passed.
  - Output summary: dev server returned `HTTP/1.1 200 OK`.

### Attempted Verification

- Playwright browser verification against `http://127.0.0.1:5173/`
  - Result: blocked by local sandbox.
  - Failure summary: Chromium failed to launch with `bootstrap_check_in ... Permission denied (1100)`.
  - Follow-up: run browser-level visual and interaction QA manually or in an environment where Chromium can launch.

### Initial Proof Gaps

- No successful browser screenshot captured yet. Superseded in part by the Step 1 manual Browser QA entry above.
- No completed end-to-end browser interaction run yet. Superseded in part by the Step 1 manual Browser QA entry above.
- No automated unit tests added yet.
