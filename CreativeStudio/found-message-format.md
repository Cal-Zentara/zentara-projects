# Found-Message Format — Universal Playbook

A reusable content format for ANY client. Saved June 10 2026 (pulled from what's working on the Salvia Lion account).
Brand-agnostic on purpose. To use it for a client, read this file, then adapt it with that client's own voice + world (see "How to adapt per client" below).

**One-line pitch:** a single candid photo of one short line of text, written on a real ordinary surface in a real place, like someone left it there for you to find.

---

## What it is
A single photo of ONE short line of text on a real, ordinary surface in a real place, shot candid like someone stumbled on it. No graphic-design look, no logo. Real-world examples: a quote spray-painted on a wall, finger-written in dust on a car window, marker on cardboard held in someone's hands, painted on a hung bedsheet banner, chalk on a sidewalk.

## What it serves (why it works)
- It names a feeling people carry but never say out loud, so they feel SEEN and SAVE/SHARE it. A share = a free introduction to a new follower. That is how a near-zero account actually grows.
- It does NOT sell. It builds the brand's world and gets forwarded. Keep selling to about 1 in 5 posts.
- It's cheap and fast (one line + one image), so it's sustainable at high posting frequency.
- The magic is the GAP: a meaningful line on a humble, ordinary surface feels like a gift left in the real world, not an ad.

## The frame (never changes)
- ONE clean line, broken into 3 to 5 short stacked centered lines, BIG enough to read as a thumbnail.
- On a REAL, ordinary surface, in a real place, shot candid in natural light.
- No logo, no brand name, no hashtag baked into the image. The line stands alone.

## How to keep it fresh (change these every time, never repeat)
1. **The surface + how the words got there** — never the same twice in a row (spray paint, dust on glass, chalk, cardboard, steam on a mirror, a hung banner, written in salt or sand, vinyl on a window, a torn note in someone's fingers).
2. **One small human touch** — a hand holding it, a person walking past, light through a window, rain on the glass, a prop from the brand's world. This sells "a real person left this." One detail, never a busy scene.
- **Let the setting echo the feeling** (warm light for a tender line, gray and cold for a heavy one).
- **Scale is a lever** — the SAME line works tiny (a sticky note in your fingers) AND huge (a banner off a building). A great line is reusable as long as the surface changes.
- **Rotate the FEELING** — never two posts about the same feeling in a row. (See "wells" per client.)

## Production rules (locked)
- Single image = ALWAYS 4:5 tall (1080x1350). This format is single image, not carousel.
- Use **gpt_image_2** (best for readable baked-in text). Write the EXACT line into the prompt in quotes.
- No hyphens or dashes anywhere in the copy.
- Keep the photo REAL. Do NOT force a designed/branded look or it loses the "found" magic. If the brand mark is wanted, add a small watermark in a corner in POST, not in the gen.
- Write the prompts and STOP. NEVER generate. Wait for Cal's explicit "go / run it / fire it." Cal generates in Higgsfield himself and posts.

## The recipe (one line)
A brand feeling + one short line + a real surface from the brand's world (a new one each time) + one human touch. Rotate the surface AND the feeling so nothing repeats.

---

## How to adapt per client
The format is fixed. Two things change per brand:

1. **The "wells" (the feelings).** List the real feelings that brand's audience carries but rarely says out loud. Rotate them, never two in a row. Pull these from the client's voice/positioning docs.
2. **The surfaces/settings.** Use real places from THAT brand's world, never a generic stock look. Match the surface to the brand.

Then write the LINE in the brand's actual voice (read their voice doc first), and keep production rules above.

### Worked example — Salvia Lion (gentle spiritual bath salts)
- Wells: rest you don't have to earn, sensitivity as a gift, solitude, gratitude, permission to put yourself first, the body holding stress, gentle humor. (NOT just "you absorb others' energy" — that was overused.)
- Surfaces: steam on a foggy bathroom mirror, salt/petals on warm bath water, a cream adobe wall at golden hour, a torn note by a candle on a bath tray, a linen banner in a garden.
- Voice: warm, gentle, permission and relief. Live posts use it as the Tuesday "feel seen" slot.
- Full Salvia detail: `SpiritSisters/SpiritNancy/Marketing/content/salvialion/content-ideas-bank.md` ("HOW TO KEEP THE FOUND-MESSAGE FORMAT FRESH" + "EMOTIONAL RANGE").

### Worked example — Unik (kids' school uniforms, built to last, for parents)
- Wells: durability relief, the $30-polo value gripe, school-morning chaos, pride watching them grow, real-life mess (grass stains, playground), the unsung labor of keeping kids clothed.
- Surfaces: a stack of folded uniforms on the dryer, a school hallway/lockers, a classroom whiteboard, chalk on the playground blacktop, dust on a school bus window, a cardboard sign at a cluttered kitchen table, a sticky note on a lunchbox.
- Voice: playful, deadpan, real, factual, short, NEVER overclaiming (owner Thuy's rule). Sanity-check durability claims against that rule.
- Build Unik its own version in Unik's own docs + slot it into Unik's roadmap as a recurring slot.

### Example prompt shape (swap the line + surface per brand)
"Photorealistic candid photograph, vertical 4:5 portrait, [natural light/mood]. [Real surface in the brand's world] with a short message [how the words got there: painted/chalk/marker/finger-written] that reads \"[THE LINE]\" in [handwritten/painted] capital letters, large and easy to read. [One human touch], real and candid, shallow depth of field, no logos, no other text anywhere. Vertical 4:5."
