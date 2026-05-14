# Fast Food Commercial Production Vocabulary

Reusable paste-ready vocabulary for photoreal premium food ad prompts. Synthesized from 7 parallel Haiku research agents on May 13, 2026. Use this on any photoreal food commercial — Garlic High, future ramen/restaurant clients, or any McDonald's/BK/Pepper Lunch style spot.

## Why this exists

When you ask gpt_image_2 for "premium commercial food photography," it defaults to flat stock photography. This vocabulary forces it past the default into actual TV-commercial-grade output.

---

## Cinematography (camera + lens + lighting)

**Lens & camera:**
- 85mm f/2.8 macro for hero close-ups, 1:1 ratio
- 50mm f/1.2 for medium shots, shallow DOF
- Sony Venice + Arri Alexa LF (cinema camera anchor)
- T2.8–T5.6 (shallow at hero, deeper on wide establishing)

**Lighting setup (paste-ready):**
- Key: warm 3200K from 45° above + camera-left (NEVER directly overhead — creates flat shine)
- Fill: soft bounce from opposite side, low saturation
- Rim/backlight: warm 3500K from far camera-right behind, skims surface, catches steam + texture + gloss
- Top hair light (optional): 60° above, 12 inches back, grazes top edges only
- Rule: key + rim at 120° angles around the food
- Negative fill on shadow side, no spill

**Camera moves (for Seedance video prompts):**
- Slow push-in 2-3 seconds wide to macro
- Focus pull from plate to bite detail
- Lockdown wide → slow rotate 15° horizontal
- Rarely pans — static with subtle tilt

**Framing:**
- Three-quarter front (shows plate + face)
- 90° overhead on solids and finished bowls
- 35° low angle on soups/liquids — catches steam, reflection, depth
- 15° low angle for noodle/cheese pull shots

---

## Food styling (paste-ready phrases)

**Noodle gloss:**
- Glycerin-coated strands (holds moisture without weighing down)
- Undercooked al dente noodles (brighter yellow, less breakage during lift)
- Light mineral oil spray on surface (catches light without looking wet)
- Egg yolk wash on noodles before cooking (adds richness, sheen)

**Steam:**
- Dry-ice vapor plume rising thick from broth surface
- Water-droplet suspension hanging mid-air around steam column
- Heat shimmer distortion rising from bowl rim
- Fog layer hovering 2 inches above broth surface

**Broth:**
- Concentrated pork reduction (opaque, rich amber/brown, not clear)
- Bloomed gelatin suspension (catches light as micro-particles)
- Single drop of sesame oil on surface (oil-film shimmer)

**Garnishes:**
- Soft-boiled egg yolk with intact membrane (glossy, not runny)
- Minced raw garlic pile (white-bright, loose, catches rim light)
- Fresh micro-cilantro with water bead still clinging to leaves
- Chili oil drizzle creating surface tension peaks

**Money shot (impact):**
- Droplet suspension freeze-frame (broth particles floating 1-2 inches above bowl)
- Rim splash with arcing trajectory (liquid suspended mid-air)
- Ceramic bowl vibration blur (slight motion blur on rim, sharp on food)
- Single bright specular flash on contact point

---

## Color grade (paste-ready)

- Crushed blacks at 0-5% luminance, minimal detail recovery in shadows
- Lifted yellow-orange midtones in 40-60% luminance range
- Golden highlights peak around 85-90% before rolloff (never blown to pure white)
- Reds and yellows +15-25% saturation above neutral
- Greens slightly desaturated (-5 to -10%)
- Skin tones warm-shifted (add yellow, reduce cyan)
- Subtle orange in shadows (warm undertone)
- Slight cyan in highlights (contrast without coldness)
- 3200K-3600K overall (tungsten-warm baseline)
- High-contrast S-curve, blacks locked down
- Film emulation: **Kodak Portra 400H** (warm/desaturated greens) or **Kodak Vision3 250D** (punchy reds)

---

## Signature money shots (composition library)

| Shot | Framing | Lighting | Trick |
|---|---|---|---|
| Lift shot (noodle/cheese) | Extreme macro, 15° low angle | Backlight catches strands | Slow-motion suspension |
| Pour shot (broth/coffee) | 35° angle, sharp focus on stream | Side rim light | Ripple ring on impact surface |
| Drop shot (ingredient) | 90° overhead macro | Backlight on impact | Object freezes 2 inches above target |
| Hero spin | 360° rotation, 3 seconds | Soft overhead | Bowl floats on shallow DOF |
| First bite | Tight close on mouth, 45° | Backlight = rim on face | Shallow DOF behind teeth |
| Burger build | 45° side, locked | Layer shadow between stack | Silent deliberate timing |

---

## Japanese ramen ad signatures (vs Western fast food)

- Late-night warm color temp — tungsten or neon, NEVER daylight
- Overhead macro on finished bowl (not 45° product shot)
- Diegetic sound only — ceramic ring, broth bubble, chopstick clink
- Foreground occlusion: steam, chopsticks, counter edge for depth on close-ups
- Slow-motion on impact + lifts, real-time on consumption
- No manufactured "crispy bite" sounds — Japanese ads commit to realism

---

## AI prompt vocabulary that pushes past stock defaults

**Opening anchors (most effective):**
- "Shot like David Loftus" (food authority)
- "85mm f/2.8 macro, shallow depth of field"
- "Sodium vapor key + negative fill into shadow"

**Realism multipliers:**
- "Subsurface scattering on translucent egg yolk"
- "Specular highlights on glossy broth"
- "Wet surface + surface tension beads"
- "Matte ceramic with gloss interior rim"

**Color grade anchors:**
- "Kodak Portra 400H film emulation"
- "Warm-warm color treatment, crushed shadows, lifted yellow midtones"
- "Slight orange-teal split-toning"

**Negative anchors (kill stock defaults):**
- "Not flat lighting, not stock food photo, no even illumination"
- "No generic depth of field, no daylight color temperature"

---

## Audio direction (calm McDonald's-style spots)

**Music:** 80-100 BPM, major key, lo-fi Japanese café jazz, 90s city pop influence. 70% instrumental.

**Suno prompt template:**
> "Warm lo-fi Japanese café jazz, 90s city pop influence, 85 BPM, dreamy looped melody, minimal percussion, no vocals, pure instrumental."

**Foley hierarchy (loudest to quietest):**
1. Broth pour / steam rise (0.5–1.5s) — baseline texture
2. Ceramic clink (when bowl lands) — sharp, marks transition
3. Chopstick dip (at noodle grab) — midrange grounding
4. Slurp / bite (final 3s) — lead layer, drives close

**Silence rule:** Hold 0.3-0.5s of silence after every foley hit. Let each sound land, then breathe.

**Music build:** Stays level through the ad. No crescendo. One gentle swell at the bowl reveal (~1.5s mark), then sustain to close.

**No voiceover preferred** for max engagement (per the research), but if the brief calls for one, keep it calm + sparse.

---

## How to use this doc

1. When writing a storyboard prompt or video prompt for a photoreal food spot, copy the relevant sections wholesale into your prompt.
2. Stack 3-5 of these vocabulary blocks at the front of your prompt to override the model's defaults.
3. Open with the David Loftus reference, close with the Kodak Portra emulation — sandwich the prompt with strong anchors.
4. Always include the negative anchors. They kill stock-photo output.

Reference back to this when iterating on Garlic High, future ramen clients, Salvia Lion, or any premium product ad.
