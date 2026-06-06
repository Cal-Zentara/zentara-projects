# CreativeStudio — Project Docs

## ⚠️ Making a video? Read `VIDEO-PRODUCTION-REFERENCE.md` first.
That file holds the full craft principles, workflow steps, troubleshooting, FFmpeg snippets, and Higgsfield account info. This file holds only the always-on rules.

## Quick Nav — Read First

| I'm doing... | Read only... |
|---|---|
| Continuing work / resuming | `STATUS.md` |
| Working on a specific client | `clients/[client-name]/CLAUDE.md` |
| Making a video (principles, steps, gotchas) | `VIDEO-PRODUCTION-REFERENCE.md` |
| Adding a new client | `_templates/CLAUDE.md` + Structure section below |
| Joey's original Zephr example prompts (reference only) | `zephr-prompt-examples.md` |

**Do not explore.** If the answer isn't in the files above, ask before searching.

This file is universal — applies to every client. Each client has their own `clients/[name]/CLAUDE.md` with their locked formulas, NSFW words, and prompt templates.

---

## Role Split

**Cal:** Character design only — face description, vibe, outfit, anchor details, creative direction.
**Claude:** Everything else — runs all CLI commands, generates faces/outfits, fuses in Nano Banana Pro, builds the world, directs and generates every shot, logs to tracker.

---

## Models — What to Use

| Job | Model |
|---|---|
| Character faces + outfits | `soul_cinematic` (run base prompt a few times, pick best) |
| Fuse face + outfit into master ref / blend variations | `nano_banana_2` |
| All video (every shot) | `seedance_2_0` |
| General images (products, creatures, environments) | `nano_banana_2` |
| Anything needing readable text | `gpt_image_2` |
| World prompt expansion | Claude (this conversation) |
| Music | Suno — suno.com (custom mode, lyrics blank, "no vocals, pure instrumental") |

*(Full "why" for each model is in `VIDEO-PRODUCTION-REFERENCE.md`.)*

---

## Hard Rules — Always Apply (every client, every generation)

- **NEVER generate anything unless Cal explicitly says to. HARD RULE.** No image gen, no video gen, no firing any Higgsfield CLI command that spends credits — not until Cal says "run it", "fire it", "gen it", or equivalent. Writing and showing a prompt is NOT permission to run it. Cal asking for a scene or a prompt = write the prompt and stop. Wait for the explicit go. Credits are real money; never spend them on assumption.
- **NEVER drop, swap, or change anything Cal locked in without his explicit permission. HARD RULE.** If Cal said 4 reference photos, use 4 — never quietly drop to 2. If he locked a VO, a color, a detail, a setting, a line of copy — it stays exactly as he set it. Do NOT silently remove or alter a locked element to make something else work (e.g. to pass a filter, hit a char count, or fit a structure). If a locked element is causing a problem, STOP and tell Cal the conflict in plain English and let HIM decide what gives. Changing his choices without asking is the single most frustrating thing — never do it.
- **NEVER use the Higgsfield MCP.** CLI only (`higgsfield product-photoshoot create` / `higgsfield generate create`).
- **After EVERY generation, open the file immediately** — `start "" "C:\path\to\file.png"` so Cal can see it.
- **After EVERY generation, log to the Google Sheet immediately** — pipe `--json` output to `node tracker/log-from-json.js`. No manual logging, no batching, no exceptions.
- **Always pass `--json` flag** to Higgsfield CLI for clean output parsing.
- **Carousel format is ALWAYS 1:1 (square). HARD RULE.** Every carousel slide, every client, every time — never 4:5 or any other ratio. (Locked by Cal, June 3 2026.)
- **Always write carousels BACKWARDS. HARD RULE.** Lock the FINAL slide first (the payoff and CTA), then write the hook slide to set it up, then fill the middle to carry from hook to payoff. Every slide earns the next swipe. No dead slides. (Locked by Cal, June 3 2026.)
- **For carousel / social SLIDE images: ALWAYS bake the slide text INTO the image prompt. HARD RULE.** When writing prompts for carousel or social slides, write the exact on-slide line into the prompt (e.g. `in elegant serif text it reads "..."`). Do NOT leave text out to "add in post." This is the OPPOSITE of the video rule above (video burns no text, uses an end card). Slides = text in the prompt; video = no text, end card. (Locked by Cal, June 6 2026.)
- **Always poll with `until [ -s output.file ]`** — never sleep + cat.
- **Video tests: always use `seedance_2_0 --resolution 480p --aspect_ratio 1:1`** — cheapest option until Cal approves a direction.
- **Default audio off for product/test clips** — strip with `ffmpeg -i input.mp4 -an output.mp4`. For narrative pieces with music, plan music as part of the generation.
- **Start-image first, motion second.** Before any video clip, check if regenerating the start-image gives a better result. Wrong pose/angle/expression/scale on the start frame makes Seedance burn half the clip repositioning. Suggest an image retry to Cal before generating video when it would help. Cheap image retry now beats expensive video retry later.
- **No sidebars (blockquotes) in prompts or summaries.** Never wrap prompt text or summaries in `>` markdown. Reserve `>` only for genuine quoted speech.
- **NEVER let a smile hold. HARD RULE.** A frozen grin held the whole clip is the #1 AI tell. Smiling is fine but must come and go — "a smile flickers up then fades," never a fixed grin at the lens. Pair with eyes that wander. The held smile comes FROM the reference photos; the fix is to give characters a real task to concentrate on (full detail in `VIDEO-PRODUCTION-REFERENCE.md`).
- **Characters must ALWAYS be in motion. Never park them to pose. HARD RULE.** The instant a character "stands" or "holds" to show a product, they freeze into a dead catalog pose and grin. Show the product THROUGH motion (garment swinging as they walk). Open the clip already mid-action. A still product shot is a separate PRODUCT-ONLY clip with no person in it.
- **NEVER comment on what AI can or can't do with on-image text. HARD RULE.** When a prompt asks for text baked into an image, just write the prompt with the text in it. Do NOT add disclaimers like "AI sometimes misspells text" or "this may render imperfectly" or suggest adding it in post because of model limits. No hedging about the tool's capabilities, ever. Write the most ambitious prompt and let it run. (Locked by Cal, June 6 2026.)

### Kid safety — HARD SAFETY RULES (never break)
- **NEVER have a skirt, dress, or any garment pulled, lifted, or bent up.** Never write a prompt that asks to "reveal," "show," or "lift" what's underneath a garment (built-in shorts, lining). Underneath features are shown ONLY in a still product photo or named in the voiceover, NEVER revealed in motion. Keep hands away from the garment — movement comes only from natural body motion like walking.
- **NEVER a close-up or isolated shot of a kid's rear, backside, or the back of a skirt/pants.** No zooming, low angles, or camera lingering on the lower back/seat. The back of a garment is shown ONLY in a still product photo, or a wide, full-body, eye-level walk-away with the whole child and environment in frame, action natural (walking to class). Distance + full body = fine. Close + isolated = never.
- **NEVER make a kid in a skirt or dress crouch, squat, kneel, sit on the ground, or bend low.** Crouching rides the skirt up AND pulls the camera down — two violations at once. Keep kids in skirts STANDING and WALKING only. If a beat seems to need a low pose, rewrite it as a standing or walking beat. (Confirmed on the UNIK GU07 playground gen, June 2 2026.)

- **NEVER let the video model burn in on-screen text, captions, or brand words. HARD RULE.** We always use our own end card for branding. Add "no text, no captions, no words or letters anywhere on screen" to every video prompt. Keep the brand name OUT of any line the model might render — end card only.

---

## Craft Cheat-Sheet (the short version — full detail in `VIDEO-PRODUCTION-REFERENCE.md`)

- Generate face + outfit separately, fuse into one master reference, pass it to every clip.
- Anchor each character with 1-2 tiny weird details (band-aid, loose hair strand).
- Prompt what the CAMERA does, not just what's on screen.
- Write physics and consequences, not actions ("body folds backwards, dust kicks up").
- Write dialogue and personality words INSIDE the prompt.
- One emotion per clip. Dial it down — quiet beats loud.
- One specific detail beats five. Verbs over adjectives.
- Cut noise words ("cinematic," "epic"). Name the actual look.
- Music first, video second — always generate the track before any clip.

---

## Two Workflows (full steps in `VIDEO-PRODUCTION-REFERENCE.md`)

- **Storyboard-First** (default for short ads): one image → one Seedance gen → FFmpeg post. Cheaper, faster, cohesive.
- **Shot-by-Shot** (hero pieces): each shot generated separately with locked start/end images. More control, more credits.

---

## Tracker

Google Sheet: `https://docs.google.com/spreadsheets/d/1Z15ZahCI_woqABikf8unma054ayBfshDN70yqa3NB-0`
After every gen, auto-log: pipe Higgsfield `--json` output → `node tracker/log-from-json.js "<prompt>" "<model>" "<client>"`. (Columns + manual command in the reference file.)

---

## Structure

Zentara's internal creative studio for AI video ads and content. One folder per client. Universal rules live here — locked formulas live in each client's own CLAUDE.md.

```
CreativeStudio/
├── STATUS.md
├── CLAUDE.md                      ← universal rules (this file)
├── VIDEO-PRODUCTION-REFERENCE.md  ← full craft / workflow / troubleshooting detail
├── tracker/                       ← Google Sheets logging scripts
├── system-prompts/                ← locked prompts for the creative-pipeline skill
└── clients/[client-name]/
        ├── CLAUDE.md   ← locked formulas, NSFW words, prompt templates
        ├── brief.md    ← who they are, product, vibe, audience
        ├── assets/     ← logos, product photos, brand colors
        └── outputs/    ← generated videos/images, ready to deliver
```

**Adding a new client:** create folder under `clients/` → copy `_templates/CLAUDE.md` → add brief.md + assets → lock formulas in their CLAUDE.md as you find what works.

**Skills:** `creative-pipeline` (full storyboard→video pipeline), `creative-discovery-client` (onboard a new client — run first if no folder yet).
