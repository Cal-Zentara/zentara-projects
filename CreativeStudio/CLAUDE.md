# CreativeStudio — Project Docs

## Quick Nav — Read First

| I'm doing... | Read only... |
|---|---|
| Continuing work / resuming | `STATUS.md` |
| Working on a specific client | `clients/[client-name]/CLAUDE.md` |
| Adding a new client | `_templates/CLAUDE.md` + Structure section below |
| Universal rules (every client) | This file |
| Starting a character-based video | Prompt Examples (bottom of this file) |

**Do not explore.** If the answer isn't in the files above, ask before searching.

This file is universal — applies to every client. Each client has their own `clients/[name]/CLAUDE.md` with their locked formulas, NSFW words, and prompt templates.

---

## Role Split

**Cal:** Character design only — face description, vibe, outfit, anchor details, creative direction.
**Claude:** Everything else — runs all CLI commands, generates faces/outfits, fuses in Nano Banana Pro, builds the world, directs and generates every shot, logs to tracker.

---

## Models — What to Use and Why

| Job | Model | Why |
|---|---|---|
| Character face generation | `soul_cinematic` | Holds bone structure and facial detail better than gpt_image_2 for people. Run same base prompt multiple times, pick best result. *(From Zephr breakdown — untested on our clients)* |
| Character outfit generation | `soul_cinematic` | Same reason — detail and consistency. Separate prompt, no face in it. *(Untested)* |
| Fuse face + outfit into master reference | `nano_banana_2` | Nano Banana Pro is a blending/fusion tool, not a text-to-image model. Combines two assets into one locked reference image. |
| Blend creature / world variations | `nano_banana_2` | Same — merge best parts of multiple gens you'd never get from a single prompt. |
| All video (every shot) | `seedance_2_0` | Only video model used. Handles personality, dialogue, physics, fight scenes, and synchronized choreography. |
| General image generation (non-character) | `nano_banana_2` | Default for products, creatures, environments. Switch to `gpt_image_2` only when text rendering is needed. |
| World prompt expansion | Claude (this conversation) | Turns a mood into cinematography language before anything is generated. |
| Music generation | Suno — suno.com | Custom mode. Leave Lyrics blank. Add "no vocals, no singing, pure instrumental" to Styles. Generate before any video clip. |

---

## Hard Rules — Always Apply (every client, every generation)

- **NEVER use the Higgsfield MCP.** CLI only (`higgsfield product-photoshoot create` / `higgsfield generate create`).
- **After EVERY generation, open the file immediately** — `start "" "C:\path\to\file.png"` so Cal can see it.
- **After EVERY generation, log to the Google Sheet immediately** — pipe `--json` output to `node tracker/log-from-json.js`. No manual logging, no batching, no exceptions.
- **Always pass `--json` flag** to Higgsfield CLI for clean output parsing.
- **Always poll with `until [ -s output.file ]`** — never sleep + cat.
- **Video tests: always use `seedance_2_0 --resolution 480p --aspect_ratio 1:1`** — cheapest option until Cal approves a direction.
- **Default audio off for product/test clips** — strip with `ffmpeg -i input.mp4 -an output.mp4`. **For narrative pieces with music**, plan music as part of the generation (see Video Production Principles → Sound).
- **Image model rule:** `soul_cinematic` for character faces and outfits. `nano_banana_2` for fusing assets and everything else (products, creatures, environments). `gpt_image_2` only when text rendering is needed — it handles text better than any other model.

---

## Video Production Principles (universal — apply to all clients)

These are the lessons that separate AI slop from real productions. Apply on every video project regardless of client.

### Character building
1. **Generate face and outfit separately, then fuse them into one reference image.** Splitting the prompts gives way more control than throwing everything in at once.
2. **Use one base prompt, generate the face multiple times, pick the one with the right bone structure.** Face is the asset — cheap to retry now, expensive to retry inside a finished video.
3. **Build the outfit in its own prompt. Check every accessory survives between gens.** Add back anything that drifted (straps, belts, jewelry) before it becomes a problem.
4. **Fuse face + outfit in Nana Banana Pro = one master "screen test" image. Pass this to Seedance every clip.** This is the locked character. Same person, every shot. No drift.
5. **Anchor characters with 1-2 tiny weird details** (band-aid on nose, loose hair strand, chipped tooth, smudged eyeliner). Generic prompts blur. Specific prompts stick. Single biggest consistency lever.

### World building
6. **Run mood through Claude first to expand it into cinematography language.** Cal writes mood ("late-night ramen, cozy"). Claude turns that into camera/light language Higgsfield can read.
7. **First pass is never pushed enough.** Iterate by pushing harder on specific elements (debris, overgrowth, time passed, warmth).
8. **Generate multiple variations of a key asset, then blend the best parts in Nana Banana Pro.** Combo > prompt — you get something you couldn't prompt directly.
9. **Tie visual choices to character personality** (mech color = her vibe, bowl pattern = the shop's age). Intentionality = real production feel.

### Directing the video
10. **Plan structure before generating a single clip.** Every character introduced twice (who they are + what they do). Stops random-shot-and-hope edits.
11. **Prompts describe what the CAMERA does, not just what's on screen.** "Slow push-in" = caption. "Camera holds, then drifts forward 2 feet as she exhales" = direction.
12. **Write personality traits as words into the prompt** ("arrogant," "calm," "tired," "defeated"). Seedance reads emotion. Skip this = blank-face character.
13. **Write dialogue lines INSIDE the prompt.** Seedance generates the delivery. Don't describe the line — write the line.
14. **Write PHYSICS, not actions.** "Punches monster" = caption. "Body folds backwards, debris cascades, dust kicks up" = impact. Same for soft moments: "shoulders drop, breath leaves slowly" beats "she sits down tired."
15. **For heavy movement, describe the consequence** (ground buckles, dust rises). Makes weight feel real instead of floaty.

### Choreography / synced movement
16. **For synchronized or choreographed sequences, LESS prompt is better.** One cinematography term ("K-pop formation") beats describing each move. Over-prompting kills sync.

### Sound
17. **Generate music separately first — always.** Whether it goes into the generation or post, the track exists before any clip is made. Soundtrack first, video second.

18. **Choreographed / synchronized sequences → music INSIDE the generation.** Upload the track (+ lyrics if it has them) as an audio element in Seedance. The model reads the tempo and energy before generating a single frame — cuts sync naturally. Use this for: dance sequences, K-pop formations, any scene where characters move together to a beat.

19. **Narrative / story-driven clips (multiple separate generations) → split-track method.** Generate the full music track first. Split it into segments matching each clip's duration using FFmpeg. Upload each segment into its corresponding Seedance generation — music is baked in during generation, not added after. Stitch the clips — music flows continuously because each clip was built against its own portion of the same track. Use this for: any multi-clip story where you have different reference images per scene.

### Writing Discipline — How to Apply These Without Sounding Like AI

The principles above tell you what to do. These rules tell you how to do them without producing flat AI copy. Follow these every time you write a prompt.

1. **Dial down. Quiet beats loud.** "Numb" beats "defeated." "Exhale" beats "surrendering." First drafts always sound like screenplays. Real life is quieter. Pick the lower-volume word.
2. **Re-read your draft as a critic before shipping.** If you wouldn't stop scrolling for it, the prompt won't either. The author can't catch what the critic catches.
3. **Anchor details come FROM the reference image, not invented around it.** Look at what's already there that's unusual. Borrowing details = consistency. Inventing details = drift.
4. **Match every word to the goal of the ad.** Ramen sells hunger. Mech sells impact. Skincare sells calm. Drama words that don't serve the goal = cut them.
5. **One specific detail beats five.** "Pink headband" is enough. "Pink terrycloth headband with a small bow" confuses the model — it picks the weakest adjective and runs. Adjective stacks = drift.
6. **Verbs over adjectives.** "Tired girl" is weak. "Girl whose shoulders are caved in" works. Adjectives describe state. Verbs describe what force is doing to a body. Seedance reads verbs better.
7. **Cut noise words: "cinematic," "filmic," "dramatic lighting," "epic."** These don't tell the model anything specific. They tell it "be ad-like" which makes everything look like a stock template. Name the actual look — "warm sodium streetlight" not "cinematic lighting."
8. **One emotion per clip. Not three.** "Tired, sad, hopeful, drawn in" = model splits attention and delivers none of them. Pick one and write the entire prompt toward it.

---

## Data Schema

**Google Sheets Tracker:** `https://docs.google.com/spreadsheets/d/1Z15ZahCI_woqABikf8unma054ayBfshDN70yqa3NB-0`
Columns: Date | Client | Model | Prompt | Output URL | Rating | Notes
Log command (manual): `cd tracker && node log.js "<prompt>" "<model>" "<url>" "<client>" "<rating>" "<notes>"`
Auto-log (preferred): pipe Higgsfield JSON output → `node tracker/log-from-json.js "<prompt>" "<model>" "<client>"`

Tracker scripts: `tracker/log.js`, `tracker/setup.js`, `tracker/log-from-json.js`

---

## Universal Gotchas

These apply to every client. Client-specific NSFW words and prompt traps live in each client's CLAUDE.md.

| Situation | Fix |
|---|---|
| **CLI shows scary credit numbers (480, 3000, etc.)** | Divide by 100 — that's the real cost. CLI shows raw units, website shows display credits. 480 CLI = 4.8 real credits. |
| **Higgsfield MCP image tools are text-to-image only** | No reference image input via MCP. CLI only. |
| **Higgsfield app vs Cloud are separate** | higgsfield.ai (app subscription) and cloud.higgsfield.ai (developer API) have separate credit pools. CLI and MCP both use app subscription credits. |
| **Seedance 2.0 minimum duration is 4 seconds** | `--duration 3` errors. Minimum is 4. |
| **`--generate_audio` not supported on Seedance 2.0** | No audio flag exists. Strip audio post-generation with FFmpeg: `ffmpeg -i input.mp4 -an output.mp4` |
| **`--start-image` always locks first frame** | No "reference only" mode. When passed, the video starts from that exact image frame. Use it when you want a specific object/character to appear at the start; omit for lifestyle scenes. |
| **Video text/spelling is unreliable** | AI garbles label text on generated assets. Accept it for now — resolved when real sticker product photos are used as reference. |
| **Tracker log.js deprecation warning** | `[DEP0040] punycode` — harmless, logging still works. |
| **Sensitive content block + credit refund** | Read the rejected prompt, remove flagged words, retry. Each client's CLAUDE.md tracks their specific NSFW traps. |
| **Skills not appearing in Claude Code** | Close and reopen Claude Code after install. |
| **Reference image ignored in generation (product shoots only)** | When passing a real product photo, explicitly say "use this exact reference image, do not alter it." Not needed for character videos — the @TAG system handles reference locking. |
| **Wrong product appears (generic version)** | Drag product photo into chat + tag it — never describe by text alone. |
| **Interactive selector on skills install** | Use `--yes` flag to skip it. |

---

## Stitch / Assembly

**FFmpeg concat (no re-encode):**
```bash
printf "file 'clip1.mp4'\nfile 'clip2.mp4'\nfile 'clip3.mp4'" > concat.txt
ffmpeg -f concat -safe 0 -i concat.txt -c copy output.mp4 -y && rm concat.txt
```

**Strip audio:**
```bash
ffmpeg -i input.mp4 -an output.mp4
```

---

## Structure

Zentara's internal creative studio for AI video ads and content. One folder per client. Universal rules live here — locked formulas live in each client's own CLAUDE.md.

```
CreativeStudio/
├── STATUS.md
├── CLAUDE.md                  ← universal rules (this file)
├── tracker/                   ← Google Sheets logging scripts
└── clients/
    └── [client-name]/
        ├── CLAUDE.md          ← locked formulas, NSFW words, prompt templates
        ├── brief.md           ← who they are, product, vibe, target audience
        ├── assets/            ← logos, product photos, brand colors
        └── outputs/           ← generated videos/images, ready to deliver
```

**Adding a new client:**
1. Create folder under `clients/`
2. Copy `_templates/CLAUDE.md` as a starting point
3. Add brief.md and assets
4. Lock formulas in their CLAUDE.md as you find what works

---

## Higgsfield

**CLI installed:** `npm install -g @higgsfield/cli`
**Auth:** `higgsfield auth login` (browser OAuth — one time per machine)
**Skills installed:** `npx skills add higgsfield-ai/skills --yes`
**Skills location:** `.agents/` folder at project root
**Skills lock:** `skills-lock.json` at project root

### Key Commands
| Command | What it does |
|---|---|
| `higgsfield auth login` | Re-authenticate if session expires |
| `npx skills add higgsfield-ai/skills --yes` | Reinstall all 4 default skills |

### Skill Workflow
1. Generate 3–5 variations
2. Pick the best output
3. Copy its prompt
4. Ask Claude to reverse-engineer a skill from it → saves to `.claude/skills/`
5. Every future generation using that skill is consistent

---

## Prompt Examples (from Zephr — Higgsfield reference project)

These are real prompts that produced real results. Use them as templates. Swap the character names, colors, and anchor details for your client. The structure is what matters.

Source: Higgsfield's own breakdown video of the Zephr trailer — 5 characters, a monster invasion, fully built in Seedance 2.0.

---

### Step 1 — Character Face (soul_cinematic)

Generate the face first. Run this same base prompt multiple times, pick the best bone structure.

> Young Asian female (age 20), slim, very attractive K-pop idol level beauty, flawless skin, soft symmetrical features, expressive eyes. Short/mid-length slightly messy stylish hair. White studio background, soft cinematic lighting, realistic, high-end fashion style.

---

### Step 2 — Outfit Only (soul_cinematic)

Separate prompt. No face. Check that every accessory survives — if a strap or belt disappears between gens, add it back explicitly now.

> Mustard yellow latex crop top, long sleeves, high gloss shiny finish, fitted. Oversized baggy khaki cargo pants, multiple large side pockets, knee pad panels, tapered and gathered at the ankle, wide buckle belt at the waist. Burnt orange lace-up combat boots, chunky sole, mid-calf height. Midriff exposed. Street style meets tactical utility. Holographic glitter bandage across the nose bridge.

---

### Step 3 — Fusion (Nana Banana Pro → final reference image)

Pass both images into Nana Banana Pro with this prompt. Output = the locked character. Every future Seedance gen checks against this.

> The character from image 1 wearing this outfit from image 2. Full body shot, white studio background, soft cinematic lighting, realistic.

---

### Creature / Enemy (nano_banana_2)

Same white background + product-render lighting — just applied to a non-human asset.

> A massive alien creature with an arachnid-like body structure, multiple long serrated limb-blades splayed wide, heavy armored carapace covered in jagged spines and organic plating. Glowing molten core visible at the chest. Textured surface mixing hardened shell, wet organic tissue, and cracked stone-like hide. Low crouching stance, front-facing, menacing. White background, soft shadow beneath, product-render style lighting. Hyper-detailed, cinematic realism.

---

### Mech Suit — Reveal Shot (Seedance 2.0, video)

Camera movement is part of the prompt. This is a video gen, not an image.

> A massive angular bipedal mech suit — white and grey segmented armor panels with teal-green accent plates on shoulders and torso, dark gunmetal joints and hydraulic limbs — standing upright in a dramatic wide shot. The cockpit chest cavity is a transparent hexagonal glass pod revealing a female pilot inside seated at controls. The mech holds two semi-automatic pistols at its sides. Cinematic studio lighting, near-white background, photorealistic hard surface detail, sci-fi action game concept art aesthetic. Camera slowly orbits around the mech from front to side profile, depth of field on the full silhouette.

---

### Scene — Character Introduction in Cockpit (Seedance 2.0)

Once the character is saved in Higgsfield, reference her by tag. Anchor details (lollipop, nose bandage) go in the prompt to hold consistency.

> @HARU is inside a dark, utilitarian, gritty sci-fi vehicle cockpit, surrounded by metallic panels, exposed wires, and a black racing seat with subtle red accents. The scene begins with a tight medium close-up on her chest and mouth, illuminated by dim, focused ambient light that dramatically highlights the sheen of her top. The camera is static but then jolts as she unbuckles a black seatbelt, leading to a quick cut. A sudden, jarring pivot and pan quickly transitions to a tight close-up of her face, now lying on her side, framed through a narrow opening in the mech's interior. Her short, curly brown hair is messy, a sparkling silver bandage adorns her nose, a white strip rests on her upper lip, and a yellow lollipop protrudes from her mouth. Her wide eyes snap open in sudden, quirky surprise, reflecting the low, ambient light, as the camera holds static on her vulnerable yet peculiar expression. The visual style is gritty sci-fi, emphasizing detailed textures and a blend of suspense and unexpected innocence.

---

### Scene — Mech + Pilot, Exterior City (Seedance 2.0)

Two reference tags: one for the character, one for her mech. Dialogue written directly into the prompt — Seedance generates the delivery.

> A @ZERO-MECH, its right arm poised, having just caused a massive impact, stands amidst a desolate, futuristic cityscape. Towering, derelict skyscrapers loom under a bright, clear daylight sky, as dust and debris erupt violently around the mech. The harsh, direct daylight casts sharp shadows, imbuing the scene with a powerful, urgent, post-apocalyptic action mood. A low-angle wide shot emphasizes the mech's immense scale, with a strong camera shake from the impact. The perspective then shifts to a medium shot inside a hyper-realistic, metallic, utilitarian futuristic mech cockpit, where @ZERO casually reclines in the pilot's seat, looking up contemplatively. Multiple screens display holographic data within the cockpit, while the exterior view through the reinforced glass reveals the same destroyed urban landscape. The interior is lit by practical, diffused lights mixing with the bright external daylight, creating a focused, determined, and intense atmosphere. The camera transitions from a medium shot of her moving, with continued slight camera shake, to a static medium close-up, capturing her focused expression. She's saying "Spotted her. Sending a mark", conveying an intense and powerful resolve. The camera holds a steady medium close-up. The entire scene is rendered in high-fidelity CGI, cinematic, and action-movie style, typical of a dystopian sci-fi genre.

---

### Scene — Action + Dialogue + Physics (Seedance 2.0)

Personality traits written as words ("arrogant," "rebellious"). Dialogue written in. Consequence described at the end — hair blown back from recoil, hands stay firm.

> A powerful cinematic sequence: the camera pushes in and tracks dynamically, from a slightly low angle, focusing on the mech's aggressive stance and its primary weapon, in a gritty sci-fi action style. Then, a sharp cut to the dark, intricate interior of the mech's cockpit, where @REINA sits confidently at the controls. She takes a long, slow drag from a cigarette, exhaling a plume of smoke, her expression a mix of calm resolve and subtle anticipation. The dim, functional cockpit lighting casts dramatic shadows across her face as the camera slowly pushes in on her intense gaze, creating a cool, confident, and slightly rebellious mood as she states, "I hope I will be MVP today." Cut back to a medium shot of the mech, now precisely aiming its massive cannon down the ruined street under the same subdued lighting, ready to fire. Finally, a static medium close-up shot of the woman in the cockpit, her hair dramatically blown back by the immense recoil as the cannon fires off-screen, yet her hands remain firm on the silver joysticks, and her steely, confident expression never wavers, maintaining an intense and powerful action-driven mood in this thriller.

---

### Scene — Personality-Driven Dialogue (Seedance 2.0)

One line of dialogue defines the character completely. Don't describe the line — write the line.

> A high-fidelity cinematic video featuring @NAOMI, first seen in a dramatic medium close-up, her left hand resting gently on her cheek, a playful, subtly seductive smile on her lips, illuminated by soft, directional key lighting in the dark, high-tech interior of a futuristic cockpit, the shot static. The camera then cuts to a wider static medium shot, revealing her holding dual joysticks, her expression shifting to powerful determination within the brightly lit cockpit. She jokingly says: "Double penetration? Will a third one fit?"

---

### Scene — Cockpit → Exterior Action (Seedance 2.0)

Intimate moment cuts straight to mech in the street. One prompt, two completely different scales.

> @MIRA applies vibrant red lipstick to her full lips, her gaze direct and intense. The camera performs a smooth, cinematic push-in from an extreme close-up on her mouth and hand to a close-up on her face, revealing the subtle details of her skin and the futuristic cockpit interior with its soft, ambient console lights. Her expression is confident and slightly alluring. She says: "Sorry for being late." The scene abruptly cuts to a dynamic low-angle tracking shot, following the mech's heavy, ground-pounding strides across a desolate, debris-strewn city street and a broken wooden surface. The camera smoothly transitions to a medium close-up, tracking the mech's cockpit, clearly revealing the focused female pilot within the transparent canopy. The shot then expands into a wide, cinematic view, pulling back and tilting slightly upwards as the formidable mech runs, then dramatically skids to a halt, kicking up a cloud of dust on the ruined street. Towering, dilapidated skyscrapers frame the post-apocalyptic cityscape under a harsh, backlighting sun that creates a hazy, dust-filled atmosphere and intense lens flares, amplifying the gritty, action-packed, and melancholic mood of this realistic sci-fi action epic.

---

### Scene — Physics / Consequence Only (Seedance 2.0)

Don't write the action. Write what the force does to the body.

> A dynamic close-up of the mech now precisely aiming its massive cannon down the ruined street under the same subdued lighting, ready to fire. A massive rifle firing with a powerful recoil in the sunny, ruined city. Finally, a static medium close-up shot of @REINA in the cockpit, her hair dramatically blown back by the immense recoil as the cannon fires off-screen, yet her hands remain firm on the silver joysticks, and her steely, confident expression never wavers, maintaining an intense and powerful action-driven mood in this mecha thriller.

---

### Scene — Multi-Asset Combat (Seedance 2.0)

Three reference tags in one prompt: environment, creature, mech. This is how you pull all your built assets into a single scene.

> Generate a high-fidelity, hyper-realistic sci-fi action sequence set in @CITY, clear daylight. The camera quickly whip-pans to a medium shot revealing a @MONSTER, resembling a monstrous insectoid with a fearsome maw, mid-air and attacking a massive, heavily armored @MIRA-MECH. As the monster lunges, the mech's powerful, drilling arm swiftly thrusts forward in a rapid push-in close-up shot, brutally impaling the monster's head with a sickening crunch and a violent explosion of dark, crimson blood and gore splattering across the frame.

---

### Dance — K-Pop Formation, Spotlight Stage (Seedance 2.0)

**Music goes INSIDE the generation.** Generate the track in Suno first. Upload it into Seedance with this prompt — the model reads the beat before generating a single frame. Less prompt = better sync. Don't choreograph — just say "K-pop formation" and let Seedance work.

> A wide cinematic shot opens on @ZERO, @MIRA, @HARU, @REINA, @NAOMI — a K-pop group with an edgy, futuristic aesthetic, emerging from deep shadow into a dramatic, crisp spotlight that cuts through a smoky, desolate stage. @HARU commands attention. The overall setting is a minimalist, dark studio with a smooth, dark floor, creating a stark contrast with the brilliant overhead light. As the camera slowly pushes in with a fluid, deliberate motion, the dancers begin their powerful, confident choreography, their movements sharp and synchronized, radiating an intense, high-energy atmosphere. Dynamic cuts transition from a medium full shot to a tight medium shot, capturing the lead dancer's expressive face and then quickly back to the full group, showcasing their collective power. The lighting remains stark and theatrical, emphasizing shadows and highlights, enhancing the sleek, hyper-realistic visual style of a high-production K-pop music video in stunning 4K. The camera continues its dynamic movement, subtly panning and dollying to follow the intricate dance, maintaining an immersive, performance-driven mood.

---

### Dance — K-Pop Formation, Cyberpunk Studio (Seedance 2.0)

Same formation, different staging. Rectangular panels instead of spotlight. More cyberpunk, less theatrical. Use as a variation when the spotlight version isn't the right vibe.

> A high-definition K-pop music video featuring @ZERO, @MIRA, @HARU, @REINA, @NAOMI, performing a dynamic, sharp choreography. The setting is a minimalist, dark studio with a seamless dark gray floor and walls, subtly lit by soft, rectangular overhead panels casting cool ambient tones. Dramatic low-key lighting is focused on the subjects, with front and side key lights creating strong highlights on their diverse, futuristic, and tactical-inspired outfits. The mood is edgy, powerful, and mysterious, embodying a sci-fi cyberpunk aesthetic. The camera employs a mix of static and subtly moving shots, commencing with a full-body wide shot of the group, transitioning to dynamic medium close-ups on individual members, then returning to a wider shot as the group dances. A particular low-angle medium shot focuses on @REINA, followed by close-ups on her face and upper body, before concluding with a final full-body wide shot. The cuts are sharp and rhythmic, enhancing the energetic performance, with camera movements generally comprising subtle push-ins, pull-outs, and gentle pans to maintain a cinematic, high-production quality.

---

### Split Screen — Individual Cockpit Shots (Seedance 2.0)

Each character gets their own static clip. Edit them side by side in post. Keep these simple — the character does all the work.

**Naomi:**
> A static medium close-up from a slightly elevated angle, focusing on a determined @NAOMI. Her serious, intense gaze is fixed forward, suggesting deep concentration. She is seated within the detailed cockpit of a @NAOMI-MECH. The scene is bathed in soft, cool-toned cinematic lighting, subtly sculpting her features and the metallic interior, creating a tense, focused, and anticipatory mood. This hyper-realistic sci-fi film aesthetic is rendered with sharp focus and detailed textures, evoking a high-stakes space opera or action genre.

**Reina:**
> A high-fidelity cinematic render, in the style of a modern sci-fi action film. @REINA is seated in @REINA-MECH. Her gloved hands grip dual flight sticks, her dark hair slicked back, as she looks slightly upwards with a contemplative, determined gaze. The camera is a medium close-up, static shot, centered on her. Soft, diffused cool light illuminates the scene from above, casting subtle shadows and highlighting the metallic textures of the cockpit, creating a tense and anticipatory mood.

**Mira:**
> @MIRA is seated in the metallic, futuristic cockpit of @MIRA-MECH, her hands gripping twin joysticks. Soft, overhead ambient light casts a neutral glow, highlighting the details of her face and the machinery, creating a tense, anticipatory mood. This is a static medium shot, centered on the pilot, rendered with cinematic realism in a sci-fi action style.

**Zero:**
> A high-angle medium shot of a focused @ZERO seated in a @ZERO-MECH. Her hand rests gently on a console joystick. Soft, diffused overhead light illuminates the scene, enhancing the metallic textures and casting subtle shadows, while subtle operational lights from the cockpit add depth. The mood is calm, contemplative, and slightly tense, maintaining a realistic, high-fidelity cinematic sci-fi style. The camera is static.

**Haru:**
> A high-angle static shot looking down at @HARU. She holds a red lollipop in her slightly open mouth, with her tongue slightly visible, and looks directly up at the camera with a surprised or curious expression. She is seated in @HARU-MECH. The scene is lit by dramatic, focused overhead lighting, casting soft shadows and highlighting the glossy texture of her top and the contours of her face against the dark, mysterious environment. The atmosphere is a blend of futuristic sci-fi tension and youthful innocence, rendered with hyper-realistic detail and a high-fidelity visual style.
