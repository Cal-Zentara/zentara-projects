# STATUS — UNIK (client)

*Last updated: 2026-06-08*

**June 8 — first day of content release. Two deliverables:**
- **Durability Lab Round 1 video BUILT + GENERATED (Week 1 Monday Reel).** The deadpan-scientist UGC bit: a guy in a lab coat stress-tests UNIK uniform pants on a yellow crash test dummy in his driveway. Three beats in ONE multi-shot Seedance gen: pressure washer (0-5s), knee slide (5-10s), bike drag (10-15s), ending on a flat "...huh." Cal generated it himself with 3 locked reference photos (scientist, yellow crash dummy, real UNIK pants). Cal: "definitely not boring, visual hook is working" and "everything is holding" (pants held their look across all three tests, deadpan voice came through). Final locked prompt (2,377 chars) saved in `docs/production/durability-lab-concept.md`. LEARNINGS locked: (1) the real pants are FLAT FRONT, NO crease — prompt must say "no crease" or Higgsfield adds one; (2) stand the dummy against boxes/wall with the pants filling the frame to force Higgsfield to copy the exact pants; (3) the YELLOW crash test dummy reads instantly and sells the lab gag (a plain mannequin loses the joke); (4) bike beat: scientist props the phone on a box and rides past a static wide shot — solves the "who's filming" hole AND keeps it one location; (5) end card REPLACED with thumbnail text ("I tried to destroy these uniform pants") — does more work for the tap; (6) trimmed the per-beat clipboard scribbles so each test breathes.
- **Fixed the Amazon store banner size.** The old wide banner (21:9, ~2.3:1) was REJECTED by Amazon — Amazon needs exactly 3:1 at 1920x640. Built a new `graphics/amazon-banner-1920x640.html` reusing the same generated image, cropped to 3:1 in code (object-position center 55% after Cal said lower the framing 15%). Exported to desktop as `UNIK-Amazon-Banner-1920x640.png` (1920x640, 1.72 MB, PNG — fits all four Amazon specs). The wide 21:9 banner still works for the Facebook page, left untouched.

**June 6:** Built the Stain WANTED carousel (W1P2 helpful slot) in `ZentaraHQ/clients/Unik/graphics/stain-rescue-carousel.html`. 6 slides: "Most Wanted List" cover, 4 stains as fugitives (each with a real Higgsfield mugshot photo, alias, rap sheet, funny reward, and the fix), "Case Closed" closer with spotlight + grain + ghost watermark. 4 real stained-uniform photos gen'd by Cal and wired in (`graphics/_candidates/stain-*.png`). Caption written. Logged to work-log. Cal: "keep it there for now" — solid 7, shippable, parked. Pending later (optional): shorter TikTok caption. NO Spanish hashtags — Cal killed that idea June 6, do not bring it back.

**OPERATING PRINCIPLE for UNIK content (Cal, June 6):** consistency over quality right now. A shippable 7 posted on cadence beats a 9 that stalls the schedule. Don't over-polish or push Cal toward 9s — get content out 5x/week, learn from what lands, raise the bar later. Matches the LIGHT TOUCH engagement call.

**June 5 reorg:** docs split into 4 folders (facts / strategy / production / archive). CLAUDE.md now has a Doc Map. Merged the old platform-strategy + hook-ideas into `docs/strategy/unik-social-strategy.md` (now covers TikTok too). Moved the outdated hallway formula to archive. Added FB page access + Insights (484 followers, 4s avg watch time, reaching 35-44 moms but not holding them).

**June 5 token cleanup:** slimmed both big rules files to cut what loads every session. Unik `CLAUDE.md` 23.5k → 9k chars and CreativeStudio `CLAUDE.md` 24.9k → 9.6k chars (~7,400 tokens saved per session). All hard rules, hard facts, the logo rule, and locked formulas stayed in the main files; history + build code + asset index moved word-for-word to `UNIK-PRODUCTION-REFERENCE.md` and `../../VIDEO-PRODUCTION-REFERENCE.md`, each pointed to by a signpost on line 1 of the main file. Also stashed 141 unused global skills and deleted 14 duplicate skills (both outside this repo).

## What this is
AI video ads + content strategy for UNIK Inc — Cal's cousins' kids-apparel/school-uniform brand. Target: LA moms (Latina core), back-to-school. 9:16 Reels/TikTok plus 16:9 wide for Amazon listings.

## What's live
- **6 finished ads** in the desktop `UNIK Ads/` folder. Newest:
  - `unik_girls_playground_skirt.mp4` — NEW (June 2): GU07 scooter skirt, two girls walking to the cafeteria on the first day, 16:9, playground setting. Baked female VO + Backpack Morning music + 3s end card. 16s.
  - `unik_two_girls_locker_music.mp4` — (June 1): GU07 skirt, two girls, first-day stuck-locker, 16:9 Amazon. AI voice.
- Prior 4 (shared with UNIK May 30): playground ⭐, dress, hallway (v7), boy try-on.

## What changed this session (June 2)
- **Made the playground skirt ad** (client Thuy asked for a non-locker setting — "those little girls look too young to have lockers"). Switched to playground/cafeteria. Crouching rode the skirt up on the first roll → added a HARD SAFETY RULE: never crouch/squat/kneel a kid in a skirt; standing + walking only. Held-smile showed again (reference photos) — accepted the roll.
- **Built the content strategy brain.** Turned the client's 10 marketing principles into a real UNIK playbook inside `docs/strategy/unik-content-masterclass.md` — added a "Start Here" roadmap covering all 10 in funnel order, sourced every claim.
- **Locked the real catalog + prices** (verified live from unikusa.com) into a NEW file `docs/facts/unik-product-catalog.md` (every item, price, AND colors). Masterclass points to it as single source of truth.
- **Key business facts captured (source: Cal):** Wholesale is their core/best (unikla.com); retail is the growth lane our content targets. Revenue today: Amazon (most) → Shein (some) → webpage (little). CTA goal = drive to the WEBPAGE (grow the owned channel). IG @unikusa (481 followers) currently speaks to resellers, not parents — flagged.
- **Brand promise locked:** "The LA family that's kept kids in uniforms that actually last — for 20 years." Identity → durability proof → price as kicker.
- **Skirt price corrected** $30 → **$16.99** (Cal's number was a mistake; site is ground truth).
- **New global rule added** (`~/.claude/CLAUDE.md`): source every stat/number/fact, every time. Flagged the doc's 86%/$38 audience stats as UNVERIFIED.
- **Walked all 10 marketing principles** with Cal one at a time, locking each in the masterclass roadmap (1–5 discussed live; 6–10 reviewed and confirmed on a second pass).
- **NEW doc `docs/facts/unik-helpful-content-bank.md`** — 5 researched + sourced topics for top-of-funnel "helpful" posts (how-many-uniforms, keep-whites-white, LA dress-code rules, budgeting, special-needs angles). Every fact has a source link; flagged to re-verify before public use.

## Account Access (June 5, 2026)
- **Facebook:** DONE. Cal manages the Unik Inc page through his personal FB profile (the "Cal La" profile, logged in under aestheticcal22@gmail.com). UNIK shows in his FB profile switcher. The page is NOT inside a Business Manager portfolio — it is a direct page role on his profile (new Pages experience).
- **Instagram:** DONE. @unikusa is linked to the Unik Inc Facebook page (confirmed in Page Settings > Linked accounts). Cal manages it through the page / Meta Business Suite — no separate IG password needed.
- **TikTok:** Cal ACCEPTED the Business Center invite (under his TikTok "Christopher Le970", Business Center "Unik Inc", ID 7382997150952800257). BUT the invite only shared 1 advertiser (ads) account and **0 TikTok accounts** — so Cal is in the Business Center but CANNOT post organic content yet. The actual UNIK TikTok account (the posting handle) must be added by Ben/Thuy. Cal messaged Ben to add the TikTok account, not just the ad account. This is the one remaining access blocker.
- **Two-email gotcha:** Ben sent all access to cal.zentara@gmail.com, but Cal's working Meta account is under aestheticcal22@gmail.com. FB + IG resolved because Thuy invited his actual profile + IG is page-linked. Only TikTok still needs re-pointing.
- **Cal's personal "Cal's Business Manager" is RESTRICTED from ads** — does NOT affect UNIK. The summer scope is organic only (no paid ads). If UNIK ever runs paid ads, use UNIK's own ad account, never Cal's restricted one.

## Client asks captured (June 5, 2026)
- Ben/Thuy confirmed scope: Cal manages TT, IG, FB (organic). Tool question raised (Meta Business Suite direct vs a third-party like Buffer) — not yet decided.
- Next content ask from client: a **pants ad** + a **general UNIK brand video**. Thuy: "whenever you're ready, send the pants my way."

## Engagement level — LIGHT TOUCH (Cal's call, June 5, 2026)
Cal is intentionally keeping UNIK low-effort until there's a paid arrangement. Reasons: unpaid until ~mid-July, no agreed cut, the webpage (the channel a % would pay on) has near-zero traffic today, and Cal's real upside is the Zentara platform + paying clients. UNIK = warm case study, not a job.
**How "light" looks:** do the quick wins they directly ask for (e.g. the June 23–26 sale ad), reuse/repurpose the 4 existing ads instead of building new from scratch, batch + space out posting (not daily). Stay warm with the family; don't go cold. When the mid-July ad budget comes up, that's the natural opening for Cal to raise how he gets paid. **Do NOT propose big new content builds for UNIK unless Cal explicitly asks.**

## Thuy meeting (June 5, 2026) — direct from the call
**Money / ads:**
- Wants to **start paying for ads mid-July** (so organic until then, then paid).
- They already run **some ads on Faire** (the wholesale marketplace).

**Positioning (locked by Thuy):**
- "**Premium quality, budget price**" — confirms our quality-first angle.
- **Family stories = about REVIEWS only, nothing personal.** Do NOT make personal/family-life content. Lean on the 14,000+ reviews for the "family/trust" feeling, not the owners' personal lives.

**Wholesale facts:**
- Most wholesale buyers **come into the store to physically feel the products** (touch = their close).
- Wholesale pricing is **5 shirts in bulk**.
- New **Amazon storefront** ("Amazon front") in the works.

**Content direction:**
- She wants **fun videos + UGC videos**.
- **Traffic goes to Amazon**, but **mention the Unik webpage** in the content.

**URGENT — sale to promote:**
- **20% off EVERYTHING, June 23–26, 2026.**
- Thuy wants a **TikTok sale ad** for it.
- Featured blouse w/ lightning deal: `https://www.amazon.com/dp/B084S6YVY3`
- **CONFIRMED (Cal): the sale runs June 23–26** — NOT a make-it-now deadline. We have until ~June 22 to build + schedule the TikTok sale ad.
- ⚠️ TikTok posting still blocked — Ben must add the real TT account before this can go live.

## What's broken / blocked
- **Credits low** (~360 of 3000, renews May 7) — hold heavy gen.
- ~~Locker ad AI voice swap~~ — DROPPED (Cal, June 6 2026): the baked AI voice on the locker ad is fine; no recorded VO needed.
- Audience stats (86%, $38) unverified — confirm before any public use.
- IG positioning decision (reseller vs parent handle) — needs Cal/cousins.

## What's next
1. Finish walking the 10 principles into action (strategy doc done; now turn it into actual posts).
2. Decide the IG handle question (repurpose @unikusa for parents, or new handle).
3. Verify the audience stats (or replace with sourced ones).
4. UNIK picks favorites → post organically.

## Key files
- `CLAUDE.md` — full client doc + **Doc Map** (read first; it lists every doc, its job, and when to open it)
- `docs/strategy/unik-content-masterclass.md` — the content strategy brain (10-principle roadmap)
- `docs/strategy/unik-social-strategy.md` — IG + FB + TikTok playbook, hooks, account revival, metrics
- `docs/facts/unik-product-catalog.md` — real prices + colors, single source of truth
- `docs/facts/review-gold.md` — 10 real Amazon review quotes (trust content ammo)
- `docs/facts/unik-helpful-content-bank.md` — sourced facts for "helpful" posts
- `docs/facts/competitor-swipe-file.md` — competitor intel + locked message lines + carousel hooks
- `docs/production/seedance-girls-playground-WINNER.md` — the winning kid-video formula
- `docs/production/VIDEO-CHEAT-SHEET.md` — plain-English video rules (read before any video)
- `docs/production/wild-ugc-format.md` — locked Wild UGC disaster format spec
- `docs/archive/seedance-hallway-formula.md` — OUTDATED boys hallway recipe (reference only)
- `outputs/finals/` — approved ads · `assets/` — audio, logo, end-card
