# Backend Implementation Agent Prompt: Fix Step 1 QA Issues

You are the implementation agent for the Casuals prototype. Your task is to fix the two P2 interaction issues discovered during Step 1 manual browser QA, then verify the affected player flows in the running app.

Although this handoff is named for the backend implementation agent, the known issues are currently in the local Vite + React + TypeScript client. Do not introduce a backend for these fixes.

## Context

- Project path: `/Users/jeremynicodemusintal/Desktop/Casuals`
- App URL: `http://127.0.0.1:5173/`
- Stack: Vite + React + TypeScript
- Key files:
  - `src/App.tsx`
  - `src/game/engine.ts`
  - `src/game/storage.ts`
  - `src/data/puzzles.ts`
  - `src/data/players.ts`
  - `src/styles.css`
  - `project-tasks-queue.md`
  - `proof-log.md`
- Current prototype is local/client-only. Answers are exposed in client data for now.
- Step 1 QA evidence is recorded in `proof-log.md`.
- Open tasks are tracked in `project-tasks-queue.md`.

## Goal

Fix these Step 1 QA findings:

1. `P2` Answer input Enter submit does not work.
2. `P2` Header home button does not return from gameplay to menu.

After fixing, verify the relevant flows in browser, update the project logs, and leave the app in a coherent prototype state.

## Bugs To Fix

### 1. Enter Key Does Not Submit Answer

Observed during QA:

- Filling an exact correct answer in the answer input and pressing Enter did not submit the guess.
- Autocomplete click/tap selection did submit correctly and advanced gameplay.
- Likely owner: `src/App.tsx` `AnswerBox`.

Expected behavior:

- While the game is playing, typing a valid answer and pressing Enter submits the current input or active suggestion.
- Correct answer advances the chain, banks points, resets the clock to `24`, and reveals the solved link.
- Wrong answer burns one possession, resets the clock to `14`, and shows turnover event text.
- Existing autocomplete mouse/tap behavior must keep working.

Implementation notes:

- Inspect the `AnswerBox` form submit path, input key handling, suggestion state, and focus behavior.
- Prefer the smallest fix that makes native form submit and keyboard submit reliable.
- Avoid broad rewrites of game state or puzzle data.

### 2. Header Home Button Does Not Return To Menu

Observed during QA:

- Header `Back to menu` button was visible and uniquely locatable from gameplay.
- Activating it did not return to the menu in the later gameplay run.
- Coordinate tap on the header area also did not navigate home.
- Evidence screenshot: `/private/tmp/casuals-qa-header-home-stuck.png`
- Likely owner: `src/App.tsx` `Header` / app view state wiring or click target layering.

Expected behavior:

- From any gameplay state, clicking/tapping the header home button returns to the menu.
- The menu should show `Daily Chain`, `PLAY DAILY`, stats, Classic Games, and How To Play.
- The shot clock should not continue to trap the user in gameplay after returning home.
- The fix should not break the end-sheet `MENU` action.

Implementation notes:

- Inspect whether an overlay, background SVG, fixed layer, or disabled state is intercepting header clicks.
- Inspect `Header`, `App`, `GameScreen`, and relevant CSS stacking/pointer-event rules.
- Prefer a targeted fix that preserves the existing visual design.

## Required Verification

Do not stop at `npm run build`. Verify rendered behavior in a browser.

Use the in-app Browser plugin if available. If it is unavailable or fails, use Playwright/manual browser checks and record the fallback reason in `proof-log.md`.

Minimum checks:

1. `npm run build` passes.
2. App loads at `http://127.0.0.1:5173/`.
3. Page identity is correct:
   - URL: `http://127.0.0.1:5173/`
   - title: `Casuals — prove you're not one`
4. No blank app or framework error overlay.
5. No relevant console errors/warnings.
6. Mobile viewport `390x844`:
   - menu loads.
   - `PLAY DAILY` opens gameplay.
   - `TIP OFF` enables answer input.
   - typing a correct answer and pressing Enter advances the chain.
   - typing/selecting a wrong answer still burns a possession and resets clock to `14`.
   - autocomplete click/tap still works.
   - header home button returns to menu from gameplay.
7. End-sheet `MENU` returns to menu after a win or loss.
8. Desktop viewport `1280x800`:
   - menu and gameplay first viewport render without obvious clipping/overflow.
   - header home button returns to menu.

If browser screenshot capture is available, save temporary evidence outside the repo, preferably under `/private/tmp`, and list the paths in `proof-log.md`.

## Documentation Updates Required

Update `proof-log.md` after implementation:

- Add a dated entry for the fix.
- Include files changed.
- Include commands/tools used.
- Include browser verification results and screenshot/evidence paths if available.
- Include any proof gaps.

Update `project-tasks-queue.md`:

- Mark the two fixed P2 findings as resolved/verified if verification passes.
- Keep unresolved proof gaps or new issues as open tasks.
- Preserve existing decisions and retrospective notes.

## Constraints

- Keep edits narrowly scoped to the two QA findings and any verification/doc updates.
- Do not introduce a backend, database, auth, routing framework, or new app architecture.
- Do not remove prior proof entries.
- Do not write temporary screenshots, traces, or scratch scripts into the repo. Use `/private/tmp`.
- Do not rewrite the visual design unless required to fix click/pointer behavior.
- Respect existing local-client prototype assumptions.

## Final Report

Lead with whether both P2 issues were fixed and verified.

Include:

- Files changed.
- Verification commands.
- Browser/tool used and viewport sizes.
- Evidence paths.
- Any remaining risks or untested flows.
