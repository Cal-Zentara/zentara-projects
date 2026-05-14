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

## Current Direction (May 13, 2026 — late night — ANIME CONCEPT RESUMED)

**Locked direction:** Back to the 4-shot WILD ANIME plan. Bowl SLAM already approved. Three shots left to generate. Ship for May 20 grand opening.

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

**OLD Jiro explainer direction (parked — DO NOT BUILD):**

~~Calm McDonald's-style 15-second explainer for May 20 grand opening of Torrance + Yorba Linda. Replaces the savage anime concept for this launch ad. Anime direction is parked as a fallback for future hype/teaser ads.~~

**Why the pivot:** Most US viewers don't know what Jiro-style ramen IS. Selling like McDonald's sells a Big Mac (calm, premium, food does heavy lifting) explains the product before asking for the sale. Two-city launch (Torrance + Yorba Linda both open May 20) needs explainer energy, not hype.

**Locked decisions:**
- Visual style: photoreal premium TV commercial (NOT anime)
- 7 panels, 15-second target, 9:16 final
- NO characters, NO hands/arms/fingers anywhere in any shot
- Panel 7 is candid documentary-style (bowl off-center, available light, in-world signage on back wall) — NEVER polished logo card
- Voiceover delivers all info — no text overlays in panels
- Music: warm acoustic + light koto pluck, 85 BPM (NOT the existing anime track) — Suno gen pending

**Locked references (in `C:\Users\Aesth\Desktop\Images\`):**
- `AdRamen.png` — hero ramen bowl photo (panels 2, 3, 4, 5)
- `AdMazesoba.png` — Mazesoba bowl photo (panel 6)
- `GHLogo.png` — clean brand wordmark (panel 7 in-world signage)

**Production vocab:** `CreativeStudio/docs/fast-food-commercial-production-vocab.md` — full paste-ready vocab synthesized from 7 parallel research agents on May 13. Use this on every photoreal food panel.

**LOCKED (May 13, 2026 — VO + Text Card layer plan):**

Three layers stacked in post — clean video gen, no text or VO baked into Seedance.

**Layer 1 — Clean video (Seedance gen, 15 sec, 9:16, no text on screen, food only).**

**Layer 2 — Voiceover (deep male, calm, slight gravel — ElevenLabs). 4 lines only — text cards do the explaining, VO carries the mood:**
1. "What is Jiro-style ramen?"
2. "Thick noodles. Rich pork broth. Fresh garlic."
3. "Or brothless. Mazesoba."
4. "Garlic High. Open May twentieth."

**Layer 3 — Animated text cards (keyframe overlays in post, matching the Garlic High website typography — chunky black/yellow/white):**
- Panel 1 → "What is Jiro-Style?"
- Panel 2 → "Born in Tokyo. 1968."
- Panel 3 → "Thick noodles."
- Panel 4 → "Rich pork broth."
- Panel 5 → "Fresh garlic — zero restraint."
- Panel 6 → "Or brothless. Mazesoba."
- Panel 7 → "Garlic High. Torrance + Yorba Linda. May 20."

**Tight sync rule:** when VO references a specific bowl/ingredient, that exact visual MUST be on screen at that moment. If a shot runs short, extend it 0.3–0.5 sec in FFmpeg so the VO line lands fully on the right visual.

**Locked storyboard reference:** `clients/Garlic-high/outputs/storyboard_jiro_v6.png` (May 13, 2026) — full regen with no-hands rule and candid panel 7.

**Working prompts:**
- Storyboard: `clients/Garlic-high/outputs/storyboard_prompt_jiro_v3.txt`
- Pending: video prompt (Phase 4), then Seedance video gen (Phase 5), then FFmpeg post

**Where we left off (compact point):** v6 storyboard generated, awaiting approval. Next: Seedance video prompt with NO HANDS constraint, 480p test gen, FFmpeg post (no music yet — Suno gen pending).

---

## Current Workflow (Primary — Storyboard-First)

**Locked May 13 2026.** Replaces the shot-by-shot approach below as the primary production method. The shot-by-shot v3 WILD ANIME prompts are kept as fallback if storyboard-first fails.

**How it works:**
1. Generate a 12-panel storyboard image via Higgsfield Canvas `1image2fullAD` template OR via `gpt_image_2` CLI with a storyboard prompt.
2. Pass storyboard to Seedance CLI as `--image` (auto-remaps to start_image role). Write a per-shot animation prompt directing Seedance to animate each panel sequentially.
3. FFmpeg post: trim the source storyboard frame off the end (Seedance appends it ~13.5s), add `Garlic High.mp3` music, append `soon.png` end card.

**Locked storyboard reference (v1, May 13 2026):**
`c:\Users\Aesth\Downloads\hf_20260513_053145_695db5f1-581a-4d8e-839e-c5c777d3d4c5.png` — 10 panels: storefront → counter back-view → face close-up → bowl impact → food macro → garlic orbit → noodle vortex → bite → vortex shot → final brand frame.

**Locked animation prompt (softened, NSFW-safe):** See "Storyboard Animation Prompt" section below. Uses "lands hard / lift sharply / rushing" instead of "detonates / violently / rip" to avoid the filter.

**Latest output:** `C:\Users\Aesth\Downloads\GarlicHigh_CLI_final_v3.mp4` (16s, music + end card baked in).

---

## Storyboard Animation Prompt (locked, NSFW-safe)

Used with `--image <storyboard.png> --duration 15 --resolution 480p --aspect_ratio 9:16` on Seedance 2.0. Never pass `--generate_audio` — that flag doesn't exist on Seedance 2.0 and silently fails. To bake music in, use `--audio ./track.mp3`.

```
90s anime illustrated style, late-night ramen shop. Animate this storyboard as 10 sequential full-screen shots, left to right then top to bottom. Each cut is its own emotion, escalating from anticipation to a power moment. Shot 1: Slow push-in on the Garlic High neon storefront, a woman silhouette walks toward the door, wet pavement reflects red and gold. Arrival. Shot 2: Wide interior, back of her head as she settles onto a stool at the counter, steam drifting through the foreground. Anticipation. Shot 3: Tight close-up on her face, pink headband, slight smirk, neon rim light. Ready. Shot 4: Ramen bowl lands hard on the counter, ceramic shudders, broth ripples outward, garlic pile trembles, single bright flash on contact, anime impact frame with radial speed lines. Impact. Shot 5: Extreme macro of the bowl. Glossy noodles, garlic mountain, egg yolk glistening, steam jets upward in a thick golden column. Hunger. Shot 6: Medium shot, garlic flakes orbit around her in slow motion, hair lifting from the heat, she leans toward the bowl. Pull. Shot 7: Chopsticks lift noodles sharply upward, strands spiral into a vortex above the bowl, broth droplets float mid-air, anime motion lines radiate outward. Energy. Shot 8: She takes the first bite. Camera tight on mouth and noodles, steam rushing sideways, single bright flash at the bite. Power. Shot 9: Overhead shot, bowl glowing at center of a swirling garlic vortex, chopsticks anchor the spiral. Ascension. Shot 10: She raises her chopsticks triumphant, Garlic High neon glowing red behind her, MORE GARLIC POR FAVOR sign in frame. Hold longer on this final shot. Brand payoff. Hard cuts only. Edit rhythm builds from slow arrival to peak energy to a final hold. Food is the hero throughout. Foreground occlusion (steam, chopsticks, counter edge) for depth on close-ups. Diegetic audio only: ceramic ring, broth bubble, chopstick clink, noodle pull, ambient shop chatter.
```

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

## Locked Seedance Prompts (v2 — Savage Concept)

**Settings for all shots:** seedance_2_0, 480p, 9:16, 4-5 sec, mode std, no music (bake music in only after shot is approved).

### Shot 1 — Bowl crashes down (4 sec)
**Images:** `Images/4.png` (start-image)
**Prompt:**
> A ramen bowl crashes down on a wooden counter. The moment of impact — ceramic rings against wood, steam bursts upward in a thick column, the heaped pile of raw minced garlic shudders and a single flake falls. The bowl settles. 90s anime illustrated style. Warm golden light from above. Camera holds tight on the bowl, slight shake from impact, then steady. One emotion: arrival.

### Shot 2 — Garlic NUKE (5 sec)
**Images:** TBD — likely regenerate a start-image of the chef raising a cleaver over a massive whole garlic head on the counter. Use `Images/RAMEN SHOP ASSET.png` for shop background reference.
**Format:** 9:16 vertical
**Prompt:**
The chef slams a cleaver down onto a giant whole garlic head on the counter. The blade hits — instant impact. Garlic flakes blast outward in every direction in slow motion. The whole shop shudders, lights flicker once. Steam from the broth pots shoots upward. Chef's face stays calm. 90s anime illustrated style with anime impact frame — radial speed lines from the blade, ground crack hairline forming. Warm interior light cut by a single flash. Camera holds tight on the garlic head, slight shake from impact. One emotion: detonation.

### Shot 3 — Noodle WHIRLWIND (5 sec)
**Images:** `Images/hgshot3_noodle.png.png` (start-image)
**Format:** 9:16 vertical
**Prompt:**
90s anime illustrated style, extreme close-up food action, one emotion: violence. Chopsticks rip a thick mound of glossy noodles straight upward — strands form a swirling vortex above the bowl. Broth droplets freeze mid-air around the spiral. Bowl rim trembles from the force. Steam bends sideways from the pull. Anime motion lines — radial speed lines from the bowl outward, blur streaks behind the noodle strands, frozen droplet suspension mid-air. Ramen bowl on wooden counter, chopsticks gripping thick noodle bundle, steam rising. Warm golden interior light. Diegetic audio only: chopstick clink, wet noodle pull, broth droplets hitting the counter, ambient shop chatter behind.

### Shot 4 — First Bite POWER-UP (5 sec)
**Images:** `Images/hgshot3.png` (start-image)
**Format:** 9:16 vertical
**Prompt:**
90s anime illustrated style, mid-bite power moment, one emotion: ascension. Young woman bites down on a mouthful of noodles — the instant her teeth close, her eyes flash bright white. Red and gold aura erupts behind her, filling the frame. Steam shoots from her ears like a dragon. Her hair lifts upward from the energy. Background blows out to pure red. Anime power-up burst — radial light lines exploding from her head, hair lift from energy, aura erupting behind her. Young woman, brown hair, pink headband, black blazer, seated at counter. Japanese ramen shop sign visible behind her. Warm interior light. Diegetic audio only: chopstick clink, bite sound, then silence — then steam hiss like pressure releasing.

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

May 12 2026 (session 2):
- Tracker fixed — credentials.json, config.json, token.json all copied to CreativeStudio root. Logging works.
- End card updated — `soon.png` replaces `logoendcard.png`. Now includes: "MORE GARLIC POR FAVOR" + Sunnyvale · Yorba Linda · Torrance Coming Soon + garlichigh.com
- Shot order changed — Bowl SLAM opens (proven food hook), Garlic NUKE moves to Shot 2
- Clip length locked — generate at 4 sec (minimum), trim to 3 sec in FFmpeg
- Music locked — `Garlic High.mp3`, bake-in method (cut into 4 x 3-sec segments, one per shot)
- SFX plan — Old-School Shonen SFX pack downloaded from heltonyan.itch.io. Apply in Descript after stitching.
- All 3 video prompts updated with full 3-block anime grammar structure + pace lines

**Final shot order:**
1. Bowl SLAM ✓ DONE — `outputs/shot1_bowl_v2_slam.mp4` (needs trim to 3 sec)
2. Garlic NUKE — start-image: `Images/hgshot1.png` (not generated yet)
3. Noodle WHIRLWIND — start-image: `Images/hgshot3_noodle.png.png` (not generated yet)
4. First Bite POWER-UP — start-image: `Images/hgshot3.png` (not generated yet)

**Next steps (pick up here):**
1. Generate Shot 2 (Garlic NUKE) via Seedance CLI
2. Generate Shot 3 (Noodle WHIRLWIND) via Seedance CLI
3. Generate Shot 4 (First Bite POWER-UP) via Seedance CLI
4. Trim all 4 clips to 3 sec in FFmpeg
5. Cut Garlic High.mp3 into 4 x 3-sec segments
6. Stitch in order: Bowl SLAM → Garlic NUKE → Noodle WHIRLWIND → Power-UP
7. Add SFX + music in Descript
8. Slam soon.png end card over Shot 4 power-up moment
9. Export
