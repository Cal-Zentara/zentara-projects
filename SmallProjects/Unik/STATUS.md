# STATUS — Unik

*Last updated: 2026-06-09*

## What this is
Family-owned LA clothing brand (Cal's cousins) — children's apparel, school uniforms, and Mexican cultural clothing. 20+ years in business. Transitioning from downtown LA wholesale to online/direct sales. Cal is helping with marketing, AI tools, and sales strategy.

## Current phase
**PARKED — site complete, content in progress.** Landing page fully built and live. Week 1 content assets delivered (Stain WANTED carousel, brand-trust graphic, review bank, caption pack). Site is parked until Cynthia gives feedback or Cal resumes. Content posting is the active work now.

## What happened 2026-06-04 — content research, the field is wide open
- Spent a session grilling Meta AI (the chatbot at meta.ai) for what content is actually working for kids' clothing on Instagram. Honest takeaway: Meta AI is an idea machine, not a data source. It can't see TikTok's data (rival company) or Instagram's trending audio. It invents stats unless you force it to cite sources.
- **Prompt trick that made it honest:** tell it to name a source for every claim and to say "I can't verify" instead of guessing. That one rule turned fluff into useful answers.
- **Biggest finding:** school uniform brands barely post on social. French Toast and Lands' End are basically invisible. Old Navy is the only one showing up, and even their best posts only get a few hundred to ~1,200 likes. The lane is wide open — UNIK just needs to show up consistently.
- **Old Navy's winning angle = a promise** (their top post explained a 1-year guarantee). That's already UNIK's durability story — "uniforms that actually last." Lead with it.
- **Saved a verified 4-step content funnel into `unik-growth-playbook.html` (section 08):** Stop the scroll (relatable kid-chaos hook) → Build trust (handheld durability proof) → Get shares (confident kid + known sound) → Get the click (price + guarantee in first 3s, link to UNIK webpage not Amazon).
- **Direction note:** drop the Spanglish in content Cal makes himself (he can't read it well). Cal makes the English brand content; real Latina mom creators make the Spanish content in their own voice (the UGC seeding play).
- Started designing a dedicated "content council" but paused it — the honest-prompt approach above is the real win; can still bake it into the council later.

## What happened 2026-06-03 — the money conversation opened
- Cal sent the 3-phase back-to-school content roadmap (cal-zentara.github.io/unik-content-roadmap/). Thuy loves it, wants to "revise a few things."
- Ben gave Cal **TikTok business access**; Facebook + Instagram coming.
- **Friday 12:30pm WhatsApp video lunch meeting** set with Thuy + Ben to go over the plan. (Note: Thuy = Cynthia, her Vietnamese name. Thuy Cuzzo La + Ben Yang are the owners.)
- **Thuy asked Cal how he wants to be compensated.** Cal froze — his first money talk ever.
- **Council decision (the plan for Friday):** do NOT blurt a number. Get scope first, then propose. Price it as ONE flat monthly retainer to "run and grow your social," not per post. **$600/month to start**, grows as volume grows. Do NOT charge for the free work already done (site, 6 videos, strategy) — that was the sample. Lock scope + price before posting anything.
- **Built two prep files (both in this Unik folder):**
  - `friday-meeting-cheatsheet.html` — what to expect + the money line word for word
  - `unik-growth-playbook.html` — how to actually build UNIK an audience (3 a week, video for reach, talk to people, real-mom UGC later)
- Growth playbook platform numbers (post length, cadence, etc.) NOT yet verified — Tavily was out of credits. Re-verify with Brave when picking it back up.

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

## What we added (2026-05-29)
- **Boys / Girls toggle** — sticky segmented pill, spring animation, accent shifts page-wide (blue → raspberry rose #E8568A).
- **Robustness fix** — panel swap runs on setTimeout, not GSAP rAF (which pauses in background tabs).

## What we built (2026-05-30)
- **Toggle redesign** — pill indicator is now the accent color (blue/rose) with white text. Bigger, bolder, more obvious.
- **Full girls panel** using real AI model photos from Dropbox. 3 sections, 12 products:
  - **School Polos & Blouses**: GSU01 Girls Polo (7 colors), GSU02 Collar Blouse (6 colors), GSU03 V-Neck Polo (6 colors), GSU06 Blue Top
  - **School Dresses & Bottoms**: GDU08 Navy Polo Dress, GUJ10 Jumper Dress, GU07 Scooter Skirt (Khaki·HGreen·Navy sold out), SGU01 Stretchy Shorts (Khaki·Navy), GU06 Stretch Pants (5 colors, $17.99), GU04 Uniform Pants (3 colors, $13.99)
  - **Tops, Jackets & Vests**: GDU1775 Safari Dress ($14.99), GB726 Ruffle Top, GVOX Fleece Vest, GJ17109 Girls Jacket
- **Swatch hover fix** — clicking a swatch now syncs the secondary (hover) image so it stays on the selected color.
- **Correct product labels** — fixed mislabeled items: SGU25 (shorts not skirt) removed, GUF21 (pants not skirt) removed, GU07 confirmed as real scooter skirt, GDU1775 confirmed as Safari Uniform Dress.
- **Real Shopify links** added for all confirmed products. Girls tops → `uniform/Girls-Uniform-Tops`, bottoms → `uniform/Girls-Uniform-Bottoms`.
- **Confirmed prices only** — guessed prices removed. Only show price when confirmed from Shopify page.

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

## What's next (when resuming)
1. Verify missing prices: GSU01, GSU02, GSU03, GSU06, GDU08, GUJ10, GB726, GVOX, GJ17109
2. Get real Shopify links for GB726 (Ruffle Top), GVOX (Fleece Vest), GJ17109 (Girls Jacket)
3. Move Safari Dress (GDU1775) from "Tops, Jackets & Vests" into "School Dresses" section
4. Cynthia to update Instagram bio
5. Cynthia to finish TikTok Shop setup
6. Creator DMs — verify kids are elementary age, then start with @jetplanemommy

## Theme editor fixes — done 2026-06-09
- ✅ Announcement bar — replaced wholesale phone/address ad with: "Proudly Dressing LA Kids Since 2002. Premium Uniforms. Unbeatable Prices. Wholesale: UNIKLA.com"
- ✅ Products section subtitle — "TOP VIEW IN THIS WEEK" → "Top Picks This Week"
- ✅ Footer year — confirmed 2026 (was already updated)

## Pinterest SEO — done 2026-06-09
- ✅ Converted personal account to Pinterest Business (free)
- ✅ Created board: Boys School Uniforms
- ✅ Created board: Girls School Uniforms
- ✅ Published 7 pins, all linking to unikusa.com:
  - Boys: Royal Blue Short Sleeve, Burgundy Short Sleeve, White Short Sleeve, White Long Sleeve
  - Girls: Navy Polo, Burgundy Polo, White Polo
- ✅ Fixed existing Shein pin — was linking to shein.com, updated to unikusa.com
- ✅ All pins: AI-Modified ON, AI-generated person checked, proper tags, correct URLs
- ⏳ Pinterest Shopify app — blocked, needs Ben (owner access)
- ⏳ Pinterest Save Button app — blocked, needs Ben
- Girls Uniform Tops URL confirmed: https://www.unikusa.com/collections/uniform/Girls-Uniform-Tops

## SEO fixes — todo (unikusa.com, all done in Shopify admin, no developer needed)
Audited 2026-06-06. Rated 3/10. Every fix below is copy-paste in Shopify — no code.

1. Add a homepage headline — currently blank. Suggested: "Kids School Uniforms & Children's Clothing — LA's Family-Owned Brand Since 2002"
2. Fix meta keywords — currently still says "Shopify Template" (the factory default, never changed)
3. Add meta descriptions to all collection pages (Girls Uniforms, Boys Uniforms, etc.) — currently none ← Cal can do this now (Collections in admin)
4. Fix all image labels — every logo says "wholesale children's clothing." Wrong word for a retail site, and same text repeated everywhere
5. Add city/location to page titles and descriptions — address is in the footer so Google can see it, but it's not in titles, meta descriptions, or structured data where it counts for local search
6. Turn on product schema — free Shopify app, makes star ratings + price show directly in Google results
7. Fix social share image — when someone shares the site, no image appears in the preview
8. Start a blog — even 4-6 posts a year gives Google more to rank. Topic ideas: back to school guides, uniform care tips, size guides

Needs Ben to unlock (Settings > General):
- Meta title on homepage
- Meta description on homepage
- Vendor names unified to "UNIK"

## Correct Shopify collection URLs
- Boys Uniform Tops: https://www.unikusa.com/collections/uniform/Boys-Uniform-Tops
- Girls Uniform Tops: https://www.unikusa.com/collections/uniform/Girls-Uniform-Tops

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
