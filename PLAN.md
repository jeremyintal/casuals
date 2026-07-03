# CASUALS — plan & strategy

*"Six degrees of separation, but for NBA transactions. Prove you're not one."*

---

## 0. Status — updated July 2, 2026

> **Continuity note for any agent or human picking this up:** this document is the *strategy and reasoning*. The agent-facing operating manual — repo map, design invariants, puzzle authoring rules, session workflow contract — is **`AGENTS.md`** (with `CLAUDE.md` pointing there). Open work and decisions live in `project-tasks-queue.md`; completed work and verification evidence in `proof-log.md`. Any session that changes strategy must update this section with a date; any session that changes code must append to the proof log. The project must remain continuable by a cold-start agent at all times.

**A playable prototype is built and QA-verified.** Current state, and where it deviates from the original plan below:

### Built and verified
- Full game loop: 6 possessions, 24-second shot clock, turnover reset to 14, violation → hint + lost possession, buzzer-beater bonus, scoring (banked seconds + 100/unused possession)
- 8 hand-curated real transaction chains (Bradley→Dončić, Ibaka→SGA, Rozier→White, Kyrie→Mitchell, Thad Young→Simmons, DSJ→Kyrie, Kevin Martin→Olynyk, Payton→Harden), difficulty-rated 1–5
- Menu, daily chain (rolls over at midnight ET), archive ("Classic Games"), stats + streaks in localStorage, share grid, end-sheet with full chain recap and tier stamps, synthesized sounds with mute, dark scoreboard UI with team-color chain cards
- Manual browser QA passed at mobile (390×844) and desktop (1280×800); two P2 bugs (Enter-to-submit, header home button) found and fixed; production build green. Evidence in `proof-log.md`; open work in `project-tasks-queue.md`.

### Ratified deviations from the original plan
- **Stack is Vite + React SPA, not Next.js + Supabase.** Right call for a client-only prototype; revisit Next.js (or a thin API) only when server-side answer validation and leaderboards arrive. Consequence: answers ship in the client bundle — acceptable now, still a hard blocker for public launch.
- Third tier label is **"LEAGUE PASS"** (was "League Pass Subscriber") and the share grid uses 🟩🟧🟥⬛.
- Tier math counts turnovers *and* violations together (0 = SICKO, ≤2 = FILM JUNKIE).

### Known gaps vs. this plan (tracked in the queue)
- The third hint level (hangman-style blanked name after a second violation) is not implemented — the second violation currently repeats hint 2
- Archive games are timed and scored like the daily; plan calls for untimed practice
- Mute preference not persisted; no automated tests yet
- Puzzle corpus shipped in-app is still 8. The data pipeline is now built (2026-07-03) and has produced 150 scored, unverified candidate chains — the remaining gap is human/agent curation and conversion to the puzzle schema, not pipeline engineering. See `pipeline/data/curation-queue.md` and queue priority 1.

### Update — data pipeline built, 2026-07-03

The scraper → graph → candidate-generation pipeline described in §5 is built and working (`pipeline/`, documented in `pipeline/README.md`). One source change was required:

- **Primary source switched from prosportstransactions.com to Basketball-Reference.** prosportstransactions.com blocks scripted requests with a Cloudflare challenge (confirmed via direct probe). Basketball-Reference's season transaction pages are reachable, cover 2010–present with consistent structure, and were already named in §5 as the cross-check source — so they're now primary. §5 below is updated accordingly.
- BBRef's transaction feed does not include draft-day selections, so every auto-generated candidate chain starts at a trade, waiver claim, or signing rather than a draft pick. Draft-anchored chains (the flagship Bradley → Dončić puzzle style) still require a curator to manually prepend the draft step — this is a scope limit, not a defect, and is documented in `pipeline/README.md`.
- The pipeline was validated against real trades during this session, including independently reconstructing (and extending, with a real 2025 trade) a longer version of an already-shipped puzzle chain — see `proof-log.md` 2026-07-03 for the spot-check evidence.
- Output is unverified by design — the pipeline's job is to rank plausible candidates for a human, not to certify facts. The next step is curation (fact-checking + writing reveal/hint copy), tracked as queue priority 1.

---

## 1. Concept

**Casuals** is a daily puzzle game where players reconstruct the transaction chain that connects one NBA asset to another. The canonical example: the Lakers drafted Tony Bradley in 2017 → traded him to Utah (deal that returned Josh Hart + Thomas Bryant) → Josh Hart went to New Orleans in the Anthony Davis trade → Anthony Davis was traded to Dallas for Luka Dončić. Four moves. The Lakers turned the 28th pick into Luka.

Every franchise has these hidden threads. Die-hard NBA fans ("sickos") already trace them for fun on Twitter and Reddit. The name is the hook: **"casual" is NBA Twitter's favorite insult** for fans who only watch the Finals. The game weaponizes it — win and you're certified film junkie; lose and you get stamped **CERTIFIED CASUAL** on your shareable result. People will play just to avoid the stamp.

**Positioning:** Wordle-shaped daily habit × basketball trivia depth × NBA Twitter culture. One puzzle a day, ~2 minutes, shareable emoji-grid result.

---

## 2. Core game loop

### The puzzle: "The Chain"

Each day, one chain. The player is shown:

- **The start:** an asset a team acquired (e.g., *"2017: Lakers draft Tony Bradley, 28th overall"*)
- **The target:** the player that asset eventually became (e.g., *"2025: Luka Dončić"*)
- **The skeleton:** N hidden links between them, each showing only the year and the two team logos involved in that transaction

The player fills the chain link by link, in order. Each link asks: **"Who did the team get back in this deal?"** The player answers via a search-autocomplete of all NBA players (no free-text spelling failures — this is critical for feel).

**Multi-asset trades:** any headline player the team received in that transaction counts as correct (Josh Hart *or* Thomas Bryant both complete the Utah link). The reveal after a correct answer shows the full deal, which is where the "oh THAT trade" dopamine lives.

### Turns: the possession system

This is the decision the whole game balances on. The design:

| Rule | Value | Rationale |
|---|---|---|
| Possessions per game | **6** | Six degrees of separation — the theme IS the turn count |
| Shot clock per possession | **24 seconds** | The NBA shot clock, exactly as requested |
| Chain length | **3–5 links** | Leaves 1–3 spare possessions; losable but winnable |
| Correct answer | Advances the chain, **clock resets to a fresh 24** | Fast players build rhythm; never punished for early links |
| Wrong answer | **Turnover** — burns a possession, same link continues, clock resets to **14** | Mirrors the NBA offensive-rebound reset; wrong guesses create urgency, not a full re-think |
| Clock hits zero | **Shot clock violation** — burns a possession AND auto-reveals a hint for that link | Expiry always gives you something; stalling is never optimal |
| Out of possessions | Game over — full chain revealed with trade details | The reveal is content, not just a loss screen |

**Why 6 possessions and not per-link retries:** a fixed shared budget (like Wordle's 6 guesses) creates a single resource the player manages across the whole game. An early wild guess has late-game consequences. That tension — "do I burn a possession on a hunch or let the clock run for the hint?" — is the addictive decision.

**Session length is naturally capped at 6 × 24s = 2:24 max**, typically ~90 seconds. Perfect for a daily habit.

### Hints (built into the clock)

Every link starts with partial info: year + team logos. Escalating hints arrive automatically:

1. At **10 seconds remaining**: player's position and years active (free — keeps the clock tense but fair)
2. On a **shot-clock violation**: first initial + one other asset in the deal (paid for with a possession)
3. On a **second violation on the same link**: the answer is nearly given (last name blanks, hangman-style)

No hint buttons, no hint currency. The clock *is* the hint system. This keeps the UI to exactly one interaction: type the name.

---

## 3. Scoring & shareability

### Score

- **+ remaining shot-clock seconds** banked on every correct answer (speed = points)
- **+ 100 per unused possession** at the end
- **Buzzer beater bonus (+25):** correct answer with under 3 seconds left — plays a buzzer-beater animation. This will get screenshotted.

### Result tiers (the identity hook)

| Result | Stamp |
|---|---|
| Perfect chain, no turnovers | **SICKO** |
| Won with 1–2 turnovers | **FILM JUNKIE** |
| Won using all 6 possessions | **LEAGUE PASS SUBSCRIBER** |
| Lost | **CERTIFIED CASUAL** |

### Share grid

Wordle-proven mechanic, basketball-flavored. One tap copies:

```
CASUALS #42 — SICKO 🏀
🟢🟢🟢🟢  ⏱ 1:12
Tony Bradley → Luka Dončić in 4
casuals.game
```

🟢 = made link, 🟠 = link solved after a turnover, 🔴 = violation, ⬛ = never solved. No spoilers, pure flex. The chain endpoints (public info shown to everyone that day) tease the puzzle to non-players.

---

## 4. Retention mechanics

- **One puzzle per day**, drops at midnight ET, everyone plays the same chain. Scarcity drives the habit and makes results comparable — this is non-negotiable Wordle wisdom. Resist the temptation to offer unlimited play at launch.
- **Streaks** with basketball framing: your streak is a **"win streak"**; milestones at 3 (heating up), 7, 10 (double digits), 33 (the Lakers' record), 73. Streak-freeze earned (not bought) by a SICKO result — one bank slot.
- **The reveal as content:** win or lose, the end screen tells the full story of the chain with trade context ("this deal was widely panned at the time…"). People finish the game knowing something they'll repeat at a bar. That's the retention moat trivia games forget.
- **Archive** ("Classic Games"): past puzzles playable untimed, unscored — practice mode that doesn't cannibalize the daily.
- **Weekly theme cadence:** Monday easy → Saturday brutal, Sunday = "Franchise Week" finale where all 7 chains that week secretly belonged to one franchise (revealed Sunday). Gives lapsed players a re-entry point every Monday.
- **Sicko Mode (later):** hard daily variant — 6 links, no automatic hints, 14-second clock. Separate streak, separate flex.

---

## 5. Data strategy (the real moat)

The game is only as good as the transaction graph. This is 60% of the engineering effort.

### Sources

- **Basketball-Reference** (primary, as of 2026-07-03) — season transaction pages (`/leagues/NBA_{season}_transactions.html`) back to 2010, consistent structure, canonical player IDs, reachable to scripted requests. See `pipeline/README.md` for the working scraper/parser.
- ~~prosportstransactions.com~~ — originally planned as primary; **blocks scripted requests with a Cloudflare challenge** (confirmed 2026-07-03). Revisit only if BBRef coverage proves insufficient for a specific chain, using a headless browser or manual lookup, not plain HTTP requests.
- Cross-check against a second source (e.g. team beat-writer reporting, official transaction announcements) for any chain before it ships, regardless of which scraper sourced it.

### Data model

A directed multigraph of **asset lineage**:

- **Nodes:** assets — a player-stint (player + team + acquisition date) or a draft pick (year, round, original owner, protections)
- **Edges:** transactions — trade, waiver claim, draft (pick → player), sign-after-waive
- The core query: within a franchise, *what did asset X become?* Follow the edge where X was sent out, land on the package received, continue from any asset in that package. That's exactly the Bradley → Hart → Davis → Dončić walk.

### Edge cases to handle deliberately

- **Draft picks as connective tissue** — most great chains route through picks; picks need identity (protections, swaps) or chains break
- **Three-team trades** — decompose into per-team "sent/received" ledgers, not pairwise trades
- **Waive → re-sign** — the user's spec includes waivers; a waiver claim is a valid edge, but a player waived and signed elsewhere as a free agent is NOT (the chain of consideration breaks). This rule needs to be crisp and stated in the how-to-play.
- **Sign-and-trades** — valid edges

### Puzzle generation pipeline

1. Scrape → normalize entities (BBRef player IDs) → build graph
2. BFS from every "endpoint" star to enumerate candidate chains of length 3–5
3. Auto-score candidates: fame of endpoints (career minutes, All-Star selections), fame of intermediate players (obscure middles = harder), recency, "story quality" (did the chain span a rebuild?)
4. **Human curation queue** — an admin screen where each candidate chain is verified against sources and scheduled onto the calendar. Every daily puzzle ships hand-verified. One wrong chain on launch week kills credibility with exactly the sicko audience we need as evangelists.

MVP corpus: **2010–present transactions only** (~15 seasons). Modern era = maximum recognition, minimum data archaeology. Expand backward later ("Throwback Thursdays").

---

## 6. Product & tech architecture

### Stack

- **Next.js (App Router) + TypeScript + Tailwind** — one codebase, deploys to Vercel
- **Postgres (Supabase) + Drizzle ORM** — transaction graph, puzzles, (later) accounts and leaderboards
- **Daily puzzle served as a static JSON payload** (regenerated at midnight ET) — the game itself is nearly free to serve at any scale
- **Answer validation server-side** (edge function): the client never receives the answers, only link metadata. Prevents view-source cheating, which this exact audience will attempt within the first hour.
- **No auth at MVP.** Streaks, stats, and history in localStorage (Wordle did this for a year). Accounts arrive with leaderboards in v2.
- Shot clock runs client-side; server records start/submit timestamps and rejects impossible times when leaderboards exist.

### Anti-cheat posture (proportionate, not paranoid)

Daily results are self-reported flexes at MVP — same trust model as Wordle. Server-validated timing matters only once competitive leaderboards ship.

### UI/UX direction

- **Clean and dark by default:** scoreboard aesthetic — near-black surface, white type, one accent (shot-clock red/amber). The shot clock is the visual centerpiece: big LED-style digits that turn red and pulse under 5 seconds, with the classic horn on expiry.
- **One screen, one input.** Chain skeleton down the middle, clock up top, possession dots (6 basketballs) below it, search box pinned at the bottom. Zero navigation during play.
- **Sound design is the polish that makes it feel like basketball:** swish on correct, rim-clank on turnover, horn on violation, crowd swell on completing the chain. All muteable, off by default on mobile web.
- Mobile-first (most traffic will arrive from Twitter/Reddit on phones), flawless on desktop.

---

## 7. MVP scope & roadmap

### Phase 1 — MVP (~3 weeks of focused build)

*Revised July 2, 2026: we inverted the original order — the game client was built first (see Status) to prove the loop is fun before investing in the pipeline.*

- ~~Week 2: core game — chain UI, shot clock, possession system, autocomplete, end-of-game reveal, share grid, localStorage streaks~~ **Done (prototype, client-only)**
- Week B: scraper + graph + entity resolution for 2010–present; generate and hand-verify **60 puzzles** (2 months of runway); admin curation screen
- Week C: server-side answer validation (required before public launch), remaining polish (third hint level, untimed archive, persisted mute), automated engine tests, deploy

**Explicitly cut from MVP:** accounts, leaderboards, Sicko Mode, multiplayer, pre-2010 data, native apps.

### Phase 2 — Growth (months 2–3)

Accounts + global/friends leaderboards, weekly Franchise Week meta-game, Sicko Mode, puzzle archive expansion to 2000–present.

### Phase 3 — Depth (months 4+)

Head-to-head live mode (same chain, first to finish), franchise-specific packs ("Lakers chains only"), creator/podcast partnership puzzles, other leagues (NFL is the obvious sequel — draft-pick trades galore).

### Launch strategy

Timing matters enormously for this game. The audience peaks at the **February trade deadline** and **late-June draft week**. Nearest window from now (July 2026): free agency runs hot through July — soft-launch now to r/nba and NBA Twitter while trades are the daily conversation, then a push at the 2027 deadline with deadline-themed chains. Seed it by DMing the exact accounts that already post "how X became Y" threads — they are the game in human form, and they have the followings.

### Monetization

None at MVP — nothing kills a daily-habit game faster than early ads. Later: a single tasteful sponsor slot on the reveal screen ("today's chain presented by…"), and/or a one-time "Sicko tier" purchase (full archive, stats page, alternate clock skins). Never pay-to-win, never pay-for-hints.

---

## 8. Risks

| Risk | Mitigation |
|---|---|
| Data errors destroy credibility with the core audience | Every daily puzzle hand-verified; prominent "report an issue" link; fix-and-acknowledge publicly |
| NBA IP (logos, likenesses) | Use team names/colors and text, not logos/photos, until there's traction worth lawyering; transaction facts themselves are public domain |
| Too hard for actual casuals → tiny ceiling | The 10-second free hint + multi-answer links keep win rate ~70%+; difficulty ramps across the week |
| Too easy for sickos → no flex value | Speed-based scoring separates winners; Sicko Mode in phase 2 |
| Wordle-clone fatigue | The shot clock changes the genre — it's a real-time game, not a deduction game; no daily puzzle has this |

---

## 9. Success metrics

- **D1/D7 retention** (target: 40% / 20% — daily puzzle benchmarks)
- **Share rate** (shares ÷ completions, target 15%+) — the growth engine
- **Win rate** (keep 65–75%; tune hint timing against it)
- **Median completion time** (healthy: 60–100s; if it drifts to 140s+, chains are too obscure)
- Streak distribution — the north star for habit formation
