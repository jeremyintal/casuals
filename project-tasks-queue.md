# Casuals Project Tasks Queue

Living queue for planned work, open items, decisions, and retrospective notes. Use `proof-log.md` for completed progress and verification evidence.

**New here? Read `AGENTS.md` first** — it is the canonical operating manual (repo map, design invariants, puzzle authoring rules, session workflow contract). `PLAN.md` holds strategy and reasoning.

## Current Priorities

1. Add focused automated tests for game engine state transitions and daily Eastern Time rollover.
2. Persist mute preference and improve Replay/Menu end-sheet behavior.
3. Add a small QA checklist and update `proof-log.md` after each implementation session.
4. Decide whether the next milestone is prototype polish or the real transaction-data pipeline.

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
- Transaction graph, source scraping, entity resolution, and admin curation work from `PLAN.md` remains unstarted.
- Decide when to introduce server-side answer validation.

## Decisions

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
