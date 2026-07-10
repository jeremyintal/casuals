# Casuals Project Tasks Queue

Living queue for planned work, open items, decisions, and retrospective notes. Use `proof-log.md` for completed progress and verification evidence.

**New here? Read `AGENTS.md` first** — it is the canonical operating manual (repo map, design invariants, puzzle authoring rules, session workflow contract). `PLAN.md` holds strategy and reasoning.

## Current Priorities

0. **Copy reframed to "Turn X into Y in N moves" GM framing (2026-07-03).** Menu, archive rows, tagline, how-to-play, and share/challenge text all updated — see `proof-log.md`. New puzzles added to `src/data/puzzles.ts` must populate `start.player` (bare player name) alongside `start.title` — the copy silently breaks if it's skipped, see `AGENTS.md`.
0. **Growth plan phase 1 shipped (2026-07-03).** Deep-link fix, "Challenge a friend" button, and per-device share attribution are built and verified — see `proof-log.md`. Remaining phase 1 item: generated image share card (`GROWTH_PLAN.md` §3, §10) — moderate effort, not yet started. Phase 2+ items (squads, head-to-head, buzzer-beater clip) depend on accounts and are correctly deferred.
1. **Curate the candidate queue.** `pipeline/data/curation-queue.md` has 150 scored candidate chains; **3 are curated and shipped, 147 remain unverified, and 49 more shipped puzzles are needed** to reach the plan's 60-puzzle runway target (11 shipped in `src/data/puzzles.ts` as of 2026-07-10). Fact-check against Basketball-Reference (or another primary source), write `reveal`/`hint1`/`hint2` copy in the game's voice, and add to `src/data/puzzles.ts` + `src/data/players.ts` following the schema and checklist in `AGENTS.md`. Shipped from the queue: `dal-dsj-morris-davis`, `lac-paul-harden`, and `min-lavine-gobert` (see `proof-log.md`). The Lou Williams/Rajon Rondo route is a separate valid Clippers branch ending at Bledsoe and must not be combined with the Patrick Beverley/Robert Covington route to Harden. **Scheduling note:** don't run `dal-dsj-kyrie` and `dal-dsj-morris-davis` on adjacent days — they share their first two links.
2. Add focused automated tests for game engine state transitions and daily Eastern Time rollover.
3. Persist mute preference and improve Replay/Menu end-sheet behavior.
4. Decide when to introduce server-side answer validation (required before public launch — see `AGENTS.md` launch blockers).

## Open Tasks

### Prototype QA / Polish

- Step 1 manual browser QA completed with in-app Browser on 2026-07-02; see `proof-log.md`.
- Resolved/verified on 2026-07-02: P2 answer input Enter submit now advances correct guesses and burns possessions for wrong guesses; autocomplete click/tap still works.
- Resolved/verified on 2026-07-02: P2 header home button now returns from gameplay to menu, including during an active turnover banner.
- Resolved/verified on 2026-07-02: desktop `1280x800` menu/gameplay screenshot proof captured with no detected first-viewport horizontal overflow.
- Verify narrow mobile layout at `360x740`.
- Resolved/verified on 2026-07-02: end-sheet `MENU` click returns to the menu after a completed game.
- Mobile layout verified for menu, gameplay, autocomplete suggestions, win sheet, loss sheet, archive puzzle, hint, and violation states at `390x844`.
- Full mobile playthroughs verified for win, loss, turnover, violation, Replay, Share, archive selection, and mute toggle at `390x844`.
- Persist sound mute preference.
- Improve keyboard/autocomplete behavior and modal focus handling.
- Review copy and result-tier labels for consistency with `PLAN.md`.

### Testing

- Automated puzzle-content validation added 2026-07-10 (`npm test`): unique IDs, known teams, required copy, link/move bounds, canonical-answer membership, and autocomplete coverage. It also pins the Minnesota puzzle's complete alternate-answer sets.
- Add tests for wrong guess behavior.
- Add tests for shot-clock violation behavior.
- Add tests for win/loss transitions.
- Add tests for replay reset.
- Add tests for share text formatting.
- Add tests for Eastern Time daily rollover.
- Add tests for stats recording and streak updates.

### Data / Product

- Current prototype exposes puzzle answers in client data; acceptable for local prototype, but not MVP anti-cheat.
- Puzzle data is hand-entered and not source-verified in-app.
- Transaction graph, source scraping, and candidate chain generation are **done** (`pipeline/`, 2026-07-03) — 150 unverified candidates ready for curation. The admin curation *screen* from `PLAN.md` §5 is still unstarted; for now curation is a manual pass over `pipeline/data/curation-queue.md` (see priority 1). Revisit building a real curation UI once the manual pass shows it's the bottleneck.
- Decide when to introduce server-side answer validation.

## Decisions

### 2026-07-10 (stable daily share links)

- Daily share URLs now include both `d` (the human-facing daily number) and `p` (the stable puzzle ID), with deep-link parsing preferring `p`. Adding a puzzle changes modulo-based daily rotation; a day-only link generated by an older client could therefore open a different chain after deployment. Keeping both parameters preserves daily labeling and pins the actual challenge across corpus changes. Legacy links that contain only `d` remain best-effort because they do not carry recoverable puzzle identity.

### 2026-07-03 (onboarding & accounts plan)

- Added `ONBOARDING_PLAN.md` (planning only, nothing built): redesigns the first-run experience around a 30-second skippable tutorial possession (half-speed clock, infinite possessions, famous one-link trade) so new users stop burning their first daily while learning the rules, and introduces accounts as a post-activation soft ask — prompt appears on the first *win's* result sheet framed as streak protection, never as a gate. Auth is OAuth (Apple/Google) + email magic link only; passwords explicitly banned. Guest→account stats merge is transactional and treated as the one unforgivable-if-broken flow. Reaffirms `GROWTH_PLAN.md` §9's never-gate-the-loop rule as the plan's foundation.
- Key structural call: the plan splits into a client-only half (tutorial, first-open menu state, funnel instrumentation — steps 1–2 of its build order, cheap, could ship anytime) and a backend half (auth + stats tables, steps 3–5) that should be built as ONE milestone with server-side answer validation, since both need the same backend and validation is already a launch blocker.
- Open decisions left for the user in `ONBOARDING_PLAN.md` §11: tutorial-first vs. daily-first default, backend vendor (Supabase recommended), whether to prompt for an account on a day-1 loss (plan says wait for first win), and whether to pull the client-only half forward now or ship onboarding as one release with Phase 2.

### 2026-07-03 (mobile plan revision)

- Revised `MOBILE_PLAN.md` in response to a direct user request to make it "more robust, clear, complete, appropriately detailed." Added: a full section on deep linking via iOS Universal Links / Android App Links (the biggest gap — the growth-plan share links built 2026-07-03 do nothing useful on mobile without this), a concrete Capacitor plugin table, a data-continuity callout (web `localStorage` and native Capacitor Preferences stats do not share, no migration exists yet), execution-level local-notification scheduling detail including a documented timezone edge case (device-local scheduling is safe for the vast majority of the audience; noted the specific case where it isn't and why it's acceptable to defer), and concrete cost/tooling/timeline/OS-version specifics that were entirely absent before.
- Also corrected the plan's prior description of native sharing as greenfield work — the web client already calls `navigator.share()` (shipped in growth-plan phase 1); the mobile-specific work is narrower than originally scoped: swap to the Capacitor Share plugin specifically for WebView reliability, not build sharing from scratch.

### 2026-07-03 (growth phase 1 build)

- Built and verified the three cheapest, ungated items from `GROWTH_PLAN.md` §10 phase 1. See `proof-log.md` for the full change list and verification trail, including a real bug found and fixed: the arrival-tracking effect double-counted under `React.StrictMode`'s dev-mode double-invoke, fixed with a ref guard matching the existing `recordResult` pattern in `App.tsx`.
- Share attribution (`shareAttribution` in `storage.ts`) is explicitly per-device only, not aggregate analytics — documented directly in the type, not just in `GROWTH_PLAN.md`, so this limitation stays visible to whoever reads the code next.
- `navigator.share` (native share sheet) could not be exercised in the available test browser (Web Share API not exposed in headless automation) — flagged as a proof gap, not assumed working. Recommend a real-device spot-check (mobile Safari or Chrome) before leaning on it further.

### 2026-07-03 (growth strategy)

- Added `GROWTH_PLAN.md`: audits the current share mechanism (`shareText()` in `src/game/engine.ts`, `EndSheet` in `src/App.tsx`) and finds it text-only, broadcast-shaped, and missing a real deep link (share text ends with a static `'casuals.game'` string, not a link to the specific puzzle). Core thesis: shares only spread when they're a personal flex first and an ad for the game second — every tactic in the doc is tested against that bar. Recommends, in order: fix the deep link, add a "challenge a friend" direct-share button, add share attribution tracking, then a generated image share card, then squads/head-to-head (Phase 2+, needs accounts), then an auto-generated buzzer-beater video clip as the highest-ceiling but most expensive idea. No code changed — planning only.
- Open decisions left for the user in `GROWTH_PLAN.md` §11: whether "rapid-response" puzzle authoring around real trade news is a standing capability or ad-hoc around the deadline/draft windows; whether to reach out to guest-curator NBA-Twitter accounts now or later; image share card vs. buzzer-beater clip if only one can be built next (recommendation on record: image card, cheaper and improves every share vs. only buzzer-beater games).

### 2026-07-03 (mobile strategy)

- Added `MOBILE_PLAN.md`: recommends wrapping the existing web app with Capacitor (not a React Native rewrite — this app's shape doesn't need it) and using on-device local notifications for the daily reminder at MVP, avoiding a push-notification backend entirely for now. No mobile engineering work started yet; this is a planning artifact only, added to `AGENTS.md`'s required reading list.
- Open sequencing question left for the user in `MOBILE_PLAN.md` §7: start the Capacitor scaffold now in parallel with puzzle curation, or hold mobile work until the corpus is further built out. Recommendation on record is to start now (parallel work, different skill set than curation, useful for early TestFlight access with launch partners).

### 2026-07-03

- Executed the data pipeline milestone (user chose this over prototype polish when asked directly). Full detail and verification evidence in `proof-log.md` 2026-07-03.
- **Switched primary data source from prosportstransactions.com to Basketball-Reference.** prosportstransactions.com returns Cloudflare 403s to scripted requests; BBRef's season transaction pages are reachable, structurally consistent back to at least 2010, and were already the plan's cross-check source. This is a ratified update to `PLAN.md` §5.
- Chain generation is scoped to trade/waiver-claim/sign-anchored chains only, because BBRef's transaction feed has no draft-day selection records. Draft-anchored chains (the flagship Bradley → Dončić style) still require manual construction, same as today's shipped puzzle. Documented in `pipeline/README.md` and `AGENTS.md`, not treated as a bug to fix.
- Pipeline output (`candidates.json`, `curation-queue.md`) is explicitly unverified and must not be promoted straight into `src/data/puzzles.ts` — curation is a required step, not a formality, per the plan's credibility risk (PLAN.md §8).

### 2026-07-02 (continuity handoff)

- Added `AGENTS.md` as the canonical agent operating manual and `CLAUDE.md` as a pointer to it, so the project is continuable by any cold-start agent (Claude, Codex, or human). Game-rule constants are declared design invariants there and require explicit user sign-off to change.
- `PLAN.md` §0 updated with the continuity contract: strategy changes must be dated in PLAN.md §0; code changes must be evidenced in `proof-log.md`.
- Next-milestone decision (data pipeline vs. prototype polish) remains open and user-owned; the recommendation on record (PLAN.md) is the data pipeline, because the loop is proven and the 8-puzzle corpus is the binding constraint.

### 2026-07-02

- Treat the existing `styles.css` visual direction as the accepted UI system instead of generating a new concept, because the prior scaffold already had a coherent dark scoreboard aesthetic.
- Continue with the existing Vite + React + TypeScript setup rather than migrating to Next.js from the long-term product plan.
- Keep all game data local for this prototype, matching the current repo shape and avoiding backend/server validation until the playable client loop is solid.
- Implement Eastern Time daily rollover because the product plan explicitly says daily puzzles drop at midnight ET.
- Split project tracking into:
  - `project-tasks-queue.md` for open work, decisions, and planning.
  - `proof-log.md` for completed progress and testing evidence.

## Retrospective Notes

### 2026-07-02

- A durable tracking file should be created at the beginning of implementation sessions, not after the first handoff.
- Browser automation may be blocked by the local macOS sandbox; verification plans should include a fallback and clearly mark any missing visual QA.
