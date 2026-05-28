# STATUS — Unik

*Last updated: 2026-05-27*

## What this is
Family-owned LA clothing brand (Cal's cousins) — children's apparel, school uniforms, and Mexican cultural clothing. 20+ years in business. Transitioning from downtown LA wholesale to online/direct sales. Cal is helping with marketing, AI tools, and sales strategy.

## Current phase
Discovery — initial meeting done 2026-05-25. Moving to plan phase. No paid engagement yet.

## What we learned from meeting (2026-05-25)
- **Priority product:** School uniforms — this is what they want to push first
- **Customer mix:** ~50% wholesale/retailers/Amazon/Shein resellers, ~50% direct parents
- **Open to:** Influencers and social media ads — both confirmed
- **Who runs it:** Cynthia + husband Ben together
- **Next step:** Come back with a concrete marketing plan scoped to back-to-school season

## What's live
- **unikusa.com** — Shopify retail site (live)
- **unikla.com** — Wholesale portal (live)
- **Amazon storefront** — FBA, 14,000+ reviews, 4.2 stars avg
- **Walmart seller** — active, good ratings on uniform products
- **Etsy shop** — unikusa (live, metrics unknown)
- **OrangeShine + FashionGo** — listed on both wholesale marketplaces
- **Instagram @unikusa** — 483 followers, 178 posts (very low engagement)
- **TikTok @unikclothing.us** — exists, minimal activity

## What's broken / blocked
- Social media dead — 483 IG followers after 20 years, no content strategy
- IG bio/content pitched at wholesale buyers, not parents/consumers
- Spending $6K/month on Amazon ads but losing to French Toast, Nautica, Lands' End on key uniform search terms
- No email automation (collect emails but no flows)
- No TikTok strategy despite already experimenting with AI cat videos
- Downtown LA wholesale foot traffic collapsing (ICE raids, boutique retail dying)
- No YouTube presence at all

## Key opportunities identified
1. **Latina mom market** — 40% of uniform-wearing students are Hispanic, nobody owns this lane, UNIK already has the cultural clothing
2. **Back to school window** — mid-June to mid-August, starts in ~6 weeks
3. **TikTok Shop + mom creator seeding** — list products, let creators earn commission, pay nothing upfront
4. **Google Shopping** — higher ROAS than Amazon ads for their own site, parents searching with high purchase intent
5. **Email automation (Klaviyo)** — proper abandoned cart sequence alone can 6x email revenue
6. **AI product photography (Photoroom)** — professional model shots without hiring models or a studio

## What we built (2026-05-27)
- `kids.html` — full kids landing page, back-to-school focused
- **Hero** — 3-column layout: left kid | centered text | right kid. Crossfading loop: Black+Royal → Burgundy+LightGrey, 10s cycle, Ken Burns zoom, true crossfade overlap (no white flash). Urgency countdown in announcement bar.
- **School Uniforms section** — boys gallery with model shots (Black, Royal, White, Burgundy, Light Grey polos + pants, jackets, shorts, sets). Model shots only — flat-lays removed for consistency.
- **More for Boys section** — 9 cards covering jackets, hoodies, fleece, tracksuits, puffer
- CSS hover swap on all gallery cards
- GSAP count-up animation on proof stats (14,000+ / 4.2★ / 20+) triggered on scroll
- GSAP ScrollTrigger: parallax on hero kids panels, scroll-fade-up on gallery
- Lenis 1.1.14 smooth scroll
- Hover bug fixed: Khaki + Hunter Green pants were showing size chart images — replaced with product flat-lays
- Photos: Desktop `C:\Users\Aesth\Desktop\Unik\` + Dropbox `AI Model Picture\AI Uniform Tops\`
- **Deployed to GitHub Pages:** https://cal-zentara.github.io/unik-kids/ (repo: `unik-kids`, images committed)

## Creative pipeline assets (2026-05-27)
All files at `CreativeStudio/clients/Unik/`
- `boy_face.png` — Latino boy face reference (soul_cinematic)
- `boy_uniform.png` — Boy fused with Royal polo + khaki (nano_banana_2)
- `mom_face.png` — Latina mom face reference (soul_cinematic)
- `mom_full.png` — Mom full body reference (nano_banana_2)
- `storyboard_kitchen.png` — Approved 8-panel storyboard (gpt_image_2)
- `unik_v1.mp4` — First Seedance attempt (failed — storyboard grid used as start image)
- Calendar image: `C:\Users\Aesth\Downloads\hf_20260527_041640_f1ec300d...png` — fridge calendar, August 2026, 17 circled

## Ad direction locked (2026-05-27) — UPDATED
- **Format:** Meta paid ads, 9:16 vertical, 30 seconds
- **Audience:** Latino parents, LA area, school-age kids
- **Style:** Fashion editorial — Ray-Ban Meta energy. Boy walking toward camera, confident, not smiling. No story, no dialogue, no mom. Uniform is the hero.
- **Visual:** Low angle (camera at knee height), early morning side light, Royal blue polo is the brightest thing in the frame
- **Music:** Suno — upbeat hip hop, clean funk, punchy beat drop, instrumental, no vocals, 30 seconds
- **Start image prompt (nano_banana_2):** "Latino boy, 7-8 years old. Royal blue polo shirt, khaki uniform pants. Shoulders back, chin level, weight forward — walking directly toward the camera. Low angle, camera at knee height looking up at him. Early morning side light. The polo is the brightest thing in the frame. Background soft, out of focus. He's not performing — he just knows he looks right."
- **Reference:** `boy_uniform.png`

### Dropped directions (explored and rejected 2026-05-27)
- UGC kitchen / mom + boy / "You're ready." — not entertaining enough
- Comedy flip (mom nervous, boy unbothered) — not strong enough hook
- Swagger / transformation beat drop — not strong enough
- Emotional mirror moment — not a scroll-stopper

## Marketing assets (2026-05-27)

### RSO Research — complete
Full market research run using Sandy's RSO system (Research → Strategy → Outreach).

Key findings:
- No competitor speaks to Latina/Hispanic moms for school uniforms — gap is wide open
- 40% of uniform-wearing students are Hispanic
- Parents are already shopping NOW — peak is mid-June through mid-August
- TikTok Shop nets ~16% profit vs Amazon's ~5% after fees
- Mexican cultural clothing niche: active demand, no dominant player on social

### Positioning statement
"LA's family-owned kids' brand — uniforms, cultural pieces, and everything in between."

Note: Cynthia is Vietnamese, not Latina. Positioning is "we serve this community" not "we are this community."

### Instagram bio (rewrite — not yet live)
"Family-owned kids' brand in LA. Uniforms, cultural pieces, and more. Retail + wholesale. unikusa.com"

Current bio targets wholesale buyers — needs to be swapped.

### Creator outreach DM
"Hey [name]! Love your page. We're a family-owned kids' brand out of LA — uniforms, cultural pieces, the works. We'd love to send you some free pieces for your kids. All we ask is an honest post or reel if you love them. Would you be down?"

### Creator shortlist (Instagram — elementary age kids, mom content)
| Handle | Followers | Notes |
|---|---|---|
| @jetplanemommy | 55K | Latina, LA, daughter in cheer (confirmed school-age) — top pick |
| @thelatinamom | 59K | Latina, San Fernando Valley, sports mom |
| @cassikidzcrew | 89K | LA, multiple kids, kids activities focus |
| @loveerickacastanos | 47K | Latina, LA, family content |
| @lilbitsofpau | 19K | Latina, SD, working mom |
| @ari_says | 36K | Latina, lifestyle + parenting |

Strategy: Gift 2–3 pieces per creator (~$15–25/piece). Budget $300–500 for 15–20 creators. Ask for honest post or reel if they love it. No upfront payment.

## What's next
1. Send Cynthia the link: https://cal-zentara.github.io/unik-kids/
2. Girls section — need girls product photos from Cynthia
3. Discuss paid engagement after Cynthia reviews the page
4. Cynthia to update Instagram bio
5. Cynthia to finish TikTok Shop setup
6. Verify creator profiles — confirm kids are elementary age before DMing
7. Send creator DMs — start with @jetplanemommy
8. Generate single UGC start image (NOT storyboard grid) — run Seedance Clip 1
9. If Clip 1 approved: Run Seedance Clip 2, stitch with FFmpeg

## Key contacts
- **Owner:** Cynthia (Cal's cousin) + husband Ben — run it together
- **Phone:** (213) 748-3929
- **WhatsApp:** (213) 793-8645
- **Email:** shop@unikusa.com
- **Address:** 501 E. Pico Blvd, Los Angeles, CA 90015

## Their strongest products (by Amazon data)
- Boys' elastic waist uniform pull-on pants — 1,210 reviews, 4.5★ (clear #1 SKU)
- Mexican/Cinco de Mayo fiesta dresses — solid niche, 4.5★
- Women's embroidered blouses — 4.1★, 61 reviews
- Boys' polo shirts — good Walmart ratings
- Girls' school uniform polos — present but not dominant vs. major brands

## Competitive landscape
Losing on Amazon to: French Toast, Nautica, Amazon Essentials, Lands' End, IZOD, The Children's Place
Winning niche: Mexican cultural clothing (fiesta dresses, embroidered pieces) — no dominant competitor here
