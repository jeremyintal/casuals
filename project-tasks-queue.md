# Casuals Project Tasks Queue

Living queue for planned work, open items, decisions, and retrospective notes. Use `proof-log.md` for completed progress and verification evidence.

**New here? Read `AGENTS.md` first** — it is the canonical operating manual (repo map, design invariants, puzzle authoring rules, session workflow contract). `PLAN.md` holds strategy and reasoning.

## LAUNCH SCOPE DECISION — 2026-07-17 (decided by Jeremy; recorded by Claude)

1. Casuals launches publicly the week of Jul 22, 2026 as a soft beta with **10 connect-the-dot trade puzzles**, selected from the 13 already shipped. **No new curation is required before launch.**
2. Client-side answers are accepted at launch: no backend, no accounts. The Supabase milestone (P4) is post-traction work, not a launch gate.
3. The 60-puzzle runway target is void as a launch gate. Runway math is acknowledged: 10 puzzles = 10 daily slots; the 3 unused shipped puzzles are day-11+ inventory; a standing minimum of one 3-puzzle curation batch per week begins the week after launch. Corpus strategy gets revisited at the first post-launch Friday check-in.
4. Ordering the launch 10: honor the adjacency rule (`dal-dsj-kyrie` and `dal-dsj-morris-davis` never on adjacent days).
5. Remaining pre-launch work is only: select/order the 10, final readiness pass, public URL, launch list + share text (see `../STATUS.md` focus items).

## Current Priorities

> Pre-launch priorities follow the July 17 scope decision above. Curation and backend work remain important post-launch work, but neither is a soft-beta gate.

**Recently shipped (context, not open work):**
- **Copy reframed to "Turn X into Y in N moves" GM framing (2026-07-03).** Menu, archive rows, tagline, how-to-play, and share/challenge text all updated — see `proof-log.md`. New puzzles added to `src/data/puzzles.ts` must populate `start.player` (bare player name) alongside `start.title` — the copy silently breaks if it's skipped, see `AGENTS.md`.
- **Growth plan phase 1 shipped (2026-07-03).** Deep-link fix, "Challenge a friend" button, and per-device share attribution are built and verified — see `proof-log.md`. Remaining phase 1 item is tracked as **P5** below.
- **First asset-lineage viewer shipped (2026-07-17).** `Keon Johnson pick → OG Anunoby` is modeled as a sourced asset graph with a contribution path and a separate Quentin Grimes context branch. It is accessible from Asset Film Room and by `?lineage=nyk-keon-og`; it is not a 14th playable puzzle.

1. **Select and order the 10 soft-beta puzzles.** Choose from the 13 shipped puzzles; do not schedule `dal-dsj-kyrie` and `dal-dsj-morris-davis` on adjacent days because they share their first two links.
2. **Run the final launch-readiness pass.** Verify the selected daily order, direct puzzle links, share/challenge copy, menu/archive behavior, mobile layout, and console health on the production candidate.
3. **Publish the public URL.** Confirm the production deployment serves direct `?p=` and `?lineage=` routes without fallback failures.
4. **Prepare the launch list and share text.** Keep this deliberately small for the soft beta and instrument the first post-launch Friday review.
5. **Resume curation after launch.** Run at least one three-puzzle source-screened batch per week. The queue has 150 candidates: 5 shipped, 1 rejected, and 144 unverified. The former 60-puzzle target is a runway aspiration, not a gate.

- **P-Onboarding (parallel track): build the client-only half of `ONBOARDING_PLAN.md`.** Steps 1–2 of that plan's §10 build order — funnel instrumentation, first-open menu state, the ~30s skippable tutorial possession (half-speed clock, infinite possessions, isolated from real game state/stats), and the one-line Path B deep-link overlay. **No backend, no accounts, no auth** — those are steps 3–5 and are gated on the backend milestone (see P4). This slice is planned but not started; it can ship anytime and independently of curation. A ready-to-paste Codex prompt for exactly this scope was drafted in chat on 2026-07-13 — regenerate from `ONBOARDING_PLAN.md` §4, §8, §10 if not to hand. Implements the plan's recommended tutorial-first default (open decision #1, reversible). Related: the accounts/backend half is P4.

- **Post-launch reliability:** add focused automated tests for game engine state transitions and daily Eastern Time rollover.
- **Post-launch polish:** persist mute preference and improve Replay/Menu end-sheet behavior.
- **Post-traction backend milestone:** Supabase accounts + server-side answer validation in one build. Client-side answers are explicitly accepted for soft beta; guest-to-account stats merge remains the must-not-break future flow.
- **Post-launch growth:** generated image share card, followed by account-dependent squads, head-to-head, and buzzer-beater clips only when traction warrants them.

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
- Transaction graph, source scraping, and candidate chain generation are **done** (`pipeline/`, 2026-07-03) — 150 candidates were generated; 5 are shipped, 1 is rejected, and 144 remain unverified. The admin curation *screen* from `PLAN.md` §5 is still unstarted; for now curation is a manual pass over `pipeline/data/curation-queue.md` (see priority 1). Revisit building a real curation UI only if the manual workflow proves to be the bottleneck.
- Server-side answer validation is tracked as **P4** (bundled with the accounts backend milestone).

### Planning artifacts (no code; for handoff reference)

- `ONBOARDING_PLAN.md` — first-run + accounts strategy (execution split into P-Onboarding client-only and P4 backend halves).
- `DESIGN_PROMPT.md` — self-contained prompt (committed `af1deae`, 2026-07-13) for a Claude design session to redesign the web + mobile UI. Paste-ready; needs no repo access. Not yet run.
- `MOBILE_PLAN.md`, `GROWTH_PLAN.md` — see `AGENTS.md` required-reading list.

## Decisions

### 2026-07-13 (candidate #18 rejected; candidate #19 shipped)

- Rejected Portland candidate #18. Portland's official September 27, 2023 release explicitly maps Keon Johnson, Nassir Little and Jusuf Nurkić to the Deandre Ayton/Toumani Camara side, while Damian Lillard maps to Jrue Holiday and Milwaukee draft capital. The pipeline's aggregate team ledger produced a false Keon Johnson → Jrue Holiday edge; this chain must never ship.
- Approved and shipped Boston candidate #19 as `Kevin Garnett -> Keith Bogans -> Dwight Powell -> Jae Crowder -> Kyrie Irving`. All four selected edges are direct consideration packages confirmed by official Celtics releases and the parsed Basketball-Reference records.

### 2026-07-13 (batched launch-learning plan)

- **Superseded in launch timing by the July 17 soft-beta decision above.** The curation cadence and product-learning rationale remain useful post-launch; the former server-validation gate does not.
- Keep the 60-puzzle corpus as the two-month runway goal, not as a prerequisite for all market feedback. Curate in three-puzzle batches and evaluate activation, completion, difficulty, and return intent once 14–21 puzzles are available to trusted testers.
- Client-only onboarding and focused engine tests interleave with curation; mobile packaging and generated image sharing remain downstream of retention evidence.
- Corrected a stale strategy contradiction: `PLAN.md`'s graph model now lists sign-and-trades, not sign-after-waive edges. A waiver claim is valid; a waived player later signing elsewhere as a free agent is not a consideration-preserving edge.

### 2026-07-13 (backend vendor decided: Supabase)

- Resolved `ONBOARDING_PLAN.md` §11 open decision #2: **Supabase** is the backend for the accounts + server-side-answer-validation milestone (P4). Chosen for hosted Postgres + Auth (Apple/Google OAuth and email magic links out of the box, matching the passwords-banned rule) + edge functions for answer validation, consistent with the original `PLAN.md` §6 stack sketch. Clerk and Firebase were the considered alternatives.
- Consequence: P4 is no longer decision-blocked. It remains unstarted and is the heaviest post-traction item; it addresses accounts and answer validation in one build per `ONBOARDING_PLAN.md` §7. The client-only onboarding slice still has no dependency on this and can proceed independently.

### 2026-07-13 (docs audit + priority reconciliation)

- Audited `proof-log.md` and `project-tasks-queue.md` against actual repo state (11 shipped puzzle IDs, clean tree, `npm run build` + `npm test` green — "Validated 11 puzzles and 245 autocomplete names"). No state contradictions found; the two files agreed with each other and with the code.
- Fixed two cosmetic issues: the duplicate `0.` priority numbering (recently-shipped items moved into a labeled "Recently shipped" block so the numbered list is genuinely priority-ordered), and logged the two previously-untracked planning artifacts (`DESIGN_PROMPT.md`, `ONBOARDING_PLAN.md`).
- **Priority reconciliation:** curation stays **P1** (corpus size is the binding launch constraint). The client-only onboarding slice is added as **P-Onboarding, a parallel track** that does not displace P1 — it has a different skill set and no dependency on curation. The accounts/backend half of onboarding is folded into **P4** alongside server-side answer validation, since `ONBOARDING_PLAN.md` §7 establishes they share one backend build. This resolves the divergence between the queue (which ranked curation first) and the in-chat recommendation to build onboarding next: both are valid, and they are now explicitly concurrent tracks rather than competing for the same slot.

### 2026-07-10 (candidate #21 Sacramento lineage)

- Candidate #21 is approved for authoring as `DeMarcus Cousins -> Buddy Hield -> Justin Holiday -> Kevin Huerter -> Zach LaVine`. All four edges are direct Sacramento trade ledgers, including the final three-team transaction; no waiver, release, free-agent signing, or draft-pick bridge carries the selected thread.
- Required player answers are `Buddy Hield`, `Tyreke Evans`, and `Langston Galloway` for the Cousins return; `Justin Holiday`, `Jeremy Lamb`, and `Domantas Sabonis` for the Hield return; and `Kevin Huerter` for the Holiday trade. Zach LaVine is the target and Sidy Cissoko belongs in the auto-revealed final return, not in a guessable answer set.

### 2026-07-10 (stable daily share links)

- Daily share URLs now include both `d` (the human-facing daily number) and `p` (the stable puzzle ID), with deep-link parsing preferring `p`. Adding a puzzle changes modulo-based daily rotation; a day-only link generated by an older client could therefore open a different chain after deployment. Keeping both parameters preserves daily labeling and pins the actual challenge across corpus changes. Legacy links that contain only `d` remain best-effort because they do not carry recoverable puzzle identity.

### 2026-07-03 (onboarding & accounts plan)

- Added `ONBOARDING_PLAN.md` (planning only, nothing built): redesigns the first-run experience around a 30-second skippable tutorial possession (half-speed clock, infinite possessions, famous one-link trade) so new users stop burning their first daily while learning the rules, and introduces accounts as a post-activation soft ask — prompt appears on the first *win's* result sheet framed as streak protection, never as a gate. Auth is OAuth (Apple/Google) + email magic link only; passwords explicitly banned. Guest→account stats merge is transactional and treated as the one unforgivable-if-broken flow. Reaffirms `GROWTH_PLAN.md` §9's never-gate-the-loop rule as the plan's foundation.
- Key structural call: the plan splits into a client-only half (tutorial, first-open menu state, funnel instrumentation — steps 1–2 of its build order, cheap, could ship anytime) and a backend half (auth + stats tables, steps 3–5) that should be built as ONE post-traction milestone with server-side answer validation, since both need the same backend.
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
