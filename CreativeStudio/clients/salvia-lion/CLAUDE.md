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
| "bathwater" / "bath salt" + "near darkness" / "dark" | "warm water" / "mineral salt" / "soft warm candlelight" — bath + dark reads as possible nudity even with NO person in frame. Flagged the energy-lion reel June 8 2026. |
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

**Content strategy locked + Post 6 live (2026-06-09):**
- LIVE: "The hidden cost of always putting others first" carousel (9 slides) on @salvialion. First post in the new high-contrast DARK premium-editorial style, glowing teal+purple lion acting out each line. Logged as Post 6 in `CONTENT-TRACKER.md` + `work-log.md`.
- New content rule locked: **follow the IDEA, not the format** — each carousel invents its own shape, never a reused template. Folded into `9-WEEK-ROADMAP.md` (learning #6) + `content-ideas-bank.md`.
- New freshness rules in `content-ideas-bank.md`: (1) **EMOTIONAL RANGE** — stop drawing from the "you absorb others' energy / drained" well every time; 7 other wells listed (rest, sensitivity-as-gift, solitude, gratitude, etc.); never two posts from the same well in a row. (2) **Found-message format freshness** — lock the frame (one clean line on a real humble surface, shot candid, no brand), keep it fresh by rotating the surface + one human touch each time; keep it REAL not pretty (don't force her pastel palette onto it, keep her in the voice + warm settings).
- Studied @mindset.therapy (11.4M) live for what works: their engine is "name the invisible feeling out loud," built to be SHARED not commented. Their found-message format (quote on a real surface) = her "found message" style.

**LIVE — first "energy lion" reel posted (2026-06-08):**
- Official MASCOT locked: `assets/mascot/SalviaLionMascot.png` — a glowing teal/purple felted lion. Use as reference for all lion content + future plush.
- Theme song locked: `assets/audio/Moon-Bowl-Rite.mp3` (ambient). 12s reel cut saved as `Moon-Bowl-Rite-reel-12s.mp3`.
- "Gratitude" reel LIVE on @salvialion: the energy lion forms out of the steam, breathes, dissolves as salt falls; her real gratitude story as VO (Anaya voice); Moon Bowl Rite under it; faceless, no on-screen text; pure connect caption (no product pitch). Final: `outputs/SalviaLion-gratitude-reel-FINAL.mp4`. Plan/prompts: `SpiritNancy/Marketing/content/salvialion/2026-06-08/gratitude-reel.md`.
- New NSFW trap logged (bath + dark). See NSFW Traps table above.

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
