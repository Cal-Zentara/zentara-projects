# Design Decisions — Cal's Taste

Read this before any design work. These rules are non-negotiable.

---

## Typography

**Rule:** Never use Inter or generic sans-serif as the primary font on client sites.
**Why:** Looks like every other AI-generated site. Instant "cheap" signal.
**When:** Every client site, every demo.

---

## Buttons

**Rule:** Primary CTA buttons get an arrow icon (→ or ↗). Secondary buttons do not.
**Why:** Arrow signals forward motion. Helps users know what to do next without reading.
**When:** Any page with a booking, contact, or lead form CTA.

---

## Spacing

**Rule:** Default to generous padding — err on the side of too much space, not too little.
**Why:** Tight layouts feel cheap. Open layouts feel premium.
**When:** All sections, cards, and containers on client sites.

---

## Color

**Rule:** No gradient hero backgrounds unless the brand explicitly calls for it.
**Why:** Gradients are the #1 tell of an AI-generated site. Flat or photo is almost always better.
**When:** Hero sections on every client site.

---

## Layout

**Rule:** One primary action per section. Don't stack two CTAs side by side.
**Why:** Forces a decision. Two equal CTAs = no decision = user leaves.
**When:** Any section with a call to action.

---

## Emojis

**Rule:** Never use emojis anywhere on a webpage — no badges, no icons, no headings, no copy. Use clean line SVG icons or plain text instead.
**Why:** Emojis look cheap and render inconsistently across devices. Instant "template" signal.
**When:** Every client site, every demo, every page.

---

## Tools

**Rule:** Never suggest Canva. Ever.
**Why:** Cal doesn't use it and doesn't want it recommended.
**When:** Always — any design, graphic, banner, or visual task.

## Social Graphics (Editorial / Magazine Style)

Learned building UNIK's content graphics, June 5 2026. Applies to any social graphic or carousel.

**Rule:** Don't ship plain text on a colored card. Put bold text over a real image (or a strong visual idea).
**Why:** Text-only graphics read flat and "okay at best." A real photo behind the words is what stops the scroll and feels creative.
**When:** Any social post graphic, especially top-of-funnel emotional posts.

**Rule:** I can make creative graphics for FREE without Higgsfield — search a stock photo (Unsplash tool), download it, and lay bold text over it with HTML/CSS. Higgsfield credits are ONLY needed for a custom, surreal, AI-painted image.
**Why:** Cal assumed image creativity always costs credits. It doesn't. Code + free stock covers most of it.
**When:** Any graphic that needs a visual but not a bespoke AI-generated one.

**Rule:** For a magazine/editorial feel, use an elegant high-contrast serif headline (e.g. Playfair Display), put the key word in italic, and add a small tracked uppercase kicker label above it.
**Why:** This is the fashion-magazine-cover look. It reads refined and intentional, not like a template.
**When:** Editorial-style posts, brand storytelling, anything that should feel premium.

**Rule:** Keep photo backgrounds mostly NATURAL. Light touch only (slight saturation/contrast) + a clean bottom fade where text sits. Let the brand color live in the wordmark/accent, not by drowning the photo in a heavy tint.
**Why:** Cal's call (June 5). A heavy dark color-grade / duotone read "too gloomy and muddy." Natural color is brighter and works for most posts.
**When:** Any photo-background graphic. (Heavy grading only if a specific post genuinely calls for a moody look.)

**Rule:** For small accounts that need attention, lean bold and branded over quiet and premium.
**Why:** "Quiet premium" gets scrolled past when you have 400 followers. Bold (using the brand's own color to shout) earns the eyeballs first.
**When:** Any client still growing their audience.

**Rule:** Do NOT reuse one locked layout for every post. Design each graphic FROM the idea behind that specific post. The brand kit (Playfair + Outfit type, blue #29ABE2 wordmark/accents, clean legibility) stays consistent, but the LAYOUT and concept change every time. A review post can be a fake report card. A reminder can be a calendar. A list can be a checklist. Understand the post, then invent the form.
**Why:** Cal's call (June 5). Filling the same photo+text template every time reads as copy-paste, not creative. "You're using the ideas, not copying and pasting." The locked-template approach got a 6.5; designing from the idea got a 9.5.
**When:** Every social graphic. Start by asking "what is this post actually about?" before touching layout.

**Rule:** Lean FUN and unexpected, not safe and polished. Turn the message into a playful object (report card, yearbook superlative, warning label, certificate, receipt).
**Why:** Cal (June 5) asked for "something fun" and rated the playful concept 9.5 vs the straight quote-card. Fun stops the scroll; polished blends in. Matches his standing note: AI creative wins when it's fun, not perfect.
**When:** Any social graphic, especially for a small account that needs to earn attention.

**Rule:** When you commit to a concept, commit ALL the way. No half-measures. If it's a WANTED poster, it needs: full-width rectangular mugshot photo (not a small circle), a tagline ("DEAD OR WASHED"), case numbers in corners, reward amount ($0.00 for comedy), a "Last Seen" line, AND the fix block anchored to the bottom filling all remaining space. Every element of the real thing should be present. An underwhelming first version with a small portrait and dead white space at the bottom is not committing — it's hinting. Fill the frame.
**Why:** Cal (June 8): "if you're going to commit, commit all the way." First version had a small circle portrait and a lot of empty space below the info. Redesign with full-width mugshot, $0.00 reward, Last Seen row, ornate 3-ring border, and fix block pinned to bottom = the difference between "underwhelming" and a carousel worth posting.
**When:** Any time you pick a playful object (wanted poster, report card, receipt, ticket). Ask: does this have ALL the real elements of that object? If not, add them.

**Rule:** NEVER put a "Shop on Amazon" button (or any filled CTA pill button) on a social graphic. Banned for good.
**Why:** Cal (June 5): "get rid of this and never see it again." A big shop button makes the graphic look like a cheap ad and cheapens the whole piece. The CTA belongs in the caption ("link in bio"), not stamped on the image. End graphics with the logo as a clean sign-off instead.
**When:** Every social graphic, every client.

**Rule:** Use the client's REAL logo file as the wordmark/sign-off, not styled text, once you have it. For UNIK the transparent blue logo lives at `ZentaraHQ/clients/Unik/graphics/unik-logo.png` (knocked out from the white-bg original).
**Why:** Cal (June 5): "start using their actual logo." Real logo = real brand, not a lookalike.
**When:** Any graphic where the brand mark appears.

**Rule:** For a BANNER / hero image with real people, GENERATE it with Higgsfield Nano Banana Pro using the product photos as references — do NOT hand-build it by pasting cutouts onto a coded background. After the gen, overlay the real logo + headline in HTML and render to PNG. Full recipe in `ZentaraHQ/clients/Unik/graphics/DESIGN-RECIPE.md`.
**Why:** Cal (June 5): "generate a banner, add the images for ref" literally meant feed the photos into the AI generator. I missed it and spent hours hand-building flat cutout composites that looked like robots in a line — Cal: "ugly," "7 out of 10." One Higgsfield gen with 6 references gave a playful, real scene in one shot.
**When:** Any banner, hero image, or composite that needs real people looking natural and interacting. (Single text-over-photo social graphics can still be hand-built — see the graphic kit above.)

**Rule:** Amazon Store hero image = 3000 px wide, height 600 (min) to 1200 (max). Keep key content in the center 50% safe area; the sides get cropped and the left ~18% gets Amazon's own logo overlay on small screens. Deliver at 3000x1200 (5:1 / 3000x600 chops full-body people).
**Why:** Verified June 5 from Amazon's official Stores Creative Asset Requirements. Don't guess banner dimensions.
**When:** Any Amazon storefront banner.

**The bar:** if Cal looks at it and feels "okay at best, not inspired," it is NOT done. Study real references before iterating, don't just nudge settings.

## Client-Specific Decisions

**Rule:** UNIK graphic recipe — real photo background + bold editorial text + the lowercase "unik" wordmark ALWAYS in brand blue (#29ABE2), even over a dark photo. Full recipe in `ZentaraHQ/clients/Unik/graphics/DESIGN-RECIPE.md`.
**Why:** Locks a consistent, on-brand look across all UNIK social graphics.
**When:** Every UNIK social graphic or carousel.

<!-- Add rules here as you redirect Claude during builds. Format:
**Rule:** [what to do]
**Why:** [reason you made the call]
**When:** [when to apply it]
-->
