# Nail'd It! Spa — CreativeStudio Client Docs

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
