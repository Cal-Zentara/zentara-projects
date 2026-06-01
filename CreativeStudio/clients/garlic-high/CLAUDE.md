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

## Current Direction (May 22, 2026 — session 8 — UGC JIRO EXPLAINER)

**Active direction:** UGC "What is Jiro Style Ramen" — real girl, real Yorba Linda location, natural speech.

**Locked assets:**
- Girl reference: `c:\Users\Aesth\Desktop\Images\HG girl.png`
- Shop location: Yorba Linda interior photo (image-cache at session start)
- Real bowl: `c:\Users\Aesth\Desktop\Images\food\Ramen.jpg`
- Girl-in-shop composite: `c:\Users\Aesth\Desktop\Images\HG location shop.png`
- Storyboard (9:16 vertical, 3-panel stacked): `clients/Garlic-high/outputs/ugc_storyboard_v4.png` ✅ LOCKED
- Video Clip 1 (15s, 480p): `clients/Garlic-high/outputs/ugc_jiro_v1.mp4` ✅ APPROVED — Cal: "damn it was so good"

**Locked script:**
- Beat 1: "Okay so — Jiro style ramen. Thick noodles, really rich savory broth. Add a little spice and it just levels up. Every bite hits."
- Beat 2: "You get chashu, bean sprouts, cabbage, garlic — and you customize everything. Unlimited toppings. I said yes to all of it. After 10 minutes I was sweating. After 15 I was questioning my life."

**Structure:** She holds bowl up (Beat 1) → interacts with ingredients/chopsticks (Beat 2) → reaction. Bowl and Jiro banner visible throughout.

**Why 2 clips:** Seedance hard fails at duration 20. Max working duration is 15. Full script is ~20 seconds → 2 clips of 15s stitched via FFmpeg.

**Where we left off:** Clip 1 approved. Clip 2 (Beat 2 script) not yet generated. Same storyboard (`ugc_storyboard_v4.png`) as start-image, same prompt structure, duration 15.

**Next steps:**
1. Run Clip 2 with Beat 2 script, `ugc_storyboard_v4.png` as start-image, duration 15
2. FFmpeg stitch Clip 1 + Clip 2
3. Add `Garlic High.mp3` music
4. Optional: add end card

---

## Previous Direction (May 15, 2026 — session 5 — YELLOW COMMERCIAL)

**Locked direction:** Yellow fast-food commercial. Flat yellow background, low-angle food shots, bold 3D text, McDonald's pacing. 13-second final video. Three-clip structure: Gen 1 (yellow storyboard) → Juniper B (real food footage bridge) → Gen 2 (yellow storyboard close).

**Current best output:** `clients/Garlic-high/outputs/GarlicHigh_yellow_v6.mp4` — Cal approved: "looks perfect"

**Locked assets for this direction:**
- Top storyboard (panels 1-4): `outputs/storyboard_gen1_916.png` (9:16, 2x2 grid)
- Bottom storyboard (panels 5-8): `outputs/storyboard_v4b_bottom.png`
- Gen 1 trimmed (5s): `outputs/gen1_final_trimmed.mp4`
- Juniper B bridge (2.5s, silent): `outputs/juniper_B_silent.mp4`
- Gen 2 trimmed: `outputs/gen2_trimmed.mp4`
- Music: `C:\Users\Aesth\Desktop\Audio\gh_first16.mp3`

**Previous directions (parked):**
- UGC with Lucy (session 4) — character build never completed, direction reset
- Photoreal intro (sessions 3-4) — C+ rating, Seedance doesn't animate still food
- Anime 4-shot WILD plan (session 3) — Bowl SLAM approved but rest never generated
- Jiro explainer (session 2-3) — Cal called it "very unprofessional"

**Why the re-pivot (May 13, late night):** Tried building the Jiro explainer three times (v1 plain Ken Burns + VO, v2 always-on captions, v3 manga-poster outlined captions). All three rejected — Cal's words: "very unprofessional, no one is going to pay me for this." Real diagnosis surfaced: "I've been trying to make it perfect and not fun... that's the problem." Photoreal premium food is AI's WEAKEST category in May 2026. Anime/illustrated/impossible-physics is AI's STRONGEST. Going where the tool actually wins.

**See feedback memory:** `feedback_ai_creative_fun_not_perfect.md` — applies to all future AI creative work, not just Garlic High.

**Jiro explainer artifacts (parked, kept for reference):**
- Build folder: `clients/Garlic-high/outputs/build_v1/`
- Output v1 (no captions): `clients/Garlic-high/outputs/jiro_explainer_REAL_v1.mp4`
- Output v2 (always-on captions, bland): `jiro_explainer_REAL_v2.mp4`
- Output v3 (manga-poster captions, unprofessional): `jiro_explainer_REAL_v3.mp4`
- VO file: `C:/Users/Aesth/Desktop/Audio/garlic_high_vo_FINAL_15s.mp3`
- VO + music mixed: `C:/Users/Aesth/Desktop/Audio/garlic_high_FINAL_soundtrack_15s.mp3`
- Real shop photos shot by Cal: `C:/Users/Aesth/Desktop/Images/food/` (16 photos, can be used for future static work, IG carousel, posters)
- If the explainer ever resumes, it's a real shoot — not AI.

---

---

## Fallback Workflow (Shot-by-Shot — v3 WILD ANIME)

**Direction (locked May 12 2026):** Stop filming this like a regular ad. Use Seedance to do impossible physics. 90s anime / Food Wars / Shonen energy. Impact frames, aura shots, dragon breath, speed lines. Nothing safe, nothing quiet, no psychological beats.

**Why v3:** v1 (cozy) and v2 (savage stares) both failed the same way — too much girl-staring, not enough food. Cal feedback: Shot 1 (bowl slam) was the only thing that hit because the FOOD was the hero. Rebuild every shot around impossible food physics. Her face is a reaction beat, not the subject.

**Shot structure (v3 — final order, May 12 2026):**
1. **Garlic NUKE** — chef SLAMS a massive garlic clove with a cleaver. Whole shop shakes. Garlic flakes blast outward slow-motion. Lights flicker. Anime impact frame. (Chef prep — sets up the food.)
2. **Bowl SLAM ✓** — ramen bowl crashes down, steam erupts, garlic pile shudders. (Delivery — bowl arrives at her counter. APPROVED.)
3. **Noodle WHIRLWIND** — extreme close-up. Chopsticks rip noodles up so violently they form a swirling vortex. Broth droplets freeze mid-air. Anime speed lines around the bowl. (She grabs.)
4. **First bite POWER-UP** — she bites in. Eyes flash white. Aura erupts behind her. Steam shoots out her ears like a dragon. Hair lifts. Background goes red. **"MORE GARLIC POR FAVOR" text slams in over the aura moment.** (She eats + tagline lands.)

**Narrative arc:** prep → delivery → grab → eat. No separate end-card clip — text overlay handles the tagline.

**Format:** 9:16, 480p test, 4-5s per clip, Seedance 2.0.
**Music:** Split-track. Garlic High.mp3 cut into 4 segments, one per shot.

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
| Shot 1 Garlic NUKE start-image | `Images/hgshot1.png` | Chef raised cleaver over oversized garlic head, low angle, 9:16. ✓ Locked. |
| Shot 3 Noodle WHIRLWIND start-image | `Images/hgshot3_noodle.png.png` | Chopsticks pulling noodles up out of bowl, side angle, steam. ✓ Locked. |
| Shot 4 Power-up start-image | `Images/hgshot3.png` | Girl mid-bite at counter, brown hair + pink headband, GARLIC HIGH sign visible behind. ✓ Locked. |
| End card text image | `Images/soon.png` | "MORE GARLIC POR FAVOR" + Sunnyvale · Yorba Linda · Torrance Coming Soon + garlichigh.com — red/yellow/green chunky block letters, manga ink chaos. ✓ Locked. Slams over Shot 4 in post. |

---

## Music

**Locked track:** `C:\Users\Aesth\Desktop\Audio\Garlic High.mp3` (Suno, May 11 2026). Track length: 82.6 seconds.
**Method (UNDECIDED — May 12 2026):** Two options on the table:
- **Bake-in (Zephr method):** Cut track into 4 segments matching each clip duration, upload each as audio reference inside Seedance. Music gets baked into the generation. Better sync, costs 2 extra credits (regen of Shot 1 + Shot 2 with music).
- **Music-on-top (post):** Generate all clips silent, stitch, lay full track on top with FFmpeg, nudge clip timing to align impacts with beats. Cheaper, less precise sync.
**Studio playbook leans bake-in for narrative pieces. For impact-driven reel like this, music-on-top is acceptable and saves credits.**
**Old track (cozy — do NOT use):** Static Sunlight — `C:\Users\Aesth\Desktop\Static Sunlight (1).mp3`

---

## Production Tips

- **Slow-mo trick:** If a shot morphs or looks wrong at normal speed (cleaver swing, noodle pull, fast action), generate it slow-mo first, then speed it up in editing. Saves credits vs regenerating at normal speed.
- **Word order:** AI prioritizes the first few words of the prompt above everything else. Most important subject goes first, always.
- **Foreground occlusion:** Let something partially block the frame — a counter edge, steam, a doorframe in the foreground. Shots where everything is perfectly visible look staged. "Camera partially obscured by foreground steam" adds depth and realism instantly.

---

## Known Issues to Fix

| Issue | Fix |
|---|---|
| Shop image — all seats full | Regenerate with one clearly empty stool on the right end |
| Shot 1 (old concept) — wrong direction | Old prompt had her walking away from camera. New concept starts with bowl close-up instead. |
| Chef hat — white in new shots, should be yellow | Future image regen pass |
| Seedance fails silently at duration 20 | Max working duration is 15. Always use `--duration 15`. Stitch clips for content longer than 15s. |
| 16:9 storyboard + 9:16 Seedance gen = silent failure | Storyboard must be generated at 9:16 vertical to match the video output. Never pass a landscape storyboard as start-image for a portrait video. |

---

## Video Motion Rules

- **Never use "Hold longer on this final shot"** — it makes Seedance freeze the last frame. Always ends in static video.
- **Final shot must always have motion** — use slow motion, subtle camera drift, gentle push-in, or steam/particle movement to keep it alive.
- **When emphasizing a shot, use slow motion** — not a freeze or hold.
- **NEVER freeze-extend a video to match a longer VO** — freeze frames always look bad. If the VO is longer than the video, the fix is to regenerate the video at the correct duration (match `--duration` to the VO length in seconds, rounded up), NOT to pad with `tpad`. Lock the VO duration FIRST, then generate the video to match.
- **Steam must rise from the broth surface inside the bowl** — never write "steam rising" alone. Always write "steam rising vertically from the broth surface inside the bowl." Vague steam prompts cause Seedance to place steam off to the side, which looks unnatural.

---

## Garlic High NSFW Traps

Words that triggered the NSFW filter (May 12 2026, Shot 2 v1):
- "glare" + "jaw tight" + "lock onto camera" + "bright flash" — combination read as aggression/violence.
- Softer rewrite worked: "looks down quietly, focused" + "lifts her eyes to meet the camera" + "holds her gaze steady" → passed.

Rule: for character close-ups with intense expressions, swap aggressive verbs ("glare," "lock," "snap") for softer equivalents ("looks," "lifts," "meets"). The image already conveys the intensity — the prompt doesn't need to.

---

## Anime Prompt Grammar (90s anime style — for Seedance + Nano Banana)

Adapted from the `cinema-worldbuilder` skill. The skill is built for live-action photoreal (ARRI/Kodak/anamorphic specs) — none of that applies to illustrated anime. But the **structure and rules** translate cleanly. Use this on every prompt for this client.

### Three-block paragraph structure

Every prompt is one continuous paragraph with three inline sections:

1. **Style & Mood** — one sentence on the emotional/visual register ("90s anime illustrated style, late-night ramen shop energy, one emotion: detonation")
2. **Dynamic Description** — what HAPPENS across the shot: action, physics, camera moves, slow-motion beats. Energy and forces, not positions.
3. **Static Description** — what does NOT change: locked character details, environment, props, lighting. Extracted from the start-image only — never invented.

Followed by a diegetic audio line (see below).

### Anime "mode" grammar (replaces cinema-worldbuilder's five cinema modes)

| Shot type | Grammar to use |
|---|---|
| **Impact shots** (bowl slam, cleaver hit) | "anime impact frame, radial speed lines from contact point, ground crack hairline forming, dust burst, slow-motion debris suspension, single bright flash on contact" |
| **Motion shots** (noodle whirlwind, fight choreography) | "anime motion lines, blur streaks behind movement, frozen droplet suspension mid-air, hold-on-action pose, radial speed lines from the subject" |
| **Power-up / aura shots** | "anime power-up burst, radial light explosion from the body, hair lift from energy, eye flash white, dragon steam from the mouth/ears, aura erupting behind the subject, background blown out to single color" |
| **Establishing / mood shots** | "90s anime illustrated establishing shot, warm interior light, painted background detail, hand-drawn cel shading, gentle film grain overlay" |

### Diegetic audio rule (universal)

Audio line at the end of every prompt — describes only physical sounds in the scene. Never music, never lyrics.

Allowed: cleaver-on-garlic thunk, ceramic bowl ring, broth bubble, steam hiss, fabric rustle, chopstick clink, ambient shop chatter, sizzle from the pots.
Not allowed: any music descriptor, any song reference, any score language.

Music gets uploaded separately into Seedance as a media reference. The prompt is text-only.

### Universal rules (apply to every anime prompt)

1. **Style & Mood + Dynamic + Static + Audio** — same structure every time, one continuous paragraph.
2. **Energy over position** — write what FORCE does to a body. "Body folds with impact" beats "she gets hit."
3. **One emotion per clip** — name it explicitly at the end ("one emotion: detonation"). Don't stack emotions.
4. **No-invention rule** — only describe what's visible in the start-image. Don't add details that aren't there.
5. **No real brand names** — use generic descriptors ("Japanese ramen shop" not "GARLIC HIGH").
6. **Camera direction, not action description** — "camera holds tight, slight shake from impact" beats "we see her hit it."
7. **Physics over actions** — "the counter shakes, dust rises" beats "the cleaver slams down."
8. **Anchor characters with 1-2 specific details from the reference** (pink headband, brown hair, black blazer) — never invent.
9. **Always include the style anchor phrase** — "90s anime illustrated style" goes in every prompt.
10. **Single bright flash on impact** — anime cliché but lands every time for impact frames.

### Example structure applied

> **Style & Mood:** 90s anime illustrated style, late-night ramen shop energy, one emotion: detonation. **Dynamic Description:** The chef drives a cleaver straight down onto a giant whole garlic head on the counter. Blade contacts — garlic detonates, skin peeling back, cloves blasting outward in slow motion. The whole shop shudders, lights flicker once. Steam from the broth pots jets sideways from the shockwave. Chef's face stays calm. Camera holds tight on the garlic, slight shake from impact, single bright flash at contact. Anime impact frame with radial speed lines from the blade and ground crack hairline forming under the cutting board. **Static Description:** Young Japanese chef in white coat and cap behind a wooden counter. Oversized whole garlic head, larger than a fist, sitting on a cutting board centered in the frame. Background: warm ramen shop interior, hanging paper lanterns, stainless steel pots steaming on the back wall. Warm golden interior light. **Audio:** diegetic only — sharp cleaver-on-garlic thunk, ceramic clatter on the counter, low broth bubble from the back, brief fabric rustle on the chef's coat, no music.

---

---

---

## UGC Content Pillars + Prompts (May 14 2026 — ai-influencer skill)

**Persona (every prompt):** Early-20s East Asian woman, long straight black hair, natural makeup, light freckles, black blazer, dark pencil skirt, seated at wooden counter.
**Settings:** soul_cinematic for reference images. Seedance 2.0, 9:16, 480p for video.

### Pillar 1 — "I Had No Idea This Existed" (discovery)
2 shots, 18 seconds total.

SHOT 1 (10s): Looks at camera → "Okay so — Jiro ramen is not what I thought it was." → pause → "Like I thought it was just... regular ramen." → head tilt → exhale → "It's not." Medium close-up, handheld micro-wobble, warm pendant light 3500K, phone-camera HDR. Wooden counter, GARLIC HIGH sign background, steam drifting, paper lanterns.

SHOT 2 (8s): Eyes drop → bowl placed in front → mouth opens → "...okay." → slow blink → looks at camera → half-smile → "I was not ready." Medium shot pulling back to include bowl, static. Same light. Bowl with steam rising vertically from broth surface inside the bowl. Bowl thud audio.

### Pillar 2 — "The Order" (relief — saves driver)
Single shot, 15 seconds.

Looks at camera → "So when they ask you —" → pause → "and they will ask you —" → "ninniku, yasai, karame, abura." → counts on fingers slowly → "Garlic. Vegetables. Soy. Fat." → lowers hand → "Just say how much of each you want." → half-shrug → small smile → "I went max garlic." → beat → "Obviously." Medium close-up, static, eye level, warm pendant light, phone-camera HDR.

### Pillar 3 — "The First Bite" (quiet conviction — shares driver)
Single shot, 12 seconds.

Chopsticks lift thick noodle bundle slowly → brings to mouth → bites → chews → 2-second pause, nothing → closes eyes one beat → opens → looks directly at camera → slow exhale through nose → "Yeah." → holds contact 2 seconds. Medium close-up, slightly low angle to include bowl, static. No movement during silence beat. Wet noodle pull audio, near-silence during pause. No music — silence IS the pitch.

---

