# Casuals data pipeline

Turns Basketball-Reference's public season transaction pages into a scored, human-reviewable queue of candidate "six degrees" chains. This is a content pipeline, not part of the shipped app — nothing here is imported by `src/`.

## Why Basketball-Reference, not prosportstransactions.com

The original plan (`PLAN.md` §5) named prosportstransactions.com as the primary source. It returns Cloudflare 403s to unauthenticated scraping (verified 2026-07). Basketball-Reference's season transaction pages (`/leagues/NBA_{season}_transactions.html`) are reachable, structured consistently since at least 2010, and are already the plan's verification source — so they're now primary. Revisit prosportstransactions.com only if BBRef coverage proves insufficient for a specific chain.

## Pipeline stages

```
node pipeline/fetch.mjs [startSeason] [endSeason]   # → pipeline/cache/*.html (gitignored, ~5-6 MB)
node pipeline/parse.mjs                              # → pipeline/data/transactions.json
node pipeline/graph.mjs [minLinks] [maxLinks] [topN]  # → pipeline/data/candidates.json
node pipeline/curate.mjs [count]                      # → pipeline/data/curation-queue.md
```

Run them in order; each stage reads the previous stage's output. `fetch.mjs` skips seasons already cached, so re-runs are cheap and polite (3.5s between requests — do not lower this).

## What each stage does

- **`fetch.mjs`** — downloads one HTML page per season. Seasons are named by the year they end (2024-25 season = `NBA_2025`).
- **`parse.mjs`** — converts BBRef's prose transaction log into structured records. Key technique: `<a>` tags are replaced with indexed tokens (`⟦P0⟧`, `⟦T0⟧`) *before* any text matching, so player/team names containing punctuation (periods, apostrophes) never break sentence-boundary regexes. Parenthetical asides (`(X was later selected)`, protection notes) are stripped before asset extraction — they are annotations, not assets in the deal. Classifies each transaction as `trade`, `waiver-claim`, `waived`, `signed`, `released`, or `sold`. For trades, builds a per-team `{in: [...], out: [...]}` ledger from every "Team A traded X to Team B for Y" clause, which generalizes to 3+ team trades.
- **`graph.mjs`** — for each franchise, walks its chronological trade/waiver-claim history looking for sequences where a later transaction sends out a player received in an earlier one (the "what did X become" walk). Enumerates chains of `minLinks`–`maxLinks` hops, scores them heuristically (`pipeline/stars.mjs` fame list, chain length, mid-chain obscurity), dedupes, and writes the top N.
- **`curate.mjs`** — renders `candidates.json` into a readable Markdown queue with a per-candidate verification checklist, ready for a human (or an agent instructed to fact-check) to review.

## Known scope limits (honest, not bugs)

- **No draft-day selections.** BBRef's transactions feed doesn't include them, so every candidate chain starts at a trade/waiver-claim/sign acquisition, not a draft pick. The shipped Tony Bradley → Luka Dončić puzzle prepends a hand-verified draft step onto exactly this kind of trade tree — do the same for other draft-anchored stories.
- **Draft picks as assets are unresolved.** A traded pick is recorded as a text descriptor (`"2029 round 1 pick"`), not linked to the player later drafted with it. Chains that route through a pick either stop there or need a curator to manually bridge to the draftee.
- **The star/fame list (`stars.mjs`) is a hand-typed heuristic**, not sourced data — it only affects candidate *ranking*, never correctness. Don't trust it for anything user-facing.
- **`transactions.json` is the ground truth for curators to check against BBRef directly**, not a replacement for verification — the parser can still mis-attribute an edge case (see the 4 skipped unparseable trade clauses logged by `parse.mjs`, and always spot-check before trusting a chain).

## From curated candidate to shipped puzzle

Follow the checklist embedded at the top of `pipeline/data/curation-queue.md`. The target schema (`Puzzle` in `src/data/puzzles.ts`) and content rules (valid vs. invalid transaction edges, hint-writing) are documented in `AGENTS.md` — read that before authoring, not this file.
