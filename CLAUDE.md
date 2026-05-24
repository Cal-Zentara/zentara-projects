# Healthy Protein Spot — Project Brief

**Type:** Demo / prospect-pitch website (not a paying client yet)
**Status:** v1 built, not deployed
**Date Started:** 2026-05-23

## What This Is

Single-page website for **Healthy Protein Spot**, a family-owned protein shake spot in Anaheim, CA. Right now their entire web presence is a Linktree (`linktr.ee/healthyproteinspotanaheim`). We're building them a real website.

## Symbol Map

| File | What's in it |
|---|---|
| `index.html` | The whole site — single file, embedded CSS + JS, Google Fonts |
| `images/` | Unsplash food/shake photos (downloaded local, attributed in footer) |
| `hp1.png` … `hp8.png` | Their original menu PNGs (source material — not used on site) |
| `STATUS.md` | Where we are right now |
| `docs/superpowers/specs/2026-05-23-…design.md` | The brainstorm spec |

## Tech

- Vanilla HTML + CSS + tiny inline JS. No build step. Double-click `index.html` to view.
- Google Fonts: **Anton** (display), **Caveat** (script), **Outfit** (body)
- Single CSS variable system at top of `<style>` block for the brand colors.

## Brand Colors

```
--pink:      #FF1A8D   (their hot pink)
--lime:      #C8E834   (their lime green)
--cream:     #FFFEF7   (off-white background)
--ink:       #1A1A1A   (off-black)
```

## Key Business Facts (these appear all over the site)

- **Phone:** 714-594-8162 — call OR text. Last call 15 min before close.
- **Address:** 9856 Katella Ave, Anaheim, CA 92801. Same plaza as Crunch Garden Grove.
- **Hours:** Mon–Thu 6am–11pm · Fri 6am–9pm · Sat 7am–8pm · Sun 7am–6pm
- **Tagline:** Fueling Your Goals Since 2021

## Section Order

1. Pink scrolling marquee
2. Hero (huge brand lockup + two CTAs)
3. Lime scrolling marquee
4. Menu — Protein Shakes (Fruity, Nutty, Chocolate, Coffee & Dessert)
5. Coffee section (Chanel + Iced Protein)
6. Snacks (Waffle, Oats, Donuts)
7. Tea Bombs (Wellness, Energy, Pre-Workout, Mini Refreshers)
8. Works Combo + Add-Ons
9. Order CTA (giant phone number)
10. Find Us (hours grid + address + Google Maps embed)
11. Pink marquee
12. Footer

## Sticky Element

`.sticky-call` — the pink "Call to Order →" button bottom-right of every screen. Never lose the phone number.

## Gotchas

- **`min-height:100dvh` on hero breaks headless screenshots.** Chrome's `--window-size=1440,7000` makes the hero render 7000px tall. Real browsers at normal viewport sizes work fine. Don't change this — it's correct CSS.
- **Photo credits required.** Unsplash MCP downloads include attribution text. Currently a one-line credit in the footer covers it; if we deploy this to a real domain, do a proper credits page.
- **Menu items came from PNG sources** (hp3–hp7). Some descriptions are best-guess from cropped/low-res image text. Have Cal/owner verify before going live.
- **Yelp link is a guess** — the actual Yelp URL hasn't been confirmed. Update before launch.

## If Cal Wants Updates

- **Add/remove menu items:** edit the `<div class="item">` blocks inside `<section id="menu">`.
- **Change colors:** just change the `:root` variables.
- **Swap food photos:** drop new file into `/images/` and update the `src` references.
- **Deploy:** zip and drop into any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

## Not Done

- Deploy to a live URL
- Confirm menu item descriptions with the owner
- Get real food photos (using Unsplash placeholders right now)
- Add SEO meta tags / schema markup for local business
- Add favicon
