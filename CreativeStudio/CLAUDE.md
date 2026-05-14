# CreativeStudio — Project Docs

## Quick Nav — Read First

| I'm doing... | Read only... |
|---|---|
| Continuing work / resuming | `STATUS.md` |
| Working on a specific client | `clients/[client-name]/CLAUDE.md` |
| Adding a new client | `_templates/CLAUDE.md` + Structure section below |
| Universal rules (every client) | This file |
| Looking at Joey's original Zephr example prompts (reference only) | `zephr-prompt-examples.md` |

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
- **Start-image first, motion second.** Before generating any video clip, check if regenerating the start-image would give a better result. If the start frame is wrong pose, wrong angle, wrong expression, or wrong scale for the motion we want, Seedance burns half the clip just repositioning. ALWAYS suggest regenerating the image to Cal before generating the video when it would improve output. Cheap image retry now beats expensive video retry later.
- **No sidebars (blockquotes) in prompts or summaries.** Never wrap prompt text or summaries in `>` markdown blockquotes — they render with a vertical sidebar that makes copy-pasting prompts a pain. Use plain paragraphs or bold labels. Reserve `>` only for genuine quoted speech.

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

## Workflow Options

Two production approaches. Pick based on the project — both use the principles above.

### Storyboard-First (default for short ads / demo reels)

One image → one Seedance gen → FFmpeg post. Cohesive output, fewer credits, faster iteration.

**Steps:**
1. **Brief → storyboard prompt.** Cal gives the brand brief in plain English. Claude writes the 12-frame storyboard generation prompt directly in chat (no Canvas needed — same system prompt logic).
2. **Storyboard image (first draft).** `higgsfield generate create gpt_image_2 --prompt "<storyboard prompt>" --aspect_ratio 16:9 --quality high --wait --json | node tracker/log-from-json.js "..."` — `gpt_image_2` is the first-draft model because it renders brand text correctly on the final panel ("MORE GARLIC POR FAVOR" etc.). Generate 2-3 variants, pick the best.
2a. **Storyboard adjustments (rounds 2+).** Switch to `nano_banana_2` for any edits to the chosen storyboard — swap a panel, fix a face, change a pose, adjust the brand text panel. Nano Banana Pro is a fusion/editing tool, not a text-to-image model — it preserves the rest of the storyboard while modifying only what you ask. Pass the storyboard as `--image` plus a text prompt describing the change.
3. **Video.** `higgsfield generate create seedance_2_0 --prompt "<animation prompt>" --image <storyboard.png> --duration 15 --aspect_ratio 9:16 --resolution 480p --wait --json | node tracker/log-from-json.js "..."` — animates panels sequentially.
4. **Post (FFmpeg).** Trim 1.5-2s off the end (Seedance appends the storyboard frame). Add music. Append end card.

**Storyboard-first gotchas:**
- **Never pass `--generate_audio` to Seedance CLI.** That flag doesn't exist on Seedance 2.0 — it only exists on `marketing_studio_video`. Using it silently fails with no error message. To bake music in, use `--audio ./track.mp3` — that is the correct flag and works on Seedance 2.0.
- **`-c copy` trim doesn't cut on non-keyframes.** When trimming the storyboard frame off the end, re-encode: `-c:v libx264 -pix_fmt yuv420p -r 24`. Otherwise the unwanted frame stays.
- **Seedance appends source storyboard at end** (~13.5s on a 15s gen). Always trim before adding end card.
- Aggressive verbs (violently, detonates, rip, blast, glare, lock) trigger NSFW filter and fail the gen silently. Soften: lands hard, lift sharply, rushing, looks, lifts.

### Shot-by-Shot (use when precision per shot matters)

Each shot generated separately with locked start/end images. More control, more credits, more setup time. Use for hero pieces or brand campaigns where every cut must be exact. See client-specific CLAUDE.md files for shot-by-shot prompts.

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
| **Never freeze-extend a video to match a longer VO** | `tpad` freeze frames always look bad. Fix: lock VO duration FIRST, then set `--duration` on the Seedance gen to match. Regenerate the video — never pad it. |
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
├── system-prompts/            ← locked system prompts for the creative-pipeline skill
│   ├── storyboard-architect.md     ← Joey's free version, image gen prompt writer
│   └── video-prompt-architect.md   ← custom, Seedance video prompt writer (reads storyboard)
├── docs/superpowers/specs/    ← design docs for skills/tools built here
├── _skill-backups/            ← git-tracked copies of skills (since .claude/ is gitignored)
└── clients/
    └── [client-name]/
        ├── CLAUDE.md          ← locked formulas, NSFW words, prompt templates
        ├── brief.md           ← who they are, product, vibe, target audience
        ├── assets/            ← logos, product photos, brand colors
        └── outputs/           ← generated videos/images, ready to deliver
```

**Available skills:**
- `creative-pipeline` — full storyboard-first ad pipeline (brief → storyboard → approval → video → music + end card). Trigger: `/creative-pipeline` or "run the pipeline" or "let's make a video for [client]". Reads `system-prompts/` and auto-loads `clients/[name]/` if a client is named.
- `creative-discovery-client` — onboards a new client (6-question intake, scaffolds folder). Trigger: "new client" or "client discovery". Run this BEFORE `creative-pipeline` if the client doesn't have a folder yet.

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
