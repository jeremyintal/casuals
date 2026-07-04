# Design prompt: redesign Casuals (web + mobile)

> Copy everything below this line into a Claude design session (or hand it to a human designer). It is self-contained — no repo access needed. Where it references files, that's provenance for the Casuals team, not required reading for the designer.

---

You are redesigning **Casuals**, a daily NBA puzzle game, across two surfaces: a responsive web app and a native-feeling iOS/Android app (a Capacitor wrap of the same codebase — one design system must serve both). A working prototype exists with a coherent visual direction; your job is to evolve it into something distinctive, polished, and instantly screenshot-able, not to start from a blank page. You may propose bolder departures where you can argue they serve the goals below.

## 1. What the game is

Six degrees of separation for NBA transactions, framed as GM roleplay. Each day, one puzzle: **"Turn Tony Bradley into Luka Dončić in 4 moves."** The player reconstructs the real chain of trades a front office made — the Lakers drafted Bradley, flipped him for Josh Hart, packaged Hart for Anthony Davis, traded Davis for Luka. The player fills in each link by naming who came back in each deal, against a **24-second NBA shot clock** per guess, with **6 possessions** (guesses) for the whole game. Wrong guess = turnover, clock resets to 14. Clock expires = violation, costs a possession, reveals a hint. Solving a link resets a fresh 24. Correct answers bank the remaining seconds as points; finishing with under 3 seconds triggers a **buzzer-beater bonus** with a celebration moment.

Results are stamped with a tier: **SICKO** (perfect), **FILM JUNKIE**, **LEAGUE PASS**, or — on a loss — **CERTIFIED CASUAL**. The name is the hook: "casual" is NBA Twitter's favorite insult for fans who only watch the Finals. People play to avoid the stamp, and share to flex the stamp.

## 2. Audience and emotional targets

NBA Twitter and group-chat basketball obsessives, overwhelmingly on phones, fluent in the visual language of scoreboards, broadcast graphics, and trade-machine screenshots. The design must hit three feelings in sequence:

1. **Tension** while playing — the shot clock is the heart of the game. It should feel like the last 24 seconds of a close game, not like a form with a timer attached.
2. **Flex** at the result — the tier stamp and share artifact are identity badges. Winning should produce something people *want* on their timeline.
3. **Story payoff** at the reveal — win or lose, the full chain is revealed with the real trade history. This is the "huh, I didn't know that" moment that makes the game feel smart rather than trivia-cheap.

## 3. Current visual direction (the starting point)

- Dark, jumbotron/scoreboard aesthetic: near-black background (#0a0a0f), panel grays, off-white type
- LED-style shot clock in amber (#ffb02e) with glow, flipping to pulsing red (#ff4b44) under 5 seconds; monospace clock digits (Chivo Mono), Archivo for UI with a heavy italic letterspaced wordmark: *CASUALS*
- Basketball orange (#e8622c) as the primary action color; six basketball icons as possession indicators
- Chain rendered as vertical cards connected by a line: start card → question links → target card, each with team-color accent bars and team abbreviation pills (real team colors, e.g. Lakers gold, Celtics green)
- Subtle basketball-court line work watermarked into the background
- Result stamps rendered as rotated rubber-stamp text (green SICKO, red CERTIFIED CASUAL)

Keep what's working: the scoreboard identity, the clock as visual centerpiece, team colors as the wayfinding system, the stamp language. Push harder on: overall polish and cohesion, the moments of drama (buzzer-beater, violation, win), typography hierarchy, and everything listed in §5.

## 4. Screens and states to design

**Web (mobile-first, ~390px primary, scales to desktop ~460px column):**

1. **Menu** — wordmark hero, tagline ("Play GM. Turn one player into another. Prove you're not a casual."), daily-chain card ("Turn Terry Rozier into Derrick White in 4 moves" + difficulty dots + PLAY DAILY), stats row (played/win%/streak/best), archive list ("Classic Games", one row per past puzzle with team pill, matchup, tier badge if completed), how-to-play
2. **Game — ready state** — scoreboard with TIP OFF overlay before the clock starts
3. **Game — live** — scoreboard (score | LED clock | possession balls), the chain (solved cards, one glowing active question card, locked cards, target card), search-autocomplete input pinned below, hint states (free hint at ≤10s; stronger hint after a violation)
4. **Game — drama states** — turnover (shake + red flash + toast), shot-clock violation (buzzer moment, full-screen treatment), under-5-seconds danger state, buzzer-beater make (the single most screenshot-worthy moment in the product — design it like a broadcast replay graphic)
5. **End sheet** — tier stamp, score/time/possessions, full chain recap with real trade details and an epilogue line, four actions: SHARE, CHALLENGE A FRIEND, REPLAY, MENU
6. **Share artifacts** — (a) the existing text grid (emoji squares 🟩🟧🟥⬛ + tier + time + "Turn X into Y in N moves" + deep link) and (b) **a generated share image card** — not yet built, design it: it should look like a screenshot of the game (LED clock, stamp, team colors), sized for X/Twitter and Instagram Stories

**Mobile app (same screens, plus):**

7. **App icon + splash screen** — must read at 60×60; the splash must feel instant, not decorative
8. **Store screenshots** (6.7" iPhone frame) — lead with the shot clock mid-game, not the menu
9. **Daily notification** — one line, in-voice ("Today's chain just dropped 🏀")
10. **iOS home-screen widget concept** — streak + today-solved state at small size; stretch: a Live Activity showing the live shot clock during a game
11. **Permission-ask moment** — an in-app pre-prompt for notifications shown after the first completed puzzle, in the game's voice, before the OS dialog

## 5. Hard constraints (do not violate)

- **Game rules are frozen:** 6 possessions, 24-second clock, 14 reset, the tier names, the emoji share grid. Redesign presentation, never mechanics.
- **NBA IP:** real team names, abbreviations, and colors are fine; **no team logos, no player photos or likenesses**. The design must feel like basketball without borrowing protected marks. (This pushes toward typographic/graphic solutions — lean into it.)
- **One codebase, two surfaces:** every screen must work as both a web page and inside a native WebView. No iOS-only or Android-only layouts for core play.
- **Dark-first.** A light mode is optional and out of scope for this pass.
- **Performance:** animations must be achievable with CSS/DOM (no heavy canvas/WebGL); the game runs a 100ms clock tick and must stay smooth on mid-range Android WebViews.
- **The core loop must stay one-input:** during play the only interaction is the player-name search box. Don't add chrome that competes with it.
- **Accessibility:** never rely on color alone for game state (the clock danger state, solved/turnover distinctions); minimum 4.5:1 contrast for text; touch targets ≥44px.

## 6. Deliverables

1. A refreshed **design system**: color tokens (including the team-color system and semantic states), type scale, spacing, component inventory (cards, pills, buttons, toasts, stamps, clock, possession indicators)
2. **High-fidelity designs for screens/states 1–6** at 390px, with desktop adaptation notes for the web
3. The **share image card** (§4.6b) — this is the highest-leverage single artifact; treat it as a first-class deliverable, not an afterthought
4. **App icon, splash, and one store-screenshot set** (§4.7–8)
5. **Widget/Live Activity concept** (§4.10) at wireframe-plus fidelity
6. **Motion notes** for the drama states (§4.4): what animates, how long, what sound accompanies it (synthesized swish/clank/buzzer/crowd sounds already exist)

## 7. Voice and copy rules (for any text you place in mockups)

Confident NBA-Twitter native, never corporate. "Prove you're not a casual," not "Test your knowledge!" Stamps and buttons are ALL-CAPS display moments (SICKO, TIP OFF, PLAY DAILY); everything else is sentence case. The GM framing is canonical: puzzles are always pitched as "Turn [player] into [player] in [N] moves." Never use "please," never use exclamation-mark enthusiasm, never write copy that sounds like an ad — the product speaks like a group chat that watches League Pass.

## 8. What success looks like

A stranger scrolling X sees a shared result card and understands the game, the stakes, and the flex in under two seconds. A player in the last 5 seconds of the clock feels their pulse. The App Store screenshots look like a broadcast package, not a quiz app. And the whole thing still ships as one React codebase.
