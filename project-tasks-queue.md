# Casuals Project Tasks Queue

Living queue for planned work, open items, decisions, and retrospective notes. Use `proof-log.md` for completed progress and verification evidence.

**New here? Read `AGENTS.md` first** — it is the canonical operating manual (repo map, design invariants, puzzle authoring rules, session workflow contract). `PLAN.md` holds strategy and reasoning.

## Current Priorities

0. **Growth plan phase 1 shipped (2026-07-03).** Deep-link fix, "Challenge a friend" button, and per-device share attribution are built and verified — see `proof-log.md`. Remaining phase 1 item: generated image share card (`GROWTH_PLAN.md` §3, §10) — moderate effort, not yet started. Phase 2+ items (squads, head-to-head, buzzer-beater clip) depend on accounts and are correctly deferred.
1. **Curate the candidate queue.** `pipeline/data/curation-queue.md` has 150 scored, unverified candidate chains; **1 down, ~49 more needed** to reach the plan's 60-puzzle runway target (9 shipped in `src/data/puzzles.ts` as of 2026-07-03). Fact-check against Basketball-Reference (or another primary source), write `reveal`/`hint1`/`hint2` copy in the game's voice, and add to `src/data/puzzles.ts` + `src/data/players.ts` following the schema and checklist in `AGENTS.md`. Done: `dal-dsj-morris-davis` (see `proof-log.md` 2026-07-03 curation entry — verified, in-browser tested, shipped). Strong next candidate already spot-checked: a Clippers Chris Paul → Lou Williams → Rondo → Bledsoe → Covington/Powell → Harden chain (see `proof-log.md` 2026-07-03 pipeline entry). **Scheduling note:** don't run `dal-dsj-kyrie` and `dal-dsj-morris-davis` on adjacent days — they share their first two links.
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
