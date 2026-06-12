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
| Making a found-message quote post (any client) | `found-message-format.md` |
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
- **HARD RULE — Minimax Hailuo 2.3 (Chrome web app only):** Always 6 seconds, 768p (lowest available), Unlimited mode ON. NEVER hit Generate without Cal explicitly saying "go", "run it", "fire it", or equivalent. Write the prompt and STOP. Wait for the go. No exceptions.
- **After EVERY generation, open the file immediately** — `start "" "C:\path\to\file.png"` so Cal can see it.
- **After EVERY generation, log to the Google Sheet immediately** — pipe `--json` output to `node tracker/log-from-json.js`. No manual logging, no batching, no exceptions.
- **Always pass `--json` flag** to Higgsfield CLI for clean output parsing.
- **Carousel format is ALWAYS 1:1 (square). HARD RULE.** Every carousel slide, every client, every time — never 4:5 or any other ratio. (Locked by Cal, June 3 2026.)
- **Single-image posts are ALWAYS 4:5 tall (magazine format). HARD RULE.** Any standalone single image (not a carousel) is built portrait 4:5 — 1080x1350, tall like a magazine spread, photo as the star with a slim text strip at the bottom. Carousels = 1:1 square. Single images = 4:5 tall. Never build a standalone single image as a square. (Locked by Cal, June 8 2026.)
- **Always write carousels BACKWARDS. HARD RULE.** Lock the FINAL slide first (the payoff and CTA), then write the hook slide to set it up, then fill the middle to carry from hook to payoff. Every slide earns the next swipe. No dead slides. (Locked by Cal, June 3 2026.)
- **For carousel / social SLIDE images: ALWAYS bake the slide text INTO the image prompt. HARD RULE.** When writing prompts for carousel or social slides, write the exact on-slide line into the prompt (e.g. `in elegant serif text it reads "..."`). Do NOT leave text out to "add in post." This is the OPPOSITE of the video rule above (video burns no text, uses an end card). Slides = text in the prompt; video = no text, end card. (Locked by Cal, June 6 2026.)
- **Always poll with `until [ -s output.file ]`** — never sleep + cat.
- **Every video prompt shown to Cal MUST come with its character count (and word count) stated right under it. HARD RULE.** And every video prompt must land at or near 2,500 characters minimum — pad with real craft detail (environment, light, micro-motion, audio layers), never filler words. (Locked by Cal, June 10 2026.)
- **Every long prompt shown to Cal MUST come with a self-rating scorecard. HARD RULE.** Rate out of 10: Emotion (does the feeling arc land), Hook (does the first 2 seconds stop a scroll), Overall, plus any factor Claude deems important for THAT prompt (e.g. AI-risk, brand-safety, pacing). One line each, honest grades — no inflated scores. Goes right under the char count. (Locked by Cal, June 10 2026.)
- **Video tests: always use `seedance_2_0 --resolution 480p` in the SAME aspect ratio as the final.** Resolution is what costs credits; aspect ratio is free (verified June 11 2026: 480p 1:1 and 480p 16:9 both 22.5 credits). Testing square for a wide final distorts the composition test — match the final's shape, keep 480p until Cal approves direction.
- **Default audio off for product/test clips** — strip with `ffmpeg -i input.mp4 -an output.mp4`. For narrative pieces with music, plan music as part of the generation.
- **Seedance audio input only works if the prompt NAMES it (`@Audio1`) — and even then it follows loosely. HARD LESSON.** Attaching `--audio` does nothing by itself: the file becomes `@Audio1` and the prompt must reference it ("match the pacing to @Audio1"), per Higgsfield/fal.ai Seedance 2.0 docs. Worse, any music DESCRIPTION in the prompt ("a stadium rock anthem plays") tells Seedance to compose its own track — which is exactly what happened on the BU03 band clips June 11 2026 (envelope correlation with the supplied Suno track: ~0). User reports say even correct @Audio1 use is treated as mood/tempo, not the exact song. Workflow: never describe music you don't want generated, reference @Audio1 if attempting sync, and ALWAYS verify by ear/correlation — the real track gets married in FFmpeg post regardless.
- **Start-image first, motion second.** Before any video clip, check if regenerating the start-image gives a better result. Wrong pose/angle/expression/scale on the start frame makes Seedance burn half the clip repositioning. Suggest an image retry to Cal before generating video when it would help. Cheap image retry now beats expensive video retry later.
- **No sidebars (blockquotes) in prompts or summaries.** Never wrap prompt text or summaries in `>` markdown. Reserve `>` only for genuine quoted speech.
- **NEVER let a smile hold. HARD RULE.** A frozen grin held the whole clip is the #1 AI tell. Smiling is fine but must come and go — "a smile flickers up then fades," never a fixed grin at the lens. Pair with eyes that wander. The held smile comes FROM the reference photos; the fix is to give characters a real task to concentrate on (full detail in `VIDEO-PRODUCTION-REFERENCE.md`).
- **Characters must ALWAYS be in motion. Never park them to pose. HARD RULE.** The instant a character "stands" or "holds" to show a product, they freeze into a dead catalog pose and grin. Show the product THROUGH motion (garment swinging as they walk). Open the clip already mid-action. A still product shot is a separate PRODUCT-ONLY clip with no person in it.
- **NEVER write two or more AI characters just walking together. HARD RULE.** A group strolling in step is the AI ensemble tell: synced gaits, dead formation, catalog energy. Cheesy as hell. Groups must be DOING something with stakes or chaos — racing, chasing, playing, piling through a door, reacting to each other. If a beat needs a group moving from A to B, give it friction (someone trailing, someone shoving past, different speeds) or rewrite it as a different action entirely. (Locked by Cal, June 11 2026, after the BU03 group-walk test read "so AI.")
- **NEVER comment on what AI can or can't do with on-image text. HARD RULE.** When a prompt asks for text baked into an image, just write the prompt with the text in it. Do NOT add disclaimers like "AI sometimes misspells text" or "this may render imperfectly" or suggest adding it in post because of model limits. No hedging about the tool's capabilities, ever. Write the most ambitious prompt and let it run. (Locked by Cal, June 6 2026.)

### Kid safety — HARD SAFETY RULES (never break)
- **NEVER have a skirt, dress, or any garment pulled, lifted, or bent up.** Never write a prompt that asks to "reveal," "show," or "lift" what's underneath a garment (built-in shorts, lining). Underneath features are shown ONLY in a still product photo or named in the voiceover, NEVER revealed in motion. Keep hands away from the garment — movement comes only from natural body motion like walking.
- **NEVER a close-up or isolated shot of a kid's rear, backside, or the back of a skirt/pants.** No zooming, low angles, or camera lingering on the lower back/seat. The back of a garment is shown ONLY in a still product photo, or a wide, full-body, eye-level walk-away with the whole child and environment in frame, action natural (walking to class). Distance + full body = fine. Close + isolated = never.
- **NEVER make a kid in a skirt or dress crouch, squat, kneel, sit on the ground, or bend low.** Crouching rides the skirt up AND pulls the camera down — two violations at once. Keep kids in skirts STANDING and WALKING only. If a beat seems to need a low pose, rewrite it as a standing or walking beat. (Confirmed on the UNIK GU07 playground gen, June 2 2026.)

- **VO must ALWAYS have personality. HARD RULE.** Monotone delivery kills the video. Every voiceover line must match the emotional direction of the content: deadpan and dry for meme/UGC formats, warm and real for trust content, punchy and confident for product ads. Write the personality INTO the prompt — describe the delivery, the tone, the energy, the pauses. Never just write what they say. Always write HOW they say it. (Locked by Cal, June 9 2026.)
- **NEVER let the video model burn in on-screen text, captions, or brand words. HARD RULE.** We always use our own end card for branding. Add "no text, no captions, no words or letters anywhere on screen" to every video prompt. Keep the brand name OUT of any line the model might render — end card only.
- **NO hashtags in any caption. Use brackets instead. HARD RULE.** Every social caption, every client. Tags go in one bracket set, comma separated, no `#` symbol — e.g. `[StantonNails, OrangeCountyNails, LittleSaigonNails, NailSalonOC, SummerNails]`. (Locked by Cal, June 11 2026.)

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
