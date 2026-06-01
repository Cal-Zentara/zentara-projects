# Unik — Client Docs

## Folder Map (organized May 30, 2026 — keep it this way)

```
clients/Unik/
├── CLAUDE.md                  ← this file
├── docs/                      ← all guides & knowledge
│     seedance-girls-playground-WINNER.md   (the winning kid-video formula)
│     seedance-hallway-formula.md           (boys hallway recipe)
│     unik-content-masterclass.md           (brand brain: audience, voice)
├── assets/
│     audio/      ← Hall Pass Bounce.mp3, unik_audio_extract.mp3, music clips
│     logo/       ← unik_logo.png, UNIK-LOGO_190x.avif
│     end-card/   ← unik_end_card.png (the bulletin-board PSA poster)
├── build/                     ← raw intermediate gen stuff (faces, outfits, storyboards, raw jsons, source gens, old test renders)
└── outputs/
      finals/                  ← approved, shareable ads ONLY
      iterations/              ← drafts & version history
      girls_scenes/            ← girls playground start frames + v1–v6 gens + the winner
      _trash-review/           ← junk staged for deletion (safe to empty)
```
Shareable finals are ALSO copied to the desktop `UNIK Ads/` folder for easy sharing.

## Who They Are
UNIK Inc — Cal's cousins' family clothing brand. LA Fashion District, 20+ years in business. Products: kids apparel + school uniforms (polos, pants, backpacks). Price point: $12–20. Target audience: Latina moms buying back-to-school in LA, especially LAUSD families (74% Latino). No competitor is targeting them directly. That's the gap.

**Website:** not yet built
**Instagram:** not yet active for ads
**Real edge (locked May 30, 2026 — QUALITY, not cheapness):** Competitors (French Toast, Amazon Essentials, The Children's Place) sit in the same $12–15 range, so "cheapest" is a fight UNIK can't win. The edge is **premium quality at that price** — their own Amazon listings literally read "Premium Quality Pique Polo." Theirs is white-label basic; UNIK's is premium-made for the same money. **Lead with QUALITY; the under-$15 price is the pleasant surprise that closes the sale.** Backed by trust: 20+ years family-owned, 14,000+ reviews / 4.2★, and the only brand doing uniforms AND Mexican/cultural pieces. Message order: premium quality → surprising price → family trust. Never lead with "cheap."

---

## Ad Direction — Locked (May 2026)

**Format:** 9:16 vertical Reels / TikTok
**Duration target:** ~12–15 seconds
**Audience:** Latina moms, budget-conscious back-to-school shoppers
**Platform:** Meta paid (when budget is ready)

**Hook that works:**
Demographic call-out format — speak directly to the parent, not the kid.
> "Why are we still paying thirty dollars for a school polo?"

**⚠️ Hook retired May 30, 2026 — price is parity, not an edge.** The "$30 polo" hook above was used in the approved v7 video (kept as-is for history) but DO NOT reuse it going forward. New hooks lead with trust + community ("the LA family that's dressed your kids for 20 years" / "uniforms for school, dresses for everything else — from one LA family"), not price.

---

## Premium Photo Formula — LOCKED (May 30, 2026)

For UNIK lifestyle/hero stills (the "premium but real" look, Maisonette-inspired). Found after ~7 iterations. The big lesson: **chasing polish made it look MORE like AI slop. Asking for LESS polish — documentary, raw, real film texture — is what made it look like a real photo.**

**Winning prompt (Nano Banana Pro, reference image of real uniforms attached):**
```
Use the school uniforms from the reference image (white polo, khaki dress, burgundy polo with khaki pants, navy dress) on four kids ages 5 to 9, accurate outfits. A documentary-style real photograph, like a photojournalist captured a true moment at school. Available light only, bright sunny hallway, natural and a little uneven. Kids mid-moment, a natural range of happy expressions, slightly off-guard, not posed for the camera. Authentic skin texture and pores, freckles, messy hair, real grain. Candid, raw, real. Not AI, not retouched, not a glossy ad. No text anywhere.
```

**The levers that worked (reuse these):**
- "documentary-style real photograph, like a photojournalist captured a true moment" (kills the staged catalog look)
- "available light only" + "natural and a little uneven" (no plastic studio gloss)
- "authentic skin texture and pores, freckles, messy hair, real grain" (texture beats smoothness)
- "not AI, not retouched, not a glossy ad" (explicit anti-slop)
- "a natural range of happy expressions, slightly off-guard" — KEEP smiling, but VARIED, never all the same synced grin (that's the #1 stock-photo tell)
- Attach a real product photo as reference so uniforms stay accurate.

**What made it WORSE (avoid):**
- "premium fashion lookbook / campaign / cinematic / 50mm shallow depth of field" → glossy plastic AI look
- All four kids doing the same big laugh → instant "stock photo / AI" read
- No smiling at all → looked worse (cold/wrong)
- Stacking more "texture/grain" words once it was already working → regressed

Came out warm/film-toned (not the bright-white Maisonette) and that warmth is part of why it reads real. Keep the warm tone.

**VO (approved):**
> "UNIQUE. Every color. Under fifteen dollars."

**Phonetic note:** Always write "UNIQUE" (not "UNIK") in all VO lines so AI pronounces it correctly as "you-neek." The brand name is UNIK but AI models read it wrong every time.

**Visual direction — what works:**
School hallway setting. Real-feeling, not staged. Kids walking, lockers in background. "WELCOME BACK" diegetic poster visible in the frame (not a text overlay — lives in the world). High energy, bright, back-to-school feeling.

---

## Locked Videos

### `unik_v5.mp4` — hallway ad, no usable audio, first 10s are strong
- Location: `clients/Unik/build/unik_v5.mp4 (archived)`
- Total: 15.09s. Use only first 10 seconds of video.
- No audio. Don't use it for audio.

### `unik_v6.mp4` — hallway ad, good VO throughout
- Location: `clients/Unik/build/unik_v6.mp4`
- Total: 15.09s. Last 3 seconds is Seedance storyboard frame (junk). Don't use it.
- VO runs 0–12.16s. Good throughout.
- Use: video from 13.5–15s (last 1.5s visual) + full VO audio (0–12.16s).

### `unik_final_v7.mp4` — FINAL APPROVED (hallway ad)
- Location: `clients/Unik/outputs/finals/unik_final_v7.mp4`
- **14.5 seconds total:** v5 video (0–10s) + v6 video (13.5–15s = 1.5s) + 3s end card (hard cut)
- **Audio:** v6 VO (0–12.16s) + Hall Pass Bounce at 50% volume throughout (14.5s)
- **End card:** bulletin board PSA poster (`hf_20260528_201702_c550f439.png`) — 3 seconds static, hard cut, music holds over it
- Cal approved May 28, 2026.

### `unik_dress_safari.mp4` — FINAL APPROVED (Girl Safari dress, mom-presents)
- Location: `clients/Unik/outputs/finals/unik_dress_safari.mp4` (also desktop: `UNIK Ads/unik_dress.mp4`)
- **14.88s total:** Seedance gen of mom showing the Girl Safari Uniform Dress (khaki + navy), morph zone cut out, end card, extracted audio over the top.
- **Source gen had heavy hand/face morphing** — fingers melted on every shot where hands touched the dress, plus a face/mask artifact at the end. Salvaged by cutting the worst morph zone (5.5–6.8s) and landing on the clean "mom holding the dress up" shot.
- **Editing lesson:** to find AI morph fast, build a dense contact sheet (`ffmpeg -vf "fps=10,scale=200:-1,tile=5x3"`) instead of sampling single frames — single-frame sampling kept missing it. Hands manipulating fabric = the #1 morph trigger; expect it on any "hands holding/tying the product" gen.
- **Audio:** Cal liked the generated audio, extracted it (`assets/audio/unik_audio_extract.mp3`) and laid it back over the cut — continuous audio masks the jump-cut.
- Cal approved May 30, 2026.

### `unik_girls_playground.mp4` — FINAL APPROVED (Seedance girls playground) ⭐ BEST YET
- Location: `clients/Unik/outputs/girls_scenes/girls_v6_endcard.mp4` (also desktop: `UNIK Ads/unik_girls_playground.mp4`)
- **15.09s total:** 14s playground film + 1s end card hard cut, v6 audio runs all the way through (trim video at 14.0s so it ends exactly when the 15s audio ends — no trailing silence, no black)
- **Model:** Seedance 2.0, 4 girl product photos as `--image` references (no start frame — drift was never a problem)
- **Concept:** One continuous camcorder take, 4 girls at golden-hour recess. Four clean beats: two girls laughing → green girl drawing chalk → two girls + a ladybug → red girl joins them. Energy from camera + light + beat, NOT from the kids' actions.
- **⭐ The full winning formula + every lesson is saved in `clients/Unik/docs/seedance-girls-playground-WINNER.md` — READ IT before any future Seedance kid video.**
- Cal approved May 30, 2026. His words: "that's our best one yet."

### `unik_vto_boy_v2.mp4` — FINAL APPROVED (Pro Virtual Try On)
- Location: `clients/Unik/outputs/finals/unik_vto_boy_v2.mp4`
- **10.1 seconds total:** Pro Virtual Try On boy avatar (9.1s) + end card hard cut (~1s)
- **Mode:** Higgsfield Marketing Studio — Pro Virtual Try On, 9:16, 480p
- **Audio:** original MS audio (kept) + v6 VO from 7s onward, mixed in at 3s mark
- **Prompt used:** "First day of school. Walking confidently down a hallway, lockers on both sides, fluorescent overhead light, backpack on, big smile. Bright, energetic, ready for the year."
- **Amazon URL used:** `https://www.amazon.com/dp/B085FYGGP6`
- Cal approved May 29, 2026.

---

## Music

**Track:** `Hall Pass Bounce.mp3`
- Location: `assets/audio/Hall Pass Bounce.mp3`
- Mix level: **50% volume** under VO
- Runs the full duration (14.5s), continues over end card

---

## End Card

**File:** `assets/end-card/unik_end_card.png`
**Dimensions:** 752x1344
**Style:** School bulletin board PSA aesthetic. Blue background, "unik" in white bold lowercase, "Ready for the school year." tagline. School doodle icons (rulers, pencils, etc.). Footer: "Stay organized. Stay confident. Stay unik."
**How it was made:** GPT Image 2, prompted by Cal directly. Realistic bulletin board look, not polished brand graphic.
**Duration in video:** 3 seconds static. Hard cut from last video shot. No zoom, no animation.

---

## FFmpeg Build — Final Assembly

```bash
cd C:\Users\Aesth\Desktop\Zentara\Projects\CreativeStudio\clients\Unik

# Segment 1: v5 video only (first 10s)
ffmpeg -i unik_v5.mp4 -t 10 -map 0:v:0 -an -c:v libx264 -pix_fmt yuv420p -r 24 seg1.mp4

# Segment 2: v6 video only (last 1.5s, from 13.5)
ffmpeg -ss 13.5 -i build/unik_v6.mp4 -t 1.5 -map 0:v:0 -an -c:v libx264 -pix_fmt yuv420p -r 24 seg2.mp4

# End card (3s static from poster image)
ffmpeg -loop 1 -i "assets/end-card/unik_end_card.png" \
  -t 3 -vf "scale=496:864" -c:v libx264 -pix_fmt yuv420p -r 24 outputs/end_card_3s.mp4 -y

# Concat video segments + end card
printf "file 'seg1.mp4'\nfile 'seg2.mp4'\nfile 'outputs/end_card_3s.mp4'" > concat.txt
ffmpeg -f concat -safe 0 -i concat.txt -c copy video_only.mp4

# Final: mix v6 VO + Hall Pass Bounce at 50%
ffmpeg -i video_only.mp4 -i build/unik_v6.mp4 -i "assets/audio/Hall Pass Bounce.mp3" \
  -filter_complex "[1:a]atrim=0:12.16[vo];[2:a]volume=0.50,atrim=0:14.5[music];[vo][music]amix=inputs=2:duration=longest[aout];[aout]atrim=0:14.5,asetpts=PTS-STARTPTS[afinal]" \
  -map 0:v -map "[afinal]" -c:v copy -c:a aac "outputs/unik_final_v7.mp4" -y

# Cleanup
powershell -Command "Remove-Item seg1.mp4, seg2.mp4, video_only.mp4, concat.txt -ErrorAction SilentlyContinue"
```

---

## What Doesn't Work

**Marketing Studio (CLI + browser):** Tested May 28. UGC mode and Hypermotion both came back generic/wrong. Marketing Studio is built for one avatar + one product in a simple format. It can't handle multi-shot school hallway content. Do not use for UNIK.

**Crossfade transitions (xfade):** Tried it. Looks wrong for this content. Hard cuts only.

**Freeze frame to hold last shot:** Looks fake. Just extend the actual clip or trim the concatenation point.

**Logo overlay on dark background:** UNIK logo (`UNIK-LOGO_190x.avif`) has white background, no transparency. Can't be cleanly composited onto a colored scene. Generate full end card in GPT Image 2 instead.

**Writing "UNIK" in VO lines:** AI reads it wrong. Always write "UNIQUE" phonetically.

---

## Assets

| File | What it is |
|---|---|
| `clients/Unik/build/unik_v5.mp4 (archived)` | Hallway ad, no audio, 15.09s — use first 10s of video only |
| `clients/Unik/build/unik_v6.mp4` | Hallway ad, VO throughout, 15.09s — last 3s junk |
| `clients/Unik/outputs/finals/unik_final_v7.mp4` | FINAL APPROVED — hallway ad, 14.5s |
| `clients/Unik/outputs/finals/unik_vto_boy_v2.mp4` | FINAL APPROVED — Pro Virtual Try On boy, 10.1s |
| `clients/Unik/outputs/finals/unik_dress_safari.mp4` | FINAL APPROVED — Girl Safari dress mom-presents, 14.88s |
| `clients/Unik/outputs/girls_scenes/girls_v6_endcard.mp4` | FINAL APPROVED ⭐ — girls playground, 15.09s (best yet) |
| `clients/Unik/outputs/iterations/` | All previous drafts and test versions |
| `clients/Unik/outputs/iterations/end_card_3s.mp4` | 3s end card clip (496x864) |
| `clients/Unik/docs/unik-content-masterclass.md` | Brand brain doc — audience, voice, content pillars, what's failed |
| `assets/end-card/unik_end_card.png` | End card poster image (752x1344) |
| `assets/audio/Hall Pass Bounce.mp3` | Music track — 50% mix under VO |
| `assets/logo/unik_logo.png` | UNIK logo PNG (white bg, 190x91) |

---

## Next Steps

**WAITING ON: UNIK (the cousins) to pick which of the 4 ads they like best.** Cal shared all four with them May 30. Hold next production until they respond.

1. Once UNIK picks favorites → post organically, watch saves/shares/comments before any paid spend
2. Build whatever the winner's direction is — if it's the playground, follow `docs/seedance-girls-playground-WINNER.md`
3. ElevenLabs ($6/mo Starter) decision — connect for clean human VO if we want to replace AI voices. Research saved in `research-to-connect/elevenlabs-api.md`. Needs paid plan for ad rights.
4. Gray background swap on product photos — prep for next Seedance workflow (deferred)
5. Deal Alert content format — deferred
6. No paid Meta engagement started yet — hold until organic feedback comes in

**Done this session (May 30):** girls playground ad (best yet) + dress ad finished, all 4 ads shared with UNIK, project folder fully reorganized.
