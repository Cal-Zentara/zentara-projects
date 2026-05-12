# Garlic High — Client Playbook

## Quick Nav

| I'm doing... | Read... |
|---|---|
| Continuing work | `../../STATUS.md` first, then this file |
| Generating a video | "Video Prompts" section below |
| Universal rules | `../../CLAUDE.md` (studio root) |

---

## Who They Are

Japanese ramen restaurant. Brand name: ガーリックハイ. Full name: GARLIC HIGH · JIRO RAMEN.
Website: https://cal-zentara.github.io/garlic-high-demo/
Target: ramen shop owner. Working toward a paid ads + social media campaign deal.

**In one sentence:** Loud, unhinged, garlic-obsessed ramen shop that's proud of every bit of it.

---

## Brand Voice & Vibe

- **Taglines (locked):** "MORE GARLIC POR FAVOR" / "GARLIC BREATH?? I LOVE IT" / "Savage & Happy Ramen" / "every bowl is a commitment" / "not your average ramen"
- **NOTICE badge copy:** "THE BOWL YOU CAN'T FORGET. THE GARLIC YOU WILL SMELL. THE EXPERIENCE YOU'LL CRAVE."
- **Tone:** Irreverent, no-apologies, loud, cheeky. Doesn't take itself seriously. Confident about being excessive.
- **Audience:** Gen Z. People who want to go hard on a bowl and don't care about garlic breath.
- **Core identity:** Garlic is not just an ingredient — it IS the personality. More is more.

---

## Visual Style (locked)

- **Animation:** 90s anime illustrated — warm, high-contrast, late-night energy.
- **Color system (from poster):** Red, yellow, green. Chunky bold typography. Dense, overwhelming compositions.
- **Text overlay style:** Big block letters, slammed onto screen. Matches the poster — no elegance, all impact.
- **End card format:** "NOTICE" badge — yellow border, black background, bold spaced caps. Lifted directly from their poster.
- **Real food:** Posters use dense collages of real ramen bowls — messy, abundant, not styled. Reference this energy.
- **GHsuit girl:** Main mascot. Appears in every clip. Tired young woman, black blazer + pencil skirt, pink headband, brown hair.

---

## What We Know Works (Research — May 2026)

**Formats that perform for ramen/Japanese food:**
- ASMR/sensory hooks — steam, noodle pull, first bite sound. First 0.5 seconds must be sensory.
- Process/reveal shots (ingredients → finished bowl) drive foot traffic.
- Raw, honest reactions convert better than polished ads.
- Late-night cozy works when paired with sensory detail.

**Hook styles that stop the scroll:**
- Close-up texture pull (chopsticks lifting noodles, steam rising)
- Sound-first (slurp or sizzle before anything else)
- Color pop — bright egg yolk, garlic pile, red chili against dark broth
- Steam reveal — clears to show the bowl

**What drives saves:**
- Sensory content gets 3.2x higher save rates
- ASMR + cozy = algorithm reward
- "Newstalgia" (throwback feel with a modern twist) resonates with Gen Z

**What converts viewers to customers:**
- Process videos (raw → plated)
- Honest reactions, not scripted
- Location/address visible = immediate action

**Anime specifically:**
- Fandom + nostalgia layer = shares
- Mascot with character connection makes the brand stick
- Illustrated style is rare in food — makes GarlicHigh stand out

---

## Music Research (May 2026)

**Trending styles for food/Japanese brand ads:**
- **Future funk** and **vaporwave** — upbeat, 90s Japanese city pop influence with energy — winning for anime brands.
- **Slowed-down samples + looped melodies** with 90s Japanese influence work for restaurant content.
- "Mori no Chiisana Restaurant" style (whimsical, addictive) dominates food/cooking content.
- Japanese supermarket BGM ("Yobikomi-kun") — cheerful, looped, nostalgic.

**What's overdone (avoid):**
- Lo-fi (peaked Feb 2025, declining — "soundtrack of capitalism" fatigue).
- Generic city pop (saturated).
- Aggressive battle music (too intense for food ads).

**What food ads actually run at:**
- 80-120 BPM sweet spot — quieter, mood-based, NOT high-energy fight music.
- Drums/percussion drive the hook.
- Drop or snare hit at frame 0 catches the feed scroll.
- 70% instrumental, 30% vocal max — vocals distract from food.
- Trending audio matters more than perfect production.

**Sonic elements that trigger cravings:**
- Low bass = roasted, nutty flavors
- High-pitched = sweetness and crunch
- Staccato hits = texture perception (crispy)
- Sizzle/crackle activate reward centers faster than music
- Natural food sounds layered over trending audio = highest engagement

**Suno prompt patterns that work:**
- Simpler prompts beat over-tagged ones.
- Specificity on emotion/energy beats specificity on sound.
- Test 3-5 variations per brief.

**Locked for GarlicHigh:** `C:\Users\Aesth\Desktop\Audio\Garlic High.mp3` (Suno generated, May 11 2026).

---

## Structure Research — Single Long Clip vs Multi-Clip (May 2026)

**Verdict: Multi-clip wins. Confirmed across all sources.**

**Why multi-clip:**
- Industry standard for AI ads. Top creators do shot-by-shot generation with reference tagging.
- Short-form platforms demand cuts. TikTok/Reels favor fast pacing.
- Modern models (Seedance 2.0, Kling 3.0) handle reference-locked characters across cuts cleanly.
- If one shot looks bad, regenerate that shot — not the whole video.
- Viewers don't notice cuts. They notice character drift.

**Seedance 2.0 specs:**
- Min: 4 seconds (shorter errors out).
- Max: 60 seconds (no documented quality drop, but more credits).
- Sweet spot: 4-15 seconds per clip.
- Keep cinematic narrative clips under 10 seconds.

**Viral food ad pacing (15-second sweet spot):**
- 4-6 distinct shots over 15 seconds (~2.5-3 sec each).
- First 2-3 seconds: hook (close-up + action).
- Mid-section transition at 7-second mark (visual reset).
- Final 2 seconds: brand moment / CTA.
- Pacing rhythm: 3s / 2.5s / 2s / 2.5s — faster at the end.
- Rarely more than 8 cuts. Hypercuts feel chaotic.

**Cuts vs character continuity:**
- Hard seams visible if lighting/outfit/position shifts.
- Soft cuts (camera pans, dialogue breaks) hide seams.
- Lock character reference tight = prevents drift = hides imperfections.

**Music sync rule (from studio CLAUDE.md, confirmed by research):**
- Choreography → bake music into single generation.
- Narrative (multi-clip) → split-track method. Generate full track, FFmpeg-split per clip, upload each segment to its Seedance gen.

---

## Locked Video Concept (Demo Reel — One Video to Close the Deal)

**Emotion:** Savage. Shameless. Doesn't flinch.
**Not:** Cozy, quiet, tired office worker finding comfort.
**Yes:** She knows it'll wreck her. She orders more garlic anyway.

**Shot structure:**
1. Bowl slams down — garlic piled on top. Close-up. Steam rising. (Hook — sensory first.)
2. GHsuit girl stares at it. Dead serious. Looks at camera.
3. She goes in — no hesitation. Full send.
4. Comes up. Garlic breath. Doesn't flinch. Slight grin.
5. Text slams on screen: **MORE GARLIC POR FAVOR.**
6. End card: NOTICE badge — "THE BOWL YOU CAN'T FORGET. THE GARLIC YOU WILL SMELL. THE EXPERIENCE YOU'LL CRAVE."

**Format:** 9:16, 480p for test, 4s per clip, Seedance 2.0.
**Music:** Split-track method. Generate on Suno first — high energy, not cozy.

---

## Approved Assets

All assets live in `C:\Users\Aesth\Desktop\Images\`

| Asset | File | Use |
|---|---|---|
| GHsuit — full body | `Images/GHsuit.png` | Main character reference. Black blazer, pencil skirt, crossed arms. |
| GHv2 — face close-up | `Images/GHv2.png` | Pink headband, brown hair. Use for emotion/reaction shots. |
| Shop exterior (street) | `Images/1.png` | GHsuit walking toward shop at night. ガーリックハイ sign visible. |
| Shop wide (back view) | `Images/2.png` | Back view, chef behind counter. No empty seat. Background ref only. |
| GHsuit seated at counter (OLD) | `Images/3.png` | Superseded by `assets/GH_shop_seated.png`. |
| Bowl close-up | `Images/4.png` | Anime ramen bowl, steam rising. ✓ Shot 1 start-image. |
| GHsuit at shop (NEW) | `clients/Garlic-high/assets/GH_shop_seated.png` | Side profile, brown hair, black blazer, seated at counter. GARLIC HIGH · JIRO RAMEN sign + chef visible. Warm light. ✓ Shots 2, 3, 4 start-image. |
| Brand poster | `Images/MoreGarlic.png` | "MORE GARLIC POR FAVOR" — red/yellow/green. Reference for text overlays and end card. |
| Shop exterior (landscape) | `Images/RAMEN SHOP ASSET.png` | Dark moody exterior. Chef visible. Background ref. |

---

## Music

**Locked track:** `C:\Users\Aesth\Desktop\Audio\Garlic High.mp3` (Suno, May 11 2026).
**Method:** Split-track. FFmpeg cut into 4-second segments, one per clip. Upload each to its Seedance generation via @Audio1.
**Old track (cozy — do NOT use):** Static Sunlight — `C:\Users\Aesth\Desktop\Static Sunlight (1).mp3`

---

## Known Issues to Fix

| Issue | Fix |
|---|---|
| Shop image — all seats full | Regenerate with one clearly empty stool on the right end |
| Shot 1 (old concept) — wrong direction | Old prompt had her walking away from camera. New concept starts with bowl close-up instead. |
| Chef hat — white in new shots, should be yellow | Future image regen pass |

---

## Garlic High NSFW Traps

Words that triggered the NSFW filter (May 12 2026, Shot 2 v1):
- "glare" + "jaw tight" + "lock onto camera" + "bright flash" — combination read as aggression/violence.
- Softer rewrite worked: "looks down quietly, focused" + "lifts her eyes to meet the camera" + "holds her gaze steady" → passed.

Rule: for character close-ups with intense expressions, swap aggressive verbs ("glare," "lock," "snap") for softer equivalents ("looks," "lifts," "meets"). The image already conveys the intensity — the prompt doesn't need to.

---

## Locked Seedance Prompts (v2 — Savage Concept)

**Settings for all shots:** seedance_2_0, 480p, 9:16, 4-5 sec, mode std, no music (bake music in only after shot is approved).

### Shot 1 — Bowl crashes down (4 sec)
**Images:** `Images/4.png` (start-image)
**Prompt:**
> A ramen bowl crashes down on a wooden counter. The moment of impact — ceramic rings against wood, steam bursts upward in a thick column, the heaped pile of raw minced garlic shudders and a single flake falls. The bowl settles. 90s anime illustrated style. Warm golden light from above. Camera holds tight on the bowl, slight shake from impact, then steady. One emotion: arrival.

### Shot 2 — She stares (5 sec)
**Images:** `clients/Garlic-high/assets/GH_shop_seated.png` (start-image) + `Images/GHsuit.png` (character reference)
**Format:** 9:16 vertical (Reels / TikTok / Shorts)
**Prompt:**
> Same young woman from the reference image — brown hair, black blazer — seated at the ramen counter inside the shop. Bowl in front of her, steam rising. Camera pushes in slowly from the wide shot to a medium close-up on her face. Her smile drops. Shoulders settle. Jaw sets. She raises her eyes from the bowl and looks directly into the camera. Holds there. 90s anime illustrated style. Warm interior light. One emotion: decision.

### Shot 3 — She goes in (5 sec)
**Images:** `clients/Garlic-high/assets/GH_shop_seated.png` (start-image) + `Images/GHsuit.png` (character reference)
**Format:** 9:16 vertical (Reels / TikTok / Shorts)
**Prompt:**
> Same young woman from the reference image — brown hair, black blazer — seated at the ramen counter. She leans forward without hesitation. Chopsticks drop into the bowl. Shoulders cave forward, whole upper body follows. Pulls a mound of noodles and drives it into her mouth — no pause, no ceremony. 90s anime illustrated style. Warm interior light, chef visible in background. Camera holds static, medium shot. One emotion: savage.

### Shot 4 — Comes up shameless (5 sec)
**Images:** `clients/Garlic-high/assets/GH_shop_seated.png` (start-image) + `Images/GHsuit.png` (character reference)
**Format:** 9:16 vertical (Reels / TikTok / Shorts)
**Prompt:**
> Same young woman from the reference image — brown hair, black blazer — seated at the ramen counter. She pulls back from the bowl. Slow. Shoulders still rolled forward. A long exhale. Eyes slightly unfocused. Then the corner of her mouth pulls up — just barely. A single garlic flake stuck to her lower lip. She doesn't wipe her mouth. She doesn't look away. 90s anime illustrated style. Warm interior light. Camera holds static, medium close-up. One emotion: shameless.

**Optional anchor detail for Shot 4:** add "single garlic flake stuck to her lower lip" for shameless beat.

---

## Generation Log

| Shot | Version | File | Verdict |
|---|---|---|---|
| 1 | v1 — slow push | `outputs/shot1_bowl_v1.mp4` | Too quiet for savage brand. Re-generated. |
| 1 | v2 — slam | `outputs/shot1_bowl_v2_slam.mp4` | ✓ APPROVED (May 12 2026) |
| 2 | v1 — cranked | (blocked) | NSFW filter blocked — "glare/jaw tight/lock onto camera/bright flash" triggered it. Credits refunded. |
| 2 | v2 — softened | `outputs/shot2_v2.mp4` | Generated. Cal feedback: too quiet — feels like she's just angry then looks at camera. Considering: add physical action / move eye-lock to Shot 3 / cut Shot 2 entirely. |
| 3 | — | — | Not generated yet |
| 4 | — | — | Not generated yet |
| B-roll | — | — | Not generated yet. Prompt locked: extreme close-up on mouth + chopsticks + noodles. Mood: feral. Refs: `assets/shot3_start.png` + `Images/GHsuit.png`. |

---

## Status

May 12 2026:
- Shot 1 v2 (slam): ✓ APPROVED
- Shot 2 v1: NSFW blocked → v2 softened generated → Cal says too quiet
- All start-images approved: `shot2_start.png`, `shot3_start.png`, `shot4_start.png`, `broll_noodles_pull.png`
- B-roll prompt locked (mood: feral)

**Next decision (waiting on Cal):**
1. Add physical action to Shot 2 (sleeves up, knuckles crack), OR
2. Move eye-lock to end of Shot 3, OR
3. Cut Shot 2 entirely — go bowl → savage → smug

**Then:** generate Shots 3, 4, B-roll → trim to ~10-12s in FFmpeg → text overlay + NOTICE end card → final stitch.

**Tracker note:** `tracker/log.js` still broken — missing `credentials.json` in CreativeStudio root. No generations this session were logged to Sheet. Fix before campaign work.
