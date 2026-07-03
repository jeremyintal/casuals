# Casuals — mobile app plan

Companion to [`PLAN.md`](PLAN.md) (product strategy), [`GROWTH_PLAN.md`](GROWTH_PLAN.md) (virality/sharing strategy), and [`AGENTS.md`](AGENTS.md) (build rules). This document covers taking Casuals from a web prototype to iOS/Android. It does not repeat game design, data strategy, or launch-content reasoning — see `PLAN.md` for those; they apply identically on mobile.

> **Revision note (2026-07-03):** this plan originally described adding a share sheet and local notifications to a client that had neither. Since then, `GROWTH_PLAN.md` phase 1 shipped in the web client: `shareText()`/`challengeText()` now build real deep links (`?d=42` daily, `?p=puzzle-id` archive, `?src=share|challenge` attribution), `EndSheet` already calls `navigator.share()` with a clipboard fallback, and per-device share-attribution counters exist in `storage.ts`. This revision updates every section that assumed those didn't exist yet, and adds §4 (deep linking — the biggest gap the original version had), a concrete plugin table, a data-continuity callout, execution-level notification-scheduling detail, and cost/timeline/testing-matrix specifics that were missing before.

---

## 1. Why mobile, and why now is early

Daily-habit games live or die on two things the web can only half-deliver: a **reliable daily nudge** and **home-screen presence**. Wordle-style games get a large share of retained players through the app icon sitting on a phone, not through remembering to type a URL. For this specific audience — NBA Twitter, checking scores and hot takes compulsively on a phone — mobile is where the habit actually forms.

That said: mobile is a *distribution and retention* layer, not a rewrite. The current Vite/React client (`src/`) already contains the entire game — engine, data, sound, storage, UI, and now (as of `GROWTH_PLAN.md` phase 1) the sharing/deep-link plumbing too. The right mobile strategy reuses essentially all of it rather than rebuilding a second app in parallel. Building this now, before the content pipeline (`pipeline/`) has produced a full 60-puzzle runway, is deliberately early — see §6 for the sequencing call.

---

## 2. Build approach: wrap, don't rewrite

**Recommendation: Capacitor**, wrapping the existing React app, shipped to both app stores. Not React Native.

| | Capacitor (recommended) | React Native rewrite |
|---|---|---|
| Code reuse from `src/` | ~95% — same components, same engine, same styles, same share/deep-link logic | UI layer rebuilt from scratch; `engine.ts`/`storage.ts`/`data/` logic portable with adaptation |
| Time to first store build | Days | Weeks |
| Native feel | Very good for this app's shape (cards, text, timers, no complex gestures) | Best-in-class, matters more for gesture-heavy or animation-heavy apps |
| Team size this suits | Solo/small team maintaining one codebase | Team that can afford two UI surfaces or a full RN migration |
| Native APIs needed | Local notifications, haptics, share sheet, deep links, status bar — all standard Capacitor plugins | Same APIs, more setup |

The case against React Native isn't that it's worse — it's that Casuals doesn't need what RN is for. There's no camera, no complex gesture system, no list virtualization at scale, no 60fps game loop beyond a CSS-driven countdown. It's cards, text, a timer, and a search box. Capacitor gets a shippable, store-native-feeling app this week instead of this quarter.

**Trigger to reconsider React Native:** if Apple/Google review flags the wrapped app as an insufficiently native experience (see §5), or animation/scroll performance genuinely disappoints on real devices during QA — not before.

---

## 3. What actually needs to be built

The game logic needs **zero changes**. What's missing is the native shell and a handful of platform capabilities the web version doesn't have:

1. **Capacitor project scaffold** wrapping the existing Vite build output — `npx cap init`, `npx cap add ios`, `npx cap add android`, pointing at `dist/`.
2. **Daily reminder notifications — local, not push, at MVP.** See §5 for exact scheduling mechanics, permission-timing, and a timezone edge case worth knowing about. No backend required.
3. **Reliable native share sheet.** The web client already prefers `navigator.share()` (see revision note above) — but the Web Share API's availability *inside a Capacitor WebView* is inconsistent across Android versions and WebView implementations in a way it isn't in mobile Safari/Chrome. Swap the `navigator.share` call in `EndSheet`'s `doShare()` for the Capacitor Share plugin when running inside Capacitor (feature-detect via `Capacitor.isNativePlatform()`), keeping `navigator.share` → clipboard as the web fallback chain unchanged. This is a small, surgical change to existing code, not new sharing logic.
4. **Deep linking so shared links open the app, not just a browser tab.** This is the single biggest gap in the previous version of this plan — see §4, its own section below, because it needs real explanation.
5. **Haptics** (Capacitor Haptics) on turnover, violation, and buzzer-beater — a light-touch native feel that costs almost nothing and meaningfully improves game feel on a device that has the hardware for it.
6. **Storage migration**: swap `localStorage` in `src/game/storage.ts` for Capacitor Preferences behind a thin adapter (falls back to `localStorage` when running on web) — more reliable persistence across OS storage-clearing policies than raw `localStorage` in a WebView. See §7 for what this means for players who used both the web and app versions.
7. **App icon, splash screen, status bar theming** matching the existing dark scoreboard aesthetic (`styles.css` tokens) — this is asset production, not engineering, but budget real design time for it; it's the first thing anyone sees in a store listing.
8. **Offline-first loading**: the daily puzzle payload is small and already local (`src/data/puzzles.ts` bundled into the app) — no network call is needed to play, which means the app should open instantly with zero loading state even with no connection. Verify this explicitly; don't let a future backend integration (see §6) accidentally introduce a network dependency on cold start.

Nothing above touches `engine.ts`'s game rules, scoring, or the design invariants in `AGENTS.md`. Those stay exactly as specified.

### Concrete plugin list

| Plugin | Used for | Notes |
|---|---|---|
| `@capacitor/local-notifications` | Daily reminder (§5) | iOS 13+, Android API 26+ for full reliability of repeating schedules; degrade gracefully below that, don't block install |
| `@capacitor/share` | Native share sheet (item 3 above) | Prefer over bare `navigator.share` inside Capacitor specifically — see item 3 |
| `@capacitor/haptics` | Turnover/violation/buzzer-beater feedback (item 5) | No-ops harmlessly on devices without haptic hardware |
| `@capacitor/preferences` | Stats/streak storage (item 6) | Replaces raw `localStorage`; API is a thin async key-value store, adapter shape stays similar to current `storage.ts` |
| `@capacitor/app` | Receiving deep links via `appUrlOpen` (§4) | Also gives you app-foreground/background lifecycle events, useful later for "did they actually open today's puzzle" analytics |
| `@capacitor/splash-screen` | Splash screen (item 7) | Configure to dismiss the instant the shell mounts — don't let Casuals' own instant-load story (item 8) get undercut by an artificial splash delay |
| `@capacitor/status-bar` | Status bar theming (item 7) | Match `--bg` from `styles.css` so the status bar doesn't look like a seam between OS chrome and the app |

---

## 4. Deep linking: making shared links actually open the app

This is new to this revision because it's the most important thing the original plan missed. `GROWTH_PLAN.md`'s entire phase-1 thesis is that a shared result's deep link (`casuals.game/?d=42&src=share`) should land the recipient exactly on the puzzle being bragged about. On the web, that already works — but a link like that, tapped on a phone that has the Casuals app installed, will by default open **mobile Safari or Chrome**, not the app, unless the app is explicitly configured to intercept it. Shipping the app without this means every mobile share — the primary growth channel per `GROWTH_PLAN.md` — routes installed users away from the app they installed, back into a browser tab.

### What needs to happen

- **iOS: Universal Links.** Requires hosting an `apple-app-site-association` file at `https://casuals.game/.well-known/apple-app-site-association` (no extension, served as `application/json`, no redirects) declaring which paths the app handles, plus the corresponding entitlement in the Xcode project. Once configured, tapping a `casuals.game` link on a device with the app installed opens the app directly; without it, opens the web version. No custom URL scheme (`casuals://`) needed or recommended — Universal Links degrade gracefully to the web when the app isn't installed, custom schemes don't.
- **Android: App Links.** The equivalent mechanism — an `assetlinks.json` file at `https://casuals.game/.well-known/assetlinks.json` plus an `intent-filter` with `android:autoVerify="true"` in the Android manifest. Same graceful-degradation property as iOS Universal Links.
- **Receiving the link in Capacitor.** Once either platform verifies the domain association and opens the app, Capacitor's `@capacitor/app` plugin exposes an `appUrlOpen` listener that fires with the full URL, including the `?d=`/`?p=`/`?src=` query string. Route that string through the *exact same* `parseDeepLink()` function already in `src/App.tsx` — this is the payoff of having built that function to work off `URLSearchParams` rather than being tangled into browser-only APIs; it should need zero changes to be called from a native listener instead of `window.location.search` on mount.
- **What this does NOT require:** a backend, a URL shortener, or deferred deep linking (the fancier pattern where a link clicked with the app *not yet installed* remembers the intended destination through the App Store install flow and opens straight to it post-install — services like Branch.io do this). Skip deferred deep linking at MVP; a non-installed user simply lands on the web version, which is a fully playable fallback, not a broken experience. Revisit deferred linking only if data later shows a meaningful fraction of share clicks come from users who don't yet have the app *and* churn before reinstalling manually.

### Sequencing within the mobile build

Universal Links / App Links require the production domain to already be live and serving the association files *before* they're useful for testing — this is naturally one of the later steps in the mobile build (after the domain exists and Capacitor's native projects exist), not the first. Don't block the rest of §3's work on it, but don't ship the public app without it either — an app that can't be deep-linked into undercuts the exact growth mechanism `GROWTH_PLAN.md` is built around.

---

## 5. Local notifications: exact scheduling approach

Scoped in the original plan as "local, not push, at MVP" — this section adds the execution detail that was missing.

- **Scheduling mechanic:** use `LocalNotifications.schedule()` with a repeating trigger (`on: { hour, minute }` in the Capacitor Local Notifications API) rather than re-scheduling a one-off notification daily from app code — a repeating OS-level schedule survives the app being closed/killed, which a JS-driven re-schedule loop does not.
- **When to ask for permission:** not on cold first launch. iOS in particular treats a permission prompt fired before the user has any reason to trust the app as a soft rejection signal in review, and real users reflexively deny prompts they don't yet have context for. Ask **after the first completed puzzle** (win or loss — the point is "you've now formed a first impression of the daily habit," not "you won"), framed in-app first ("Want a nudge when tomorrow's chain drops?") so the OS-level permission dialog is the second ask, not the first, and only appears once the player has already opted in once.
- **What time to schedule, and a real timezone edge case worth knowing about:** the daily puzzle rolls over at midnight **America/New_York** (`easternDayStamp()` in `src/data/puzzles.ts`). The simplest and correct approach is to schedule the local notification at a fixed **device-local** time — e.g. 10am local — rather than trying to convert ET-midnight into the user's timezone. For the large majority of the audience (continental US, and anywhere from Europe eastward through Asia to the International Date Line), a device-local mid-morning notification always fires *after* that calendar day's puzzle has already rolled over in ET, because ET midnight is early in absolute UTC terms (04:00–05:00 UTC depending on daylight saving). The one real edge case: a user far enough east of UTC that their *local* morning falls before that same UTC day's ET-midnight rollover could, in principle, get a notification for a puzzle that technically hasn't rolled over yet by a few hours — worked through concretely, this only matters for timezones roughly UTC+9 and beyond (Japan, Korea, eastern Australia) during their very early morning hours, and even then the practical effect is a notification pointing at "today's" puzzle a few hours before internal rollover, not a broken or wrong puzzle. Given the audience is overwhelmingly US-based per `PLAN.md`'s positioning, this is a documented, accepted limitation at MVP, not something worth building timezone-aware scheduling to solve — revisit only if international growth data says otherwise.
- **Notification copy:** keep it to one line, in the game's voice, not generic engagement-bait — e.g. "Today's chain just dropped 🏀" rather than "Don't forget to play!" `GROWTH_PLAN.md` §9 already warns against over-notifying eroding trust; the same warning applies to notification *tone*, not just frequency.

---

## 6. App Store / Play Store realities to plan around

- **Naming.** "Casuals" is a common, generic word — expect it to already be effectively taken or hard to rank for in App Store search. Plan for a store display name with a qualifier for search/App Store Optimization purposes (e.g. "Casuals: NBA Trade Chains") while keeping the in-app wordmark and brand voice exactly as-is. Confirm exact availability directly in App Store Connect / Play Console at submission time — don't assume based on a web search.
- **Category:** Games → Trivia, secondary Sports. Trivia is the better primary category for discovery against the actual competitive set (Wordle-likes, daily puzzle games), not Sports apps (scores/stats apps, a different user intent).
- **Apple's "minimum functionality" review risk (Guideline 4.2).** A bare WebView pointed at a website reads as a "website wrapper" and risks rejection. The native additions in §3 (local notifications, haptics, native share, deep linking, offline-first, no browser chrome) are what push this from "website in a frame" to a legitimate native app in Apple's eyes — treat that list as required for submission, not optional polish.
- **NBA trademark/IP posture gets sharper on mobile.** A website with modest traffic draws little scrutiny; an app actively seeking App Store/Play Store approval and public discovery is reviewed more carefully, and trademark holders monitor app stores more actively than the general web. `PLAN.md` §8 already commits to team names/colors only, no logos or player photos — for mobile, add an explicit, visible disclaimer in both the store listing and an in-app "About" screen: *"Casuals is an independent trivia game. Not affiliated with, endorsed by, or sponsored by the NBA."* Cheap insurance against a takedown.
- **Screenshots are the pitch.** The LED shot-clock scoreboard (`.led`, `.scoreboard` in `styles.css`) is the single most visually distinctive asset this app has — lead the store screenshot set with it, not the menu screen.
- **TestFlight (iOS) and Play Console internal testing** before public submission — recruit from the same NBA Twitter accounts named as launch partners in `PLAN.md` §7; they're both the QA pool and the day-one growth engine.

### Cost and tooling, concretely

- **Apple Developer Program:** $99/year, required for any App Store distribution (including TestFlight).
- **Google Play Console:** $25 one-time registration fee.
- **iOS builds require a Mac** with Xcode — Capacitor's iOS project is a real Xcode project, not something buildable from a non-Mac CI runner without a macOS build agent (GitHub Actions macOS runners, or a Mac-in-the-cloud service, both work; a plain Linux CI box does not).
- **Android builds** can run on any OS via Gradle/Android Studio — no equivalent Mac requirement.
- **No Expo-style managed build service exists for bare Capacitor.** Unlike Expo/EAS, Capacitor doesn't ship a hosted build pipeline — plan for either local Xcode/Android Studio builds or a self-configured CI pipeline (GitHub Actions + Fastlane is the common pattern) for repeatable signing and submission.
- **Minimum OS versions, driven by the plugin list in §3:** practically iOS 13+ and Android API 26+ (Android 8+) for full reliability of the Local Notifications repeating-schedule API; the rest of the plugin list (Share, Haptics, Preferences, App) supports meaningfully older OS versions if a lower floor is ever needed. Don't chase supporting older OSes than this — the audience skews toward recent devices and the engineering cost of backward compatibility here isn't worth it.

---

## 7. Data continuity: web and native app do not share stats

Worth stating plainly so nobody is surprised in testing: a player's stats and streaks in `src/game/storage.ts` live in the browser's `localStorage` on web, and will live in a separate native storage layer (Capacitor Preferences, §3 item 6) once the app ships. **These are two different storage contexts.** Someone who's been playing the web version daily and then installs the app starts over at zero streak in the app — there is no automatic migration, because there's no account system to key a migration off of (`PLAN.md` §7 correctly scopes accounts to Phase 2).

This is an accepted MVP limitation, not a bug to fix now — but it should be stated explicitly in the app's onboarding or FAQ ("your streak is tracked per-install; it'll carry over automatically once accounts ship") so early testers, especially the launch-partner accounts who've likely already been playing the web version, aren't confused or annoyed when their streak resets on first app open. Revisit once accounts exist in Phase 2 — that's also the natural point to build a one-time "claim your existing local stats" migration flow for exactly this population.

---

## 8. Sequencing: how this fits the existing roadmap

`PLAN.md` §7 already lays out Phase 1 (MVP, done), Phase 2 (growth: accounts, leaderboards), Phase 3 (depth). Mobile slots in as follows — **not** as a prerequisite to shipping more puzzle content, and **not** ahead of it either:

| When | What |
|---|---|
| **Now — in parallel with puzzle curation** | Capacitor scaffold + native shell (§3 items 1, 3, 5–8). This is mostly one-time setup work that doesn't block or get blocked by curating the remaining puzzles (`project-tasks-queue.md` priority 1). A small team can run both threads at once. |
| **Once the production domain is live** | Deep linking (§4) — Universal Links/App Links need the domain serving association files first, so this naturally lands slightly later than the rest of the native shell, but must land before public submission (see §4's closing note on why). |
| **Before public store submission** | Puzzle corpus should be meaningfully past the 9 currently shipped — submitting an app with barely a week and a half of daily content undersells it in review and to day-one users who'll hit the content wall almost immediately. Not a hard gate at exactly 60, but don't submit at 9. |
| **Before public store submission** | Server-side answer validation (`AGENTS.md` launch blockers) — this applies to mobile exactly as much as web; a wrapped WebView still ships the client bundle with answers in it. |
| **Phase 2, alongside accounts/leaderboards** | Push notifications (not local) become worth the backend investment once there's a reason to send a *dynamic* message ("your streak is about to break," "a friend beat your score") rather than a static daily reminder. Until then, local notifications (§5) cover the core retention need for free. Phase 2 accounts are also the point to build the local-stats migration flow described in §7. |
| **Phase 3 stretch, high-leverage if it lands** | **iOS home screen widget** showing today's streak and whether the daily chain is solved yet, and/or an iOS **Live Activity** showing a live shot-clock countdown while a game is in progress. Given the shot clock *is* the product's visual identity, a widget/Live Activity isn't a generic "nice to have" — it's the single best mobile-native amplifier of the game's core hook, and worth prioritizing above other Phase 3 items once the app has an install base to justify the engineering. |

### Rough timeline, for planning purposes

Mirroring the week-by-week estimation style `PLAN.md` §7 used for the original web MVP — these are planning estimates, not commitments:

- **Week 1:** Capacitor scaffold, storage migration to Preferences, haptics, icon/splash/status-bar assets. App runs on a physical device and in an emulator.
- **Week 2:** Local notifications (including the permission-timing UX described in §5) and the native-share-plugin swap described in §3 item 3.
- **Week 3:** Deep linking (§4) — requires the domain to be live; can start the association-file/manifest work earlier but real end-to-end testing needs the domain serving them.
- **Week 4:** Store listing assets (screenshots, description, disclaimer copy), TestFlight/Play Console internal testing round with launch-partner accounts, fix whatever that round surfaces.

Four weeks assumes one person working on this alongside (not blocked by) puzzle curation, per §8's sequencing table — not a dedicated team sprint.

---

## 9. What does NOT need a backend yet

Worth stating plainly, since "mobile app" often implies "now we need a server": **it doesn't, not for this phase.** Local notifications avoid needing push infrastructure. Deep linking (§4) needs a *domain* serving two static association files, not a server application. The puzzle content ships bundled in the app binary, same as it ships bundled in the web build today. Stats and streaks stay device-local via Capacitor Preferences, same trust model as the current `localStorage` approach (`AGENTS.md` already documents this as acceptable at prototype stage) — see §7 for the consequence of that. The only backend work that's genuinely required before public launch is server-side answer validation — and that's a web launch blocker too, not something mobile adds on top.

---

## 10. Open decision for the user

Two reasonable sequencing choices, and this plan doesn't resolve which:

- **Mobile-first-ish:** start the Capacitor scaffold now, in parallel with ongoing puzzle curation, so a TestFlight build exists to show early testers/launch partners well before public launch.
- **Content-first:** hold mobile work until the puzzle corpus is substantially built out (§8's "not a hard gate at 60, but don't submit at 9" concern), so the first mobile build anyone sees already has real runway.

Recommendation: mobile-first-ish — the native shell work is small, doesn't compete for the same effort as puzzle curation (different skill, can run in parallel), and getting a TestFlight build into the hands of the Twitter accounts named as launch partners early is itself a useful feedback and relationship-building step ahead of the 2027 trade-deadline launch push described in `PLAN.md` §7.
