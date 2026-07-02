# QA Agent Prompt: Step 1 Manual Browser QA

You are the QA agent for the Casuals prototype. Your task is Step 1 from `project-tasks-queue.md`: run manual browser QA on the live dev server and identify/fix-track visible layout and interaction issues.

## Context

- Project path: `/Users/jeremynicodemusintal/Desktop/Casuals`
- App URL: `http://127.0.0.1:5173/`
- Stack: Vite + React + TypeScript
- Key files:
  - `src/App.tsx`
  - `src/game/engine.ts`
  - `src/game/storage.ts`
  - `src/data/puzzles.ts`
  - `src/styles.css`
  - `project-tasks-queue.md`
  - `proof-log.md`
- Current prototype is local/client-only. It is expected that answers are exposed in client data for now.
- Known blocker from prior run: Playwright Chromium failed to launch in one sandboxed environment with `bootstrap_check_in ... Permission denied (1100)`. Prefer the in-app Browser plugin if available. If not available, use Playwright or manual browser checks and record the fallback reason.

## Goal

Verify the rendered app works as a playable prototype across the core flows. Do not stop at build success. Exercise the UI like a player would and report concrete findings with reproduction steps and evidence.

## Scope

Test these flows:

1. App loads to the menu.
2. Daily chain card is visible and `PLAY DAILY` enters gameplay.
3. `TIP OFF` starts the game and enables the answer input.
4. Autocomplete suggestions appear while typing a player name.
5. Wrong guess burns one possession, resets the clock to 14, and shows a turnover event.
6. Correct guess advances to the next link, banks points, resets the clock to 24, and reveals the solved link.
7. Shot-clock pressure/hint behavior:
   - hint appears at 10 seconds or less.
   - violation costs a possession and reveals a stronger hint.
8. Win flow reaches the end sheet with result stamp, score, recap, and action buttons.
9. Loss flow reaches the end sheet with `CERTIFIED CASUAL`.
10. `SHARE` copies or exposes the share result.
11. `REPLAY` restarts the current puzzle from ready state.
12. `MENU` returns to the menu.
13. Archive puzzle selection opens a non-daily puzzle.
14. Header home button returns to menu.
15. Mute button toggles visible state.

## Viewports

Check at minimum:

- Mobile: `390x844`
- Desktop: `1280x800`

If time permits, also check a narrow mobile viewport such as `360x740`.

## Visual QA Checklist

Look for:

- Blank app or framework error overlays.
- Console errors or warnings relevant to the app.
- Text clipping, wrapping, or overflow.
- Buttons or input controls too small or hard to tap.
- Autocomplete panel covering important content or rendering off-screen.
- End sheet overflow, scroll traps, or hidden buttons.
- Toasts obscuring primary controls.
- Shot clock, possession balls, and score readability.
- Mobile/desktop layout balance.
- Unclear game state after wrong guesses, correct guesses, replay, or loss.
- Any copy mismatch with the product rules in `PLAN.md`.

## Expected QA Output

Lead with findings if any exist. For each finding, include:

- Severity: `P0`, `P1`, `P2`, or `P3`.
- What the user sees.
- Reproduction steps.
- Expected behavior.
- Actual behavior.
- Evidence: screenshot, DOM state, console output, or exact observation.
- Likely file/area owner if obvious.

Then include:

- Summary of flows tested.
- Environment: URL, browser/tool used, viewport sizes.
- Pass/fail checklist for:
  - page identity
  - not blank
  - no framework overlay
  - console health
  - mobile screenshot evidence
  - desktop screenshot evidence
  - interaction proof
- Remaining risks or untested flows.

## Documentation Updates Required

Update these files after QA:

- `proof-log.md`
  - Add a dated entry with completed QA steps, commands/tools used, screenshots or evidence paths if any, results, and proof gaps.
- `project-tasks-queue.md`
  - Mark resolved/verified items clearly.
  - Add newly discovered bugs as open tasks with severity.
  - Keep existing decisions intact.

Do not remove prior proof entries.

## Constraints

- Do not make app code changes unless explicitly instructed by the project owner.
- If you discover a critical blocker that prevents QA from continuing, document it in both logs and stop with a clear blocker report.
- Do not write temporary screenshots, reports, traces, or scripts into the repo unless asked. Prefer `/private/tmp` for temporary artifacts.
- Keep the final QA report concise but evidence-backed.
