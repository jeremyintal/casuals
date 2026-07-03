# Casuals — candidate chain curation queue

Auto-generated, unverified candidates ranked by a heuristic score (endpoint fame, chain length, mid-chain obscurity). A human must verify every fact against Basketball-Reference or another primary source before it becomes a puzzle — see checklist below. Regenerate with `node pipeline/fetch.mjs && node pipeline/parse.mjs && node pipeline/graph.mjs && node pipeline/curate.mjs`.

## Verification checklist per candidate

- [ ] Every transaction date and full deal text checked against a primary source
- [ ] No player included via a stripped/mis-parsed parenthetical (e.g. "later selected" picks)
- [ ] Chain does not route through a waive → separate free-agent signing (invalid edge per `AGENTS.md`)
- [ ] Multi-team trade legs correctly attributed to each team
- [ ] Draft-pick assets identified with enough context to phrase a fair question, or the link is dropped
- [ ] Reveal text written in the game's voice; hint1 (free) and hint2 (post-violation) written
- [ ] All player names added to `src/data/players.ts` with correct diacritics
- [ ] Added to `src/data/puzzles.ts` following the `Puzzle` schema in `AGENTS.md`

---

## 1. [score 19] DAL — 2019-01-31 → 2025-02-02 (4 links)

**Start:** DeAndre Jordan / Wesley Matthews / Dennis Smith Jr.
**Target:** Max Christie / Anthony Davis

1. **2019-01-31** (DAL-NYK) — sent `DeAndre Jordan, Wesley Matthews, Dennis Smith Jr.`, received `Trey Burke, Tim Hardaway Jr., Courtney Lee, Kristaps Porziņģis`
   > The Dallas Mavericks traded DeAndre Jordan, Wesley Matthews, Dennis Smith Jr., a 2021 1st round draft pick (Keon Johnson was later selected) and a 2024 1st round draft pick (Kyshawn George was later selected) to the New York Knicks for Trey Burke, Tim Hardaway Jr., Courtney Lee and Kristaps Porziņģis. 2023 1st-rd pick was top-10 protected, became 2024 1st-rd pick
2. **2022-02-10** (DAL-WAS) — sent `Kristaps Porzingis`, received `Davis Bertans, Spencer Dinwiddie`
   > The Dallas Mavericks traded Kristaps Porzingis and a 2022 2nd round draft pick (Yannick Nzosa was later selected) to the Washington Wizards for Davis Bertans and Spencer Dinwiddie. 2022 2nd-rd pick is DAL own
3. **2023-02-06** (BRK-DAL) — sent `Spencer Dinwiddie`, received `Kyrie Irving, Markieff Morris`
   > The Brooklyn Nets traded Kyrie Irving and Markieff Morris to the Dallas Mavericks for Spencer Dinwiddie, Dorian Finney-Smith, a 2027 2nd round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick. Brooklyn also received trade exceptions 2027 2nd-rd pick is DAL own 2029 1st-rd pick is DAL own 2029 2nd-rd pick is DAL own
4. **2025-02-02** (DAL-LAL-UTA) — sent `Markieff Morris`, received `Max Christie, Anthony Davis`
   > In a 3-team trade, the Dallas Mavericks traded Luka Doncic, Maxi Kleber and Markieff Morris to the Los Angeles Lakers; the Los Angeles Lakers traded Max Christie, Anthony Davis and a 2029 1st round draft pick to the Dallas Mavericks; the Los Angeles Lakers traded Jalen Hood-Schifino and a 2025 2nd round draft pick (John Tonje was later selected) to the Utah Jazz; the Utah Jazz traded cash and a 2025 2nd round draft pick to the Dallas Mavericks; and the Utah Jazz traded cash to the Los Angeles Lakers. Los Angeles also received a trade exception 2025 2nd-rd pick is LAC own Dallas also received multiple trade exceptions 2025 2nd-rd pick is a right to swap, did not convey 2029 1st-rd pick is LAL own

## 2. [score 19] DAL — 2022-02-10 → 2026-02-05 (4 links)

**Start:** Kristaps Porzingis
**Target:** Tyus Jones / Marvin Bagley / A.J. Johnson / Khris Middleton

1. **2022-02-10** (DAL-WAS) — sent `Kristaps Porzingis`, received `Davis Bertans, Spencer Dinwiddie`
   > The Dallas Mavericks traded Kristaps Porzingis and a 2022 2nd round draft pick (Yannick Nzosa was later selected) to the Washington Wizards for Davis Bertans and Spencer Dinwiddie. 2022 2nd-rd pick is DAL own
2. **2023-02-06** (BRK-DAL) — sent `Spencer Dinwiddie`, received `Kyrie Irving, Markieff Morris`
   > The Brooklyn Nets traded Kyrie Irving and Markieff Morris to the Dallas Mavericks for Spencer Dinwiddie, Dorian Finney-Smith, a 2027 2nd round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick. Brooklyn also received trade exceptions 2027 2nd-rd pick is DAL own 2029 1st-rd pick is DAL own 2029 2nd-rd pick is DAL own
3. **2025-02-02** (DAL-LAL-UTA) — sent `Markieff Morris`, received `Max Christie, Anthony Davis`
   > In a 3-team trade, the Dallas Mavericks traded Luka Doncic, Maxi Kleber and Markieff Morris to the Los Angeles Lakers; the Los Angeles Lakers traded Max Christie, Anthony Davis and a 2029 1st round draft pick to the Dallas Mavericks; the Los Angeles Lakers traded Jalen Hood-Schifino and a 2025 2nd round draft pick (John Tonje was later selected) to the Utah Jazz; the Utah Jazz traded cash and a 2025 2nd round draft pick to the Dallas Mavericks; and the Utah Jazz traded cash to the Los Angeles Lakers. Los Angeles also received a trade exception 2025 2nd-rd pick is LAC own Dallas also received multiple trade exceptions 2025 2nd-rd pick is a right to swap, did not convey 2029 1st-rd pick is LAL own
4. **2026-02-05** (CHO-DAL-WAS) — sent `Anthony Davis`, received `Tyus Jones, Marvin Bagley, A.J. Johnson, Khris Middleton`
   > In a 3-team trade, the Charlotte Hornets traded Tyus Jones to the Dallas Mavericks; the Dallas Mavericks traded Anthony Davis, Dante Exum, Jaden Hardy and D'Angelo Russell to the Washington Wizards; the Washington Wizards traded Malaki Branham to the Charlotte Hornets; and the Washington Wizards traded Marvin Bagley, A.J. Johnson, Khris Middleton, a 2026 1st round draft pick (Koa Peat was later selected), a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2029 2nd round draft pick and a 2030 1st round draft pick to the Dallas Mavericks. Charlotte also received a trade exception Dallas also received multiple trade exceptions 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2026 2nd-rd pick was PHO own conditional 2027 2nd-rd pick is CHI own 2029 2nd-rd pick is HOU own conditional 2030 1st-rd pick is GSW own

## 3. [score 19] LAC — 2011-12-14 → 2021-08-16 (4 links)

**Start:** Al-Farouq Aminu / Eric Gordon / Chris Kaman
**Target:** Eric Bledsoe

1. **2011-12-14** (LAC-NOH) — sent `Al-Farouq Aminu, Eric Gordon, Chris Kaman`, received `Chris Paul`
   > The Los Angeles Clippers traded Al-Farouq Aminu, Eric Gordon, Chris Kaman and a 2012 1st round draft pick (Austin Rivers was later selected) to the New Orleans Hornets for Chris Paul, $350K cash and a 2015 2nd round draft pick (Artūras Gudaitis was later selected).
2. **2017-06-28** (HOU-LAC) — sent `Chris Paul`, received `Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer`
   > The Houston Rockets traded Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer, $661k cash and a 2018 1st round draft pick (Omari Spellman was later selected) to the Los Angeles Clippers for Chris Paul.
3. **2021-03-25** (ATL-LAC) — sent `Lou Williams`, received `Rajon Rondo`
   > The Atlanta Hawks traded Rajon Rondo to the Los Angeles Clippers for Lou Williams, a 2023 2nd round draft pick (Julian Phillips was later selected) and a 2027 2nd round draft pick. 2023 2nd-rd pick was POR own 2027 2nd-rd pick is LAC own
4. **2021-08-16** (LAC-MEM) — sent `Rajon Rondo`, received `Eric Bledsoe`
   > The Los Angeles Clippers traded Patrick Beverley, Daniel Oturu and Rajon Rondo to the Memphis Grizzlies for Eric Bledsoe. Los Angeles also received a trade exception

## 4. [score 19] LAC — 2011-12-14 → 2022-02-04 (4 links)

**Start:** Al-Farouq Aminu / Eric Gordon / Chris Kaman
**Target:** Robert Covington / Norman Powell

1. **2011-12-14** (LAC-NOH) — sent `Al-Farouq Aminu, Eric Gordon, Chris Kaman`, received `Chris Paul`
   > The Los Angeles Clippers traded Al-Farouq Aminu, Eric Gordon, Chris Kaman and a 2012 1st round draft pick (Austin Rivers was later selected) to the New Orleans Hornets for Chris Paul, $350K cash and a 2015 2nd round draft pick (Artūras Gudaitis was later selected).
2. **2017-06-28** (HOU-LAC) — sent `Chris Paul`, received `Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer`
   > The Houston Rockets traded Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer, $661k cash and a 2018 1st round draft pick (Omari Spellman was later selected) to the Los Angeles Clippers for Chris Paul.
3. **2021-08-16** (LAC-MEM) — sent `Patrick Beverley`, received `Eric Bledsoe`
   > The Los Angeles Clippers traded Patrick Beverley, Daniel Oturu and Rajon Rondo to the Memphis Grizzlies for Eric Bledsoe. Los Angeles also received a trade exception
4. **2022-02-04** (LAC-POR) — sent `Eric Bledsoe`, received `Robert Covington, Norman Powell`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own

## 5. [score 19] LAC — 2017-06-28 → 2022-02-04 (4 links)

**Start:** Chris Paul
**Target:** Robert Covington / Norman Powell

1. **2017-06-28** (HOU-LAC) — sent `Chris Paul`, received `Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer`
   > The Houston Rockets traded Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer, $661k cash and a 2018 1st round draft pick (Omari Spellman was later selected) to the Los Angeles Clippers for Chris Paul.
2. **2021-03-25** (ATL-LAC) — sent `Lou Williams`, received `Rajon Rondo`
   > The Atlanta Hawks traded Rajon Rondo to the Los Angeles Clippers for Lou Williams, a 2023 2nd round draft pick (Julian Phillips was later selected) and a 2027 2nd round draft pick. 2023 2nd-rd pick was POR own 2027 2nd-rd pick is LAC own
3. **2021-08-16** (LAC-MEM) — sent `Rajon Rondo`, received `Eric Bledsoe`
   > The Los Angeles Clippers traded Patrick Beverley, Daniel Oturu and Rajon Rondo to the Memphis Grizzlies for Eric Bledsoe. Los Angeles also received a trade exception
4. **2022-02-04** (LAC-POR) — sent `Eric Bledsoe`, received `Robert Covington, Norman Powell`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own

## 6. [score 19] LAC — 2017-06-28 → 2023-11-01 (4 links)

**Start:** Chris Paul
**Target:** James Harden / Filip Petrusev / P.J. Tucker

1. **2017-06-28** (HOU-LAC) — sent `Chris Paul`, received `Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer`
   > The Houston Rockets traded Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer, $661k cash and a 2018 1st round draft pick (Omari Spellman was later selected) to the Los Angeles Clippers for Chris Paul.
2. **2021-08-16** (LAC-MEM) — sent `Patrick Beverley`, received `Eric Bledsoe`
   > The Los Angeles Clippers traded Patrick Beverley, Daniel Oturu and Rajon Rondo to the Memphis Grizzlies for Eric Bledsoe. Los Angeles also received a trade exception
3. **2022-02-04** (LAC-POR) — sent `Eric Bledsoe`, received `Robert Covington, Norman Powell`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own
4. **2023-11-01** (LAC-OKC-PHI) — sent `Robert Covington`, received `James Harden, Filip Petrusev, P.J. Tucker`
   > In a 3-team trade, the Los Angeles Clippers traded a 2027 1st round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris, cash, a 2024 2nd round draft pick (Juan Nunez was later selected), a 2028 1st round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick to the Philadelphia 76ers; the Oklahoma City Thunder traded a 2026 1st round draft pick (Koa Peat was later selected) to the Philadelphia 76ers; and the Philadelphia 76ers traded James Harden, Filip Petrusev and P.J. Tucker to the Los Angeles Clippers. 2027 1st-rd pick is a right to swap 2024 2nd-rd pick is more favorable 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2028 1st-rd pick is LAC own 2029 1st-rd pick is a swap 2029 2nd-rd pick is LAC own Philadelphia also received trade exceptions

## 7. [score 19] LAC — 2018-01-29 → 2023-02-09 (4 links)

**Start:** Blake Griffin / Brice Johnson / Willie Reed
**Target:** Eric Gordon

1. **2018-01-29** (DET-LAC) — sent `Blake Griffin, Brice Johnson, Willie Reed`, received `Avery Bradley, Tobias Harris, Boban Marjanović`
   > The Detroit Pistons traded Avery Bradley, Tobias Harris, Boban Marjanović, a 2018 1st round draft pick (Miles Bridges was later selected) and a 2019 2nd round draft pick (Jaylen Hands was later selected) to the Los Angeles Clippers for Blake Griffin, Brice Johnson and Willie Reed.
2. **2019-02-06** (LAC-PHI) — sent `Tobias Harris, Boban Marjanović`, received `Wilson Chandler, Mike Muscala, Landry Shamet`
   > The Los Angeles Clippers traded Tobias Harris, Boban Marjanović and Mike Scott to the Philadelphia 76ers for Wilson Chandler, Mike Muscala, Landry Shamet, a 2020 1st round draft pick (Saddiq Bey was later selected), a 2021 1st round draft pick (Tre Mann was later selected), a 2021 2nd round draft pick (Jeremiah Robinson-Earl was later selected) and a 2023 2nd round draft pick (James Nnaji was later selected). 2021 1st-rd pick was MIA own 2021 2nd-rd pick was DET own 2023 2nd-rd pick was DET own
3. **2020-11-19** (BRK-DET-LAC) — sent `Landry Shamet`, received `Jay Scrubb, Luke Kennard, Justin Patton`
   > In a 3-team trade, the Brooklyn Nets traded Saddiq Bey, Jaylen Hands, Dzanan Musa and a 2021 2nd round draft pick (JT Thor was later selected) to the Detroit Pistons; the Brooklyn Nets traded Jay Scrubb to the Los Angeles Clippers; the Detroit Pistons traded Bruce Brown to the Brooklyn Nets; the Detroit Pistons traded Luke Kennard, Justin Patton, a 2023 2nd round draft pick (Julian Phillips was later selected), a 2024 2nd round draft pick (Jonathan Mogbo was later selected), a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (Jaron Pierre Jr. was later selected) to the Los Angeles Clippers; the Los Angeles Clippers traded Reggie Perry and Landry Shamet to the Brooklyn Nets; and the Los Angeles Clippers traded Rodney McGruder and cash to the Detroit Pistons. 2023 2nd-rd pick is POR own 2024 2nd-rd pick is DET own 2025 2nd-rd pick is DET's own 2026 2nd-rd pick was DET own 2021 2nd-rd pick is TOR own
4. **2023-02-09** (HOU-LAC-MEM) — sent `Luke Kennard`, received `Eric Gordon`
   > In a 3-team trade, the Houston Rockets traded Eric Gordon and a 2023 1st round draft pick (Kobe Brown was later selected) to the Los Angeles Clippers; the Los Angeles Clippers traded John Wall and a 2023 1st round draft pick (Cam Whitmore was later selected) to the Houston Rockets; the Los Angeles Clippers traded Luke Kennard and a 2026 2nd round draft pick (NULL was later selected) to the Memphis Grizzlies; the Memphis Grizzlies traded Danny Green to the Houston Rockets; and the Memphis Grizzlies traded a 2024 2nd round draft pick (Cam Christie was later selected), a 2024 2nd round draft pick (Juan Nunez was later selected) and a 2027 2nd round draft pick to the Los Angeles Clippers. 2026 2nd-rd pick was a right to swap, did not convey Houston also received a trade exception 2023 1st-rd pick was a right to swap 2024 2nd-rd pick is more favorable 2024 2nd-rd pick is TOR own 2027 2nd-rd pick is MEM own

## 8. [score 19] LAC — 2021-08-16 → 2026-02-04 (4 links)

**Start:** Patrick Beverley / Daniel Oturu / Rajon Rondo
**Target:** Darius Garland

1. **2021-08-16** (LAC-MEM) — sent `Patrick Beverley, Daniel Oturu, Rajon Rondo`, received `Eric Bledsoe`
   > The Los Angeles Clippers traded Patrick Beverley, Daniel Oturu and Rajon Rondo to the Memphis Grizzlies for Eric Bledsoe. Los Angeles also received a trade exception
2. **2022-02-04** (LAC-POR) — sent `Eric Bledsoe`, received `Robert Covington, Norman Powell`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own
3. **2023-11-01** (LAC-OKC-PHI) — sent `Robert Covington`, received `James Harden, Filip Petrusev, P.J. Tucker`
   > In a 3-team trade, the Los Angeles Clippers traded a 2027 1st round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris, cash, a 2024 2nd round draft pick (Juan Nunez was later selected), a 2028 1st round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick to the Philadelphia 76ers; the Oklahoma City Thunder traded a 2026 1st round draft pick (Koa Peat was later selected) to the Philadelphia 76ers; and the Philadelphia 76ers traded James Harden, Filip Petrusev and P.J. Tucker to the Los Angeles Clippers. 2027 1st-rd pick is a right to swap 2024 2nd-rd pick is more favorable 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2028 1st-rd pick is LAC own 2029 1st-rd pick is a swap 2029 2nd-rd pick is LAC own Philadelphia also received trade exceptions
4. **2026-02-04** (CLE-LAC) — sent `James Harden`, received `Darius Garland`
   > The Cleveland Cavaliers traded Darius Garland and a 2026 2nd round draft pick (Henri Veesaar was later selected) to the Los Angeles Clippers for James Harden. 2026 2nd-rd pick was CLE own

## 9. [score 19] LAC — 2022-02-10 → 2026-02-04 (4 links)

**Start:** Serge Ibaka / David Michineau
**Target:** Darius Garland

1. **2022-02-10** (DET-MIL-SAC-LAC) — sent `Serge Ibaka, David Michineau`, received `Rodney Hood, Semi Ojeleye, Vanja Marinkovic`
   > In a 4-team trade, the Detroit Pistons traded a 2023 2nd round draft pick (Isaiah Wong was later selected) to the Milwaukee Bucks; the Detroit Pistons traded Josh Jackson and Trey Lyles to the Sacramento Kings; the Los Angeles Clippers traded Serge Ibaka and cash to the Milwaukee Bucks; the Los Angeles Clippers traded David Michineau to the Sacramento Kings; the Milwaukee Bucks traded Rodney Hood and Semi Ojeleye to the Los Angeles Clippers; the Milwaukee Bucks traded Donte DiVincenzo to the Sacramento Kings; the Sacramento Kings traded Marvin Bagley III to the Detroit Pistons; the Sacramento Kings traded Vanja Marinkovic to the Los Angeles Clippers; and the Sacramento Kings traded a 2024 2nd round draft pick (Tyler Smith was later selected) to the Milwaukee Bucks.
2. **2023-07-08** (ATL-HOU-LAC-MEM-OKC) — sent `Vanja Marinkovic`, received `Kenyon Martin`
   > In a 5-team trade, the Atlanta Hawks traded Alpha Kaba to the Houston Rockets; the Houston Rockets traded Usman Garuba, TyTy Washington Jr., a 2025 2nd round draft pick (Mohamed Diawara was later selected) and a 2028 2nd round draft pick to the Atlanta Hawks; the Houston Rockets traded Kenyon Martin to the Los Angeles Clippers; the Houston Rockets traded Josh Christopher to the Memphis Grizzlies; the Houston Rockets traded Patty Mills, a 2024 2nd round draft pick (KJ Simpson was later selected), a 2029 2nd round draft pick and a 2030 2nd round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded a 2026 2nd round draft pick (Tyler Bilodeau was later selected) and a 2027 2nd round draft pick to the Houston Rockets; the Los Angeles Clippers traded Vanja Marinkovic to the Memphis Grizzlies; the Memphis Grizzlies traded Dillon Brooks to the Houston Rockets; and the Oklahoma City Thunder traded cash to the Atlanta Hawks. 2027 2nd-rd pick is MEM own 2024 2nd-rd pick is HOU own 2025 2nd-rd pick is MIN own conditional 2026 2nd-rd pick was one of LAC/BOS/IND/MIA, became LAC 2026 2nd-rd pick 2028 2nd-rd pick is HOU own 2029 2nd-rd pick is HOU own 2030 2nd-rd pick is HOU own
3. **2023-11-01** (LAC-OKC-PHI) — sent `KJ Martin`, received `James Harden, Filip Petrusev, P.J. Tucker`
   > In a 3-team trade, the Los Angeles Clippers traded a 2027 1st round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris, cash, a 2024 2nd round draft pick (Juan Nunez was later selected), a 2028 1st round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick to the Philadelphia 76ers; the Oklahoma City Thunder traded a 2026 1st round draft pick (Koa Peat was later selected) to the Philadelphia 76ers; and the Philadelphia 76ers traded James Harden, Filip Petrusev and P.J. Tucker to the Los Angeles Clippers. 2027 1st-rd pick is a right to swap 2024 2nd-rd pick is more favorable 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2028 1st-rd pick is LAC own 2029 1st-rd pick is a swap 2029 2nd-rd pick is LAC own Philadelphia also received trade exceptions
4. **2026-02-04** (CLE-LAC) — sent `James Harden`, received `Darius Garland`
   > The Cleveland Cavaliers traded Darius Garland and a 2026 2nd round draft pick (Henri Veesaar was later selected) to the Los Angeles Clippers for James Harden. 2026 2nd-rd pick was CLE own

## 10. [score 19] MIN — 2017-06-22 → 2021-08-25 (4 links)

**Start:** Kris Dunn / Zach LaVine / Lauri Markkanen
**Target:** Patrick Beverley

1. **2017-06-22** (CHI-MIN) — sent `Kris Dunn, Zach LaVine, Lauri Markkanen`, received `Jimmy Butler, Justin Patton`
   > The Chicago Bulls traded Jimmy Butler and Justin Patton to the Minnesota Timberwolves for Kris Dunn, Zach LaVine and Lauri Markkanen.
2. **2018-11-12** (MIN-PHI) — sent `Jimmy Butler, Justin Patton`, received `Jerryd Bayless, Robert Covington, Dario Šarić`
   > The Minnesota Timberwolves traded Jimmy Butler and Justin Patton to the Philadelphia 76ers for Jerryd Bayless, Robert Covington, Dario Šarić and a 2022 2nd round draft pick (Matteo Spagnolo was later selected). 2022 2nd-rd pick is more favorable of PHI and DEN
3. **2019-07-06** (MIN-PHO) — sent `Dario Šarić`, received `Jarrett Culver`
   > The Minnesota Timberwolves traded Cameron Johnson and Dario Šarić to the Phoenix Suns for Jarrett Culver.
4. **2021-08-25** (MEM-MIN) — sent `Jarrett Culver`, received `Patrick Beverley`
   > The Memphis Grizzlies traded Patrick Beverley to the Minnesota Timberwolves for Jarrett Culver and Juan Hernangomez. Memphis also received a trade exception

## 11. [score 19] MIN — 2017-06-22 → 2022-07-06 (4 links)

**Start:** Kris Dunn / Zach LaVine / Lauri Markkanen
**Target:** Rudy Gobert

1. **2017-06-22** (CHI-MIN) — sent `Kris Dunn, Zach LaVine, Lauri Markkanen`, received `Jimmy Butler, Justin Patton`
   > The Chicago Bulls traded Jimmy Butler and Justin Patton to the Minnesota Timberwolves for Kris Dunn, Zach LaVine and Lauri Markkanen.
2. **2018-11-12** (MIN-PHI) — sent `Jimmy Butler, Justin Patton`, received `Jerryd Bayless, Robert Covington, Dario Šarić`
   > The Minnesota Timberwolves traded Jimmy Butler and Justin Patton to the Philadelphia 76ers for Jerryd Bayless, Robert Covington, Dario Šarić and a 2022 2nd round draft pick (Matteo Spagnolo was later selected). 2022 2nd-rd pick is more favorable of PHI and DEN
3. **2020-02-05** (ATL-HOU-MIN-DEN) — sent `Robert Covington`, received `Evan Turner, Malik Beasley, Juan Hernangomez, Jarred Vanderbilt`
   > In a 4-team trade, the Atlanta Hawks traded a 2024 2nd round draft pick (Pelle Larsson was later selected) to the Houston Rockets; the Atlanta Hawks traded Evan Turner and a 2020 1st round draft pick (Aleksej Pokusevski was later selected) to the Minnesota Timberwolves; the Denver Nuggets traded Malik Beasley, Juan Hernangomez and Jarred Vanderbilt to the Minnesota Timberwolves; the Houston Rockets traded Clint Capela and Nene to the Atlanta Hawks; the Houston Rockets traded Gerald Green and a 2020 1st round draft pick (Zeke Nnaji was later selected) to the Denver Nuggets; the Minnesota Timberwolves traded Keita Bates-Diop, Shabazz Napier and Noah Vonleh to the Denver Nuggets; and the Minnesota Timberwolves traded Jordan Bell and Robert Covington to the Houston Rockets. (Pick is GSW's 2024 second-round pick)
4. **2022-07-06** (MIN-UTA) — sent `Malik Beasley, Jarred Vanderbilt`, received `Rudy Gobert`
   > The Minnesota Timberwolves traded Malik Beasley, Patrick Beverley, Leandro Bolmaro, Walker Kessler, Jarred Vanderbilt, a 2023 1st round draft pick (Keyonte George was later selected), a 2025 1st round draft pick (Will Riley was later selected), a 2026 1st round draft pick, a 2027 1st round draft pick and a 2029 1st round draft pick to the Utah Jazz for Rudy Gobert. Minnesota also received a trade exception Utah also received a trade exception 2025 1st-rd pick is MIN own 2026 1st-rd pick was a right to swap, did not convey 2027 1st-rd pick is MIN own conditional 2029 1st-rd pick is MIN own

## 12. [score 19] MIN — 2018-11-12 → 2022-07-06 (4 links)

**Start:** Jimmy Butler / Justin Patton
**Target:** Rudy Gobert

1. **2018-11-12** (MIN-PHI) — sent `Jimmy Butler, Justin Patton`, received `Jerryd Bayless, Robert Covington, Dario Šarić`
   > The Minnesota Timberwolves traded Jimmy Butler and Justin Patton to the Philadelphia 76ers for Jerryd Bayless, Robert Covington, Dario Šarić and a 2022 2nd round draft pick (Matteo Spagnolo was later selected). 2022 2nd-rd pick is more favorable of PHI and DEN
2. **2019-07-06** (MIN-PHO) — sent `Dario Šarić`, received `Jarrett Culver`
   > The Minnesota Timberwolves traded Cameron Johnson and Dario Šarić to the Phoenix Suns for Jarrett Culver.
3. **2021-08-25** (MEM-MIN) — sent `Jarrett Culver`, received `Patrick Beverley`
   > The Memphis Grizzlies traded Patrick Beverley to the Minnesota Timberwolves for Jarrett Culver and Juan Hernangomez. Memphis also received a trade exception
4. **2022-07-06** (MIN-UTA) — sent `Patrick Beverley`, received `Rudy Gobert`
   > The Minnesota Timberwolves traded Malik Beasley, Patrick Beverley, Leandro Bolmaro, Walker Kessler, Jarred Vanderbilt, a 2023 1st round draft pick (Keyonte George was later selected), a 2025 1st round draft pick (Will Riley was later selected), a 2026 1st round draft pick, a 2027 1st round draft pick and a 2029 1st round draft pick to the Utah Jazz for Rudy Gobert. Minnesota also received a trade exception Utah also received a trade exception 2025 1st-rd pick is MIN own 2026 1st-rd pick was a right to swap, did not convey 2027 1st-rd pick is MIN own conditional 2029 1st-rd pick is MIN own

## 13. [score 19] OKC — 2017-09-25 → 2020-12-08 (4 links)

**Start:** Enes Kanter / Doug McDermott
**Target:** Al Horford / Théo Maledon / Vasilije Micić

1. **2017-09-25** (NYK-OKC) — sent `Enes Kanter, Doug McDermott`, received `Carmelo Anthony`
   > The New York Knicks traded Carmelo Anthony to the Oklahoma City Thunder for Enes Kanter, Doug McDermott and a 2018 2nd round draft pick (Mitchell Robinson was later selected).
2. **2018-07-25** (ATL-OKC-PHI) — sent `Carmelo Anthony`, received `Dennis Schröder, Timothé Luwawu-Cabarrot`
   > In a 3-team trade, the Atlanta Hawks traded Dennis Schröder to the Oklahoma City Thunder; the Atlanta Hawks traded Mike Muscala to the Philadelphia 76ers; the Oklahoma City Thunder traded Carmelo Anthony, a 2022 1st round draft pick, a 2024 2nd round draft pick (Ulrich Chomche was later selected) and a 2025 2nd round draft pick (Jahmai Mashack was later selected) to the Atlanta Hawks; the Philadelphia 76ers traded Justin Anderson to the Atlanta Hawks; and the Philadelphia 76ers traded Timothé Luwawu-Cabarrot to the Oklahoma City Thunder. 2022 1st-rd pick is top-14 protected, did not convey 2024 2nd-rd pick is OKC own 2025 2nd rd pick is OKC own
3. **2020-11-18** (LAL-OKC) — sent `Dennis Schroder`, received `Danny Green, Jaden McDaniels`
   > The Los Angeles Lakers traded Danny Green and Jaden McDaniels to the Oklahoma City Thunder for Dennis Schroder.
4. **2020-12-08** (OKC-PHI) — sent `Danny Green`, received `Al Horford, Théo Maledon, Vasilije Micić`
   > The Oklahoma City Thunder traded Terrance Ferguson, Danny Green and Vincent Poirier to the Philadelphia 76ers for Al Horford, Théo Maledon, Vasilije Micić and a 2026 1st round draft pick (Ebuka Okorie was later selected). 2025 1st-rd pick (PHI own) was top-6 protected, did not convey, became 2026 1st-rd pick (PHI own) which was top-4 protected and conveyed Philadelphia also received a trade exception from Oklahoma City.

## 14. [score 19] OKC — 2018-07-25 → 2020-11-27 (4 links)

**Start:** Carmelo Anthony
**Target:** Justin Jackson / Trevor Ariza

1. **2018-07-25** (ATL-OKC-PHI) — sent `Carmelo Anthony`, received `Dennis Schröder, Timothé Luwawu-Cabarrot`
   > In a 3-team trade, the Atlanta Hawks traded Dennis Schröder to the Oklahoma City Thunder; the Atlanta Hawks traded Mike Muscala to the Philadelphia 76ers; the Oklahoma City Thunder traded Carmelo Anthony, a 2022 1st round draft pick, a 2024 2nd round draft pick (Ulrich Chomche was later selected) and a 2025 2nd round draft pick (Jahmai Mashack was later selected) to the Atlanta Hawks; the Philadelphia 76ers traded Justin Anderson to the Atlanta Hawks; and the Philadelphia 76ers traded Timothé Luwawu-Cabarrot to the Oklahoma City Thunder. 2022 1st-rd pick is top-14 protected, did not convey 2024 2nd-rd pick is OKC own 2025 2nd rd pick is OKC own
2. **2020-11-18** (LAL-OKC) — sent `Dennis Schroder`, received `Danny Green, Jaden McDaniels`
   > The Los Angeles Lakers traded Danny Green and Jaden McDaniels to the Oklahoma City Thunder for Dennis Schroder.
3. **2020-11-20** (MIN-NYK-OKC) — sent `Jaden McDaniels`, received `James Johnson, Aleksej Pokusevski`
   > In a 3-team trade, the Minnesota Timberwolves traded Mathias Lessort and a 2023 2nd round draft pick (James Nnaji was later selected) to the New York Knicks; the Minnesota Timberwolves traded James Johnson, Aleksej Pokusevski and a 2024 2nd round draft pick (Kevin McCullar Jr. was later selected) to the Oklahoma City Thunder; the New York Knicks traded a 2020 1st round draft pick (Leandro Bolmaro was later selected) to the Minnesota Timberwolves; the Oklahoma City Thunder traded Jaden McDaniels and Ricky Rubio to the Minnesota Timberwolves; and the Oklahoma City Thunder traded Immanuel Quickley to the New York Knicks. 2023 2nd-rd pick was DET own 2024 2nd-rd pick is MIN own
4. **2020-11-27** (DAL-DET-OKC) — sent `James Johnson`, received `Justin Jackson, Trevor Ariza`
   > In a 3-team trade, the Dallas Mavericks traded Delon Wright to the Detroit Pistons; the Dallas Mavericks traded Justin Jackson, a 2023 2nd round draft pick (Maxwell Lewis was later selected) and a 2026 2nd round draft pick (Ryan Conwell was later selected) to the Oklahoma City Thunder; the Detroit Pistons traded Trevor Ariza to the Oklahoma City Thunder; and the Oklahoma City Thunder traded James Johnson to the Dallas Mavericks. more favorable 2023 2nd-rd pick ended up as DAL own 2026 2nd-rd pick was DAL own

## 15. [score 19] OKC — 2018-07-25 → 2021-06-18 (4 links)

**Start:** Carmelo Anthony
**Target:** Kemba Walker

1. **2018-07-25** (ATL-OKC-PHI) — sent `Carmelo Anthony`, received `Dennis Schröder, Timothé Luwawu-Cabarrot`
   > In a 3-team trade, the Atlanta Hawks traded Dennis Schröder to the Oklahoma City Thunder; the Atlanta Hawks traded Mike Muscala to the Philadelphia 76ers; the Oklahoma City Thunder traded Carmelo Anthony, a 2022 1st round draft pick, a 2024 2nd round draft pick (Ulrich Chomche was later selected) and a 2025 2nd round draft pick (Jahmai Mashack was later selected) to the Atlanta Hawks; the Philadelphia 76ers traded Justin Anderson to the Atlanta Hawks; and the Philadelphia 76ers traded Timothé Luwawu-Cabarrot to the Oklahoma City Thunder. 2022 1st-rd pick is top-14 protected, did not convey 2024 2nd-rd pick is OKC own 2025 2nd rd pick is OKC own
2. **2020-11-18** (LAL-OKC) — sent `Dennis Schroder`, received `Danny Green, Jaden McDaniels`
   > The Los Angeles Lakers traded Danny Green and Jaden McDaniels to the Oklahoma City Thunder for Dennis Schroder.
3. **2020-12-08** (OKC-PHI) — sent `Danny Green`, received `Al Horford, Théo Maledon, Vasilije Micić`
   > The Oklahoma City Thunder traded Terrance Ferguson, Danny Green and Vincent Poirier to the Philadelphia 76ers for Al Horford, Théo Maledon, Vasilije Micić and a 2026 1st round draft pick (Ebuka Okorie was later selected). 2025 1st-rd pick (PHI own) was top-6 protected, did not convey, became 2026 1st-rd pick (PHI own) which was top-4 protected and conveyed Philadelphia also received a trade exception from Oklahoma City.
4. **2021-06-18** (BOS-OKC) — sent `Al Horford`, received `Kemba Walker`
   > The Boston Celtics traded Kemba Walker, a 2021 1st round draft pick (Alperen Şengün was later selected) and a 2025 2nd round draft pick (Kobe Sanders was later selected) to the Oklahoma City Thunder for Moses Brown, Al Horford and a 2023 2nd round draft pick (Amari Bailey was later selected). 2021 1st-rd pick is BOS own 2025 2nd-rd pick (more favorable of Celtics, Grizzlies); became MEM pick Boston also received a trade exception

## 16. [score 19] OKC — 2018-07-25 → 2024-02-08 (4 links)

**Start:** Carmelo Anthony
**Target:** Gordon Hayward

1. **2018-07-25** (ATL-OKC-PHI) — sent `Carmelo Anthony`, received `Dennis Schröder, Timothé Luwawu-Cabarrot`
   > In a 3-team trade, the Atlanta Hawks traded Dennis Schröder to the Oklahoma City Thunder; the Atlanta Hawks traded Mike Muscala to the Philadelphia 76ers; the Oklahoma City Thunder traded Carmelo Anthony, a 2022 1st round draft pick, a 2024 2nd round draft pick (Ulrich Chomche was later selected) and a 2025 2nd round draft pick (Jahmai Mashack was later selected) to the Atlanta Hawks; the Philadelphia 76ers traded Justin Anderson to the Atlanta Hawks; and the Philadelphia 76ers traded Timothé Luwawu-Cabarrot to the Oklahoma City Thunder. 2022 1st-rd pick is top-14 protected, did not convey 2024 2nd-rd pick is OKC own 2025 2nd rd pick is OKC own
2. **2020-11-18** (LAL-OKC) — sent `Dennis Schroder`, received `Danny Green, Jaden McDaniels`
   > The Los Angeles Lakers traded Danny Green and Jaden McDaniels to the Oklahoma City Thunder for Dennis Schroder.
3. **2020-12-08** (OKC-PHI) — sent `Danny Green`, received `Al Horford, Théo Maledon, Vasilije Micić`
   > The Oklahoma City Thunder traded Terrance Ferguson, Danny Green and Vincent Poirier to the Philadelphia 76ers for Al Horford, Théo Maledon, Vasilije Micić and a 2026 1st round draft pick (Ebuka Okorie was later selected). 2025 1st-rd pick (PHI own) was top-6 protected, did not convey, became 2026 1st-rd pick (PHI own) which was top-4 protected and conveyed Philadelphia also received a trade exception from Oklahoma City.
4. **2024-02-08** (CHO-OKC) — sent `Vasilije Micić`, received `Gordon Hayward`
   > The Charlotte Hornets traded Gordon Hayward to the Oklahoma City Thunder for Davis Bertans, Tre Mann, Vasilije Micić, cash, a 2024 2nd round draft pick (KJ Simpson was later selected) and a 2025 2nd round draft pick (Johni Broome was later selected). 2024 2nd-rd pick is HOU own 2025 2nd-rd pick is PHI own Charlotte also received a trade exception

## 17. [score 19] OKC — 2019-07-16 → 2020-11-27 (4 links)

**Start:** Russell Westbrook
**Target:** Justin Jackson / Trevor Ariza

1. **2019-07-16** (HOU-OKC) — sent `Russell Westbrook`, received `Chris Paul`
   > The Houston Rockets traded Chris Paul, a 2021 1st round draft pick, a 2024 1st round draft pick (Nikola Topić was later selected), a 2025 1st round draft pick and a 2026 1st round draft pick (Labaron Philon Jr. was later selected) to the Oklahoma City Thunder for Russell Westbrook. 2024 pick is top-4 protected 2026 pick was HOU own top-4 protected, would have become $1MM and 2026 second-round pick 2021 1st-rd pick is right to swap, top-4 protected, did not convey 2025 1st-rd pick is right to swap with HOU, top-20 protected; became PHO pick, did not convey and OKC got nothing
2. **2020-11-16** (OKC-PHO) — sent `Chris Paul`, received `Ty Jerome, Jalen Lecque, Kelly Oubre Jr., Ricky Rubio`
   > The Oklahoma City Thunder traded Abdel Nader and Chris Paul to the Phoenix Suns for Ty Jerome, Jalen Lecque, Kelly Oubre Jr., Ricky Rubio and a 2022 1st round draft pick (Peyton Watson was later selected). 2022 1st-rd pick is PHO own
3. **2020-11-20** (MIN-NYK-OKC) — sent `Ricky Rubio`, received `James Johnson, Aleksej Pokusevski`
   > In a 3-team trade, the Minnesota Timberwolves traded Mathias Lessort and a 2023 2nd round draft pick (James Nnaji was later selected) to the New York Knicks; the Minnesota Timberwolves traded James Johnson, Aleksej Pokusevski and a 2024 2nd round draft pick (Kevin McCullar Jr. was later selected) to the Oklahoma City Thunder; the New York Knicks traded a 2020 1st round draft pick (Leandro Bolmaro was later selected) to the Minnesota Timberwolves; the Oklahoma City Thunder traded Jaden McDaniels and Ricky Rubio to the Minnesota Timberwolves; and the Oklahoma City Thunder traded Immanuel Quickley to the New York Knicks. 2023 2nd-rd pick was DET own 2024 2nd-rd pick is MIN own
4. **2020-11-27** (DAL-DET-OKC) — sent `James Johnson`, received `Justin Jackson, Trevor Ariza`
   > In a 3-team trade, the Dallas Mavericks traded Delon Wright to the Detroit Pistons; the Dallas Mavericks traded Justin Jackson, a 2023 2nd round draft pick (Maxwell Lewis was later selected) and a 2026 2nd round draft pick (Ryan Conwell was later selected) to the Oklahoma City Thunder; the Detroit Pistons traded Trevor Ariza to the Oklahoma City Thunder; and the Oklahoma City Thunder traded James Johnson to the Dallas Mavericks. more favorable 2023 2nd-rd pick ended up as DAL own 2026 2nd-rd pick was DAL own

## 18. [score 19] POR — 2020-11-22 → 2023-10-01 (4 links)

**Start:** Trevor Ariza / Isaiah Stewart
**Target:** Malcolm Brogdon / Robert Williams

1. **2020-11-22** (HOU-POR) — sent `Trevor Ariza, Isaiah Stewart`, received `Robert Covington`
   > The Houston Rockets traded Robert Covington to the Portland Trail Blazers for Trevor Ariza, Isaiah Stewart and a 2021 1st round draft pick (Usman Garuba was later selected). Portland also received a trade exception. 2021 1rst-rd pick is lottery protected
2. **2022-02-04** (LAC-POR) — sent `Robert Covington`, received `Eric Bledsoe, Keon Johnson, Justise Winslow`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own
3. **2023-09-27** (MIL-PHO-POR) — sent `Keon Johnson`, received `Jrue Holiday, Deandre Ayton, Toumani Camara`
   > In a 3-team trade, the Milwaukee Bucks traded Grayson Allen to the Phoenix Suns; the Milwaukee Bucks traded Jrue Holiday, a 2028 1st round draft pick, a 2029 1st round draft pick and a 2030 1st round draft pick to the Portland Trail Blazers; the Phoenix Suns traded Deandre Ayton and Toumani Camara to the Portland Trail Blazers; the Portland Trail Blazers traded Damian Lillard to the Milwaukee Bucks; and the Portland Trail Blazers traded Keon Johnson, Nassir Little and Jusuf Nurkic to the Phoenix Suns. 2029 1st-rd pick is MIL own 2028 1st-rd pick is a swap 2030 1st-rd pick is a swap
4. **2023-10-01** (BOS-POR) — sent `Jrue Holiday`, received `Malcolm Brogdon, Robert Williams`
   > The Boston Celtics traded Malcolm Brogdon, Robert Williams, a 2024 1st round draft pick (Bub Carrington was later selected) and a 2029 1st round draft pick to the Portland Trail Blazers for Jrue Holiday. 2024 conditional 1st-rd pick is GSW own 2029 1st-rd pick is BOS own, Portland also receives a trade exception

## 19. [score 19] BOS — 2013-07-12 → 2017-08-30 (4 links)

**Start:** Kevin Garnett / Paul Pierce / Jason Terry / D.J. White
**Target:** Kyrie Irving

1. **2013-07-12** (BOS-BRK) — sent `Kevin Garnett, Paul Pierce, Jason Terry, D.J. White`, received `Keith Bogans, MarShon Brooks, Kris Humphries, Kris Joseph, Gerald Wallace`
   > The Boston Celtics traded Kevin Garnett, Paul Pierce, Jason Terry, D.J. White, a 2017 1st round draft pick (Kyle Kuzma was later selected) and a 2017 2nd round draft pick (Sasha Vezenkov was later selected) to the Brooklyn Nets for Keith Bogans, MarShon Brooks, Kris Humphries, Kris Joseph, Gerald Wallace, a 2014 1st round draft pick (James Young was later selected), a 2016 1st round draft pick (Jaylen Brown was later selected), a 2017 1st round draft pick (Markelle Fultz was later selected) and a 2018 1st round draft pick (Collin Sexton was later selected). (BOS got 2017 #1 overall pick from BRK as result of pick swap)
2. **2014-09-25** (BOS-CLE) — sent `Keith Bogans`, received `John Lucas III, Erik Murphy, Dwight Powell, Malcolm Thomas`
   > The Boston Celtics traded Keith Bogans, a 2015 2nd round draft pick and a 2017 2nd round draft pick to the Cleveland Cavaliers for John Lucas III, Erik Murphy, Dwight Powell, Malcolm Thomas, a 2016 2nd round draft pick (Abdel Nader was later selected) and a 2017 2nd round draft pick (Kadeem Allen was later selected). Conditional 2015 2nd-rd pick did not convey Conditional 2017 2nd-rd pick did not convey
3. **2014-12-18** (BOS-DAL) — sent `Dwight Powell`, received `Jae Crowder, Jameer Nelson, Brandan Wright`
   > The Boston Celtics traded Dwight Powell and Rajon Rondo to the Dallas Mavericks for Jae Crowder, Jameer Nelson, Brandan Wright, a 2016 1st round draft pick (Guerschon Yabusele was later selected) and a 2016 2nd round draft pick (Demetrius Jackson was later selected). (Boston also receives $13M trade exception.)
4. **2017-08-30** (BOS-CLE) — sent `Jae Crowder`, received `Kyrie Irving`
   > The Boston Celtics traded Jae Crowder, Isaiah Thomas, Ante Žižić, a 2018 1st round draft pick (Collin Sexton was later selected) and a 2020 2nd round draft pick (Skylar Mays was later selected) to the Cleveland Cavaliers for Kyrie Irving. (2020 2nd-rd pick from BOS to CLE is MIA's pick, and was added as compensation for Isaiah Thomas's injury)

## 20. [score 19] BOS — 2019-07-06 → 2022-02-10 (4 links)

**Start:** Terry Rozier
**Target:** Derrick White

1. **2019-07-06** (BOS-CHO) — sent `Terry Rozier`, received `Kemba Walker`
   > The Boston Celtics traded Terry Rozier and a 2020 2nd round draft pick (Grant Riller was later selected) to the Charlotte Hornets for Kemba Walker and a 2020 2nd round draft pick (Yam Madar was later selected). (2020 second-round pick is BRK's or NYK's, whichever is least favorable.) (top-53 protected)
2. **2021-06-18** (BOS-OKC) — sent `Kemba Walker`, received `Moses Brown, Al Horford`
   > The Boston Celtics traded Kemba Walker, a 2021 1st round draft pick (Alperen Şengün was later selected) and a 2025 2nd round draft pick (Kobe Sanders was later selected) to the Oklahoma City Thunder for Moses Brown, Al Horford and a 2023 2nd round draft pick (Amari Bailey was later selected). 2021 1st-rd pick is BOS own 2025 2nd-rd pick (more favorable of Celtics, Grizzlies); became MEM pick Boston also received a trade exception
3. **2021-07-31** (BOS-DAL) — sent `Moses Brown`, received `Josh Richardson`
   > The Boston Celtics traded Moses Brown to the Dallas Mavericks for Josh Richardson. Boston received a trade exception Dallas received a trade exception
4. **2022-02-10** (BOS-SAS) — sent `Josh Richardson`, received `Derrick White`
   > The Boston Celtics traded Romeo Langford, Josh Richardson, a 2022 1st round draft pick (Blake Wesley was later selected) and a 2028 1st round draft pick to the San Antonio Spurs for Derrick White. Boston also received a trade exception 2022 1st-rd pick is BOS own and is top-4 protected 2028 1st-rd pick is a right to swap

## 21. [score 19] SAC — 2017-02-20 → 2025-02-03 (4 links)

**Start:** Omri Casspi / DeMarcus Cousins
**Target:** Zach LaVine / Sidy Cissoko

1. **2017-02-20** (NOP-SAC) — sent `Omri Casspi, DeMarcus Cousins`, received `Tyreke Evans, Langston Galloway, Buddy Hield`
   > The New Orleans Pelicans traded Tyreke Evans, Langston Galloway, Buddy Hield, a 2017 1st round draft pick (Zach Collins was later selected) and a 2017 2nd round draft pick (Frank Mason III was later selected) to the Sacramento Kings for Omri Casspi and DeMarcus Cousins. (2017 1st-rd pick is top-3 protected) (2017 2nd-rd pick going to SAC is PHI's pick)
2. **2022-02-08** (IND-SAC) — sent `Buddy Hield`, received `Justin Holiday, Jeremy Lamb, Domantas Sabonis`
   > The Indiana Pacers traded Justin Holiday, Jeremy Lamb, Domantas Sabonis and a 2023 2nd round draft pick (Jordan Walsh was later selected) to the Sacramento Kings for Tyrese Haliburton, Buddy Hield and Tristan Thompson. Indiana also received a trade exception Sacramento also received a trade exception 2023 2nd-rd pick was IND own
3. **2022-07-06** (ATL-SAC) — sent `Justin Holiday`, received `Kevin Huerter`
   > The Atlanta Hawks traded Kevin Huerter to the Sacramento Kings for Maurice Harkless, Justin Holiday and a 2025 1st round draft pick (Derik Queen was later selected). conditional 2024 1st-rd pick was SAC own, did not convey. Atlanta also receives a trade exception; became 2025 1st-rd pick
4. **2025-02-03** (CHI-SAC-SAS) — sent `Kevin Huerter`, received `Zach LaVine, Sidy Cissoko`
   > In a 3-team trade, the Chicago Bulls traded Zach LaVine and a 2028 2nd round draft pick to the Sacramento Kings; the Sacramento Kings traded Kevin Huerter to the Chicago Bulls; the Sacramento Kings traded De'Aaron Fox and Jordan McLaughlin to the San Antonio Spurs; the San Antonio Spurs traded Zach Collins, Tre Jones and a 2025 1st round draft pick (Noa Essengue was later selected) to the Chicago Bulls; and the San Antonio Spurs traded Sidy Cissoko, a 2025 2nd round draft pick (Maxime Raynaud was later selected), a 2026 2nd round draft pick (Emanuel Sharp was later selected), a 2027 1st round draft pick, a 2027 2nd round draft pick, a 2028 2nd round draft pick and a 2031 1st round draft pick to the Sacramento Kings. Chicago also received a trade exception conditional 2025 1st-rd pick is CHI own Sacramento also received a trade exception conditional 2025 1st-rd pick was CHO own, did not convey; became 2026 and 2027 CHO 2nd-rd picks 2027 1st-rd pick is SAS own 2031 1st-rd pick is MIN own 2025 2nd-rd pick is CHI own conditional 2028 2nd-rd pick is DEN own 2028 2nd-rd pick is CHI own conditional 2025 1st-rd pick is CHO own, did not convey; became 2026 and 2027 2nd-rd picks

## 22. [score 19] CHI — 2017-06-22 → 2026-02-04 (4 links)

**Start:** Jimmy Butler / Justin Patton
**Target:** Ousmane Dieng / Collin Sexton

1. **2017-06-22** (CHI-MIN) — sent `Jimmy Butler, Justin Patton`, received `Kris Dunn, Zach LaVine, Lauri Markkanen`
   > The Chicago Bulls traded Jimmy Butler and Justin Patton to the Minnesota Timberwolves for Kris Dunn, Zach LaVine and Lauri Markkanen.
2. **2025-02-03** (CHI-SAC-SAS) — sent `Zach LaVine`, received `Kevin Huerter, Zach Collins, Tre Jones`
   > In a 3-team trade, the Chicago Bulls traded Zach LaVine and a 2028 2nd round draft pick to the Sacramento Kings; the Sacramento Kings traded Kevin Huerter to the Chicago Bulls; the Sacramento Kings traded De'Aaron Fox and Jordan McLaughlin to the San Antonio Spurs; the San Antonio Spurs traded Zach Collins, Tre Jones and a 2025 1st round draft pick (Noa Essengue was later selected) to the Chicago Bulls; and the San Antonio Spurs traded Sidy Cissoko, a 2025 2nd round draft pick (Maxime Raynaud was later selected), a 2026 2nd round draft pick (Emanuel Sharp was later selected), a 2027 1st round draft pick, a 2027 2nd round draft pick, a 2028 2nd round draft pick and a 2031 1st round draft pick to the Sacramento Kings. Chicago also received a trade exception conditional 2025 1st-rd pick is CHI own Sacramento also received a trade exception conditional 2025 1st-rd pick was CHO own, did not convey; became 2026 and 2027 CHO 2nd-rd picks 2027 1st-rd pick is SAS own 2031 1st-rd pick is MIN own 2025 2nd-rd pick is CHI own conditional 2028 2nd-rd pick is DEN own 2028 2nd-rd pick is CHI own conditional 2025 1st-rd pick is CHO own, did not convey; became 2026 and 2027 2nd-rd picks
3. **2026-02-03** (CHI-DET-MIN) — sent `Kevin Huerter`, received `Jaden Ivey, Mike Conley`
   > In a 3-team trade, the Chicago Bulls traded Kevin Huerter and Dario Saric to the Detroit Pistons; the Detroit Pistons traded Jaden Ivey to the Chicago Bulls; the Detroit Pistons traded cash and a 2026 1st round draft pick (Joshua Jefferson was later selected) to the Minnesota Timberwolves; the Minnesota Timberwolves traded Mike Conley to the Chicago Bulls; and the Minnesota Timberwolves traded a 2026 1st round draft pick (Karim López was later selected) to the Detroit Pistons. 2026 1st-rd pick was a protected (top-19) right to swap, became MIN 2026 1st-rd pick Minnesota also received a trade exception DET optioned to swap 2026 1st-rd pick
4. **2026-02-04** (CHI-CHO) — sent `Mike Conley`, received `Ousmane Dieng, Collin Sexton`
   > The Chicago Bulls traded Mike Conley and Coby White to the Charlotte Hornets for Ousmane Dieng, Collin Sexton, a 2031 2nd round draft pick and a 2031 2nd round draft pick. Chicago also received a trade exception Charlotte also received a trade exception 2031 2nd-rd pick is DEN own 2031 2nd-rd pick is NYK own

## 23. [score 19] WAS — 2020-12-02 → 2023-06-23 (4 links)

**Start:** John Wall
**Target:** Danilo Gallinari / Mike Muscala / Julian Phillips / Tyus Jones

1. **2020-12-02** (HOU-WAS) — sent `John Wall`, received `Russell Westbrook`
   > The Houston Rockets traded Russell Westbrook to the Washington Wizards for John Wall, a 2026 2nd round draft pick and a 2027 2nd round draft pick. 1st-rd pick was protected 2023-26, did not convey and became 2026 and 2027 WAS 2nd-rd picks. Houston also received a trade exception
2. **2021-08-06** (BRK-WAS-IND-LAL-SAS) — sent `Russell Westbrook`, received `Spencer Dinwiddie, Aaron Holiday, Isaiah Todd, Kentavious Caldwell-Pope, Montrezl Harrell, Kyle Kuzma`
   > In a 5-team trade, the Brooklyn Nets traded Spencer Dinwiddie and a 2025 2nd round draft pick (Javon Small was later selected) to the Washington Wizards; the Indiana Pacers traded Aaron Holiday and Isaiah Todd to the Washington Wizards; the Los Angeles Lakers traded Isaiah Jackson to the Indiana Pacers; the Los Angeles Lakers traded Kentavious Caldwell-Pope, Montrezl Harrell and Kyle Kuzma to the Washington Wizards; the San Antonio Spurs traded Nikola Milutinov to the Brooklyn Nets; the Washington Wizards traded a 2024 2nd round draft pick (Kyle Filipowski was later selected) and a 2025 2nd round draft pick (Noah Penda was later selected) to the Brooklyn Nets; the Washington Wizards traded Russell Westbrook, a 2023 2nd round draft pick (Tristan Vukcevic was later selected), a 2024 2nd round draft pick (Bobi Klintman was later selected) and a 2028 2nd round draft pick to the Los Angeles Lakers; and the Washington Wizards traded Chandler Hutchison and a 2022 2nd round draft pick (Christian Koloko was later selected) to the San Antonio Spurs. Indiana also received a trade exception 2023 conditional 2nd-rd pick was CHI own 2024 2nd-rd pick is least favorable 2028 2nd-rd pick is WAS own 2024 2nd-rd pick is more favorable 2025 2nd-rd pick is a swap option; Brooklyn also received a trade exception 2022 2nd-rd more favorable of CHI/LAL/DET BRK optioned to swap 2025 2nd-rd pick (GSW own)
3. **2022-02-10** (DAL-WAS) — sent `Spencer Dinwiddie`, received `Kristaps Porzingis`
   > The Dallas Mavericks traded Kristaps Porzingis and a 2022 2nd round draft pick (Yannick Nzosa was later selected) to the Washington Wizards for Davis Bertans and Spencer Dinwiddie. 2022 2nd-rd pick is DAL own
4. **2023-06-23** (BOS-MEM-WAS) — sent `Kristaps Porzingis`, received `Danilo Gallinari, Mike Muscala, Julian Phillips, Tyus Jones`
   > In a 3-team trade, the Boston Celtics traded Marcus Smart to the Memphis Grizzlies; the Boston Celtics traded Danilo Gallinari, Mike Muscala and Julian Phillips to the Washington Wizards; the Memphis Grizzlies traded Marcus Sasser and a 2024 1st round draft pick (Bub Carrington was later selected) to the Boston Celtics; the Memphis Grizzlies traded Tyus Jones to the Washington Wizards; and the Washington Wizards traded Kristaps Porzingis to the Boston Celtics. 2023 top-4 protected pick is GSW own

## 24. [score 19] WAS — 2020-12-02 → 2026-02-05 (4 links)

**Start:** John Wall
**Target:** Anthony Davis / Dante Exum / Jaden Hardy / D'Angelo Russell

1. **2020-12-02** (HOU-WAS) — sent `John Wall`, received `Russell Westbrook`
   > The Houston Rockets traded Russell Westbrook to the Washington Wizards for John Wall, a 2026 2nd round draft pick and a 2027 2nd round draft pick. 1st-rd pick was protected 2023-26, did not convey and became 2026 and 2027 WAS 2nd-rd picks. Houston also received a trade exception
2. **2021-08-06** (BRK-WAS-IND-LAL-SAS) — sent `Russell Westbrook`, received `Spencer Dinwiddie, Aaron Holiday, Isaiah Todd, Kentavious Caldwell-Pope, Montrezl Harrell, Kyle Kuzma`
   > In a 5-team trade, the Brooklyn Nets traded Spencer Dinwiddie and a 2025 2nd round draft pick (Javon Small was later selected) to the Washington Wizards; the Indiana Pacers traded Aaron Holiday and Isaiah Todd to the Washington Wizards; the Los Angeles Lakers traded Isaiah Jackson to the Indiana Pacers; the Los Angeles Lakers traded Kentavious Caldwell-Pope, Montrezl Harrell and Kyle Kuzma to the Washington Wizards; the San Antonio Spurs traded Nikola Milutinov to the Brooklyn Nets; the Washington Wizards traded a 2024 2nd round draft pick (Kyle Filipowski was later selected) and a 2025 2nd round draft pick (Noah Penda was later selected) to the Brooklyn Nets; the Washington Wizards traded Russell Westbrook, a 2023 2nd round draft pick (Tristan Vukcevic was later selected), a 2024 2nd round draft pick (Bobi Klintman was later selected) and a 2028 2nd round draft pick to the Los Angeles Lakers; and the Washington Wizards traded Chandler Hutchison and a 2022 2nd round draft pick (Christian Koloko was later selected) to the San Antonio Spurs. Indiana also received a trade exception 2023 conditional 2nd-rd pick was CHI own 2024 2nd-rd pick is least favorable 2028 2nd-rd pick is WAS own 2024 2nd-rd pick is more favorable 2025 2nd-rd pick is a swap option; Brooklyn also received a trade exception 2022 2nd-rd more favorable of CHI/LAL/DET BRK optioned to swap 2025 2nd-rd pick (GSW own)
3. **2025-02-06** (MIL-NYK-SAS-WAS) — sent `Kyle Kuzma`, received `A.J. Johnson, Khris Middleton, Mathias Lessort`
   > In a 4-team trade, the Milwaukee Bucks traded cash considerations, Hugo Besson and Delon Wright to the New York Knicks; the Milwaukee Bucks traded cash considerations to the San Antonio Spurs; the Milwaukee Bucks traded cash considerations, A.J. Johnson, Khris Middleton and a 2028 1st round draft pick to the Washington Wizards; the New York Knicks traded Jericho Sims to the Milwaukee Bucks; the New York Knicks traded Mathias Lessort to the Washington Wizards; the Washington Wizards traded Kyle Kuzma, a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (NULL was later selected) to the Milwaukee Bucks; and the Washington Wizards traded Patrick Baldwin Jr. to the San Antonio Spurs. New York also received a trade exception Milwaukee also received multiple trade exceptions 2028 1st-rd pick WAS own swap option with MIL pick (least favorable of POR, MIL picks) 2025 2nd-rd pick (second most favorable of DET, PHO, GSW picks); became DET pick 2026 2nd-rd pick (UTA own) was protected 31-55, did not convey
4. **2026-02-05** (CHO-DAL-WAS) — sent `A.J. Johnson, Khris Middleton`, received `Anthony Davis, Dante Exum, Jaden Hardy, D'Angelo Russell`
   > In a 3-team trade, the Charlotte Hornets traded Tyus Jones to the Dallas Mavericks; the Dallas Mavericks traded Anthony Davis, Dante Exum, Jaden Hardy and D'Angelo Russell to the Washington Wizards; the Washington Wizards traded Malaki Branham to the Charlotte Hornets; and the Washington Wizards traded Marvin Bagley, A.J. Johnson, Khris Middleton, a 2026 1st round draft pick (Koa Peat was later selected), a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2029 2nd round draft pick and a 2030 1st round draft pick to the Dallas Mavericks. Charlotte also received a trade exception Dallas also received multiple trade exceptions 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2026 2nd-rd pick was PHO own conditional 2027 2nd-rd pick is CHI own 2029 2nd-rd pick is HOU own conditional 2030 1st-rd pick is GSW own

## 25. [score 19] WAS — 2021-08-06 → 2025-02-06 (4 links)

**Start:** Russell Westbrook / Chandler Hutchison
**Target:** A.J. Johnson / Khris Middleton / Mathias Lessort

1. **2021-08-06** (BRK-WAS-IND-LAL-SAS) — sent `Russell Westbrook, Chandler Hutchison`, received `Spencer Dinwiddie, Aaron Holiday, Isaiah Todd, Kentavious Caldwell-Pope, Montrezl Harrell, Kyle Kuzma`
   > In a 5-team trade, the Brooklyn Nets traded Spencer Dinwiddie and a 2025 2nd round draft pick (Javon Small was later selected) to the Washington Wizards; the Indiana Pacers traded Aaron Holiday and Isaiah Todd to the Washington Wizards; the Los Angeles Lakers traded Isaiah Jackson to the Indiana Pacers; the Los Angeles Lakers traded Kentavious Caldwell-Pope, Montrezl Harrell and Kyle Kuzma to the Washington Wizards; the San Antonio Spurs traded Nikola Milutinov to the Brooklyn Nets; the Washington Wizards traded a 2024 2nd round draft pick (Kyle Filipowski was later selected) and a 2025 2nd round draft pick (Noah Penda was later selected) to the Brooklyn Nets; the Washington Wizards traded Russell Westbrook, a 2023 2nd round draft pick (Tristan Vukcevic was later selected), a 2024 2nd round draft pick (Bobi Klintman was later selected) and a 2028 2nd round draft pick to the Los Angeles Lakers; and the Washington Wizards traded Chandler Hutchison and a 2022 2nd round draft pick (Christian Koloko was later selected) to the San Antonio Spurs. Indiana also received a trade exception 2023 conditional 2nd-rd pick was CHI own 2024 2nd-rd pick is least favorable 2028 2nd-rd pick is WAS own 2024 2nd-rd pick is more favorable 2025 2nd-rd pick is a swap option; Brooklyn also received a trade exception 2022 2nd-rd more favorable of CHI/LAL/DET BRK optioned to swap 2025 2nd-rd pick (GSW own)
2. **2023-06-23** (IND-WAS-PHO) — sent `Isaiah Todd`, received `Bilal Coulibaly, Chris Paul, Landry Shamet`
   > In a 3-team trade, the Indiana Pacers traded Bilal Coulibaly to the Washington Wizards; the Phoenix Suns traded a 2028 2nd round draft pick to the Indiana Pacers; the Phoenix Suns traded Chris Paul, Landry Shamet, cash, a 2024 1st round draft pick, a 2024 2nd round draft pick (Melvin Ajinça was later selected), a 2025 2nd round draft pick (Micah Peavy was later selected), a 2026 1st round draft pick, a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2028 1st round draft pick, a 2030 1st round draft pick and a 2030 2nd round draft pick to the Washington Wizards; the Washington Wizards traded Jarace Walker and a 2029 2nd round draft pick to the Indiana Pacers; and the Washington Wizards traded Bradley Beal, Jordan Goodwin and Isaiah Todd to the Phoenix Suns. 2024 1st-rd pick was a right to swap, did not convey 2026 1st-rd pick was a right to swap, did not convey 2028 1st-rd pick is a right to swap 2030 1st-rd pick is a right to swap 2025 2nd-rd pick is PHO own 2026 2nd-rd pick was PHO own Teams also received trade exceptions
3. **2023-07-06** (GSW-WAS) — sent `Chris Paul`, received `Patrick Baldwin Jr., Jordan Poole, Ryan Rollins`
   > The Golden State Warriors traded Patrick Baldwin Jr., Jordan Poole, Ryan Rollins, a 2027 2nd round draft pick and a 2030 1st round draft pick to the Washington Wizards for Chris Paul. 2027 2nd-rd pick is GSW own 2030 1st-rd pick is GSW own
4. **2025-02-06** (MIL-NYK-SAS-WAS) — sent `Patrick Baldwin Jr.`, received `A.J. Johnson, Khris Middleton, Mathias Lessort`
   > In a 4-team trade, the Milwaukee Bucks traded cash considerations, Hugo Besson and Delon Wright to the New York Knicks; the Milwaukee Bucks traded cash considerations to the San Antonio Spurs; the Milwaukee Bucks traded cash considerations, A.J. Johnson, Khris Middleton and a 2028 1st round draft pick to the Washington Wizards; the New York Knicks traded Jericho Sims to the Milwaukee Bucks; the New York Knicks traded Mathias Lessort to the Washington Wizards; the Washington Wizards traded Kyle Kuzma, a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (NULL was later selected) to the Milwaukee Bucks; and the Washington Wizards traded Patrick Baldwin Jr. to the San Antonio Spurs. New York also received a trade exception Milwaukee also received multiple trade exceptions 2028 1st-rd pick WAS own swap option with MIL pick (least favorable of POR, MIL picks) 2025 2nd-rd pick (second most favorable of DET, PHO, GSW picks); became DET pick 2026 2nd-rd pick (UTA own) was protected 31-55, did not convey

## 26. [score 19] WAS — 2021-08-06 → 2025-07-06 (4 links)

**Start:** Russell Westbrook / Chandler Hutchison
**Target:** Cam Whitmore / CJ McCollum / Kelly Olynyk

1. **2021-08-06** (BRK-WAS-IND-LAL-SAS) — sent `Russell Westbrook, Chandler Hutchison`, received `Spencer Dinwiddie, Aaron Holiday, Isaiah Todd, Kentavious Caldwell-Pope, Montrezl Harrell, Kyle Kuzma`
   > In a 5-team trade, the Brooklyn Nets traded Spencer Dinwiddie and a 2025 2nd round draft pick (Javon Small was later selected) to the Washington Wizards; the Indiana Pacers traded Aaron Holiday and Isaiah Todd to the Washington Wizards; the Los Angeles Lakers traded Isaiah Jackson to the Indiana Pacers; the Los Angeles Lakers traded Kentavious Caldwell-Pope, Montrezl Harrell and Kyle Kuzma to the Washington Wizards; the San Antonio Spurs traded Nikola Milutinov to the Brooklyn Nets; the Washington Wizards traded a 2024 2nd round draft pick (Kyle Filipowski was later selected) and a 2025 2nd round draft pick (Noah Penda was later selected) to the Brooklyn Nets; the Washington Wizards traded Russell Westbrook, a 2023 2nd round draft pick (Tristan Vukcevic was later selected), a 2024 2nd round draft pick (Bobi Klintman was later selected) and a 2028 2nd round draft pick to the Los Angeles Lakers; and the Washington Wizards traded Chandler Hutchison and a 2022 2nd round draft pick (Christian Koloko was later selected) to the San Antonio Spurs. Indiana also received a trade exception 2023 conditional 2nd-rd pick was CHI own 2024 2nd-rd pick is least favorable 2028 2nd-rd pick is WAS own 2024 2nd-rd pick is more favorable 2025 2nd-rd pick is a swap option; Brooklyn also received a trade exception 2022 2nd-rd more favorable of CHI/LAL/DET BRK optioned to swap 2025 2nd-rd pick (GSW own)
2. **2023-06-23** (IND-WAS-PHO) — sent `Isaiah Todd`, received `Bilal Coulibaly, Chris Paul, Landry Shamet`
   > In a 3-team trade, the Indiana Pacers traded Bilal Coulibaly to the Washington Wizards; the Phoenix Suns traded a 2028 2nd round draft pick to the Indiana Pacers; the Phoenix Suns traded Chris Paul, Landry Shamet, cash, a 2024 1st round draft pick, a 2024 2nd round draft pick (Melvin Ajinça was later selected), a 2025 2nd round draft pick (Micah Peavy was later selected), a 2026 1st round draft pick, a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2028 1st round draft pick, a 2030 1st round draft pick and a 2030 2nd round draft pick to the Washington Wizards; the Washington Wizards traded Jarace Walker and a 2029 2nd round draft pick to the Indiana Pacers; and the Washington Wizards traded Bradley Beal, Jordan Goodwin and Isaiah Todd to the Phoenix Suns. 2024 1st-rd pick was a right to swap, did not convey 2026 1st-rd pick was a right to swap, did not convey 2028 1st-rd pick is a right to swap 2030 1st-rd pick is a right to swap 2025 2nd-rd pick is PHO own 2026 2nd-rd pick was PHO own Teams also received trade exceptions
3. **2023-07-06** (GSW-WAS) — sent `Chris Paul`, received `Patrick Baldwin Jr., Jordan Poole, Ryan Rollins`
   > The Golden State Warriors traded Patrick Baldwin Jr., Jordan Poole, Ryan Rollins, a 2027 2nd round draft pick and a 2030 1st round draft pick to the Washington Wizards for Chris Paul. 2027 2nd-rd pick is GSW own 2030 1st-rd pick is GSW own
4. **2025-07-06** (HOU-WAS-NOP) — sent `Jordan Poole`, received `Cam Whitmore, CJ McCollum, Kelly Olynyk`
   > In a 3-team trade, the Houston Rockets traded Cam Whitmore to the Washington Wizards; the New Orleans Pelicans traded Mojave King to the Houston Rockets; the New Orleans Pelicans traded CJ McCollum, Kelly Olynyk and a 2027 2nd round draft pick to the Washington Wizards; the Washington Wizards traded a 2026 2nd round draft pick (Jack Kayil was later selected) and a 2029 2nd round draft pick to the Houston Rockets; and the Washington Wizards traded Saddiq Bey, Micah Peavy and Jordan Poole to the New Orleans Pelicans. New Orleans also received a trade exception Houston also received a trade exception 2026 2nd-rd pick was CHI own 2029 2nd-rd pick is SAC own conditional 2027 2nd-rd pick is CHI own

## 27. [score 19] WAS — 2022-02-10 → 2025-02-06 (4 links)

**Start:** Davis Bertans / Spencer Dinwiddie
**Target:** Marcus Smart / Colby Jones / Alex Len

1. **2022-02-10** (DAL-WAS) — sent `Davis Bertans, Spencer Dinwiddie`, received `Kristaps Porzingis`
   > The Dallas Mavericks traded Kristaps Porzingis and a 2022 2nd round draft pick (Yannick Nzosa was later selected) to the Washington Wizards for Davis Bertans and Spencer Dinwiddie. 2022 2nd-rd pick is DAL own
2. **2023-06-23** (BOS-MEM-WAS) — sent `Kristaps Porzingis`, received `Danilo Gallinari, Mike Muscala, Julian Phillips, Tyus Jones`
   > In a 3-team trade, the Boston Celtics traded Marcus Smart to the Memphis Grizzlies; the Boston Celtics traded Danilo Gallinari, Mike Muscala and Julian Phillips to the Washington Wizards; the Memphis Grizzlies traded Marcus Sasser and a 2024 1st round draft pick (Bub Carrington was later selected) to the Boston Celtics; the Memphis Grizzlies traded Tyus Jones to the Washington Wizards; and the Washington Wizards traded Kristaps Porzingis to the Boston Celtics. 2023 top-4 protected pick is GSW own
3. **2024-01-14** (DET-WAS) — sent `Danilo Gallinari, Mike Muscala`, received `Marvin Bagley, Isaiah Livers`
   > The Detroit Pistons traded Marvin Bagley, Isaiah Livers, a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (Izaiyah Nelson was later selected) to the Washington Wizards for Danilo Gallinari and Mike Muscala. Detroit also received a trade exception Washington also received a trade exception 2025 2nd-rd pick is least favorable; became DET pick 2026 2nd-rd pick was one of NYK/MIN/POR/NOP, became MIN 2026 2nd-rd pick
4. **2025-02-06** (MEM-SAC-WAS) — sent `Marvin Bagley`, received `Marcus Smart, Colby Jones, Alex Len`
   > In a 3-team trade, the Memphis Grizzlies traded Jake LaRavia to the Sacramento Kings; the Memphis Grizzlies traded Marcus Smart and a 2025 1st round draft pick (Walter Clayton Jr. was later selected) to the Washington Wizards; the Sacramento Kings traded a 2028 draft pick to the Memphis Grizzlies; the Sacramento Kings traded Colby Jones and Alex Len to the Washington Wizards; and the Washington Wizards traded Marvin Bagley, Johnny Davis and a 2025 2nd round draft pick (Javon Small was later selected) to the Memphis Grizzlies. Memphis also received multiple trade exceptions Washington also received a trade exception 2025 1st-rd pick MEM own from MEM 2025 2nd-rd pick 2028 2nd-rd pick

## 28. [score 19] WAS — 2022-02-10 → 2026-02-05 (4 links)

**Start:** Davis Bertans / Spencer Dinwiddie
**Target:** Anthony Davis / Dante Exum / Jaden Hardy / D'Angelo Russell

1. **2022-02-10** (DAL-WAS) — sent `Davis Bertans, Spencer Dinwiddie`, received `Kristaps Porzingis`
   > The Dallas Mavericks traded Kristaps Porzingis and a 2022 2nd round draft pick (Yannick Nzosa was later selected) to the Washington Wizards for Davis Bertans and Spencer Dinwiddie. 2022 2nd-rd pick is DAL own
2. **2023-06-23** (BOS-MEM-WAS) — sent `Kristaps Porzingis`, received `Danilo Gallinari, Mike Muscala, Julian Phillips, Tyus Jones`
   > In a 3-team trade, the Boston Celtics traded Marcus Smart to the Memphis Grizzlies; the Boston Celtics traded Danilo Gallinari, Mike Muscala and Julian Phillips to the Washington Wizards; the Memphis Grizzlies traded Marcus Sasser and a 2024 1st round draft pick (Bub Carrington was later selected) to the Boston Celtics; the Memphis Grizzlies traded Tyus Jones to the Washington Wizards; and the Washington Wizards traded Kristaps Porzingis to the Boston Celtics. 2023 top-4 protected pick is GSW own
3. **2024-01-14** (DET-WAS) — sent `Danilo Gallinari, Mike Muscala`, received `Marvin Bagley, Isaiah Livers`
   > The Detroit Pistons traded Marvin Bagley, Isaiah Livers, a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (Izaiyah Nelson was later selected) to the Washington Wizards for Danilo Gallinari and Mike Muscala. Detroit also received a trade exception Washington also received a trade exception 2025 2nd-rd pick is least favorable; became DET pick 2026 2nd-rd pick was one of NYK/MIN/POR/NOP, became MIN 2026 2nd-rd pick
4. **2026-02-05** (CHO-DAL-WAS) — sent `Marvin Bagley`, received `Anthony Davis, Dante Exum, Jaden Hardy, D'Angelo Russell`
   > In a 3-team trade, the Charlotte Hornets traded Tyus Jones to the Dallas Mavericks; the Dallas Mavericks traded Anthony Davis, Dante Exum, Jaden Hardy and D'Angelo Russell to the Washington Wizards; the Washington Wizards traded Malaki Branham to the Charlotte Hornets; and the Washington Wizards traded Marvin Bagley, A.J. Johnson, Khris Middleton, a 2026 1st round draft pick (Koa Peat was later selected), a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2029 2nd round draft pick and a 2030 1st round draft pick to the Dallas Mavericks. Charlotte also received a trade exception Dallas also received multiple trade exceptions 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2026 2nd-rd pick was PHO own conditional 2027 2nd-rd pick is CHI own 2029 2nd-rd pick is HOU own conditional 2030 1st-rd pick is GSW own

## 29. [score 19] WAS — 2023-06-23 → 2026-02-05 (4 links)

**Start:** Jarace Walker / Bradley Beal / Jordan Goodwin / Isaiah Todd
**Target:** Anthony Davis / Dante Exum / Jaden Hardy / D'Angelo Russell

1. **2023-06-23** (IND-WAS-PHO) — sent `Jarace Walker, Bradley Beal, Jordan Goodwin, Isaiah Todd`, received `Bilal Coulibaly, Chris Paul, Landry Shamet`
   > In a 3-team trade, the Indiana Pacers traded Bilal Coulibaly to the Washington Wizards; the Phoenix Suns traded a 2028 2nd round draft pick to the Indiana Pacers; the Phoenix Suns traded Chris Paul, Landry Shamet, cash, a 2024 1st round draft pick, a 2024 2nd round draft pick (Melvin Ajinça was later selected), a 2025 2nd round draft pick (Micah Peavy was later selected), a 2026 1st round draft pick, a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2028 1st round draft pick, a 2030 1st round draft pick and a 2030 2nd round draft pick to the Washington Wizards; the Washington Wizards traded Jarace Walker and a 2029 2nd round draft pick to the Indiana Pacers; and the Washington Wizards traded Bradley Beal, Jordan Goodwin and Isaiah Todd to the Phoenix Suns. 2024 1st-rd pick was a right to swap, did not convey 2026 1st-rd pick was a right to swap, did not convey 2028 1st-rd pick is a right to swap 2030 1st-rd pick is a right to swap 2025 2nd-rd pick is PHO own 2026 2nd-rd pick was PHO own Teams also received trade exceptions
2. **2023-07-06** (GSW-WAS) — sent `Chris Paul`, received `Patrick Baldwin Jr., Jordan Poole, Ryan Rollins`
   > The Golden State Warriors traded Patrick Baldwin Jr., Jordan Poole, Ryan Rollins, a 2027 2nd round draft pick and a 2030 1st round draft pick to the Washington Wizards for Chris Paul. 2027 2nd-rd pick is GSW own 2030 1st-rd pick is GSW own
3. **2025-02-06** (MIL-NYK-SAS-WAS) — sent `Patrick Baldwin Jr.`, received `A.J. Johnson, Khris Middleton, Mathias Lessort`
   > In a 4-team trade, the Milwaukee Bucks traded cash considerations, Hugo Besson and Delon Wright to the New York Knicks; the Milwaukee Bucks traded cash considerations to the San Antonio Spurs; the Milwaukee Bucks traded cash considerations, A.J. Johnson, Khris Middleton and a 2028 1st round draft pick to the Washington Wizards; the New York Knicks traded Jericho Sims to the Milwaukee Bucks; the New York Knicks traded Mathias Lessort to the Washington Wizards; the Washington Wizards traded Kyle Kuzma, a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (NULL was later selected) to the Milwaukee Bucks; and the Washington Wizards traded Patrick Baldwin Jr. to the San Antonio Spurs. New York also received a trade exception Milwaukee also received multiple trade exceptions 2028 1st-rd pick WAS own swap option with MIL pick (least favorable of POR, MIL picks) 2025 2nd-rd pick (second most favorable of DET, PHO, GSW picks); became DET pick 2026 2nd-rd pick (UTA own) was protected 31-55, did not convey
4. **2026-02-05** (CHO-DAL-WAS) — sent `A.J. Johnson, Khris Middleton`, received `Anthony Davis, Dante Exum, Jaden Hardy, D'Angelo Russell`
   > In a 3-team trade, the Charlotte Hornets traded Tyus Jones to the Dallas Mavericks; the Dallas Mavericks traded Anthony Davis, Dante Exum, Jaden Hardy and D'Angelo Russell to the Washington Wizards; the Washington Wizards traded Malaki Branham to the Charlotte Hornets; and the Washington Wizards traded Marvin Bagley, A.J. Johnson, Khris Middleton, a 2026 1st round draft pick (Koa Peat was later selected), a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2029 2nd round draft pick and a 2030 1st round draft pick to the Dallas Mavericks. Charlotte also received a trade exception Dallas also received multiple trade exceptions 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2026 2nd-rd pick was PHO own conditional 2027 2nd-rd pick is CHI own 2029 2nd-rd pick is HOU own conditional 2030 1st-rd pick is GSW own

## 30. [score 19] WAS — 2023-06-23 → 2026-01-09 (4 links)

**Start:** Jarace Walker / Bradley Beal / Jordan Goodwin / Isaiah Todd
**Target:** Trae Young

1. **2023-06-23** (IND-WAS-PHO) — sent `Jarace Walker, Bradley Beal, Jordan Goodwin, Isaiah Todd`, received `Bilal Coulibaly, Chris Paul, Landry Shamet`
   > In a 3-team trade, the Indiana Pacers traded Bilal Coulibaly to the Washington Wizards; the Phoenix Suns traded a 2028 2nd round draft pick to the Indiana Pacers; the Phoenix Suns traded Chris Paul, Landry Shamet, cash, a 2024 1st round draft pick, a 2024 2nd round draft pick (Melvin Ajinça was later selected), a 2025 2nd round draft pick (Micah Peavy was later selected), a 2026 1st round draft pick, a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2028 1st round draft pick, a 2030 1st round draft pick and a 2030 2nd round draft pick to the Washington Wizards; the Washington Wizards traded Jarace Walker and a 2029 2nd round draft pick to the Indiana Pacers; and the Washington Wizards traded Bradley Beal, Jordan Goodwin and Isaiah Todd to the Phoenix Suns. 2024 1st-rd pick was a right to swap, did not convey 2026 1st-rd pick was a right to swap, did not convey 2028 1st-rd pick is a right to swap 2030 1st-rd pick is a right to swap 2025 2nd-rd pick is PHO own 2026 2nd-rd pick was PHO own Teams also received trade exceptions
2. **2023-07-06** (GSW-WAS) — sent `Chris Paul`, received `Patrick Baldwin Jr., Jordan Poole, Ryan Rollins`
   > The Golden State Warriors traded Patrick Baldwin Jr., Jordan Poole, Ryan Rollins, a 2027 2nd round draft pick and a 2030 1st round draft pick to the Washington Wizards for Chris Paul. 2027 2nd-rd pick is GSW own 2030 1st-rd pick is GSW own
3. **2025-07-06** (HOU-WAS-NOP) — sent `Jordan Poole`, received `Cam Whitmore, CJ McCollum, Kelly Olynyk`
   > In a 3-team trade, the Houston Rockets traded Cam Whitmore to the Washington Wizards; the New Orleans Pelicans traded Mojave King to the Houston Rockets; the New Orleans Pelicans traded CJ McCollum, Kelly Olynyk and a 2027 2nd round draft pick to the Washington Wizards; the Washington Wizards traded a 2026 2nd round draft pick (Jack Kayil was later selected) and a 2029 2nd round draft pick to the Houston Rockets; and the Washington Wizards traded Saddiq Bey, Micah Peavy and Jordan Poole to the New Orleans Pelicans. New Orleans also received a trade exception Houston also received a trade exception 2026 2nd-rd pick was CHI own 2029 2nd-rd pick is SAC own conditional 2027 2nd-rd pick is CHI own
4. **2026-01-09** (ATL-WAS) — sent `CJ McCollum`, received `Trae Young`
   > The Atlanta Hawks traded Trae Young to the Washington Wizards for Corey Kispert and CJ McCollum. Atlanta also received a trade exception

## 31. [score 19] WAS — 2023-07-06 → 2026-02-05 (4 links)

**Start:** Chris Paul
**Target:** Anthony Davis / Dante Exum / Jaden Hardy / D'Angelo Russell

1. **2023-07-06** (GSW-WAS) — sent `Chris Paul`, received `Patrick Baldwin Jr., Jordan Poole, Ryan Rollins`
   > The Golden State Warriors traded Patrick Baldwin Jr., Jordan Poole, Ryan Rollins, a 2027 2nd round draft pick and a 2030 1st round draft pick to the Washington Wizards for Chris Paul. 2027 2nd-rd pick is GSW own 2030 1st-rd pick is GSW own
2. **2025-07-06** (HOU-WAS-NOP) — sent `Jordan Poole`, received `Cam Whitmore, CJ McCollum, Kelly Olynyk`
   > In a 3-team trade, the Houston Rockets traded Cam Whitmore to the Washington Wizards; the New Orleans Pelicans traded Mojave King to the Houston Rockets; the New Orleans Pelicans traded CJ McCollum, Kelly Olynyk and a 2027 2nd round draft pick to the Washington Wizards; the Washington Wizards traded a 2026 2nd round draft pick (Jack Kayil was later selected) and a 2029 2nd round draft pick to the Houston Rockets; and the Washington Wizards traded Saddiq Bey, Micah Peavy and Jordan Poole to the New Orleans Pelicans. New Orleans also received a trade exception Houston also received a trade exception 2026 2nd-rd pick was CHI own 2029 2nd-rd pick is SAC own conditional 2027 2nd-rd pick is CHI own
3. **2025-07-09** (SAS-WAS) — sent `Kelly Olynyk`, received `Malaki Branham, Blake Wesley`
   > The San Antonio Spurs traded Malaki Branham, Blake Wesley and a 2026 2nd round draft pick (Malique Lewis was later selected) to the Washington Wizards for Kelly Olynyk. Washington also received a trade exception 2026 2nd-rd pick was least favorable of DAL, PHI, and OKC, became OKC 2026 2nd-rd pick
4. **2026-02-05** (CHO-DAL-WAS) — sent `Malaki Branham`, received `Anthony Davis, Dante Exum, Jaden Hardy, D'Angelo Russell`
   > In a 3-team trade, the Charlotte Hornets traded Tyus Jones to the Dallas Mavericks; the Dallas Mavericks traded Anthony Davis, Dante Exum, Jaden Hardy and D'Angelo Russell to the Washington Wizards; the Washington Wizards traded Malaki Branham to the Charlotte Hornets; and the Washington Wizards traded Marvin Bagley, A.J. Johnson, Khris Middleton, a 2026 1st round draft pick (Koa Peat was later selected), a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2029 2nd round draft pick and a 2030 1st round draft pick to the Dallas Mavericks. Charlotte also received a trade exception Dallas also received multiple trade exceptions 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2026 2nd-rd pick was PHO own conditional 2027 2nd-rd pick is CHI own 2029 2nd-rd pick is HOU own conditional 2030 1st-rd pick is GSW own

## 32. [score 19] CLE — 2017-08-30 → 2022-09-03 (4 links)

**Start:** Kyrie Irving
**Target:** Donovan Mitchell

1. **2017-08-30** (BOS-CLE) — sent `Kyrie Irving`, received `Jae Crowder, Isaiah Thomas, Ante Žižić`
   > The Boston Celtics traded Jae Crowder, Isaiah Thomas, Ante Žižić, a 2018 1st round draft pick (Collin Sexton was later selected) and a 2020 2nd round draft pick (Skylar Mays was later selected) to the Cleveland Cavaliers for Kyrie Irving. (2020 2nd-rd pick from BOS to CLE is MIA's pick, and was added as compensation for Isaiah Thomas's injury)
2. **2018-02-08** (CLE-LAL) — sent `Isaiah Thomas`, received `Jordan Clarkson, Larry Nance Jr.`
   > The Cleveland Cavaliers traded Channing Frye, Isaiah Thomas and a 2018 1st round draft pick (Moritz Wagner was later selected) to the Los Angeles Lakers for Jordan Clarkson and Larry Nance Jr..
3. **2021-08-28** (CHI-CLE-POR) — sent `Larry Nance Jr.`, received `Lauri Markkanen`
   > In a 3-team trade, the Chicago Bulls traded Lauri Markkanen to the Cleveland Cavaliers; the Cleveland Cavaliers traded a 2023 2nd round draft pick to the Chicago Bulls; the Cleveland Cavaliers traded Larry Nance Jr. to the Portland Trail Blazers; and the Portland Trail Blazers traded Derrick Jones Jr. and a 2026 1st round draft pick (Dailyn Swain was later selected) to the Chicago Bulls. 2022-28 lottery-protected 1st-rd pick was POR own, conveyed in 2026 2023 conditional 2nd-rd pick was eventually forfeited and never used
4. **2022-09-03** (CLE-UTA) — sent `Lauri Markkanen`, received `Donovan Mitchell`
   > The Cleveland Cavaliers traded Ochai Agbaji, Lauri Markkanen, Collin Sexton, a 2025 1st round draft pick (Liam McNeeley was later selected), a 2026 1st round draft pick, a 2027 1st round draft pick, a 2028 1st round draft pick and a 2029 1st round draft pick to the Utah Jazz for Donovan Mitchell. Cleveland also received a trade exception 2025 1st-rd pick is CLE own 2026 1st-rd pick was a right to swap, did not convey 2027 1st-rd pick is CLE own 2028 1st-rd pick is a right to swap 2029 1st-rd pick is CLE own

## 33. [score 19] CLE — 2017-08-30 → 2020-02-06 (4 links)

**Start:** Kyrie Irving
**Target:** Andre Drummond

1. **2017-08-30** (BOS-CLE) — sent `Kyrie Irving`, received `Jae Crowder, Isaiah Thomas, Ante Žižić`
   > The Boston Celtics traded Jae Crowder, Isaiah Thomas, Ante Žižić, a 2018 1st round draft pick (Collin Sexton was later selected) and a 2020 2nd round draft pick (Skylar Mays was later selected) to the Cleveland Cavaliers for Kyrie Irving. (2020 2nd-rd pick from BOS to CLE is MIA's pick, and was added as compensation for Isaiah Thomas's injury)
2. **2018-02-08** (CLE-SAC-UTA) — sent `Jae Crowder`, received `Artūras Gudaitis, George Hill, Rodney Hood`
   > In a 3-team trade, the Cleveland Cavaliers traded Dimitrios Agravanis, Iman Shumpert, $2.1M cash and a 2020 2nd round draft pick (Skylar Mays was later selected) to the Sacramento Kings; the Cleveland Cavaliers traded Jae Crowder, Derrick Rose and a 2024 2nd round draft pick to the Utah Jazz; the Sacramento Kings traded Artūras Gudaitis and George Hill to the Cleveland Cavaliers; the Utah Jazz traded Rodney Hood to the Cleveland Cavaliers; and the Utah Jazz traded Joe Johnson and $1.1M cash to the Sacramento Kings. (UTA received right to exchange 2024 second-round pick with CLE, did not convey.) (SAC receives MIA 2020 second-round pick from CLE.)
3. **2018-12-07** (CLE-MIL-WAS) — sent `George Hill`, received `Matthew Dellavedova, John Henson`
   > In a 3-team trade, the Cleveland Cavaliers traded George Hill and a 2021 2nd round draft pick (Greg Brown III was later selected) to the Milwaukee Bucks; the Cleveland Cavaliers traded Sam Dekker to the Washington Wizards; the Milwaukee Bucks traded Matthew Dellavedova, John Henson, a 2021 2nd round draft pick (Sandro Mamukelashvili was later selected) and a 2022 1st round draft pick (MarJon Beauchamp was later selected) to the Cleveland Cavaliers; the Washington Wizards traded a 2022 2nd round draft pick (Bryce McGowens was later selected) to the Cleveland Cavaliers; and the Washington Wizards traded Jason Smith and cash to the Milwaukee Bucks. 2021 2nd-rd pick is WAS own, protections were removed from previously traded WAS 2020 2nd-rd pick Top-14 protected in 2021, conveyed in 2022 2021 2nd-rd pick is MIL own 2022 2nd-rd pick is WAS own
4. **2020-02-06** (CLE-DET) — sent `John Henson`, received `Andre Drummond`
   > The Cleveland Cavaliers traded John Henson, Brandon Knight and a 2023 2nd round draft pick (Isaiah Wong was later selected) to the Detroit Pistons for Andre Drummond. least favorable 2023 2nd-rd pick ended up as CLE own

## 34. [score 19] CLE — 2018-02-08 → 2021-08-02 (4 links)

**Start:** Channing Frye / Isaiah Thomas
**Target:** Ricky Rubio

1. **2018-02-08** (CLE-LAL) — sent `Channing Frye, Isaiah Thomas`, received `Jordan Clarkson, Larry Nance Jr.`
   > The Cleveland Cavaliers traded Channing Frye, Isaiah Thomas and a 2018 1st round draft pick (Moritz Wagner was later selected) to the Los Angeles Lakers for Jordan Clarkson and Larry Nance Jr..
2. **2019-12-23** (CLE-UTA) — sent `Jordan Clarkson`, received `Dante Exum`
   > The Cleveland Cavaliers traded Jordan Clarkson to the Utah Jazz for Dante Exum, a 2022 2nd round draft pick (Khalifa Diop was later selected) and a 2023 2nd round draft pick (Emoni Bates was later selected). 2022 2nd-rd pick was SAS own 2023 2nd-rd pick was GSW own
3. **2021-01-16** (BRK-CLE-HOU-IND) — sent `Dante Exum`, received `Jarrett Allen, Taurean Prince`
   > In a 4-team trade, the Brooklyn Nets traded Jarrett Allen and Taurean Prince to the Cleveland Cavaliers; the Brooklyn Nets traded Rodions Kurucs, a 2021 1st round draft pick, a 2022 1st round draft pick (Tari Eason was later selected), a 2023 1st round draft pick, a 2024 1st round draft pick (Reed Sheppard was later selected), a 2025 1st round draft pick, a 2026 1st round draft pick (Mikel Brown Jr. was later selected) and a 2027 1st round draft pick to the Houston Rockets; the Brooklyn Nets traded Caris Levert to the Indiana Pacers; the Cleveland Cavaliers traded Dante Exum and a 2022 1st round draft pick (MarJon Beauchamp was later selected) to the Houston Rockets; the Cleveland Cavaliers traded cash and a 2024 2nd round draft pick (Tristen Newton was later selected) to the Indiana Pacers; the Houston Rockets traded James Harden to the Brooklyn Nets; the Houston Rockets traded a 2023 2nd round draft pick (Jalen Pickett was later selected) to the Indiana Pacers; and the Indiana Pacers traded Victor Oladipo to the Houston Rockets. 2024 2nd-rd pick is CLE own 2026 1st-rd draft pick was BRK own 2021 1st-rd pick was a right to swap, did not convey 2023 1st-rd pick was a right to swap, did not convey 2025 1st-rd pick is a right to swap; later renegotiated in another trade 2027 1st-rd pick is a right to swap 2022 1st-rd draft pick was MIL own 2023 2nd-rd pick was HOU own
4. **2021-08-02** (CLE-MIN) — sent `Taurean Prince`, received `Ricky Rubio`
   > The Cleveland Cavaliers traded Taurean Prince and a 2022 2nd round draft pick (Bryce McGowens was later selected) to the Minnesota Timberwolves for Ricky Rubio. 2022 2nd-rd pick is WAS own

## 35. [score 19] CLE — 2018-02-08 → 2020-02-06 (4 links)

**Start:** Dimitrios Agravanis / Iman Shumpert / Jae Crowder / Derrick Rose
**Target:** Andre Drummond

1. **2018-02-08** (CLE-SAC-UTA) — sent `Dimitrios Agravanis, Iman Shumpert, Jae Crowder, Derrick Rose`, received `Artūras Gudaitis, George Hill, Rodney Hood`
   > In a 3-team trade, the Cleveland Cavaliers traded Dimitrios Agravanis, Iman Shumpert, $2.1M cash and a 2020 2nd round draft pick (Skylar Mays was later selected) to the Sacramento Kings; the Cleveland Cavaliers traded Jae Crowder, Derrick Rose and a 2024 2nd round draft pick to the Utah Jazz; the Sacramento Kings traded Artūras Gudaitis and George Hill to the Cleveland Cavaliers; the Utah Jazz traded Rodney Hood to the Cleveland Cavaliers; and the Utah Jazz traded Joe Johnson and $1.1M cash to the Sacramento Kings. (UTA received right to exchange 2024 second-round pick with CLE, did not convey.) (SAC receives MIA 2020 second-round pick from CLE.)
2. **2019-02-04** (CLE-POR) — sent `Rodney Hood`, received `Wade Baldwin, Nik Stauskas`
   > The Cleveland Cavaliers traded Rodney Hood to the Portland Trail Blazers for Wade Baldwin, Nik Stauskas, a 2021 2nd round draft pick (Brandon Boston Jr. was later selected) and a 2023 2nd round draft pick (Julian Phillips was later selected).
3. **2019-02-07** (CLE-HOU-SAC) — sent `Wade Baldwin, Nik Stauskas`, received `Marquese Chriss, Brandon Knight`
   > In a 3-team trade, the Cleveland Cavaliers traded Wade Baldwin, Nik Stauskas and a 2021 2nd round draft pick (Sandro Mamukelashvili was later selected) to the Houston Rockets; the Cleveland Cavaliers traded Alec Burks to the Sacramento Kings; the Houston Rockets traded Marquese Chriss, Brandon Knight, a 2019 1st round draft pick (Dylan Windler was later selected) and a 2022 2nd round draft pick (Andrew Nembhard was later selected) to the Cleveland Cavaliers; the Houston Rockets traded a 2020 2nd round draft pick (Kenyon Martin Jr. was later selected) to the Sacramento Kings; and the Sacramento Kings traded Iman Shumpert to the Houston Rockets. 2020 2nd-rd pick is less favorable of HOU or GSW 2021 2nd-rd pick is MIL own 2019 1st-rd pick is HOU own and is top-14 protected 2022 2nd-rd pick is HOU own
4. **2020-02-06** (CLE-DET) — sent `Brandon Knight`, received `Andre Drummond`
   > The Cleveland Cavaliers traded John Henson, Brandon Knight and a 2023 2nd round draft pick (Isaiah Wong was later selected) to the Detroit Pistons for Andre Drummond. least favorable 2023 2nd-rd pick ended up as CLE own

## 36. [score 19] PHI — 2013-07-12 → 2019-02-06 (4 links)

**Start:** Jrue Holiday / Pierre Jackson
**Target:** Tobias Harris / Boban Marjanović / Mike Scott

1. **2013-07-12** (NOP-PHI) — sent `Jrue Holiday, Pierre Jackson`, received `Nerlens Noel`
   > The New Orleans Pelicans traded Nerlens Noel and a 2014 1st round draft pick (Elfrid Payton was later selected) to the Philadelphia 76ers for Jrue Holiday and Pierre Jackson.
2. **2017-02-23** (DAL-PHI) — sent `Nerlens Noel`, received `Justin Anderson, Andrew Bogut`
   > The Dallas Mavericks traded Justin Anderson, Andrew Bogut, a 2017 2nd round draft pick (Jawun Evans was later selected) and a 2020 2nd round draft pick (Nico Mannion was later selected) to the Philadelphia 76ers for Nerlens Noel. (Pick is top-18 protected in 2017 and will turn into 2 2nd-rd picks if it does not convey)
3. **2018-07-25** (ATL-OKC-PHI) — sent `Justin Anderson`, received `Mike Muscala`
   > In a 3-team trade, the Atlanta Hawks traded Dennis Schröder to the Oklahoma City Thunder; the Atlanta Hawks traded Mike Muscala to the Philadelphia 76ers; the Oklahoma City Thunder traded Carmelo Anthony, a 2022 1st round draft pick, a 2024 2nd round draft pick (Ulrich Chomche was later selected) and a 2025 2nd round draft pick (Jahmai Mashack was later selected) to the Atlanta Hawks; the Philadelphia 76ers traded Justin Anderson to the Atlanta Hawks; and the Philadelphia 76ers traded Timothé Luwawu-Cabarrot to the Oklahoma City Thunder. 2022 1st-rd pick is top-14 protected, did not convey 2024 2nd-rd pick is OKC own 2025 2nd rd pick is OKC own
4. **2019-02-06** (LAC-PHI) — sent `Mike Muscala`, received `Tobias Harris, Boban Marjanović, Mike Scott`
   > The Los Angeles Clippers traded Tobias Harris, Boban Marjanović and Mike Scott to the Philadelphia 76ers for Wilson Chandler, Mike Muscala, Landry Shamet, a 2020 1st round draft pick (Saddiq Bey was later selected), a 2021 1st round draft pick (Tre Mann was later selected), a 2021 2nd round draft pick (Jeremiah Robinson-Earl was later selected) and a 2023 2nd round draft pick (James Nnaji was later selected). 2021 1st-rd pick was MIA own 2021 2nd-rd pick was DET own 2023 2nd-rd pick was DET own

## 37. [score 19] PHI — 2020-11-18 → 2024-02-08 (4 links)

**Start:** Tyler Bey / Josh Richardson
**Target:** Buddy Hield

1. **2020-11-18** (DAL-PHI) — sent `Tyler Bey, Josh Richardson`, received `Seth Curry`
   > The Dallas Mavericks traded Seth Curry to the Philadelphia 76ers for Tyler Bey and Josh Richardson. Philadelphia also received a trade exception from Dallas.
2. **2022-02-10** (BRK-PHI) — sent `Seth Curry`, received `James Harden, Paul Millsap`
   > The Brooklyn Nets traded James Harden and Paul Millsap to the Philadelphia 76ers for Seth Curry, Andre Drummond, Ben Simmons, a 2023 1st round draft pick (Brice Sensabaugh was later selected) and a 2027 1st round draft pick. Philadelphia also received a trade exception 2023 1st-rd pick was originally a 2022 pick that was deferred 2027 1st-rd pick is top-8 protected and could turn into cash in 2029
3. **2023-11-01** (LAC-OKC-PHI) — sent `James Harden`, received `Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris`
   > In a 3-team trade, the Los Angeles Clippers traded a 2027 1st round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris, cash, a 2024 2nd round draft pick (Juan Nunez was later selected), a 2028 1st round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick to the Philadelphia 76ers; the Oklahoma City Thunder traded a 2026 1st round draft pick (Koa Peat was later selected) to the Philadelphia 76ers; and the Philadelphia 76ers traded James Harden, Filip Petrusev and P.J. Tucker to the Los Angeles Clippers. 2027 1st-rd pick is a right to swap 2024 2nd-rd pick is more favorable 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2028 1st-rd pick is LAC own 2029 1st-rd pick is a swap 2029 2nd-rd pick is LAC own Philadelphia also received trade exceptions
4. **2024-02-08** (IND-PHI-SAS) — sent `Marcus Morris`, received `Buddy Hield`
   > In a 3-team trade, the Indiana Pacers traded Buddy Hield to the Philadelphia 76ers; the Philadelphia 76ers traded Furkan Korkmaz, cash, a 2024 2nd round draft pick (Juan Nunez was later selected) and a 2029 2nd round draft pick to the Indiana Pacers; the Philadelphia 76ers traded Marcus Morris, cash and a 2029 2nd round draft pick to the San Antonio Spurs; and the San Antonio Spurs traded Doug McDermott to the Indiana Pacers. 2029 2nd-rd pick is LAC own 2024 2nd-rd pick is more favorable 2029 2nd-rd pick is POR own Indiana also received a trade exception

## 38. [score 19] SAS — 2011-06-23 → 2022-02-10 (4 links)

**Start:** George Hill
**Target:** Goran Dragic

1. **2011-06-23** (IND-SAS) — sent `George Hill`, received `Dāvis Bertāns, Kawhi Leonard, Erazem Lorbek`
   > The Indiana Pacers traded Dāvis Bertāns, Kawhi Leonard and Erazem Lorbek to the San Antonio Spurs for George Hill.
2. **2018-07-18** (SAS-TOR) — sent `Kawhi Leonard`, received `DeMar DeRozan, Jakob Pöltl`
   > The San Antonio Spurs traded Danny Green, Kawhi Leonard and cash to the Toronto Raptors for DeMar DeRozan, Jakob Pöltl and a 2019 1st round draft pick (Keldon Johnson was later selected). (2019 1st-rd pick is top-20 protected.) $5MM
3. **2021-08-11** (CHI-SAS) — sent `DeMar DeRozan`, received `Al-Farouq Aminu, Thaddeus Young`
   > The Chicago Bulls traded Al-Farouq Aminu, Thaddeus Young, a 2022 2nd round draft pick (Kennedy Chandler was later selected), a 2025 1st round draft pick (Noa Essengue was later selected) and a 2025 2nd round draft pick (Maxime Raynaud was later selected) to the San Antonio Spurs for DeMar DeRozan. 2022 2nd-rd pick is an opportunity to swap 2025 conditional 1st-rd pick is CHI own 2025 2nd-rd pick is CHI own
4. **2022-02-10** (SAS-TOR) — sent `Thaddeus Young`, received `Goran Dragic`
   > The San Antonio Spurs traded Drew Eubanks, Thaddeus Young and a 2022 2nd round draft pick (Christian Koloko was later selected) to the Toronto Raptors for Goran Dragic and a 2022 1st round draft pick (Malaki Branham was later selected). Toronto also received a trade exception 2022 2nd-rd pick is DET own 2022 1st-rd pick is top-14 protected

## 39. [score 19] BRK — 2015-02-19 → 2022-02-10 (4 links)

**Start:** Kevin Garnett
**Target:** Seth Curry / Andre Drummond / Ben Simmons

1. **2015-02-19** (BRK-MIN) — sent `Kevin Garnett`, received `Thaddeus Young`
   > The Brooklyn Nets traded Kevin Garnett to the Minnesota Timberwolves for Thaddeus Young.
2. **2016-07-07** (BRK-IND) — sent `Thaddeus Young`, received `Caris LeVert`
   > The Brooklyn Nets traded Thaddeus Young to the Indiana Pacers for Caris LeVert and a 2021 2nd round draft pick (Kessler Edwards was later selected). 2nd-rd pick protected 45-60 from 2017-22, conveyed 2021
3. **2021-01-16** (BRK-CLE-HOU-IND) — sent `Caris Levert`, received `James Harden`
   > In a 4-team trade, the Brooklyn Nets traded Jarrett Allen and Taurean Prince to the Cleveland Cavaliers; the Brooklyn Nets traded Rodions Kurucs, a 2021 1st round draft pick, a 2022 1st round draft pick (Tari Eason was later selected), a 2023 1st round draft pick, a 2024 1st round draft pick (Reed Sheppard was later selected), a 2025 1st round draft pick, a 2026 1st round draft pick (Mikel Brown Jr. was later selected) and a 2027 1st round draft pick to the Houston Rockets; the Brooklyn Nets traded Caris Levert to the Indiana Pacers; the Cleveland Cavaliers traded Dante Exum and a 2022 1st round draft pick (MarJon Beauchamp was later selected) to the Houston Rockets; the Cleveland Cavaliers traded cash and a 2024 2nd round draft pick (Tristen Newton was later selected) to the Indiana Pacers; the Houston Rockets traded James Harden to the Brooklyn Nets; the Houston Rockets traded a 2023 2nd round draft pick (Jalen Pickett was later selected) to the Indiana Pacers; and the Indiana Pacers traded Victor Oladipo to the Houston Rockets. 2024 2nd-rd pick is CLE own 2026 1st-rd draft pick was BRK own 2021 1st-rd pick was a right to swap, did not convey 2023 1st-rd pick was a right to swap, did not convey 2025 1st-rd pick is a right to swap; later renegotiated in another trade 2027 1st-rd pick is a right to swap 2022 1st-rd draft pick was MIL own 2023 2nd-rd pick was HOU own
4. **2022-02-10** (BRK-PHI) — sent `James Harden`, received `Seth Curry, Andre Drummond, Ben Simmons`
   > The Brooklyn Nets traded James Harden and Paul Millsap to the Philadelphia 76ers for Seth Curry, Andre Drummond, Ben Simmons, a 2023 1st round draft pick (Brice Sensabaugh was later selected) and a 2027 1st round draft pick. Philadelphia also received a trade exception 2023 1st-rd pick was originally a 2022 pick that was deferred 2027 1st-rd pick is top-8 protected and could turn into cash in 2029

## 40. [score 19] BRK — 2017-06-22 → 2024-07-06 (4 links)

**Start:** Kyle Kuzma / Brook Lopez
**Target:** Bojan Bogdanovic / Mamadi Diakite / Shake Milton

1. **2017-06-22** (BRK-LAL) — sent `Kyle Kuzma, Brook Lopez`, received `Timofey Mozgov, D'Angelo Russell`
   > The Brooklyn Nets traded Kyle Kuzma and Brook Lopez to the Los Angeles Lakers for Timofey Mozgov and D'Angelo Russell.
2. **2019-07-07** (BRK-GSW) — sent `D'Angelo Russell`, received `Kevin Durant`
   > The Brooklyn Nets traded Treveon Graham, Shabazz Napier and D'Angelo Russell to the Golden State Warriors for Kevin Durant and a 2025 2nd round draft pick (Javon Small was later selected). Conditional 2020 1st-rd pick did not convey; else 2025 2nd-rd pick
3. **2023-02-09** (BRK-IND-PHO-MIL) — sent `Kevin Durant`, received `Juan Vaulet, Mikal Bridges, Cameron Johnson`
   > In a 4-team trade, the Brooklyn Nets traded cash to the Indiana Pacers; the Brooklyn Nets traded Kevin Durant and T.J. Warren to the Phoenix Suns; the Indiana Pacers traded Juan Vaulet to the Brooklyn Nets; the Milwaukee Bucks traded a 2028 2nd round draft pick and a 2029 2nd round draft pick to the Brooklyn Nets; the Milwaukee Bucks traded George Hill, Serge Ibaka, Jordan Nwora, a 2023 2nd round draft pick (Isaiah Wong was later selected), a 2024 2nd round draft pick (Quinten Post was later selected) and a 2025 2nd round draft pick (Taelon Peter was later selected) to the Indiana Pacers; the Phoenix Suns traded Mikal Bridges, Cameron Johnson, a 2023 1st round draft pick (Noah Clowney was later selected), a 2025 1st round draft pick (Khaman Maluach was later selected), a 2027 1st round draft pick, a 2028 1st round draft pick and a 2029 1st round draft pick to the Brooklyn Nets; and the Phoenix Suns traded Jae Crowder to the Milwaukee Bucks. 2023 2nd-rd pick was CLE own 2024 2nd-rd pick is MIL own 2025 2nd-rd pick is IND own Brooklyn also received multiple trade exceptions 2023 1st-rd pick was PHO own 2025 1st-rd pick is PHO own 2027 1st-rd pick is PHO own 2028 1st-rd pick is a right to swap 2029 1st-rd pick is PHO own 2028 2nd-rd pick is MIL own 2029 2nd-rd pick is MIL own
4. **2024-07-06** (BRK-NYK) — sent `Mikal Bridges, Juan Pablo Vaulet`, received `Bojan Bogdanovic, Mamadi Diakite, Shake Milton`
   > The Brooklyn Nets traded Keita Bates-Diop, Mikal Bridges, Juan Pablo Vaulet and a 2026 2nd round draft pick (Jaron Pierre Jr. was later selected) to the New York Knicks for Bojan Bogdanovic, Mamadi Diakite, Shake Milton, a 2025 1st round draft pick (Ben Saraf was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2025 2nd round draft pick (Adou Thiero was later selected), a 2027 1st round draft pick, a 2028 1st round draft pick, a 2029 1st round draft pick and a 2031 1st round draft pick. 2026 2nd-rd pick was least favorable of ORL/DET/MIL, became DET 2026 2nd-rd pick 2025 1st-rd pick is NYK own conditional 2025 1st-rd pick is MIL own 2025 2nd-rd pick is BRK own 2027 1st-rd pick is NYK own 2028 1st-rd pick is a swap 2029 1st-rd pick is NYK own 2031 1st-rd pick is NYK own, Brooklyn also received trade exceptions

## 41. [score 19] BRK — 2017-06-22 → 2025-07-08 (4 links)

**Start:** Kyle Kuzma / Brook Lopez
**Target:** Michael Porter Jr.

1. **2017-06-22** (BRK-LAL) — sent `Kyle Kuzma, Brook Lopez`, received `Timofey Mozgov, D'Angelo Russell`
   > The Brooklyn Nets traded Kyle Kuzma and Brook Lopez to the Los Angeles Lakers for Timofey Mozgov and D'Angelo Russell.
2. **2019-07-07** (BRK-GSW) — sent `D'Angelo Russell`, received `Kevin Durant`
   > The Brooklyn Nets traded Treveon Graham, Shabazz Napier and D'Angelo Russell to the Golden State Warriors for Kevin Durant and a 2025 2nd round draft pick (Javon Small was later selected). Conditional 2020 1st-rd pick did not convey; else 2025 2nd-rd pick
3. **2023-02-09** (BRK-IND-PHO-MIL) — sent `Kevin Durant`, received `Juan Vaulet, Mikal Bridges, Cameron Johnson`
   > In a 4-team trade, the Brooklyn Nets traded cash to the Indiana Pacers; the Brooklyn Nets traded Kevin Durant and T.J. Warren to the Phoenix Suns; the Indiana Pacers traded Juan Vaulet to the Brooklyn Nets; the Milwaukee Bucks traded a 2028 2nd round draft pick and a 2029 2nd round draft pick to the Brooklyn Nets; the Milwaukee Bucks traded George Hill, Serge Ibaka, Jordan Nwora, a 2023 2nd round draft pick (Isaiah Wong was later selected), a 2024 2nd round draft pick (Quinten Post was later selected) and a 2025 2nd round draft pick (Taelon Peter was later selected) to the Indiana Pacers; the Phoenix Suns traded Mikal Bridges, Cameron Johnson, a 2023 1st round draft pick (Noah Clowney was later selected), a 2025 1st round draft pick (Khaman Maluach was later selected), a 2027 1st round draft pick, a 2028 1st round draft pick and a 2029 1st round draft pick to the Brooklyn Nets; and the Phoenix Suns traded Jae Crowder to the Milwaukee Bucks. 2023 2nd-rd pick was CLE own 2024 2nd-rd pick is MIL own 2025 2nd-rd pick is IND own Brooklyn also received multiple trade exceptions 2023 1st-rd pick was PHO own 2025 1st-rd pick is PHO own 2027 1st-rd pick is PHO own 2028 1st-rd pick is a right to swap 2029 1st-rd pick is PHO own 2028 2nd-rd pick is MIL own 2029 2nd-rd pick is MIL own
4. **2025-07-08** (BRK-DEN) — sent `Cameron Johnson`, received `Michael Porter Jr.`
   > The Brooklyn Nets traded Cameron Johnson to the Denver Nuggets for Michael Porter Jr. and a 2032 1st round draft pick. 2032 1st-rd pick is DEN own Denver also received a trade exception

## 42. [score 19] BRK — 2019-07-07 → 2024-12-29 (4 links)

**Start:** Treveon Graham / Shabazz Napier / D'Angelo Russell
**Target:** Maxwell Lewis / D'Angelo Russell

1. **2019-07-07** (BRK-GSW) — sent `Treveon Graham, Shabazz Napier, D'Angelo Russell`, received `Kevin Durant`
   > The Brooklyn Nets traded Treveon Graham, Shabazz Napier and D'Angelo Russell to the Golden State Warriors for Kevin Durant and a 2025 2nd round draft pick (Javon Small was later selected). Conditional 2020 1st-rd pick did not convey; else 2025 2nd-rd pick
2. **2023-02-09** (BRK-IND-PHO-MIL) — sent `Kevin Durant`, received `Juan Vaulet, Mikal Bridges, Cameron Johnson`
   > In a 4-team trade, the Brooklyn Nets traded cash to the Indiana Pacers; the Brooklyn Nets traded Kevin Durant and T.J. Warren to the Phoenix Suns; the Indiana Pacers traded Juan Vaulet to the Brooklyn Nets; the Milwaukee Bucks traded a 2028 2nd round draft pick and a 2029 2nd round draft pick to the Brooklyn Nets; the Milwaukee Bucks traded George Hill, Serge Ibaka, Jordan Nwora, a 2023 2nd round draft pick (Isaiah Wong was later selected), a 2024 2nd round draft pick (Quinten Post was later selected) and a 2025 2nd round draft pick (Taelon Peter was later selected) to the Indiana Pacers; the Phoenix Suns traded Mikal Bridges, Cameron Johnson, a 2023 1st round draft pick (Noah Clowney was later selected), a 2025 1st round draft pick (Khaman Maluach was later selected), a 2027 1st round draft pick, a 2028 1st round draft pick and a 2029 1st round draft pick to the Brooklyn Nets; and the Phoenix Suns traded Jae Crowder to the Milwaukee Bucks. 2023 2nd-rd pick was CLE own 2024 2nd-rd pick is MIL own 2025 2nd-rd pick is IND own Brooklyn also received multiple trade exceptions 2023 1st-rd pick was PHO own 2025 1st-rd pick is PHO own 2027 1st-rd pick is PHO own 2028 1st-rd pick is a right to swap 2029 1st-rd pick is PHO own 2028 2nd-rd pick is MIL own 2029 2nd-rd pick is MIL own
3. **2024-07-06** (BRK-NYK) — sent `Mikal Bridges, Juan Pablo Vaulet`, received `Bojan Bogdanovic, Mamadi Diakite, Shake Milton`
   > The Brooklyn Nets traded Keita Bates-Diop, Mikal Bridges, Juan Pablo Vaulet and a 2026 2nd round draft pick (Jaron Pierre Jr. was later selected) to the New York Knicks for Bojan Bogdanovic, Mamadi Diakite, Shake Milton, a 2025 1st round draft pick (Ben Saraf was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2025 2nd round draft pick (Adou Thiero was later selected), a 2027 1st round draft pick, a 2028 1st round draft pick, a 2029 1st round draft pick and a 2031 1st round draft pick. 2026 2nd-rd pick was least favorable of ORL/DET/MIL, became DET 2026 2nd-rd pick 2025 1st-rd pick is NYK own conditional 2025 1st-rd pick is MIL own 2025 2nd-rd pick is BRK own 2027 1st-rd pick is NYK own 2028 1st-rd pick is a swap 2029 1st-rd pick is NYK own 2031 1st-rd pick is NYK own, Brooklyn also received trade exceptions
4. **2024-12-29** (BRK-LAL) — sent `Shake Milton`, received `Maxwell Lewis, D'Angelo Russell`
   > The Brooklyn Nets traded Dorian Finney-Smith and Shake Milton to the Los Angeles Lakers for Maxwell Lewis, D'Angelo Russell, a 2027 2nd round draft pick, a 2030 2nd round draft pick and a 2031 2nd round draft pick. Los Angeles also received trade exceptions Brooklyn also received a trade exception 2027 2nd-rd pick is LAL own 2030 2nd-rd pick is LAL own 2031 2nd-rd pick is LAL own

## 43. [score 19] NOP — 2013-07-12 → 2023-02-09 (4 links)

**Start:** Nerlens Noel
**Target:** Josh Richardson

1. **2013-07-12** (NOP-PHI) — sent `Nerlens Noel`, received `Jrue Holiday, Pierre Jackson`
   > The New Orleans Pelicans traded Nerlens Noel and a 2014 1st round draft pick (Elfrid Payton was later selected) to the Philadelphia 76ers for Jrue Holiday and Pierre Jackson.
2. **2020-11-23** (DEN-OKC-MIL-NOP) — sent `Jrue Holiday`, received `Eric Bledsoe, Steven Adams`
   > In a 4-team trade, the Denver Nuggets traded a 2023 1st round draft pick (Nick Smith Jr. was later selected) to the Oklahoma City Thunder; the Milwaukee Bucks traded R.J. Hampton to the Denver Nuggets; the Milwaukee Bucks traded Eric Bledsoe, a 2024 1st round draft pick (Yves Missi was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2026 1st round draft pick and a 2027 1st round draft pick to the New Orleans Pelicans; the Milwaukee Bucks traded George Hill to the Oklahoma City Thunder; the New Orleans Pelicans traded Jrue Holiday and Sam Merrill to the Milwaukee Bucks; the New Orleans Pelicans traded Zylan Cheatham, Joshia Gray, Darius Miller, Kenrich Williams, a 2023 2nd round draft pick (Hunter Tyson was later selected) and a 2024 2nd round draft pick (Tyler Kolek was later selected) to the Oklahoma City Thunder; and the Oklahoma City Thunder traded Steven Adams to the New Orleans Pelicans. New Orleans acquires right to swap 2024 1st-rd pick with Milwaukee 2025 1st-rd pick is MIL own New Orleans acquired right to swap 2026 1st-rd pick with Milwaukee, did not convey 2027 1st-rd pick is MIL own 2023 top-14 protected 1st-rd pick was DEN own 2023 2nd-rd pick was WAS own 2024 2nd-rd pick is CHO own
3. **2021-08-07** (CHO-NOP-MEM) — sent `Steven Adams, Eric Bledsoe`, received `Devonte' Graham, Brandon Boston Jr., Trey Murphy III, Jonas Valančiūnas`
   > In a 3-team trade, the Charlotte Hornets traded Devonte' Graham to the New Orleans Pelicans; the Memphis Grizzlies traded Tyler Harvey to the Charlotte Hornets; the Memphis Grizzlies traded Brandon Boston Jr., Trey Murphy III and Jonas Valančiūnas to the New Orleans Pelicans; the New Orleans Pelicans traded Wesley Iwundu, cash and a 2022 1st round draft pick (Mark Williams was later selected) to the Charlotte Hornets; and the New Orleans Pelicans traded Steven Adams, Eric Bledsoe, Jared Butler, Ziaire Williams, a 2022 2nd round draft pick (Vince Williams Jr. was later selected) and a 2025 2nd round draft pick (Ryan Kalkbrenner was later selected) to the Memphis Grizzlies. via sign and trade 2022 conditional 1st-rd pick did not convey, becomes 2022 2nd-rd pick and 2025 2nd-rd pick 2025 2nd-rd pick is NOP own 2022 conditional 1st-rd pick is NOP own
4. **2023-02-09** (NOP-SAS) — sent `Devonte' Graham`, received `Josh Richardson`
   > The New Orleans Pelicans traded Devonte' Graham, a 2024 2nd round draft pick (Adem Bona was later selected), a 2026 2nd round draft pick (Ja'Kobi Gillespie was later selected), a 2028 2nd round draft pick and a 2029 2nd round draft pick to the San Antonio Spurs for Josh Richardson. 2024 2nd-rd pick is more favorable 2026 2nd-rd pick was least favorable of NOP and POR, became POR 2026 2nd-rd pick 2028 2nd-rd pick is NOP own 2029 2nd-rd pick is NOP own

## 44. [score 19] NOP — 2019-07-06 → 2024-07-06 (4 links)

**Start:** Anthony Davis
**Target:** Dejounte Murray

1. **2019-07-06** (LAL-NOP-WAS) — sent `Anthony Davis`, received `Lonzo Ball, Josh Hart, De'Andre Hunter, Brandon Ingram`
   > In a 3-team trade, the Los Angeles Lakers traded Lonzo Ball, Josh Hart, De'Andre Hunter, Brandon Ingram, cash, a 2022 1st round draft pick (Dyson Daniels was later selected), a 2023 1st round draft pick and a 2025 1st round draft pick (Drake Powell was later selected) to the New Orleans Pelicans; the Los Angeles Lakers traded Isaac Bonga, Jemerrio Jones, Moritz Wagner and a 2022 2nd round draft pick (Kennedy Chandler was later selected) to the Washington Wizards; the New Orleans Pelicans traded Anthony Davis to the Los Angeles Lakers; and the Washington Wizards traded cash to the New Orleans Pelicans. (9-30 protected, unprotected in 2022) 2023 first-round pick was right to swap with LAL NOP exercised option to defer 2024 first-round pick to 2025. $1MM $1.1MM 2022 2nd-rd pick is LAL own
2. **2019-07-07** (ATL-NOP) — sent `De'Andre Hunter`, received `Nickeil Alexander-Walker, Jaxson Hayes, Marcos Louzada Silva`
   > The Atlanta Hawks traded Nickeil Alexander-Walker, Jaxson Hayes, Marcos Louzada Silva, a 2021 2nd round draft pick (Herbert Jones was later selected) and a 2022 2nd round draft pick (Vince Williams Jr. was later selected) to the New Orleans Pelicans for Jordan Bone, Solomon Hill, De'Andre Hunter and a 2023 2nd round draft pick (Seth Lundy was later selected). 2023 2nd-rd pick was 31-45 protected 2020 1st-rd pick did not convey, becomes two 2nd-rd picks in 2021 and 2022 2022 2nd-rd pick is CLE own
3. **2022-02-08** (NOP-POR) — sent `Nickeil Alexander-Walker, Didi Louzada`, received `CJ McCollum, Larry Nance Jr., Tony Snell`
   > The New Orleans Pelicans traded Nickeil Alexander-Walker, Josh Hart, Didi Louzada, Tomas Satoransky, a 2025 1st round draft pick (Nolan Traoré was later selected), a 2026 2nd round draft pick (Braden Smith was later selected) and a 2027 2nd round draft pick to the Portland Trail Blazers for CJ McCollum, Larry Nance Jr. and Tony Snell. New Orleans also received a trade exception Portland also received a trade exception 2022 1st-rd pick did not convey; became 2025 1st-rd pick 2026 2nd-rd pick was more favorable of POR and NOP, became NOP 2026 2nd-rd pick 2027 2nd-rd pick is NOP own
4. **2024-07-06** (ATL-NOP) — sent `Larry Nance Jr.`, received `Dejounte Murray`
   > The Atlanta Hawks traded Dejounte Murray to the New Orleans Pelicans for Dyson Daniels, E.J. Liddell, Larry Nance Jr., Cody Zeller, a 2025 1st round draft pick (Drake Powell was later selected) and a 2027 1st round draft pick. 2025 1st-rd pick is LAL own 2027 1st-rd pick least favorable, Atlanta also received a trade exception

## 45. [score 19] CHO — 2024-02-08 → 2026-02-04 (4 links)

**Start:** Gordon Hayward
**Target:** Mike Conley / Coby White

1. **2024-02-08** (CHO-OKC) — sent `Gordon Hayward`, received `Davis Bertans, Tre Mann, Vasilije Micić`
   > The Charlotte Hornets traded Gordon Hayward to the Oklahoma City Thunder for Davis Bertans, Tre Mann, Vasilije Micić, cash, a 2024 2nd round draft pick (KJ Simpson was later selected) and a 2025 2nd round draft pick (Johni Broome was later selected). 2024 2nd-rd pick is HOU own 2025 2nd-rd pick is PHI own Charlotte also received a trade exception
2. **2025-02-06** (CHO-PHO) — sent `Vasilije Micić`, received `Jusuf Nurkic`
   > The Charlotte Hornets traded Cody Martin, Vasilije Micić and a 2026 2nd round draft pick (Vsevolod Ishchenko was later selected) to the Phoenix Suns for Jusuf Nurkic and a 2026 1st round draft pick (Christian Anderson Jr. was later selected). Phoenix also received a trade exception 2026 1st-rd pick was least favorable of PHO, WAS, ORL, MEM, became ORL 2026 1st-rd pick 2026 2nd-rd pick was least favorable of DEN and GSW, became DEN 2026 2nd-rd pick
3. **2025-06-29** (CHO-UTA) — sent `Jusuf Nurkic`, received `Collin Sexton`
   > The Charlotte Hornets traded Jusuf Nurkic to the Utah Jazz for Collin Sexton. Utah also received a trade exception
4. **2026-02-04** (CHI-CHO) — sent `Collin Sexton`, received `Mike Conley, Coby White`
   > The Chicago Bulls traded Mike Conley and Coby White to the Charlotte Hornets for Ousmane Dieng, Collin Sexton, a 2031 2nd round draft pick and a 2031 2nd round draft pick. Chicago also received a trade exception Charlotte also received a trade exception 2031 2nd-rd pick is DEN own 2031 2nd-rd pick is NYK own

## 46. [score 17] DAL — 2018-06-21 → 2026-02-05 (3 links)

**Start:** Trae Young
**Target:** Tyus Jones / Marvin Bagley / A.J. Johnson / Khris Middleton

1. **2018-06-21** (ATL-DAL) — sent `Trae Young`, received `Luka Dončić`
   > The Atlanta Hawks traded Luka Dončić to the Dallas Mavericks for Trae Young and a 2019 1st round draft pick (Cam Reddish was later selected). (2019 1st-rd pick is top-5 protected.)
2. **2025-02-02** (DAL-LAL-UTA) — sent `Luka Doncic`, received `Max Christie, Anthony Davis`
   > In a 3-team trade, the Dallas Mavericks traded Luka Doncic, Maxi Kleber and Markieff Morris to the Los Angeles Lakers; the Los Angeles Lakers traded Max Christie, Anthony Davis and a 2029 1st round draft pick to the Dallas Mavericks; the Los Angeles Lakers traded Jalen Hood-Schifino and a 2025 2nd round draft pick (John Tonje was later selected) to the Utah Jazz; the Utah Jazz traded cash and a 2025 2nd round draft pick to the Dallas Mavericks; and the Utah Jazz traded cash to the Los Angeles Lakers. Los Angeles also received a trade exception 2025 2nd-rd pick is LAC own Dallas also received multiple trade exceptions 2025 2nd-rd pick is a right to swap, did not convey 2029 1st-rd pick is LAL own
3. **2026-02-05** (CHO-DAL-WAS) — sent `Anthony Davis`, received `Tyus Jones, Marvin Bagley, A.J. Johnson, Khris Middleton`
   > In a 3-team trade, the Charlotte Hornets traded Tyus Jones to the Dallas Mavericks; the Dallas Mavericks traded Anthony Davis, Dante Exum, Jaden Hardy and D'Angelo Russell to the Washington Wizards; the Washington Wizards traded Malaki Branham to the Charlotte Hornets; and the Washington Wizards traded Marvin Bagley, A.J. Johnson, Khris Middleton, a 2026 1st round draft pick (Koa Peat was later selected), a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2029 2nd round draft pick and a 2030 1st round draft pick to the Dallas Mavericks. Charlotte also received a trade exception Dallas also received multiple trade exceptions 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2026 2nd-rd pick was PHO own conditional 2027 2nd-rd pick is CHI own 2029 2nd-rd pick is HOU own conditional 2030 1st-rd pick is GSW own

## 47. [score 17] DAL — 2019-01-31 → 2023-02-06 (3 links)

**Start:** DeAndre Jordan / Wesley Matthews / Dennis Smith Jr.
**Target:** Kyrie Irving / Markieff Morris

1. **2019-01-31** (DAL-NYK) — sent `DeAndre Jordan, Wesley Matthews, Dennis Smith Jr.`, received `Trey Burke, Tim Hardaway Jr., Courtney Lee, Kristaps Porziņģis`
   > The Dallas Mavericks traded DeAndre Jordan, Wesley Matthews, Dennis Smith Jr., a 2021 1st round draft pick (Keon Johnson was later selected) and a 2024 1st round draft pick (Kyshawn George was later selected) to the New York Knicks for Trey Burke, Tim Hardaway Jr., Courtney Lee and Kristaps Porziņģis. 2023 1st-rd pick was top-10 protected, became 2024 1st-rd pick
2. **2022-02-10** (DAL-WAS) — sent `Kristaps Porzingis`, received `Davis Bertans, Spencer Dinwiddie`
   > The Dallas Mavericks traded Kristaps Porzingis and a 2022 2nd round draft pick (Yannick Nzosa was later selected) to the Washington Wizards for Davis Bertans and Spencer Dinwiddie. 2022 2nd-rd pick is DAL own
3. **2023-02-06** (BRK-DAL) — sent `Spencer Dinwiddie`, received `Kyrie Irving, Markieff Morris`
   > The Brooklyn Nets traded Kyrie Irving and Markieff Morris to the Dallas Mavericks for Spencer Dinwiddie, Dorian Finney-Smith, a 2027 2nd round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick. Brooklyn also received trade exceptions 2027 2nd-rd pick is DAL own 2029 1st-rd pick is DAL own 2029 2nd-rd pick is DAL own

## 48. [score 17] DAL — 2022-02-10 → 2025-02-02 (3 links)

**Start:** Kristaps Porzingis
**Target:** Max Christie / Anthony Davis

1. **2022-02-10** (DAL-WAS) — sent `Kristaps Porzingis`, received `Davis Bertans, Spencer Dinwiddie`
   > The Dallas Mavericks traded Kristaps Porzingis and a 2022 2nd round draft pick (Yannick Nzosa was later selected) to the Washington Wizards for Davis Bertans and Spencer Dinwiddie. 2022 2nd-rd pick is DAL own
2. **2023-02-06** (BRK-DAL) — sent `Spencer Dinwiddie`, received `Kyrie Irving, Markieff Morris`
   > The Brooklyn Nets traded Kyrie Irving and Markieff Morris to the Dallas Mavericks for Spencer Dinwiddie, Dorian Finney-Smith, a 2027 2nd round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick. Brooklyn also received trade exceptions 2027 2nd-rd pick is DAL own 2029 1st-rd pick is DAL own 2029 2nd-rd pick is DAL own
3. **2025-02-02** (DAL-LAL-UTA) — sent `Markieff Morris`, received `Max Christie, Anthony Davis`
   > In a 3-team trade, the Dallas Mavericks traded Luka Doncic, Maxi Kleber and Markieff Morris to the Los Angeles Lakers; the Los Angeles Lakers traded Max Christie, Anthony Davis and a 2029 1st round draft pick to the Dallas Mavericks; the Los Angeles Lakers traded Jalen Hood-Schifino and a 2025 2nd round draft pick (John Tonje was later selected) to the Utah Jazz; the Utah Jazz traded cash and a 2025 2nd round draft pick to the Dallas Mavericks; and the Utah Jazz traded cash to the Los Angeles Lakers. Los Angeles also received a trade exception 2025 2nd-rd pick is LAC own Dallas also received multiple trade exceptions 2025 2nd-rd pick is a right to swap, did not convey 2029 1st-rd pick is LAL own

## 49. [score 17] DAL — 2023-02-06 → 2026-02-05 (3 links)

**Start:** Spencer Dinwiddie / Dorian Finney-Smith
**Target:** Tyus Jones / Marvin Bagley / A.J. Johnson / Khris Middleton

1. **2023-02-06** (BRK-DAL) — sent `Spencer Dinwiddie, Dorian Finney-Smith`, received `Kyrie Irving, Markieff Morris`
   > The Brooklyn Nets traded Kyrie Irving and Markieff Morris to the Dallas Mavericks for Spencer Dinwiddie, Dorian Finney-Smith, a 2027 2nd round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick. Brooklyn also received trade exceptions 2027 2nd-rd pick is DAL own 2029 1st-rd pick is DAL own 2029 2nd-rd pick is DAL own
2. **2025-02-02** (DAL-LAL-UTA) — sent `Markieff Morris`, received `Max Christie, Anthony Davis`
   > In a 3-team trade, the Dallas Mavericks traded Luka Doncic, Maxi Kleber and Markieff Morris to the Los Angeles Lakers; the Los Angeles Lakers traded Max Christie, Anthony Davis and a 2029 1st round draft pick to the Dallas Mavericks; the Los Angeles Lakers traded Jalen Hood-Schifino and a 2025 2nd round draft pick (John Tonje was later selected) to the Utah Jazz; the Utah Jazz traded cash and a 2025 2nd round draft pick to the Dallas Mavericks; and the Utah Jazz traded cash to the Los Angeles Lakers. Los Angeles also received a trade exception 2025 2nd-rd pick is LAC own Dallas also received multiple trade exceptions 2025 2nd-rd pick is a right to swap, did not convey 2029 1st-rd pick is LAL own
3. **2026-02-05** (CHO-DAL-WAS) — sent `Anthony Davis`, received `Tyus Jones, Marvin Bagley, A.J. Johnson, Khris Middleton`
   > In a 3-team trade, the Charlotte Hornets traded Tyus Jones to the Dallas Mavericks; the Dallas Mavericks traded Anthony Davis, Dante Exum, Jaden Hardy and D'Angelo Russell to the Washington Wizards; the Washington Wizards traded Malaki Branham to the Charlotte Hornets; and the Washington Wizards traded Marvin Bagley, A.J. Johnson, Khris Middleton, a 2026 1st round draft pick (Koa Peat was later selected), a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2029 2nd round draft pick and a 2030 1st round draft pick to the Dallas Mavericks. Charlotte also received a trade exception Dallas also received multiple trade exceptions 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2026 2nd-rd pick was PHO own conditional 2027 2nd-rd pick is CHI own 2029 2nd-rd pick is HOU own conditional 2030 1st-rd pick is GSW own

## 50. [score 17] MEM — 2019-02-07 → 2021-08-16 (3 links)

**Start:** Marc Gasol
**Target:** Patrick Beverley / Daniel Oturu / Rajon Rondo

1. **2019-02-07** (MEM-TOR) — sent `Marc Gasol`, received `C.J. Miles, Jonas Valančiūnas, Delon Wright`
   > The Memphis Grizzlies traded Marc Gasol to the Toronto Raptors for C.J. Miles, Jonas Valančiūnas, Delon Wright and a 2024 2nd round draft pick (Juan Nunez was later selected).
2. **2021-08-07** (CHO-NOP-MEM) — sent `Jonas Valančiūnas`, received `Steven Adams, Eric Bledsoe, Jared Butler, Ziaire Williams`
   > In a 3-team trade, the Charlotte Hornets traded Devonte' Graham to the New Orleans Pelicans; the Memphis Grizzlies traded Tyler Harvey to the Charlotte Hornets; the Memphis Grizzlies traded Brandon Boston Jr., Trey Murphy III and Jonas Valančiūnas to the New Orleans Pelicans; the New Orleans Pelicans traded Wesley Iwundu, cash and a 2022 1st round draft pick (Mark Williams was later selected) to the Charlotte Hornets; and the New Orleans Pelicans traded Steven Adams, Eric Bledsoe, Jared Butler, Ziaire Williams, a 2022 2nd round draft pick (Vince Williams Jr. was later selected) and a 2025 2nd round draft pick (Ryan Kalkbrenner was later selected) to the Memphis Grizzlies. via sign and trade 2022 conditional 1st-rd pick did not convey, becomes 2022 2nd-rd pick and 2025 2nd-rd pick 2025 2nd-rd pick is NOP own 2022 conditional 1st-rd pick is NOP own
3. **2021-08-16** (LAC-MEM) — sent `Eric Bledsoe`, received `Patrick Beverley, Daniel Oturu, Rajon Rondo`
   > The Los Angeles Clippers traded Patrick Beverley, Daniel Oturu and Rajon Rondo to the Memphis Grizzlies for Eric Bledsoe. Los Angeles also received a trade exception

## 51. [score 17] MEM — 2019-02-07 → 2024-02-01 (3 links)

**Start:** Marc Gasol
**Target:** Victor Oladipo

1. **2019-02-07** (MEM-TOR) — sent `Marc Gasol`, received `C.J. Miles, Jonas Valančiūnas, Delon Wright`
   > The Memphis Grizzlies traded Marc Gasol to the Toronto Raptors for C.J. Miles, Jonas Valančiūnas, Delon Wright and a 2024 2nd round draft pick (Juan Nunez was later selected).
2. **2021-08-07** (CHO-NOP-MEM) — sent `Jonas Valančiūnas`, received `Steven Adams, Eric Bledsoe, Jared Butler, Ziaire Williams`
   > In a 3-team trade, the Charlotte Hornets traded Devonte' Graham to the New Orleans Pelicans; the Memphis Grizzlies traded Tyler Harvey to the Charlotte Hornets; the Memphis Grizzlies traded Brandon Boston Jr., Trey Murphy III and Jonas Valančiūnas to the New Orleans Pelicans; the New Orleans Pelicans traded Wesley Iwundu, cash and a 2022 1st round draft pick (Mark Williams was later selected) to the Charlotte Hornets; and the New Orleans Pelicans traded Steven Adams, Eric Bledsoe, Jared Butler, Ziaire Williams, a 2022 2nd round draft pick (Vince Williams Jr. was later selected) and a 2025 2nd round draft pick (Ryan Kalkbrenner was later selected) to the Memphis Grizzlies. via sign and trade 2022 conditional 1st-rd pick did not convey, becomes 2022 2nd-rd pick and 2025 2nd-rd pick 2025 2nd-rd pick is NOP own 2022 conditional 1st-rd pick is NOP own
3. **2024-02-01** (HOU-MEM) — sent `Steven Adams`, received `Victor Oladipo`
   > The Houston Rockets traded Victor Oladipo, a 2024 2nd round draft pick (Ulrich Chomche was later selected), a 2024 2nd round draft pick (Jaylen Wells was later selected) and a 2025 2nd round draft pick (Will Richard was later selected) to the Memphis Grizzlies for Steven Adams. Memphis also received a trade exception 2024 2nd-rd pick is more favorable 2024 2nd-rd pick is OKC own 2025 2nd-rd pick is more favorable of HOU, OKC; became HOU pick

## 52. [score 17] ORL — 2010-12-18 → 2014-06-27 (3 links)

**Start:** Vince Carter / Marcin Gortat / Mickaël Piétrus
**Target:** Evan Fournier / Devyn Marble

1. **2010-12-18** (ORL-PHO) — sent `Vince Carter, Marcin Gortat, Mickaël Piétrus`, received `Earl Clark, Jason Richardson, Hedo Türkoğlu`
   > The Orlando Magic traded Vince Carter, Marcin Gortat, Mickaël Piétrus, cash and a 2011 1st round draft pick (Nikola Mirotić was later selected) to the Phoenix Suns for Earl Clark, Jason Richardson and Hedo Türkoğlu.
2. **2012-08-10** (DEN-ORL-LAL-PHI) — sent `Earl Clark, Jason Richardson`, received `Arron Afflalo, Al Harrington, Christian Eyenga, Josh McRoberts, Maurice Harkless, Nikola Vučević`
   > In a 4-team trade, the Denver Nuggets traded Arron Afflalo, Al Harrington, a 2013 2nd round draft pick (Romero Osby was later selected) and a 2014 1st round draft pick (Dario Šarić was later selected) to the Orlando Magic; the Los Angeles Lakers traded Christian Eyenga, Josh McRoberts and a 2017 2nd round draft pick (Wesley Iwundu was later selected) to the Orlando Magic; the Los Angeles Lakers traded Andrew Bynum to the Philadelphia 76ers; the Orlando Magic traded Earl Clark, Chris Duhon and Dwight Howard to the Los Angeles Lakers; the Orlando Magic traded Jason Richardson to the Philadelphia 76ers; the Philadelphia 76ers traded Andre Iguodala to the Denver Nuggets; and the Philadelphia 76ers traded Maurice Harkless, Nikola Vučević and a 2018 1st round draft pick (Landry Shamet was later selected) to the Orlando Magic. (1st Round pick from PHI to ORL was eventually traded back to PHI. 1st-Rd pick from LAL to ORL turns into 2017 & 2018 2nd-Rd picks if Lakers 1st-Rd pick traded to PHO/PHI does not convey by 2017)
3. **2014-06-27** (DEN-ORL) — sent `Arron Afflalo`, received `Evan Fournier, Devyn Marble`
   > The Denver Nuggets traded Evan Fournier and Devyn Marble to the Orlando Magic for Arron Afflalo.

## 53. [score 17] ORL — 2010-12-18 → 2021-03-25 (3 links)

**Start:** Vince Carter / Marcin Gortat / Mickaël Piétrus
**Target:** Wendell Carter Jr. / Otto Porter

1. **2010-12-18** (ORL-PHO) — sent `Vince Carter, Marcin Gortat, Mickaël Piétrus`, received `Earl Clark, Jason Richardson, Hedo Türkoğlu`
   > The Orlando Magic traded Vince Carter, Marcin Gortat, Mickaël Piétrus, cash and a 2011 1st round draft pick (Nikola Mirotić was later selected) to the Phoenix Suns for Earl Clark, Jason Richardson and Hedo Türkoğlu.
2. **2012-08-10** (DEN-ORL-LAL-PHI) — sent `Earl Clark, Jason Richardson`, received `Arron Afflalo, Al Harrington, Christian Eyenga, Josh McRoberts, Maurice Harkless, Nikola Vučević`
   > In a 4-team trade, the Denver Nuggets traded Arron Afflalo, Al Harrington, a 2013 2nd round draft pick (Romero Osby was later selected) and a 2014 1st round draft pick (Dario Šarić was later selected) to the Orlando Magic; the Los Angeles Lakers traded Christian Eyenga, Josh McRoberts and a 2017 2nd round draft pick (Wesley Iwundu was later selected) to the Orlando Magic; the Los Angeles Lakers traded Andrew Bynum to the Philadelphia 76ers; the Orlando Magic traded Earl Clark, Chris Duhon and Dwight Howard to the Los Angeles Lakers; the Orlando Magic traded Jason Richardson to the Philadelphia 76ers; the Philadelphia 76ers traded Andre Iguodala to the Denver Nuggets; and the Philadelphia 76ers traded Maurice Harkless, Nikola Vučević and a 2018 1st round draft pick (Landry Shamet was later selected) to the Orlando Magic. (1st Round pick from PHI to ORL was eventually traded back to PHI. 1st-Rd pick from LAL to ORL turns into 2017 & 2018 2nd-Rd picks if Lakers 1st-Rd pick traded to PHO/PHI does not convey by 2017)
3. **2021-03-25** (CHI-ORL) — sent `Nikola Vučević`, received `Wendell Carter Jr., Otto Porter`
   > The Chicago Bulls traded Wendell Carter Jr., Otto Porter, a 2021 1st round draft pick (Franz Wagner was later selected) and a 2023 1st round draft pick (Jett Howard was later selected) to the Orlando Magic for Al-Farouq Aminu and Nikola Vučević. Orlando also received a trade exception 2021 1st-rd pick (CHI own) was top-4 protected 2023 1st-rd pick is CHI own

## 54. [score 17] TOR — 2021-08-06 → 2024-02-08 (3 links)

**Start:** Kyle Lowry
**Target:** Spencer Dinwiddie

1. **2021-08-06** (MIA-TOR) — sent `Kyle Lowry`, received `Precious Achiuwa, Goran Dragic`
   > The Miami Heat traded Precious Achiuwa and Goran Dragic to the Toronto Raptors for Kyle Lowry. Toronto also received a trade exception
2. **2022-02-10** (SAS-TOR) — sent `Goran Dragic`, received `Drew Eubanks, Thaddeus Young`
   > The San Antonio Spurs traded Drew Eubanks, Thaddeus Young and a 2022 2nd round draft pick (Christian Koloko was later selected) to the Toronto Raptors for Goran Dragic and a 2022 1st round draft pick (Malaki Branham was later selected). Toronto also received a trade exception 2022 2nd-rd pick is DET own 2022 1st-rd pick is top-14 protected
3. **2024-02-08** (BRK-TOR) — sent `Thaddeus Young`, received `Spencer Dinwiddie`
   > The Brooklyn Nets traded Spencer Dinwiddie to the Toronto Raptors for Dennis Schroder and Thaddeus Young. Brooklyn also received a trade exception

## 55. [score 17] TOR — 2024-01-17 → 2025-02-06 (3 links)

**Start:** Pascal Siakam
**Target:** Brandon Ingram

1. **2024-01-17** (IND-TOR) — sent `Pascal Siakam`, received `Bruce Brown, Kira Lewis Jr., Jordan Nwora`
   > The Indiana Pacers traded Bruce Brown, Kira Lewis Jr., Jordan Nwora, a 2024 1st round draft pick (Isaiah Collier was later selected), a 2024 1st round draft pick (Ja'Kobe Walter was later selected) and a 2026 1st round draft pick (Keaton Wagler was later selected) to the Toronto Raptors for Pascal Siakam. Toronto also received a trade exception conditional 2024 1st-rd pick is IND own 2024 1st-rd pick is least favorable conditional 2026 1st-rd pick was IND own
2. **2024-02-08** (TOR-UTA) — sent `Kira Lewis Jr.`, received `Ochai Agbaji, Kelly Olynyk`
   > The Toronto Raptors traded Kira Lewis Jr., Otto Porter Jr. and a 2024 1st round draft pick (Isaiah Collier was later selected) to the Utah Jazz for Ochai Agbaji and Kelly Olynyk. Toronto also received a trade exception Utah also received a trade exception 2024 1st-rd pick is least favorable
3. **2025-02-06** (NOP-TOR) — sent `Kelly Olynyk`, received `Brandon Ingram`
   > The New Orleans Pelicans traded Brandon Ingram to the Toronto Raptors for Bruce Brown, Kelly Olynyk, a 2026 1st round draft pick (Keaton Wagler was later selected) and a 2031 2nd round draft pick. New Orleans also received a trade exception conditional 2026 1st-rd pick was IND own 2031 2nd-rd pick is TOR own

## 56. [score 17] TOR — 2024-01-17 → 2026-02-05 (3 links)

**Start:** Pascal Siakam
**Target:** Chris Paul

1. **2024-01-17** (IND-TOR) — sent `Pascal Siakam`, received `Bruce Brown, Kira Lewis Jr., Jordan Nwora`
   > The Indiana Pacers traded Bruce Brown, Kira Lewis Jr., Jordan Nwora, a 2024 1st round draft pick (Isaiah Collier was later selected), a 2024 1st round draft pick (Ja'Kobe Walter was later selected) and a 2026 1st round draft pick (Keaton Wagler was later selected) to the Toronto Raptors for Pascal Siakam. Toronto also received a trade exception conditional 2024 1st-rd pick is IND own 2024 1st-rd pick is least favorable conditional 2026 1st-rd pick was IND own
2. **2024-02-08** (TOR-UTA) — sent `Kira Lewis Jr.`, received `Ochai Agbaji, Kelly Olynyk`
   > The Toronto Raptors traded Kira Lewis Jr., Otto Porter Jr. and a 2024 1st round draft pick (Isaiah Collier was later selected) to the Utah Jazz for Ochai Agbaji and Kelly Olynyk. Toronto also received a trade exception Utah also received a trade exception 2024 1st-rd pick is least favorable
3. **2026-02-05** (BRK-LAC-TOR) — sent `Ochai Agbaji`, received `Chris Paul`
   > In a 3-team trade, the Brooklyn Nets traded Vanja Marinkovic to the Los Angeles Clippers; the Los Angeles Clippers traded cash to the Brooklyn Nets; the Los Angeles Clippers traded Chris Paul to the Toronto Raptors; and the Toronto Raptors traded cash, Ochai Agbaji and a 2032 2nd round draft pick to the Brooklyn Nets. Toronto also received a trade exception Los Angeles also received trade exceptions 2032 2nd-rd pick is TOR own

## 57. [score 17] DEN — 2014-06-27 → 2022-07-06 (3 links)

**Start:** Evan Fournier / Devyn Marble
**Target:** Kentavious Caldwell-Pope / Ish Smith

1. **2014-06-27** (DEN-ORL) — sent `Evan Fournier, Devyn Marble`, received `Arron Afflalo`
   > The Denver Nuggets traded Evan Fournier and Devyn Marble to the Orlando Magic for Arron Afflalo.
2. **2015-02-19** (DEN-POR) — sent `Arron Afflalo`, received `Will Barton, Victor Claver, Thomas Robinson`
   > The Denver Nuggets traded Arron Afflalo and Alonzo Gee to the Portland Trail Blazers for Will Barton, Victor Claver, Thomas Robinson and a 2016 1st round draft pick (Malik Beasley was later selected). (DEN 2016 1st round pick received from POR is lottery protected.)
3. **2022-07-06** (DEN-WAS) — sent `Will Barton`, received `Kentavious Caldwell-Pope, Ish Smith`
   > The Denver Nuggets traded Will Barton and Monte Morris to the Washington Wizards for Kentavious Caldwell-Pope and Ish Smith. Denver also received a trade exceptions

## 58. [score 17] DET — 2013-07-31 → 2018-01-29 (3 links)

**Start:** Brandon Knight / Viacheslav Kravtsov / Khris Middleton
**Target:** Blake Griffin / Brice Johnson / Willie Reed

1. **2013-07-31** (DET-MIL) — sent `Brandon Knight, Viacheslav Kravtsov, Khris Middleton`, received `Brandon Jennings`
   > The Detroit Pistons traded Brandon Knight, Viacheslav Kravtsov and Khris Middleton to the Milwaukee Bucks for Brandon Jennings.
2. **2016-02-16** (DET-ORL) — sent `Brandon Jennings`, received `Tobias Harris`
   > The Detroit Pistons traded Ersan İlyasova and Brandon Jennings to the Orlando Magic for Tobias Harris.
3. **2018-01-29** (DET-LAC) — sent `Tobias Harris`, received `Blake Griffin, Brice Johnson, Willie Reed`
   > The Detroit Pistons traded Avery Bradley, Tobias Harris, Boban Marjanović, a 2018 1st round draft pick (Miles Bridges was later selected) and a 2019 2nd round draft pick (Jaylen Hands was later selected) to the Los Angeles Clippers for Blake Griffin, Brice Johnson and Willie Reed.

## 59. [score 17] DET — 2022-07-06 → 2025-07-07 (3 links)

**Start:** Jerami Grant / Ismael Kamagate
**Target:** Duncan Robinson

1. **2022-07-06** (DET-POR) — sent `Jerami Grant, Ismael Kamagate`, received `Gabriele Procida`
   > The Detroit Pistons traded Jerami Grant and Ismael Kamagate to the Portland Trail Blazers for Gabriele Procida, a 2025 1st round draft pick (Nolan Traoré was later selected), a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (Braden Smith was later selected). Detroit also received a trade exception conditional 2025 1st-rd pick is MIL own 2025 2nd-rd pick is DET own 2026 2nd-rd pick was more favorable of POR and NOP, became NOP 2026 2nd-rd pick
2. **2024-02-08** (DET-UTA) — sent `Gabriele Procida`, received `Simone Fontecchio`
   > The Detroit Pistons traded Kevin Knox, Gabriele Procida and a 2024 2nd round draft pick (Kyle Filipowski was later selected) to the Utah Jazz for Simone Fontecchio. Utah also received a trade exception 2024 2nd-rd pick is more favorable
3. **2025-07-07** (DET-MIA) — sent `Simone Fontecchio`, received `Duncan Robinson`
   > The Detroit Pistons traded Simone Fontecchio to the Miami Heat for Duncan Robinson. Miami also received a trade exception

## 60. [score 17] LAC — 2011-12-14 → 2021-03-25 (3 links)

**Start:** Al-Farouq Aminu / Eric Gordon / Chris Kaman
**Target:** Rajon Rondo

1. **2011-12-14** (LAC-NOH) — sent `Al-Farouq Aminu, Eric Gordon, Chris Kaman`, received `Chris Paul`
   > The Los Angeles Clippers traded Al-Farouq Aminu, Eric Gordon, Chris Kaman and a 2012 1st round draft pick (Austin Rivers was later selected) to the New Orleans Hornets for Chris Paul, $350K cash and a 2015 2nd round draft pick (Artūras Gudaitis was later selected).
2. **2017-06-28** (HOU-LAC) — sent `Chris Paul`, received `Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer`
   > The Houston Rockets traded Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer, $661k cash and a 2018 1st round draft pick (Omari Spellman was later selected) to the Los Angeles Clippers for Chris Paul.
3. **2021-03-25** (ATL-LAC) — sent `Lou Williams`, received `Rajon Rondo`
   > The Atlanta Hawks traded Rajon Rondo to the Los Angeles Clippers for Lou Williams, a 2023 2nd round draft pick (Julian Phillips was later selected) and a 2027 2nd round draft pick. 2023 2nd-rd pick was POR own 2027 2nd-rd pick is LAC own

## 61. [score 17] LAC — 2011-12-14 → 2021-08-16 (3 links)

**Start:** Al-Farouq Aminu / Eric Gordon / Chris Kaman
**Target:** Eric Bledsoe

1. **2011-12-14** (LAC-NOH) — sent `Al-Farouq Aminu, Eric Gordon, Chris Kaman`, received `Chris Paul`
   > The Los Angeles Clippers traded Al-Farouq Aminu, Eric Gordon, Chris Kaman and a 2012 1st round draft pick (Austin Rivers was later selected) to the New Orleans Hornets for Chris Paul, $350K cash and a 2015 2nd round draft pick (Artūras Gudaitis was later selected).
2. **2017-06-28** (HOU-LAC) — sent `Chris Paul`, received `Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer`
   > The Houston Rockets traded Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer, $661k cash and a 2018 1st round draft pick (Omari Spellman was later selected) to the Los Angeles Clippers for Chris Paul.
3. **2021-08-16** (LAC-MEM) — sent `Patrick Beverley`, received `Eric Bledsoe`
   > The Los Angeles Clippers traded Patrick Beverley, Daniel Oturu and Rajon Rondo to the Memphis Grizzlies for Eric Bledsoe. Los Angeles also received a trade exception

## 62. [score 17] LAC — 2017-06-28 → 2021-08-16 (3 links)

**Start:** Chris Paul
**Target:** Eric Bledsoe

1. **2017-06-28** (HOU-LAC) — sent `Chris Paul`, received `Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer`
   > The Houston Rockets traded Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer, $661k cash and a 2018 1st round draft pick (Omari Spellman was later selected) to the Los Angeles Clippers for Chris Paul.
2. **2021-03-25** (ATL-LAC) — sent `Lou Williams`, received `Rajon Rondo`
   > The Atlanta Hawks traded Rajon Rondo to the Los Angeles Clippers for Lou Williams, a 2023 2nd round draft pick (Julian Phillips was later selected) and a 2027 2nd round draft pick. 2023 2nd-rd pick was POR own 2027 2nd-rd pick is LAC own
3. **2021-08-16** (LAC-MEM) — sent `Rajon Rondo`, received `Eric Bledsoe`
   > The Los Angeles Clippers traded Patrick Beverley, Daniel Oturu and Rajon Rondo to the Memphis Grizzlies for Eric Bledsoe. Los Angeles also received a trade exception

## 63. [score 17] LAC — 2017-06-28 → 2022-02-04 (3 links)

**Start:** Chris Paul
**Target:** Robert Covington / Norman Powell

1. **2017-06-28** (HOU-LAC) — sent `Chris Paul`, received `Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer`
   > The Houston Rockets traded Patrick Beverley, Sam Dekker, Montrezl Harrell, Darrun Hilliard, DeAndre Liggins, Lou Williams, Kyle Wiltjer, $661k cash and a 2018 1st round draft pick (Omari Spellman was later selected) to the Los Angeles Clippers for Chris Paul.
2. **2021-08-16** (LAC-MEM) — sent `Patrick Beverley`, received `Eric Bledsoe`
   > The Los Angeles Clippers traded Patrick Beverley, Daniel Oturu and Rajon Rondo to the Memphis Grizzlies for Eric Bledsoe. Los Angeles also received a trade exception
3. **2022-02-04** (LAC-POR) — sent `Eric Bledsoe`, received `Robert Covington, Norman Powell`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own

## 64. [score 17] LAC — 2018-01-29 → 2019-02-07 (3 links)

**Start:** Blake Griffin / Brice Johnson / Willie Reed
**Target:** Michael Beasley / Ivica Zubac

1. **2018-01-29** (DET-LAC) — sent `Blake Griffin, Brice Johnson, Willie Reed`, received `Avery Bradley, Tobias Harris, Boban Marjanović`
   > The Detroit Pistons traded Avery Bradley, Tobias Harris, Boban Marjanović, a 2018 1st round draft pick (Miles Bridges was later selected) and a 2019 2nd round draft pick (Jaylen Hands was later selected) to the Los Angeles Clippers for Blake Griffin, Brice Johnson and Willie Reed.
2. **2019-02-06** (LAC-PHI) — sent `Tobias Harris, Boban Marjanović`, received `Wilson Chandler, Mike Muscala, Landry Shamet`
   > The Los Angeles Clippers traded Tobias Harris, Boban Marjanović and Mike Scott to the Philadelphia 76ers for Wilson Chandler, Mike Muscala, Landry Shamet, a 2020 1st round draft pick (Saddiq Bey was later selected), a 2021 1st round draft pick (Tre Mann was later selected), a 2021 2nd round draft pick (Jeremiah Robinson-Earl was later selected) and a 2023 2nd round draft pick (James Nnaji was later selected). 2021 1st-rd pick was MIA own 2021 2nd-rd pick was DET own 2023 2nd-rd pick was DET own
3. **2019-02-07** (LAC-LAL) — sent `Mike Muscala`, received `Michael Beasley, Ivica Zubac`
   > The Los Angeles Clippers traded Mike Muscala to the Los Angeles Lakers for Michael Beasley and Ivica Zubac.

## 65. [score 17] LAC — 2019-02-06 → 2023-02-09 (3 links)

**Start:** Tobias Harris / Boban Marjanović / Mike Scott
**Target:** Eric Gordon

1. **2019-02-06** (LAC-PHI) — sent `Tobias Harris, Boban Marjanović, Mike Scott`, received `Wilson Chandler, Mike Muscala, Landry Shamet`
   > The Los Angeles Clippers traded Tobias Harris, Boban Marjanović and Mike Scott to the Philadelphia 76ers for Wilson Chandler, Mike Muscala, Landry Shamet, a 2020 1st round draft pick (Saddiq Bey was later selected), a 2021 1st round draft pick (Tre Mann was later selected), a 2021 2nd round draft pick (Jeremiah Robinson-Earl was later selected) and a 2023 2nd round draft pick (James Nnaji was later selected). 2021 1st-rd pick was MIA own 2021 2nd-rd pick was DET own 2023 2nd-rd pick was DET own
2. **2020-11-19** (BRK-DET-LAC) — sent `Landry Shamet`, received `Jay Scrubb, Luke Kennard, Justin Patton`
   > In a 3-team trade, the Brooklyn Nets traded Saddiq Bey, Jaylen Hands, Dzanan Musa and a 2021 2nd round draft pick (JT Thor was later selected) to the Detroit Pistons; the Brooklyn Nets traded Jay Scrubb to the Los Angeles Clippers; the Detroit Pistons traded Bruce Brown to the Brooklyn Nets; the Detroit Pistons traded Luke Kennard, Justin Patton, a 2023 2nd round draft pick (Julian Phillips was later selected), a 2024 2nd round draft pick (Jonathan Mogbo was later selected), a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (Jaron Pierre Jr. was later selected) to the Los Angeles Clippers; the Los Angeles Clippers traded Reggie Perry and Landry Shamet to the Brooklyn Nets; and the Los Angeles Clippers traded Rodney McGruder and cash to the Detroit Pistons. 2023 2nd-rd pick is POR own 2024 2nd-rd pick is DET own 2025 2nd-rd pick is DET's own 2026 2nd-rd pick was DET own 2021 2nd-rd pick is TOR own
3. **2023-02-09** (HOU-LAC-MEM) — sent `Luke Kennard`, received `Eric Gordon`
   > In a 3-team trade, the Houston Rockets traded Eric Gordon and a 2023 1st round draft pick (Kobe Brown was later selected) to the Los Angeles Clippers; the Los Angeles Clippers traded John Wall and a 2023 1st round draft pick (Cam Whitmore was later selected) to the Houston Rockets; the Los Angeles Clippers traded Luke Kennard and a 2026 2nd round draft pick (NULL was later selected) to the Memphis Grizzlies; the Memphis Grizzlies traded Danny Green to the Houston Rockets; and the Memphis Grizzlies traded a 2024 2nd round draft pick (Cam Christie was later selected), a 2024 2nd round draft pick (Juan Nunez was later selected) and a 2027 2nd round draft pick to the Los Angeles Clippers. 2026 2nd-rd pick was a right to swap, did not convey Houston also received a trade exception 2023 1st-rd pick was a right to swap 2024 2nd-rd pick is more favorable 2024 2nd-rd pick is TOR own 2027 2nd-rd pick is MEM own

## 66. [score 17] LAC — 2021-08-16 → 2023-11-01 (3 links)

**Start:** Patrick Beverley / Daniel Oturu / Rajon Rondo
**Target:** James Harden / Filip Petrusev / P.J. Tucker

1. **2021-08-16** (LAC-MEM) — sent `Patrick Beverley, Daniel Oturu, Rajon Rondo`, received `Eric Bledsoe`
   > The Los Angeles Clippers traded Patrick Beverley, Daniel Oturu and Rajon Rondo to the Memphis Grizzlies for Eric Bledsoe. Los Angeles also received a trade exception
2. **2022-02-04** (LAC-POR) — sent `Eric Bledsoe`, received `Robert Covington, Norman Powell`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own
3. **2023-11-01** (LAC-OKC-PHI) — sent `Robert Covington`, received `James Harden, Filip Petrusev, P.J. Tucker`
   > In a 3-team trade, the Los Angeles Clippers traded a 2027 1st round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris, cash, a 2024 2nd round draft pick (Juan Nunez was later selected), a 2028 1st round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick to the Philadelphia 76ers; the Oklahoma City Thunder traded a 2026 1st round draft pick (Koa Peat was later selected) to the Philadelphia 76ers; and the Philadelphia 76ers traded James Harden, Filip Petrusev and P.J. Tucker to the Los Angeles Clippers. 2027 1st-rd pick is a right to swap 2024 2nd-rd pick is more favorable 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2028 1st-rd pick is LAC own 2029 1st-rd pick is a swap 2029 2nd-rd pick is LAC own Philadelphia also received trade exceptions

## 67. [score 17] LAC — 2022-02-04 → 2026-02-04 (3 links)

**Start:** Eric Bledsoe / Keon Johnson / Justise Winslow
**Target:** Darius Garland

1. **2022-02-04** (LAC-POR) — sent `Eric Bledsoe, Keon Johnson, Justise Winslow`, received `Robert Covington, Norman Powell`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own
2. **2023-11-01** (LAC-OKC-PHI) — sent `Robert Covington`, received `James Harden, Filip Petrusev, P.J. Tucker`
   > In a 3-team trade, the Los Angeles Clippers traded a 2027 1st round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris, cash, a 2024 2nd round draft pick (Juan Nunez was later selected), a 2028 1st round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick to the Philadelphia 76ers; the Oklahoma City Thunder traded a 2026 1st round draft pick (Koa Peat was later selected) to the Philadelphia 76ers; and the Philadelphia 76ers traded James Harden, Filip Petrusev and P.J. Tucker to the Los Angeles Clippers. 2027 1st-rd pick is a right to swap 2024 2nd-rd pick is more favorable 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2028 1st-rd pick is LAC own 2029 1st-rd pick is a swap 2029 2nd-rd pick is LAC own Philadelphia also received trade exceptions
3. **2026-02-04** (CLE-LAC) — sent `James Harden`, received `Darius Garland`
   > The Cleveland Cavaliers traded Darius Garland and a 2026 2nd round draft pick (Henri Veesaar was later selected) to the Los Angeles Clippers for James Harden. 2026 2nd-rd pick was CLE own

## 68. [score 17] LAC — 2022-02-10 → 2023-11-01 (3 links)

**Start:** Serge Ibaka / David Michineau
**Target:** James Harden / Filip Petrusev / P.J. Tucker

1. **2022-02-10** (DET-MIL-SAC-LAC) — sent `Serge Ibaka, David Michineau`, received `Rodney Hood, Semi Ojeleye, Vanja Marinkovic`
   > In a 4-team trade, the Detroit Pistons traded a 2023 2nd round draft pick (Isaiah Wong was later selected) to the Milwaukee Bucks; the Detroit Pistons traded Josh Jackson and Trey Lyles to the Sacramento Kings; the Los Angeles Clippers traded Serge Ibaka and cash to the Milwaukee Bucks; the Los Angeles Clippers traded David Michineau to the Sacramento Kings; the Milwaukee Bucks traded Rodney Hood and Semi Ojeleye to the Los Angeles Clippers; the Milwaukee Bucks traded Donte DiVincenzo to the Sacramento Kings; the Sacramento Kings traded Marvin Bagley III to the Detroit Pistons; the Sacramento Kings traded Vanja Marinkovic to the Los Angeles Clippers; and the Sacramento Kings traded a 2024 2nd round draft pick (Tyler Smith was later selected) to the Milwaukee Bucks.
2. **2023-07-08** (ATL-HOU-LAC-MEM-OKC) — sent `Vanja Marinkovic`, received `Kenyon Martin`
   > In a 5-team trade, the Atlanta Hawks traded Alpha Kaba to the Houston Rockets; the Houston Rockets traded Usman Garuba, TyTy Washington Jr., a 2025 2nd round draft pick (Mohamed Diawara was later selected) and a 2028 2nd round draft pick to the Atlanta Hawks; the Houston Rockets traded Kenyon Martin to the Los Angeles Clippers; the Houston Rockets traded Josh Christopher to the Memphis Grizzlies; the Houston Rockets traded Patty Mills, a 2024 2nd round draft pick (KJ Simpson was later selected), a 2029 2nd round draft pick and a 2030 2nd round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded a 2026 2nd round draft pick (Tyler Bilodeau was later selected) and a 2027 2nd round draft pick to the Houston Rockets; the Los Angeles Clippers traded Vanja Marinkovic to the Memphis Grizzlies; the Memphis Grizzlies traded Dillon Brooks to the Houston Rockets; and the Oklahoma City Thunder traded cash to the Atlanta Hawks. 2027 2nd-rd pick is MEM own 2024 2nd-rd pick is HOU own 2025 2nd-rd pick is MIN own conditional 2026 2nd-rd pick was one of LAC/BOS/IND/MIA, became LAC 2026 2nd-rd pick 2028 2nd-rd pick is HOU own 2029 2nd-rd pick is HOU own 2030 2nd-rd pick is HOU own
3. **2023-11-01** (LAC-OKC-PHI) — sent `KJ Martin`, received `James Harden, Filip Petrusev, P.J. Tucker`
   > In a 3-team trade, the Los Angeles Clippers traded a 2027 1st round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris, cash, a 2024 2nd round draft pick (Juan Nunez was later selected), a 2028 1st round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick to the Philadelphia 76ers; the Oklahoma City Thunder traded a 2026 1st round draft pick (Koa Peat was later selected) to the Philadelphia 76ers; and the Philadelphia 76ers traded James Harden, Filip Petrusev and P.J. Tucker to the Los Angeles Clippers. 2027 1st-rd pick is a right to swap 2024 2nd-rd pick is more favorable 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2028 1st-rd pick is LAC own 2029 1st-rd pick is a swap 2029 2nd-rd pick is LAC own Philadelphia also received trade exceptions

## 69. [score 17] MIN — 2014-08-23 → 2023-02-09 (3 links)

**Start:** Kevin Love / Luc Mbah a Moute / Alexey Shved
**Target:** Nickeil Alexander-Walker / Mike Conley

1. **2014-08-23** (CLE-MIN-PHI) — sent `Kevin Love, Luc Mbah a Moute, Alexey Shved`, received `Anthony Bennett, Andrew Wiggins, Thaddeus Young`
   > In a 3-team trade, the Cleveland Cavaliers traded Anthony Bennett, Andrew Wiggins and a trade exception to the Minnesota Timberwolves; the Cleveland Cavaliers traded a 2016 1st round draft pick (Timothé Luwawu-Cabarrot was later selected) to the Philadelphia 76ers; the Minnesota Timberwolves traded Kevin Love to the Cleveland Cavaliers; the Minnesota Timberwolves traded Luc Mbah a Moute and Alexey Shved to the Philadelphia 76ers; and the Philadelphia 76ers traded Thaddeus Young to the Minnesota Timberwolves.
2. **2020-02-06** (GSW-MIN) — sent `Andrew Wiggins`, received `Jacob Evans, D'Angelo Russell, Omari Spellman`
   > The Golden State Warriors traded Jacob Evans, D'Angelo Russell and Omari Spellman to the Minnesota Timberwolves for Andrew Wiggins, a 2021 1st round draft pick (Jonathan Kuminga was later selected) and a 2021 2nd round draft pick (Miles McBride was later selected). 2021 1st-rd pick is top-3 protected
3. **2023-02-09** (LAL-MIN-UTA) — sent `D'Angelo Russell`, received `Nickeil Alexander-Walker, Mike Conley`
   > In a 3-team trade, the Los Angeles Lakers traded a 2024 2nd round draft pick (Bobi Klintman was later selected) to the Minnesota Timberwolves; the Los Angeles Lakers traded Damian Jones, Juan Toscano-Anderson, Russell Westbrook and a 2027 1st round draft pick to the Utah Jazz; the Minnesota Timberwolves traded D'Angelo Russell to the Los Angeles Lakers; the Utah Jazz traded Malik Beasley and Jarred Vanderbilt to the Los Angeles Lakers; and the Utah Jazz traded Nickeil Alexander-Walker, Mike Conley, a 2025 2nd round draft pick (Rasheer Fleming was later selected) and a 2026 2nd round draft pick (Trevon Brazile was later selected) to the Minnesota Timberwolves. Los Angeles also received multiple trade exceptions Minnesota also received a trade exception 2024 2nd-rd pick is least favorable 2025 2nd-rd pick is UTA own 2026 2nd-rd pick was UTA own Utah also received multiple trade exceptions conditional 2027 1st-rd pick is LAL own

## 70. [score 17] MIN — 2018-11-12 → 2021-08-25 (3 links)

**Start:** Jimmy Butler / Justin Patton
**Target:** Patrick Beverley

1. **2018-11-12** (MIN-PHI) — sent `Jimmy Butler, Justin Patton`, received `Jerryd Bayless, Robert Covington, Dario Šarić`
   > The Minnesota Timberwolves traded Jimmy Butler and Justin Patton to the Philadelphia 76ers for Jerryd Bayless, Robert Covington, Dario Šarić and a 2022 2nd round draft pick (Matteo Spagnolo was later selected). 2022 2nd-rd pick is more favorable of PHI and DEN
2. **2019-07-06** (MIN-PHO) — sent `Dario Šarić`, received `Jarrett Culver`
   > The Minnesota Timberwolves traded Cameron Johnson and Dario Šarić to the Phoenix Suns for Jarrett Culver.
3. **2021-08-25** (MEM-MIN) — sent `Jarrett Culver`, received `Patrick Beverley`
   > The Memphis Grizzlies traded Patrick Beverley to the Minnesota Timberwolves for Jarrett Culver and Juan Hernangomez. Memphis also received a trade exception

## 71. [score 17] MIN — 2018-11-12 → 2022-07-06 (3 links)

**Start:** Jimmy Butler / Justin Patton
**Target:** Rudy Gobert

1. **2018-11-12** (MIN-PHI) — sent `Jimmy Butler, Justin Patton`, received `Jerryd Bayless, Robert Covington, Dario Šarić`
   > The Minnesota Timberwolves traded Jimmy Butler and Justin Patton to the Philadelphia 76ers for Jerryd Bayless, Robert Covington, Dario Šarić and a 2022 2nd round draft pick (Matteo Spagnolo was later selected). 2022 2nd-rd pick is more favorable of PHI and DEN
2. **2020-02-05** (ATL-HOU-MIN-DEN) — sent `Robert Covington`, received `Evan Turner, Malik Beasley, Juan Hernangomez, Jarred Vanderbilt`
   > In a 4-team trade, the Atlanta Hawks traded a 2024 2nd round draft pick (Pelle Larsson was later selected) to the Houston Rockets; the Atlanta Hawks traded Evan Turner and a 2020 1st round draft pick (Aleksej Pokusevski was later selected) to the Minnesota Timberwolves; the Denver Nuggets traded Malik Beasley, Juan Hernangomez and Jarred Vanderbilt to the Minnesota Timberwolves; the Houston Rockets traded Clint Capela and Nene to the Atlanta Hawks; the Houston Rockets traded Gerald Green and a 2020 1st round draft pick (Zeke Nnaji was later selected) to the Denver Nuggets; the Minnesota Timberwolves traded Keita Bates-Diop, Shabazz Napier and Noah Vonleh to the Denver Nuggets; and the Minnesota Timberwolves traded Jordan Bell and Robert Covington to the Houston Rockets. (Pick is GSW's 2024 second-round pick)
3. **2022-07-06** (MIN-UTA) — sent `Malik Beasley, Jarred Vanderbilt`, received `Rudy Gobert`
   > The Minnesota Timberwolves traded Malik Beasley, Patrick Beverley, Leandro Bolmaro, Walker Kessler, Jarred Vanderbilt, a 2023 1st round draft pick (Keyonte George was later selected), a 2025 1st round draft pick (Will Riley was later selected), a 2026 1st round draft pick, a 2027 1st round draft pick and a 2029 1st round draft pick to the Utah Jazz for Rudy Gobert. Minnesota also received a trade exception Utah also received a trade exception 2025 1st-rd pick is MIN own 2026 1st-rd pick was a right to swap, did not convey 2027 1st-rd pick is MIN own conditional 2029 1st-rd pick is MIN own

## 72. [score 17] OKC — 2016-06-23 → 2019-07-10 (3 links)

**Start:** Serge Ibaka
**Target:** Danilo Gallinari / Shai Gilgeous-Alexander

1. **2016-06-23** (OKC-ORL) — sent `Serge Ibaka`, received `Ersan İlyasova, Victor Oladipo, Domantas Sabonis`
   > The Oklahoma City Thunder traded Serge Ibaka to the Orlando Magic for Ersan İlyasova, Victor Oladipo and Domantas Sabonis.
2. **2017-07-06** (IND-OKC) — sent `Victor Oladipo, Domantas Sabonis`, received `Paul George`
   > The Indiana Pacers traded Paul George to the Oklahoma City Thunder for Victor Oladipo and Domantas Sabonis.
3. **2019-07-10** (LAC-OKC) — sent `Paul George`, received `Danilo Gallinari, Shai Gilgeous-Alexander`
   > The Los Angeles Clippers traded Danilo Gallinari, Shai Gilgeous-Alexander, a 2021 1st round draft pick (Tre Mann was later selected), a 2022 1st round draft pick (Jalen Williams was later selected), a 2023 1st round draft pick (Jaime Jaquez Jr. was later selected), a 2024 1st round draft pick (Dillon Jones was later selected), a 2025 1st round draft pick (Nique Clifford was later selected) and a 2026 1st round draft pick (Aday Mara was later selected) to the Oklahoma City Thunder for Paul George and a 2025 1st round draft pick (Yanic Konan Niederhauser was later selected). 2021 1st-rd pick is MIA own 2023 1st-rd pick was top-14 protected but eventually returned unprotected to MIA via trade 2026 1st-rd draft pick was LAC own 2025 1st-rd pick is right to swap with LAC OKC optioned to swap 2025 1st-rd pick

## 73. [score 17] OKC — 2018-07-25 → 2020-12-08 (3 links)

**Start:** Carmelo Anthony
**Target:** Al Horford / Théo Maledon / Vasilije Micić

1. **2018-07-25** (ATL-OKC-PHI) — sent `Carmelo Anthony`, received `Dennis Schröder, Timothé Luwawu-Cabarrot`
   > In a 3-team trade, the Atlanta Hawks traded Dennis Schröder to the Oklahoma City Thunder; the Atlanta Hawks traded Mike Muscala to the Philadelphia 76ers; the Oklahoma City Thunder traded Carmelo Anthony, a 2022 1st round draft pick, a 2024 2nd round draft pick (Ulrich Chomche was later selected) and a 2025 2nd round draft pick (Jahmai Mashack was later selected) to the Atlanta Hawks; the Philadelphia 76ers traded Justin Anderson to the Atlanta Hawks; and the Philadelphia 76ers traded Timothé Luwawu-Cabarrot to the Oklahoma City Thunder. 2022 1st-rd pick is top-14 protected, did not convey 2024 2nd-rd pick is OKC own 2025 2nd rd pick is OKC own
2. **2020-11-18** (LAL-OKC) — sent `Dennis Schroder`, received `Danny Green, Jaden McDaniels`
   > The Los Angeles Lakers traded Danny Green and Jaden McDaniels to the Oklahoma City Thunder for Dennis Schroder.
3. **2020-12-08** (OKC-PHI) — sent `Danny Green`, received `Al Horford, Théo Maledon, Vasilije Micić`
   > The Oklahoma City Thunder traded Terrance Ferguson, Danny Green and Vincent Poirier to the Philadelphia 76ers for Al Horford, Théo Maledon, Vasilije Micić and a 2026 1st round draft pick (Ebuka Okorie was later selected). 2025 1st-rd pick (PHI own) was top-6 protected, did not convey, became 2026 1st-rd pick (PHI own) which was top-4 protected and conveyed Philadelphia also received a trade exception from Oklahoma City.

## 74. [score 17] OKC — 2020-11-16 → 2020-11-27 (3 links)

**Start:** Abdel Nader / Chris Paul
**Target:** Justin Jackson / Trevor Ariza

1. **2020-11-16** (OKC-PHO) — sent `Abdel Nader, Chris Paul`, received `Ty Jerome, Jalen Lecque, Kelly Oubre Jr., Ricky Rubio`
   > The Oklahoma City Thunder traded Abdel Nader and Chris Paul to the Phoenix Suns for Ty Jerome, Jalen Lecque, Kelly Oubre Jr., Ricky Rubio and a 2022 1st round draft pick (Peyton Watson was later selected). 2022 1st-rd pick is PHO own
2. **2020-11-20** (MIN-NYK-OKC) — sent `Ricky Rubio`, received `James Johnson, Aleksej Pokusevski`
   > In a 3-team trade, the Minnesota Timberwolves traded Mathias Lessort and a 2023 2nd round draft pick (James Nnaji was later selected) to the New York Knicks; the Minnesota Timberwolves traded James Johnson, Aleksej Pokusevski and a 2024 2nd round draft pick (Kevin McCullar Jr. was later selected) to the Oklahoma City Thunder; the New York Knicks traded a 2020 1st round draft pick (Leandro Bolmaro was later selected) to the Minnesota Timberwolves; the Oklahoma City Thunder traded Jaden McDaniels and Ricky Rubio to the Minnesota Timberwolves; and the Oklahoma City Thunder traded Immanuel Quickley to the New York Knicks. 2023 2nd-rd pick was DET own 2024 2nd-rd pick is MIN own
3. **2020-11-27** (DAL-DET-OKC) — sent `James Johnson`, received `Justin Jackson, Trevor Ariza`
   > In a 3-team trade, the Dallas Mavericks traded Delon Wright to the Detroit Pistons; the Dallas Mavericks traded Justin Jackson, a 2023 2nd round draft pick (Maxwell Lewis was later selected) and a 2026 2nd round draft pick (Ryan Conwell was later selected) to the Oklahoma City Thunder; the Detroit Pistons traded Trevor Ariza to the Oklahoma City Thunder; and the Oklahoma City Thunder traded James Johnson to the Dallas Mavericks. more favorable 2023 2nd-rd pick ended up as DAL own 2026 2nd-rd pick was DAL own

## 75. [score 17] GSW — 2012-03-13 → 2013-07-10 (3 links)

**Start:** Kwame Brown / Monta Ellis / Ekpe Udoh
**Target:** Andre Iguodala / Kevin Murphy

1. **2012-03-13** (GSW-MIL) — sent `Kwame Brown, Monta Ellis, Ekpe Udoh`, received `Andrew Bogut, Stephen Jackson`
   > The Golden State Warriors traded Kwame Brown, Monta Ellis and Ekpe Udoh to the Milwaukee Bucks for Andrew Bogut and Stephen Jackson.
2. **2012-03-15** (GSW-SAS) — sent `Stephen Jackson`, received `T.J. Ford, Richard Jefferson`
   > The Golden State Warriors traded Stephen Jackson to the San Antonio Spurs for T.J. Ford, Richard Jefferson and a 2012 1st round draft pick (Festus Ezeli was later selected).
3. **2013-07-10** (DEN-GSW-UTA) — sent `Richard Jefferson`, received `Andre Iguodala, Kevin Murphy`
   > In a 3-team trade, the Denver Nuggets traded Andre Iguodala to the Golden State Warriors; the Denver Nuggets traded cash and a 2018 2nd round draft pick (Sviatoslav Mykhailiuk was later selected) to the Utah Jazz; the Golden State Warriors traded a 2018 2nd round draft pick (Thomas Welsh was later selected) to the Denver Nuggets; the Golden State Warriors traded Andris Biedriņš, Richard Jefferson, Brandon Rush, a 2014 1st round draft pick (Rodney Hood was later selected), a 2016 2nd round draft pick (Tyrone Wallace was later selected), a 2017 1st round draft pick (Josh Hart was later selected) and a 2017 2nd round draft pick (Alpha Kaba was later selected) to the Utah Jazz; the Utah Jazz traded Randy Foye to the Denver Nuggets; and the Utah Jazz traded Kevin Murphy to the Golden State Warriors.

## 76. [score 17] GSW — 2019-07-07 → 2025-02-06 (3 links)

**Start:** Kevin Durant
**Target:** Jimmy Butler

1. **2019-07-07** (BRK-GSW) — sent `Kevin Durant`, received `Treveon Graham, Shabazz Napier, D'Angelo Russell`
   > The Brooklyn Nets traded Treveon Graham, Shabazz Napier and D'Angelo Russell to the Golden State Warriors for Kevin Durant and a 2025 2nd round draft pick (Javon Small was later selected). Conditional 2020 1st-rd pick did not convey; else 2025 2nd-rd pick
2. **2020-02-06** (GSW-MIN) — sent `D'Angelo Russell`, received `Andrew Wiggins`
   > The Golden State Warriors traded Jacob Evans, D'Angelo Russell and Omari Spellman to the Minnesota Timberwolves for Andrew Wiggins, a 2021 1st round draft pick (Jonathan Kuminga was later selected) and a 2021 2nd round draft pick (Miles McBride was later selected). 2021 1st-rd pick is top-3 protected
3. **2025-02-06** (DET-UTA-GSW-MIA-TOR) — sent `Andrew Wiggins`, received `Jimmy Butler`
   > In a 5-team trade, the Detroit Pistons traded K.J. Martin to the Utah Jazz; the Golden State Warriors traded Dennis Schroder, Lindy Waters III and a 2031 2nd round draft pick to the Detroit Pistons; the Golden State Warriors traded Kyle Anderson, Andrew Wiggins and a 2025 1st round draft pick (Kasparas Jakucionis was later selected) to the Miami Heat; the Miami Heat traded cash and Jimmy Butler to the Golden State Warriors; the Miami Heat traded cash and a 2026 2nd round draft pick (Lajae Jones was later selected) to the Toronto Raptors; the Miami Heat traded cash and Josh Richardson to the Utah Jazz; the Toronto Raptors traded Davion Mitchell to the Miami Heat; and the Utah Jazz traded P.J. Tucker to the Toronto Raptors. Golden State also received multiple trade exceptions 2031 2nd-rd pick is GSW own 2026 2nd-rd pick was LAL own Miami also received multiple trade exceptions protected 2025 1st-rd pick is GSW own Utah also received a trade exception

## 77. [score 17] MIL — 2020-11-23 → 2023-09-27 (3 links)

**Start:** R.J. Hampton / Eric Bledsoe / George Hill
**Target:** Damian Lillard

1. **2020-11-23** (DEN-OKC-MIL-NOP) — sent `R.J. Hampton, Eric Bledsoe, George Hill`, received `Jrue Holiday, Sam Merrill`
   > In a 4-team trade, the Denver Nuggets traded a 2023 1st round draft pick (Nick Smith Jr. was later selected) to the Oklahoma City Thunder; the Milwaukee Bucks traded R.J. Hampton to the Denver Nuggets; the Milwaukee Bucks traded Eric Bledsoe, a 2024 1st round draft pick (Yves Missi was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2026 1st round draft pick and a 2027 1st round draft pick to the New Orleans Pelicans; the Milwaukee Bucks traded George Hill to the Oklahoma City Thunder; the New Orleans Pelicans traded Jrue Holiday and Sam Merrill to the Milwaukee Bucks; the New Orleans Pelicans traded Zylan Cheatham, Joshia Gray, Darius Miller, Kenrich Williams, a 2023 2nd round draft pick (Hunter Tyson was later selected) and a 2024 2nd round draft pick (Tyler Kolek was later selected) to the Oklahoma City Thunder; and the Oklahoma City Thunder traded Steven Adams to the New Orleans Pelicans. New Orleans acquires right to swap 2024 1st-rd pick with Milwaukee 2025 1st-rd pick is MIL own New Orleans acquired right to swap 2026 1st-rd pick with Milwaukee, did not convey 2027 1st-rd pick is MIL own 2023 top-14 protected 1st-rd pick was DEN own 2023 2nd-rd pick was WAS own 2024 2nd-rd pick is CHO own
2. **2021-08-07** (MEM-MIL) — sent `Sam Merrill`, received `Grayson Allen`
   > The Memphis Grizzlies traded Grayson Allen and cash to the Milwaukee Bucks for Sam Merrill, a 2024 2nd round draft pick (Cam Christie was later selected) and a 2026 2nd round draft pick (Richie Saunders was later selected). Memphis also received a trade exception Milwaukee also received a trade exception 2024 2nd-rd pick is more favorable 2026 2nd-rd pick was more favorable of IND and MIA, became IND 2026 2nd-rd pick
3. **2023-09-27** (MIL-PHO-POR) — sent `Grayson Allen`, received `Damian Lillard`
   > In a 3-team trade, the Milwaukee Bucks traded Grayson Allen to the Phoenix Suns; the Milwaukee Bucks traded Jrue Holiday, a 2028 1st round draft pick, a 2029 1st round draft pick and a 2030 1st round draft pick to the Portland Trail Blazers; the Phoenix Suns traded Deandre Ayton and Toumani Camara to the Portland Trail Blazers; the Portland Trail Blazers traded Damian Lillard to the Milwaukee Bucks; and the Portland Trail Blazers traded Keon Johnson, Nassir Little and Jusuf Nurkic to the Phoenix Suns. 2029 1st-rd pick is MIL own 2028 1st-rd pick is a swap 2030 1st-rd pick is a swap

## 78. [score 17] MIA — 2015-02-19 → 2024-01-23 (3 links)

**Start:** Norris Cole / Justin Hamilton / Shawne Williams / Danny Granger
**Target:** Terry Rozier

1. **2015-02-19** (MIA-NOP-PHO) — sent `Norris Cole, Justin Hamilton, Shawne Williams, Danny Granger`, received `Goran Dragić, Zoran Dragić`
   > In a 3-team trade, the Miami Heat traded Norris Cole, Justin Hamilton and Shawne Williams to the New Orleans Pelicans; the Miami Heat traded Danny Granger, a 2017 1st round draft pick and a 2021 1st round draft pick (Tre Mann was later selected) to the Phoenix Suns; the New Orleans Pelicans traded John Salmons to the Phoenix Suns; and the Phoenix Suns traded Goran Dragić and Zoran Dragić to the Miami Heat. Conditional 2017 1st-rd pick did not convey
2. **2021-08-06** (MIA-TOR) — sent `Goran Dragic`, received `Kyle Lowry`
   > The Miami Heat traded Precious Achiuwa and Goran Dragic to the Toronto Raptors for Kyle Lowry. Toronto also received a trade exception
3. **2024-01-23** (CHO-MIA) — sent `Kyle Lowry`, received `Terry Rozier`
   > The Charlotte Hornets traded Terry Rozier and a 2026 2nd round draft pick (Otega Oweh was later selected) to the Miami Heat for Kyle Lowry and a 2027 1st round draft pick. Miami also received a trade exception 2027 1st-rd pick (MIA own) is lottery protected, becomes a 2028 unprotected 1st-rd pick if it does not convey in 2027 CHO sent pick to resolve dispute over January 2024 Terry Rozier trade because of NBA and FBI gambling investigations. 2026 2nd-rd pick was more favorable of GSW and DEN, became GSW 2026 2nd-rd pick

## 79. [score 17] MIA — 2019-07-06 → 2025-07-07 (3 links)

**Start:** Josh Richardson / Hassan Whiteside
**Target:** Norman Powell

1. **2019-07-06** (LAC-MIA-PHI-POR) — sent `Josh Richardson, Hassan Whiteside`, received `Jimmy Butler, Meyers Leonard`
   > In a 4-team trade, the Los Angeles Clippers traded cash to the Miami Heat; the Miami Heat traded a 2023 1st round draft pick (Jaime Jaquez Jr. was later selected) to the Los Angeles Clippers; the Miami Heat traded Josh Richardson to the Philadelphia 76ers; the Miami Heat traded Hassan Whiteside to the Portland Trail Blazers; the Philadelphia 76ers traded Mathias Lessort to the Los Angeles Clippers; the Philadelphia 76ers traded Jimmy Butler to the Miami Heat; the Portland Trail Blazers traded Maurice Harkless to the Los Angeles Clippers; and the Portland Trail Blazers traded Meyers Leonard to the Miami Heat. $110K 2023 1st-rd pick was top-14 protected but eventually returned unprotected to MIA via trade
2. **2025-02-06** (DET-UTA-GSW-MIA-TOR) — sent `Jimmy Butler`, received `Kyle Anderson, Andrew Wiggins, Davion Mitchell`
   > In a 5-team trade, the Detroit Pistons traded K.J. Martin to the Utah Jazz; the Golden State Warriors traded Dennis Schroder, Lindy Waters III and a 2031 2nd round draft pick to the Detroit Pistons; the Golden State Warriors traded Kyle Anderson, Andrew Wiggins and a 2025 1st round draft pick (Kasparas Jakucionis was later selected) to the Miami Heat; the Miami Heat traded cash and Jimmy Butler to the Golden State Warriors; the Miami Heat traded cash and a 2026 2nd round draft pick (Lajae Jones was later selected) to the Toronto Raptors; the Miami Heat traded cash and Josh Richardson to the Utah Jazz; the Toronto Raptors traded Davion Mitchell to the Miami Heat; and the Utah Jazz traded P.J. Tucker to the Toronto Raptors. Golden State also received multiple trade exceptions 2031 2nd-rd pick is GSW own 2026 2nd-rd pick was LAL own Miami also received multiple trade exceptions protected 2025 1st-rd pick is GSW own Utah also received a trade exception
3. **2025-07-07** (LAC-MIA-UTA) — sent `Kyle Anderson`, received `Norman Powell`
   > In a 3-team trade, the Los Angeles Clippers traded Norman Powell to the Miami Heat; the Los Angeles Clippers traded cash and a 2027 2nd round draft pick to the Utah Jazz; the Miami Heat traded Kyle Anderson and Kevin Love to the Utah Jazz; and the Utah Jazz traded John Collins to the Los Angeles Clippers. Utah also received a trade exception 2027 2nd-rd pick is LAC own

## 80. [score 17] HOU — 2012-10-27 → 2024-02-01 (3 links)

**Start:** Jeremy Lamb / Kevin Martin
**Target:** Steven Adams

1. **2012-10-27** (HOU-OKC) — sent `Jeremy Lamb, Kevin Martin`, received `Cole Aldrich, Daequan Cook, James Harden, Lazar Hayward`
   > The Houston Rockets traded Jeremy Lamb, Kevin Martin, a 2013 1st round draft pick (Steven Adams was later selected), a 2013 2nd round draft pick (Álex Abrines was later selected) and a 2014 1st round draft pick (Mitch McGary was later selected) to the Oklahoma City Thunder for Cole Aldrich, Daequan Cook, James Harden and Lazar Hayward.
2. **2021-01-16** (BRK-CLE-HOU-IND) — sent `James Harden`, received `Rodions Kurucs, Dante Exum, Victor Oladipo`
   > In a 4-team trade, the Brooklyn Nets traded Jarrett Allen and Taurean Prince to the Cleveland Cavaliers; the Brooklyn Nets traded Rodions Kurucs, a 2021 1st round draft pick, a 2022 1st round draft pick (Tari Eason was later selected), a 2023 1st round draft pick, a 2024 1st round draft pick (Reed Sheppard was later selected), a 2025 1st round draft pick, a 2026 1st round draft pick (Mikel Brown Jr. was later selected) and a 2027 1st round draft pick to the Houston Rockets; the Brooklyn Nets traded Caris Levert to the Indiana Pacers; the Cleveland Cavaliers traded Dante Exum and a 2022 1st round draft pick (MarJon Beauchamp was later selected) to the Houston Rockets; the Cleveland Cavaliers traded cash and a 2024 2nd round draft pick (Tristen Newton was later selected) to the Indiana Pacers; the Houston Rockets traded James Harden to the Brooklyn Nets; the Houston Rockets traded a 2023 2nd round draft pick (Jalen Pickett was later selected) to the Indiana Pacers; and the Indiana Pacers traded Victor Oladipo to the Houston Rockets. 2024 2nd-rd pick is CLE own 2026 1st-rd draft pick was BRK own 2021 1st-rd pick was a right to swap, did not convey 2023 1st-rd pick was a right to swap, did not convey 2025 1st-rd pick is a right to swap; later renegotiated in another trade 2027 1st-rd pick is a right to swap 2022 1st-rd draft pick was MIL own 2023 2nd-rd pick was HOU own
3. **2024-02-01** (HOU-MEM) — sent `Victor Oladipo`, received `Steven Adams`
   > The Houston Rockets traded Victor Oladipo, a 2024 2nd round draft pick (Ulrich Chomche was later selected), a 2024 2nd round draft pick (Jaylen Wells was later selected) and a 2025 2nd round draft pick (Will Richard was later selected) to the Memphis Grizzlies for Steven Adams. Memphis also received a trade exception 2024 2nd-rd pick is more favorable 2024 2nd-rd pick is OKC own 2025 2nd-rd pick is more favorable of HOU, OKC; became HOU pick

## 81. [score 17] HOU — 2020-02-05 → 2020-11-24 (3 links)

**Start:** Clint Capela / Nene / Gerald Green
**Target:** Christian Wood

1. **2020-02-05** (ATL-HOU-MIN-DEN) — sent `Clint Capela, Nene, Gerald Green`, received `Jordan Bell, Robert Covington`
   > In a 4-team trade, the Atlanta Hawks traded a 2024 2nd round draft pick (Pelle Larsson was later selected) to the Houston Rockets; the Atlanta Hawks traded Evan Turner and a 2020 1st round draft pick (Aleksej Pokusevski was later selected) to the Minnesota Timberwolves; the Denver Nuggets traded Malik Beasley, Juan Hernangomez and Jarred Vanderbilt to the Minnesota Timberwolves; the Houston Rockets traded Clint Capela and Nene to the Atlanta Hawks; the Houston Rockets traded Gerald Green and a 2020 1st round draft pick (Zeke Nnaji was later selected) to the Denver Nuggets; the Minnesota Timberwolves traded Keita Bates-Diop, Shabazz Napier and Noah Vonleh to the Denver Nuggets; and the Minnesota Timberwolves traded Jordan Bell and Robert Covington to the Houston Rockets. (Pick is GSW's 2024 second-round pick)
2. **2020-11-22** (HOU-POR) — sent `Robert Covington`, received `Trevor Ariza, Isaiah Stewart`
   > The Houston Rockets traded Robert Covington to the Portland Trail Blazers for Trevor Ariza, Isaiah Stewart and a 2021 1st round draft pick (Usman Garuba was later selected). Portland also received a trade exception. 2021 1rst-rd pick is lottery protected
3. **2020-11-24** (DET-HOU) — sent `Trevor Ariza, Isaiah Stewart`, received `Christian Wood`
   > The Detroit Pistons traded Christian Wood, a 2021 2nd round draft pick (Luka Garza was later selected) and a 2025 1st round draft pick (Joan Beringer was later selected) to the Houston Rockets for Trevor Ariza, Isaiah Stewart, cash and a 2027 2nd round draft pick. 1st-rd pick did not convey in 2021 or 2022, remains protected in 2023, 2024 2021 2nd-rd pick is LAL own 2027 2nd-rd pick is HOU own

## 82. [score 17] PHO — 2018-12-17 → 2023-06-23 (3 links)

**Start:** Trevor Ariza
**Target:** Bradley Beal / Jordan Goodwin / Isaiah Todd

1. **2018-12-17** (PHO-WAS) — sent `Trevor Ariza`, received `Kelly Oubre Jr., Austin Rivers`
   > The Phoenix Suns traded Trevor Ariza to the Washington Wizards for Kelly Oubre Jr. and Austin Rivers.
2. **2020-11-16** (OKC-PHO) — sent `Kelly Oubre Jr.`, received `Abdel Nader, Chris Paul`
   > The Oklahoma City Thunder traded Abdel Nader and Chris Paul to the Phoenix Suns for Ty Jerome, Jalen Lecque, Kelly Oubre Jr., Ricky Rubio and a 2022 1st round draft pick (Peyton Watson was later selected). 2022 1st-rd pick is PHO own
3. **2023-06-23** (IND-WAS-PHO) — sent `Chris Paul`, received `Bradley Beal, Jordan Goodwin, Isaiah Todd`
   > In a 3-team trade, the Indiana Pacers traded Bilal Coulibaly to the Washington Wizards; the Phoenix Suns traded a 2028 2nd round draft pick to the Indiana Pacers; the Phoenix Suns traded Chris Paul, Landry Shamet, cash, a 2024 1st round draft pick, a 2024 2nd round draft pick (Melvin Ajinça was later selected), a 2025 2nd round draft pick (Micah Peavy was later selected), a 2026 1st round draft pick, a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2028 1st round draft pick, a 2030 1st round draft pick and a 2030 2nd round draft pick to the Washington Wizards; the Washington Wizards traded Jarace Walker and a 2029 2nd round draft pick to the Indiana Pacers; and the Washington Wizards traded Bradley Beal, Jordan Goodwin and Isaiah Todd to the Phoenix Suns. 2024 1st-rd pick was a right to swap, did not convey 2026 1st-rd pick was a right to swap, did not convey 2028 1st-rd pick is a right to swap 2030 1st-rd pick is a right to swap 2025 2nd-rd pick is PHO own 2026 2nd-rd pick was PHO own Teams also received trade exceptions

## 83. [score 17] POR — 2020-11-22 → 2023-09-27 (3 links)

**Start:** Trevor Ariza / Isaiah Stewart
**Target:** Jrue Holiday / Deandre Ayton / Toumani Camara

1. **2020-11-22** (HOU-POR) — sent `Trevor Ariza, Isaiah Stewart`, received `Robert Covington`
   > The Houston Rockets traded Robert Covington to the Portland Trail Blazers for Trevor Ariza, Isaiah Stewart and a 2021 1st round draft pick (Usman Garuba was later selected). Portland also received a trade exception. 2021 1rst-rd pick is lottery protected
2. **2022-02-04** (LAC-POR) — sent `Robert Covington`, received `Eric Bledsoe, Keon Johnson, Justise Winslow`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own
3. **2023-09-27** (MIL-PHO-POR) — sent `Keon Johnson`, received `Jrue Holiday, Deandre Ayton, Toumani Camara`
   > In a 3-team trade, the Milwaukee Bucks traded Grayson Allen to the Phoenix Suns; the Milwaukee Bucks traded Jrue Holiday, a 2028 1st round draft pick, a 2029 1st round draft pick and a 2030 1st round draft pick to the Portland Trail Blazers; the Phoenix Suns traded Deandre Ayton and Toumani Camara to the Portland Trail Blazers; the Portland Trail Blazers traded Damian Lillard to the Milwaukee Bucks; and the Portland Trail Blazers traded Keon Johnson, Nassir Little and Jusuf Nurkic to the Phoenix Suns. 2029 1st-rd pick is MIL own 2028 1st-rd pick is a swap 2030 1st-rd pick is a swap

## 84. [score 17] POR — 2022-02-04 → 2023-10-01 (3 links)

**Start:** Robert Covington / Norman Powell
**Target:** Malcolm Brogdon / Robert Williams

1. **2022-02-04** (LAC-POR) — sent `Robert Covington, Norman Powell`, received `Eric Bledsoe, Keon Johnson, Justise Winslow`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own
2. **2023-09-27** (MIL-PHO-POR) — sent `Keon Johnson`, received `Jrue Holiday, Deandre Ayton, Toumani Camara`
   > In a 3-team trade, the Milwaukee Bucks traded Grayson Allen to the Phoenix Suns; the Milwaukee Bucks traded Jrue Holiday, a 2028 1st round draft pick, a 2029 1st round draft pick and a 2030 1st round draft pick to the Portland Trail Blazers; the Phoenix Suns traded Deandre Ayton and Toumani Camara to the Portland Trail Blazers; the Portland Trail Blazers traded Damian Lillard to the Milwaukee Bucks; and the Portland Trail Blazers traded Keon Johnson, Nassir Little and Jusuf Nurkic to the Phoenix Suns. 2029 1st-rd pick is MIL own 2028 1st-rd pick is a swap 2030 1st-rd pick is a swap
3. **2023-10-01** (BOS-POR) — sent `Jrue Holiday`, received `Malcolm Brogdon, Robert Williams`
   > The Boston Celtics traded Malcolm Brogdon, Robert Williams, a 2024 1st round draft pick (Bub Carrington was later selected) and a 2029 1st round draft pick to the Portland Trail Blazers for Jrue Holiday. 2024 conditional 1st-rd pick is GSW own 2029 1st-rd pick is BOS own, Portland also receives a trade exception

## 85. [score 17] UTA — 2018-02-08 → 2023-02-09 (3 links)

**Start:** Rodney Hood / Joe Johnson
**Target:** Damian Jones / Juan Toscano-Anderson / Russell Westbrook

1. **2018-02-08** (CLE-SAC-UTA) — sent `Rodney Hood, Joe Johnson`, received `Jae Crowder, Derrick Rose`
   > In a 3-team trade, the Cleveland Cavaliers traded Dimitrios Agravanis, Iman Shumpert, $2.1M cash and a 2020 2nd round draft pick (Skylar Mays was later selected) to the Sacramento Kings; the Cleveland Cavaliers traded Jae Crowder, Derrick Rose and a 2024 2nd round draft pick to the Utah Jazz; the Sacramento Kings traded Artūras Gudaitis and George Hill to the Cleveland Cavaliers; the Utah Jazz traded Rodney Hood to the Cleveland Cavaliers; and the Utah Jazz traded Joe Johnson and $1.1M cash to the Sacramento Kings. (UTA received right to exchange 2024 second-round pick with CLE, did not convey.) (SAC receives MIA 2020 second-round pick from CLE.)
2. **2019-07-06** (MEM-UTA) — sent `Jae Crowder`, received `Mike Conley`
   > The Memphis Grizzlies traded Mike Conley to the Utah Jazz for Grayson Allen, Darius Bazley, Jae Crowder, Kyle Korver and a 2022 1st round draft pick (Walker Kessler was later selected). conditional pick protected in 2020 and 2021, conveyed 2022
3. **2023-02-09** (LAL-MIN-UTA) — sent `Mike Conley`, received `Damian Jones, Juan Toscano-Anderson, Russell Westbrook`
   > In a 3-team trade, the Los Angeles Lakers traded a 2024 2nd round draft pick (Bobi Klintman was later selected) to the Minnesota Timberwolves; the Los Angeles Lakers traded Damian Jones, Juan Toscano-Anderson, Russell Westbrook and a 2027 1st round draft pick to the Utah Jazz; the Minnesota Timberwolves traded D'Angelo Russell to the Los Angeles Lakers; the Utah Jazz traded Malik Beasley and Jarred Vanderbilt to the Los Angeles Lakers; and the Utah Jazz traded Nickeil Alexander-Walker, Mike Conley, a 2025 2nd round draft pick (Rasheer Fleming was later selected) and a 2026 2nd round draft pick (Trevon Brazile was later selected) to the Minnesota Timberwolves. Los Angeles also received multiple trade exceptions Minnesota also received a trade exception 2024 2nd-rd pick is least favorable 2025 2nd-rd pick is UTA own 2026 2nd-rd pick was UTA own Utah also received multiple trade exceptions conditional 2027 1st-rd pick is LAL own

## 86. [score 17] BOS — 2013-07-12 → 2014-12-18 (3 links)

**Start:** Kevin Garnett / Paul Pierce / Jason Terry / D.J. White
**Target:** Jae Crowder / Jameer Nelson / Brandan Wright

1. **2013-07-12** (BOS-BRK) — sent `Kevin Garnett, Paul Pierce, Jason Terry, D.J. White`, received `Keith Bogans, MarShon Brooks, Kris Humphries, Kris Joseph, Gerald Wallace`
   > The Boston Celtics traded Kevin Garnett, Paul Pierce, Jason Terry, D.J. White, a 2017 1st round draft pick (Kyle Kuzma was later selected) and a 2017 2nd round draft pick (Sasha Vezenkov was later selected) to the Brooklyn Nets for Keith Bogans, MarShon Brooks, Kris Humphries, Kris Joseph, Gerald Wallace, a 2014 1st round draft pick (James Young was later selected), a 2016 1st round draft pick (Jaylen Brown was later selected), a 2017 1st round draft pick (Markelle Fultz was later selected) and a 2018 1st round draft pick (Collin Sexton was later selected). (BOS got 2017 #1 overall pick from BRK as result of pick swap)
2. **2014-09-25** (BOS-CLE) — sent `Keith Bogans`, received `John Lucas III, Erik Murphy, Dwight Powell, Malcolm Thomas`
   > The Boston Celtics traded Keith Bogans, a 2015 2nd round draft pick and a 2017 2nd round draft pick to the Cleveland Cavaliers for John Lucas III, Erik Murphy, Dwight Powell, Malcolm Thomas, a 2016 2nd round draft pick (Abdel Nader was later selected) and a 2017 2nd round draft pick (Kadeem Allen was later selected). Conditional 2015 2nd-rd pick did not convey Conditional 2017 2nd-rd pick did not convey
3. **2014-12-18** (BOS-DAL) — sent `Dwight Powell`, received `Jae Crowder, Jameer Nelson, Brandan Wright`
   > The Boston Celtics traded Dwight Powell and Rajon Rondo to the Dallas Mavericks for Jae Crowder, Jameer Nelson, Brandan Wright, a 2016 1st round draft pick (Guerschon Yabusele was later selected) and a 2016 2nd round draft pick (Demetrius Jackson was later selected). (Boston also receives $13M trade exception.)

## 87. [score 17] BOS — 2019-07-06 → 2021-07-31 (3 links)

**Start:** Terry Rozier
**Target:** Josh Richardson

1. **2019-07-06** (BOS-CHO) — sent `Terry Rozier`, received `Kemba Walker`
   > The Boston Celtics traded Terry Rozier and a 2020 2nd round draft pick (Grant Riller was later selected) to the Charlotte Hornets for Kemba Walker and a 2020 2nd round draft pick (Yam Madar was later selected). (2020 second-round pick is BRK's or NYK's, whichever is least favorable.) (top-53 protected)
2. **2021-06-18** (BOS-OKC) — sent `Kemba Walker`, received `Moses Brown, Al Horford`
   > The Boston Celtics traded Kemba Walker, a 2021 1st round draft pick (Alperen Şengün was later selected) and a 2025 2nd round draft pick (Kobe Sanders was later selected) to the Oklahoma City Thunder for Moses Brown, Al Horford and a 2023 2nd round draft pick (Amari Bailey was later selected). 2021 1st-rd pick is BOS own 2025 2nd-rd pick (more favorable of Celtics, Grizzlies); became MEM pick Boston also received a trade exception
3. **2021-07-31** (BOS-DAL) — sent `Moses Brown`, received `Josh Richardson`
   > The Boston Celtics traded Moses Brown to the Dallas Mavericks for Josh Richardson. Boston received a trade exception Dallas received a trade exception

## 88. [score 17] BOS — 2021-06-18 → 2022-02-10 (3 links)

**Start:** Kemba Walker
**Target:** Derrick White

1. **2021-06-18** (BOS-OKC) — sent `Kemba Walker`, received `Moses Brown, Al Horford`
   > The Boston Celtics traded Kemba Walker, a 2021 1st round draft pick (Alperen Şengün was later selected) and a 2025 2nd round draft pick (Kobe Sanders was later selected) to the Oklahoma City Thunder for Moses Brown, Al Horford and a 2023 2nd round draft pick (Amari Bailey was later selected). 2021 1st-rd pick is BOS own 2025 2nd-rd pick (more favorable of Celtics, Grizzlies); became MEM pick Boston also received a trade exception
2. **2021-07-31** (BOS-DAL) — sent `Moses Brown`, received `Josh Richardson`
   > The Boston Celtics traded Moses Brown to the Dallas Mavericks for Josh Richardson. Boston received a trade exception Dallas received a trade exception
3. **2022-02-10** (BOS-SAS) — sent `Josh Richardson`, received `Derrick White`
   > The Boston Celtics traded Romeo Langford, Josh Richardson, a 2022 1st round draft pick (Blake Wesley was later selected) and a 2028 1st round draft pick to the San Antonio Spurs for Derrick White. Boston also received a trade exception 2022 1st-rd pick is BOS own and is top-4 protected 2028 1st-rd pick is a right to swap

## 89. [score 17] SAC — 2010-02-18 → 2018-02-08 (3 links)

**Start:** Hilton Armstrong / Kevin Martin / Sergio Rodríguez
**Target:** Dimitrios Agravanis / Iman Shumpert / Joe Johnson

1. **2010-02-18** (HOU-NYK-SAC) — sent `Hilton Armstrong, Kevin Martin, Sergio Rodríguez`, received `Joey Dorsey, Carl Landry, Larry Hughes`
   > In a 3-team trade, the Houston Rockets traded Tracy McGrady to the New York Knicks; the Houston Rockets traded Joey Dorsey and Carl Landry to the Sacramento Kings; the New York Knicks traded Jordan Hill, Jared Jeffries and a 2012 1st round draft pick (Royce White was later selected) to the Houston Rockets; the New York Knicks traded Larry Hughes to the Sacramento Kings; the Sacramento Kings traded Hilton Armstrong and Kevin Martin to the Houston Rockets; and the Sacramento Kings traded Sergio Rodríguez to the New York Knicks. Houston had the option to swap 1st round draft picks with New York in 2011 but did not do so.
2. **2015-07-09** (PHI-SAC) — sent `Carl Landry`, received `Artūras Gudaitis, Luka Mitrović`
   > The Philadelphia 76ers traded Artūras Gudaitis, Luka Mitrović and a 2017 1st round draft pick (De'Aaron Fox was later selected) to the Sacramento Kings for Carl Landry, Nik Stauskas, Jason Thompson, a 2017 1st round draft pick (Jayson Tatum was later selected) and a 2019 1st round draft pick (Romeo Langford was later selected). (76ers exercised right to swap picks in 2017 NBA Draft, taking #3 overall pick and sending back #5 overall pick)
3. **2018-02-08** (CLE-SAC-UTA) — sent `Artūras Gudaitis`, received `Dimitrios Agravanis, Iman Shumpert, Joe Johnson`
   > In a 3-team trade, the Cleveland Cavaliers traded Dimitrios Agravanis, Iman Shumpert, $2.1M cash and a 2020 2nd round draft pick (Skylar Mays was later selected) to the Sacramento Kings; the Cleveland Cavaliers traded Jae Crowder, Derrick Rose and a 2024 2nd round draft pick to the Utah Jazz; the Sacramento Kings traded Artūras Gudaitis and George Hill to the Cleveland Cavaliers; the Utah Jazz traded Rodney Hood to the Cleveland Cavaliers; and the Utah Jazz traded Joe Johnson and $1.1M cash to the Sacramento Kings. (UTA received right to exchange 2024 second-round pick with CLE, did not convey.) (SAC receives MIA 2020 second-round pick from CLE.)

## 90. [score 17] SAC — 2017-06-22 → 2024-07-08 (3 links)

**Start:** Zach Collins
**Target:** DeMar DeRozan

1. **2017-06-22** (POR-SAC) — sent `Zach Collins`, received `Harry Giles, Justin Jackson`
   > The Portland Trail Blazers traded Harry Giles and Justin Jackson to the Sacramento Kings for Zach Collins.
2. **2019-02-07** (DAL-SAC) — sent `Justin Jackson`, received `Harrison Barnes`
   > The Dallas Mavericks traded Harrison Barnes to the Sacramento Kings for Justin Jackson and Zach Randolph.
3. **2024-07-08** (CHI-SAC-SAS) — sent `Harrison Barnes`, received `DeMar DeRozan`
   > In a 3-team trade, the Chicago Bulls traded DeMar DeRozan to the Sacramento Kings; the Sacramento Kings traded cash, Chris Duarte, a 2025 2nd round draft pick (Rocco Zikarsky was later selected) and a 2028 2nd round draft pick to the Chicago Bulls; and the Sacramento Kings traded Harrison Barnes and a 2031 1st round draft pick to the San Antonio Spurs. Sacramento also received a trade exception 2031 1st-rd pick is a swap 2025 2nd-rd pick is SAC own 2028 2nd-rd pick is SAC own Chicago also received a trade exception

## 91. [score 17] SAC — 2022-02-08 → 2025-02-03 (3 links)

**Start:** Tyrese Haliburton / Buddy Hield / Tristan Thompson
**Target:** Zach LaVine / Sidy Cissoko

1. **2022-02-08** (IND-SAC) — sent `Tyrese Haliburton, Buddy Hield, Tristan Thompson`, received `Justin Holiday, Jeremy Lamb, Domantas Sabonis`
   > The Indiana Pacers traded Justin Holiday, Jeremy Lamb, Domantas Sabonis and a 2023 2nd round draft pick (Jordan Walsh was later selected) to the Sacramento Kings for Tyrese Haliburton, Buddy Hield and Tristan Thompson. Indiana also received a trade exception Sacramento also received a trade exception 2023 2nd-rd pick was IND own
2. **2022-07-06** (ATL-SAC) — sent `Justin Holiday`, received `Kevin Huerter`
   > The Atlanta Hawks traded Kevin Huerter to the Sacramento Kings for Maurice Harkless, Justin Holiday and a 2025 1st round draft pick (Derik Queen was later selected). conditional 2024 1st-rd pick was SAC own, did not convey. Atlanta also receives a trade exception; became 2025 1st-rd pick
3. **2025-02-03** (CHI-SAC-SAS) — sent `Kevin Huerter`, received `Zach LaVine, Sidy Cissoko`
   > In a 3-team trade, the Chicago Bulls traded Zach LaVine and a 2028 2nd round draft pick to the Sacramento Kings; the Sacramento Kings traded Kevin Huerter to the Chicago Bulls; the Sacramento Kings traded De'Aaron Fox and Jordan McLaughlin to the San Antonio Spurs; the San Antonio Spurs traded Zach Collins, Tre Jones and a 2025 1st round draft pick (Noa Essengue was later selected) to the Chicago Bulls; and the San Antonio Spurs traded Sidy Cissoko, a 2025 2nd round draft pick (Maxime Raynaud was later selected), a 2026 2nd round draft pick (Emanuel Sharp was later selected), a 2027 1st round draft pick, a 2027 2nd round draft pick, a 2028 2nd round draft pick and a 2031 1st round draft pick to the Sacramento Kings. Chicago also received a trade exception conditional 2025 1st-rd pick is CHI own Sacramento also received a trade exception conditional 2025 1st-rd pick was CHO own, did not convey; became 2026 and 2027 CHO 2nd-rd picks 2027 1st-rd pick is SAS own 2031 1st-rd pick is MIN own 2025 2nd-rd pick is CHI own conditional 2028 2nd-rd pick is DEN own 2028 2nd-rd pick is CHI own conditional 2025 1st-rd pick is CHO own, did not convey; became 2026 and 2027 2nd-rd picks

## 92. [score 17] CHI — 2017-06-22 → 2026-02-03 (3 links)

**Start:** Jimmy Butler / Justin Patton
**Target:** Jaden Ivey / Mike Conley

1. **2017-06-22** (CHI-MIN) — sent `Jimmy Butler, Justin Patton`, received `Kris Dunn, Zach LaVine, Lauri Markkanen`
   > The Chicago Bulls traded Jimmy Butler and Justin Patton to the Minnesota Timberwolves for Kris Dunn, Zach LaVine and Lauri Markkanen.
2. **2025-02-03** (CHI-SAC-SAS) — sent `Zach LaVine`, received `Kevin Huerter, Zach Collins, Tre Jones`
   > In a 3-team trade, the Chicago Bulls traded Zach LaVine and a 2028 2nd round draft pick to the Sacramento Kings; the Sacramento Kings traded Kevin Huerter to the Chicago Bulls; the Sacramento Kings traded De'Aaron Fox and Jordan McLaughlin to the San Antonio Spurs; the San Antonio Spurs traded Zach Collins, Tre Jones and a 2025 1st round draft pick (Noa Essengue was later selected) to the Chicago Bulls; and the San Antonio Spurs traded Sidy Cissoko, a 2025 2nd round draft pick (Maxime Raynaud was later selected), a 2026 2nd round draft pick (Emanuel Sharp was later selected), a 2027 1st round draft pick, a 2027 2nd round draft pick, a 2028 2nd round draft pick and a 2031 1st round draft pick to the Sacramento Kings. Chicago also received a trade exception conditional 2025 1st-rd pick is CHI own Sacramento also received a trade exception conditional 2025 1st-rd pick was CHO own, did not convey; became 2026 and 2027 CHO 2nd-rd picks 2027 1st-rd pick is SAS own 2031 1st-rd pick is MIN own 2025 2nd-rd pick is CHI own conditional 2028 2nd-rd pick is DEN own 2028 2nd-rd pick is CHI own conditional 2025 1st-rd pick is CHO own, did not convey; became 2026 and 2027 2nd-rd picks
3. **2026-02-03** (CHI-DET-MIN) — sent `Kevin Huerter`, received `Jaden Ivey, Mike Conley`
   > In a 3-team trade, the Chicago Bulls traded Kevin Huerter and Dario Saric to the Detroit Pistons; the Detroit Pistons traded Jaden Ivey to the Chicago Bulls; the Detroit Pistons traded cash and a 2026 1st round draft pick (Joshua Jefferson was later selected) to the Minnesota Timberwolves; the Minnesota Timberwolves traded Mike Conley to the Chicago Bulls; and the Minnesota Timberwolves traded a 2026 1st round draft pick (Karim López was later selected) to the Detroit Pistons. 2026 1st-rd pick was a protected (top-19) right to swap, became MIN 2026 1st-rd pick Minnesota also received a trade exception DET optioned to swap 2026 1st-rd pick

## 93. [score 17] CHI — 2019-02-06 → 2021-08-11 (3 links)

**Start:** Jabari Parker / Bobby Portis
**Target:** DeMar DeRozan

1. **2019-02-06** (CHI-WAS) — sent `Jabari Parker, Bobby Portis`, received `Otto Porter`
   > The Chicago Bulls traded Jabari Parker, Bobby Portis and a 2023 2nd round draft pick (Tristan Vukcevic was later selected) to the Washington Wizards for Otto Porter. Protections on 2023 2nd-rd pick removed in trade on 7/7/19
2. **2021-03-25** (CHI-ORL) — sent `Otto Porter`, received `Al-Farouq Aminu, Nikola Vučević`
   > The Chicago Bulls traded Wendell Carter Jr., Otto Porter, a 2021 1st round draft pick (Franz Wagner was later selected) and a 2023 1st round draft pick (Jett Howard was later selected) to the Orlando Magic for Al-Farouq Aminu and Nikola Vučević. Orlando also received a trade exception 2021 1st-rd pick (CHI own) was top-4 protected 2023 1st-rd pick is CHI own
3. **2021-08-11** (CHI-SAS) — sent `Al-Farouq Aminu`, received `DeMar DeRozan`
   > The Chicago Bulls traded Al-Farouq Aminu, Thaddeus Young, a 2022 2nd round draft pick (Kennedy Chandler was later selected), a 2025 1st round draft pick (Noa Essengue was later selected) and a 2025 2nd round draft pick (Maxime Raynaud was later selected) to the San Antonio Spurs for DeMar DeRozan. 2022 2nd-rd pick is an opportunity to swap 2025 conditional 1st-rd pick is CHI own 2025 2nd-rd pick is CHI own

## 94. [score 17] CHI — 2019-02-06 → 2026-02-05 (3 links)

**Start:** Jabari Parker / Bobby Portis
**Target:** Anfernee Simons

1. **2019-02-06** (CHI-WAS) — sent `Jabari Parker, Bobby Portis`, received `Otto Porter`
   > The Chicago Bulls traded Jabari Parker, Bobby Portis and a 2023 2nd round draft pick (Tristan Vukcevic was later selected) to the Washington Wizards for Otto Porter. Protections on 2023 2nd-rd pick removed in trade on 7/7/19
2. **2021-03-25** (CHI-ORL) — sent `Otto Porter`, received `Al-Farouq Aminu, Nikola Vučević`
   > The Chicago Bulls traded Wendell Carter Jr., Otto Porter, a 2021 1st round draft pick (Franz Wagner was later selected) and a 2023 1st round draft pick (Jett Howard was later selected) to the Orlando Magic for Al-Farouq Aminu and Nikola Vučević. Orlando also received a trade exception 2021 1st-rd pick (CHI own) was top-4 protected 2023 1st-rd pick is CHI own
3. **2026-02-05** (BOS-CHI) — sent `Nikola Vucevic`, received `Anfernee Simons`
   > The Boston Celtics traded Anfernee Simons and a 2026 2nd round draft pick (Braden Smith was later selected) to the Chicago Bulls for Nikola Vucevic and a 2027 2nd round draft pick. 2026 2nd-rd pick was most favorable of POR, NOP, NYK, and MIN, became NOP 2026 2nd-rd pick Boston also received a trade exception 2027 2nd-rd pick is DEN own

## 95. [score 17] CHI — 2025-02-03 → 2026-02-04 (3 links)

**Start:** Zach LaVine
**Target:** Ousmane Dieng / Collin Sexton

1. **2025-02-03** (CHI-SAC-SAS) — sent `Zach LaVine`, received `Kevin Huerter, Zach Collins, Tre Jones`
   > In a 3-team trade, the Chicago Bulls traded Zach LaVine and a 2028 2nd round draft pick to the Sacramento Kings; the Sacramento Kings traded Kevin Huerter to the Chicago Bulls; the Sacramento Kings traded De'Aaron Fox and Jordan McLaughlin to the San Antonio Spurs; the San Antonio Spurs traded Zach Collins, Tre Jones and a 2025 1st round draft pick (Noa Essengue was later selected) to the Chicago Bulls; and the San Antonio Spurs traded Sidy Cissoko, a 2025 2nd round draft pick (Maxime Raynaud was later selected), a 2026 2nd round draft pick (Emanuel Sharp was later selected), a 2027 1st round draft pick, a 2027 2nd round draft pick, a 2028 2nd round draft pick and a 2031 1st round draft pick to the Sacramento Kings. Chicago also received a trade exception conditional 2025 1st-rd pick is CHI own Sacramento also received a trade exception conditional 2025 1st-rd pick was CHO own, did not convey; became 2026 and 2027 CHO 2nd-rd picks 2027 1st-rd pick is SAS own 2031 1st-rd pick is MIN own 2025 2nd-rd pick is CHI own conditional 2028 2nd-rd pick is DEN own 2028 2nd-rd pick is CHI own conditional 2025 1st-rd pick is CHO own, did not convey; became 2026 and 2027 2nd-rd picks
2. **2026-02-03** (CHI-DET-MIN) — sent `Kevin Huerter`, received `Jaden Ivey, Mike Conley`
   > In a 3-team trade, the Chicago Bulls traded Kevin Huerter and Dario Saric to the Detroit Pistons; the Detroit Pistons traded Jaden Ivey to the Chicago Bulls; the Detroit Pistons traded cash and a 2026 1st round draft pick (Joshua Jefferson was later selected) to the Minnesota Timberwolves; the Minnesota Timberwolves traded Mike Conley to the Chicago Bulls; and the Minnesota Timberwolves traded a 2026 1st round draft pick (Karim López was later selected) to the Detroit Pistons. 2026 1st-rd pick was a protected (top-19) right to swap, became MIN 2026 1st-rd pick Minnesota also received a trade exception DET optioned to swap 2026 1st-rd pick
3. **2026-02-04** (CHI-CHO) — sent `Mike Conley`, received `Ousmane Dieng, Collin Sexton`
   > The Chicago Bulls traded Mike Conley and Coby White to the Charlotte Hornets for Ousmane Dieng, Collin Sexton, a 2031 2nd round draft pick and a 2031 2nd round draft pick. Chicago also received a trade exception Charlotte also received a trade exception 2031 2nd-rd pick is DEN own 2031 2nd-rd pick is NYK own

## 96. [score 17] WAS — 2010-12-18 → 2013-10-25 (3 links)

**Start:** Gilbert Arenas
**Target:** Shannon Brown / Marcin Gortat / Malcolm Lee / Kendall Marshall

1. **2010-12-18** (ORL-WAS) — sent `Gilbert Arenas`, received `Rashard Lewis`
   > The Orlando Magic traded Rashard Lewis to the Washington Wizards for Gilbert Arenas.
2. **2012-06-20** (NOH-WAS) — sent `Rashard Lewis`, received `Trevor Ariza, Emeka Okafor`
   > The New Orleans Hornets traded Trevor Ariza and Emeka Okafor to the Washington Wizards for Rashard Lewis and a 2012 2nd round draft pick (Darius Miller was later selected).
3. **2013-10-25** (PHO-WAS) — sent `Emeka Okafor`, received `Shannon Brown, Marcin Gortat, Malcolm Lee, Kendall Marshall`
   > The Phoenix Suns traded Shannon Brown, Marcin Gortat, Malcolm Lee and Kendall Marshall to the Washington Wizards for Emeka Okafor and a 2014 1st round draft pick (Tyler Ennis was later selected). (Pick is top 12 protected.)

## 97. [score 17] WAS — 2020-12-02 → 2022-02-10 (3 links)

**Start:** John Wall
**Target:** Kristaps Porzingis

1. **2020-12-02** (HOU-WAS) — sent `John Wall`, received `Russell Westbrook`
   > The Houston Rockets traded Russell Westbrook to the Washington Wizards for John Wall, a 2026 2nd round draft pick and a 2027 2nd round draft pick. 1st-rd pick was protected 2023-26, did not convey and became 2026 and 2027 WAS 2nd-rd picks. Houston also received a trade exception
2. **2021-08-06** (BRK-WAS-IND-LAL-SAS) — sent `Russell Westbrook`, received `Spencer Dinwiddie, Aaron Holiday, Isaiah Todd, Kentavious Caldwell-Pope, Montrezl Harrell, Kyle Kuzma`
   > In a 5-team trade, the Brooklyn Nets traded Spencer Dinwiddie and a 2025 2nd round draft pick (Javon Small was later selected) to the Washington Wizards; the Indiana Pacers traded Aaron Holiday and Isaiah Todd to the Washington Wizards; the Los Angeles Lakers traded Isaiah Jackson to the Indiana Pacers; the Los Angeles Lakers traded Kentavious Caldwell-Pope, Montrezl Harrell and Kyle Kuzma to the Washington Wizards; the San Antonio Spurs traded Nikola Milutinov to the Brooklyn Nets; the Washington Wizards traded a 2024 2nd round draft pick (Kyle Filipowski was later selected) and a 2025 2nd round draft pick (Noah Penda was later selected) to the Brooklyn Nets; the Washington Wizards traded Russell Westbrook, a 2023 2nd round draft pick (Tristan Vukcevic was later selected), a 2024 2nd round draft pick (Bobi Klintman was later selected) and a 2028 2nd round draft pick to the Los Angeles Lakers; and the Washington Wizards traded Chandler Hutchison and a 2022 2nd round draft pick (Christian Koloko was later selected) to the San Antonio Spurs. Indiana also received a trade exception 2023 conditional 2nd-rd pick was CHI own 2024 2nd-rd pick is least favorable 2028 2nd-rd pick is WAS own 2024 2nd-rd pick is more favorable 2025 2nd-rd pick is a swap option; Brooklyn also received a trade exception 2022 2nd-rd more favorable of CHI/LAL/DET BRK optioned to swap 2025 2nd-rd pick (GSW own)
3. **2022-02-10** (DAL-WAS) — sent `Spencer Dinwiddie`, received `Kristaps Porzingis`
   > The Dallas Mavericks traded Kristaps Porzingis and a 2022 2nd round draft pick (Yannick Nzosa was later selected) to the Washington Wizards for Davis Bertans and Spencer Dinwiddie. 2022 2nd-rd pick is DAL own

## 98. [score 17] WAS — 2020-12-02 → 2023-06-23 (3 links)

**Start:** John Wall
**Target:** Bilal Coulibaly / Chris Paul / Landry Shamet

1. **2020-12-02** (HOU-WAS) — sent `John Wall`, received `Russell Westbrook`
   > The Houston Rockets traded Russell Westbrook to the Washington Wizards for John Wall, a 2026 2nd round draft pick and a 2027 2nd round draft pick. 1st-rd pick was protected 2023-26, did not convey and became 2026 and 2027 WAS 2nd-rd picks. Houston also received a trade exception
2. **2021-08-06** (BRK-WAS-IND-LAL-SAS) — sent `Russell Westbrook`, received `Spencer Dinwiddie, Aaron Holiday, Isaiah Todd, Kentavious Caldwell-Pope, Montrezl Harrell, Kyle Kuzma`
   > In a 5-team trade, the Brooklyn Nets traded Spencer Dinwiddie and a 2025 2nd round draft pick (Javon Small was later selected) to the Washington Wizards; the Indiana Pacers traded Aaron Holiday and Isaiah Todd to the Washington Wizards; the Los Angeles Lakers traded Isaiah Jackson to the Indiana Pacers; the Los Angeles Lakers traded Kentavious Caldwell-Pope, Montrezl Harrell and Kyle Kuzma to the Washington Wizards; the San Antonio Spurs traded Nikola Milutinov to the Brooklyn Nets; the Washington Wizards traded a 2024 2nd round draft pick (Kyle Filipowski was later selected) and a 2025 2nd round draft pick (Noah Penda was later selected) to the Brooklyn Nets; the Washington Wizards traded Russell Westbrook, a 2023 2nd round draft pick (Tristan Vukcevic was later selected), a 2024 2nd round draft pick (Bobi Klintman was later selected) and a 2028 2nd round draft pick to the Los Angeles Lakers; and the Washington Wizards traded Chandler Hutchison and a 2022 2nd round draft pick (Christian Koloko was later selected) to the San Antonio Spurs. Indiana also received a trade exception 2023 conditional 2nd-rd pick was CHI own 2024 2nd-rd pick is least favorable 2028 2nd-rd pick is WAS own 2024 2nd-rd pick is more favorable 2025 2nd-rd pick is a swap option; Brooklyn also received a trade exception 2022 2nd-rd more favorable of CHI/LAL/DET BRK optioned to swap 2025 2nd-rd pick (GSW own)
3. **2023-06-23** (IND-WAS-PHO) — sent `Isaiah Todd`, received `Bilal Coulibaly, Chris Paul, Landry Shamet`
   > In a 3-team trade, the Indiana Pacers traded Bilal Coulibaly to the Washington Wizards; the Phoenix Suns traded a 2028 2nd round draft pick to the Indiana Pacers; the Phoenix Suns traded Chris Paul, Landry Shamet, cash, a 2024 1st round draft pick, a 2024 2nd round draft pick (Melvin Ajinça was later selected), a 2025 2nd round draft pick (Micah Peavy was later selected), a 2026 1st round draft pick, a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2028 1st round draft pick, a 2030 1st round draft pick and a 2030 2nd round draft pick to the Washington Wizards; the Washington Wizards traded Jarace Walker and a 2029 2nd round draft pick to the Indiana Pacers; and the Washington Wizards traded Bradley Beal, Jordan Goodwin and Isaiah Todd to the Phoenix Suns. 2024 1st-rd pick was a right to swap, did not convey 2026 1st-rd pick was a right to swap, did not convey 2028 1st-rd pick is a right to swap 2030 1st-rd pick is a right to swap 2025 2nd-rd pick is PHO own 2026 2nd-rd pick was PHO own Teams also received trade exceptions

## 99. [score 17] WAS — 2020-12-02 → 2025-02-06 (3 links)

**Start:** John Wall
**Target:** A.J. Johnson / Khris Middleton / Mathias Lessort

1. **2020-12-02** (HOU-WAS) — sent `John Wall`, received `Russell Westbrook`
   > The Houston Rockets traded Russell Westbrook to the Washington Wizards for John Wall, a 2026 2nd round draft pick and a 2027 2nd round draft pick. 1st-rd pick was protected 2023-26, did not convey and became 2026 and 2027 WAS 2nd-rd picks. Houston also received a trade exception
2. **2021-08-06** (BRK-WAS-IND-LAL-SAS) — sent `Russell Westbrook`, received `Spencer Dinwiddie, Aaron Holiday, Isaiah Todd, Kentavious Caldwell-Pope, Montrezl Harrell, Kyle Kuzma`
   > In a 5-team trade, the Brooklyn Nets traded Spencer Dinwiddie and a 2025 2nd round draft pick (Javon Small was later selected) to the Washington Wizards; the Indiana Pacers traded Aaron Holiday and Isaiah Todd to the Washington Wizards; the Los Angeles Lakers traded Isaiah Jackson to the Indiana Pacers; the Los Angeles Lakers traded Kentavious Caldwell-Pope, Montrezl Harrell and Kyle Kuzma to the Washington Wizards; the San Antonio Spurs traded Nikola Milutinov to the Brooklyn Nets; the Washington Wizards traded a 2024 2nd round draft pick (Kyle Filipowski was later selected) and a 2025 2nd round draft pick (Noah Penda was later selected) to the Brooklyn Nets; the Washington Wizards traded Russell Westbrook, a 2023 2nd round draft pick (Tristan Vukcevic was later selected), a 2024 2nd round draft pick (Bobi Klintman was later selected) and a 2028 2nd round draft pick to the Los Angeles Lakers; and the Washington Wizards traded Chandler Hutchison and a 2022 2nd round draft pick (Christian Koloko was later selected) to the San Antonio Spurs. Indiana also received a trade exception 2023 conditional 2nd-rd pick was CHI own 2024 2nd-rd pick is least favorable 2028 2nd-rd pick is WAS own 2024 2nd-rd pick is more favorable 2025 2nd-rd pick is a swap option; Brooklyn also received a trade exception 2022 2nd-rd more favorable of CHI/LAL/DET BRK optioned to swap 2025 2nd-rd pick (GSW own)
3. **2025-02-06** (MIL-NYK-SAS-WAS) — sent `Kyle Kuzma`, received `A.J. Johnson, Khris Middleton, Mathias Lessort`
   > In a 4-team trade, the Milwaukee Bucks traded cash considerations, Hugo Besson and Delon Wright to the New York Knicks; the Milwaukee Bucks traded cash considerations to the San Antonio Spurs; the Milwaukee Bucks traded cash considerations, A.J. Johnson, Khris Middleton and a 2028 1st round draft pick to the Washington Wizards; the New York Knicks traded Jericho Sims to the Milwaukee Bucks; the New York Knicks traded Mathias Lessort to the Washington Wizards; the Washington Wizards traded Kyle Kuzma, a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (NULL was later selected) to the Milwaukee Bucks; and the Washington Wizards traded Patrick Baldwin Jr. to the San Antonio Spurs. New York also received a trade exception Milwaukee also received multiple trade exceptions 2028 1st-rd pick WAS own swap option with MIL pick (least favorable of POR, MIL picks) 2025 2nd-rd pick (second most favorable of DET, PHO, GSW picks); became DET pick 2026 2nd-rd pick (UTA own) was protected 31-55, did not convey

## 100. [score 17] WAS — 2021-08-06 → 2023-06-23 (3 links)

**Start:** Russell Westbrook / Chandler Hutchison
**Target:** Danilo Gallinari / Mike Muscala / Julian Phillips / Tyus Jones

1. **2021-08-06** (BRK-WAS-IND-LAL-SAS) — sent `Russell Westbrook, Chandler Hutchison`, received `Spencer Dinwiddie, Aaron Holiday, Isaiah Todd, Kentavious Caldwell-Pope, Montrezl Harrell, Kyle Kuzma`
   > In a 5-team trade, the Brooklyn Nets traded Spencer Dinwiddie and a 2025 2nd round draft pick (Javon Small was later selected) to the Washington Wizards; the Indiana Pacers traded Aaron Holiday and Isaiah Todd to the Washington Wizards; the Los Angeles Lakers traded Isaiah Jackson to the Indiana Pacers; the Los Angeles Lakers traded Kentavious Caldwell-Pope, Montrezl Harrell and Kyle Kuzma to the Washington Wizards; the San Antonio Spurs traded Nikola Milutinov to the Brooklyn Nets; the Washington Wizards traded a 2024 2nd round draft pick (Kyle Filipowski was later selected) and a 2025 2nd round draft pick (Noah Penda was later selected) to the Brooklyn Nets; the Washington Wizards traded Russell Westbrook, a 2023 2nd round draft pick (Tristan Vukcevic was later selected), a 2024 2nd round draft pick (Bobi Klintman was later selected) and a 2028 2nd round draft pick to the Los Angeles Lakers; and the Washington Wizards traded Chandler Hutchison and a 2022 2nd round draft pick (Christian Koloko was later selected) to the San Antonio Spurs. Indiana also received a trade exception 2023 conditional 2nd-rd pick was CHI own 2024 2nd-rd pick is least favorable 2028 2nd-rd pick is WAS own 2024 2nd-rd pick is more favorable 2025 2nd-rd pick is a swap option; Brooklyn also received a trade exception 2022 2nd-rd more favorable of CHI/LAL/DET BRK optioned to swap 2025 2nd-rd pick (GSW own)
2. **2022-02-10** (DAL-WAS) — sent `Spencer Dinwiddie`, received `Kristaps Porzingis`
   > The Dallas Mavericks traded Kristaps Porzingis and a 2022 2nd round draft pick (Yannick Nzosa was later selected) to the Washington Wizards for Davis Bertans and Spencer Dinwiddie. 2022 2nd-rd pick is DAL own
3. **2023-06-23** (BOS-MEM-WAS) — sent `Kristaps Porzingis`, received `Danilo Gallinari, Mike Muscala, Julian Phillips, Tyus Jones`
   > In a 3-team trade, the Boston Celtics traded Marcus Smart to the Memphis Grizzlies; the Boston Celtics traded Danilo Gallinari, Mike Muscala and Julian Phillips to the Washington Wizards; the Memphis Grizzlies traded Marcus Sasser and a 2024 1st round draft pick (Bub Carrington was later selected) to the Boston Celtics; the Memphis Grizzlies traded Tyus Jones to the Washington Wizards; and the Washington Wizards traded Kristaps Porzingis to the Boston Celtics. 2023 top-4 protected pick is GSW own

## 101. [score 17] WAS — 2021-08-06 → 2026-02-05 (3 links)

**Start:** Russell Westbrook / Chandler Hutchison
**Target:** Anthony Davis / Dante Exum / Jaden Hardy / D'Angelo Russell

1. **2021-08-06** (BRK-WAS-IND-LAL-SAS) — sent `Russell Westbrook, Chandler Hutchison`, received `Spencer Dinwiddie, Aaron Holiday, Isaiah Todd, Kentavious Caldwell-Pope, Montrezl Harrell, Kyle Kuzma`
   > In a 5-team trade, the Brooklyn Nets traded Spencer Dinwiddie and a 2025 2nd round draft pick (Javon Small was later selected) to the Washington Wizards; the Indiana Pacers traded Aaron Holiday and Isaiah Todd to the Washington Wizards; the Los Angeles Lakers traded Isaiah Jackson to the Indiana Pacers; the Los Angeles Lakers traded Kentavious Caldwell-Pope, Montrezl Harrell and Kyle Kuzma to the Washington Wizards; the San Antonio Spurs traded Nikola Milutinov to the Brooklyn Nets; the Washington Wizards traded a 2024 2nd round draft pick (Kyle Filipowski was later selected) and a 2025 2nd round draft pick (Noah Penda was later selected) to the Brooklyn Nets; the Washington Wizards traded Russell Westbrook, a 2023 2nd round draft pick (Tristan Vukcevic was later selected), a 2024 2nd round draft pick (Bobi Klintman was later selected) and a 2028 2nd round draft pick to the Los Angeles Lakers; and the Washington Wizards traded Chandler Hutchison and a 2022 2nd round draft pick (Christian Koloko was later selected) to the San Antonio Spurs. Indiana also received a trade exception 2023 conditional 2nd-rd pick was CHI own 2024 2nd-rd pick is least favorable 2028 2nd-rd pick is WAS own 2024 2nd-rd pick is more favorable 2025 2nd-rd pick is a swap option; Brooklyn also received a trade exception 2022 2nd-rd more favorable of CHI/LAL/DET BRK optioned to swap 2025 2nd-rd pick (GSW own)
2. **2025-02-06** (MIL-NYK-SAS-WAS) — sent `Kyle Kuzma`, received `A.J. Johnson, Khris Middleton, Mathias Lessort`
   > In a 4-team trade, the Milwaukee Bucks traded cash considerations, Hugo Besson and Delon Wright to the New York Knicks; the Milwaukee Bucks traded cash considerations to the San Antonio Spurs; the Milwaukee Bucks traded cash considerations, A.J. Johnson, Khris Middleton and a 2028 1st round draft pick to the Washington Wizards; the New York Knicks traded Jericho Sims to the Milwaukee Bucks; the New York Knicks traded Mathias Lessort to the Washington Wizards; the Washington Wizards traded Kyle Kuzma, a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (NULL was later selected) to the Milwaukee Bucks; and the Washington Wizards traded Patrick Baldwin Jr. to the San Antonio Spurs. New York also received a trade exception Milwaukee also received multiple trade exceptions 2028 1st-rd pick WAS own swap option with MIL pick (least favorable of POR, MIL picks) 2025 2nd-rd pick (second most favorable of DET, PHO, GSW picks); became DET pick 2026 2nd-rd pick (UTA own) was protected 31-55, did not convey
3. **2026-02-05** (CHO-DAL-WAS) — sent `A.J. Johnson, Khris Middleton`, received `Anthony Davis, Dante Exum, Jaden Hardy, D'Angelo Russell`
   > In a 3-team trade, the Charlotte Hornets traded Tyus Jones to the Dallas Mavericks; the Dallas Mavericks traded Anthony Davis, Dante Exum, Jaden Hardy and D'Angelo Russell to the Washington Wizards; the Washington Wizards traded Malaki Branham to the Charlotte Hornets; and the Washington Wizards traded Marvin Bagley, A.J. Johnson, Khris Middleton, a 2026 1st round draft pick (Koa Peat was later selected), a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2029 2nd round draft pick and a 2030 1st round draft pick to the Dallas Mavericks. Charlotte also received a trade exception Dallas also received multiple trade exceptions 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2026 2nd-rd pick was PHO own conditional 2027 2nd-rd pick is CHI own 2029 2nd-rd pick is HOU own conditional 2030 1st-rd pick is GSW own

## 102. [score 17] WAS — 2023-06-23 → 2025-02-06 (3 links)

**Start:** Kristaps Porzingis
**Target:** Marcus Smart / Colby Jones / Alex Len

1. **2023-06-23** (BOS-MEM-WAS) — sent `Kristaps Porzingis`, received `Danilo Gallinari, Mike Muscala, Julian Phillips, Tyus Jones`
   > In a 3-team trade, the Boston Celtics traded Marcus Smart to the Memphis Grizzlies; the Boston Celtics traded Danilo Gallinari, Mike Muscala and Julian Phillips to the Washington Wizards; the Memphis Grizzlies traded Marcus Sasser and a 2024 1st round draft pick (Bub Carrington was later selected) to the Boston Celtics; the Memphis Grizzlies traded Tyus Jones to the Washington Wizards; and the Washington Wizards traded Kristaps Porzingis to the Boston Celtics. 2023 top-4 protected pick is GSW own
2. **2024-01-14** (DET-WAS) — sent `Danilo Gallinari, Mike Muscala`, received `Marvin Bagley, Isaiah Livers`
   > The Detroit Pistons traded Marvin Bagley, Isaiah Livers, a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (Izaiyah Nelson was later selected) to the Washington Wizards for Danilo Gallinari and Mike Muscala. Detroit also received a trade exception Washington also received a trade exception 2025 2nd-rd pick is least favorable; became DET pick 2026 2nd-rd pick was one of NYK/MIN/POR/NOP, became MIN 2026 2nd-rd pick
3. **2025-02-06** (MEM-SAC-WAS) — sent `Marvin Bagley`, received `Marcus Smart, Colby Jones, Alex Len`
   > In a 3-team trade, the Memphis Grizzlies traded Jake LaRavia to the Sacramento Kings; the Memphis Grizzlies traded Marcus Smart and a 2025 1st round draft pick (Walter Clayton Jr. was later selected) to the Washington Wizards; the Sacramento Kings traded a 2028 draft pick to the Memphis Grizzlies; the Sacramento Kings traded Colby Jones and Alex Len to the Washington Wizards; and the Washington Wizards traded Marvin Bagley, Johnny Davis and a 2025 2nd round draft pick (Javon Small was later selected) to the Memphis Grizzlies. Memphis also received multiple trade exceptions Washington also received a trade exception 2025 1st-rd pick MEM own from MEM 2025 2nd-rd pick 2028 2nd-rd pick

## 103. [score 17] WAS — 2023-06-23 → 2026-02-05 (3 links)

**Start:** Kristaps Porzingis
**Target:** Anthony Davis / Dante Exum / Jaden Hardy / D'Angelo Russell

1. **2023-06-23** (BOS-MEM-WAS) — sent `Kristaps Porzingis`, received `Danilo Gallinari, Mike Muscala, Julian Phillips, Tyus Jones`
   > In a 3-team trade, the Boston Celtics traded Marcus Smart to the Memphis Grizzlies; the Boston Celtics traded Danilo Gallinari, Mike Muscala and Julian Phillips to the Washington Wizards; the Memphis Grizzlies traded Marcus Sasser and a 2024 1st round draft pick (Bub Carrington was later selected) to the Boston Celtics; the Memphis Grizzlies traded Tyus Jones to the Washington Wizards; and the Washington Wizards traded Kristaps Porzingis to the Boston Celtics. 2023 top-4 protected pick is GSW own
2. **2024-01-14** (DET-WAS) — sent `Danilo Gallinari, Mike Muscala`, received `Marvin Bagley, Isaiah Livers`
   > The Detroit Pistons traded Marvin Bagley, Isaiah Livers, a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (Izaiyah Nelson was later selected) to the Washington Wizards for Danilo Gallinari and Mike Muscala. Detroit also received a trade exception Washington also received a trade exception 2025 2nd-rd pick is least favorable; became DET pick 2026 2nd-rd pick was one of NYK/MIN/POR/NOP, became MIN 2026 2nd-rd pick
3. **2026-02-05** (CHO-DAL-WAS) — sent `Marvin Bagley`, received `Anthony Davis, Dante Exum, Jaden Hardy, D'Angelo Russell`
   > In a 3-team trade, the Charlotte Hornets traded Tyus Jones to the Dallas Mavericks; the Dallas Mavericks traded Anthony Davis, Dante Exum, Jaden Hardy and D'Angelo Russell to the Washington Wizards; the Washington Wizards traded Malaki Branham to the Charlotte Hornets; and the Washington Wizards traded Marvin Bagley, A.J. Johnson, Khris Middleton, a 2026 1st round draft pick (Koa Peat was later selected), a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2029 2nd round draft pick and a 2030 1st round draft pick to the Dallas Mavericks. Charlotte also received a trade exception Dallas also received multiple trade exceptions 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2026 2nd-rd pick was PHO own conditional 2027 2nd-rd pick is CHI own 2029 2nd-rd pick is HOU own conditional 2030 1st-rd pick is GSW own

## 104. [score 17] WAS — 2023-06-23 → 2025-02-06 (3 links)

**Start:** Jarace Walker / Bradley Beal / Jordan Goodwin / Isaiah Todd
**Target:** A.J. Johnson / Khris Middleton / Mathias Lessort

1. **2023-06-23** (IND-WAS-PHO) — sent `Jarace Walker, Bradley Beal, Jordan Goodwin, Isaiah Todd`, received `Bilal Coulibaly, Chris Paul, Landry Shamet`
   > In a 3-team trade, the Indiana Pacers traded Bilal Coulibaly to the Washington Wizards; the Phoenix Suns traded a 2028 2nd round draft pick to the Indiana Pacers; the Phoenix Suns traded Chris Paul, Landry Shamet, cash, a 2024 1st round draft pick, a 2024 2nd round draft pick (Melvin Ajinça was later selected), a 2025 2nd round draft pick (Micah Peavy was later selected), a 2026 1st round draft pick, a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2028 1st round draft pick, a 2030 1st round draft pick and a 2030 2nd round draft pick to the Washington Wizards; the Washington Wizards traded Jarace Walker and a 2029 2nd round draft pick to the Indiana Pacers; and the Washington Wizards traded Bradley Beal, Jordan Goodwin and Isaiah Todd to the Phoenix Suns. 2024 1st-rd pick was a right to swap, did not convey 2026 1st-rd pick was a right to swap, did not convey 2028 1st-rd pick is a right to swap 2030 1st-rd pick is a right to swap 2025 2nd-rd pick is PHO own 2026 2nd-rd pick was PHO own Teams also received trade exceptions
2. **2023-07-06** (GSW-WAS) — sent `Chris Paul`, received `Patrick Baldwin Jr., Jordan Poole, Ryan Rollins`
   > The Golden State Warriors traded Patrick Baldwin Jr., Jordan Poole, Ryan Rollins, a 2027 2nd round draft pick and a 2030 1st round draft pick to the Washington Wizards for Chris Paul. 2027 2nd-rd pick is GSW own 2030 1st-rd pick is GSW own
3. **2025-02-06** (MIL-NYK-SAS-WAS) — sent `Patrick Baldwin Jr.`, received `A.J. Johnson, Khris Middleton, Mathias Lessort`
   > In a 4-team trade, the Milwaukee Bucks traded cash considerations, Hugo Besson and Delon Wright to the New York Knicks; the Milwaukee Bucks traded cash considerations to the San Antonio Spurs; the Milwaukee Bucks traded cash considerations, A.J. Johnson, Khris Middleton and a 2028 1st round draft pick to the Washington Wizards; the New York Knicks traded Jericho Sims to the Milwaukee Bucks; the New York Knicks traded Mathias Lessort to the Washington Wizards; the Washington Wizards traded Kyle Kuzma, a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (NULL was later selected) to the Milwaukee Bucks; and the Washington Wizards traded Patrick Baldwin Jr. to the San Antonio Spurs. New York also received a trade exception Milwaukee also received multiple trade exceptions 2028 1st-rd pick WAS own swap option with MIL pick (least favorable of POR, MIL picks) 2025 2nd-rd pick (second most favorable of DET, PHO, GSW picks); became DET pick 2026 2nd-rd pick (UTA own) was protected 31-55, did not convey

## 105. [score 17] WAS — 2023-06-23 → 2025-07-06 (3 links)

**Start:** Jarace Walker / Bradley Beal / Jordan Goodwin / Isaiah Todd
**Target:** Cam Whitmore / CJ McCollum / Kelly Olynyk

1. **2023-06-23** (IND-WAS-PHO) — sent `Jarace Walker, Bradley Beal, Jordan Goodwin, Isaiah Todd`, received `Bilal Coulibaly, Chris Paul, Landry Shamet`
   > In a 3-team trade, the Indiana Pacers traded Bilal Coulibaly to the Washington Wizards; the Phoenix Suns traded a 2028 2nd round draft pick to the Indiana Pacers; the Phoenix Suns traded Chris Paul, Landry Shamet, cash, a 2024 1st round draft pick, a 2024 2nd round draft pick (Melvin Ajinça was later selected), a 2025 2nd round draft pick (Micah Peavy was later selected), a 2026 1st round draft pick, a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2028 1st round draft pick, a 2030 1st round draft pick and a 2030 2nd round draft pick to the Washington Wizards; the Washington Wizards traded Jarace Walker and a 2029 2nd round draft pick to the Indiana Pacers; and the Washington Wizards traded Bradley Beal, Jordan Goodwin and Isaiah Todd to the Phoenix Suns. 2024 1st-rd pick was a right to swap, did not convey 2026 1st-rd pick was a right to swap, did not convey 2028 1st-rd pick is a right to swap 2030 1st-rd pick is a right to swap 2025 2nd-rd pick is PHO own 2026 2nd-rd pick was PHO own Teams also received trade exceptions
2. **2023-07-06** (GSW-WAS) — sent `Chris Paul`, received `Patrick Baldwin Jr., Jordan Poole, Ryan Rollins`
   > The Golden State Warriors traded Patrick Baldwin Jr., Jordan Poole, Ryan Rollins, a 2027 2nd round draft pick and a 2030 1st round draft pick to the Washington Wizards for Chris Paul. 2027 2nd-rd pick is GSW own 2030 1st-rd pick is GSW own
3. **2025-07-06** (HOU-WAS-NOP) — sent `Jordan Poole`, received `Cam Whitmore, CJ McCollum, Kelly Olynyk`
   > In a 3-team trade, the Houston Rockets traded Cam Whitmore to the Washington Wizards; the New Orleans Pelicans traded Mojave King to the Houston Rockets; the New Orleans Pelicans traded CJ McCollum, Kelly Olynyk and a 2027 2nd round draft pick to the Washington Wizards; the Washington Wizards traded a 2026 2nd round draft pick (Jack Kayil was later selected) and a 2029 2nd round draft pick to the Houston Rockets; and the Washington Wizards traded Saddiq Bey, Micah Peavy and Jordan Poole to the New Orleans Pelicans. New Orleans also received a trade exception Houston also received a trade exception 2026 2nd-rd pick was CHI own 2029 2nd-rd pick is SAC own conditional 2027 2nd-rd pick is CHI own

## 106. [score 17] WAS — 2023-07-06 → 2026-02-05 (3 links)

**Start:** Chris Paul
**Target:** Anthony Davis / Dante Exum / Jaden Hardy / D'Angelo Russell

1. **2023-07-06** (GSW-WAS) — sent `Chris Paul`, received `Patrick Baldwin Jr., Jordan Poole, Ryan Rollins`
   > The Golden State Warriors traded Patrick Baldwin Jr., Jordan Poole, Ryan Rollins, a 2027 2nd round draft pick and a 2030 1st round draft pick to the Washington Wizards for Chris Paul. 2027 2nd-rd pick is GSW own 2030 1st-rd pick is GSW own
2. **2025-02-06** (MIL-NYK-SAS-WAS) — sent `Patrick Baldwin Jr.`, received `A.J. Johnson, Khris Middleton, Mathias Lessort`
   > In a 4-team trade, the Milwaukee Bucks traded cash considerations, Hugo Besson and Delon Wright to the New York Knicks; the Milwaukee Bucks traded cash considerations to the San Antonio Spurs; the Milwaukee Bucks traded cash considerations, A.J. Johnson, Khris Middleton and a 2028 1st round draft pick to the Washington Wizards; the New York Knicks traded Jericho Sims to the Milwaukee Bucks; the New York Knicks traded Mathias Lessort to the Washington Wizards; the Washington Wizards traded Kyle Kuzma, a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (NULL was later selected) to the Milwaukee Bucks; and the Washington Wizards traded Patrick Baldwin Jr. to the San Antonio Spurs. New York also received a trade exception Milwaukee also received multiple trade exceptions 2028 1st-rd pick WAS own swap option with MIL pick (least favorable of POR, MIL picks) 2025 2nd-rd pick (second most favorable of DET, PHO, GSW picks); became DET pick 2026 2nd-rd pick (UTA own) was protected 31-55, did not convey
3. **2026-02-05** (CHO-DAL-WAS) — sent `A.J. Johnson, Khris Middleton`, received `Anthony Davis, Dante Exum, Jaden Hardy, D'Angelo Russell`
   > In a 3-team trade, the Charlotte Hornets traded Tyus Jones to the Dallas Mavericks; the Dallas Mavericks traded Anthony Davis, Dante Exum, Jaden Hardy and D'Angelo Russell to the Washington Wizards; the Washington Wizards traded Malaki Branham to the Charlotte Hornets; and the Washington Wizards traded Marvin Bagley, A.J. Johnson, Khris Middleton, a 2026 1st round draft pick (Koa Peat was later selected), a 2026 2nd round draft pick (Tobi Lawal was later selected), a 2027 2nd round draft pick, a 2029 2nd round draft pick and a 2030 1st round draft pick to the Dallas Mavericks. Charlotte also received a trade exception Dallas also received multiple trade exceptions 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2026 2nd-rd pick was PHO own conditional 2027 2nd-rd pick is CHI own 2029 2nd-rd pick is HOU own conditional 2030 1st-rd pick is GSW own

## 107. [score 17] WAS — 2023-07-06 → 2026-01-09 (3 links)

**Start:** Chris Paul
**Target:** Trae Young

1. **2023-07-06** (GSW-WAS) — sent `Chris Paul`, received `Patrick Baldwin Jr., Jordan Poole, Ryan Rollins`
   > The Golden State Warriors traded Patrick Baldwin Jr., Jordan Poole, Ryan Rollins, a 2027 2nd round draft pick and a 2030 1st round draft pick to the Washington Wizards for Chris Paul. 2027 2nd-rd pick is GSW own 2030 1st-rd pick is GSW own
2. **2025-07-06** (HOU-WAS-NOP) — sent `Jordan Poole`, received `Cam Whitmore, CJ McCollum, Kelly Olynyk`
   > In a 3-team trade, the Houston Rockets traded Cam Whitmore to the Washington Wizards; the New Orleans Pelicans traded Mojave King to the Houston Rockets; the New Orleans Pelicans traded CJ McCollum, Kelly Olynyk and a 2027 2nd round draft pick to the Washington Wizards; the Washington Wizards traded a 2026 2nd round draft pick (Jack Kayil was later selected) and a 2029 2nd round draft pick to the Houston Rockets; and the Washington Wizards traded Saddiq Bey, Micah Peavy and Jordan Poole to the New Orleans Pelicans. New Orleans also received a trade exception Houston also received a trade exception 2026 2nd-rd pick was CHI own 2029 2nd-rd pick is SAC own conditional 2027 2nd-rd pick is CHI own
3. **2026-01-09** (ATL-WAS) — sent `CJ McCollum`, received `Trae Young`
   > The Atlanta Hawks traded Trae Young to the Washington Wizards for Corey Kispert and CJ McCollum. Atlanta also received a trade exception

## 108. [score 17] CLE — 2018-02-08 → 2022-09-03 (3 links)

**Start:** Channing Frye / Isaiah Thomas
**Target:** Donovan Mitchell

1. **2018-02-08** (CLE-LAL) — sent `Channing Frye, Isaiah Thomas`, received `Jordan Clarkson, Larry Nance Jr.`
   > The Cleveland Cavaliers traded Channing Frye, Isaiah Thomas and a 2018 1st round draft pick (Moritz Wagner was later selected) to the Los Angeles Lakers for Jordan Clarkson and Larry Nance Jr..
2. **2021-08-28** (CHI-CLE-POR) — sent `Larry Nance Jr.`, received `Lauri Markkanen`
   > In a 3-team trade, the Chicago Bulls traded Lauri Markkanen to the Cleveland Cavaliers; the Cleveland Cavaliers traded a 2023 2nd round draft pick to the Chicago Bulls; the Cleveland Cavaliers traded Larry Nance Jr. to the Portland Trail Blazers; and the Portland Trail Blazers traded Derrick Jones Jr. and a 2026 1st round draft pick (Dailyn Swain was later selected) to the Chicago Bulls. 2022-28 lottery-protected 1st-rd pick was POR own, conveyed in 2026 2023 conditional 2nd-rd pick was eventually forfeited and never used
3. **2022-09-03** (CLE-UTA) — sent `Lauri Markkanen`, received `Donovan Mitchell`
   > The Cleveland Cavaliers traded Ochai Agbaji, Lauri Markkanen, Collin Sexton, a 2025 1st round draft pick (Liam McNeeley was later selected), a 2026 1st round draft pick, a 2027 1st round draft pick, a 2028 1st round draft pick and a 2029 1st round draft pick to the Utah Jazz for Donovan Mitchell. Cleveland also received a trade exception 2025 1st-rd pick is CLE own 2026 1st-rd pick was a right to swap, did not convey 2027 1st-rd pick is CLE own 2028 1st-rd pick is a right to swap 2029 1st-rd pick is CLE own

## 109. [score 17] CLE — 2018-02-08 → 2020-02-06 (3 links)

**Start:** Dimitrios Agravanis / Iman Shumpert / Jae Crowder / Derrick Rose
**Target:** Andre Drummond

1. **2018-02-08** (CLE-SAC-UTA) — sent `Dimitrios Agravanis, Iman Shumpert, Jae Crowder, Derrick Rose`, received `Artūras Gudaitis, George Hill, Rodney Hood`
   > In a 3-team trade, the Cleveland Cavaliers traded Dimitrios Agravanis, Iman Shumpert, $2.1M cash and a 2020 2nd round draft pick (Skylar Mays was later selected) to the Sacramento Kings; the Cleveland Cavaliers traded Jae Crowder, Derrick Rose and a 2024 2nd round draft pick to the Utah Jazz; the Sacramento Kings traded Artūras Gudaitis and George Hill to the Cleveland Cavaliers; the Utah Jazz traded Rodney Hood to the Cleveland Cavaliers; and the Utah Jazz traded Joe Johnson and $1.1M cash to the Sacramento Kings. (UTA received right to exchange 2024 second-round pick with CLE, did not convey.) (SAC receives MIA 2020 second-round pick from CLE.)
2. **2018-12-07** (CLE-MIL-WAS) — sent `George Hill`, received `Matthew Dellavedova, John Henson`
   > In a 3-team trade, the Cleveland Cavaliers traded George Hill and a 2021 2nd round draft pick (Greg Brown III was later selected) to the Milwaukee Bucks; the Cleveland Cavaliers traded Sam Dekker to the Washington Wizards; the Milwaukee Bucks traded Matthew Dellavedova, John Henson, a 2021 2nd round draft pick (Sandro Mamukelashvili was later selected) and a 2022 1st round draft pick (MarJon Beauchamp was later selected) to the Cleveland Cavaliers; the Washington Wizards traded a 2022 2nd round draft pick (Bryce McGowens was later selected) to the Cleveland Cavaliers; and the Washington Wizards traded Jason Smith and cash to the Milwaukee Bucks. 2021 2nd-rd pick is WAS own, protections were removed from previously traded WAS 2020 2nd-rd pick Top-14 protected in 2021, conveyed in 2022 2021 2nd-rd pick is MIL own 2022 2nd-rd pick is WAS own
3. **2020-02-06** (CLE-DET) — sent `John Henson`, received `Andre Drummond`
   > The Cleveland Cavaliers traded John Henson, Brandon Knight and a 2023 2nd round draft pick (Isaiah Wong was later selected) to the Detroit Pistons for Andre Drummond. least favorable 2023 2nd-rd pick ended up as CLE own

## 110. [score 17] NYK — 2010-07-09 → 2017-09-25 (3 links)

**Start:** David Lee
**Target:** Enes Kanter / Doug McDermott

1. **2010-07-09** (GSW-NYK) — sent `David Lee`, received `Kelenna Azubuike, Anthony Randolph, Ronny Turiaf`
   > The Golden State Warriors traded Kelenna Azubuike, Anthony Randolph, Ronny Turiaf, a 2012 2nd round draft pick (Quincy Miller was later selected) and a 2013 2nd round draft pick (Romero Osby was later selected) to the New York Knicks for David Lee.
2. **2011-02-22** (DEN-MIN-NYK) — sent `Anthony Randolph`, received `Carmelo Anthony, Renaldo Balkman, Chauncey Billups, Anthony Carter, Shelden Williams, Corey Brewer`
   > In a 3-team trade, the Denver Nuggets traded a 2015 2nd round draft pick (Richaun Holmes was later selected) to the Minnesota Timberwolves; the Denver Nuggets traded Carmelo Anthony, Renaldo Balkman, Chauncey Billups, Anthony Carter, Shelden Williams and a 2016 1st round draft pick (Jakob Pöltl was later selected) to the New York Knicks; the Minnesota Timberwolves traded Kosta Koufos to the Denver Nuggets; the Minnesota Timberwolves traded Corey Brewer to the New York Knicks; the New York Knicks traded Wilson Chandler, Raymond Felton, Danilo Gallinari, Timofey Mozgov, cash, a 2012 2nd round draft pick (Quincy Miller was later selected), a 2013 2nd round draft pick (Romero Osby was later selected), a 2014 1st round draft pick (Dario Šarić was later selected) and a 2016 1st round draft pick (Jamal Murray was later selected) to the Denver Nuggets; and the New York Knicks traded Eddy Curry, Anthony Randolph and cash to the Minnesota Timberwolves. (Nuggets acquired right to swap 2016 1st-Rd picks with Knicks)
3. **2017-09-25** (NYK-OKC) — sent `Carmelo Anthony`, received `Enes Kanter, Doug McDermott`
   > The New York Knicks traded Carmelo Anthony to the Oklahoma City Thunder for Enes Kanter, Doug McDermott and a 2018 2nd round draft pick (Mitchell Robinson was later selected).

## 111. [score 17] NYK — 2024-02-08 → 2024-10-02 (3 links)

**Start:** Ryan Arcidiacono / Malachi Flynn / Evan Fournier / Quentin Grimes
**Target:** James Nnaji / Karl-Anthony Towns

1. **2024-02-08** (DET-NYK) — sent `Ryan Arcidiacono, Malachi Flynn, Evan Fournier, Quentin Grimes`, received `Bojan Bogdanovic, Alec Burks`
   > The Detroit Pistons traded Bojan Bogdanovic and Alec Burks to the New York Knicks for Ryan Arcidiacono, Malachi Flynn, Evan Fournier, Quentin Grimes and cash. New York also received a trade exception Detroit also received a trade exception
2. **2024-07-06** (BRK-NYK) — sent `Bojan Bogdanovic`, received `Keita Bates-Diop, Mikal Bridges, Juan Pablo Vaulet`
   > The Brooklyn Nets traded Keita Bates-Diop, Mikal Bridges, Juan Pablo Vaulet and a 2026 2nd round draft pick (Jaron Pierre Jr. was later selected) to the New York Knicks for Bojan Bogdanovic, Mamadi Diakite, Shake Milton, a 2025 1st round draft pick (Ben Saraf was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2025 2nd round draft pick (Adou Thiero was later selected), a 2027 1st round draft pick, a 2028 1st round draft pick, a 2029 1st round draft pick and a 2031 1st round draft pick. 2026 2nd-rd pick was least favorable of ORL/DET/MIL, became DET 2026 2nd-rd pick 2025 1st-rd pick is NYK own conditional 2025 1st-rd pick is MIL own 2025 2nd-rd pick is BRK own 2027 1st-rd pick is NYK own 2028 1st-rd pick is a swap 2029 1st-rd pick is NYK own 2031 1st-rd pick is NYK own, Brooklyn also received trade exceptions
3. **2024-10-02** (CHO-NYK-MIN) — sent `Keita Bates-Diop`, received `James Nnaji, Karl-Anthony Towns`
   > In a 3-team trade, the Charlotte Hornets traded James Nnaji to the New York Knicks; the Minnesota Timberwolves traded a 2025 2nd round draft pick (Alex Toohey was later selected) to the Charlotte Hornets; the Minnesota Timberwolves traded Karl-Anthony Towns to the New York Knicks; the New York Knicks traded cash, Charlie Brown Jr., DaQuan Jeffries, Duane Washington Jr., a 2026 2nd round draft pick (Otega Oweh was later selected) and a 2031 2nd round draft pick to the Charlotte Hornets; and the New York Knicks traded Keita Bates-Diop, Donte DiVincenzo, Julius Randle and a 2025 1st round draft pick (Joan Beringer was later selected) to the Minnesota Timberwolves. Minnesota also received a trade exception (conditional 1st-rd pick is DET own) 2025 2nd-rd pick is least favorable 2026 2nd-rd pick was GSW own 2031 2nd-rd pick is NYK own

## 112. [score 17] PHI — 2017-02-23 → 2019-02-06 (3 links)

**Start:** Nerlens Noel
**Target:** Tobias Harris / Boban Marjanović / Mike Scott

1. **2017-02-23** (DAL-PHI) — sent `Nerlens Noel`, received `Justin Anderson, Andrew Bogut`
   > The Dallas Mavericks traded Justin Anderson, Andrew Bogut, a 2017 2nd round draft pick (Jawun Evans was later selected) and a 2020 2nd round draft pick (Nico Mannion was later selected) to the Philadelphia 76ers for Nerlens Noel. (Pick is top-18 protected in 2017 and will turn into 2 2nd-rd picks if it does not convey)
2. **2018-07-25** (ATL-OKC-PHI) — sent `Justin Anderson`, received `Mike Muscala`
   > In a 3-team trade, the Atlanta Hawks traded Dennis Schröder to the Oklahoma City Thunder; the Atlanta Hawks traded Mike Muscala to the Philadelphia 76ers; the Oklahoma City Thunder traded Carmelo Anthony, a 2022 1st round draft pick, a 2024 2nd round draft pick (Ulrich Chomche was later selected) and a 2025 2nd round draft pick (Jahmai Mashack was later selected) to the Atlanta Hawks; the Philadelphia 76ers traded Justin Anderson to the Atlanta Hawks; and the Philadelphia 76ers traded Timothé Luwawu-Cabarrot to the Oklahoma City Thunder. 2022 1st-rd pick is top-14 protected, did not convey 2024 2nd-rd pick is OKC own 2025 2nd rd pick is OKC own
3. **2019-02-06** (LAC-PHI) — sent `Mike Muscala`, received `Tobias Harris, Boban Marjanović, Mike Scott`
   > The Los Angeles Clippers traded Tobias Harris, Boban Marjanović and Mike Scott to the Philadelphia 76ers for Wilson Chandler, Mike Muscala, Landry Shamet, a 2020 1st round draft pick (Saddiq Bey was later selected), a 2021 1st round draft pick (Tre Mann was later selected), a 2021 2nd round draft pick (Jeremiah Robinson-Earl was later selected) and a 2023 2nd round draft pick (James Nnaji was later selected). 2021 1st-rd pick was MIA own 2021 2nd-rd pick was DET own 2023 2nd-rd pick was DET own

## 113. [score 17] PHI — 2018-06-21 → 2021-03-25 (3 links)

**Start:** Mikal Bridges
**Target:** Ignas Brazdeikis / George Hill

1. **2018-06-21** (PHI-PHO) — sent `Mikal Bridges`, received `Zhaire Smith`
   > The Philadelphia 76ers traded Mikal Bridges to the Phoenix Suns for Zhaire Smith and a 2021 1st round draft pick (Tre Mann was later selected). 2021 1st-rd pick is MIA own
2. **2020-11-23** (DET-PHI) — sent `Zhaire Smith`, received `Tony Bradley`
   > The Detroit Pistons traded Tony Bradley to the Philadelphia 76ers for Zhaire Smith.
3. **2021-03-25** (NYK-OKC-PHI) — sent `Tony Bradley`, received `Ignas Brazdeikis, George Hill`
   > In a 3-team trade, the New York Knicks traded Austin Rivers to the Oklahoma City Thunder; the New York Knicks traded Ignas Brazdeikis to the Philadelphia 76ers; the Oklahoma City Thunder traded George Hill to the Philadelphia 76ers; the Philadelphia 76ers traded Terrance Ferguson, Vincent Poirier, Emir Preldžić, a 2021 2nd round draft pick (Jericho Sims was later selected) and a 2024 2nd round draft pick to the New York Knicks; and the Philadelphia 76ers traded Tony Bradley, a 2025 2nd round draft pick (Johni Broome was later selected) and a 2026 2nd round draft pick (Tyler Nickel was later selected) to the Oklahoma City Thunder. 2021 2nd-rd pick is PHI own 2024 2nd-rd (MIA own) was top-55 protected, did not convey. 2025 2nd-rd pick is PHI own 2026 2nd-rd pick was PHI own

## 114. [score 17] PHI — 2019-07-06 → 2022-02-10 (3 links)

**Start:** Mathias Lessort / Jimmy Butler
**Target:** James Harden / Paul Millsap

1. **2019-07-06** (LAC-MIA-PHI-POR) — sent `Mathias Lessort, Jimmy Butler`, received `Josh Richardson`
   > In a 4-team trade, the Los Angeles Clippers traded cash to the Miami Heat; the Miami Heat traded a 2023 1st round draft pick (Jaime Jaquez Jr. was later selected) to the Los Angeles Clippers; the Miami Heat traded Josh Richardson to the Philadelphia 76ers; the Miami Heat traded Hassan Whiteside to the Portland Trail Blazers; the Philadelphia 76ers traded Mathias Lessort to the Los Angeles Clippers; the Philadelphia 76ers traded Jimmy Butler to the Miami Heat; the Portland Trail Blazers traded Maurice Harkless to the Los Angeles Clippers; and the Portland Trail Blazers traded Meyers Leonard to the Miami Heat. $110K 2023 1st-rd pick was top-14 protected but eventually returned unprotected to MIA via trade
2. **2020-11-18** (DAL-PHI) — sent `Josh Richardson`, received `Seth Curry`
   > The Dallas Mavericks traded Seth Curry to the Philadelphia 76ers for Tyler Bey and Josh Richardson. Philadelphia also received a trade exception from Dallas.
3. **2022-02-10** (BRK-PHI) — sent `Seth Curry`, received `James Harden, Paul Millsap`
   > The Brooklyn Nets traded James Harden and Paul Millsap to the Philadelphia 76ers for Seth Curry, Andre Drummond, Ben Simmons, a 2023 1st round draft pick (Brice Sensabaugh was later selected) and a 2027 1st round draft pick. Philadelphia also received a trade exception 2023 1st-rd pick was originally a 2022 pick that was deferred 2027 1st-rd pick is top-8 protected and could turn into cash in 2029

## 115. [score 17] PHI — 2022-02-10 → 2024-02-08 (3 links)

**Start:** Seth Curry / Andre Drummond / Ben Simmons
**Target:** Buddy Hield

1. **2022-02-10** (BRK-PHI) — sent `Seth Curry, Andre Drummond, Ben Simmons`, received `James Harden, Paul Millsap`
   > The Brooklyn Nets traded James Harden and Paul Millsap to the Philadelphia 76ers for Seth Curry, Andre Drummond, Ben Simmons, a 2023 1st round draft pick (Brice Sensabaugh was later selected) and a 2027 1st round draft pick. Philadelphia also received a trade exception 2023 1st-rd pick was originally a 2022 pick that was deferred 2027 1st-rd pick is top-8 protected and could turn into cash in 2029
2. **2023-11-01** (LAC-OKC-PHI) — sent `James Harden`, received `Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris`
   > In a 3-team trade, the Los Angeles Clippers traded a 2027 1st round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris, cash, a 2024 2nd round draft pick (Juan Nunez was later selected), a 2028 1st round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick to the Philadelphia 76ers; the Oklahoma City Thunder traded a 2026 1st round draft pick (Koa Peat was later selected) to the Philadelphia 76ers; and the Philadelphia 76ers traded James Harden, Filip Petrusev and P.J. Tucker to the Los Angeles Clippers. 2027 1st-rd pick is a right to swap 2024 2nd-rd pick is more favorable 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2028 1st-rd pick is LAC own 2029 1st-rd pick is a swap 2029 2nd-rd pick is LAC own Philadelphia also received trade exceptions
3. **2024-02-08** (IND-PHI-SAS) — sent `Marcus Morris`, received `Buddy Hield`
   > In a 3-team trade, the Indiana Pacers traded Buddy Hield to the Philadelphia 76ers; the Philadelphia 76ers traded Furkan Korkmaz, cash, a 2024 2nd round draft pick (Juan Nunez was later selected) and a 2029 2nd round draft pick to the Indiana Pacers; the Philadelphia 76ers traded Marcus Morris, cash and a 2029 2nd round draft pick to the San Antonio Spurs; and the San Antonio Spurs traded Doug McDermott to the Indiana Pacers. 2029 2nd-rd pick is LAC own 2024 2nd-rd pick is more favorable 2029 2nd-rd pick is POR own Indiana also received a trade exception

## 116. [score 17] SAS — 2018-07-18 → 2022-02-10 (3 links)

**Start:** Danny Green / Kawhi Leonard
**Target:** Goran Dragic

1. **2018-07-18** (SAS-TOR) — sent `Danny Green, Kawhi Leonard`, received `DeMar DeRozan, Jakob Pöltl`
   > The San Antonio Spurs traded Danny Green, Kawhi Leonard and cash to the Toronto Raptors for DeMar DeRozan, Jakob Pöltl and a 2019 1st round draft pick (Keldon Johnson was later selected). (2019 1st-rd pick is top-20 protected.) $5MM
2. **2021-08-11** (CHI-SAS) — sent `DeMar DeRozan`, received `Al-Farouq Aminu, Thaddeus Young`
   > The Chicago Bulls traded Al-Farouq Aminu, Thaddeus Young, a 2022 2nd round draft pick (Kennedy Chandler was later selected), a 2025 1st round draft pick (Noa Essengue was later selected) and a 2025 2nd round draft pick (Maxime Raynaud was later selected) to the San Antonio Spurs for DeMar DeRozan. 2022 2nd-rd pick is an opportunity to swap 2025 conditional 1st-rd pick is CHI own 2025 2nd-rd pick is CHI own
3. **2022-02-10** (SAS-TOR) — sent `Thaddeus Young`, received `Goran Dragic`
   > The San Antonio Spurs traded Drew Eubanks, Thaddeus Young and a 2022 2nd round draft pick (Christian Koloko was later selected) to the Toronto Raptors for Goran Dragic and a 2022 1st round draft pick (Malaki Branham was later selected). Toronto also received a trade exception 2022 2nd-rd pick is DET own 2022 1st-rd pick is top-14 protected

## 117. [score 17] ATL — 2025-02-06 → 2026-02-05 (3 links)

**Start:** Bogdan Bogdanovic
**Target:** Buddy Hield / Jonathan Kuminga

1. **2025-02-06** (ATL-LAC) — sent `Bogdan Bogdanovic`, received `Bones Hyland, Terance Mann`
   > The Atlanta Hawks traded Bogdan Bogdanovic, a 2025 2nd round draft pick (Mohamed Diawara was later selected), a 2026 2nd round draft pick (Baba Miller was later selected) and a 2027 2nd round draft pick to the Los Angeles Clippers for Bones Hyland and Terance Mann. Los Angeles also received trade exceptions Atlanta also received a trade exception 2025 2nd-d pick is MIN own 2026 2nd-rd pick was MEM own (protected 43-60) and conveyed 2026 2nd-rd pick is LAC own
2. **2025-07-07** (ATL-BOS-BRK) — sent `Terance Mann`, received `Kristaps Porzingis`
   > In a 3-team trade, the Atlanta Hawks traded Georges Niang and a 2031 2nd round draft pick to the Boston Celtics; the Atlanta Hawks traded Terance Mann and Drake Powell to the Brooklyn Nets; the Boston Celtics traded Kristaps Porzingis and a 2026 2nd round draft pick (Narcisse Ngoy was later selected) to the Atlanta Hawks; and the Brooklyn Nets traded cash to the Boston Celtics. Boston also received a trade exception 2031 2nd-rd pick is CLE own 2026 2nd-rd pick was least favorable of BOS and MEM, became BOS 2026 2nd-rd pick
3. **2026-02-05** (ATL-GSW) — sent `Kristaps Porzingis`, received `Buddy Hield, Jonathan Kuminga`
   > The Atlanta Hawks traded Kristaps Porzingis to the Golden State Warriors for Buddy Hield and Jonathan Kuminga.

## 118. [score 17] BRK — 2015-02-19 → 2021-01-16 (3 links)

**Start:** Kevin Garnett
**Target:** James Harden

1. **2015-02-19** (BRK-MIN) — sent `Kevin Garnett`, received `Thaddeus Young`
   > The Brooklyn Nets traded Kevin Garnett to the Minnesota Timberwolves for Thaddeus Young.
2. **2016-07-07** (BRK-IND) — sent `Thaddeus Young`, received `Caris LeVert`
   > The Brooklyn Nets traded Thaddeus Young to the Indiana Pacers for Caris LeVert and a 2021 2nd round draft pick (Kessler Edwards was later selected). 2nd-rd pick protected 45-60 from 2017-22, conveyed 2021
3. **2021-01-16** (BRK-CLE-HOU-IND) — sent `Caris Levert`, received `James Harden`
   > In a 4-team trade, the Brooklyn Nets traded Jarrett Allen and Taurean Prince to the Cleveland Cavaliers; the Brooklyn Nets traded Rodions Kurucs, a 2021 1st round draft pick, a 2022 1st round draft pick (Tari Eason was later selected), a 2023 1st round draft pick, a 2024 1st round draft pick (Reed Sheppard was later selected), a 2025 1st round draft pick, a 2026 1st round draft pick (Mikel Brown Jr. was later selected) and a 2027 1st round draft pick to the Houston Rockets; the Brooklyn Nets traded Caris Levert to the Indiana Pacers; the Cleveland Cavaliers traded Dante Exum and a 2022 1st round draft pick (MarJon Beauchamp was later selected) to the Houston Rockets; the Cleveland Cavaliers traded cash and a 2024 2nd round draft pick (Tristen Newton was later selected) to the Indiana Pacers; the Houston Rockets traded James Harden to the Brooklyn Nets; the Houston Rockets traded a 2023 2nd round draft pick (Jalen Pickett was later selected) to the Indiana Pacers; and the Indiana Pacers traded Victor Oladipo to the Houston Rockets. 2024 2nd-rd pick is CLE own 2026 1st-rd draft pick was BRK own 2021 1st-rd pick was a right to swap, did not convey 2023 1st-rd pick was a right to swap, did not convey 2025 1st-rd pick is a right to swap; later renegotiated in another trade 2027 1st-rd pick is a right to swap 2022 1st-rd draft pick was MIL own 2023 2nd-rd pick was HOU own

## 119. [score 17] BRK — 2017-06-22 → 2023-02-09 (3 links)

**Start:** Kyle Kuzma / Brook Lopez
**Target:** Juan Vaulet / Mikal Bridges / Cameron Johnson

1. **2017-06-22** (BRK-LAL) — sent `Kyle Kuzma, Brook Lopez`, received `Timofey Mozgov, D'Angelo Russell`
   > The Brooklyn Nets traded Kyle Kuzma and Brook Lopez to the Los Angeles Lakers for Timofey Mozgov and D'Angelo Russell.
2. **2019-07-07** (BRK-GSW) — sent `D'Angelo Russell`, received `Kevin Durant`
   > The Brooklyn Nets traded Treveon Graham, Shabazz Napier and D'Angelo Russell to the Golden State Warriors for Kevin Durant and a 2025 2nd round draft pick (Javon Small was later selected). Conditional 2020 1st-rd pick did not convey; else 2025 2nd-rd pick
3. **2023-02-09** (BRK-IND-PHO-MIL) — sent `Kevin Durant`, received `Juan Vaulet, Mikal Bridges, Cameron Johnson`
   > In a 4-team trade, the Brooklyn Nets traded cash to the Indiana Pacers; the Brooklyn Nets traded Kevin Durant and T.J. Warren to the Phoenix Suns; the Indiana Pacers traded Juan Vaulet to the Brooklyn Nets; the Milwaukee Bucks traded a 2028 2nd round draft pick and a 2029 2nd round draft pick to the Brooklyn Nets; the Milwaukee Bucks traded George Hill, Serge Ibaka, Jordan Nwora, a 2023 2nd round draft pick (Isaiah Wong was later selected), a 2024 2nd round draft pick (Quinten Post was later selected) and a 2025 2nd round draft pick (Taelon Peter was later selected) to the Indiana Pacers; the Phoenix Suns traded Mikal Bridges, Cameron Johnson, a 2023 1st round draft pick (Noah Clowney was later selected), a 2025 1st round draft pick (Khaman Maluach was later selected), a 2027 1st round draft pick, a 2028 1st round draft pick and a 2029 1st round draft pick to the Brooklyn Nets; and the Phoenix Suns traded Jae Crowder to the Milwaukee Bucks. 2023 2nd-rd pick was CLE own 2024 2nd-rd pick is MIL own 2025 2nd-rd pick is IND own Brooklyn also received multiple trade exceptions 2023 1st-rd pick was PHO own 2025 1st-rd pick is PHO own 2027 1st-rd pick is PHO own 2028 1st-rd pick is a right to swap 2029 1st-rd pick is PHO own 2028 2nd-rd pick is MIL own 2029 2nd-rd pick is MIL own

## 120. [score 17] BRK — 2019-07-07 → 2024-07-06 (3 links)

**Start:** Treveon Graham / Shabazz Napier / D'Angelo Russell
**Target:** Bojan Bogdanovic / Mamadi Diakite / Shake Milton

1. **2019-07-07** (BRK-GSW) — sent `Treveon Graham, Shabazz Napier, D'Angelo Russell`, received `Kevin Durant`
   > The Brooklyn Nets traded Treveon Graham, Shabazz Napier and D'Angelo Russell to the Golden State Warriors for Kevin Durant and a 2025 2nd round draft pick (Javon Small was later selected). Conditional 2020 1st-rd pick did not convey; else 2025 2nd-rd pick
2. **2023-02-09** (BRK-IND-PHO-MIL) — sent `Kevin Durant`, received `Juan Vaulet, Mikal Bridges, Cameron Johnson`
   > In a 4-team trade, the Brooklyn Nets traded cash to the Indiana Pacers; the Brooklyn Nets traded Kevin Durant and T.J. Warren to the Phoenix Suns; the Indiana Pacers traded Juan Vaulet to the Brooklyn Nets; the Milwaukee Bucks traded a 2028 2nd round draft pick and a 2029 2nd round draft pick to the Brooklyn Nets; the Milwaukee Bucks traded George Hill, Serge Ibaka, Jordan Nwora, a 2023 2nd round draft pick (Isaiah Wong was later selected), a 2024 2nd round draft pick (Quinten Post was later selected) and a 2025 2nd round draft pick (Taelon Peter was later selected) to the Indiana Pacers; the Phoenix Suns traded Mikal Bridges, Cameron Johnson, a 2023 1st round draft pick (Noah Clowney was later selected), a 2025 1st round draft pick (Khaman Maluach was later selected), a 2027 1st round draft pick, a 2028 1st round draft pick and a 2029 1st round draft pick to the Brooklyn Nets; and the Phoenix Suns traded Jae Crowder to the Milwaukee Bucks. 2023 2nd-rd pick was CLE own 2024 2nd-rd pick is MIL own 2025 2nd-rd pick is IND own Brooklyn also received multiple trade exceptions 2023 1st-rd pick was PHO own 2025 1st-rd pick is PHO own 2027 1st-rd pick is PHO own 2028 1st-rd pick is a right to swap 2029 1st-rd pick is PHO own 2028 2nd-rd pick is MIL own 2029 2nd-rd pick is MIL own
3. **2024-07-06** (BRK-NYK) — sent `Mikal Bridges, Juan Pablo Vaulet`, received `Bojan Bogdanovic, Mamadi Diakite, Shake Milton`
   > The Brooklyn Nets traded Keita Bates-Diop, Mikal Bridges, Juan Pablo Vaulet and a 2026 2nd round draft pick (Jaron Pierre Jr. was later selected) to the New York Knicks for Bojan Bogdanovic, Mamadi Diakite, Shake Milton, a 2025 1st round draft pick (Ben Saraf was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2025 2nd round draft pick (Adou Thiero was later selected), a 2027 1st round draft pick, a 2028 1st round draft pick, a 2029 1st round draft pick and a 2031 1st round draft pick. 2026 2nd-rd pick was least favorable of ORL/DET/MIL, became DET 2026 2nd-rd pick 2025 1st-rd pick is NYK own conditional 2025 1st-rd pick is MIL own 2025 2nd-rd pick is BRK own 2027 1st-rd pick is NYK own 2028 1st-rd pick is a swap 2029 1st-rd pick is NYK own 2031 1st-rd pick is NYK own, Brooklyn also received trade exceptions

## 121. [score 17] BRK — 2019-07-07 → 2025-07-08 (3 links)

**Start:** Treveon Graham / Shabazz Napier / D'Angelo Russell
**Target:** Michael Porter Jr.

1. **2019-07-07** (BRK-GSW) — sent `Treveon Graham, Shabazz Napier, D'Angelo Russell`, received `Kevin Durant`
   > The Brooklyn Nets traded Treveon Graham, Shabazz Napier and D'Angelo Russell to the Golden State Warriors for Kevin Durant and a 2025 2nd round draft pick (Javon Small was later selected). Conditional 2020 1st-rd pick did not convey; else 2025 2nd-rd pick
2. **2023-02-09** (BRK-IND-PHO-MIL) — sent `Kevin Durant`, received `Juan Vaulet, Mikal Bridges, Cameron Johnson`
   > In a 4-team trade, the Brooklyn Nets traded cash to the Indiana Pacers; the Brooklyn Nets traded Kevin Durant and T.J. Warren to the Phoenix Suns; the Indiana Pacers traded Juan Vaulet to the Brooklyn Nets; the Milwaukee Bucks traded a 2028 2nd round draft pick and a 2029 2nd round draft pick to the Brooklyn Nets; the Milwaukee Bucks traded George Hill, Serge Ibaka, Jordan Nwora, a 2023 2nd round draft pick (Isaiah Wong was later selected), a 2024 2nd round draft pick (Quinten Post was later selected) and a 2025 2nd round draft pick (Taelon Peter was later selected) to the Indiana Pacers; the Phoenix Suns traded Mikal Bridges, Cameron Johnson, a 2023 1st round draft pick (Noah Clowney was later selected), a 2025 1st round draft pick (Khaman Maluach was later selected), a 2027 1st round draft pick, a 2028 1st round draft pick and a 2029 1st round draft pick to the Brooklyn Nets; and the Phoenix Suns traded Jae Crowder to the Milwaukee Bucks. 2023 2nd-rd pick was CLE own 2024 2nd-rd pick is MIL own 2025 2nd-rd pick is IND own Brooklyn also received multiple trade exceptions 2023 1st-rd pick was PHO own 2025 1st-rd pick is PHO own 2027 1st-rd pick is PHO own 2028 1st-rd pick is a right to swap 2029 1st-rd pick is PHO own 2028 2nd-rd pick is MIL own 2029 2nd-rd pick is MIL own
3. **2025-07-08** (BRK-DEN) — sent `Cameron Johnson`, received `Michael Porter Jr.`
   > The Brooklyn Nets traded Cameron Johnson to the Denver Nuggets for Michael Porter Jr. and a 2032 1st round draft pick. 2032 1st-rd pick is DEN own Denver also received a trade exception

## 122. [score 17] BRK — 2023-02-09 → 2024-12-29 (3 links)

**Start:** Kevin Durant / T.J. Warren
**Target:** Maxwell Lewis / D'Angelo Russell

1. **2023-02-09** (BRK-IND-PHO-MIL) — sent `Kevin Durant, T.J. Warren`, received `Juan Vaulet, Mikal Bridges, Cameron Johnson`
   > In a 4-team trade, the Brooklyn Nets traded cash to the Indiana Pacers; the Brooklyn Nets traded Kevin Durant and T.J. Warren to the Phoenix Suns; the Indiana Pacers traded Juan Vaulet to the Brooklyn Nets; the Milwaukee Bucks traded a 2028 2nd round draft pick and a 2029 2nd round draft pick to the Brooklyn Nets; the Milwaukee Bucks traded George Hill, Serge Ibaka, Jordan Nwora, a 2023 2nd round draft pick (Isaiah Wong was later selected), a 2024 2nd round draft pick (Quinten Post was later selected) and a 2025 2nd round draft pick (Taelon Peter was later selected) to the Indiana Pacers; the Phoenix Suns traded Mikal Bridges, Cameron Johnson, a 2023 1st round draft pick (Noah Clowney was later selected), a 2025 1st round draft pick (Khaman Maluach was later selected), a 2027 1st round draft pick, a 2028 1st round draft pick and a 2029 1st round draft pick to the Brooklyn Nets; and the Phoenix Suns traded Jae Crowder to the Milwaukee Bucks. 2023 2nd-rd pick was CLE own 2024 2nd-rd pick is MIL own 2025 2nd-rd pick is IND own Brooklyn also received multiple trade exceptions 2023 1st-rd pick was PHO own 2025 1st-rd pick is PHO own 2027 1st-rd pick is PHO own 2028 1st-rd pick is a right to swap 2029 1st-rd pick is PHO own 2028 2nd-rd pick is MIL own 2029 2nd-rd pick is MIL own
2. **2024-07-06** (BRK-NYK) — sent `Mikal Bridges, Juan Pablo Vaulet`, received `Bojan Bogdanovic, Mamadi Diakite, Shake Milton`
   > The Brooklyn Nets traded Keita Bates-Diop, Mikal Bridges, Juan Pablo Vaulet and a 2026 2nd round draft pick (Jaron Pierre Jr. was later selected) to the New York Knicks for Bojan Bogdanovic, Mamadi Diakite, Shake Milton, a 2025 1st round draft pick (Ben Saraf was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2025 2nd round draft pick (Adou Thiero was later selected), a 2027 1st round draft pick, a 2028 1st round draft pick, a 2029 1st round draft pick and a 2031 1st round draft pick. 2026 2nd-rd pick was least favorable of ORL/DET/MIL, became DET 2026 2nd-rd pick 2025 1st-rd pick is NYK own conditional 2025 1st-rd pick is MIL own 2025 2nd-rd pick is BRK own 2027 1st-rd pick is NYK own 2028 1st-rd pick is a swap 2029 1st-rd pick is NYK own 2031 1st-rd pick is NYK own, Brooklyn also received trade exceptions
3. **2024-12-29** (BRK-LAL) — sent `Shake Milton`, received `Maxwell Lewis, D'Angelo Russell`
   > The Brooklyn Nets traded Dorian Finney-Smith and Shake Milton to the Los Angeles Lakers for Maxwell Lewis, D'Angelo Russell, a 2027 2nd round draft pick, a 2030 2nd round draft pick and a 2031 2nd round draft pick. Los Angeles also received trade exceptions Brooklyn also received a trade exception 2027 2nd-rd pick is LAL own 2030 2nd-rd pick is LAL own 2031 2nd-rd pick is LAL own

## 123. [score 17] NOP — 2013-07-12 → 2021-08-07 (3 links)

**Start:** Nerlens Noel
**Target:** Devonte' Graham / Brandon Boston Jr. / Trey Murphy III / Jonas Valančiūnas

1. **2013-07-12** (NOP-PHI) — sent `Nerlens Noel`, received `Jrue Holiday, Pierre Jackson`
   > The New Orleans Pelicans traded Nerlens Noel and a 2014 1st round draft pick (Elfrid Payton was later selected) to the Philadelphia 76ers for Jrue Holiday and Pierre Jackson.
2. **2020-11-23** (DEN-OKC-MIL-NOP) — sent `Jrue Holiday`, received `Eric Bledsoe, Steven Adams`
   > In a 4-team trade, the Denver Nuggets traded a 2023 1st round draft pick (Nick Smith Jr. was later selected) to the Oklahoma City Thunder; the Milwaukee Bucks traded R.J. Hampton to the Denver Nuggets; the Milwaukee Bucks traded Eric Bledsoe, a 2024 1st round draft pick (Yves Missi was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2026 1st round draft pick and a 2027 1st round draft pick to the New Orleans Pelicans; the Milwaukee Bucks traded George Hill to the Oklahoma City Thunder; the New Orleans Pelicans traded Jrue Holiday and Sam Merrill to the Milwaukee Bucks; the New Orleans Pelicans traded Zylan Cheatham, Joshia Gray, Darius Miller, Kenrich Williams, a 2023 2nd round draft pick (Hunter Tyson was later selected) and a 2024 2nd round draft pick (Tyler Kolek was later selected) to the Oklahoma City Thunder; and the Oklahoma City Thunder traded Steven Adams to the New Orleans Pelicans. New Orleans acquires right to swap 2024 1st-rd pick with Milwaukee 2025 1st-rd pick is MIL own New Orleans acquired right to swap 2026 1st-rd pick with Milwaukee, did not convey 2027 1st-rd pick is MIL own 2023 top-14 protected 1st-rd pick was DEN own 2023 2nd-rd pick was WAS own 2024 2nd-rd pick is CHO own
3. **2021-08-07** (CHO-NOP-MEM) — sent `Steven Adams, Eric Bledsoe`, received `Devonte' Graham, Brandon Boston Jr., Trey Murphy III, Jonas Valančiūnas`
   > In a 3-team trade, the Charlotte Hornets traded Devonte' Graham to the New Orleans Pelicans; the Memphis Grizzlies traded Tyler Harvey to the Charlotte Hornets; the Memphis Grizzlies traded Brandon Boston Jr., Trey Murphy III and Jonas Valančiūnas to the New Orleans Pelicans; the New Orleans Pelicans traded Wesley Iwundu, cash and a 2022 1st round draft pick (Mark Williams was later selected) to the Charlotte Hornets; and the New Orleans Pelicans traded Steven Adams, Eric Bledsoe, Jared Butler, Ziaire Williams, a 2022 2nd round draft pick (Vince Williams Jr. was later selected) and a 2025 2nd round draft pick (Ryan Kalkbrenner was later selected) to the Memphis Grizzlies. via sign and trade 2022 conditional 1st-rd pick did not convey, becomes 2022 2nd-rd pick and 2025 2nd-rd pick 2025 2nd-rd pick is NOP own 2022 conditional 1st-rd pick is NOP own

## 124. [score 17] NOP — 2019-07-06 → 2022-02-08 (3 links)

**Start:** Anthony Davis
**Target:** CJ McCollum / Larry Nance Jr. / Tony Snell

1. **2019-07-06** (LAL-NOP-WAS) — sent `Anthony Davis`, received `Lonzo Ball, Josh Hart, De'Andre Hunter, Brandon Ingram`
   > In a 3-team trade, the Los Angeles Lakers traded Lonzo Ball, Josh Hart, De'Andre Hunter, Brandon Ingram, cash, a 2022 1st round draft pick (Dyson Daniels was later selected), a 2023 1st round draft pick and a 2025 1st round draft pick (Drake Powell was later selected) to the New Orleans Pelicans; the Los Angeles Lakers traded Isaac Bonga, Jemerrio Jones, Moritz Wagner and a 2022 2nd round draft pick (Kennedy Chandler was later selected) to the Washington Wizards; the New Orleans Pelicans traded Anthony Davis to the Los Angeles Lakers; and the Washington Wizards traded cash to the New Orleans Pelicans. (9-30 protected, unprotected in 2022) 2023 first-round pick was right to swap with LAL NOP exercised option to defer 2024 first-round pick to 2025. $1MM $1.1MM 2022 2nd-rd pick is LAL own
2. **2019-07-07** (ATL-NOP) — sent `De'Andre Hunter`, received `Nickeil Alexander-Walker, Jaxson Hayes, Marcos Louzada Silva`
   > The Atlanta Hawks traded Nickeil Alexander-Walker, Jaxson Hayes, Marcos Louzada Silva, a 2021 2nd round draft pick (Herbert Jones was later selected) and a 2022 2nd round draft pick (Vince Williams Jr. was later selected) to the New Orleans Pelicans for Jordan Bone, Solomon Hill, De'Andre Hunter and a 2023 2nd round draft pick (Seth Lundy was later selected). 2023 2nd-rd pick was 31-45 protected 2020 1st-rd pick did not convey, becomes two 2nd-rd picks in 2021 and 2022 2022 2nd-rd pick is CLE own
3. **2022-02-08** (NOP-POR) — sent `Nickeil Alexander-Walker, Didi Louzada`, received `CJ McCollum, Larry Nance Jr., Tony Snell`
   > The New Orleans Pelicans traded Nickeil Alexander-Walker, Josh Hart, Didi Louzada, Tomas Satoransky, a 2025 1st round draft pick (Nolan Traoré was later selected), a 2026 2nd round draft pick (Braden Smith was later selected) and a 2027 2nd round draft pick to the Portland Trail Blazers for CJ McCollum, Larry Nance Jr. and Tony Snell. New Orleans also received a trade exception Portland also received a trade exception 2022 1st-rd pick did not convey; became 2025 1st-rd pick 2026 2nd-rd pick was more favorable of POR and NOP, became NOP 2026 2nd-rd pick 2027 2nd-rd pick is NOP own

## 125. [score 17] NOP — 2019-07-06 → 2024-07-06 (3 links)

**Start:** Anthony Davis
**Target:** Dejounte Murray

1. **2019-07-06** (LAL-NOP-WAS) — sent `Anthony Davis`, received `Lonzo Ball, Josh Hart, De'Andre Hunter, Brandon Ingram`
   > In a 3-team trade, the Los Angeles Lakers traded Lonzo Ball, Josh Hart, De'Andre Hunter, Brandon Ingram, cash, a 2022 1st round draft pick (Dyson Daniels was later selected), a 2023 1st round draft pick and a 2025 1st round draft pick (Drake Powell was later selected) to the New Orleans Pelicans; the Los Angeles Lakers traded Isaac Bonga, Jemerrio Jones, Moritz Wagner and a 2022 2nd round draft pick (Kennedy Chandler was later selected) to the Washington Wizards; the New Orleans Pelicans traded Anthony Davis to the Los Angeles Lakers; and the Washington Wizards traded cash to the New Orleans Pelicans. (9-30 protected, unprotected in 2022) 2023 first-round pick was right to swap with LAL NOP exercised option to defer 2024 first-round pick to 2025. $1MM $1.1MM 2022 2nd-rd pick is LAL own
2. **2022-02-08** (NOP-POR) — sent `Josh Hart`, received `CJ McCollum, Larry Nance Jr., Tony Snell`
   > The New Orleans Pelicans traded Nickeil Alexander-Walker, Josh Hart, Didi Louzada, Tomas Satoransky, a 2025 1st round draft pick (Nolan Traoré was later selected), a 2026 2nd round draft pick (Braden Smith was later selected) and a 2027 2nd round draft pick to the Portland Trail Blazers for CJ McCollum, Larry Nance Jr. and Tony Snell. New Orleans also received a trade exception Portland also received a trade exception 2022 1st-rd pick did not convey; became 2025 1st-rd pick 2026 2nd-rd pick was more favorable of POR and NOP, became NOP 2026 2nd-rd pick 2027 2nd-rd pick is NOP own
3. **2024-07-06** (ATL-NOP) — sent `Larry Nance Jr.`, received `Dejounte Murray`
   > The Atlanta Hawks traded Dejounte Murray to the New Orleans Pelicans for Dyson Daniels, E.J. Liddell, Larry Nance Jr., Cody Zeller, a 2025 1st round draft pick (Drake Powell was later selected) and a 2027 1st round draft pick. 2025 1st-rd pick is LAL own 2027 1st-rd pick least favorable, Atlanta also received a trade exception

## 126. [score 17] NOP — 2020-11-23 → 2023-02-09 (3 links)

**Start:** Jrue Holiday / Sam Merrill / Zylan Cheatham / Joshia Gray / Darius Miller / Kenrich Williams
**Target:** Josh Richardson

1. **2020-11-23** (DEN-OKC-MIL-NOP) — sent `Jrue Holiday, Sam Merrill, Zylan Cheatham, Joshia Gray, Darius Miller, Kenrich Williams`, received `Eric Bledsoe, Steven Adams`
   > In a 4-team trade, the Denver Nuggets traded a 2023 1st round draft pick (Nick Smith Jr. was later selected) to the Oklahoma City Thunder; the Milwaukee Bucks traded R.J. Hampton to the Denver Nuggets; the Milwaukee Bucks traded Eric Bledsoe, a 2024 1st round draft pick (Yves Missi was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2026 1st round draft pick and a 2027 1st round draft pick to the New Orleans Pelicans; the Milwaukee Bucks traded George Hill to the Oklahoma City Thunder; the New Orleans Pelicans traded Jrue Holiday and Sam Merrill to the Milwaukee Bucks; the New Orleans Pelicans traded Zylan Cheatham, Joshia Gray, Darius Miller, Kenrich Williams, a 2023 2nd round draft pick (Hunter Tyson was later selected) and a 2024 2nd round draft pick (Tyler Kolek was later selected) to the Oklahoma City Thunder; and the Oklahoma City Thunder traded Steven Adams to the New Orleans Pelicans. New Orleans acquires right to swap 2024 1st-rd pick with Milwaukee 2025 1st-rd pick is MIL own New Orleans acquired right to swap 2026 1st-rd pick with Milwaukee, did not convey 2027 1st-rd pick is MIL own 2023 top-14 protected 1st-rd pick was DEN own 2023 2nd-rd pick was WAS own 2024 2nd-rd pick is CHO own
2. **2021-08-07** (CHO-NOP-MEM) — sent `Steven Adams, Eric Bledsoe`, received `Devonte' Graham, Brandon Boston Jr., Trey Murphy III, Jonas Valančiūnas`
   > In a 3-team trade, the Charlotte Hornets traded Devonte' Graham to the New Orleans Pelicans; the Memphis Grizzlies traded Tyler Harvey to the Charlotte Hornets; the Memphis Grizzlies traded Brandon Boston Jr., Trey Murphy III and Jonas Valančiūnas to the New Orleans Pelicans; the New Orleans Pelicans traded Wesley Iwundu, cash and a 2022 1st round draft pick (Mark Williams was later selected) to the Charlotte Hornets; and the New Orleans Pelicans traded Steven Adams, Eric Bledsoe, Jared Butler, Ziaire Williams, a 2022 2nd round draft pick (Vince Williams Jr. was later selected) and a 2025 2nd round draft pick (Ryan Kalkbrenner was later selected) to the Memphis Grizzlies. via sign and trade 2022 conditional 1st-rd pick did not convey, becomes 2022 2nd-rd pick and 2025 2nd-rd pick 2025 2nd-rd pick is NOP own 2022 conditional 1st-rd pick is NOP own
3. **2023-02-09** (NOP-SAS) — sent `Devonte' Graham`, received `Josh Richardson`
   > The New Orleans Pelicans traded Devonte' Graham, a 2024 2nd round draft pick (Adem Bona was later selected), a 2026 2nd round draft pick (Ja'Kobi Gillespie was later selected), a 2028 2nd round draft pick and a 2029 2nd round draft pick to the San Antonio Spurs for Josh Richardson. 2024 2nd-rd pick is more favorable 2026 2nd-rd pick was least favorable of NOP and POR, became POR 2026 2nd-rd pick 2028 2nd-rd pick is NOP own 2029 2nd-rd pick is NOP own

## 127. [score 17] NOP — 2021-08-08 → 2024-07-06 (3 links)

**Start:** Lonzo Ball
**Target:** Dejounte Murray

1. **2021-08-08** (CHI-NOP) — sent `Lonzo Ball`, received `Tomáš Satoranský, Garrett Temple`
   > The Chicago Bulls traded Tomáš Satoranský, Garrett Temple, cash and a 2024 2nd round draft pick (Adem Bona was later selected) to the New Orleans Pelicans for Lonzo Ball. 2024 2nd-rd pick is CHI own
2. **2022-02-08** (NOP-POR) — sent `Tomas Satoransky`, received `CJ McCollum, Larry Nance Jr., Tony Snell`
   > The New Orleans Pelicans traded Nickeil Alexander-Walker, Josh Hart, Didi Louzada, Tomas Satoransky, a 2025 1st round draft pick (Nolan Traoré was later selected), a 2026 2nd round draft pick (Braden Smith was later selected) and a 2027 2nd round draft pick to the Portland Trail Blazers for CJ McCollum, Larry Nance Jr. and Tony Snell. New Orleans also received a trade exception Portland also received a trade exception 2022 1st-rd pick did not convey; became 2025 1st-rd pick 2026 2nd-rd pick was more favorable of POR and NOP, became NOP 2026 2nd-rd pick 2027 2nd-rd pick is NOP own
3. **2024-07-06** (ATL-NOP) — sent `Larry Nance Jr.`, received `Dejounte Murray`
   > The Atlanta Hawks traded Dejounte Murray to the New Orleans Pelicans for Dyson Daniels, E.J. Liddell, Larry Nance Jr., Cody Zeller, a 2025 1st round draft pick (Drake Powell was later selected) and a 2027 1st round draft pick. 2025 1st-rd pick is LAL own 2027 1st-rd pick least favorable, Atlanta also received a trade exception

## 128. [score 17] CHO — 2024-02-08 → 2025-06-29 (3 links)

**Start:** Gordon Hayward
**Target:** Collin Sexton

1. **2024-02-08** (CHO-OKC) — sent `Gordon Hayward`, received `Davis Bertans, Tre Mann, Vasilije Micić`
   > The Charlotte Hornets traded Gordon Hayward to the Oklahoma City Thunder for Davis Bertans, Tre Mann, Vasilije Micić, cash, a 2024 2nd round draft pick (KJ Simpson was later selected) and a 2025 2nd round draft pick (Johni Broome was later selected). 2024 2nd-rd pick is HOU own 2025 2nd-rd pick is PHI own Charlotte also received a trade exception
2. **2025-02-06** (CHO-PHO) — sent `Vasilije Micić`, received `Jusuf Nurkic`
   > The Charlotte Hornets traded Cody Martin, Vasilije Micić and a 2026 2nd round draft pick (Vsevolod Ishchenko was later selected) to the Phoenix Suns for Jusuf Nurkic and a 2026 1st round draft pick (Christian Anderson Jr. was later selected). Phoenix also received a trade exception 2026 1st-rd pick was least favorable of PHO, WAS, ORL, MEM, became ORL 2026 1st-rd pick 2026 2nd-rd pick was least favorable of DEN and GSW, became DEN 2026 2nd-rd pick
3. **2025-06-29** (CHO-UTA) — sent `Jusuf Nurkic`, received `Collin Sexton`
   > The Charlotte Hornets traded Jusuf Nurkic to the Utah Jazz for Collin Sexton. Utah also received a trade exception

## 129. [score 16] ORL — 2012-07-11 → 2016-06-23 (4 links)

**Start:** Ryan Anderson
**Target:** Serge Ibaka

1. **2012-07-11** (NOH-ORL) — sent `Ryan Anderson`, received `Gustavo Ayón`
   > The New Orleans Hornets traded Gustavo Ayón to the Orlando Magic for Ryan Anderson.
2. **2013-02-21** (MIL-ORL) — sent `Gustavo Ayón`, received `Tobias Harris, Doron Lamb, Beno Udrih`
   > The Milwaukee Bucks traded Tobias Harris, Doron Lamb, Beno Udrih and cash to the Orlando Magic for Gustavo Ayón, J.J. Redick and Ish Smith.
3. **2016-02-16** (DET-ORL) — sent `Tobias Harris`, received `Ersan İlyasova, Brandon Jennings`
   > The Detroit Pistons traded Ersan İlyasova and Brandon Jennings to the Orlando Magic for Tobias Harris.
4. **2016-06-23** (OKC-ORL) — sent `Ersan İlyasova`, received `Serge Ibaka`
   > The Oklahoma City Thunder traded Serge Ibaka to the Orlando Magic for Ersan İlyasova, Victor Oladipo and Domantas Sabonis.

## 130. [score 16] TOR — 2012-07-11 → 2024-02-08 (4 links)

**Start:** Gary Forbes
**Target:** Spencer Dinwiddie

1. **2012-07-11** (HOU-TOR) — sent `Gary Forbes`, received `Kyle Lowry`
   > The Houston Rockets traded Kyle Lowry to the Toronto Raptors for Gary Forbes and a 2013 1st round draft pick (Steven Adams was later selected).
2. **2021-08-06** (MIA-TOR) — sent `Kyle Lowry`, received `Precious Achiuwa, Goran Dragic`
   > The Miami Heat traded Precious Achiuwa and Goran Dragic to the Toronto Raptors for Kyle Lowry. Toronto also received a trade exception
3. **2022-02-10** (SAS-TOR) — sent `Goran Dragic`, received `Drew Eubanks, Thaddeus Young`
   > The San Antonio Spurs traded Drew Eubanks, Thaddeus Young and a 2022 2nd round draft pick (Christian Koloko was later selected) to the Toronto Raptors for Goran Dragic and a 2022 1st round draft pick (Malaki Branham was later selected). Toronto also received a trade exception 2022 2nd-rd pick is DET own 2022 1st-rd pick is top-14 protected
4. **2024-02-08** (BRK-TOR) — sent `Thaddeus Young`, received `Spencer Dinwiddie`
   > The Brooklyn Nets traded Spencer Dinwiddie to the Toronto Raptors for Dennis Schroder and Thaddeus Young. Brooklyn also received a trade exception

## 131. [score 16] DET — 2015-02-24 → 2018-01-29 (4 links)

**Start:** 
**Target:** Blake Griffin / Brice Johnson / Willie Reed

1. **2015-02-24** (DET-NOP) — sent ``, received `Shawne Williams`
   > The Detroit Pistons claimed Shawne Williams on waivers from the New Orleans Pelicans.
2. **2015-06-11** (DET-MIL) — sent `Shawne Williams`, received `Ersan İlyasova`
   > The Detroit Pistons traded Caron Butler and Shawne Williams to the Milwaukee Bucks for Ersan İlyasova.
3. **2016-02-16** (DET-ORL) — sent `Ersan İlyasova`, received `Tobias Harris`
   > The Detroit Pistons traded Ersan İlyasova and Brandon Jennings to the Orlando Magic for Tobias Harris.
4. **2018-01-29** (DET-LAC) — sent `Tobias Harris`, received `Blake Griffin, Brice Johnson, Willie Reed`
   > The Detroit Pistons traded Avery Bradley, Tobias Harris, Boban Marjanović, a 2018 1st round draft pick (Miles Bridges was later selected) and a 2019 2nd round draft pick (Jaylen Hands was later selected) to the Los Angeles Clippers for Blake Griffin, Brice Johnson and Willie Reed.

## 132. [score 16] DET — 2020-11-22 → 2025-07-07 (4 links)

**Start:** 
**Target:** Duncan Robinson

1. **2020-11-22** (DEN-DET) — sent ``, received `Jerami Grant, Nikola Radičević`
   > The Denver Nuggets traded Jerami Grant and Nikola Radičević to the Detroit Pistons for cash. Denver also received a trade exception.
2. **2022-07-06** (DET-POR) — sent `Jerami Grant`, received `Gabriele Procida`
   > The Detroit Pistons traded Jerami Grant and Ismael Kamagate to the Portland Trail Blazers for Gabriele Procida, a 2025 1st round draft pick (Nolan Traoré was later selected), a 2025 2nd round draft pick (Bogoljub Markovic was later selected) and a 2026 2nd round draft pick (Braden Smith was later selected). Detroit also received a trade exception conditional 2025 1st-rd pick is MIL own 2025 2nd-rd pick is DET own 2026 2nd-rd pick was more favorable of POR and NOP, became NOP 2026 2nd-rd pick
3. **2024-02-08** (DET-UTA) — sent `Gabriele Procida`, received `Simone Fontecchio`
   > The Detroit Pistons traded Kevin Knox, Gabriele Procida and a 2024 2nd round draft pick (Kyle Filipowski was later selected) to the Utah Jazz for Simone Fontecchio. Utah also received a trade exception 2024 2nd-rd pick is more favorable
4. **2025-07-07** (DET-MIA) — sent `Simone Fontecchio`, received `Duncan Robinson`
   > The Detroit Pistons traded Simone Fontecchio to the Miami Heat for Duncan Robinson. Miami also received a trade exception

## 133. [score 16] LAC — 2010-06-24 → 2026-02-04 (4 links)

**Start:** 
**Target:** Darius Garland

1. **2010-06-24** (LAC-OKC) — sent ``, received `Eric Bledsoe`
   > The Los Angeles Clippers traded a 2012 1st round draft pick (Fab Melo was later selected) to the Oklahoma City Thunder for Eric Bledsoe.
2. **2022-02-04** (LAC-POR) — sent `Eric Bledsoe`, received `Robert Covington, Norman Powell`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own
3. **2023-11-01** (LAC-OKC-PHI) — sent `Robert Covington`, received `James Harden, Filip Petrusev, P.J. Tucker`
   > In a 3-team trade, the Los Angeles Clippers traded a 2027 1st round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris, cash, a 2024 2nd round draft pick (Juan Nunez was later selected), a 2028 1st round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick to the Philadelphia 76ers; the Oklahoma City Thunder traded a 2026 1st round draft pick (Koa Peat was later selected) to the Philadelphia 76ers; and the Philadelphia 76ers traded James Harden, Filip Petrusev and P.J. Tucker to the Los Angeles Clippers. 2027 1st-rd pick is a right to swap 2024 2nd-rd pick is more favorable 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2028 1st-rd pick is LAC own 2029 1st-rd pick is a swap 2029 2nd-rd pick is LAC own Philadelphia also received trade exceptions
4. **2026-02-04** (CLE-LAC) — sent `James Harden`, received `Darius Garland`
   > The Cleveland Cavaliers traded Darius Garland and a 2026 2nd round draft pick (Henri Veesaar was later selected) to the Los Angeles Clippers for James Harden. 2026 2nd-rd pick was CLE own

## 134. [score 16] LAC — 2016-06-23 → 2023-11-01 (4 links)

**Start:** Cheick Diallo
**Target:** James Harden / Filip Petrusev / P.J. Tucker

1. **2016-06-23** (LAC-NOP) — sent `Cheick Diallo`, received `David Michineau, Diamond Stone`
   > The Los Angeles Clippers traded Cheick Diallo to the New Orleans Pelicans for David Michineau and Diamond Stone.
2. **2022-02-10** (DET-MIL-SAC-LAC) — sent `David Michineau`, received `Rodney Hood, Semi Ojeleye, Vanja Marinkovic`
   > In a 4-team trade, the Detroit Pistons traded a 2023 2nd round draft pick (Isaiah Wong was later selected) to the Milwaukee Bucks; the Detroit Pistons traded Josh Jackson and Trey Lyles to the Sacramento Kings; the Los Angeles Clippers traded Serge Ibaka and cash to the Milwaukee Bucks; the Los Angeles Clippers traded David Michineau to the Sacramento Kings; the Milwaukee Bucks traded Rodney Hood and Semi Ojeleye to the Los Angeles Clippers; the Milwaukee Bucks traded Donte DiVincenzo to the Sacramento Kings; the Sacramento Kings traded Marvin Bagley III to the Detroit Pistons; the Sacramento Kings traded Vanja Marinkovic to the Los Angeles Clippers; and the Sacramento Kings traded a 2024 2nd round draft pick (Tyler Smith was later selected) to the Milwaukee Bucks.
3. **2023-07-08** (ATL-HOU-LAC-MEM-OKC) — sent `Vanja Marinkovic`, received `Kenyon Martin`
   > In a 5-team trade, the Atlanta Hawks traded Alpha Kaba to the Houston Rockets; the Houston Rockets traded Usman Garuba, TyTy Washington Jr., a 2025 2nd round draft pick (Mohamed Diawara was later selected) and a 2028 2nd round draft pick to the Atlanta Hawks; the Houston Rockets traded Kenyon Martin to the Los Angeles Clippers; the Houston Rockets traded Josh Christopher to the Memphis Grizzlies; the Houston Rockets traded Patty Mills, a 2024 2nd round draft pick (KJ Simpson was later selected), a 2029 2nd round draft pick and a 2030 2nd round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded a 2026 2nd round draft pick (Tyler Bilodeau was later selected) and a 2027 2nd round draft pick to the Houston Rockets; the Los Angeles Clippers traded Vanja Marinkovic to the Memphis Grizzlies; the Memphis Grizzlies traded Dillon Brooks to the Houston Rockets; and the Oklahoma City Thunder traded cash to the Atlanta Hawks. 2027 2nd-rd pick is MEM own 2024 2nd-rd pick is HOU own 2025 2nd-rd pick is MIN own conditional 2026 2nd-rd pick was one of LAC/BOS/IND/MIA, became LAC 2026 2nd-rd pick 2028 2nd-rd pick is HOU own 2029 2nd-rd pick is HOU own 2030 2nd-rd pick is HOU own
4. **2023-11-01** (LAC-OKC-PHI) — sent `KJ Martin`, received `James Harden, Filip Petrusev, P.J. Tucker`
   > In a 3-team trade, the Los Angeles Clippers traded a 2027 1st round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris, cash, a 2024 2nd round draft pick (Juan Nunez was later selected), a 2028 1st round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick to the Philadelphia 76ers; the Oklahoma City Thunder traded a 2026 1st round draft pick (Koa Peat was later selected) to the Philadelphia 76ers; and the Philadelphia 76ers traded James Harden, Filip Petrusev and P.J. Tucker to the Los Angeles Clippers. 2027 1st-rd pick is a right to swap 2024 2nd-rd pick is more favorable 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2028 1st-rd pick is LAC own 2029 1st-rd pick is a swap 2029 2nd-rd pick is LAC own Philadelphia also received trade exceptions

## 135. [score 16] LAC — 2019-07-06 → 2022-02-04 (4 links)

**Start:** 
**Target:** Robert Covington / Norman Powell

1. **2019-07-06** (LAC-MIA-PHI-POR) — sent ``, received `Mathias Lessort, Maurice Harkless`
   > In a 4-team trade, the Los Angeles Clippers traded cash to the Miami Heat; the Miami Heat traded a 2023 1st round draft pick (Jaime Jaquez Jr. was later selected) to the Los Angeles Clippers; the Miami Heat traded Josh Richardson to the Philadelphia 76ers; the Miami Heat traded Hassan Whiteside to the Portland Trail Blazers; the Philadelphia 76ers traded Mathias Lessort to the Los Angeles Clippers; the Philadelphia 76ers traded Jimmy Butler to the Miami Heat; the Portland Trail Blazers traded Maurice Harkless to the Los Angeles Clippers; and the Portland Trail Blazers traded Meyers Leonard to the Miami Heat. $110K 2023 1st-rd pick was top-14 protected but eventually returned unprotected to MIA via trade
2. **2020-11-19** (LAC-MIN) — sent `Mathias Lessort`, received `Daniel Oturu`
   > The Los Angeles Clippers traded Mathias Lessort and a 2023 2nd round draft pick (James Nnaji was later selected) to the Minnesota Timberwolves for Daniel Oturu. 2023 2nd-rd pick was DET own
3. **2021-08-16** (LAC-MEM) — sent `Daniel Oturu`, received `Eric Bledsoe`
   > The Los Angeles Clippers traded Patrick Beverley, Daniel Oturu and Rajon Rondo to the Memphis Grizzlies for Eric Bledsoe. Los Angeles also received a trade exception
4. **2022-02-04** (LAC-POR) — sent `Eric Bledsoe`, received `Robert Covington, Norman Powell`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own

## 136. [score 16] LAC — 2020-11-19 → 2023-11-01 (4 links)

**Start:** Mathias Lessort
**Target:** James Harden / Filip Petrusev / P.J. Tucker

1. **2020-11-19** (LAC-MIN) — sent `Mathias Lessort`, received `Daniel Oturu`
   > The Los Angeles Clippers traded Mathias Lessort and a 2023 2nd round draft pick (James Nnaji was later selected) to the Minnesota Timberwolves for Daniel Oturu. 2023 2nd-rd pick was DET own
2. **2021-08-16** (LAC-MEM) — sent `Daniel Oturu`, received `Eric Bledsoe`
   > The Los Angeles Clippers traded Patrick Beverley, Daniel Oturu and Rajon Rondo to the Memphis Grizzlies for Eric Bledsoe. Los Angeles also received a trade exception
3. **2022-02-04** (LAC-POR) — sent `Eric Bledsoe`, received `Robert Covington, Norman Powell`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own
4. **2023-11-01** (LAC-OKC-PHI) — sent `Robert Covington`, received `James Harden, Filip Petrusev, P.J. Tucker`
   > In a 3-team trade, the Los Angeles Clippers traded a 2027 1st round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris, cash, a 2024 2nd round draft pick (Juan Nunez was later selected), a 2028 1st round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick to the Philadelphia 76ers; the Oklahoma City Thunder traded a 2026 1st round draft pick (Koa Peat was later selected) to the Philadelphia 76ers; and the Philadelphia 76ers traded James Harden, Filip Petrusev and P.J. Tucker to the Los Angeles Clippers. 2027 1st-rd pick is a right to swap 2024 2nd-rd pick is more favorable 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2028 1st-rd pick is LAC own 2029 1st-rd pick is a swap 2029 2nd-rd pick is LAC own Philadelphia also received trade exceptions

## 137. [score 16] LAC — 2021-03-25 → 2023-11-01 (4 links)

**Start:** Lou Williams
**Target:** James Harden / Filip Petrusev / P.J. Tucker

1. **2021-03-25** (ATL-LAC) — sent `Lou Williams`, received `Rajon Rondo`
   > The Atlanta Hawks traded Rajon Rondo to the Los Angeles Clippers for Lou Williams, a 2023 2nd round draft pick (Julian Phillips was later selected) and a 2027 2nd round draft pick. 2023 2nd-rd pick was POR own 2027 2nd-rd pick is LAC own
2. **2021-08-16** (LAC-MEM) — sent `Rajon Rondo`, received `Eric Bledsoe`
   > The Los Angeles Clippers traded Patrick Beverley, Daniel Oturu and Rajon Rondo to the Memphis Grizzlies for Eric Bledsoe. Los Angeles also received a trade exception
3. **2022-02-04** (LAC-POR) — sent `Eric Bledsoe`, received `Robert Covington, Norman Powell`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own
4. **2023-11-01** (LAC-OKC-PHI) — sent `Robert Covington`, received `James Harden, Filip Petrusev, P.J. Tucker`
   > In a 3-team trade, the Los Angeles Clippers traded a 2027 1st round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris, cash, a 2024 2nd round draft pick (Juan Nunez was later selected), a 2028 1st round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick to the Philadelphia 76ers; the Oklahoma City Thunder traded a 2026 1st round draft pick (Koa Peat was later selected) to the Philadelphia 76ers; and the Philadelphia 76ers traded James Harden, Filip Petrusev and P.J. Tucker to the Los Angeles Clippers. 2027 1st-rd pick is a right to swap 2024 2nd-rd pick is more favorable 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2028 1st-rd pick is LAC own 2029 1st-rd pick is a swap 2029 2nd-rd pick is LAC own Philadelphia also received trade exceptions

## 138. [score 16] LAC — 2021-07-30 → 2026-02-04 (4 links)

**Start:** Quentin Grimes
**Target:** Darius Garland

1. **2021-07-30** (LAC-NYK) — sent `Quentin Grimes`, received `Keon Johnson`
   > The Los Angeles Clippers traded Quentin Grimes and a 2024 2nd round draft pick (Jonathan Mogbo was later selected) to the New York Knicks for Keon Johnson. 2024 2nd-rd pick is DET own
2. **2022-02-04** (LAC-POR) — sent `Keon Johnson`, received `Robert Covington, Norman Powell`
   > The Los Angeles Clippers traded Eric Bledsoe, Keon Johnson, Justise Winslow and a 2025 2nd round draft pick (Bogoljub Markovic was later selected) to the Portland Trail Blazers for Robert Covington and Norman Powell. Portland also received a trade exception 2025 2nd-rd pick is DET own
3. **2023-11-01** (LAC-OKC-PHI) — sent `Robert Covington`, received `James Harden, Filip Petrusev, P.J. Tucker`
   > In a 3-team trade, the Los Angeles Clippers traded a 2027 1st round draft pick to the Oklahoma City Thunder; the Los Angeles Clippers traded Nicolas Batum, Robert Covington, KJ Martin, Marcus Morris, cash, a 2024 2nd round draft pick (Juan Nunez was later selected), a 2028 1st round draft pick, a 2029 1st round draft pick and a 2029 2nd round draft pick to the Philadelphia 76ers; the Oklahoma City Thunder traded a 2026 1st round draft pick (Koa Peat was later selected) to the Philadelphia 76ers; and the Philadelphia 76ers traded James Harden, Filip Petrusev and P.J. Tucker to the Los Angeles Clippers. 2027 1st-rd pick is a right to swap 2024 2nd-rd pick is more favorable 2026 1st-rd pick was least favorable of OKC, HOU (top 4 protected), and LAC, became OKC 2026 1st-rd pick 2028 1st-rd pick is LAC own 2029 1st-rd pick is a swap 2029 2nd-rd pick is LAC own Philadelphia also received trade exceptions
4. **2026-02-04** (CLE-LAC) — sent `James Harden`, received `Darius Garland`
   > The Cleveland Cavaliers traded Darius Garland and a 2026 2nd round draft pick (Henri Veesaar was later selected) to the Los Angeles Clippers for James Harden. 2026 2nd-rd pick was CLE own

## 139. [score 16] MIN — 2012-06-26 → 2021-08-25 (4 links)

**Start:** 
**Target:** Patrick Beverley

1. **2012-06-26** (HOU-MIN) — sent ``, received `Chase Budinger, Lior Eliyahu`
   > The Houston Rockets traded Chase Budinger and Lior Eliyahu to the Minnesota Timberwolves for a 2012 1st round draft pick (Terrence Jones was later selected).
2. **2019-07-08** (GSW-MIN) — sent `Lior Eliyahu`, received `Treveon Graham, Shabazz Napier`
   > The Golden State Warriors traded Treveon Graham, Shabazz Napier and cash to the Minnesota Timberwolves for Lior Eliyahu. $3.6MM
3. **2020-02-05** (ATL-HOU-MIN-DEN) — sent `Shabazz Napier`, received `Evan Turner, Malik Beasley, Juan Hernangomez, Jarred Vanderbilt`
   > In a 4-team trade, the Atlanta Hawks traded a 2024 2nd round draft pick (Pelle Larsson was later selected) to the Houston Rockets; the Atlanta Hawks traded Evan Turner and a 2020 1st round draft pick (Aleksej Pokusevski was later selected) to the Minnesota Timberwolves; the Denver Nuggets traded Malik Beasley, Juan Hernangomez and Jarred Vanderbilt to the Minnesota Timberwolves; the Houston Rockets traded Clint Capela and Nene to the Atlanta Hawks; the Houston Rockets traded Gerald Green and a 2020 1st round draft pick (Zeke Nnaji was later selected) to the Denver Nuggets; the Minnesota Timberwolves traded Keita Bates-Diop, Shabazz Napier and Noah Vonleh to the Denver Nuggets; and the Minnesota Timberwolves traded Jordan Bell and Robert Covington to the Houston Rockets. (Pick is GSW's 2024 second-round pick)
4. **2021-08-25** (MEM-MIN) — sent `Juan Hernangomez`, received `Patrick Beverley`
   > The Memphis Grizzlies traded Patrick Beverley to the Minnesota Timberwolves for Jarrett Culver and Juan Hernangomez. Memphis also received a trade exception

## 140. [score 16] MIN — 2012-06-26 → 2022-07-06 (4 links)

**Start:** 
**Target:** Rudy Gobert

1. **2012-06-26** (HOU-MIN) — sent ``, received `Chase Budinger, Lior Eliyahu`
   > The Houston Rockets traded Chase Budinger and Lior Eliyahu to the Minnesota Timberwolves for a 2012 1st round draft pick (Terrence Jones was later selected).
2. **2019-07-08** (GSW-MIN) — sent `Lior Eliyahu`, received `Treveon Graham, Shabazz Napier`
   > The Golden State Warriors traded Treveon Graham, Shabazz Napier and cash to the Minnesota Timberwolves for Lior Eliyahu. $3.6MM
3. **2020-02-05** (ATL-HOU-MIN-DEN) — sent `Shabazz Napier`, received `Evan Turner, Malik Beasley, Juan Hernangomez, Jarred Vanderbilt`
   > In a 4-team trade, the Atlanta Hawks traded a 2024 2nd round draft pick (Pelle Larsson was later selected) to the Houston Rockets; the Atlanta Hawks traded Evan Turner and a 2020 1st round draft pick (Aleksej Pokusevski was later selected) to the Minnesota Timberwolves; the Denver Nuggets traded Malik Beasley, Juan Hernangomez and Jarred Vanderbilt to the Minnesota Timberwolves; the Houston Rockets traded Clint Capela and Nene to the Atlanta Hawks; the Houston Rockets traded Gerald Green and a 2020 1st round draft pick (Zeke Nnaji was later selected) to the Denver Nuggets; the Minnesota Timberwolves traded Keita Bates-Diop, Shabazz Napier and Noah Vonleh to the Denver Nuggets; and the Minnesota Timberwolves traded Jordan Bell and Robert Covington to the Houston Rockets. (Pick is GSW's 2024 second-round pick)
4. **2022-07-06** (MIN-UTA) — sent `Malik Beasley, Jarred Vanderbilt`, received `Rudy Gobert`
   > The Minnesota Timberwolves traded Malik Beasley, Patrick Beverley, Leandro Bolmaro, Walker Kessler, Jarred Vanderbilt, a 2023 1st round draft pick (Keyonte George was later selected), a 2025 1st round draft pick (Will Riley was later selected), a 2026 1st round draft pick, a 2027 1st round draft pick and a 2029 1st round draft pick to the Utah Jazz for Rudy Gobert. Minnesota also received a trade exception Utah also received a trade exception 2025 1st-rd pick is MIN own 2026 1st-rd pick was a right to swap, did not convey 2027 1st-rd pick is MIN own conditional 2029 1st-rd pick is MIN own

## 141. [score 16] MIN — 2013-11-26 → 2023-02-09 (4 links)

**Start:** Derrick Williams
**Target:** Nickeil Alexander-Walker / Mike Conley

1. **2013-11-26** (MIN-SAC) — sent `Derrick Williams`, received `Luc Mbah a Moute`
   > The Minnesota Timberwolves traded Derrick Williams to the Sacramento Kings for Luc Mbah a Moute.
2. **2014-08-23** (CLE-MIN-PHI) — sent `Luc Mbah a Moute`, received `Anthony Bennett, Andrew Wiggins, Thaddeus Young`
   > In a 3-team trade, the Cleveland Cavaliers traded Anthony Bennett, Andrew Wiggins and a trade exception to the Minnesota Timberwolves; the Cleveland Cavaliers traded a 2016 1st round draft pick (Timothé Luwawu-Cabarrot was later selected) to the Philadelphia 76ers; the Minnesota Timberwolves traded Kevin Love to the Cleveland Cavaliers; the Minnesota Timberwolves traded Luc Mbah a Moute and Alexey Shved to the Philadelphia 76ers; and the Philadelphia 76ers traded Thaddeus Young to the Minnesota Timberwolves.
3. **2020-02-06** (GSW-MIN) — sent `Andrew Wiggins`, received `Jacob Evans, D'Angelo Russell, Omari Spellman`
   > The Golden State Warriors traded Jacob Evans, D'Angelo Russell and Omari Spellman to the Minnesota Timberwolves for Andrew Wiggins, a 2021 1st round draft pick (Jonathan Kuminga was later selected) and a 2021 2nd round draft pick (Miles McBride was later selected). 2021 1st-rd pick is top-3 protected
4. **2023-02-09** (LAL-MIN-UTA) — sent `D'Angelo Russell`, received `Nickeil Alexander-Walker, Mike Conley`
   > In a 3-team trade, the Los Angeles Lakers traded a 2024 2nd round draft pick (Bobi Klintman was later selected) to the Minnesota Timberwolves; the Los Angeles Lakers traded Damian Jones, Juan Toscano-Anderson, Russell Westbrook and a 2027 1st round draft pick to the Utah Jazz; the Minnesota Timberwolves traded D'Angelo Russell to the Los Angeles Lakers; the Utah Jazz traded Malik Beasley and Jarred Vanderbilt to the Los Angeles Lakers; and the Utah Jazz traded Nickeil Alexander-Walker, Mike Conley, a 2025 2nd round draft pick (Rasheer Fleming was later selected) and a 2026 2nd round draft pick (Trevon Brazile was later selected) to the Minnesota Timberwolves. Los Angeles also received multiple trade exceptions Minnesota also received a trade exception 2024 2nd-rd pick is least favorable 2025 2nd-rd pick is UTA own 2026 2nd-rd pick was UTA own Utah also received multiple trade exceptions conditional 2027 1st-rd pick is LAL own

## 142. [score 16] MIN — 2019-07-08 → 2022-07-06 (4 links)

**Start:** Lior Eliyahu
**Target:** Rudy Gobert

1. **2019-07-08** (GSW-MIN) — sent `Lior Eliyahu`, received `Treveon Graham, Shabazz Napier`
   > The Golden State Warriors traded Treveon Graham, Shabazz Napier and cash to the Minnesota Timberwolves for Lior Eliyahu. $3.6MM
2. **2020-02-05** (ATL-HOU-MIN-DEN) — sent `Shabazz Napier`, received `Evan Turner, Malik Beasley, Juan Hernangomez, Jarred Vanderbilt`
   > In a 4-team trade, the Atlanta Hawks traded a 2024 2nd round draft pick (Pelle Larsson was later selected) to the Houston Rockets; the Atlanta Hawks traded Evan Turner and a 2020 1st round draft pick (Aleksej Pokusevski was later selected) to the Minnesota Timberwolves; the Denver Nuggets traded Malik Beasley, Juan Hernangomez and Jarred Vanderbilt to the Minnesota Timberwolves; the Houston Rockets traded Clint Capela and Nene to the Atlanta Hawks; the Houston Rockets traded Gerald Green and a 2020 1st round draft pick (Zeke Nnaji was later selected) to the Denver Nuggets; the Minnesota Timberwolves traded Keita Bates-Diop, Shabazz Napier and Noah Vonleh to the Denver Nuggets; and the Minnesota Timberwolves traded Jordan Bell and Robert Covington to the Houston Rockets. (Pick is GSW's 2024 second-round pick)
3. **2021-08-25** (MEM-MIN) — sent `Juan Hernangomez`, received `Patrick Beverley`
   > The Memphis Grizzlies traded Patrick Beverley to the Minnesota Timberwolves for Jarrett Culver and Juan Hernangomez. Memphis also received a trade exception
4. **2022-07-06** (MIN-UTA) — sent `Patrick Beverley`, received `Rudy Gobert`
   > The Minnesota Timberwolves traded Malik Beasley, Patrick Beverley, Leandro Bolmaro, Walker Kessler, Jarred Vanderbilt, a 2023 1st round draft pick (Keyonte George was later selected), a 2025 1st round draft pick (Will Riley was later selected), a 2026 1st round draft pick, a 2027 1st round draft pick and a 2029 1st round draft pick to the Utah Jazz for Rudy Gobert. Minnesota also received a trade exception Utah also received a trade exception 2025 1st-rd pick is MIN own 2026 1st-rd pick was a right to swap, did not convey 2027 1st-rd pick is MIN own conditional 2029 1st-rd pick is MIN own

## 143. [score 16] OKC — 2018-07-23 → 2020-11-27 (4 links)

**Start:** Rodney Purvis
**Target:** Justin Jackson / Trevor Ariza

1. **2018-07-23** (BOS-OKC) — sent `Rodney Purvis`, received `Abdel Nader`
   > The Boston Celtics traded Abdel Nader and cash to the Oklahoma City Thunder for Rodney Purvis. $450,000
2. **2020-11-16** (OKC-PHO) — sent `Abdel Nader`, received `Ty Jerome, Jalen Lecque, Kelly Oubre Jr., Ricky Rubio`
   > The Oklahoma City Thunder traded Abdel Nader and Chris Paul to the Phoenix Suns for Ty Jerome, Jalen Lecque, Kelly Oubre Jr., Ricky Rubio and a 2022 1st round draft pick (Peyton Watson was later selected). 2022 1st-rd pick is PHO own
3. **2020-11-20** (MIN-NYK-OKC) — sent `Ricky Rubio`, received `James Johnson, Aleksej Pokusevski`
   > In a 3-team trade, the Minnesota Timberwolves traded Mathias Lessort and a 2023 2nd round draft pick (James Nnaji was later selected) to the New York Knicks; the Minnesota Timberwolves traded James Johnson, Aleksej Pokusevski and a 2024 2nd round draft pick (Kevin McCullar Jr. was later selected) to the Oklahoma City Thunder; the New York Knicks traded a 2020 1st round draft pick (Leandro Bolmaro was later selected) to the Minnesota Timberwolves; the Oklahoma City Thunder traded Jaden McDaniels and Ricky Rubio to the Minnesota Timberwolves; and the Oklahoma City Thunder traded Immanuel Quickley to the New York Knicks. 2023 2nd-rd pick was DET own 2024 2nd-rd pick is MIN own
4. **2020-11-27** (DAL-DET-OKC) — sent `James Johnson`, received `Justin Jackson, Trevor Ariza`
   > In a 3-team trade, the Dallas Mavericks traded Delon Wright to the Detroit Pistons; the Dallas Mavericks traded Justin Jackson, a 2023 2nd round draft pick (Maxwell Lewis was later selected) and a 2026 2nd round draft pick (Ryan Conwell was later selected) to the Oklahoma City Thunder; the Detroit Pistons traded Trevor Ariza to the Oklahoma City Thunder; and the Oklahoma City Thunder traded James Johnson to the Dallas Mavericks. more favorable 2023 2nd-rd pick ended up as DAL own 2026 2nd-rd pick was DAL own

## 144. [score 16] MIL — 2011-12-09 → 2020-11-23 (4 links)

**Start:** Keyon Dooling
**Target:** Jrue Holiday / Sam Merrill

1. **2011-12-09** (BOS-MIL) — sent `Keyon Dooling`, received `Albert Miralles`
   > The Boston Celtics traded Albert Miralles to the Milwaukee Bucks for Keyon Dooling and a 2013 2nd round draft pick. Conditional 2013 2nd-rd pick did not convey
2. **2016-07-07** (CLE-MIL) — sent `Albert Miralles`, received `Matthew Dellavedova`
   > The Cleveland Cavaliers traded Matthew Dellavedova to the Milwaukee Bucks for Albert Miralles and $200K. Cleveland create $4.8M trade exception with this deal
3. **2018-12-07** (CLE-MIL-WAS) — sent `Matthew Dellavedova`, received `George Hill, Jason Smith`
   > In a 3-team trade, the Cleveland Cavaliers traded George Hill and a 2021 2nd round draft pick (Greg Brown III was later selected) to the Milwaukee Bucks; the Cleveland Cavaliers traded Sam Dekker to the Washington Wizards; the Milwaukee Bucks traded Matthew Dellavedova, John Henson, a 2021 2nd round draft pick (Sandro Mamukelashvili was later selected) and a 2022 1st round draft pick (MarJon Beauchamp was later selected) to the Cleveland Cavaliers; the Washington Wizards traded a 2022 2nd round draft pick (Bryce McGowens was later selected) to the Cleveland Cavaliers; and the Washington Wizards traded Jason Smith and cash to the Milwaukee Bucks. 2021 2nd-rd pick is WAS own, protections were removed from previously traded WAS 2020 2nd-rd pick Top-14 protected in 2021, conveyed in 2022 2021 2nd-rd pick is MIL own 2022 2nd-rd pick is WAS own
4. **2020-11-23** (DEN-OKC-MIL-NOP) — sent `George Hill`, received `Jrue Holiday, Sam Merrill`
   > In a 4-team trade, the Denver Nuggets traded a 2023 1st round draft pick (Nick Smith Jr. was later selected) to the Oklahoma City Thunder; the Milwaukee Bucks traded R.J. Hampton to the Denver Nuggets; the Milwaukee Bucks traded Eric Bledsoe, a 2024 1st round draft pick (Yves Missi was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2026 1st round draft pick and a 2027 1st round draft pick to the New Orleans Pelicans; the Milwaukee Bucks traded George Hill to the Oklahoma City Thunder; the New Orleans Pelicans traded Jrue Holiday and Sam Merrill to the Milwaukee Bucks; the New Orleans Pelicans traded Zylan Cheatham, Joshia Gray, Darius Miller, Kenrich Williams, a 2023 2nd round draft pick (Hunter Tyson was later selected) and a 2024 2nd round draft pick (Tyler Kolek was later selected) to the Oklahoma City Thunder; and the Oklahoma City Thunder traded Steven Adams to the New Orleans Pelicans. New Orleans acquires right to swap 2024 1st-rd pick with Milwaukee 2025 1st-rd pick is MIL own New Orleans acquired right to swap 2026 1st-rd pick with Milwaukee, did not convey 2027 1st-rd pick is MIL own 2023 top-14 protected 1st-rd pick was DEN own 2023 2nd-rd pick was WAS own 2024 2nd-rd pick is CHO own

## 145. [score 16] MIL — 2011-12-09 → 2023-02-09 (4 links)

**Start:** Keyon Dooling
**Target:** Jae Crowder

1. **2011-12-09** (BOS-MIL) — sent `Keyon Dooling`, received `Albert Miralles`
   > The Boston Celtics traded Albert Miralles to the Milwaukee Bucks for Keyon Dooling and a 2013 2nd round draft pick. Conditional 2013 2nd-rd pick did not convey
2. **2016-07-07** (CLE-MIL) — sent `Albert Miralles`, received `Matthew Dellavedova`
   > The Cleveland Cavaliers traded Matthew Dellavedova to the Milwaukee Bucks for Albert Miralles and $200K. Cleveland create $4.8M trade exception with this deal
3. **2018-12-07** (CLE-MIL-WAS) — sent `Matthew Dellavedova`, received `George Hill, Jason Smith`
   > In a 3-team trade, the Cleveland Cavaliers traded George Hill and a 2021 2nd round draft pick (Greg Brown III was later selected) to the Milwaukee Bucks; the Cleveland Cavaliers traded Sam Dekker to the Washington Wizards; the Milwaukee Bucks traded Matthew Dellavedova, John Henson, a 2021 2nd round draft pick (Sandro Mamukelashvili was later selected) and a 2022 1st round draft pick (MarJon Beauchamp was later selected) to the Cleveland Cavaliers; the Washington Wizards traded a 2022 2nd round draft pick (Bryce McGowens was later selected) to the Cleveland Cavaliers; and the Washington Wizards traded Jason Smith and cash to the Milwaukee Bucks. 2021 2nd-rd pick is WAS own, protections were removed from previously traded WAS 2020 2nd-rd pick Top-14 protected in 2021, conveyed in 2022 2021 2nd-rd pick is MIL own 2022 2nd-rd pick is WAS own
4. **2023-02-09** (BRK-IND-PHO-MIL) — sent `George Hill`, received `Jae Crowder`
   > In a 4-team trade, the Brooklyn Nets traded cash to the Indiana Pacers; the Brooklyn Nets traded Kevin Durant and T.J. Warren to the Phoenix Suns; the Indiana Pacers traded Juan Vaulet to the Brooklyn Nets; the Milwaukee Bucks traded a 2028 2nd round draft pick and a 2029 2nd round draft pick to the Brooklyn Nets; the Milwaukee Bucks traded George Hill, Serge Ibaka, Jordan Nwora, a 2023 2nd round draft pick (Isaiah Wong was later selected), a 2024 2nd round draft pick (Quinten Post was later selected) and a 2025 2nd round draft pick (Taelon Peter was later selected) to the Indiana Pacers; the Phoenix Suns traded Mikal Bridges, Cameron Johnson, a 2023 1st round draft pick (Noah Clowney was later selected), a 2025 1st round draft pick (Khaman Maluach was later selected), a 2027 1st round draft pick, a 2028 1st round draft pick and a 2029 1st round draft pick to the Brooklyn Nets; and the Phoenix Suns traded Jae Crowder to the Milwaukee Bucks. 2023 2nd-rd pick was CLE own 2024 2nd-rd pick is MIL own 2025 2nd-rd pick is IND own Brooklyn also received multiple trade exceptions 2023 1st-rd pick was PHO own 2025 1st-rd pick is PHO own 2027 1st-rd pick is PHO own 2028 1st-rd pick is a right to swap 2029 1st-rd pick is PHO own 2028 2nd-rd pick is MIL own 2029 2nd-rd pick is MIL own

## 146. [score 16] MIL — 2016-07-07 → 2021-08-07 (4 links)

**Start:** Albert Miralles
**Target:** Grayson Allen

1. **2016-07-07** (CLE-MIL) — sent `Albert Miralles`, received `Matthew Dellavedova`
   > The Cleveland Cavaliers traded Matthew Dellavedova to the Milwaukee Bucks for Albert Miralles and $200K. Cleveland create $4.8M trade exception with this deal
2. **2018-12-07** (CLE-MIL-WAS) — sent `Matthew Dellavedova`, received `George Hill, Jason Smith`
   > In a 3-team trade, the Cleveland Cavaliers traded George Hill and a 2021 2nd round draft pick (Greg Brown III was later selected) to the Milwaukee Bucks; the Cleveland Cavaliers traded Sam Dekker to the Washington Wizards; the Milwaukee Bucks traded Matthew Dellavedova, John Henson, a 2021 2nd round draft pick (Sandro Mamukelashvili was later selected) and a 2022 1st round draft pick (MarJon Beauchamp was later selected) to the Cleveland Cavaliers; the Washington Wizards traded a 2022 2nd round draft pick (Bryce McGowens was later selected) to the Cleveland Cavaliers; and the Washington Wizards traded Jason Smith and cash to the Milwaukee Bucks. 2021 2nd-rd pick is WAS own, protections were removed from previously traded WAS 2020 2nd-rd pick Top-14 protected in 2021, conveyed in 2022 2021 2nd-rd pick is MIL own 2022 2nd-rd pick is WAS own
3. **2020-11-23** (DEN-OKC-MIL-NOP) — sent `George Hill`, received `Jrue Holiday, Sam Merrill`
   > In a 4-team trade, the Denver Nuggets traded a 2023 1st round draft pick (Nick Smith Jr. was later selected) to the Oklahoma City Thunder; the Milwaukee Bucks traded R.J. Hampton to the Denver Nuggets; the Milwaukee Bucks traded Eric Bledsoe, a 2024 1st round draft pick (Yves Missi was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2026 1st round draft pick and a 2027 1st round draft pick to the New Orleans Pelicans; the Milwaukee Bucks traded George Hill to the Oklahoma City Thunder; the New Orleans Pelicans traded Jrue Holiday and Sam Merrill to the Milwaukee Bucks; the New Orleans Pelicans traded Zylan Cheatham, Joshia Gray, Darius Miller, Kenrich Williams, a 2023 2nd round draft pick (Hunter Tyson was later selected) and a 2024 2nd round draft pick (Tyler Kolek was later selected) to the Oklahoma City Thunder; and the Oklahoma City Thunder traded Steven Adams to the New Orleans Pelicans. New Orleans acquires right to swap 2024 1st-rd pick with Milwaukee 2025 1st-rd pick is MIL own New Orleans acquired right to swap 2026 1st-rd pick with Milwaukee, did not convey 2027 1st-rd pick is MIL own 2023 top-14 protected 1st-rd pick was DEN own 2023 2nd-rd pick was WAS own 2024 2nd-rd pick is CHO own
4. **2021-08-07** (MEM-MIL) — sent `Sam Merrill`, received `Grayson Allen`
   > The Memphis Grizzlies traded Grayson Allen and cash to the Milwaukee Bucks for Sam Merrill, a 2024 2nd round draft pick (Cam Christie was later selected) and a 2026 2nd round draft pick (Richie Saunders was later selected). Memphis also received a trade exception Milwaukee also received a trade exception 2024 2nd-rd pick is more favorable 2026 2nd-rd pick was more favorable of IND and MIA, became IND 2026 2nd-rd pick

## 147. [score 16] MIL — 2016-07-07 → 2023-09-27 (4 links)

**Start:** Albert Miralles
**Target:** Damian Lillard

1. **2016-07-07** (CLE-MIL) — sent `Albert Miralles`, received `Matthew Dellavedova`
   > The Cleveland Cavaliers traded Matthew Dellavedova to the Milwaukee Bucks for Albert Miralles and $200K. Cleveland create $4.8M trade exception with this deal
2. **2018-12-07** (CLE-MIL-WAS) — sent `Matthew Dellavedova`, received `George Hill, Jason Smith`
   > In a 3-team trade, the Cleveland Cavaliers traded George Hill and a 2021 2nd round draft pick (Greg Brown III was later selected) to the Milwaukee Bucks; the Cleveland Cavaliers traded Sam Dekker to the Washington Wizards; the Milwaukee Bucks traded Matthew Dellavedova, John Henson, a 2021 2nd round draft pick (Sandro Mamukelashvili was later selected) and a 2022 1st round draft pick (MarJon Beauchamp was later selected) to the Cleveland Cavaliers; the Washington Wizards traded a 2022 2nd round draft pick (Bryce McGowens was later selected) to the Cleveland Cavaliers; and the Washington Wizards traded Jason Smith and cash to the Milwaukee Bucks. 2021 2nd-rd pick is WAS own, protections were removed from previously traded WAS 2020 2nd-rd pick Top-14 protected in 2021, conveyed in 2022 2021 2nd-rd pick is MIL own 2022 2nd-rd pick is WAS own
3. **2020-11-23** (DEN-OKC-MIL-NOP) — sent `George Hill`, received `Jrue Holiday, Sam Merrill`
   > In a 4-team trade, the Denver Nuggets traded a 2023 1st round draft pick (Nick Smith Jr. was later selected) to the Oklahoma City Thunder; the Milwaukee Bucks traded R.J. Hampton to the Denver Nuggets; the Milwaukee Bucks traded Eric Bledsoe, a 2024 1st round draft pick (Yves Missi was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2026 1st round draft pick and a 2027 1st round draft pick to the New Orleans Pelicans; the Milwaukee Bucks traded George Hill to the Oklahoma City Thunder; the New Orleans Pelicans traded Jrue Holiday and Sam Merrill to the Milwaukee Bucks; the New Orleans Pelicans traded Zylan Cheatham, Joshia Gray, Darius Miller, Kenrich Williams, a 2023 2nd round draft pick (Hunter Tyson was later selected) and a 2024 2nd round draft pick (Tyler Kolek was later selected) to the Oklahoma City Thunder; and the Oklahoma City Thunder traded Steven Adams to the New Orleans Pelicans. New Orleans acquires right to swap 2024 1st-rd pick with Milwaukee 2025 1st-rd pick is MIL own New Orleans acquired right to swap 2026 1st-rd pick with Milwaukee, did not convey 2027 1st-rd pick is MIL own 2023 top-14 protected 1st-rd pick was DEN own 2023 2nd-rd pick was WAS own 2024 2nd-rd pick is CHO own
4. **2023-09-27** (MIL-PHO-POR) — sent `Jrue Holiday`, received `Damian Lillard`
   > In a 3-team trade, the Milwaukee Bucks traded Grayson Allen to the Phoenix Suns; the Milwaukee Bucks traded Jrue Holiday, a 2028 1st round draft pick, a 2029 1st round draft pick and a 2030 1st round draft pick to the Portland Trail Blazers; the Phoenix Suns traded Deandre Ayton and Toumani Camara to the Portland Trail Blazers; the Portland Trail Blazers traded Damian Lillard to the Milwaukee Bucks; and the Portland Trail Blazers traded Keon Johnson, Nassir Little and Jusuf Nurkic to the Phoenix Suns. 2029 1st-rd pick is MIL own 2028 1st-rd pick is a swap 2030 1st-rd pick is a swap

## 148. [score 16] MIL — 2017-11-07 → 2023-09-27 (4 links)

**Start:** Greg Monroe
**Target:** Damian Lillard

1. **2017-11-07** (MIL-PHO) — sent `Greg Monroe`, received `Eric Bledsoe`
   > The Milwaukee Bucks traded Greg Monroe, a 2018 2nd round draft pick and a 2020 1st round draft pick (Desmond Bane was later selected) to the Phoenix Suns for Eric Bledsoe. Conditional 1st-rd pick did not convey in 2018 or 2019, conveyed in 2020 2018 2nd-rd pick did not convey
2. **2020-11-23** (DEN-OKC-MIL-NOP) — sent `Eric Bledsoe`, received `Jrue Holiday, Sam Merrill`
   > In a 4-team trade, the Denver Nuggets traded a 2023 1st round draft pick (Nick Smith Jr. was later selected) to the Oklahoma City Thunder; the Milwaukee Bucks traded R.J. Hampton to the Denver Nuggets; the Milwaukee Bucks traded Eric Bledsoe, a 2024 1st round draft pick (Yves Missi was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2026 1st round draft pick and a 2027 1st round draft pick to the New Orleans Pelicans; the Milwaukee Bucks traded George Hill to the Oklahoma City Thunder; the New Orleans Pelicans traded Jrue Holiday and Sam Merrill to the Milwaukee Bucks; the New Orleans Pelicans traded Zylan Cheatham, Joshia Gray, Darius Miller, Kenrich Williams, a 2023 2nd round draft pick (Hunter Tyson was later selected) and a 2024 2nd round draft pick (Tyler Kolek was later selected) to the Oklahoma City Thunder; and the Oklahoma City Thunder traded Steven Adams to the New Orleans Pelicans. New Orleans acquires right to swap 2024 1st-rd pick with Milwaukee 2025 1st-rd pick is MIL own New Orleans acquired right to swap 2026 1st-rd pick with Milwaukee, did not convey 2027 1st-rd pick is MIL own 2023 top-14 protected 1st-rd pick was DEN own 2023 2nd-rd pick was WAS own 2024 2nd-rd pick is CHO own
3. **2021-08-07** (MEM-MIL) — sent `Sam Merrill`, received `Grayson Allen`
   > The Memphis Grizzlies traded Grayson Allen and cash to the Milwaukee Bucks for Sam Merrill, a 2024 2nd round draft pick (Cam Christie was later selected) and a 2026 2nd round draft pick (Richie Saunders was later selected). Memphis also received a trade exception Milwaukee also received a trade exception 2024 2nd-rd pick is more favorable 2026 2nd-rd pick was more favorable of IND and MIA, became IND 2026 2nd-rd pick
4. **2023-09-27** (MIL-PHO-POR) — sent `Grayson Allen`, received `Damian Lillard`
   > In a 3-team trade, the Milwaukee Bucks traded Grayson Allen to the Phoenix Suns; the Milwaukee Bucks traded Jrue Holiday, a 2028 1st round draft pick, a 2029 1st round draft pick and a 2030 1st round draft pick to the Portland Trail Blazers; the Phoenix Suns traded Deandre Ayton and Toumani Camara to the Portland Trail Blazers; the Portland Trail Blazers traded Damian Lillard to the Milwaukee Bucks; and the Portland Trail Blazers traded Keon Johnson, Nassir Little and Jusuf Nurkic to the Phoenix Suns. 2029 1st-rd pick is MIL own 2028 1st-rd pick is a swap 2030 1st-rd pick is a swap

## 149. [score 16] MIL — 2018-12-07 → 2023-09-27 (4 links)

**Start:** Matthew Dellavedova / John Henson
**Target:** Damian Lillard

1. **2018-12-07** (CLE-MIL-WAS) — sent `Matthew Dellavedova, John Henson`, received `George Hill, Jason Smith`
   > In a 3-team trade, the Cleveland Cavaliers traded George Hill and a 2021 2nd round draft pick (Greg Brown III was later selected) to the Milwaukee Bucks; the Cleveland Cavaliers traded Sam Dekker to the Washington Wizards; the Milwaukee Bucks traded Matthew Dellavedova, John Henson, a 2021 2nd round draft pick (Sandro Mamukelashvili was later selected) and a 2022 1st round draft pick (MarJon Beauchamp was later selected) to the Cleveland Cavaliers; the Washington Wizards traded a 2022 2nd round draft pick (Bryce McGowens was later selected) to the Cleveland Cavaliers; and the Washington Wizards traded Jason Smith and cash to the Milwaukee Bucks. 2021 2nd-rd pick is WAS own, protections were removed from previously traded WAS 2020 2nd-rd pick Top-14 protected in 2021, conveyed in 2022 2021 2nd-rd pick is MIL own 2022 2nd-rd pick is WAS own
2. **2020-11-23** (DEN-OKC-MIL-NOP) — sent `George Hill`, received `Jrue Holiday, Sam Merrill`
   > In a 4-team trade, the Denver Nuggets traded a 2023 1st round draft pick (Nick Smith Jr. was later selected) to the Oklahoma City Thunder; the Milwaukee Bucks traded R.J. Hampton to the Denver Nuggets; the Milwaukee Bucks traded Eric Bledsoe, a 2024 1st round draft pick (Yves Missi was later selected), a 2025 1st round draft pick (Nolan Traoré was later selected), a 2026 1st round draft pick and a 2027 1st round draft pick to the New Orleans Pelicans; the Milwaukee Bucks traded George Hill to the Oklahoma City Thunder; the New Orleans Pelicans traded Jrue Holiday and Sam Merrill to the Milwaukee Bucks; the New Orleans Pelicans traded Zylan Cheatham, Joshia Gray, Darius Miller, Kenrich Williams, a 2023 2nd round draft pick (Hunter Tyson was later selected) and a 2024 2nd round draft pick (Tyler Kolek was later selected) to the Oklahoma City Thunder; and the Oklahoma City Thunder traded Steven Adams to the New Orleans Pelicans. New Orleans acquires right to swap 2024 1st-rd pick with Milwaukee 2025 1st-rd pick is MIL own New Orleans acquired right to swap 2026 1st-rd pick with Milwaukee, did not convey 2027 1st-rd pick is MIL own 2023 top-14 protected 1st-rd pick was DEN own 2023 2nd-rd pick was WAS own 2024 2nd-rd pick is CHO own
3. **2021-08-07** (MEM-MIL) — sent `Sam Merrill`, received `Grayson Allen`
   > The Memphis Grizzlies traded Grayson Allen and cash to the Milwaukee Bucks for Sam Merrill, a 2024 2nd round draft pick (Cam Christie was later selected) and a 2026 2nd round draft pick (Richie Saunders was later selected). Memphis also received a trade exception Milwaukee also received a trade exception 2024 2nd-rd pick is more favorable 2026 2nd-rd pick was more favorable of IND and MIA, became IND 2026 2nd-rd pick
4. **2023-09-27** (MIL-PHO-POR) — sent `Grayson Allen`, received `Damian Lillard`
   > In a 3-team trade, the Milwaukee Bucks traded Grayson Allen to the Phoenix Suns; the Milwaukee Bucks traded Jrue Holiday, a 2028 1st round draft pick, a 2029 1st round draft pick and a 2030 1st round draft pick to the Portland Trail Blazers; the Phoenix Suns traded Deandre Ayton and Toumani Camara to the Portland Trail Blazers; the Portland Trail Blazers traded Damian Lillard to the Milwaukee Bucks; and the Portland Trail Blazers traded Keon Johnson, Nassir Little and Jusuf Nurkic to the Phoenix Suns. 2029 1st-rd pick is MIL own 2028 1st-rd pick is a swap 2030 1st-rd pick is a swap

## 150. [score 16] MIA — 2011-06-23 → 2024-01-23 (4 links)

**Start:** Bojan Bogdanović
**Target:** Terry Rozier

1. **2011-06-23** (MIA-MIN) — sent `Bojan Bogdanović`, received `Norris Cole`
   > The Miami Heat traded Bojan Bogdanović to the Minnesota Timberwolves for Norris Cole.
2. **2015-02-19** (MIA-NOP-PHO) — sent `Norris Cole`, received `Goran Dragić, Zoran Dragić`
   > In a 3-team trade, the Miami Heat traded Norris Cole, Justin Hamilton and Shawne Williams to the New Orleans Pelicans; the Miami Heat traded Danny Granger, a 2017 1st round draft pick and a 2021 1st round draft pick (Tre Mann was later selected) to the Phoenix Suns; the New Orleans Pelicans traded John Salmons to the Phoenix Suns; and the Phoenix Suns traded Goran Dragić and Zoran Dragić to the Miami Heat. Conditional 2017 1st-rd pick did not convey
3. **2021-08-06** (MIA-TOR) — sent `Goran Dragic`, received `Kyle Lowry`
   > The Miami Heat traded Precious Achiuwa and Goran Dragic to the Toronto Raptors for Kyle Lowry. Toronto also received a trade exception
4. **2024-01-23** (CHO-MIA) — sent `Kyle Lowry`, received `Terry Rozier`
   > The Charlotte Hornets traded Terry Rozier and a 2026 2nd round draft pick (Otega Oweh was later selected) to the Miami Heat for Kyle Lowry and a 2027 1st round draft pick. Miami also received a trade exception 2027 1st-rd pick (MIA own) is lottery protected, becomes a 2028 unprotected 1st-rd pick if it does not convey in 2027 CHO sent pick to resolve dispute over January 2024 Terry Rozier trade because of NBA and FBI gambling investigations. 2026 2nd-rd pick was more favorable of GSW and DEN, became GSW 2026 2nd-rd pick
