# Salvia Lion — Client Playbook

## Quick Nav

| I'm doing... | Read... |
|---|---|
| Continuing work | `../../STATUS.md` first, then this file |
| Generating an image | "Winning Formula — Hero Product Shot" below |
| Generating a video | "Winning Formula — Video" below |
| Universal rules (every client) | `../../CLAUDE.md` (studio root) |

---

## Who They Are

Handmade Reiki-charged bath salts. Kraft paper stand-up pouches with handwritten black labels directly on the kraft (NO black box, NO chalkboard label). Luxury artisan vibe — quiet, dark velvet, candle-lit.

**Reference image:** `EsponSalt.jpeg` (in this folder)
**Brand positioning:** `../../../SpiritSisters/SpiritNancy/Marketing/salvialion-positioning.md`
**Brand voice:** `../../../SpiritSisters/SpiritNancy/Marketing/salvialion-voice.md`

---

## Hard Rules — Salvia Lion specific

- **Video: always pass the scent's product photo as `--start-image`** — product must look exactly like the real photo. Non-negotiable for all Salvia Lion videos.
- **Always handwritten label directly on kraft paper** — NO black box, NO chalkboard label. Add this to every `--product_context` flag.

---

## Winning Formula — Hero Product Shot (locked 2026-05-05)

```
higgsfield product-photoshoot create \
  --mode product_shot \
  --prompt "single kraft paper bath salts pouch labeled [SCENT] as hero product, dark charcoal velvet surface, single warm candle light from the left casting deep shadow, [CRYSTAL] crystal softly out of focus behind it, [PROPS] scattered in foreground, pinch of white bath salt crystals spilled near base, macro close-up, shallow depth of field, razor sharp label, creamy dark bokeh background" \
  --image "clients/salvia-lion/EsponSalt.jpeg" \
  --brand_context "Luxury artisan product photography. Dark velvet surface. Single dramatic side light at 2700K. Deep rich shadows. Minimal props — one crystal, three botanicals only. Macro detail — kraft paper texture and handwriting visible. Shallow depth of field. Quiet luxury feel. Think jewelry photography applied to bath salts." \
  --product_context "Handmade bath salts in kraft paper stand-up pouch with handwritten black label directly on kraft — NO black box, NO chalkboard label. One pouch only — [SCENT]. Artisan, Reiki-charged, handmade." \
  --aspect_ratio "2:3" \
  --count 1 \
  --json | node tracker/log-from-json.js "[SCENT] hero shot — dark velvet, candle light, [CRYSTAL], [PROPS]" "product_photoshoot" "salvia-lion"
```

**Crystal + prop mapping per scent:**
| Scent | Crystal | Props |
|---|---|---|
| Chamomile Lavender | amethyst | rose petals |
| Lavender Rose | amethyst | rose petals |
| Cherry Blossom Lavender | rose quartz | pink cherry blossom petals |
| Jasmine Euca | citrine | eucalyptus leaves |
| White Tea Lavender | clear quartz | dried lavender sprigs |

---

## Winning Formula — Video (locked 2026-05-05)

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
  --resolution 480p --aspect_ratio 1:1 --duration 4 --genre drama --json --wait | node tracker/log-from-json.js "[SCENT] bathtub product clip" "seedance_2_0" "salvia-lion"
```

**Collection wide shot prompt (ending clip):**
```
higgsfield generate create seedance_2_0 \
  --prompt "wide shot: the full collection of kraft paper bath salts pouches arranged together on the edge of a white ceramic bathtub, all products visible in frame, steam rising from the warm water behind them, two warm candles glowing nearby, botanicals floating in the bath water, warm golden candlelight, cozy spa atmosphere, shallow depth of field, camera stays wide — no zoom in, full collection on display" \
  --start-image "clients/salvia-lion/EsponSalt.jpeg" \
  --resolution 480p --aspect_ratio 1:1 --duration 4 --genre drama --json --wait | node tracker/log-from-json.js "collection wide shot — all scents on bathtub" "seedance_2_0" "salvia-lion"
```

**Stitch:**
```bash
printf "file 'clip1.mp4'\nfile 'clip2.mp4'\nfile 'clip3.mp4'" > concat.txt
ffmpeg -f concat -safe 0 -i concat.txt -c copy output.mp4 -y && rm concat.txt
```

---

## Salvia Lion NSFW Traps

These trigger Higgsfield NSFW filters specifically on Salvia Lion prompts.

| Flagged | Use instead |
|---|---|
| "ritual" + "dark" + "hands" | "wellness routine" or "evening routine" |
| "flat lay" | "arranged on a surface" |
| "dark moody" + "bathtub" | "cozy spa atmosphere" or "warm moody" |
| `restyle` mode | Avoid entirely — gets NSFW flagged for this client |

---

## Salvia-Specific Gotchas

| Situation | Fix |
|---|---|
| **Black chalkboard label generated** | Add to brand_context: "NO black box, NO chalkboard label, handwritten text directly on kraft paper" |
| **Bags all different sizes** | `product_shot` mode is most consistent — `lifestyle_scene` invents proportions |
| **Background generation (no product)** | Inconsistent — model keeps adding products anyway. Not reliable. |
| **Composite with rembg** | Tested — poor quality, rough cutout edges. Not worth using. |

---

## Status

Locked formulas validated 2026-05-05. Hero product shot + 3-clip video collection complete.

**Pre-launch content in progress (2026-05-25):**
- 3-post Reiki education series written. Post 1 approved and locked. Posts 2 + 3 drafted.
- Post 1 video plan: atmospheric b-roll (Seedance) + text on screen + Suno ambient music. Clip pending.
- Content saved: `../../../SpiritSisters/SpiritNancy/Marketing/content/salvialion/2026-05-25/posts-2026-05-25.md`

**Where we left off (parked May 2026):**
1. Generate Suno track: ambient, soft piano, reiki/meditation, no vocals
2. Generate Seedance atmospheric clip: candles, botanicals, steam, dark surface — no product
3. Assemble Post 1 video in CapCut: clip + music + text overlay
4. Posts 2 + 3 still need visuals and final approval
