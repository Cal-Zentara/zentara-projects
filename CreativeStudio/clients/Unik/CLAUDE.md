# Unik — Client Docs

## Doc Map — which doc, what job, when to open it (organized June 5, 2026)

Docs are grouped into three folders by job: **facts** (look something up), **strategy** (decide what to make), **production** (make the video). Plus **archive** for outdated docs you should not trust as current.

| Doc | Folder | What it's for | Open it when |
|---|---|---|---|
| `unik-product-catalog.md` | facts/ | Every product, price, color. Single source of truth. | You need a price, SKU, or color. Update prices HERE. |
| `review-gold.md` | facts/ | 10 real Amazon customer quotes | You need trust content or proof |
| `competitor-swipe-file.md` | facts/ | Competitor intel + locked message lines + carousel hooks | Writing carousels or positioning |
| `unik-helpful-content-bank.md` | facts/ | Researched, sourced tips (laundry, sizing, budgets) | Writing a "helpful" top-of-funnel post |
| `unik-content-masterclass.md` | strategy/ | The brand brain: audience, voice, content pillars, funnel | Any content work — read first |
| `unik-social-strategy.md` | strategy/ | IG + FB + TikTok playbook, hooks, account revival, metrics | Planning posts or reviving the accounts |
| `VIDEO-CHEAT-SHEET.md` | production/ | Current plain-English rules for making AI videos | Before making any video — read first |
| `seedance-girls-playground-WINNER.md` | production/ | The winning kid-video formula + every lesson | Before any Seedance kid video |
| `wild-ugc-format.md` | production/ | Locked spec for the Wild UGC disaster format | Building a Wild UGC ad (or use the `wild-ugc` skill) |
| `seedance-hallway-formula.md` | **archive/** | OUTDATED boys hallway recipe. Bakes audio in (wrong). | Reference only. Do not follow the audio setting. |

```
clients/Unik/
├── CLAUDE.md                  ← this file (ops bible + doc map)
├── docs/
│     facts/        ← prices, reviews, competitor intel, sourced tips
│     strategy/     ← content brain + social playbook (IG/FB/TT)
│     production/   ← video rules + winning formulas + wild-ugc spec
│     archive/      ← outdated docs, kept for history only
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
UNIK Inc — Cal's cousins' family clothing brand. LA Fashion District, 20+ years in business. Products: kids apparel + school uniforms (polos, pants, dresses). Price point: $12–20. Target audience: Latina moms buying back-to-school in LA, especially LAUSD families (74% Latino). No competitor is targeting them directly. That's the gap.

**⚠️ HARD FACT — the family is VIETNAMESE, not Latino/Spanish.** Cal's cousins who own UNIK are a Vietnamese family. The TARGET audience is Latina moms (a strategic bet, see above), but the OWNERS are Vietnamese. This means there is NO in-family Spanish speaker. Any Spanish content (captions, ads, the roadmap's weekly Spanish posts) MUST be checked by an outside native Spanish speaker before going live — never assume the family can vet it. (Corrected June 4, 2026.)

**⚠️ HARD FACT — UNIK does NOT sell backpacks.** Never show a backpack in any ad, carousel, photo, or landing page copy. Product range is: polos, pants, dresses. (Corrected June 1, 2026.)

**⚠️ LOGO RULE — the UNIK wordmark is ALWAYS lowercase "unik" in brand blue (#29ABE2).** Never uppercase, never a different color, never restyled. Use this exact format on every end card, slide, carousel, footer, and graphic where the logo appears. Logo file: `assets/logo/unik_logo.png`. (Locked June 1, 2026.)

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

---

## Next Steps

**WAITING ON: UNIK (the cousins) to pick which of the 4 ads they like best.** Cal shared all four with them May 30. Hold next production until they respond.

1. Once UNIK picks favorites → post organically, watch saves/shares/comments before any paid spend
2. Build whatever the winner's direction is — if it's the playground, follow `docs/production/seedance-girls-playground-WINNER.md`
3. **GU07 two-girls locker ad — swap the AI voice for a clean recorded VO (ElevenLabs).** The video + music are locked; only the voice is open. VO script in `build/GU07/two_girls_VO.txt`. This is the one unfinished step on the final final.
4. ElevenLabs ($6/mo Starter) decision — connect for clean human VO. Research saved in `research-to-connect/elevenlabs-api.md`. Needs paid plan for ad rights.
5. Gray background swap on product photos — prep for next Seedance workflow (deferred)
6. Deal Alert content format — deferred
7. No paid Meta engagement started yet — hold until organic feedback comes in

**⚠️ Credits low — ~360 of 3000 left this month (renews May 7). Burned a big chunk on GU07 iterations. Hold heavy gen work until renewal; if generating, keep one simple prompt, run a few times, keep the best roll.**

**Done this session (June 1):** GU07 skirt two-girls locker ad finished (final final, AI voice for now), cracked the held-smile problem (stuck-locker task-focus), built full GU07 reference set (khaki + hunter green, front + back), folder cleaned (drafts archived to iterations, junk to _trash-review).

**Done prior session (May 30):** girls playground ad (best yet) + dress ad finished, all 4 ads shared with UNIK, project folder fully reorganized.
