---
name: RModel1
description: Use when Cal gives a character reference image (or images) and wants a clean, consistent training set to register that character as a Higgsfield Soul. Triggers on "/RModel1", "register this character", "make me angles of this model", "build a Soul training set", "10 angles of the same character", or when Cal hands over a model photo and says he's going to register it to Higgsfield.
---

# RModel1 — Character Angle Set for Soul Registration

## Overview

Cal hands over a character (one or more reference photos). This skill does two things, in order:

1. **Fully analyzes the character into a locked identity block AND a locked outfit block** — every facial, physical, and clothing detail, nothing missed. These blocks are the anchor that keeps the character and the product identical across all 10 prompts.
2. **Writes 10 prompts of that exact same character at different angles** — 3 face/upper-body, 7 full-body — so Cal can generate them and upload the set to Higgsfield to register the character as a Soul.

Core principle: **the locked identity block AND the full outfit block are repeated verbatim inside every one of the 10 prompts.** Only the angle, framing, expression, and light change. The person and the clothes never change. That is what produces a drift-free Soul and keeps the product accurate.

This skill writes prompts and STOPS. It never generates. Cal fires the gens.

## When to Use

- Cal gives a model/character photo and says he wants to register it to Higgsfield.
- Cal types `/RModel1`.
- Any time the goal is "a consistent set of the same character from many angles for Soul training."

Do NOT use for: animating a character (that's Seedance / cinema-worldbuilder), one-off image edits, or product-only shots.

## Locked defaults (Cal set these)

- **Split: 3 face/upper-body + 7 full-body.** Keep this unless Cal says otherwise.
- **The full outfit is described in EVERY prompt, all 10** — including the face shots. The product (the clothing) is the whole point; if you leave the outfit out of a prompt, the model invents one and the product details drift (this is exactly how the skirt buttons got dropped). Never omit the outfit from any prompt.
- Higgsfield Souls learn the **face**, not the outfit, so face shots still matter for identity. But because Cal is selling the clothes, the garment and its product details must stay correct in every frame.

## Workflow

### Step 1 — Read the reference, build the two locked blocks

Open every reference image Cal provides. Look hard. Capture EVERY field below. If a detail is genuinely not visible, write "(not visible in ref — infer consistently)" rather than skipping it, so it never silently drifts.

**LOCKED IDENTITY BLOCK** — fill all of it:

- **Apparent age**
- **Face shape**
- **Skin tone + texture** (pores, freckles, cheek flush, any tiny mark)
- **Eyes** (color, shape, size, spacing, lashes, eyebrows)
- **Nose** (size, bridge, tip)
- **Lips** (fullness, shape, natural color, resting position)
- **Cheeks/jaw/chin**
- **Hair** (exact color, length, texture, parting, how it's styled, baby hairs/flyaways)
- **Build/proportions** (read for the age)
- **Teeth/smile** (only if visible)
- **1-2 anchor details** — the tiny weird specifics that lock identity (a loose strand, a freckle by the eye, an uneven part). Pull these FROM the reference, never invent them.

**LOCKED OUTFIT BLOCK** — capture the FULL outfit, every garment, head to toe. This goes in every prompt:

- **Each garment**: type, exact color, fit, neckline, sleeve length, how it sits (tucked/untucked)
- **The product** (the item Cal is actually selling — flag it): every product detail by name — buttons, pleats, panels, waistband type, zippers, trims, stripes, logos, hems. These details are non-negotiable and must be named in words in every prompt (e.g. "two small buttons on each side of the waistband", "knife pleats", "elastic back waistband").
- **Socks / shoes / accessories**: color, style, any detail (bows, stripes, buckles)

Show Cal both finished blocks before the prompts so he can correct anything.

### Step 2 — Write the 10 prompts

Fixed angle set. Every prompt is a **Banana Pro (`nano_banana_2`) prompt** that:
1. Says to use the character from the attached reference image, keeping her face exactly the same.
2. Restates the **full locked identity block**.
3. Restates the **full locked outfit block** (yes, even on the head-and-shoulders shots — never drop it).
4. Adds the studio setup.
5. Specifies the angle/framing/light/expression for that shot, and for any shot where the product is in frame, says the product detail is clearly visible.

Studio setup (same in all 10): plain white seamless studio backdrop, soft even daylight, photorealistic, sharp focus on the face, natural skin texture and real grain, no retouching, no text anywhere.

Expression rule for training: keep faces mostly **relaxed and neutral or softly varied** — a calm mouth-relaxed face in most shots, a gentle natural look in a couple. Never a fixed wide grin held at the lens. Vary it; never identical across all 10.

THE 10 ANGLES (locked):

Face / upper-body (3):
1. Front, eye level, head and shoulders, calm neutral face looking straight to camera.
2. Three quarter left, head and shoulders, soft natural expression, gaze just off camera.
3. Three quarter right, head and shoulders, relaxed mouth, looking slightly down.

Full-body (7) — the outfit and its product details show here:
4. Front, full body, eye level, standing naturally and relaxed, full outfit and product details visible.
5. Three quarter left, full body, weight shifted naturally, one foot slightly forward.
6. Three quarter right, full body, relaxed stance, arms natural at sides.
7. Left side, full body, full length, the product and its details clearly visible in side profile.
8. Right side, full body, full length, the product and its details clearly visible in side profile.
9. Back, wide full body, eye level, whole child and outfit in frame, head turned naturally over the shoulder to show the face.
10. Back three quarter, wide full body, eye level, whole child and outfit in frame, head turned naturally to show part of the face.

### Step 3 — Output format and stop

- Put **each of the 10 prompts in its own fenced code block** so Cal gets a copy button per prompt. Number them 1-10 with a one-line label above each.
- If Cal is in a plain terminal where copy buttons do not render, write the full set to a `.txt` file and open it so he can copy from a normal window.
- After the 10, give Cal the next-step line: generate all 10 with `nano_banana_2` (reference image attached), pick the clean ones, then register with `higgsfield soul-id create --name "<name>" --soul-cinematic --image ...` (one `--image` per generated photo).
- **Do NOT generate anything.** Writing the prompts is not permission to run them. Wait for Cal's explicit go.

## Hard safety rules (these are often kids — UNIK)

These are non-negotiable and override any framing request:

- **No close-up or isolated shot of a rear/backside.** Back angles (9 and 10) must stay WIDE, full-body, eye-level shots with the whole child in frame. Never zoom, never low-angle, never linger on the seat or lower back.
- **Never lift, pull, bend, or "reveal" anything under a garment.** Hands stay away from the skirt/dress. Garment movement only ever comes from natural standing/turning.
- **No provocative posing.** Stances are natural and childlike. Never a fashion-vamp pose.
- **No held grin at the lens.** Relaxed, varied, real.

If a requested angle would break any of these, keep the rule and tell Cal the conflict in plain English. Never quietly bend a safety rule to fit the angle list.

## Quick Reference

| Thing | Rule |
|---|---|
| Split | 3 face/upper-body + 7 full-body (Cal's locked default) |
| Outfit | Full outfit block in EVERY prompt, all 10 — never dropped |
| Product details | Named in words in every prompt (buttons, pleats, trims, etc.) |
| Model to generate with | `nano_banana_2` (Banana Pro), reference image attached |
| Identity block | Repeated verbatim in all 10 prompts |
| Anchor details | Pulled FROM the reference, never invented |
| Expression | Relaxed/neutral, varied, never a fixed grin |
| Each prompt | Its own fenced code block (or a .txt file if terminal has no copy button) |
| Generation | Skill never generates — outputs prompts, waits for Cal |
| Register command | `higgsfield soul-id create --name "<name>" --soul-cinematic --image <each photo>` |

## Common Mistakes

- **Dropping the outfit from a prompt.** If the outfit is not in the prompt, the model invents one and the product details drift (this is how the skirt buttons disappeared on the profile shot). Full outfit in every prompt, always.
- **Naming the product but not framing it.** A "head and shoulders" shot will not show a skirt no matter how you describe it. If a product detail must be seen, the framing has to include it — use a full-length or full-body shot for the product angles.
- **Writing thin identity descriptions.** "A young girl with brown hair" drifts instantly. Fill every field in the block.
- **Inventing anchor or product details.** Borrowing details from the ref = consistency. Making them up = drift. Only describe what's actually in the photo.
- **Letting framing change the person.** The angle changes; the face, hair, build, anchor details, and outfit are byte-for-byte identical across all 10.
- **Stacking adjectives.** One clean detail per feature.
- **Generating without a go.** Output the prompts and stop. Always.
