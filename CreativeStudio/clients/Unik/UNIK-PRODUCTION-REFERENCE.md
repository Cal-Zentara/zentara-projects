# Unik — Production Reference (history + build detail)

Detail moved out of `CLAUDE.md` so the main file stays lean. **All hard rules, hard facts, the logo rule, and every locked formula still live in `CLAUDE.md`.** This file is the history of finished videos, the build/assembly code, the asset index, and the "what doesn't work" notes. Open it when you need a past recipe, the assembly command, or an asset path.

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
- **⭐ The full winning formula + every lesson is saved in `clients/Unik/docs/production/seedance-girls-playground-WINNER.md` — READ IT before any future Seedance kid video.**
- Cal approved May 30, 2026. His words: "that's our best one yet."

### `unik_vto_boy_v2.mp4` — FINAL APPROVED (Pro Virtual Try On)
- Location: `clients/Unik/outputs/finals/unik_vto_boy_v2.mp4`
- **10.1 seconds total:** Pro Virtual Try On boy avatar (9.1s) + end card hard cut (~1s)
- **Mode:** Higgsfield Marketing Studio — Pro Virtual Try On, 9:16, 480p
- **Audio:** original MS audio (kept) + v6 VO from 7s onward, mixed in at 3s mark
- **Prompt used:** "First day of school. Walking confidently down a hallway, lockers on both sides, fluorescent overhead light, backpack on, big smile. Bright, energetic, ready for the year."
- **Amazon URL used:** `https://www.amazon.com/dp/B085FYGGP6`
- Cal approved May 29, 2026.

### `unik_two_girls_locker_music.mp4` — FINAL FINAL (GU07 skirt, two girls)
- Location: `clients/Unik/outputs/finals/unik_two_girls_locker_music.mp4` (also desktop: `UNIK Ads/unik_two_girls_locker_music.mp4`)
- **15.6s total:** stuck-locker film (~13.6s) + 2s animated end card, music fades out over the card
- **Model:** Seedance 2.0, 16:9 (wide for Amazon listing), 480p, 4 GU07 reference photos (khaki front+back, hunter green front+back)
- **Concept:** Two best friends, first morning of school, both at one jammed top locker. The stuck locker is the whole trick — see lessons below.
- **Audio:** `Backpack Morning.mp3` (Suno) as the music bed + the upbeat skirt VO from the v2 gen, mixed. NOTE: the VO is still the baked AI voice (mixed with v2's own music, slight bleed). Clean swap to a real recorded voice (ElevenLabs) is the one open step.
- **VO script (locked):** in `build/GU07/two_girls_VO.txt` — "First day fits, and this pleated skirt is ready to go. / Built-in shorts underneath, comfy and ready for anything. / Four colors. Best friends, ready for the year."
- Cal approved June 1, 2026. "that's my final final."

**Lessons from the GU07 grind (all the hard-won stuff):**
- **The held smile comes from the reference photos.** Seedance copies the expression off the photo and text cannot override it. The fix that worked: give the kids a real task to concentrate on (a jammed locker) so their attention leaves the camera. Task-focus killed the grin. (Complete fix = neutral-face reference photos.)
- **Hands manipulating a small object (locker latch) warps.** Same trap as hands on fabric. Keep the action simple — a tug and a pull, not detailed gripping/jiggling of a latch — and keep the camera back off the hands.
- **Action words in the VO get acted out.** "so she can run, climb, and play" made the girls physically run/play (frolic) because the baked VO leaks into the visuals. Reworded to "comfy and ready for anything."
- **Baking VO into the gen burns the words on screen as captions** and gives a dead voice. Best practice: generate clean (no VO in prompt), add the voice in post. We baked it here only because Cal wanted to preview it together.
- **Too many asks per 15s clip = drift.** Keep one clear moment per clip; get the prompt close, run a few times, keep the best roll instead of re-prompting after every gen.
- These are now universal rules in `CreativeStudio/CLAUDE.md` (hard rules + writing discipline #9/#10).

### `unik_girls_playground_skirt.mp4` — FINAL (GU07 skirt, playground, June 2 2026)
- Location: `outputs/finals/unik_girls_playground_skirt.mp4` (also desktop `UNIK Ads/`)
- **16s total:** ~13s playground film + 3s end card. Baked female VO + Backpack Morning music, audio fades on the card.
- **Why this exists:** client Thuy asked for a non-locker setting ("those little girls look too young to have lockers"). Moved to a playground/cafeteria walk on the first morning.
- **Concept:** two best friends (khaki + hunter green GU07 skirts) walk one direction toward the cafeteria — arm-hook + shoulder bump, one walks backward facing her friend, arm around the shoulder, a wave at the doors. One continuous walk = natural; skirt detail shows through walking, never crouching.
- **VO (baked):** "First day of school, and these two are ready. / A pleated skirt with built-in shorts underneath, comfy for the whole day. / From Unique, dressing kids for school for over twenty years."
- **HARD LESSON (now a universal safety rule):** the first roll had a deep crouch that rode the skirt up and put the camera low on the lower body. NEVER crouch/squat/kneel a kid in a skirt — standing + walking only. Logged in `CreativeStudio/CLAUDE.md`.
- Held smile reappeared (reference photos) — Cal accepted the roll. Permanent fix = neutral-face reference photos.

### Content strategy docs (NEW, June 2 2026)
- `docs/strategy/unik-content-masterclass.md` — the content brain. Now opens with a "Start Here" roadmap mapping the client's 10 marketing principles onto UNIK in funnel order. Read this first for any content work.
- `docs/facts/unik-product-catalog.md` — **single source of truth** for products, prices, and colors (verified live from unikusa.com June 2). Update prices HERE, not in the masterclass.
- **Skirt price corrected:** GU07 scooter skirt is **$16.99** (not $30 — earlier note was a mistake).
- **Brand promise (locked):** "The LA family that's kept kids in uniforms that actually last — for 20 years."
- **CTA goal:** drive to the **webpage** (unikusa.com) — grow the channel they own. (Wholesale = their core via unikla.com; retail = the growth lane content targets. Revenue today: Amazon > Shein > webpage. Source: Cal.)

---

## End Card

**File:** `assets/end-card/unik_end_card.png`
**Dimensions:** 752x1344
**Style:** School bulletin board PSA aesthetic. Blue background, "unik" in white bold lowercase, "Ready for the school year." tagline. School doodle icons (rulers, pencils, etc.). Footer: "Stay organized. Stay confident. Stay unik."
**How it was made:** GPT Image 2, prompted by Cal directly. Realistic bulletin board look, not polished brand graphic.
**Duration in video:** 3 seconds static. Hard cut from last video shot. No zoom, no animation.

---

## FFmpeg Build — Final Assembly (v7 hallway ad)

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
| `clients/Unik/outputs/finals/unik_two_girls_locker_music.mp4` | FINAL FINAL — GU07 skirt, two girls stuck-locker, 15.6s (AI VO, clean voice still to add) |
| `clients/Unik/build/GU07/` | GU07 skirt: 4 reference photos (khaki + hunter green, front + back), all prompts, locked VO script |
| `assets/audio/Backpack Morning.mp3` | Suno music track used on the two-girls locker ad |
| `assets/end-card/unik_endcard_animated.mp4` | Animated end card (logo + "Built for the School Day / available at amazon"), 5.9s, clean text |
| `clients/Unik/outputs/iterations/` | All previous drafts and test versions |
| `clients/Unik/outputs/iterations/end_card_3s.mp4` | 3s end card clip (496x864) |
| `clients/Unik/docs/strategy/unik-content-masterclass.md` | Brand brain doc — audience, voice, content pillars, what's failed |
| `assets/end-card/unik_end_card.png` | End card poster image (752x1344) |
| `assets/audio/Hall Pass Bounce.mp3` | Music track — 50% mix under VO |
| `assets/logo/unik_logo.png` | UNIK logo PNG (white bg, 190x91) |
