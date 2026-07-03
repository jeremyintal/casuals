# Casuals — mobile app plan

Companion to [`PLAN.md`](PLAN.md) (product strategy) and [`AGENTS.md`](AGENTS.md) (build rules). This document covers taking Casuals from a web prototype to iOS/Android. It does not repeat game design, data strategy, or launch-content reasoning — see `PLAN.md` for those; they apply identically on mobile.

---

## 1. Why mobile, and why now is early

Daily-habit games live or die on two things the web can only half-deliver: a **reliable daily nudge** and **home-screen presence**. Wordle-style games get a large share of retained players through the app icon sitting on a phone, not through remembering to type a URL. For this specific audience — NBA Twitter, checking scores and hot takes compulsively on a phone — mobile is where the habit actually forms.

That said: mobile is a *distribution and retention* layer, not a rewrite. The current Vite/React client (`src/`) already contains the entire game — engine, data, sound, storage, UI. The right mobile strategy reuses essentially all of it rather than rebuilding a second app in parallel. Building this now, before the content pipeline (`pipeline/`) has produced a full 60-puzzle runway, is deliberately early — see §7 for the sequencing call.

---

## 2. Build approach: wrap, don't rewrite

**Recommendation: Capacitor**, wrapping the existing React app, shipped to both app stores. Not React Native.

| | Capacitor (recommended) | React Native rewrite |
|---|---|---|
| Code reuse from `src/` | ~95% — same components, same engine, same styles | UI layer rebuilt from scratch; `engine.ts`/`storage.ts`/`data/` logic portable with adaptation |
| Time to first store build | Days | Weeks |
| Native feel | Very good for this app's shape (cards, text, timers, no complex gestures) | Best-in-class, matters more for gesture-heavy or animation-heavy apps |
| Team size this suits | Solo/small team maintaining one codebase | Team that can afford two UI surfaces or a full RN migration |
| Native APIs needed | Local notifications, haptics, share sheet, status bar — all standard Capacitor plugins | Same APIs, more setup |

The case against React Native isn't that it's worse — it's that Casuals doesn't need what RN is for. There's no camera, no complex gesture system, no list virtualization at scale, no 60fps game loop beyond a CSS-driven countdown. It's cards, text, a timer, and a search box. Capacitor gets a shippable, store-native-feeling app this week instead of this quarter.

**Trigger to reconsider React Native:** if Apple/Google review flags the wrapped app as an insufficiently native experience (see §5), or animation/scroll performance genuinely disappoints on real devices during QA — not before.

---

## 3. What actually needs to be built (the gap between web prototype and store-ready app)

The game logic needs **zero changes**. What's missing is the native shell and a handful of platform capabilities the web version doesn't have:

1. **Capacitor project scaffold** wrapping the existing Vite build output — `npx cap init`, `npx cap add ios`, `npx cap add android`, pointing at `dist/`.
2. **Daily reminder notifications — local, not push, at MVP.** Use Capacitor's Local Notifications plugin to schedule a repeating on-device notification at a fixed local time (e.g. "Today's chain just dropped 🏀"). This needs **no backend** — the notification is scheduled entirely on-device based on the existing `dailyIndex()`/ET-rollover logic already in `src/data/puzzles.ts`. This is the single highest-leverage retention feature this plan adds, and it's nearly free to build.
3. **Native share sheet** (Capacitor Share) replacing the current clipboard-copy fallback in `EndSheet`'s `copyShare()` — same `shareText()` output, better native UX, and it's what makes the share-grid growth loop from `PLAN.md` §3 actually work well on mobile (share sheets get used; clipboard-then-paste doesn't).
4. **Haptics** (Capacitor Haptics) on turnover, violation, and buzzer-beater — a light-touch native feel that costs almost nothing and meaningfully improves game feel on a device that has the hardware for it.
5. **Storage migration**: swap `localStorage` in `src/game/storage.ts` for Capacitor Preferences behind a thin adapter (falls back to `localStorage` when running on web) — more reliable persistence across OS storage-clearing policies than raw `localStorage` in a WebView.
6. **App icon, splash screen, status bar theming** matching the existing dark scoreboard aesthetic (`styles.css` tokens) — this is asset production, not engineering, but budget real design time for it; it's the first thing anyone sees in a store listing.
7. **Offline-first loading**: the daily puzzle payload is small and already local (`src/data/puzzles.ts` bundled into the app) — no network call is needed to play, which means the app should open instantly with zero loading state even with no connection. Verify this explicitly; don't let a future backend integration (see §6) accidentally introduce a network dependency on cold start.

Nothing above touches `engine.ts`'s game rules, scoring, or the design invariants in `AGENTS.md`. Those stay exactly as specified.

---

## 4. App Store / Play Store realities to plan around

- **Naming.** "Casuals" is a common, generic word — expect it to already be effectively taken or hard to rank for in App Store search. Plan for a store display name with a qualifier for search/App Store Optimization purposes (e.g. "Casuals: NBA Trade Chains") while keeping the in-app wordmark and brand voice exactly as-is. Confirm exact availability directly in App Store Connect / Play Console at submission time — don't assume based on a web search.
- **Category:** Games → Trivia, secondary Sports. Trivia is the better primary category for discovery against the actual competitive set (Wordle-likes, daily puzzle games), not Sports apps (scores/stats apps, a different user intent).
- **Apple's "minimum functionality" review risk (Guideline 4.2).** A bare WebView pointed at a website reads as a "website wrapper" and risks rejection. The native additions in §3 (local notifications, haptics, native share, offline-first, no browser chrome) are what push this from "website in a frame" to a legitimate native app in Apple's eyes — treat that list as required for submission, not optional polish.
- **NBA trademark/IP posture gets sharper on mobile.** A website with modest traffic draws little scrutiny; an app actively seeking App Store/Play Store approval and public discovery is reviewed more carefully, and trademark holders monitor app stores more actively than the general web. `PLAN.md` §8 already commits to team names/colors only, no logos or player photos — for mobile, add an explicit, visible disclaimer in both the store listing and an in-app "About" screen: *"Casuals is an independent trivia game. Not affiliated with, endorsed by, or sponsored by the NBA."* Cheap insurance against a takedown.
- **Screenshots are the pitch.** The LED shot-clock scoreboard (`.led`, `.scoreboard` in `styles.css`) is the single most visually distinctive asset this app has — lead the store screenshot set with it, not the menu screen.
- **TestFlight (iOS) and Play Console internal testing** before public submission — recruit from the same NBA Twitter accounts named as launch partners in `PLAN.md` §7; they're both the QA pool and the day-one growth engine.

---

## 5. Sequencing: how this fits the existing roadmap

`PLAN.md` §7 already lays out Phase 1 (MVP, done), Phase 2 (growth: accounts, leaderboards), Phase 3 (depth). Mobile slots in as follows — **not** as a prerequisite to shipping more puzzle content, and **not** ahead of it either:

| When | What |
|---|---|
| **Now — in parallel with puzzle curation** | Capacitor scaffold + native shell (§3, items 1–7). This is mostly one-time setup work that doesn't block or get blocked by curating the remaining ~49 puzzles (`project-tasks-queue.md` priority 1). A small team can run both threads at once. |
| **Before public store submission** | Puzzle corpus should be meaningfully past the 8–9 currently shipped — submitting an app with barely a week of daily content undersells it in review and to day-one users who'll hit the content wall almost immediately. Not a hard gate at exactly 60, but don't submit at 9. |
| **Before public store submission** | Server-side answer validation (`AGENTS.md` launch blockers) — this applies to mobile exactly as much as web; a wrapped WebView still ships the client bundle with answers in it. |
| **Phase 2, alongside accounts/leaderboards** | Push notifications (not local) become worth the backend investment once there's a reason to send a *dynamic* message ("your streak is about to break," "a friend beat your score") rather than a static daily reminder. Until then, local notifications (§3.2) cover the core retention need for free. |
| **Phase 3 stretch, high-leverage if it lands** | **iOS home screen widget** showing today's streak and whether the daily chain is solved yet, and/or an iOS **Live Activity** showing a live shot-clock countdown while a game is in progress. Given the shot clock *is* the product's visual identity, a widget/Live Activity isn't a generic "nice to have" — it's the single best mobile-native amplifier of the game's core hook, and worth prioritizing above other Phase 3 items once the app has an install base to justify the engineering. |

---

## 6. What does NOT need a backend yet

Worth stating plainly, since "mobile app" often implies "now we need a server": **it doesn't, not for this phase.** Local notifications avoid needing push infrastructure. The puzzle content ships bundled in the app binary, same as it ships bundled in the web build today. Stats and streaks stay device-local via Capacitor Preferences, same trust model as the current `localStorage` approach (`AGENTS.md` already documents this as acceptable at prototype stage). The only backend work that's genuinely required before public launch is server-side answer validation — and that's a web launch blocker too, not something mobile adds on top.

---

## 7. Open decision for the user

Two reasonable sequencing choices, and this plan doesn't resolve which:

- **Mobile-first-ish:** start the Capacitor scaffold now, in parallel with ongoing puzzle curation, so a TestFlight build exists to show early testers/launch partners well before public launch.
- **Content-first:** hold mobile work until the puzzle corpus is substantially built out (§5's "not a hard gate at 60, but don't submit at 9" concern), so the first mobile build anyone sees already has real runway.

Recommendation: mobile-first-ish — the native shell work is small, doesn't compete for the same effort as puzzle curation (different skill, can run in parallel), and getting a TestFlight build into the hands of the Twitter accounts named as launch partners early is itself a useful feedback and relationship-building step ahead of the 2027 trade-deadline launch push described in `PLAN.md` §7.
