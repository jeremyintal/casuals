# Casuals — onboarding & account creation plan

Companion to [`PLAN.md`](PLAN.md) (product strategy), [`GROWTH_PLAN.md`](GROWTH_PLAN.md) (virality), and [`MOBILE_PLAN.md`](MOBILE_PLAN.md) (iOS/Android). **Planning document only — nothing here is built yet.** This covers the redesigned first-run experience for new users and the introduction of accounts, optimized for conversion. Status of every piece: not started.

---

## 1. The core thesis: onboarding IS the first puzzle

The single most important conversion decision in this plan is what onboarding is *not*: it is not a signup form, not a permission wall, and not a slide deck about features. For a daily puzzle game, the activation event that predicts retention is **completing one puzzle and seeing your stamp**. Everything in the first session exists to get a new user to that moment as fast as possible, and every ask we make of them (account, notifications, install) comes *after* it, priced against value they've already felt.

This is also already policy: `GROWTH_PLAN.md` §9 states "don't gate the core loop behind login — a clicked share link must play immediately with zero signup friction." This plan operationalizes that rule rather than renegotiating it. **Accounts are a retention feature offered to activated players, never an acquisition gate.**

North-star metric for this plan: **time from first open to first completed puzzle** (target: under 3 minutes, including the tutorial), and **first-session completion rate** (target: 60%+ of first opens finish a puzzle).

---

## 2. Current state (what we're redesigning from)

- Onboarding today is a static 4-item "How to play" card at the **bottom** of the menu — below the daily card, stats, and the full archive list. A new user who taps PLAY DAILY without scrolling meets a 24-second shot clock with zero preparation and burns possessions while confused. Their first daily — the one shot at a day-1 win — is spent learning the rules the hard way.
- There are **no accounts anywhere**. Stats/streaks live in `localStorage` (web) and will live in Capacitor Preferences (app) — two unlinked stores per `MOBILE_PLAN.md` §7. A cleared browser or new phone silently erases a streak. This is the pain accounts must be positioned against.
- Deep links (`?d=`/`?p=`/`?src=`) already land arrivals directly in the target puzzle, and per-device attribution counters exist (`storage.ts`). The share→play path skips the menu entirely, which is correct — the onboarding redesign must work *inside* that path, not assume everyone starts at the menu.

---

## 3. Guiding principles (the best-practices layer, made specific)

1. **Show, don't tell.** Rules taught by playing one throwaway possession beat rules read in a list. The existing how-to card stays as reference, but stops being the primary teacher.
2. **Ask at the moment of motivation.** Every request (account, notifications) is triggered by an event that just made the value obvious — never on a timer, never on first open.
3. **Never lose a user's progress to an ask.** Guest play is first-class forever. An account *adds* durability to what a guest already has; declining costs nothing today.
4. **One ask per moment.** Never stack account + notifications + install prompts in the same session beat. Priority order when they'd collide: account (after result) → notifications (after account decision or next-day return) → app install (web users, after streak ≥ 3).
5. **Every step skippable, every skip recoverable.** Skip the tutorial → it's replayable from the menu. Dismiss the account prompt → a quiet persistent entry point remains, and the prompt re-arms only at the next escalation trigger (see §6).
6. **Passwords are banned.** OAuth and magic links only. A password field in 2026 is pure conversion loss plus a liability we don't need.

---

## 4. The redesigned first-run flow

### Path A — organic first open (lands on menu)

1. **First-open detection** (no `casuals-stats-v1` record): the menu opens with a single focused card replacing the daily card's slot: *"First time? Run one practice possession."* Primary button **LEARN THE ROPES** (tutorial), secondary ghost button "I'm not a casual — skip" (straight to daily; the copy makes skipping itself an on-brand flex).
2. **The tutorial: one practice possession (~30 seconds).** A dedicated, hardcoded tutorial chain that is *never* a daily: one link, the most famous recent trade we have (Anthony Davis → Luka Dončić). Sequence:
   - Beat 1 (one line, over the board): "You're the GM. Turn Anthony Davis into tonight's target in 1 move."
   - Beat 2: the clock starts at 24 but **ticks at half speed** in tutorial only; a coach-mark points at it: "Beat the clock. Answers bank the seconds."
   - Beat 3: the search box pulses; typing 2 letters shows the autocomplete; any wrong pick shows the turnover flash + "that's a turnover — costs a possession" coach-mark (tutorial possessions are infinite).
   - On solve: mini stamp moment ("That's the whole game.") → straight into the real daily card.
   - Tutorial emits no stats, no streak, no share.
3. **First real daily** plays with exactly the standard rules (no training wheels — the tension IS the product), with one addition: the free ≤10s hint is surfaced slightly more prominently on a player's first 3 games (same hint, bigger visual affordance).
4. **First result → the account moment** (§5).

### Path B — share/challenge deep link (lands in a puzzle)

Arrivals via `?src=share|challenge` skip everything and land on the puzzle — that's already built and stays. Changes:
- The TIP OFF overlay for a first-time deep-link visitor carries **one extra line** (not a screen): "6 possessions. 24 seconds each. Name who came back in each trade." That's the entire tutorial for this path — the challenge framing ("beat your friend") is stronger motivation than any coach-mark, so we get out of the way.
- After their result: same account moment as Path A, with copy adapted to the context ("Beat this. Then start your own streak — save it with an account.").
- The tutorial remains available from the menu afterward.

### Path C — app store install (mobile, future)

Same as Path A plus the app-specific asks already sequenced in `MOBILE_PLAN.md` §5: notification pre-prompt comes **after the first completed puzzle** and after the account decision, never in the same beat.

---

## 5. Account creation: the design

### When we ask (trigger, not timer)

The **first account prompt appears on the result sheet of the first completed daily** — win or loss — as a card *below* the stamp and share buttons (the flex moment stays untouched). The ask is framed entirely as protecting what they just created:

- After a win: **"Streak started. Don't lose it."** — "Your streak lives on this device only. A cleared browser or a new phone wipes it. An account backs it up — 10 seconds, no password."
- After a loss: softer, deferred — no account card at all on a day-1 loss (asking someone to register their CERTIFIED CASUAL stamp is a conversion joke that isn't worth the impression). The loss path waits for the first win.

### The form (the whole thing)

One sheet, three buttons, zero fields visible by default:

1. **Continue with Apple** (listed first on iOS — also an App Store requirement once any third-party login exists)
2. **Continue with Google**
3. **Continue with email** → expands to a single email field → magic link. No password, no confirm-email field, no name, no username, no date of birth.

Post-auth: **zero additional steps.** No profile setup, no avatar picker, no "tell us about yourself." A display name is auto-generated in-voice (e.g. "Sixth Man #4821") and editable later in settings — progressive profiling means we ask for a real handle only when it first matters (leaderboards/squads, Phase 2).

### The migration moment (do not skip this)

On account creation, **local guest stats merge into the account automatically** — streak, tiers, completed puzzles, best score. The confirmation is the payoff screen: "Your 7-game streak is safe." This same mechanism later powers the web↔app stats reunification flagged in `MOBILE_PLAN.md` §7 (sign in on the second device → merge takes the max of streaks, union of completions). Losing a streak during signup is the one unforgivable bug in this entire plan; the merge needs to be transactional and tested before any prompt ships.

### If they decline

- A quiet, persistent entry point lives in the header (small account icon) and on the stats card ("Backed up: no").
- The prompt itself **re-arms only at escalating value moments**, max one show per moment, hard cap of one prompt per week: streak hits 3 → "3 straight. Worth protecting now?" → streak hits 7 → streak *ends* after 5+ ("That hurt. Next one, keep it safe.") → first archive completion of all puzzles.
- A permanent "not now" is respected: after two dismissals, prompts stop entirely; only the passive entry points remain. Nagging a daily-habit audience is how you lose the habit.

---

## 6. What accounts unlock (the honest value ladder)

Conversion asks only work when the value is real. In order of shipping:

| Tier | Value | Depends on |
|---|---|---|
| At launch of accounts | Streak/stats backup + cross-device sync (web ↔ app) | Auth + a user-stats table |
| Fast follow | Streak insurance formalized (the SICKO-earned streak freeze from `PLAN.md` §4 becomes account-stored) | Same |
| Phase 2 proper | Squads (group-chat scoreboards, `GROWTH_PLAN.md` §4) and leaderboards — the first *social* reasons to have an identity | Backend + display names |
| Phase 2+ | Challenge links that show "you vs. them" head-to-head results | Squads plumbing |

The account prompt copy should only ever promise the tier that's actually live.

---

## 7. Backend implications (what this actually requires)

Accounts are the first feature that genuinely requires a backend — and per `PLAN.md` §6 and `AGENTS.md`, **server-side answer validation is already a launch blocker that needs the same backend**. Build them as one milestone, not two:

- **Recommended: Supabase** (matches the original `PLAN.md` §6 stack sketch) — Postgres + Auth (Apple/Google OAuth and magic links out of the box) + edge functions for answer validation. Alternatives (Clerk + separate API, Firebase) are viable; decide at build time, but the plan assumes "hosted auth + Postgres + serverless functions," not a hand-rolled auth system. Hand-rolling auth is explicitly out.
- Data model (minimal): `users` (id, auth identity, display_name, created_at), `user_stats` (streak, best_streak, tiers, best_score, last_win_day), `completions` (user_id, puzzle_id, day_num, tier, score, time_ms, arrived_via). The `completions` table also finally turns `GROWTH_PLAN.md` §8's per-device share attribution into real cross-user funnel data.
- Guest model: keep guests entirely client-side (as today) rather than creating anonymous server users. Simpler, no orphan-account cleanup, and the merge-on-signup flow (§5) covers continuity. Revisit anonymous server identities only if squads later need "invite a guest."
- Privacy surface area stays tiny: email + gameplay stats. A one-paragraph privacy policy, but it must exist before accounts ship (and is required for App Store submission anyway).

---

## 8. Measurement plan (how we'll know it converts)

Instrument the funnel before shipping the redesign, so there's a baseline:

| Step | Metric | Target |
|---|---|---|
| First open → starts tutorial or daily | Engagement rate | 85%+ |
| Tutorial start → tutorial complete | Tutorial completion | 90%+ (it's 30 seconds; if lower, the tutorial is broken) |
| First open → first puzzle completed | **Activation (north star)** | 60%+ same-session |
| First result → account prompt shown → account created | Prompt conversion | 15–25% on first show (healthy for a soft ask); 35%+ cumulative by streak-7 |
| Account created → merge succeeded | Merge integrity | 100.0% — this is an alarm, not a metric |
| D1 return rate: account holders vs. guests | Retention delta | Accounts should show a meaningfully higher D1; if not, the value ladder (§6) is hollow and prompts should get *quieter*, not louder |
| Deep-link arrival → completed puzzle | Share-to-play conversion (extends `GROWTH_PLAN.md` §8) | Baseline first, then optimize the Path B overlay copy |

A/B candidates once traffic allows (in priority order): tutorial-first vs. straight-to-daily default for Path A; account prompt on first win vs. first result; "Don't lose it" loss-framing vs. "Back it up" neutral framing.

---

## 9. Anti-patterns this plan explicitly rejects

- **No signup wall, ever** — reaffirming `GROWTH_PLAN.md` §9. If a future feature seems to need one, the feature is wrong.
- **No fake-doors** ("create an account to see your result") — the result is the product's payoff; holding it hostage poisons the first impression.
- **No permission stacking** — account, notifications, and install prompts never appear in the same session beat (§3.4).
- **No tutorial you can't skip, no skip you can't undo.**
- **No password fields, no username-at-signup, no profile wizard.**
- **No dark-pattern decline buttons** ("No, I hate saving my progress"). Declines are neutral: "Not now." The brand does trash talk in *game* copy, not in consent UX.
- **No burning the daily on confusion.** The tutorial exists precisely so the first daily is played with rules understood — a day-1 loss caused by UI confusion (not basketball knowledge) is the single most avoidable churn event we have.

---

## 10. Build order (when this gets executed — not now)

1. **Instrumentation first**: first-open detection, funnel events, baseline capture. (Client-only, no backend needed.)
2. **Tutorial + first-run menu state + Path B overlay line.** (Client-only. This half of the plan has zero backend dependency and could ship well before accounts.)
3. **Backend milestone**: Supabase (or chosen equivalent) auth + user_stats/completions + **server-side answer validation in the same push** (it's the standing launch blocker; one backend build, two blockers cleared).
4. **Account sheet + merge flow + prompt triggers/re-arm logic.**
5. **Escalation triggers, decline persistence, settings entry points.**
6. **A/B harness** on the two highest-leverage prompts (§8) once traffic justifies it.

Steps 1–2 are independent of steps 3–5 and cheaper; they can be pulled forward into any session. Steps 3–5 constitute "Phase 2 begins."

---

## 11. Open decisions for the user

1. **Tutorial default**: should Path A default to the tutorial (recommended — protects the first daily) or default to the daily with the tutorial offered? The A/B in §8 can settle it, but the pre-data default is a judgment call.
2. **Backend choice**: Supabase (recommended, matches original plan sketch) vs. Clerk/Firebase/other — decide at build time, affects nothing else in this plan.
3. **Account prompt on day-1 loss**: this plan says wait for the first win (§5). The counterargument — a loss is when streak *insurance* framing lands hardest — is legitimate; flagging it rather than deciding unilaterally.
4. **Timing**: steps 1–2 of §10 are client-only and cheap — pull them forward now, or hold everything until the Phase 2 backend milestone so onboarding ships as one coherent release?
