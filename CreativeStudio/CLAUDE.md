# CreativeStudio — Project Docs

## Quick Nav — Read First

| I'm doing... | Read only... |
|---|---|
| Continuing work / resuming | `STATUS.md` |
| Adding a new client | `STATUS.md` + Client Structure section below |
| Generating content for a client | `STATUS.md` + that client's folder |
| Understanding the whole project | This CLAUDE.md in full |

**Do not explore.** If the answer isn't in the files above, ask before searching.

---

## Dev Reference — Symbol Map / Schema / Gotchas

### Symbol Map

| Feature | File | Lines |
|---|---|---|
| Salvia Lion reference image | `clients/salvia-lion/EsponSalt.jpeg` | — |
| Salvia Lion brand positioning | `SpiritSisters/SpiritNancy/Marketing/salvialion-positioning.md` | — |
| Salvia Lion brand voice | `SpiritSisters/SpiritNancy/Marketing/salvialion-voice.md` | — |
| Advertising research | `advertising-masterclass.md` | — |
| Platform strategy (FB/IG/TT images + video) | `platform-content-strategy.md` | — |
| Google Sheets tracker script | `tracker/log.js` | — |
| Tracker setup script | `tracker/setup.js` | — |

### Data Schema

**Google Sheets Tracker:** `https://docs.google.com/spreadsheets/d/1Z15ZahCI_woqABikf8unma054ayBfshDN70yqa3NB-0`
Columns: Date | Client | Model | Prompt | Output URL | Rating | Notes
Log command: `cd tracker && node log.js "<prompt>" "<model>" "<url>" "<client>" "<rating>" "<notes>"`

### Hard Rules — Always Apply
- **NEVER use the Higgsfield MCP.** CLI only (`higgsfield product-photoshoot create`).
- **After EVERY generation, open the file immediately** — `start "" "C:\path\to\file.png"` so Cal can see it.
- **After EVERY generation, log to the Google Sheet immediately** — no exceptions, no batching.
- **Always pass `--json` flag** to Higgsfield CLI for clean output parsing.
- **Always poll with `until [ -s output.file ]`** — never sleep + cat.
- **Video: always pass `--generate_audio false`** — audio off on all video generations, no exceptions.
- **Video: always pass the scent's product photo as `--start-image`** — product must look exactly like the real photo. Non-negotiable for all Salvia Lion videos.
- **Video tests: always use `seedance_2_0 --resolution 480p --aspect_ratio 1:1`** — cheapest option until Cal approves a direction.

### Winning Formula — Hero Product Shot (locked 2026-05-05)

This is the visual direction Cal approved. Use this for all future Salvia Lion image generations.

```
higgsfield product-photoshoot create \
  --mode product_shot \
  --prompt "single kraft paper bath salts pouch labeled [SCENT] as hero product, dark charcoal velvet surface, single warm candle light from the left casting deep shadow, [CRYSTAL] crystal softly out of focus behind it, [PROPS] scattered in foreground, pinch of white bath salt crystals spilled near base, macro close-up, shallow depth of field, razor sharp label, creamy dark bokeh background" \
  --image "clients/salvia-lion/EsponSalt.jpeg" \
  --brand_context "Luxury artisan product photography. Dark velvet surface. Single dramatic side light at 2700K. Deep rich shadows. Minimal props — one crystal, three botanicals only. Macro detail — kraft paper texture and handwriting visible. Shallow depth of field. Quiet luxury feel. Think jewelry photography applied to bath salts." \
  --product_context "Handmade bath salts in kraft paper stand-up pouch with handwritten black label directly on kraft — NO black box, NO chalkboard label. One pouch only — [SCENT]. Artisan, Reiki-charged, handmade." \
  --aspect_ratio "2:3" \
  --count 1 \
  --json
```

**Crystal + prop mapping per scent:**
| Scent | Crystal | Props |
|---|---|---|
| Chamomile Lavender | amethyst | rose petals |
| Lavender Rose | amethyst | rose petals |
| Cherry Blossom Lavender | rose quartz | pink cherry blossom petals |
| Jasmine Euca | citrine | eucalyptus leaves |
| White Tea Lavender | clear quartz | dried lavender sprigs |

### Winning Formula — Video (locked 2026-05-05)

**Model:** `seedance_2_0` — 480p, 1:1 aspect ratio, 4-8s duration, drama genre
**Format:** Product sitting upright on edge of white ceramic bathtub, steam rising, candles, botanicals in water
**Structure:** 3 clips stitched with FFmpeg — one per product, ending with full collection wide shot
**Audio:** Always strip with `ffmpeg -i input.mp4 -an output.mp4`
**Reference image:** Pass as `--start-image` for product clips. Omit for lifestyle/bathtub atmosphere clips.

**Approved prompt template (product clip):**
```
higgsfield generate create seedance_2_0 \
  --prompt "the kraft paper bath salts pouch sitting upright on the edge of a white ceramic bathtub, steam rising from the hot water in the background, two warm candles glowing nearby, [BOTANICALS] floating in the bath water visible behind the product, warm golden candlelight, cozy spa atmosphere, shallow depth of field, slow gentle camera push toward the product label" \
  --start-image "clients/salvia-lion/[PRODUCT_PHOTO]" \
  --resolution 480p --aspect_ratio 1:1 --duration 4 --genre drama --json --wait
```

**Collection wide shot prompt (ending clip):**
```
higgsfield generate create seedance_2_0 \
  --prompt "wide shot: the full collection of kraft paper bath salts pouches arranged together on the edge of a white ceramic bathtub, all products visible in frame, steam rising from the warm water behind them, two warm candles glowing nearby, botanicals floating in the bath water, warm golden candlelight, cozy spa atmosphere, shallow depth of field, camera stays wide — no zoom in, full collection on display" \
  --start-image "clients/salvia-lion/EsponSalt.jpeg" \
  --resolution 480p --aspect_ratio 1:1 --duration 4 --genre drama --json --wait
```

**Stitch command:**
```bash
printf "file 'clip1.mp4'\nfile 'clip2.mp4'\nfile 'clip3.mp4'" > concat.txt
ffmpeg -f concat -safe 0 -i concat.txt -c copy output.mp4 -y && rm concat.txt
```

### Known Gotchas

| Situation | Fix |
|---|---|
| **CLI shows scary credit numbers (480, 3000, etc.)** | Divide by 100 — that's the real cost. CLI shows raw units, website shows display credits. 480 CLI = 4.8 real credits. Confirmed via transaction history. |
| **NSFW flag on "ritual" + "dark" + "hands"** | Remove "ritual" — use "wellness routine" or "evening routine" instead |
| **NSFW flag on "flat lay"** | Use "arranged on a surface" instead |
| **Black chalkboard label generated** | Add to brand_context: "NO black box, NO chalkboard label, handwritten text directly on kraft paper" |
| **Bags all different sizes** | `product_shot` mode is most consistent — lifestyle_scene invents proportions |
| **Higgsfield MCP image tools are text-to-image only** | No reference image input via MCP. Use CLI only. |
| **`restyle` mode gets NSFW flagged** | Avoid restyle mode entirely for this client |
| **Background generation (no product)** | Inconsistent — model keeps adding products anyway. Not reliable. |
| **Composite with rembg** | Tested — poor quality, rough cutout edges. Not worth using. |
| **Tracker log.js deprecation warning** | `[DEP0040] punycode` — harmless, logging still works |
| **CLI credits show raw units (100x)** | CLI cost numbers look huge — divide by 100 for the real website-equivalent cost. e.g. CLI shows 480 = 4.8 actual credits |
| **Higgsfield app vs Cloud are separate** | higgsfield.ai (app subscription) and cloud.higgsfield.ai (developer API) have separate credit pools. CLI and MCP both use app subscription credits. |
| **Seedance 2.0 minimum duration is 4 seconds** | `--duration 3` errors. Minimum is 4. |
| **`--generate_audio` not supported on Seedance 2.0** | No audio flag exists. Strip audio post-generation with FFmpeg: `ffmpeg -i input.mp4 -an output.mp4` |
| **`--start-image` always locks first frame** | No "reference only" mode. When passed, the video starts from that exact image frame. Use it when you want the product to appear at the start; omit it for lifestyle scenes. |
| **NSFW: "dark moody" + "bathtub"** | This combo can trigger NSFW. Use "cozy spa atmosphere" or "warm moody" instead. |
| **Video text/spelling is unreliable** | AI garbles label text on generated bags (e.g. "LAIIX ROSE"). Accept it for now — will be resolved when real sticker product photos are used as reference. |

---

## Project Overview

Zentara's internal creative studio for generating AI video ads and content using Higgsfield. First client is Salvia Lion — she sells handmade Reiki-charged bath salts and needs product content for Instagram and ads.

---

## Stack

| Layer | Tech |
|---|---|
| Video/Image generation | Higgsfield API (via CLI) |
| Client management | Folder-based (`clients/[client-name]/`) |
| Storage | Local + client delivery |
| Hosting | N/A — output delivery only |

---

## File Structure

```
CreativeStudio/
├── STATUS.md
├── CLAUDE.md              ← this file
└── clients/
    └── salvia-lion/       ← first client
        └── (brief, assets, outputs go here)
```

---

## Client Structure

Each client folder follows this pattern:
```
clients/[client-name]/
├── brief.md       — who they are, product, vibe, target audience
├── assets/        — logos, product photos, brand colors
└── outputs/       — generated videos/images, ready to deliver
```

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

### Generation Gotchas
| Situation | Fix |
|---|---|
| Sensitive content block + credit refund | Read the rejected prompt, remove flagged words, retry |
| Reference image ignored | Explicitly say "use this exact reference image, do not alter it" in every prompt |
| Wrong product appears (generic version) | Drag product photo into chat + tag it — never describe by text alone |
| Model choice matters | Hypermotion = fast-paced launch video. Marketing Studio = mixed model. Standard = slower, quieter |
| Skills not appearing | Close and reopen Claude Code after install |
| Interactive selector on skills install | Use `--yes` flag to skip it |

### Models Available
- **Hypermotion** — fast cuts, energetic, product launch style
- **Marketing Studio** — mixed model, handles UGC, unboxing, product shots
- **Standard video** — slower pace, quieter feel
- **Image generation** — product shots, ads, static creatives

### Skill Workflow
1. Generate 3–5 variations
2. Pick the best output
3. Copy its prompt
4. Ask Claude to reverse-engineer a skill from it → saves to `.claude/skills/`
5. Every future generation using that skill is consistent

---

## Key Decisions

| Decision | Why |
|---|---|
| Folder-per-client structure | Simple, no database needed at this scale |
| Higgsfield for generation | Cal's chosen tool — video-first, good for product ads |

---

## Current Version & Status

**Version:** 0.1 — setup
**Status:** active — Higgsfield install pending
