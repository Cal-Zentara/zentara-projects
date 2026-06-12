# Nail'd It! Spa — CreativeStudio Client Docs

## ⭐ Summer Content Roadmap (built June 7, 2026 — LIVE)

**Live link:** https://cal-zentara.github.io/nailditspa-content-roadmap/
**Source:** `C:\Users\Aesth\Desktop\Zentara\Projects\SmallProjects\nailditspa-content-roadmap\index.html` (GitHub: Cal-Zentara/nailditspa-content-roadmap, branch `master`)
**Format:** UNIK-style deployed HTML strategy + 10-week calendar. June to August, 5 posts/week, 3 phases (Get Discovered / Build Trust / Book the Summer).
**Content idea bank:** `content-playbook.md` — THE HOOK RULE (every post names its callout + emotion before it's built — locked June 10), 5-agent research findings (algorithm signals, hook formulas, trend calendar incl. Tết Feb 6 2027, competitor gap), comment-mined content bank from her old IG comments, Week 2+3 plan, plus the original no-film formats/meme angles (Meta AI, June 7 2026). Pull from this for Weeks 2-10.
**Found message format:** `found-message-format.md` — the recurring weekly Community slot post (feel seen, share bait, builds the page, does not sell). Wells, surfaces, voice rules, starter lines, gpt_image_2 prompt shape. Adapted June 10 2026 from `CreativeStudio/found-message-format.md`.
**Photo usage log:** `photo-usage-log.md` — which of Dalena's real nail photos are already used. ONE photo, ONE post — never reuse a photo across posts. Check it before picking a photo, update it after.

### Locked decisions (do NOT undo without Cal's say-so)
- **This roadmap is CAL's posting playbook** — Cal posts FOR Dalena. It is not her homework. 4 of 5 weekly posts Cal makes solo (memes, graphics, review posts, reposts, her photo library); only the Reveal needs salon footage, with a photo backup so it never stalls.
- **REELS = nail reveal, process, or product ONLY.** No people talking, no reaction reels, no question reels. Engagement hooks live in the caption/Community slot. Reel rotation: Before/After Reveal, Satisfying Process, Full Set Timelapse, Product Shot, Detail Macro.
- **NO team content.** No team spotlights, no "meet the team," no Twee/Nancy/Mindy as content. Team may exist as a brand fact only.
- **NO personal family/mother/kitchen-table story.** Cut everywhere.
- **Vietnamese-owned KEPT as the differentiator** — shown not said, 80/20 nails-to-culture (language as service, Tết designs, community/Little Saigon). Plus hyperlocal Stanton/North OC lane (big OC accounts are all coastal).
- **Comment-to-DM = CreatorFlow (keyword BOOK), NOT ManyChat.** ManyChat is cancelled/dead. CreatorFlow is live, watches all posts, auto-DMs the Fresha link.
- 5 weekly slots: Reveal, Helpful, Trust, Service, Community. Meme Lane section added for easy no-film Community posts.
- **The Community slot is owned by the FOUND MESSAGE format, once a week (recurring).** It is the feel seen, share bait post: one short line on a real surface, judged on saves and shares, never sells. Full spec: `found-message-format.md`. Memes/bingo rotate in only when a found message already ran that week or Cal calls it. (Locked by Cal, June 10 2026.)

### AI video / brand rule (council verdict, June 7 2026)
- **Do NOT post AI-generated nails as her work.** Her brand = "real nail photos only, no AI slop." AI photoreal nails also morph/warp (gold lines, tiny flowers smear in motion). For real reels use HER real photos (slow-pan photo reels) or real salon clips.
- A Seedance demo of a Pinterest floral-nail design was generated ONCE as an example to SHOW Dalena (not to post) so she can react. That's the only sanctioned AI-nail use.
- Trending sound: add in the Instagram app (Trending tab, rising/Approved-for-Business), never bake music into the gen. Keep gens silent.

### ⭐ THE DOODLE REEL FORMAT — LOCKED by Cal June 12 2026 (reuse for any reel, any client)

**What it is:** Real nail photos brought to life as a reel by hand drawn animated doodles AROUND the photo (arrows, sparkles, crowns, bows, hearts, handwritten labels). The photo is NEVER touched by AI, motion is pure code. Costs ZERO credits, re-renders in ~2 minutes. Cal: "looks really good, I love this idea."

**Master template:** `outputs/doodle-reel/index.html` (the whole animation) + `outputs/doodle-reel/render.cjs` (the renderer). Final: `outputs/doodle-reel/doodle-reel-v2.mp4`.

**How it works (don't relearn this):**
- One HTML page draws a 1080x1920 stage with scenes. `window.renderFrame(t)` positions every element for any time `t` — deterministic, no CSS animations.
- `render.cjs` (Playwright, required from the global fnm node_modules path) loads the page, calls `renderFrame(t)` frame by frame (30fps), screenshots each frame to `frames/`, then FFmpeg stitches: `ffmpeg -framerate 30 -i frames/f%04d.png -c:v libx264 -pix_fmt yuv420p -crf 18 -movflags +faststart out.mp4`.
- **The hand drawn feel = "boiling":** every doodle gets a tiny deterministic random nudge 8x per second (`boil()` fn) like it was redrawn marker by marker. This is THE magic, keep it.
- Doodles are inline SVG strokes (gold #E8C97A, terracotta #C4714F, white). Labels are Caveat font. Arrows/circles draw themselves in via stroke-dashoffset; labels/sparkles pop in with overshoot; photos slowly zoom 1.04→1.13 so nothing sits still. Hard cuts between scenes.
- `render.cjs test` renders 1 preview frame per scene — ALWAYS check those (and fix doodle placement) before the full render.

**Structure (16s):** 3 photo scenes ~4.5s each + 2.5s end card. Per scene: 1 big hook label (Caveat ~90px, slight rotate) + 1-2 small detail labels + arrow/circle pointing at a real detail + sparkles. Hook label pops in at ~0.3s.

**Locked gotchas:**
- Use naturally VERTICAL photos only. Rotating a landscape photo into 9:16 reads sideways and wrong (Cal caught this on v1).
- White labels with soft shadow on busy/dark areas; gold only on dark fabric; terracotta only on light floors. Check contrast per photo.
- Don't draw doodles that accidentally read as letters (the first glint marks looked like the letter N).
- Keep labels out of the bottom ~350px (IG caption zone) and top ~140px.
- Render is silent on purpose — trending sound gets added in the IG app (locked rule).

**⭐ THE END CARD — LOCKED, reuse exactly as is, never rebuild:** blush #F9EDE8 full bleed, real round logo (`logo.jpeg`) pops in top third with soft terracotta shadow, gold Playfair kicker `STANTON · OPEN 7 DAYS` (letter spaced), huge Playfair "Nail'd *It!* Spa" (It! in italic terracotta #C4714F, rest #A05038), Caveat "walk ins always welcome" with a gold squiggle underline drawing in, Playfair "nailditspa.com" in terracotta, 4 boiling gold/terracotta sparkles in the corners. It lives in `outputs/doodle-reel/index.html` as `#endcard` — copy that block for any future video end card.

**Per reel, only these change:** the 3 photos (check `photo-usage-log.md` first), the labels (hook = trend name or callout per THE HOOK RULE), and doodle positions (re-aim arrows/circles at each photo's real details via test frames). Engine, end card, render pipeline, boil — all stay.

### Build progress (as of June 7, 2026)
- **Week 1, Post 1 (Reveal):** ✅ BUILT + approved 9/10 (June 8 2026). Pivoted from reel to an **editorial single image** (her real photo, no AI, no video). Concept "Gold Floral Tulip Nails" — full-bleed nail photo (pic1, sheer gel tulip buds) on a blush mat inside a thin gold hairline frame (matted gallery-print look), slim blush strip at the bottom with editorial type: tiny gold salon kicker, big Playfair headline ("Gold Floral *Tulip* Nails"), a genuinely-useful playful pro tip ("Fresh set meets pool day? Give it a 24 hour head start. Chlorine and a brand new mani are not friends yet." — sourced Revel Nail/PureWow), an italic "Nails by Twee" artist credit + small round headshot of Twee, and the booking line. File: `outputs/week1-reveal/index.html` (live in-browser editor). Build script: `outputs/build-reveal.js`.
  - **⭐ THE NAILDITSPA REVEAL FORMAT — reuse for every reveal single image. LOCKED by Cal June 8 2026.** Specs: 4:5 tall (540×675 → 1080×1350). Real nail photo only. Gold hairline frame inset 12px (matted look), photo tucked inside on a blush (#FBE6E1) mat. Bottom blush strip with: gold uppercase kicker (salon · city) → big Playfair headline (one word in italic terracotta) → playful useful pro tip → italic "Nails by [tech]" credit + round headshot → booking line. Logo top-right.
  - **Two html2canvas gotchas baked into the build (do NOT undo):** (1) NEVER use CSS `object-fit` or `background-size:% auto` for the photos — html2canvas ignores them and leaks a gray bar / squeezes faces. Size + clip images BY HAND: photo in an `overflow:hidden` box with the `<img>` given explicit width/height matching the source aspect ratio and a negative top offset for the crop; small circle headshots sized the same way. (2) The download waits for all `<img>` to decode before firing (prevents a gray gap from a fast click).
  - **Verify-before-Cal workflow:** `node outputs/test-download.js` uses Playwright to render the REAL download PNG (same html2canvas the browser uses) so we check the export is right before Cal ever clicks. Use it on every reveal.
  - **Only 3 things change per reveal (everything else stays locked):** (1) the **product nails** — the photo + the design-name headline; (2) the **nail tech** — credit name + headshot, set to whoever actually did that set (this is what keeps it an artist credit, not team-spotlight content; resolves the no-team-content rule — Cal, June 8 2026); (3) the **pro tip** — a fresh helpful playful line each time (never reuse one already used in another post). Frame, blush mat, gold line, type, layout, logo, download fixes all stay.
- **Week 1, Post 2 (Helpful carousel):** ✅ BUILT + approved 10/10. Concept "Gel Survival Guide" (4 insider rules: hot water lifts gel, oil nightly, glove up to clean, never file your own edge). Built free in HTML at `clients/NaildItSpa/outputs/week1-carousel/index.html` — 6 slides, 1:1, brand colors, real logo, with per-slide + download-all PNG export buttons (logo inlined as base64). Caption written (Dalena voice, ends "Comment BOOK", local hashtags). NOTE: it's a mockup page; open it and use the Download buttons to get the 1080x1080 PNGs.
- **Week 1, Post 3 (Trust graphic):** ✅ BUILT + approved. Review-graphic idea was KILLED (Cal: no horn-tooting / can't verify a salon review). Replaced with a **myth-buster** ("Nail myth: gel ruins your nails → bad removal does, not the gel") — honest-expert angle, true fact, zero bragging, sourced from Meta AI's trending "myth busting" format. 1:1 single graphic, logo color-matched into the card (bg = logo bg #FBE6E1 so the mark blends). File: `outputs/week1-trust/index.html`. Now a live in-browser EDITOR (see editor rule in decisions.md).
- **Week 1, Post 4 (Service graphic) — ⭐ THE LOCKED MENU FORMAT.** ✅ BUILT + approved 8/10 ("fun, has contrast"). "Summer Menu" — editorial split: her real nail photo as a full-height LEFT photo column + menu on the right (Hands / Feet sections, gold dotted leaders) + a high-contrast terracotta VIP box. **LOCKED by Cal June 8 2026: reuse this exact layout for every menu graphic — ONLY the LEFT photo changes (swap it often). Layout, sections, type, VIP box, logo all stay.** Logo enlarged to **81px** (legibility fix — thin terracotta linework on blush was unreadable smaller). File: `outputs/week1-service/index.html`. Live in-browser editor.
  - **Current prices (Dalena's text, June 8 2026 — she raised them):** Gel-X Full Set $60 · Acrylic Full Set $55 · SNS Dip Powder $45 · Gel Manicure $35 · Classic Gel Pedicure $40 · Happy Pedicure $32 · Spa Pedicure $25 · VIP Mani-Pedi $90. NOTE: Dalena only confirmed 4 (Gel-X $60, acrylic $55, SNS $45, gel pedi $40); the other 4 are unconfirmed/possibly stale — re-confirm with her before reusing. **The website nailditspa.com lists NO prices (it routes to Fresha); Fresha is the real price source and Dalena updates it herself.**
- **Week 1, Post 5 (Community graphic):** ✅ BUILT (static). "Summer Nail Bingo" — 3x3 grid of this summer's hottest trends (sourced from Meta), glossy jelly tiles + hand-drawn SVG icons, fun rounded fonts (Fredoka headings + Poppins body), terracotta "FREE" center, "Comment your score." No photos. Static ~7.9. **Cal will animate the static PNG himself in Higgsfield** (do NOT add CSS animation — he doesn't want it; the earlier "This or That" two-photo version and a swatch-poll version were both rejected). File: `outputs/week1-bingo/index.html`. Live in-browser editor. NOTE: dead earlier attempts still on disk at `outputs/week1-community/` — bingo is the keeper.
- **Week 1 captions:** ✅ written for Trust, Service, Community (carousel caption noted) in `outputs/week1-captions.md`. Dalena voice, no hyphens/dashes, booking nudge each.
- **Design lesson (now in decisions.md):** text-on-a-colored-card tops out ~6.5–7 with Cal. To hit 8+, lead with a REAL nail photo (ideally a full-height photo column / editorial split) + ONE high-contrast focal element. Don't ship the flat all-one-tone version first.
- **NEXT:** Week 1 posting order CHANGED June 10: Trust myth-buster moved to Week 3 (its gel message overlapped the June 10 gel found message). Remaining: Summer Menu June 11 (confirm 4 unconfirmed prices first), Bingo June 12. Week 2+3 plan locked in `content-playbook.md` (47-screenshots found message, hygiene trust post, pedicure carousel, diabetic nails, cracked feet).
- **AI line (locked June 10, Cal + Dalena):** nails are NEVER AI, no exceptions — Dalena also rejected AI people ("too AI"). AI is for the world AROUND the work only: found messages, mood scenes, graphics. The "real nail photo in AI worlds" photoshoot idea was tested in prompts and KILLED. If nails + flowers are wanted: real flower in the real shot, or design composite where her untouched photo sits in a decorated frame (photo never regenerated).
- **Carousel/graphic build standard (now in decisions.md):** designed FUN object + insider (non-obvious) tips, no warranty/guarantee framing for a service business, real photo + one contrast element to feel inspired, always ships with download buttons, AND is a live in-browser editor (move/resize/edit/delete + Download PNG). See `Projects/decisions.md`.

---

## Client
**Owner:** Dalena Huynh
**Business:** Nail'd It! Spa — 7443 W Cerritos Ave, Stanton, CA 90680
**Phone:** (714) 947-0303
**Instagram:** @naildit.spa (ID: `17841416401888250` — Instagram Login ID. Never use `26782443341446748` — that's the Facebook Login ID, wrong flow)
**Booking:** http://fresha.com/b/Pgl0k
**Website:** https://nailditspa.com
**Yelp:** https://www.yelp.com/biz/naild-it-spa-stanton
**Google Review Link:** https://g.page/r/CbxE-B-vjlwBEBE/review
**Team:** Dalena (owner), Twee, Nancy, Mindy

---

## Brand

### Colors
| Variable | Hex | Used for |
|---|---|---|
| Blush | `#F9EDE8` | Backgrounds, soft sections |
| Terracotta | `#C4714F` | Primary CTA buttons, accents |
| Terracotta Dark | `#A05038` | Hover states |
| Gold | `#C9A24A` | Labels, stars, sparkles |
| Dark | `#1A0F0A` | Hero background |
| Text Mid | `#6B4A3A` | Body text |

**Fonts:** Playfair Display (headings) + Inter (body)

### Visual Direction
- Warm, premium, intimate — not flashy
- Real nail photos only — no stock imagery
- Vietnamese-owned family business is a real differentiator; weave in naturally, never as a tagline
- No AI slop. Candid, documentary-style final panels beat polished logo cards every time (see feedback in `CreativeStudio/CLAUDE.md`)

---

## Voice

Dalena sounds like a trusted nail tech giving honest advice — not a brand manager.

- **Tone:** Warm but not soft. Confident, never salesy. Practical.
- **"We"** for the salon. **"I"** only for Dalena's personal story.
- **Never:** "utilize," "ensure," "we strive," "we are passionate about"
- **Yes to:** "here's what we'd recommend," "most people ask us this," "the honest answer is"
- Mention Twee, Nancy, Mindy naturally when it fits — clients love them
- End every piece with booking CTA: "Book online at nailditspa.com or walk in — we're open 7 days."

**Her story:** Learned nails at a kitchen table from her mother. That's the standard she's kept.

**Differentiators:**
- Vietnamese-owned, family-taught
- Consistency — clients return for years
- Whole team cares, not just the owner
- Honest pricing, no surprises
- Walk-ins always welcome

---

## NSFW / Blocked Words

These have gotten flagged before — avoid in Seedance/Higgsfield prompts:

- `violently`, `detonates`, `rip`, `blast`, `glare`, `lock` (aggressive verbs — soften to: lands hard, rushing, looks, lifts)
- Any Halloween / horror references

---

## Video Prompt Notes

- **Aesthetic:** warm sodium light, intimate interior, hands in motion
- **Mood per clip:** one emotion only — calm, care, pride, or quiet confidence
- **Camera:** slow push-ins, close on hands, drift not snap
- **No "cinematic," "dramatic lighting," "epic"** — name the actual look instead
- For nail work: hands are the hero. Keep face as secondary unless it's a reaction shot.
- Music direction: soft piano slow build — `c:\Users\Aesth\Desktop\Audio\Cracked Teacup.mp3` is locked

---

## Ad Production — "Start With Your Nails" (PARKED May 16, 2026)

**Concept:** "Start with your nails." — Woman gets strawberry nail set (IMG_1921.jpeg) at Nail'd It, then her whole summer day unfolds to match. Iced latte, farmers market, strawberries. Nails set the tone for everything after.

**Why parked:** AI-generated scenes look fake. Real nail photos alone aren't polished enough. Real footage is what's needed — 6 shots, one afternoon at the salon. Dalena needs to shoot clips on her phone before this can move forward.

**What's ready when resuming:**
- Music locked: `c:\Users\Aesth\Desktop\Audio\Sunlit Picnic.mp3`
- Hero nail photo: `SpiritSisters/NaildItSpa/photos/IMG_1921.jpeg` (strawberry set)
- Storyboard draft: `outputs/storyboard_strawberry_v1.png` (direction reference only — nail art drifted)
- Shot list ready (6 clips, ~5 seconds each): salon door, brush on nail close-up, finished nail set, client reaction, nail detail in window light, end card

**Next steps when resuming:**
1. Get Dalena to shoot the 6 clips on her phone using the shot list
2. Color grade + cut to Sunlit Picnic in post
3. Add logo end card (nailditspa.com · Stanton CA · Walk-ins welcome)
4. Final 20–30 second commercial

**Tagline:** *"Start with your nails."*

---

## Next Ad Direction — Real Salon Photos Needed (May 21, 2026)

Tested Higgsfield Marketing Studio (TV Spot) and Supercomputer this session. Both produced AI slop for a service business — Marketing Studio is built for physical products, not salons. Supercomputer generated a free creative brief before we cancelled the expensive video gen.

**Decision:** Build ads ourselves using our own pipeline. Real salon photos first, then Seedance.

**Shot list for Dalena (shoot on phone, 1-2 minutes):**
1. Front door / entrance — outside, natural light
2. Reception desk — clean, wide shot
3. Nail station — close, tools laid out, warm light
4. Client in the chair — candid, not posed
5. Window light shot — any corner with good natural light

**Supercomputer creative brief (free — use this as direction):**
- Concept: "The Detail Focus" — snap-zoom onto hero's hand, slow-motion macro shots of nail art
- Dialogue: *"The smallest details say the most. Come see us — walk-ins always welcome."*
- Sign-off: *"Nail'd It Spa. Stanton's home for the perfectly polished. Walk-ins welcome."*

**Note:** Supercomputer uses Gemini and doesn't know Dalena's brand. Our pipeline (soul_cinematic → nano_banana_2 → seedance_2_0) is cheaper and produces better brand-aware output.

---

## Assets

Assets live in the SpiritSisters project (full web build):
`C:\Users\Aesth\Desktop\Zentara\Projects\SpiritSisters\NaildItSpa\`

- `logo/Logo.jpeg` — original logo (blush pink + terracotta + gold)
- `site/photos/` — 15 nail photos from Dalena. Usable ones listed below.
- `site/photos/DalenaNails.jpeg` — Dalena headshot
- `site/photos/TweeNails.jpeg` — Twee headshot
- `site/photos/NancyNails.jpeg` — Nancy headshot
- `site/photos/MindyNails.jpeg` — Mindy headshot

**Usable nail photos (exclude Halloween ones):**
- IMG_0144, IMG_0260, IMG_0931, IMG_0932, IMG_0947, IMG_1261, IMG_1921, IMG_5497, IMG_5835, IMG_9234, IMG_20260419 (floral stiletto), 8BA25184

**Do not use:** IMG_1898, IMG_1909 (Halloween/horror nail art)

Put any CreativeStudio-specific outputs in:
`clients/NaildItSpa/outputs/`

---

## Context

Cal's first paid/friend client build. Full website live at nailditspa.com. Local SEO live. Instagram automation live. Review automation live. This client is warm — Dalena trusts Cal. Don't overthink the creative, just make it feel real and human.

---

## Current Creative Direction: "Detail Focus" Origin Story Ad (Parked May 2026)

**Concept:** Vietnamese mother teaches daughter the craft at a kitchen table. No products. Just the story.

**Locked characters:**
- Mother: `outputs/mother_v3.png` (soul_cinematic)
- Young daughter: `outputs/young_daughter_v1.png` (soul_cinematic)
- Adult Dalena: `outputs/adult_dalena_v3.png` (soul_cinematic)

**Music locked:** `Cracked Teacup.mp3` — soft piano slow build

**Where we left off:**
- Part 1 storyboard: `outputs/storyboard_part1_v2.png` ✅ approved
- Part 2 storyboard: `outputs/storyboard_part2_v2.png` — needs regen with more premium modern salon + sharper professional Dalena look
- **Blocked:** Waiting on 5 real salon photos from Dalena before next gen
- After Part 2 approved: write Seedance prompts → generate both parts → stitch → 30–45s final film
