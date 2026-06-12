# Unik — Client Docs

## ⚠️ Need a past video recipe, the build code, or an asset path? Read `UNIK-PRODUCTION-REFERENCE.md`.
This file holds the brand truths, hard rules, locked formulas, and current next steps. The history of finished videos, the FFmpeg assembly code, the asset index, and the "what doesn't work" notes live in the reference file.

## ⚠️ STATS-FIRST RULE — LOCKED June 9, 2026

**Before building ANY UNIK post, pull the numbers from the last post first. HARD RULE.** Meta connection is live (permanent token in `.env`, never expires — scripts in this folder: `fb-stats.ps1`, `ig-deep2.ps1`, `ig-followers.ps1`). TikTok stats now available via Buffer MCP — run `tt-stats.ps1` for the last 10 TikTok posts (views, reach, reactions, shares, comments). Run the pull, state ONE lesson in one sentence, bake that lesson into the post being built. Reels are judged on reach (new people), carousels on saves (worth keeping). The roadmap decides WHAT we post; the numbers decide HOW we build it. Baselines: best-ever reach 172 (May 9 reel); durability reel did 107 in day one (June 8). The account has ZERO shares ever — the first share from a real mom is the breakthrough metric. Audience note: roughly half the followers are wholesale buyers (Pakistan/China), so low engagement % is expected — don't panic, and don't let Thuy panic. Best posting hour: 11am Pacific.

---

## ⚠️ COMEDY HYBRID STRATEGY — LOCKED June 10, 2026

**Comedy is the engine, value is the passenger.** Based on True Classic research (their comedy skit format took ROAS from 2:1 to 9:1 overnight, $3K → $150M in 3 years) plus UNIK's own data: the two best posts ever are both deadpan comedy (durability reel 109 reach, Egypt meme 107). The weekly 5:

1. **Comedy Reel** — deadpan skit, ONE problem (uniforms that don't survive the school year). The reach play.
2. **Comedy Reel #2** — same engine, different bit. **Escape valve: any week the second bit isn't strong, swap in a value post. Never force a weak joke — a bad comedy bit reads as cringe and is worse than a plain post.**
3. **Value post with a comedy wrapper** — the tip is the payoff, the delivery is funny (Stain WANTED energy). Judged on saves.
4. **Found message** — the share play, feelings not jokes. The only slot that doesn't need to be funny.
5. **Product ad** — short, factual, Thuy's caption rule. Try the True Classic static-with-proof play: plain product photo + "14,000+ reviews, 4.2★" overlay.

**The tie rule: every post entertains OR makes her feel seen FIRST. The value and the sell ride inside that, never lead.** (True Classic: entertain first, sell second — the product is woven INTO the joke as the natural answer, never pitched at the end.)

**⚠️ ROADMAP AUDIT LOCKS — June 10, 2026** (roadmap updated + pushed, commit 1e47bd0):
1. **Carousels: once a week MAX, and slide 1 must stop a scroll on its own** (bold claim, number, or question). Carousel data: 6 reach, 0 saves (Stain WANTED, June 9 stats pull) — the box is weak, so the hook has to carry it.
2. **Trust is DEAD as a standalone post.** The proof rides inside the product slot: most weeks a plain static with "14,000+ reviews. 4.2 stars." on the product photo (the True Classic static play — allowed to just convert, doesn't need to entertain). Big swings: a real review dramatized deadpan (mom reads the review flat while the kid stress tests the uniform behind her). We never write the funny part — the moms already did.
3. **Never schedule a repost of customer content that doesn't exist.** Nobody has ever tagged unik. Fallback for every repost slot: found message. Real beats made IF a real photo shows up (ask Thuy if any customer photos exist; Week 4 creator seeding is the long-term fix).
4. **Week 1 brand intro is replaced by the review proof static.** The 20-year story moved to Week 4, told mom-first through real review lines, never as a press release. Trust only lands AFTER she feels seen.

**Thuy note:** show her the comedy numbers (Egypt meme + durability reel vs everything else) before pitching weirder bits — she needs to see comedy IS the strategy, not goofing around.

**⚠️ MOM TARGETING RULES — LOCKED June 10, 2026** (Egypt meme reach skewed male; full research in `docs/production/mom-attention-playbook.md` — read it before any mom-targeted post):
1. **The mom is ALWAYS the character.** Her chaos, her morning, her win. The kid is background.
2. **Text hook on screen in the first second** — 5 to 7 words, top third of frame. Moms scroll muted.
3. **Deploy the 14,000+ reviews / 4.2★ proof** — other moms' words convert, not ours. Biggest unused weapon.
4. **July is the haul window** — "back to school haul" searches peak in July. Post hardest June 15 to August 15, including one realistic budget-honest haul post.

---

## ⚠️ THE CONTENT MAP — single source of truth (locked June 6, 2026)

**All content follows ONE plan: https://cal-zentara.github.io/unik-content-roadmap/**

This live link is the only roadmap. 50 posts, 5 a week, 10 weeks (June 8 to August 16), in 3 phases (Plant Seeds, Build Trust, Convert). Fetch it before writing any UNIK post. Every post's week, theme, hook, and format comes from there.

The old strategy + facts docs (masterclass, social strategy, product catalog, review-gold, helpful-content-bank, competitor swipe) were **archived June 6, 2026** to `docs/archive/strategy-facts-2026-06-06/`. They are NOT the plan anymore. If a post needs a price or a review quote, re-pull it live from unikusa.com / Amazon (always sourced).

## Doc Map — what's still live

| Doc | Folder | What it's for |
|---|---|---|
| (the live link above) | — | THE content map. Follow it for every post. |
| `VIDEO-CHEAT-SHEET.md` | production/ | Plain-English rules for making AI videos — read before any video |
| `seedance-girls-playground-WINNER.md` | production/ | The winning kid-video formula — read before any Seedance kid video |
| `wild-ugc-format.md` | production/ | Locked spec for the Wild UGC disaster format (or use the `wild-ugc` skill) |
| `found-message-format.md` | production/ | Unik's found message format — the weekly Community single image slot. Wells, surfaces, starter lines, prompt shape |
| `mom-attention-playbook.md` | production/ | How to reach moms — hooks, emotions, conversion, Latina mom culture, formats, July timing. Read before building any mom-targeted post |
| `seedance-hallway-formula.md` | **archive/** | OUTDATED. Do not follow its audio setting. |

Folder layout: `docs/` (production / archive), `assets/` (audio, logo, end-card), `build/` (raw gen intermediates), `outputs/` (finals / iterations / girls_scenes). Shareable finals are also copied to the desktop `UNIK Ads/` folder.

---

## Who They Are
UNIK Inc — Cal's cousins' family clothing brand. LA Fashion District, 20+ years in business. Products: kids apparel + school uniforms (polos, pants, dresses). Price point: $12–20. Target audience: Latina moms buying back-to-school in LA, especially LAUSD families (74% Latino). No competitor is targeting them directly. That's the gap.

**⚠️ HARD FACT — the family is VIETNAMESE, not Latino/Spanish.** Cal's cousins who own UNIK are a Vietnamese family. The TARGET audience is Latina moms (a strategic bet), but the OWNERS are Vietnamese. There is NO in-family Spanish speaker. Any Spanish content MUST be checked by an outside native Spanish speaker before going live — never assume the family can vet it. (Corrected June 4, 2026.)

**⚠️ HARD FACT — UNIK does NOT sell backpacks.** Never show a backpack in any ad, carousel, photo, or landing page copy. Product range is: polos, pants, dresses. (Corrected June 1, 2026.)

**⚠️ LOGO RULE — the UNIK wordmark is ALWAYS lowercase "unik" in brand blue (#29ABE2).** Never uppercase, never a different color, never restyled. Use this exact format on every end card, slide, carousel, footer, and graphic. Logo file: `assets/logo/unik_logo.png`. (Locked June 1, 2026.)

**Website:** not yet built. **Instagram:** not yet active for ads.

**Real edge (locked May 30, 2026 — QUALITY, not cheapness):** Competitors (French Toast, Amazon Essentials, The Children's Place) sit in the same $12–15 range, so "cheapest" is a fight UNIK can't win. The edge is **premium quality at that price** — their own Amazon listings read "Premium Quality Pique Polo." Theirs is white-label basic; UNIK's is premium-made for the same money. **Lead with QUALITY; the under-$15 price is the pleasant surprise that closes the sale.** Backed by trust: 20+ years family-owned, 14,000+ reviews / 4.2★, the only brand doing uniforms AND Mexican/cultural pieces. Message order: premium quality → surprising price → family trust. Never lead with "cheap."

---

## Ad Direction — Locked (May 2026)

- **Format:** 9:16 vertical Reels / TikTok
- **Duration target:** ~12–15 seconds
- **Audience:** Latina moms, budget-conscious back-to-school shoppers
- **Platform:** Meta paid (when budget is ready)

**⚠️ Old "$30 polo" price hook is RETIRED (May 30, 2026)** — price is parity, not an edge. It was used in the approved v7 video (kept for history) but DO NOT reuse it. New hooks lead with trust + community ("the LA family that's dressed your kids for 20 years" / "uniforms for school, dresses for everything else — from one LA family"), never price.

---

## Premium Photo Formula — LOCKED (May 30, 2026)

For UNIK lifestyle/hero stills (the "premium but real" look, Maisonette-inspired). The big lesson: **chasing polish made it look MORE like AI slop. Asking for LESS polish — documentary, raw, real film texture — is what made it look like a real photo.**

**Winning prompt (Nano Banana Pro, real-uniform reference image attached):**
```
Use the school uniforms from the reference image (white polo, khaki dress, burgundy polo with khaki pants, navy dress) on four kids ages 5 to 9, accurate outfits. A documentary-style real photograph, like a photojournalist captured a true moment at school. Available light only, bright sunny hallway, natural and a little uneven. Kids mid-moment, a natural range of happy expressions, slightly off-guard, not posed for the camera. Authentic skin texture and pores, freckles, messy hair, real grain. Candid, raw, real. Not AI, not retouched, not a glossy ad. No text anywhere.
```

**Levers that worked (reuse):** "documentary-style real photograph / photojournalist true moment" (kills staged catalog look); "available light only" + "natural and a little uneven" (no studio gloss); "authentic skin texture and pores, freckles, messy hair, real grain" (texture beats smoothness); "not AI, not retouched, not a glossy ad" (anti-slop); "a natural range of happy expressions, slightly off-guard" — KEEP smiling but VARIED, never the same synced grin; attach a real product photo so uniforms stay accurate.

**What made it WORSE (avoid):** "premium fashion lookbook / campaign / cinematic / 50mm shallow depth of field" → glossy plastic; all four kids doing the same big laugh → instant stock/AI read; no smiling at all → cold/wrong; stacking more "texture/grain" words once it's working → regressed. It came out warm/film-toned and that warmth is part of why it reads real — keep the warm tone.

**VO (approved):** "UNIQUE. Every color. Under fifteen dollars."

**Phonetic note (HARD RULE):** Always write "UNIQUE" (not "UNIK") in all VO lines so AI says "you-neek." The brand name is UNIK but AI models read it wrong every time.

**Visual direction:** School hallway. Real-feeling, not staged. Kids walking, lockers in background. "WELCOME BACK" diegetic poster in the frame (lives in the world, not a text overlay). High energy, bright, back-to-school feeling.

---

## Watermark Rule — LOCKED June 9, 2026

**Every UNIK video gets the unik logo watermark. HARD RULE.** Top right corner, 74px wide, 0.5 opacity, white background removed, kicks in at 1.2 seconds. Use this exact FFmpeg filter every time:
`[1:v]scale=74:-1:flags=lanczos,format=rgba,colorkey=0xFFFFFF:0.3:0.05,colorchannelmixer=aa=0.5[wm]; [0:v][wm]overlay=x=W-w-14:y=16:enable='gte(t,1.2)'[v]`
Logo file: `assets/logo/unik_logo.png`. Never skip this step.

---

## VO Personality Rule — LOCKED June 9, 2026

**VO must ALWAYS have personality. HARD RULE.** Monotone delivery kills the video. Every voiceover line must match the emotional direction of the content: deadpan and dry for the meme/UGC format, warm and real for trust content, punchy and confident for product ads. Write the personality INTO the prompt — describe the delivery, the tone, the energy, the pauses. Never just write what they say. Always write HOW they say it.

---

## Caption Rule — LOCKED BY THUY (owner), June 8, 2026

**UNIK captions are SHORT, PLAYFUL, and built on the factual product description. HARD RULE.** One or two lines max. No long story, no big claims, nothing that isn't literally true. Thuy rejected the first durability caption ("I spent a week trying to destroy these... 20 years... built to survive a kid") as "too long and not true" and said: "1 sentence and sticks to fact description of pants only." The story and the fun live in the VIDEO; the caption stays concise, playful, and factual. Pull the product facts straight from the live Amazon listing (e.g. "easy pull on, soft elastic waistband, durable, lasts through multiple washes"). Add a light playful spin only on a TRUE attribute (durability → "tough enough to survive the school year"), never a fabricated claim. Approved example: "Unik pull on pants. Comfy elastic waistband, tough enough to survive whatever the school year throws at them." A short CTA ("Shop on Amazon, link in bio") may follow if she approves.

## Locked Production Rules (the hard-won don'ts)

- **NEVER a husky/chubby kid in a PRODUCT video, and kids must ALWAYS look cute. HARD RULE.** Husky fits are a SEPARATE SKU (e.g. BU03H, H means Husky) — a husky kid in a BU03 product video is showing the wrong product. Exception: in fun CONTENT videos the chubby kid is allowed and even wanted (Thuy, June 12: "he looks the most interesting in the video"). And no creepy small kids EVER, in any video: faces too old for small bodies read as "creepy dwarfs" (Thuy) / "gremlin looking kid" (Ben). Fix: state the kid's AGE explicitly in every prompt and require body proportions that match the face. Thuy also OK'd using the flat product photos (pants laid flat) to generate new model pictures — we don't have to build every kid from scratch. (Locked by Cal, June 12 2026, after Thuy's BU03 band draft feedback.)
- **Hard cuts only.** Crossfades (xfade) look wrong for this content.
- **Never freeze-frame to hold a shot.** Looks fake — extend the actual clip or move the cut point.
- **Do NOT use Marketing Studio for UNIK.** It's built for one avatar + one product; it can't handle multi-shot school content.
- **Never composite the logo onto a colored scene** — the logo file has a white background, no transparency. Generate a full end card in GPT Image 2 instead.
- **GU07 two-girls locker VO script is LOCKED** — `build/GU07/two_girls_VO.txt`. Don't reword.
- (Full reasoning + every past build recipe is in `UNIK-PRODUCTION-REFERENCE.md`.)

---

## Music & End Card (locked)

- **Music:** `assets/audio/Hall Pass Bounce.mp3` — mix at **50% volume** under VO, runs full duration, continues over the end card.
- **End card:** `assets/end-card/unik_end_card.png` (752x1344). Blue bulletin-board PSA look, "unik" lowercase white, "Ready for the school year." 3 seconds static, hard cut, no animation. (Full spec in the reference file.)

---

## Next Steps

1. **Thursday Safari dress posted June 11** via Meta Business Suite (Facebook Reel). Caption: real product facts from live listing. ✓ Done.
2. **Squirrel comedy reel posted June 11** — "I swear kids are wild these days when they feel confident with our school uniforms." ✓ Done.
3. **Ben to update TikTok bio + website field** — send him the text: "Premium school uniforms for less. LA family owned. unikusa.com & Amazon" (80 chars, parent-first). He must log into @unik.inc directly to edit it.
2. **June 10 stats pulled** — Egypt meme: 104 reach (strong, matches durability reel). Bus stop found message: 0 still early — watch for account's FIRST EVER share. Lesson: reels consistently hitting triple digits now.
3. **Thursday post (June 11)** — Safari dress product ad. Caption ready in `caption-pack.md`: "Unik Safari uniform dress. Khaki and navy, dress code ready, comfortable enough to run the whole recess in. Shop at unikusa.com (also on Amazon), link in bio." Post via Buffer at 11am Pacific.
4. **Friday caption** — still needs trimming to Thuy's short/playful/factual rule before it posts.
5. **Brand trust review graphic** — Wednesday's slot was taken by the Egypt meme. Reschedule as next week's trust slot.
6. **BU03 pants video (Thuy's request) — DRAFT DONE June 11.** Kid rock band concept, 27s wide for Amazon, music only, no VO. Draft on Desktop (`8 - FINAL with endcard.mp4`) + `build/BU03_FINAL_with_endcard.mp4`. NEXT: send to Thuy for approval BEFORE any 720p final gens (~87.5cr). Winning recipe + word-trap lessons (husky→dog, denim→jeans, air guitar→real guitar, @Audio1 rule) in STATUS.md June 11 evening block.
7. No paid Meta engagement yet — hold until organic feedback comes in.
8. **Hi-res UNIK logo** — ask Ben for vector or hi-res PNG with transparent background. Current logo is only 190x91px.
9. **Found message — next three weeks** — use the remaining starter lines + surfaces from `docs/production/found-message-format.md`. Rotate the feeling every week (never the same well twice in a row). Judge on saves + shares, not reach.
10. **Static review-proof product ad** — plain product photo + "14,000+ reviews. 4.2 stars." overlay (True Classic static play). Cheapest post possible, proof converts moms. Use for a product ad slot.
11. **Realistic back-to-school haul post** — build for late June. Budget-honest, mom voice, mom perspective. Rides the July "back to school haul" search peak.
