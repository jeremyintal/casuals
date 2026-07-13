# Casuals Proof Log

Chronological record of completed progress, verification commands, test results, and known proof gaps. Use `project-tasks-queue.md` for open tasks and decisions.

## 2026-07-13 (strategy review + Sacramento puzzle shipment)

### Progress Completed

- Reviewed Fable's `PLAN.md`, `MOBILE_PLAN.md`, `GROWTH_PLAN.md`, `ONBOARDING_PLAN.md`, task queue, proof log, latest commits, and actual repository state. Ratified the core direction while changing execution from a 60-puzzle-first sequence to three-puzzle curation batches with a product-learning checkpoint at 14–21 puzzles.
- Corrected `PLAN.md`'s stale `sign-after-waive` graph-edge label to `sign-and-trade`, aligning strategy with the established rule that a waiver claim preserves lineage but a later free-agent signing does not.
- Authored and shipped verified candidate #21 as `sac-cousins-lavine`: `DeMarcus Cousins -> Buddy Hield -> Justin Holiday -> Kevin Huerter -> Zach LaVine`, difficulty 4 (`Tape study`). Added Sacramento team metadata and the four missing autocomplete names: Tyreke Evans, Langston Galloway, Justin Holiday, and Kevin Huerter.
- Added a permanent validator contract for the puzzle ID, target, and complete player-return answer arrays. The first run failed as intended with `Missing sac-cousins-lavine puzzle`; the completed implementation passes.

### Verification Evidence

- Clean baseline `npm run build` passed before edits.
- Final `npm test` passed: `Validated 12 puzzles and 249 autocomplete names.`
- Final `npm run build` passed: TypeScript and Vite completed with 33 modules transformed.
- In-app browser playthrough at `?p=sac-cousins-lavine` used alternate answers `Tyreke Evans` and `Domantas Sabonis`, then `Kevin Huerter`. All advanced correctly; the game reached `SICKO`, auto-revealed Zach LaVine and Sidy Cissoko, and rendered every recap plus the epilogue.
- The archive row rendered `SAC DeMarcus Cousins -> Zach LaVine`, `Tape study · 4 moves`, with the completed result. Result and menu states both reported document/body width exactly 360 at a `360x740` viewport, with no horizontal overflow. Browser console warning/error check returned no entries.

### Decision

- Keep 60 verified puzzles as runway, not as a reason to postpone learning. Complete the current curation batch at 14 shipped puzzles, then interleave client onboarding and engine reliability work while continuing later content batches.
- Public launch still requires server-side answer validation. Mobile and image-share work remain deferred until activation and retention evidence justify them.

### Proof Gaps / Remaining Work

- This session did not collect external user activation or retention data; the 14–21 puzzle checkpoint defines when to begin that learning, not a claim that the hypothesis is validated.
- Native share-sheet behavior and server-side answer validation remain unverified launch blockers. Browser QA covered the new puzzle's gameplay and layout, not every existing puzzle.

## 2026-07-13 (tracking-doc audit + priority reconciliation)

### Progress Completed

- Audited `proof-log.md` and `project-tasks-queue.md` for staleness, cross-file contradictions, and inconsistent next-steps, at the user's request. Documentation-only change; no game code touched.
- Verified doc claims against actual repo state rather than trusting the docs: 11 shipped puzzle IDs enumerated from `src/data/puzzles.ts` (`lal-bradley-luka` … `min-lavine-gobert`), clean working tree, candidate #21 (Sacramento) confirmed verified-but-not-shipped (no `sac-` puzzle present; latest commit `fff41dc` is a verification commit, matching both docs' "authoring pending" status).
- Fixed the duplicate `0.` priority numbering in the queue by splitting recently-shipped context out of the numbered priority list, and logged the two previously-untracked planning artifacts (`DESIGN_PROMPT.md`, `ONBOARDING_PLAN.md`).
- Reconciled the one real next-steps divergence: the queue ranked curation P1 while the in-chat recommendation was to build onboarding next. Resolved by making curation P1 (binding launch constraint) and the client-only onboarding slice a labeled parallel track (P-Onboarding), with the accounts/backend half folded into P4 next to server-side answer validation per `ONBOARDING_PLAN.md` §7.

### Verification Evidence

- `grep -oE "id: '[^']+'" src/data/puzzles.ts` → 11 IDs; `git status --short` → empty (clean).
- Stale-count grep across tracking docs found only correctly-dated historical references (07-06 review "9 shipped puzzles", 07-03 reframe "all 9 puzzles", 07-10 Clippers "10 puzzles") — snapshots of past state, not current-state claims.
- `npm run build` → PASS (TypeScript + Vite). `npm test` → PASS, "Validated 11 puzzles and 245 autocomplete names." Both confirm the docs' "green" claims are still accurate at this commit.

### Proof Gaps / Remaining Work

- Audit was scoped to the two tracking files plus a spot-check of counts and build/test state; a line-by-line reverification of every historical proof-log entry's original evidence was not repeated (those entries are dated records, not current claims).
- No source-code or gameplay behavior was exercised beyond `npm test`; this change adds no runtime behavior.

## 2026-07-10 (Sacramento DeMarcus Cousins to Zach LaVine candidate verification)

### Progress Completed

- Verified candidate #21 from `pipeline/data/curation-queue.md`: Sacramento `DeMarcus Cousins -> Buddy Hield -> Justin Holiday -> Kevin Huerter -> Zach LaVine` across transactions dated 2017-02-20, 2022-02-08, 2022-07-06, and 2025-02-03.
- Matched all four edges to the parsed Basketball-Reference transaction records in `pipeline/data/transactions.json`. Each selected player arrived in Sacramento in one trade and later left in another Sacramento trade; no waiver, release, free-agent signing, or draft-pick bridge carries the thread.
- Independently cross-checked the transactions against official NBA/team releases:
  - 2017 DeMarcus Cousins trade: https://www.nba.com/kings/news/kings-acquire-hield-evans-galloway
  - 2022 Buddy Hield trade: https://www.nba.com/kings/news/kings-acquire-domantas-sabonis-justin-holiday-jeremy-lamb-and-2023-second-round-draft-selection
  - 2022 Justin Holiday trade: https://www.nba.com/news/hawks-kings-kevin-huerter-trade
  - 2025 Kevin Huerter three-team trade: https://www.nba.com/kings/news/kings-acquire-zach-lavine-sidy-cissoko-and-multiple-draft-picks-in-three-team-trade
- Confirmed the complete player-return sets for authoring: Sacramento received Buddy Hield, Tyreke Evans, and Langston Galloway in 2017; Domantas Sabonis, Justin Holiday, and Jeremy Lamb in February 2022; Kevin Huerter in July 2022; and Zach LaVine plus Sidy Cissoko in 2025. Draft picks and trade exceptions are reveal context, not player answers.

### Verification Evidence

- The candidate queue's dates, teams, sent assets, and received assets match the four independent official releases.
- The 2025 transaction is a valid three-team ledger edge: Sacramento sent Kevin Huerter to Chicago as part of the same transaction in which Sacramento received Zach LaVine from Chicago and Sidy Cissoko plus draft capital from San Antonio. This satisfies the game's established aggregate team-ledger treatment of multi-team trades.
- `npm run build` passed after verification: TypeScript and Vite completed successfully with 33 modules transformed.
- `npm test` passed: `Validated 11 puzzles and 245 autocomplete names.` The first sandboxed attempt could not create `tsx`'s local IPC socket (`EPERM`); rerunning the same command with the permitted execution context completed normally and exposed no content failure.
- No source conflict or broken chain-of-consideration was found. Candidate #21 is verified and ready for puzzle authoring, but is not yet counted as shipped.

### Decision

- Use DeMarcus Cousins as the GM-framed start and Zach LaVine as the target. Use Buddy Hield, Justin Holiday, and Kevin Huerter as the canonical intermediate route while accepting every headline player returned on each guessable link.
- Sidy Cissoko should appear in the final reveal alongside LaVine. He is not a guessable answer because the final transaction auto-reveals after the Huerter link is solved.

### Proof Gaps / Remaining Work

- The live Basketball-Reference HTML was not fetched again; the primary-source side of the check used the pipeline's previously fetched BBRef records. Current official NBA/team releases supplied the independent web cross-check.
- Reveal, question, hint, target, and epilogue copy have not been authored. The puzzle has not been added to `src/data/puzzles.ts` or `src/data/players.ts`, so `npm test` content validation and browser playthrough QA remain pending.
- The official 2025 release describes Sacramento's full aggregate return, but does not assign individual incoming assets one-for-one to Huerter versus the other Sacramento players sent in the three-team deal. The game models multi-team trades by the franchise's aggregate sent/received ledger, consistent with existing puzzle rules and pipeline representation.

## 2026-07-10 (Minnesota Zach LaVine to Rudy Gobert puzzle + content validation)

### Progress Completed

- Verified candidate #11 from `pipeline/data/curation-queue.md`: Minnesota `Zach LaVine → Jimmy Butler → Robert Covington → Malik Beasley/Jarred Vanderbilt → Rudy Gobert` across transactions dated 2017-06-22, 2018-11-12, 2020-02-05, and 2022-07-06.
- Confirmed all four edges against the parsed Basketball-Reference records in `pipeline/data/transactions.json`, including Minnesota's per-team ledger in the 2020 four-team trade. No waiver, release, separate free-agent signing, or draft-pick bridge connects the player thread.
- Independently cross-checked the transactions against official NBA/team releases:
  - 2017 Jimmy Butler trade: https://www.nba.com/timberwolves/timberwolves-acquire-three-time-nba-all-star-and-2016-17-all-nba-third-team-selection-jimmy-butler
  - 2018 Butler/Covington trade: https://www.nba.com/timberwolves/news/minnesota-timberwolves-acquire-robert-covington-dario-saric-jerryd-bayless-and-future-second
  - 2020 four-team Covington trade: https://www.nba.com/2019-20-trade-tracker and https://www.nba.com/nuggets/news/nuggets-four-team-trade-020520a
  - 2022 Rudy Gobert trade: https://www.nba.com/timberwolves/news/minnesota-timberwolves-acquire-center-rudy-gobert-from-utah-jazz
- Shipped the chain as `min-lavine-gobert`, difficulty 4 (`Tape study`), with three guessable links, complete multi-asset answer sets, source-grounded reveals/hints, and the Gobert trade as the auto-revealed finale.
- Added `npm test` using `tsx` and `scripts/validate-puzzles.ts`. The validator checks unique puzzle IDs, known team metadata, required text, 2-4 question links, 3-5 total moves, canonical-answer membership, and autocomplete coverage; it also pins the new Minnesota answer sets.
- Added missing team metadata for Memphis, Portland, Chicago, Denver, and Atlanta. The validator exposed that existing Clippers content had silently fallen back to bare `MEM`/`POR` labels because those teams were absent.

### Verification Evidence

- Clean baseline: `npm run build` passed before changes.
- Proof-first test sequence: initial validator run exposed missing `MEM` metadata; after adding existing missing `MEM`/`POR` records, it produced the intended red failure (`Expected ... puzzle to be added`, `10 !== 11`). After authoring and adding the remaining team metadata, `npm test` passed: `Validated 11 puzzles and 245 autocomplete names.`
- Final `npm run build` passed: TypeScript and Vite production build completed with 33 modules transformed.
- Final `npm test` passed after simplification. The temporary exact `11`-puzzle assertion was removed after capturing the red proof because retaining it would make every future valid puzzle addition fail; the permanent test instead pins `min-lavine-gobert` and its complete answer contract. Inline simplification and code-review passes found no remaining actionable issues.
- Browser playthrough at `?p=min-lavine-gobert` used alternate answer `Justin Patton`, unaccented `Dario Saric`, and unaccented `Juan Hernangomez`; all three advanced correctly, proving alternate-answer and diacritic normalization paths. The game reached `SICKO`, auto-revealed Rudy Gobert, and rendered all four recaps plus the epilogue.
- Archive verification showed `MIN Zach LaVine → Rudy Gobert`, `Tape study · 4 moves`, with the persisted `SICKO` result. Gameplay result sheet and menu both reported no horizontal overflow at `360x740`; browser console warning/error checks returned no entries.

### Decision

- Candidate #11 is verified, editorially complete, and shipped. Zach LaVine is the GM-framed starting player; Jimmy Butler, Robert Covington, and Malik Beasley are canonical intermediate answers, while every headline player Minnesota received remains accepted.
- Content validation is now a required local gate through `npm test`; engine transition, rollover, storage, and share-format tests remain separate open work.

### Proof Gaps / Remaining Work

- The live Basketball-Reference HTML was not fetched again; verification used the pipeline's previously fetched BBRef records plus independent official NBA/team releases.
- `npm test` validates static puzzle contracts and the complete Minnesota answer sets, but it does not execute game-engine transitions or browser behavior. Those broader automated tests remain in the queue.
- Adding an eleventh puzzle changes modulo-based daily rotation, but daily shares now include stable puzzle IDs; legacy day-only links remain best-effort.

## 2026-07-10 (Clippers Chris Paul to James Harden candidate verification)

### Progress Completed

- Verified candidate #6 from `pipeline/data/curation-queue.md`: Clippers `Chris Paul → Patrick Beverley → Eric Bledsoe → Robert Covington → James Harden` across four transactions dated 2017-06-28, 2021-08-16, 2022-02-04, and 2023-11-01.
- Confirmed every edge against the parsed Basketball-Reference transaction records in `pipeline/data/transactions.json`, including the per-team asset ledgers. All four edges are direct Clippers trade acquisitions followed by later Clippers trade departures; no waiver, release, free-agent signing, draft-pick bridge, or parenthetical parser artifact is involved.
- Cross-checked each transaction against official NBA/team releases:
  - 2017 Chris Paul trade: https://www.nba.com/rockets/news/chris-paul
  - 2021 Eric Bledsoe trade: https://www.nba.com/grizzlies/news/grizzlies-acquire-patrick-beverley-rajon-rondo-and-daniel-oturu-from-clippers-210816
  - 2022 Robert Covington/Norman Powell trade: https://www.nba.com/news/clippers-blazers-trade-norman-powell-eric-bledsoe-robert-covington
  - 2023 James Harden trade: https://www.nba.com/clippers/news/clippers-acquire-10-time-nba-all-star-james-harden-and-p-j-tucker-in-three-team-deal
- Corrected the earlier shorthand description of this candidate. Lou Williams and Rajon Rondo form a separate valid branch (`Chris Paul → Lou Williams → Rajon Rondo → Eric Bledsoe`) represented by other candidates in the generated queue. Candidate #6 reaches Harden through Patrick Beverley and Robert Covington; joining both branches into one chain would be inaccurate.
- Authored and shipped the verified chain as `lac-paul-harden` in `src/data/puzzles.ts`: three guessable links plus the auto-revealed final Harden transaction, difficulty 4 (`Tape study`), with complete question, reveal, hint, target, and epilogue copy.
- Preserved the multi-asset answer rule: all seven player returns in the 2017 Chris Paul trade are accepted, Eric Bledsoe is accepted in 2021, and either Robert Covington or Norman Powell is accepted in 2022. Added the previously missing 2017 return names to `src/data/players.ts`.

### Verification Evidence

- `npm run build` passed before verification work: TypeScript and Vite production build completed successfully.
- `npm run build` passed again after implementation: 33 modules transformed and the production bundle completed with no TypeScript errors.
- Queried `pipeline/data/transactions.json` for the four dates and inspected the complete `LAC.in` / `LAC.out` ledgers. Player IDs maintain identity across each adjacent transaction: `paulch01 → beverpa01 → bledser01 → covinro01 → hardeja01`.
- Official releases independently match the dates, players, direction, and multi-team attribution stored by the pipeline.
- Static content checks confirmed 10 puzzles, `totalMoves(puzzle) === 4`, the expected answer arrays, and every accepted answer present in `PLAYER_LIST` through `normalizeName` matching.
- In-app browser playthrough at `?p=lac-paul-harden` passed end to end: used alternate answer `Lou Williams` for link 1, `Eric Bledsoe` for link 2, and alternate answer `Norman Powell` for link 3; the game reached `SICKO`, auto-revealed James Harden, and rendered all four transaction recaps plus the epilogue.
- Browser menu verification confirmed the new archive row reads `Chris Paul → James Harden`, `Tape study · 4 moves`, and retains the completed result. A `360x740` viewport check reported document/body width exactly 360 with no horizontal overflow; the end sheet remained legible and scrollable. Browser console warning/error check returned no entries.
- Adversarial review found a cross-version deep-link failure introduced by growing the corpus from 9 to 10 puzzles: an old client could share `?d=10` for puzzle index 0 while a new client would resolve the same day number to puzzle index 9. Fixed `shareUrl()` and the in-app address-bar sync so daily links carry both `d` and stable `p`; `parseDeepLink()` already resolves `p` first. This preserves the human-readable day number while pinning the actual puzzle across corpus changes.
- Deep-link fix verification: production build passed; a deliberately conflicting URL (`?d=10&p=lal-bradley-luka&src=share`) opened the Lakers Tony Bradley puzzle, proving `p` overrides `d`; opening the current Clippers puzzle settled the address bar to `?d=10&p=lac-paul-harden`. A second full playthrough reached the result sheet with no browser console warnings/errors. The in-app browser did not expose copied/native share text for direct inspection, so the generated text itself was not read back from the share surface.

### Decision

- Candidate #6 passes transaction verification and editorial QA and is now shipped. James Harden is the target; Patrick Beverley, Eric Bledsoe, and Robert Covington are the canonical intermediate answers, with every other headline return accepted under the game's multi-asset rule.

### Proof Gaps / Remaining Work

- Basketball-Reference pages were represented by the pipeline's previously fetched transaction data; the independent web cross-check used official NBA/team releases. No claim is made that the current live Basketball-Reference HTML was fetched again during this pass.
- No automated content regression test was added; verification used production builds, targeted static assertions, and a real browser playthrough. The broader automated-test gap remains tracked in `project-tasks-queue.md`.
- Adding a tenth puzzle changes modulo-based daily rotation assignments, but newly generated daily links now include a stable `p` value and remain pinned across future corpus changes. Legacy links containing only `d` still use current-corpus modulo resolution because they carry no puzzle identity to recover.

## 2026-07-06 (project review HTML)

### Progress Completed

- Generated `project-review.html`, a standalone owner-review page summarizing the project, hypothesis, problem, goals, current status, major work since the prior review, known gaps, and recommended next steps.
- Source material reviewed: `AGENTS.md`, `PLAN.md`, `project-tasks-queue.md`, `proof-log.md`, `pipeline/README.md`, `GROWTH_PLAN.md`, current puzzle data, pipeline counts, and recent git log.

### Verification Evidence

- Counted source state via local commands:
  - `src/data/puzzles.ts`: 9 shipped puzzles.
  - `pipeline/data/transactions.json`: 12,570 parsed transactions.
  - `pipeline/data/candidates.json`: 150 candidate chains.
  - Current daily number on July 6, 2026: 6.
- Confirmed git worktree was clean before generating the review artifact.

### Proof Gaps

- This is a documentation/report artifact only; no app build or browser QA was required or run for this change.

## 2026-07-03 (copy reframe + doc audit)

### Audit: found and fixed stale puzzle-count references

- User asked whether the plan docs were current. Checked `AGENTS.md`, `PLAN.md`, and `project-tasks-queue.md` against actual repo state rather than assuming. Found: `project-tasks-queue.md` correctly said 9 puzzles shipped, but `AGENTS.md` (2 places) and `PLAN.md` (2 places) still said 8 — the `dal-dsj-morris-davis` curation session had updated the queue but not these two files. Fixed all four references and added the growth-plan phase-1 shipment (previously unmentioned) to `AGENTS.md`'s current-state summary.

### Reframed core copy to "Turn X into Y in N moves" GM framing

- User request: make the pitch invite players to "play GM" and state the exact move count, rather than describing the mechanic abstractly as six degrees of separation.
- Files changed: `src/data/puzzles.ts` (added `start.player: string` to the `Puzzle` interface and populated it for all 9 puzzles; added `totalMoves(puzzle)` helper), `src/App.tsx` (hero tagline, daily-chain card title, archive row titles/subtitles, how-to-play list), `src/game/engine.ts` (`shareText`/`challengeText` now use the same framing), `AGENTS.md` (documented the new field so future puzzle authors don't skip it), `PLAN.md` (dated note under Positioning explaining the copy change and that it's presentation-only — turn-count invariants and possession system are unchanged).
- Chose to add a dedicated `start.player` field rather than parsing it out of `start.title`, because several starts involve multiple players (e.g. `hou-martin-olynyk`'s "Kevin Martin and Jeremy Lamb") and sentence structures vary too much across puzzles for reliable regex extraction — a schema field is more robust than string parsing.
- `totalMoves()` = `links.length + 1`, matching the total real transactions in the chain (guessable links plus the auto-revealed final one) — verified against every shipped puzzle: LAL 3, OKC 3, BOS 4, CLE 3, BKN 3, DAL(kyrie) 3, HOU 3, PHI 5, DAL(morris-davis) 4.
- Verification: `npm run build` passed after each step. Browser-verified via `mcp__Claude_Preview`: took a full accessibility snapshot of the menu confirming the tagline, daily-chain title ("Turn Terry Rozier into Derrick White in 4 moves"), and all 9 archive rows render the correct player/target/move-count combination; took a screenshot confirming layout isn't broken by the longer daily-card headline. Directly invoked `shareText()`/`challengeText()` via dynamic import in-page with a synthetic win state and confirmed both produce the new framing correctly, e.g. challenge text: `"I turned Tony Bradley into Luka Dončić in 3 moves — SICKO in 1:13. Think you can beat it?"`.
- Also verified at mobile viewport (390×844) via screenshot: the longer daily-card headline wraps cleanly to two lines, archive rows wrap without overflow, no layout breakage.

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
