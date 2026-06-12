# Unik — Project Docs

## Quick Nav — Read First

| I'm doing... | Read only... |
|---|---|
| Resuming / continuing | `STATUS.md` |
| Building marketing content | `STATUS.md` + Brand section below |
| Understanding the business | This CLAUDE.md in full |

---

## Project Overview

UNIK Inc is a family-owned children's and women's apparel brand based in the LA Fashion District (501 E. Pico Blvd, Los Angeles, CA 90015). Owner is Cynthia — Cal's cousin. In business 20+ years. They design in LA, source from Asia. Two channels: retail (unikusa.com) and wholesale (unikla.com). They're transitioning away from wholesale dependency as downtown LA foot traffic collapses. Cal is helping with marketing, AI automation, and sales strategy. No paid engagement yet as of 2026-05-25.

---

## The Business

| Detail | Info |
|---|---|
| Owner | Cynthia |
| Legal name | Unik Inc |
| In business | 20+ years |
| Model | Retail + Wholesale (dual) |
| Retail site | unikusa.com |
| Wholesale site | unikla.com |
| Physical store | 501 E. Pico Blvd, LA 90015 |
| Phone | (213) 748-3929 |
| WhatsApp | (213) 793-8645 |
| Email | shop@unikusa.com |
| Current ad spend | ~$6,000/month on Amazon ads |

---

## What They Sell

**Core categories:**
- Girls' apparel (dresses, tops, bottoms, uniforms, jackets)
- Boys' apparel (uniforms, polos, hoodies, pants)
- Women's apparel (tracksuits, Mexican embroidered pieces, basics)
- School uniforms (their staple — polos, pants, skirts, sizes 4–18)
- Mexican/cultural clothing (Cinco de Mayo dresses, embroidered blouses — their hidden gem)
- Infants

**Price range:** $10.99 – $48.99

**Proven bestseller:** Boys' elastic waist uniform pull-on pants (1,210 Amazon reviews, 4.5★)

---

## Brand Voice & Identity Notes

- Family-owned, LA-based, 20+ years — legitimacy and roots
- Already posts some Spanish content — knows the Latina market intuitively
- Has tried AI content (animated cat in school uniform) — not afraid of experimenting
- Currently no brand story on site — purely transactional
- The cultural clothing (Mexican embroidered dresses, blouses) is visually striking and undermarketed
- **Opportunity positioning:** The Latina mom school uniform brand. Nobody owns this.

---

## The Big Picture Problem

The downtown LA wholesale district is collapsing (ICE enforcement, boutique retail dying, fast fashion competition). Their old customer pipeline — wholesale buyers walking into the store — is drying up. They're spending $6K/month on Amazon ads but competing against brands with 100x their budget. Social media is essentially nonexistent. They need an owned online audience.

---

## Key Opportunities (Priority Order)

1. **Back to school season** — starts in 6 weeks (mid-June to mid-August), their biggest revenue window
2. **TikTok Shop + Latina mom creators** — list products, affiliate commission model, zero upfront cost
3. **Google Shopping** — higher ROAS than Amazon for DTC, parents search with buy intent
4. **Fix Instagram** — rewrite bio (talk to parents not wholesale buyers), consistent posting
5. **Klaviyo email flows** — abandoned cart alone can 6x email revenue
6. **AI product photography (Photoroom)** — professional model shots without a studio
7. **Micro-influencer seeding** — send product to 15–20 Latina mom creators, get real content

---

## Competitive Context

| Brand | Threat Level | Notes |
|---|---|---|
| French Toast | High | Budget-friendly, Amazon top seller, DTC + retail |
| Lands' End | High | Premium, school-specific tool, strong on durability |
| Nautica | Medium | Mid-range, high reviews on Amazon |
| Amazon Essentials | High | Lowest price, white-label, hard to beat on cost |
| The Children's Place | Medium | Mass market, frequent sales |

**Where UNIK can win:** Mexican/cultural clothing niche, Latina mom identity, bilingual marketing — none of these competitors own this.

---

## Market Data

- School uniform market: $30B globally, growing 7.3% annually
- 40% of uniform-wearing students are Hispanic
- Hispanic buying power: $2.6 trillion, growing faster than any other group
- Back to school buying peaks: mid-June through mid-August
- 87% of back-to-school parents have Amazon Prime
- Uniform spend per child: $25–$500/year depending on school

---

## Dev Reference

### Symbol Map
| Feature | File | Lines |
|---|---|---|
| Announcement bar | `kids.html` | ~292–296 |
| Nav | `kids.html` | ~298–314 |
| Toggle CSS | `kids.html` | ~265–326 |
| Toggle bar HTML | `kids.html` | ~1109–1116 |
| Boys panel start | `kids.html` | ~1118 |
| Boys panel end | `kids.html` | ~1790 |
| Girls panel start | `kids.html` | ~1793 |
| Girls — Tops section | `kids.html` | ~1796–1900 |
| Girls — Dresses & Bottoms | `kids.html` | ~1902–2020 |
| Girls — Styles section | `kids.html` | ~2022–2120 |
| Swatch JS | `kids.html` | ~2396–2410 |
| Toggle JS | `kids.html` | ~2430–2480 |

### Data Schema
No backend. Static HTML landing page.

**Girls collection URLs:**
- Tops: `https://www.unikusa.com/collections/uniform/Girls-Uniform-Tops`
- Bottoms: `https://www.unikusa.com/collections/uniform/Girls-Uniform-Bottoms`

**Girls confirmed prices (from Shopify):**
- GDU1775 Safari Dress: $14.99 · 2 colors · Sizes 4–12
- GU07 Scooter Skirt: $16.99 · Sizes 4/5–16
- SGU01 Stretchy Shorts: $13.99 · 2 colors · Sizes 4/5–16
- GU06 Stretch Pants: $17.99 · 5 colors · Sizes 4–16.5
- GU04 Uniform Pants: $13.99 · 3 colors · Sizes 4/5–16

**Prices still unknown (do NOT guess):** GSU01, GSU02, GSU03, GSU06, GDU08, GUJ10, GB726, GVOX, GJ17109

**Folder structure (updated 2026-05-30):**
```
SmallProjects/
├── Unik/
│   ├── kids.html          ← always edit this
│   ├── CLAUDE.md
│   ├── STATUS.md
│   └── photos/            ← all product photos live here
└── unik-kids/             ← deploy repo (GitHub Pages)
    ├── index.html         ← generated by sync script, never edit
    └── images/            ← copies of photos for deploy
```

Product photos live at: `C:\Users\Aesth\Desktop\Zentara\Projects\SmallProjects\Unik\photos\`
Image path from `kids.html`: `photos/[filename]`

Deploy repo at: `C:\Users\Aesth\Desktop\Zentara\Projects\SmallProjects\unik-kids\`

**Sync script** (run after any HTML edit to push to deploy folder):
```
node -e "
const fs = require('fs');
let html = fs.readFileSync('C:/Users/Aesth/Desktop/Zentara/Projects/SmallProjects/Unik/kids.html', 'utf8');
html = html.replace(/photos\//g, 'images/');
html = html.replace(/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/Dropbox\/AI Model Picture\/AI Uniform Tops\//g, 'images/');
fs.writeFileSync('C:/Users/Aesth/Desktop/Zentara/Projects/SmallProjects/unik-kids/index.html', html, 'utf8');
"
```
Then `cd "C:/Users/Aesth/Desktop/Zentara/Projects/SmallProjects/unik-kids" && git add -A && git commit -m "..." && git push origin master`

**When copying new photos** — copy to `SmallProjects\Unik\photos\` AND to `SmallProjects\unik-kids\images\`

### Known Gotchas
- **Photo folder moved 2026-05-30** — photos are now at `SmallProjects/Unik/photos/`, NOT on Desktop. Path from `kids.html` is `photos/[filename]`. Deploy copies go to `unik-kids/images/`.
- **Deploy repo branch is `master` not `main`** — always push to `origin master`.
- **Swatch hover sync** — when a swatch is clicked, the JS also updates `.gallery-item-img.secondary` src so hover doesn't show the wrong color. Don't remove this — it was a real bug.
- **Panel swap uses setTimeout not GSAP** — Chrome pauses rAF in background tabs, which froze the panel swap. The switch runs via setTimeout; GSAP is only used for the fade animation.
- **PowerShell variables in `-c "..."`** — inline `-c` strips `$var = "..."` assignments. Always write a `.ps1` file and run it with `-ExecutionPolicy Bypass -File`.
- **Product identification gotchas**: GUF21 = pants (not skirts), SGU25 = shorts (not skirts), GU07 = scooter skirt (the real skirt), SGU01 = stretchy shorts, SGU25 was removed (wrong product).
- **Girls Dropbox photo folders**: `AI Uniform Tops/` (GSU01/02/03/06 + boys BSU), `AI Girl Bottoms/` (GU04/06/07, SGU01/25, GUF21), root level (GDU08, GDU1775, GUJ10, GVOX, GJ17109).
- **Brand colors**: Primary blue `#29ABE2`, girls accent raspberry rose `#E8568A`, dark bar `#1A1A1A`, background white `#FFFFFF`.
- **Outdoor/lifestyle photos clash** — keep gallery consistent: white/neutral backgrounds only.

---

## Current Version & Status

**Version:** 0.3 — girls panel fully built 2026-05-30
**Status:** Active — moving to PAID. Content plan delivered + loved. Friday video meeting set to review plan and lock compensation (~$600/mo flat retainer). First money conversation. See STATUS.md "What happened 2026-06-03."

**Owner names:** Thuy (= Cynthia, her Vietnamese name) + husband Ben Yang run it together.

**Prep files (2026-06-03, in Unik folder):** `friday-meeting-cheatsheet.html`, `unik-growth-playbook.html` (section 08 = verified 4-step content funnel, added 2026-06-04).

**Content strategy notes (2026-06-04):**
- **The field is wide open.** Competitors French Toast + Lands' End barely post on social. Old Navy is the only active uniform-adjacent brand and even their best posts get only a few hundred to ~1,200 likes. UNIK wins by showing up consistently, not by going viral.
- **Lead with the durability promise** — Old Navy's top-performing post explained their 1-year guarantee. UNIK already owns this ("uniforms that actually last"). Make it the first video.
- **Language split:** Cal makes the English brand content (he can't read Spanglish well enough to make/judge it). Spanish content comes from real Latina mom creators via the UGC seeding play.
- **Tooling truth:** Meta AI = idea machine only (can't see TikTok data or IG trending audio, invents stats). For real "what's working" data use the Meta Ad Library (Facebook/Instagram) and TikTok Creative Center. Force any AI to cite sources + admit when it can't verify.

### What's built
**Boys panel:** Full uniform gallery (polos, pants, shorts, jackets, hoodies, tracksuits). All with color swatches + hover swap.
**Girls panel (3 sections):**
1. School Polos & Blouses — GSU01 (7 colors), GSU02 (6 colors), GSU03 (6 colors), GSU06
2. School Dresses & Bottoms — GDU08 polo dress, GUJ10 jumper dress, GU07 scooter skirt (Khaki·HGreen·Navy sold out), SGU01 shorts (Khaki·Navy), GU06 stretch pants (5 colors), GU04 uniform pants (3 colors)
3. Tops, Jackets & Vests — GDU1775 safari dress, GB726 ruffle top, GVOX fleece vest, GJ17109 jacket

### Next Steps
1. Get Cynthia's feedback on the page
2. Verify missing prices: GSU01/02/03/06, GDU08, GUJ10, GB726, GVOX, GJ17109
3. Get real Shopify links for GB726, GVOX, GJ17109 (currently pointing to generic collection)
4. Move Safari Dress (GDU1775) from "Tops, Jackets & Vests" into the dresses section
5. Discuss paid engagement after Cynthia reviews
6. Ad video: 3 videos made, pacing feedback pending from Cal
7. Creator DMs — start with @jetplanemommy
