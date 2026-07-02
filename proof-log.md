# Casuals Proof Log

Chronological record of completed progress, verification commands, test results, and known proof gaps. Use `project-tasks-queue.md` for open tasks and decisions.

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
