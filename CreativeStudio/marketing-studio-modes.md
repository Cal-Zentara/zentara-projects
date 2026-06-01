# Higgsfield Marketing Studio — Mode Reference

Researched May 28, 2026. Based on 11 parallel agent research sessions + live testing on UNIK.

---

## The Big Rule Before Anything Else

**The product URL does more work than your text prompt.** Paste your Amazon listing or product page URL into the product field before you type anything. Higgsfield's Hermes Agent scrapes the site, pulls what's currently converting on Meta Ads Library and TikTok, and writes the brief itself. Your text prompt just adds what it can't guess — a hook line, a specific scene, a setting.

Without a URL, you're describing the product in words and hoping it guesses right. With a URL, it knows exactly what the product looks like.

---

## Mode Selection — Quick Guide

| If the ad is about... | Use |
|---|---|
| The product itself — spinning, floating, looking premium | Hyper Motion |
| A person's story — before/after, real life moment | TV Spot |
| Clothing actually ON a moving person | Pro Virtual Try On |
| You have a product and no idea what you want | Wild Card |
| Someone talking to camera like a creator | UGC |

---

## Hyper Motion

**What it is:** Pure CGI product reveal. No people, no avatar. The product floats in a 3D environment while the camera moves dramatically around it. Think Apple product launch or Bang & Olufsen ad — item spinning in space, premium lighting, fast cuts.

**Best for:** Tech gadgets, sneakers, luxury items, anything where the design itself is the star. Products that look good floating in a void.

**Worst for:** Clothing, food, anything where a person or setting is part of the story. Soft products look like candy — glossy, over-lit, wrong texture.

**How to prompt:** Be specific. Camera verbs, not adjectives. "Slow 360 orbital rotation" beats "cool camera movement." More detail = more control in this mode.

**Real use case:** Higgsfield's own demo used a phone crashing into a void, an ice cube shattering to reveal ingredients, then transforming into a finished dish. No real-world ad results with performance data found.

**UNIK verdict:** Wrong mode. Makes the polo look glossy like candy. Confirmed after testing May 2026.

---

## TV Spot

**What it is:** Narrative, character-driven lifestyle commercial. One avatar carries the whole scene. Warm, handheld-feeling, realistic. Think a well-shot YouTube pre-roll from a mid-size brand — not CGI, not wild camera moves.

**Best for:** Any brand where a person's experience is the product — apps, food, services, lifestyle. Clothing works if there's a story attached ("why am I paying $30 for a polo?").

**Worst for:** Pure product showcase — that's Hyper Motion's job. Also defaults to 16:9 widescreen, so you'd need to crop for Reels/TikTok.

**How to prompt:** Give it the story setup. Character, moment, hook line. Bake dialogue lines directly into the prompt — write the exact words you want the avatar to say. The best example found used a 400-word prompt with specific camera moves, exact dialogue, and scene description.

**Example prompt that worked (HIGGS streetwear demo):**
> "Monochrome city street. Crowds blur past in long exposure. One guy walks toward camera wearing acid green and black streetwear. No green elements in the environment — only the clothing fabric is colored, everything else is black and white. Cut with fast negative invert flashes — full frame color inversion, 2-3 frames each through the clip. Quick, cold, confident."

**Real use case:** Higgsfield's own tutorial brand "HIGGS." No independent real-world ad results with performance data found.

**UNIK verdict:** Could work for the mom-story angle, but 16:9 format is wrong for Reels. Not tested yet.

---

## Wild Card

**What it is:** The AI invents everything — characters, location, camera moves, story arc, VFX. You give it a loose concept or just the product image and it decides the entire creative direction. Lowest input, most unpredictable output.

**Best for:** When you have a product and no clear concept. Testing whether an idea has spark before committing to a direction. Products with a clear use-case story.

**Worst for:** When you have a locked concept and need specific shots. Brand consistency across multiple clips. Anything requiring a specific location or demographic.

**How to prompt:** 10 words or less. Or nothing at all. "You scan the fridge, get a recipe, cook a meal" was the clearest example found. Let the AI surprise you.

**Clothing note:** One creator reported Wild Card naturally had an avatar trying on a hat and walking without being asked. Clothing try-on behavior seems to be built in.

**Real use case:** Almost no documented real-world results. Higgsfield uses a fake brand for all their demos. First-mover territory.

**UNIK verdict:** Worth a one-credit test. No concept needed — just the product image.

---

## Pro Virtual Try On

**What it is:** Automatically dresses an AI avatar in your actual product and puts them in a scene. You don't describe the clothing — the tool reads it from your product image or URL. Designed to look like a fashion editorial or street-style video.

**Best for:** Any clothing or apparel brand. The tool handles fabric texture, cut, color, and proportions from the product reference. Works with Amazon product links — just paste the URL.

**Worst for:** Non-clothing products. Ultra-basic/utilitarian items might get dressed up too editorially for the brand's actual tone.

**How to prompt:** Short. Describe the scene/environment only — not the clothing. The product image handles the clothing. 

**Example that worked (YouTube creator test):**
> "walking down a sunlit Mediterranean street on a hot summer day, golden hour light, warm breeze"
That's it. The avatar wore the exact clothing from the Amazon link — right cut, right color, right texture.

**UNIK-tuned prompt:**
> First day of school. Walking confidently down a hallway, lockers on both sides, fluorescent overhead light, backpack on, big smile. Bright, energetic, ready for the year.

**Key settings:** 9:16, 480p for first test. Run girl avatar first, then boy avatar separately.

**Real use case:** YouTube creator tested with an Amazon clothing product. His reaction: "Her face, her features, her expression exactly the way the photo I uploaded looked. The clothing — exact product from the Amazon link. The cut, the color, the fabric texture, the way it sits on her body, all correct." No paid ad performance data exists yet.

**UNIK verdict:** Currently testing. Most promising mode for showing the actual polo on a real-looking person.

---

## UGC

**What it is:** One avatar talks to camera about your product, styled to look like someone filmed it on their phone. Mimics TikTok/Reels creator content. Most documented and most-used mode.

**Best for:** Testimonials, product reviews, trust-building content. Single avatar, single product, talking directly to the audience.

**Worst for:** Multi-shot hallway content, location-specific scenes, anything requiring more than one avatar or setting. Generic by generation 4-5 if you don't feed it a brand voice document first.

**How to prompt:** Write the hook line you want the avatar to say. Keep it short — the preset handles the structure.

**Key tip:** Feed Hermes your own brand voice document at the start of the session. Without it, outputs become formulaic and templated quickly. This was the single biggest finding from the most rigorous independent test found (LUMIS Vitamin C Serum — 79% usable generation rate when brand voice was provided upfront).

**Real use case:** Gatorade test — creator typed a basic prompt, avatar said "If I'm dragging after a workout, I grab this Gatorade. Tastes great, hydrates fast." Creator reaction: "That was really, really good." LUMIS skincare test — 79% of generations usable without re-prompting when brief included brand voice doc.

**UNIK verdict:** Would work for a Latina mom talking to camera about price. But won't produce school hallway, kids, or multi-shot content. Secondary option after Pro Virtual Try On test.

---

## Prompting Rules (All Modes)

1. **Specificity beats length.** "Slow 360-degree orbital rotation" beats "cool camera movement."
2. **Scene description only in Pro Virtual Try On.** The product image handles the clothing — don't describe it.
3. **Bake dialogue into TV Spot prompts.** Write the exact words, not a description of them.
4. **Short for Wild Card.** 10 words max. Let the AI fill the gaps.
5. **Brand voice doc in UGC.** Without it, generic output by gen 4-5.
6. **URL first, prompt second.** Always paste the product URL before typing anything.

---

## What Doesn't Exist Yet

- No documented paid ad performance data (ROAS, CTR, CPC) from any mode exists publicly
- No back-to-school or kids clothing ads have been made on Higgsfield — UNIK would be first
- Wild Card has almost zero independent real-world testing
- Pro Virtual Try On was only confirmed working on adult fashion — kids clothing untested

---

## Credit Cost Reference

All Marketing Studio gens cost 40 credits (shown as 4035 on the Generate button — divide by 100 for real credits). First pass always at 480p. Upgrade to 720p only after direction is approved.
