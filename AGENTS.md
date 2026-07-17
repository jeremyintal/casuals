# Casuals — agent operating manual

You are working on **Casuals**, a daily web puzzle game: six degrees of separation for NBA players via real trade/waiver transaction chains ("How did the Lakers turn Tony Bradley into Luka Dončić?"). Read this file first; it exists so any agent (Claude, Codex, or other) can continue the project cold.

## Read these, in order

1. **`AGENTS.md`** (this file) — parameters, conventions, and rules of engagement
2. **`PLAN.md`** — full product strategy, game design reasoning, data strategy, roadmap, risks. Section 0 is the dated status snapshot
3. **`MOBILE_PLAN.md`** — iOS/Android strategy (Capacitor wrap, not a rewrite). Only relevant once mobile work starts; read before touching anything mobile-related
4. **`GROWTH_PLAN.md`** — virality/sharing strategy. Read before touching `shareText()`, the end-sheet share UI, or anything social/referral-related
5. **`ONBOARDING_PLAN.md`** — first-run experience and account-creation strategy (planning only, nothing built). Read before touching the how-to-play UI, adding any signup/auth, or building the tutorial
6. **`project-tasks-queue.md`** — open tasks, priorities, and the decision log. Pick work from here
7. **`proof-log.md`** — completed work with verification evidence. Append here after each session

## Current state (as of 2026-07-17)

Playable client-only prototype, QA-verified, production build green. Vite + React + TypeScript SPA, no backend. Git-initialized (`git init` done 2026-07-02) — commit as you go. 13 hand-curated puzzles ship in-app (see `src/data/puzzles.ts`). A separate verified asset-lineage viewer ships at `?lineage=nyk-keon-og`; it is not counted as a playable puzzle. The July 17 launch decision targets a public soft beta the week of July 22 with 10 selected puzzles; client-side answers and no accounts/backend are explicitly accepted for this learning release. See `project-tasks-queue.md` for the remaining launch sequence. Automated puzzle and lineage validation runs through `npm test`; focused engine/state tests are still unbuilt.

## Commands

```bash
npm install        # once
npm run dev        # dev server at http://127.0.0.1:5173/
npm test           # puzzle schema/content validation
npm run build      # tsc + vite build — must pass before ending a session
```

## Repo map

| Path | Owns |
|---|---|
| `src/game/engine.ts` | Game state machine (`useGame`), scoring, tiers, share text. All rule constants live here |
| `src/game/sounds.ts` | WebAudio-synthesized SFX (tick, swish, clank, buzzer, crowd), mute flag |
| `src/game/storage.ts` | localStorage stats, streaks, per-puzzle completion |
| `src/data/puzzles.ts` | Puzzle content + daily rotation (midnight **America/New_York** rollover) |
| `src/data/assetLineages.ts` | Sourced non-game asset graphs: nodes, causal edges, context branches, and source links |
| `src/data/players.ts` | Autocomplete player list + `normalizeName` (diacritics/punctuation-safe matching) |
| `src/data/teams.ts` | Team abbreviations and colors |
| `src/App.tsx` | All UI: menu, scoreboard, chain, answer box, end sheet, archive, stats |
| `src/styles.css` | The accepted visual system (dark scoreboard aesthetic) — extend it, don't replace it |
| `pipeline/` | Content pipeline: BBRef scraper → transaction parser → asset-lineage graph → candidate chains → curation queue. Not imported by `src/`. See `pipeline/README.md` before touching it |

## Design invariants — do NOT change without explicit user sign-off

These are the product's identity, chosen deliberately (reasoning in `PLAN.md` §2–3):

- **6 possessions** per game (six degrees theme = turn count)
- **24-second shot clock**; correct answer → fresh 24; wrong guess (turnover) → clock set to 14; expiry (violation) → lose a possession AND reveal a hint
- Chains show **start + target**; players fill the intermediate links in order; final transaction auto-reveals on completion
- **Any headline player** received in the transaction is an accepted answer for that link
- Scoring: banked remaining seconds per make, +25 buzzer-beater (≤3s), +100 per unused possession
- Tiers: 0 turnovers+violations = `SICKO`, ≤2 = `FILM JUNKIE`, else won = `LEAGUE PASS`, lost = `CERTIFIED CASUAL`
- One shared daily puzzle, midnight ET rollover; share grid uses 🟩🟧🟥⬛
- Brand voice: NBA Twitter, "prove you're not a casual." Game is called **Casuals**

## Puzzle authoring rules (content quality is the moat)

- Every chain must be a **real, source-verified** sequence of transactions. One wrong chain destroys credibility with the exact audience we need. Verify against Basketball-Reference and/or prosportstransactions.com before shipping
- Valid edges: trade, draft-night rights swap, sign-and-trade, waiver claim, pick → drafted player. **Invalid:** player waived/released then signed elsewhere as a free agent (the chain of consideration breaks)
- For multi-team trades, the franchise-level sent/received ledger is only a discovery aid. If an official release explicitly partitions incoming assets among separate outgoing packages, do not connect assets across those sub-deals merely because the pipeline aggregated them into one team ledger. Candidate #18 is the canonical rejected example: Keon Johnson was consideration for Deandre Ayton/Toumani Camara, while Damian Lillard was consideration for Jrue Holiday.
- Schema is `Puzzle` in `src/data/puzzles.ts`: each link needs `answers` (all headline players in the return), `canonical`, `reveal` (the storytelling payoff — write it well), `hint1` (free, shown at ≤10s), `hint2` (shown after a violation)
- `start.title` is the full sentence shown on the chain card ("Lakers draft Tony Bradley"); `start.player` is the bare display name ("Tony Bradley") — required separately because it feeds the "Turn X into Y in N moves" GM-framed copy on the menu, archive rows, and share/challenge text (`totalMoves()` in `puzzles.ts`, used throughout `App.tsx` and `engine.ts`). Don't skip populating it when adding a puzzle — the copy silently renders `undefined` if you do.
- Add every answer name to `src/data/players.ts`; names with diacritics must match via `normalizeName`
- 2–4 question links per puzzle; difficulty 1–5 rated by intermediate-player obscurity and chain length

## Asset-lineage authoring rules

- Asset lineages are explanatory graphs, not automatically playable puzzles. Never imply a direct player-for-player trade when the connection runs through draft rights, picks, or a package.
- Mark only consideration-preserving edges with `onContributionPath: true`. Other assets returned in the same transaction belong on `context` branches unless they independently continue toward the target.
- Distinguish a draft pick from the player selected with it. Model both nodes and connect them explicitly.
- Require at least two official NBA/team sources, stable source URLs, and the framing “This asset helped contribute to the acquisition of…” for partial-package causality.

## Workflow contract (how sessions stay continuable)

1. Start: read the four docs above; run `npm run build` to confirm a clean baseline
2. Pick work from `project-tasks-queue.md` priorities, or the user's direct request
3. End of session, always:
   - `npm run build` passes
   - Append to `proof-log.md`: what changed, files touched, verification commands + results, evidence, and honest **proof gaps**
   - Update `project-tasks-queue.md`: mark resolved items, add discovered work, record decisions with reasoning and date
   - If the plan/strategy materially changed, update `PLAN.md` §0 (status) with the date
4. Browser QA: use an in-app/driver browser against the dev server; Playwright/Chromium may be blocked by the macOS sandbox (see proof-log 2026-07-02). Screenshots go outside the repo (`/private/tmp/`)
5. Never ship a puzzle you haven't fact-checked; never claim verification you didn't run

## Known post-beta risks

- Answers ship in the client bundle (view-source cheating). Explicitly accepted for the July 2026 soft beta; server-side validation is a post-traction milestone before scaling.
- Only 13 puzzles ship in-app. Ten are used for the soft-beta launch sequence, three are immediate inventory, and weekly three-puzzle curation resumes after launch.
- No automated tests on the engine (state transitions, ET rollover, streaks)
- NBA IP caution: team names/colors only — no logos or player photos

## Data pipeline specifics (read `pipeline/README.md` for full detail)

- Source is **Basketball-Reference**, not prosportstransactions.com — the latter 403s unauthenticated scraping (verified 2026-07-02). This is a ratified deviation from `PLAN.md` §5's original source list
- BBRef's transaction feed has **no draft-day selection records**, so every auto-generated candidate starts at a trade/waiver-claim/sign, never a draft pick. Draft-anchored chains (like the shipped Bradley → Dončić puzzle) still require manual construction
- Every candidate is **unverified** — the pipeline's job is to surface and rank plausible chains, not to certify them. Never promote a candidate straight from `curation-queue.md` into `src/data/puzzles.ts` without checking it against a primary source first
