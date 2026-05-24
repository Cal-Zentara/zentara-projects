# Healthy Protein Spot — Website Design Spec

**Date:** 2026-05-23
**Client:** Healthy Protein Spot (Anaheim, CA)
**Replacing:** Linktree at linktr.ee/healthyproteinspotanaheim

---

## Goal

Replace their Linktree-only web presence with a real single-page website. Customers land here from Instagram on mobile, need to see the menu, and call to order. Site should look like a brand they're proud of — not a restaurant template.

## Brand Facts

- **Name:** Healthy Protein Spot
- **Tagline:** Fueling Your Goals Since 2021
- **Address:** 9856 Katella Ave, Anaheim, CA 92801
- **Phone:** 714-594-8162 (call or text — last call 15 min before close)
- **Hours:** Mon–Thu 6am–11pm | Fri 6am–9pm | Sat 7am–8pm | Sun 7am–6pm
- **Colors:** Hot pink (#FF1AAD-ish) + lime green (#C8E834-ish) on white
- **Vibe:** Family-owned, loud, playful, gym-adjacent

## Approach

**Single scrolling page.** No nav menu. Fun + simple. Bold editorial treatment, not a restaurant template.

## Sections

### 1. Marquee Header
Pink band scrolling: "FUELING YOUR GOALS SINCE 2021 · CALL 714-594-8162 · 9856 KATELLA, ANAHEIM"

### 2. Hero
Logo blown up huge (script "Healthy" + bold "PROTEIN" + script "Spot"). One sticky pink "TAP TO CALL →" button visible from every section.

### 3. Menu (editorial scroll, not tabs)
Each category = its own giant color-blocked section, alternating pink/white/lime/white. Shake names treated as magazine headlines. Prices in chunky badges. Categories:

- **Protein Shakes** (Fruity & Fresh / Nutty / Chocolate / Coffee & Dessert) — 4 sizes by protein level (24g $10, 31g $12, 48g $14, 60g $16)
- **Chanel Coffee & Shake** — $14
- **Iced Protein Coffee** — $7
- **Protein Snacks** — Waffle $10, Oats $13
- **Protein Donuts** — 1/$4 → 10/$15
- **Tea Bombs** — Wellness, Energy, Pre-Workout, Mini Refreshers
- **Works Combo** — $13
- **Add-Ons / Customize Your Nutrition**
- **Macros Chart** (collapsible — plant-based, whey, lowcarb whey casein)

### 4. How to Order
"Call or text 714-594-8162. Last call 15 min before closing." Big phone number, single CTA.

### 5. Find Us
Hours grid + address + embedded Google Map + Yelp button.

### 6. Marquee Footer
Same scrolling band closing out.

## Design Rules (from decisions.md)

- No Inter / generic sans-serif. Use a bold display font (Anton-style) + script font ("Caveat" or similar) for the "Healthy" / "Spot" cursive.
- Primary CTA buttons get an arrow (→).
- Generous padding.
- No gradient hero background — flat or photo.
- One primary action per section.

## Imagery

- Pull 2–3 Unsplash shake/healthy-food photos for hero + section accents.
- Use the existing menu PNGs (hp1–hp8) as fallback supporting visuals if needed.

## Tech

- Single `index.html` with embedded CSS/JS.
- No build tool. Open directly in browser.
- Mobile-first. Must look great at 375px wide.

## Out of Scope

- Online ordering (they take orders by phone)
- E-commerce / payments
- CMS / admin panel
- Multiple pages
