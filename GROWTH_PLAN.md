# Casuals — growth & virality plan

Companion to [`PLAN.md`](PLAN.md) (product strategy) and [`MOBILE_PLAN.md`](MOBILE_PLAN.md) (iOS/Android). This document is about one thing: how Casuals spreads without a paid acquisition budget. `PLAN.md` §3 and §9 already establish the share grid and a 15%+ share-rate target — this plan goes deeper on *why* people share, what's weak in the current mechanism, and what to build to make sharing the primary growth channel rather than a nice-to-have.

> **Status (updated 2026-07-10): §10 phase 1's three cheapest items are built and verified** — the deep-link fix, the "Challenge a friend" button, and per-device share attribution tracking. Daily links now carry both the display day number (`d`) and stable puzzle ID (`p`) so adding puzzles cannot make an existing share open a different chain; parsing already prefers `p`. See `proof-log.md` for the verification trail. The generated image share card (§3) is the remaining phase-1 item, not yet started. Everything in §4 (squads) and later remains correctly deferred behind accounts.

---

## 1. The core thesis

Casuals has no marketing budget and shouldn't need one. Every daily-puzzle game that has grown without paid spend (Wordle, Connections, Framed, Heardle) grew the same way: **the shared result is a personal flex that happens to be an ad.** Nobody shares Wordle's grid to promote Wordle. They share it to say "look what I did," and the game's name is just attached. Every recommendation below is a test against that bar: does this make the *player* look good, or does it make the *game* look good? Only the first one spreads.

The second-order thesis, specific to this game: **this audience already does the game's core loop for free, unprompted, in group chats and on Twitter.** "How did the Lakers turn a bench guy into a superstar" threads are a genre NBA Twitter already produces. Casuals isn't teaching people a new behavior — it's giving an existing behavior a scoreboard, a clock, and a reason to do it daily instead of whenever a good thread appears. Growth tactics that route through group chats and NBA Twitter accounts will outperform generic social-growth tactics, because the audience is already primed.

---

## 2. Audit: what the current share mechanism gets right and where it's weak

`shareText()` in [`src/game/engine.ts:209`](src/game/engine.ts) and `copyShare()` in `EndSheet` ([`src/App.tsx`](src/App.tsx)) already implement the Wordle-proven shape: spoiler-safe emoji grid, tier stamp, time, score, endpoint names. That's the right foundation — don't discard it.

**Real gaps, in priority order:**

1. **No deep link.** The share text ends with the static string `'casuals.game'` — not a link to *that day's* puzzle. Today this mostly self-heals for the daily case (the app always defaults to today's daily on load, since there's no URL routing at all yet), but it completely breaks for anything else: sharing an archive puzzle, sharing a result after the day has rolled over to tomorrow's chain, or a future challenge-a-friend link. A friend who clicks a share link the next day lands on a *different* puzzle than the one being bragged about. This is the single highest-priority fix — a share link that doesn't land where it claims to land quietly caps every other growth tactic in this document.
2. **Text-only, no image.** Clipboard-copied text unfurls fine on X/Twitter and iMessage, but is functionally dead on Instagram Stories (no paste-as-text-with-formatting) and weak on TikTok. A generated image card — team-colored, branded, screenshot-quality — multiplies the platforms this can spread on and out-performs plain text even where text works (image posts get materially higher engagement on X).
3. **Broadcast-shaped, not challenge-shaped.** Current copy is "here's what I got." The single highest-converting share framing for this genre is a *direct, personal* challenge ("I got SICKO in 1:12 — bet you can't beat it") sent to a specific person or group chat, not posted to a general timeline. Broadcast shares get views; challenge shares get *players*, because the recipient has a named reason to click.
4. **No tracking of what happens after a share.** `PLAN.md` §9 targets a 15%+ share rate but nothing currently measures what fraction of shares convert into a new player completing a puzzle. Share rate without click-through is a vanity number — see §8.

None of this requires new game rules or touches the design invariants in `AGENTS.md`. It's entirely about what happens in the ~10 seconds after a win or loss.

---

## 3. Make the share artifact itself un-ignorable

- **Fix the deep link first.** Encode both the day number and stable puzzle ID in daily URLs (`casuals.game/?d=42&p=puzzle-id`) and have the app prefer `p` when resolving the link. The day number preserves the daily identity; the puzzle ID prevents corpus growth from remapping an older share to a different chain. This is small, unblocks everything else in this section, and should ship before any other growth work.
- **Generate a shareable image**, rendered client-side (canvas or an off-screen styled DOM node rasterized to PNG) reusing the exact scoreboard visual language already in `styles.css` — the LED shot-clock digits, team-color accent bar, tier stamp. This is the app's strongest visual asset; the share artifact should look like a screenshot of the game, not a text summary of it. Offer it as the primary share action (native share sheet on mobile via Capacitor Share per `MOBILE_PLAN.md`, download-or-copy on web), with the text grid kept as a fallback for platforms where an image is friction (plain iMessage, Twitter replies).
- **Rewrite the copy to challenge a specific target, not broadcast.** Two share buttons instead of one: "Share result" (current broadcast behavior, improved with the deep link and image) and "Challenge a friend" (opens the native share sheet pre-targeted at a contact/group where possible, with copy like *"I got SICKO in 1:12 on today's Casuals. Think you can beat it?"*). The second button is the higher-leverage one — build it even if the first is judged good enough already.
- **Keep it spoiler-safe** — this already works correctly (grid shows outcome shape, not answers; the puzzle's start/target names shown in share text are the same info already public on the menu screen pre-game, so nothing new is being leaked). Don't regress this while adding the image/challenge features above.

---

## 4. Person-to-person challenge loops

Broadcast shares get impressions; direct challenges get installs. In order of leverage:

- **"Challenge a friend" send** (§3) is the cheapest version of this and should ship first.
- **Squads.** Let a small group (a group chat's worth of people, no accounts required beyond a shareable squad code/link) see each other's daily results ranked against each other. This is the single most on-brand feature this plan can propose: NBA fans already run group chats that argue about exactly this content. Giving that existing group chat a shared scoreboard turns Casuals into the thing the group chat organizes around, not just something one person in it plays. Requires lightweight backend (a squad = a shared code plus a small results table) — this is a Phase 2 item once accounts exist per `PLAN.md` §7, but design the squad *code* format now so it can be a friction-free add-on rather than a rearchitecture later.
- **Head-to-head mode** (already named as a Phase 3 idea in `PLAN.md` §7: same chain, race to finish) is a stronger version of the challenge loop — real-time competition is inherently more shareable than asynchronous comparison ("we just raced this and I won" is a better story than "I beat your score from yesterday"). Sequence it after squads, not before — squads validate the social-graph plumbing (who's in your circle) that head-to-head then reuses.

---

## 5. Platform-native tactics — meet the audience where the trades are already discussed

Generic "post on social media" advice is weak; this audience has specific, known gathering places named already in `PLAN.md` §7. Tactics per platform:

- **X/Twitter (primary channel for this audience).** Beyond seeding launch accounts (`PLAN.md` §7): run the official Casuals account as ongoing content, not just a launch announcement. Post a pre-reveal teaser each day (start asset + a poll: "what did this become?") to drive engagement *before* people have played, then the full reveal after the day rolls over as its own standalone post — bait content for people who don't play yet. Quote-tweet prompts ("reply with your grid") turn the account's own posts into a share surface.
- **Reddit r/nba.** A recurring stickied daily-discussion-thread pattern, the same shape r/wordle and r/NYTConnections use, rather than a one-time launch post. The thread becomes a returning touchpoint independent of whether someone clicks through to play that day.
- **TikTok / Instagram Reels.** The buzzer-beater moment (clock hits ≤3s, correct answer, `+25` bonus, crowd-swell sound per `src/game/sounds.ts`) is the one moment in this game that's genuinely video-native — a 3-second screen-recorded clip of a buzzer-beater is exactly the format short-form video rewards, and it's a moment the game *already produces*, not something invented for marketing. Longer-term, auto-generating that clip (screen capture of the winning animation, captioned with the score) removes the friction of a player manually screen-recording. Bigger lift than anything else in this document — sequence it after the cheaper wins in §3, but it's the highest-ceiling single idea here because it's the only one that taps video culture rather than text/image.
- **iMessage / group chats.** Covered by the native share sheet work already scoped in `MOBILE_PLAN.md` §3 — the "Challenge a friend" button in §3 above is what actually uses that plumbing for growth rather than just UX polish.

---

## 6. Turn the game's own content into a flywheel, not just the game

The daily reveal — full chain, trade context, epilogue line — is already written as retention content per `PLAN.md` §4 ("people finish the game knowing something they'll repeat at a bar"). For growth, that same content should reach people who *never open the app*:

- Publish each day's reveal as a standalone post from the Casuals account once the day locks (see §5) — the story is the hook for non-players, and it costs nothing extra to produce since the copy already exists in `src/data/puzzles.ts` (`reveal` and `epilogue` fields) for every shipped puzzle.
- Turn the launch-partner relationship in `PLAN.md` §7 into an ongoing rotation: invite the NBA-Twitter "trade tree" accounts to guest-curate one chain a week with a name credit ("this week's Friday chain, curated by @account"). Gives them a reason to promote it repeatedly (not just once at launch) and diversifies where puzzle ideas come from beyond the internal curation queue in `pipeline/`.
- **Franchise Week** (`PLAN.md` §4) is already designed as a weekly narrative payoff. Treat its Sunday reveal explicitly as a *second* weekly share moment distinct from the daily grid — a "here's the twist" post is a different, less repetitive share trigger than "here's my score" seven days running.

---

## 7. Timing as a growth lever, not just a launch-window decision

`PLAN.md` §7 already identifies the trade deadline and draft week as the audience's peak attention windows. For virality specifically, the sharper version of that idea is **reacting to news within hours, not scheduling around it months ahead**: when a real trade happens, the chain that trade just completed (or extended) becomes immediately, urgently relevant — "today's Casuals chain" posted the same day as a blockbuster trade rides that trade's own news cycle instead of competing with it. This needs a distinct operational capability beyond the standard curation queue in `pipeline/data/curation-queue.md` — call it **rapid-response authoring**: someone (human or an agent explicitly tasked with it) able to verify and ship a puzzle within hours of a real trade, not on the normal curation cadence. Worth deciding whether this is a standing capability or an ad-hoc one invoked only around the deadline/draft windows — flagged as an open decision in §11.

---

## 8. Instrumentation — prove any of this is working

`PLAN.md` §9 already names share rate (target 15%+) as a success metric. That's necessary but not sufficient for judging *this* plan. Add:

- **Share-to-play conversion**: of people who click a shared link, what fraction complete a puzzle. This is the number that actually validates the deep-link fix in §3 — without it, "share rate" measures how often people post, not whether posting brings anyone back.
- **Attribution tagging** on share links (a lightweight query param identifying which share surface produced the click: broadcast share vs. challenge-a-friend vs. a squad invite vs. an organic X post) so §4/§5/§6 tactics can be compared against each other rather than judged on vibes.
- **A/B the share prompt itself** once there's enough traffic to matter — timing (immediately on win vs. after the reveal is read), default button (broadcast vs. challenge-a-friend), and copy framing are all cheap to test and easy to get wrong by guessing.

None of this requires accounts or a heavy backend — query-param attribution and a single analytics event on puzzle-completion-via-shared-link cover the essentials.

---

## 9. Anti-patterns — ways to make this worse, not better

- **Don't gate the core loop behind login.** A clicked share link must play immediately with zero signup friction. This is already the MVP decision in `PLAN.md` §6 for unrelated reasons (avoid backend complexity); it's *also* the correct growth decision independently — every additional step between "click a link" and "see the game" loses a large fraction of clickers, and this audience in particular will not create an account to try a link a friend sent them.
- **Don't over-notify.** `MOBILE_PLAN.md` §3 already scopes exactly one daily local notification. Adding "your friend just beat your score" pings or streak-guilt notifications might look like engagement tactics but erode the exact trust that makes someone comfortable sharing the game to their own audience. A player who feels spammed becomes a player who stops recommending it.
- **Don't let the share copy read as an advertisement.** Every copy example in this document centers the player's result first, the brand name last, matching Wordle's actual pattern. If a future share template leads with "Play Casuals!" instead of the player's score, it will underperform — this isn't a style preference, it's the entire mechanism this plan is built on (§1).
- **Don't chase every platform at once.** §5's tactics are ordered by fit to this specific audience, not by platform size. Building a general-purpose "share to everywhere" feature before nailing X/Twitter and group-chat sharing specifically would dilute effort against the two channels most likely to actually work for NBA-trade-trivia content.

---

## 10. Phased build order

Ordered by leverage-per-effort, not by dependency chain — several of these can run in parallel with the puzzle-curation work already tracked in `project-tasks-queue.md`.

| Phase | Item | Depends on |
|---|---|---|
| **Now — cheap, ship first** | Deep-link fix (§3): encode day number + stable puzzle ID in URL, read it on load | Nothing |
| **Now — cheap** | "Challenge a friend" share button with direct-target copy (§3) | Deep-link fix |
| **Now — cheap** | Share-link attribution tagging + completion-via-share event (§8) | Deep-link fix |
| **Soon — moderate** | Generated image share card (§3) | Nothing blocking; can build independent of the above |
| **Soon — moderate** | Official account daily reveal-posting + pre-reveal teaser pattern (§6) | Nothing technical — this is an ops/content commitment, not code |
| **Phase 2, with accounts** | Squads (§4) | `PLAN.md` §7 Phase 2 accounts work |
| **Phase 3** | Head-to-head mode (§4) | Squads (reuses social-graph plumbing) |
| **Phase 3, high ceiling** | Auto-generated buzzer-beater clip for TikTok/Reels (§5) | Nothing blocking, but genuinely the largest single build in this document |
| **Ongoing ops decision** | Rapid-response authoring capability for news-jacking real trades (§7) | Curation pipeline maturity — needs the standard queue humming first |

---

## 11. Open decisions for the user

- **Rapid-response authoring (§7)**: standing capability (someone/something on call around news) or ad-hoc around the trade deadline and draft only? Affects whether this is process work to set up now or a checklist to revisit closer to February.
- **Guest-curator rotation (§6)**: worth reaching out to specific NBA-Twitter "trade tree" accounts now, ahead of a broader launch, to gauge interest and start the relationship — or hold until the puzzle corpus and app are further along so there's something more substantial to show them?
- **Image share card vs. buzzer-beater clip**: both are genuinely good, neither is free. If forced to build only one next, the image card is cheaper and improves every share going forward; the video clip has a higher ceiling but only pays off for the subset of games that end in a buzzer beater. Recommendation is the image card first for exactly that reason, but flagging the tradeoff rather than deciding it unilaterally.
