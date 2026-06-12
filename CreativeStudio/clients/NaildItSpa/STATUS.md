# STATUS — Nail'd It Spa (CreativeStudio)

*Last updated: 2026-06-10*

## What this is
Social content production for Dalena Huynh's nail salon in Stanton, CA (Cal posts FOR her). Part of the CreativeStudio client pipeline. (Video ad work is parked — see bottom.)

## What's live
- Full website: nailditspa.com (note: lists NO prices, routes to Fresha for booking)
- Local SEO + Google review automation + Instagram comment-to-DM (CreatorFlow, keyword BOOK)
- Summer content roadmap: https://cal-zentara.github.io/nailditspa-content-roadmap/
- **Week 1 social content: all 5 posts BUILT + approved. Posted: Reveal (June 8), Helpful carousel (June 9), first Found Message (June 10), Summer Menu (June 11), DOODLE REEL (June 12 — her first ever reel, posted in place of Bingo; Bingo moved to a future Community slot, it does not expire).**

## Two LOCKED formats (June 8)
- **Reveal single image** — 4:5 tall, real nail photo in a gold hairline frame on a blush mat, Playfair headline, playful pro tip, "Nails by [tech]" credit + headshot. Only the photo, tech, and tip change. File: `outputs/week1-reveal/index.html` (build: `outputs/build-reveal.js`).
- **Summer Menu** — editorial split, photo column + menu + VIP box, 81px logo. Only the photo changes. File: `outputs/week1-service/index.html`.
- Both: build single images as 4:5 tall, carousels as 1:1 (now a hard rule in CreativeStudio/CLAUDE.md).

## What changed this session (June 8)
- Built + locked the Reveal editorial single-image format; Cal approved 9/10 and posted it
- Fixed the download for good: html2canvas ignores `object-fit`/`background-size:% auto` (gray bar + squeezed faces) — now images are hand-sized in clip boxes; download waits for images to load
- Added `outputs/test-download.js` (Playwright) to render the REAL download PNG and verify before Cal clicks
- Updated Summer Menu to Dalena's new prices (Gel-X $60, Acrylic $55, SNS $45, Gel Pedi $40) and enlarged the logo to 81px
- Confirmed the website has no prices to update (Fresha is the price source)
- Wrote the Reveal caption; all Week 1 captions now done

## What changed June 10
- **Found Message format adopted for the spa** — built `found-message-format.md` (6 wells, 10 surfaces, voice rules, starter lines, no-AI-nails hand rule). LOCKED as the recurring weekly Community slot in client CLAUDE.md.
- **First found message POSTED June 10**: "gel doesn't need a break" debunk (gpt_image_2, note on manicure table, sourced via 3-agent research + Meta AI reliability check). Two alternate takes banked (bathroom mirror "you're free", pedicure chair "you did") — same feeling, so they wait a few weeks per the rotation rule.
- **UGC reel experiment PARKED**: "do not go here" grievance bit with an AI girl (ref: `assets/ugc-girl-ref.png`). Two Seedance gens made (`outputs/ugc-grievance-v1.mp4`, `v2.mp4`, also on Desktop). Cal didn't like the bedroom setting; last agreed direction = she does the bit from inside the salon, whisper, 4 beats (script in transcript). Dalena confirmed weekends ARE booked (usable fact).
- **Salon photos saved**: `assets/salon-storefront.png`, `assets/salon-interior.png` (interior has real customers — consent/crop needed before any posting use).
- **Photo log fixed**: IMG_9234 is Halloween (mummy) — moved to do-not-use; Christmas set2.x also flagged.
- **New hard rules added to CreativeStudio CLAUDE.md**: video prompts ~2,500 chars + always show char/word count; every long prompt gets a self-rating scorecard (Emotion/Hook/Overall + situational).
- ~~Google Sheet tracker BROKEN~~ **FIXED June 12** (Cal re-authed). All unlogged gens backfilled: 2x June 10 grievance clips + June 12 paparazzi, nano frame, gpt storefront, AND an orphan June 12 paparazzi duplicate (the first piped attempt fired the gen before the logger crashed — double charge, lesson: if the logger pipe errors, CHECK `higgsfield generate list` before re-running the gen).

## What changed June 10 (evening session)
- **5-agent web research pull DONE** — algorithm signals (shares > saves > likes, one job per post), hooks, summer/fall/Tết trend calendar, competitor gap (lane is empty — coastal accounts + Yelp-only locals), comment-to-DM reality, Google-first booking path. All findings + sources saved in `content-playbook.md`.
- **THE HOOK RULE locked** (in playbook): every post must name its callout + emotion spike before it gets built.
- **Comment mining**: Cal pulled real client comments off her old IG posts — hygiene question, diabetic nails ("yes we do!", 4 likes), cracked feet (+confirmed add-on prices), repeat price asks, older/monthly clientele insight, unprompted Twee love. Full content bank table in `content-playbook.md`.
- **Posting order changed**: Trust myth-buster MOVED out of Week 1 (its message overlapped the June 10 gel found message) → now Week 3 Trust. New order: tomorrow June 11 = Summer Menu, Friday = Bingo.
- **Week 2 Community post ready**: "47 screenshots" found message — prompt written (nano_banana_2 + `assets/salon-interior.png` as ref, NO people in gen since source photo has real customers), waiting on Cal's go.
- **AI photoshoot idea KILLED**: 3 rounds of "real nail photo in AI worlds" prompts (Melt ice-cream style, florals). Cal + Dalena verdict: nails are never AI, period. Line locked: real photos show the work, AI builds the world (found messages, mood scenes, graphics — no nails, no painted-nail hands). Dalena also rejected the AI UGC reel as "too AI."

## What changed June 12
- **⭐ DOODLE REEL FORMAT BUILT + LOCKED** — first real reel for the page: 3 of her real photos (chrome pearl 3D flowers, milky bows, pearl chrome stilettos) brought alive by hand drawn animated doodles around the untouched photos + the locked blush end card. ZERO credits (HTML + Playwright frame-by-frame + FFmpeg). Cal: "looks really good, I love this idea." Full recipe + locked end card spec in client CLAUDE.md (THE DOODLE REEL FORMAT). Files: `outputs/doodle-reel/` (template + renderer + `doodle-reel-v2.mp4`, also on Desktop). Photos logged in photo-usage-log.md. POSTED June 12 with "Three sets, one question" pick-your-number caption + trending sound added in app. Also: doodle-reel turned into a reusable SKILL (`.claude/skills/doodle-reel/`) — works for any client, any product. Music research done (5 agents): confidence = quiet authority + deep bass + neo soul; findings + Suno prompts in content-playbook.md (Cal hasn't picked a sound yet, custom music parked for now since trending in-app sounds beat custom for reels).
- **Paparazzi parking lot UGC video PARKED** after 3 paid gens (overstuffed Seedance test, nano frame with mangled sign letters, gpt low-quality storefront) — details in Parked concepts. Lessons: start-image first, one magic element max, storefront signage is a letter trap.
- Summer Menu posted June 11 (bracket tags). **NO-HASHTAG / brackets rule locked into CreativeStudio CLAUDE.md** (every caption, every client).

## What's next
1. **Week 2:** 47-screenshots found message (gen on Cal's go) + hygiene trust post + pedicure carousel — full plan in `content-playbook.md`. Bingo is built and banked for a future Community slot.
2. **Watch the doodle reel's numbers vs the stills** — if it wins (it should), doodle reel becomes a weekly fixture; photo bank + template are ready.
3. Get real footage moving: send Dalena the 2-minute shot list (process reels are the #1 booking driver per research and can't be faked) + ask her for one vertical phone photo of every fresh set (photo bank is down to ~5 usable)
4. Optional: revive the UGC reel concept ONLY if Dalena changes her mind on AI people

## Parked concepts
- **"Start With Your Nails"** — Strawberry nail set, summer day unfolds to match. Parked: AI scenes look fake, real photos not polished enough. Needs real footage.
- **Paparazzi Parking Lot / shop reveal UGC video (June 12, 2026)** — AI girl walks out of the real salon, world treats it like a gala arrival. Concept approved, execution parked after 3 gens: (1) Seedance 12s test was overstuffed (mob + ropes + petals + sprinklers + window-wave button = everything rendered poorly) and used the girl portrait as start image, so half the clip was scene setup. (2) nano_banana_2 girl + storefront frame looked great but mangled the sign letters. (3) gpt_image_2 low-quality storefront got letters right but Cal rated the photo quality too poor. Lessons locked: start-image first, ONE magic element max, the real storefront signage is a letter-accuracy trap at low quality. Files: `outputs/paparazzi-parkinglot-prompt-v2.txt`, `outputs/girl-salon-startframe-v1.png`, `outputs/shop-front-profile-v1.png`, `outputs/paparazzi-parkinglot-v1.mp4`.

## Dropped concepts
- **"Started at a Kitchen Table"** — Permanently dropped May 21, 2026.

## Key files
- `outputs/storyboard_strawberry_v1.png` — direction reference for "Start With Your Nails" concept
- `SpiritSisters/NaildItSpa/photos/IMG_1921.jpeg` — hero nail photo (strawberry set)
- `c:\Users\Aesth\Desktop\Audio\Sunlit Picnic.mp3` — locked music for strawberry concept
- `c:\Users\Aesth\Desktop\Audio\Cracked Teacup.mp3` — locked music (soft piano, slow build)
- `SpiritSisters/NaildItSpa/logo/Logo.jpeg` — logo for end card
