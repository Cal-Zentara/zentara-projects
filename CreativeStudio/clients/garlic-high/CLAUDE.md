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
Demo pitch content for Instagram (Reels).

**Visual style (locked):** 90s anime illustrated. Warm, nostalgic, late-night ramen shop energy.

---

## Hard Rules — Garlic High specific

- **Always use 90s anime illustrated style** — every prompt, every clip.
- **GHsuit girl is the main mascot** — she appears in every clip. Never cut her out.
- **One emotion across all clips: HUNGRY** — every prompt drives toward this.
- **Reel format:** 9:16, 480p for tests, 4s per clip.
- **Split-track music** — see Music section below.

---

## Approved Assets

| Asset | Location | Notes |
|---|---|---|
| Ramen shop base image | `C:\Users\Aesth\Downloads\hf_20260509_014727_b1c934de.png` | Yellow chef coat + hat. Base image. |
| Ramen shop with NPC | `C:\Users\Aesth\Desktop\RAMEN SHOP ASSET.png` | Older man on leftmost stool. ⚠️ All seats look full — needs regen with empty seat on right before Shot 2. |
| GHsuit girl (mascot) | `C:\Users\Aesth\Desktop\GHsuit.png` | Tired young woman, black blazer + pencil skirt, pink headband, brown hair. |
| Shot 3 reference | `C:\Users\Aesth\Downloads\hf_20260511_012705...` | Eyes wide, chopsticks raised, hungry anticipation. |
| Shot 4 reference | `C:\Users\Aesth\Downloads\hf_20260511_012759...` | First bite reaction, bowl in foreground. |

---

## Music

**Track:** Static Sunlight — generated on Suno (instrumental, no vocals).
**Source file:** `C:\Users\Aesth\Desktop\Static Sunlight (1).mp3`
**Method:** Split-track. Cut into 4 segments, one per clip. Upload each to its Seedance generation via @Audio1.

**Segments to create (FFmpeg):**
```bash
ffmpeg -i "C:\Users\Aesth\Desktop\Static Sunlight (1).mp3" -ss 0 -t 4 clients/garlic-high/music_seg1.mp3 -y
ffmpeg -i "C:\Users\Aesth\Desktop\Static Sunlight (1).mp3" -ss 4 -t 4 clients/garlic-high/music_seg2.mp3 -y
ffmpeg -i "C:\Users\Aesth\Desktop\Static Sunlight (1).mp3" -ss 8 -t 4 clients/garlic-high/music_seg3.mp3 -y
ffmpeg -i "C:\Users\Aesth\Desktop\Static Sunlight (1).mp3" -ss 12 -t 4 clients/garlic-high/music_seg4.mp3 -y
```

---

## Video Prompts (4 clips × 4s = 16s)

### Shot 1 — Street approach (corrected)
**Reference:** `GHsuit.png`
**Music:** `music_seg1.mp3` → upload → @Audio1

```
90s anime illustrated style. Same young woman from the reference image —
brown hair, pink headband, black blazer, pencil skirt — walking forward
through a busy neon-lit Tokyo street at night toward camera. Camera holds
low and fixed, facing her as she approaches. Yellow noren banner visible
behind her in background. Forward lean, bag swinging with her pace.
Each step lands with intention. Hungry. @Audio1 drives the pace.
```

> ⚠️ First gen had wrong direction (walked away from camera) + no @Audio1. Fixed above.

---

### Shot 2 — Enters shop, sits down
**Reference:** Ramen shop image (⚠️ needs regen with empty seat first — see Assets)
**Music:** `music_seg2.mp3` → upload → @Audio1

> Prompt to be written once shop image is fixed.

---

### Shot 3 — Food arrives
**Reference:** Shot 3 reference image (eyes wide, chopsticks raised)
**Music:** `music_seg3.mp3` → upload → @Audio1

> Prompt to be written next session.

---

### Shot 4 — First bite
**Reference:** Shot 4 reference image (first bite, bowl in foreground)
**Music:** `music_seg4.mp3` → upload → @Audio1

> Prompt to be written next session.

---

## Known Issues to Fix

| Issue | Fix |
|---|---|
| Shop image — all seats full | Regenerate with one clearly empty stool on the right end |
| Shot 1 — wrong direction | Use corrected prompt above |
| Chef hat — white in new shots 3 & 4, should be yellow | Future image regen pass |
| Pink headband — visible in shots 3 & 4 but not 1 & 2 | Acceptable — not visible at distance in shot 1, back view in shot 2 |

---

## Garlic High NSFW Traps

None confirmed yet. Update as discovered.

---

## Status

In progress — Shot 1 corrected, Shots 2-4 prompts pending. Shop image needs regen.
