# Zephr Prompt Examples — Joey's Higgsfield Reference Project

These are real prompts that produced real results in Joey's Zephr music video — 5 K-pop characters in mech suits, monster invasion, post-apocalyptic SoHo, fully built in Seedance 2.0.

**Status:** Reference only. Kept as a fallback while we validate that the new skills (`banana-pro-director` + `cinema-worldbuilder`) produce equally good outputs. If the skills hold up across real client work, these examples can be deleted entirely — the skills encode the same logic.

**When to look at this file:**
- Comparing a skill's prompt output against a known-good Joey prompt
- Studying how Joey structured camera direction, anchor details, or dialogue
- Reverse-engineering a new skill or pattern

**When NOT to use these directly:**
- Don't copy-paste these prompts for client work — they're K-pop sci-fi specific. Use the skills to write fresh prompts custom to your client's scene.

Source: Higgsfield's own breakdown video of the Zephr trailer — 5 characters, a monster invasion, fully built in Seedance 2.0.

---

## Step 1 — Character Face (soul_cinematic)

Generate the face first. Run this same base prompt multiple times, pick the best bone structure.

> Young Asian female (age 20), slim, very attractive K-pop idol level beauty, flawless skin, soft symmetrical features, expressive eyes. Short/mid-length slightly messy stylish hair. White studio background, soft cinematic lighting, realistic, high-end fashion style.

---

## Step 2 — Outfit Only (soul_cinematic)

Separate prompt. No face. Check that every accessory survives — if a strap or belt disappears between gens, add it back explicitly now.

> Mustard yellow latex crop top, long sleeves, high gloss shiny finish, fitted. Oversized baggy khaki cargo pants, multiple large side pockets, knee pad panels, tapered and gathered at the ankle, wide buckle belt at the waist. Burnt orange lace-up combat boots, chunky sole, mid-calf height. Midriff exposed. Street style meets tactical utility. Holographic glitter bandage across the nose bridge.

---

## Step 3 — Fusion (Nana Banana Pro → final reference image)

Pass both images into Nana Banana Pro with this prompt. Output = the locked character. Every future Seedance gen checks against this.

> The character from image 1 wearing this outfit from image 2. Full body shot, white studio background, soft cinematic lighting, realistic.

---

## Creature / Enemy (nano_banana_2)

Same white background + product-render lighting — just applied to a non-human asset.

> A massive alien creature with an arachnid-like body structure, multiple long serrated limb-blades splayed wide, heavy armored carapace covered in jagged spines and organic plating. Glowing molten core visible at the chest. Textured surface mixing hardened shell, wet organic tissue, and cracked stone-like hide. Low crouching stance, front-facing, menacing. White background, soft shadow beneath, product-render style lighting. Hyper-detailed, cinematic realism.

---

## Mech Suit — Reveal Shot (Seedance 2.0, video)

Camera movement is part of the prompt. This is a video gen, not an image.

> A massive angular bipedal mech suit — white and grey segmented armor panels with teal-green accent plates on shoulders and torso, dark gunmetal joints and hydraulic limbs — standing upright in a dramatic wide shot. The cockpit chest cavity is a transparent hexagonal glass pod revealing a female pilot inside seated at controls. The mech holds two semi-automatic pistols at its sides. Cinematic studio lighting, near-white background, photorealistic hard surface detail, sci-fi action game concept art aesthetic. Camera slowly orbits around the mech from front to side profile, depth of field on the full silhouette.

---

## Scene — Character Introduction in Cockpit (Seedance 2.0)

Once the character is saved in Higgsfield, reference her by tag. Anchor details (lollipop, nose bandage) go in the prompt to hold consistency.

> @HARU is inside a dark, utilitarian, gritty sci-fi vehicle cockpit, surrounded by metallic panels, exposed wires, and a black racing seat with subtle red accents. The scene begins with a tight medium close-up on her chest and mouth, illuminated by dim, focused ambient light that dramatically highlights the sheen of her top. The camera is static but then jolts as she unbuckles a black seatbelt, leading to a quick cut. A sudden, jarring pivot and pan quickly transitions to a tight close-up of her face, now lying on her side, framed through a narrow opening in the mech's interior. Her short, curly brown hair is messy, a sparkling silver bandage adorns her nose, a white strip rests on her upper lip, and a yellow lollipop protrudes from her mouth. Her wide eyes snap open in sudden, quirky surprise, reflecting the low, ambient light, as the camera holds static on her vulnerable yet peculiar expression. The visual style is gritty sci-fi, emphasizing detailed textures and a blend of suspense and unexpected innocence.

---

## Scene — Mech + Pilot, Exterior City (Seedance 2.0)

Two reference tags: one for the character, one for her mech. Dialogue written directly into the prompt — Seedance generates the delivery.

> A @ZERO-MECH, its right arm poised, having just caused a massive impact, stands amidst a desolate, futuristic cityscape. Towering, derelict skyscrapers loom under a bright, clear daylight sky, as dust and debris erupt violently around the mech. The harsh, direct daylight casts sharp shadows, imbuing the scene with a powerful, urgent, post-apocalyptic action mood. A low-angle wide shot emphasizes the mech's immense scale, with a strong camera shake from the impact. The perspective then shifts to a medium shot inside a hyper-realistic, metallic, utilitarian futuristic mech cockpit, where @ZERO casually reclines in the pilot's seat, looking up contemplatively. Multiple screens display holographic data within the cockpit, while the exterior view through the reinforced glass reveals the same destroyed urban landscape. The interior is lit by practical, diffused lights mixing with the bright external daylight, creating a focused, determined, and intense atmosphere. The camera transitions from a medium shot of her moving, with continued slight camera shake, to a static medium close-up, capturing her focused expression. She's saying "Spotted her. Sending a mark", conveying an intense and powerful resolve. The camera holds a steady medium close-up. The entire scene is rendered in high-fidelity CGI, cinematic, and action-movie style, typical of a dystopian sci-fi genre.

---

## Scene — Action + Dialogue + Physics (Seedance 2.0)

Personality traits written as words ("arrogant," "rebellious"). Dialogue written in. Consequence described at the end — hair blown back from recoil, hands stay firm.

> A powerful cinematic sequence: the camera pushes in and tracks dynamically, from a slightly low angle, focusing on the mech's aggressive stance and its primary weapon, in a gritty sci-fi action style. Then, a sharp cut to the dark, intricate interior of the mech's cockpit, where @REINA sits confidently at the controls. She takes a long, slow drag from a cigarette, exhaling a plume of smoke, her expression a mix of calm resolve and subtle anticipation. The dim, functional cockpit lighting casts dramatic shadows across her face as the camera slowly pushes in on her intense gaze, creating a cool, confident, and slightly rebellious mood as she states, "I hope I will be MVP today." Cut back to a medium shot of the mech, now precisely aiming its massive cannon down the ruined street under the same subdued lighting, ready to fire. Finally, a static medium close-up shot of the woman in the cockpit, her hair dramatically blown back by the immense recoil as the cannon fires off-screen, yet her hands remain firm on the silver joysticks, and her steely, confident expression never wavers, maintaining an intense and powerful action-driven mood in this thriller.

---

## Scene — Personality-Driven Dialogue (Seedance 2.0)

One line of dialogue defines the character completely. Don't describe the line — write the line.

> A high-fidelity cinematic video featuring @NAOMI, first seen in a dramatic medium close-up, her left hand resting gently on her cheek, a playful, subtly seductive smile on her lips, illuminated by soft, directional key lighting in the dark, high-tech interior of a futuristic cockpit, the shot static. The camera then cuts to a wider static medium shot, revealing her holding dual joysticks, her expression shifting to powerful determination within the brightly lit cockpit. She jokingly says: "Double penetration? Will a third one fit?"

---

## Scene — Cockpit → Exterior Action (Seedance 2.0)

Intimate moment cuts straight to mech in the street. One prompt, two completely different scales.

> @MIRA applies vibrant red lipstick to her full lips, her gaze direct and intense. The camera performs a smooth, cinematic push-in from an extreme close-up on her mouth and hand to a close-up on her face, revealing the subtle details of her skin and the futuristic cockpit interior with its soft, ambient console lights. Her expression is confident and slightly alluring. She says: "Sorry for being late." The scene abruptly cuts to a dynamic low-angle tracking shot, following the mech's heavy, ground-pounding strides across a desolate, debris-strewn city street and a broken wooden surface. The camera smoothly transitions to a medium close-up, tracking the mech's cockpit, clearly revealing the focused female pilot within the transparent canopy. The shot then expands into a wide, cinematic view, pulling back and tilting slightly upwards as the formidable mech runs, then dramatically skids to a halt, kicking up a cloud of dust on the ruined street. Towering, dilapidated skyscrapers frame the post-apocalyptic cityscape under a harsh, backlighting sun that creates a hazy, dust-filled atmosphere and intense lens flares, amplifying the gritty, action-packed, and melancholic mood of this realistic sci-fi action epic.

---

## Scene — Physics / Consequence Only (Seedance 2.0)

Don't write the action. Write what the force does to the body.

> A dynamic close-up of the mech now precisely aiming its massive cannon down the ruined street under the same subdued lighting, ready to fire. A massive rifle firing with a powerful recoil in the sunny, ruined city. Finally, a static medium close-up shot of @REINA in the cockpit, her hair dramatically blown back by the immense recoil as the cannon fires off-screen, yet her hands remain firm on the silver joysticks, and her steely, confident expression never wavers, maintaining an intense and powerful action-driven mood in this mecha thriller.

---

## Scene — Multi-Asset Combat (Seedance 2.0)

Three reference tags in one prompt: environment, creature, mech. This is how you pull all your built assets into a single scene.

> Generate a high-fidelity, hyper-realistic sci-fi action sequence set in @CITY, clear daylight. The camera quickly whip-pans to a medium shot revealing a @MONSTER, resembling a monstrous insectoid with a fearsome maw, mid-air and attacking a massive, heavily armored @MIRA-MECH. As the monster lunges, the mech's powerful, drilling arm swiftly thrusts forward in a rapid push-in close-up shot, brutally impaling the monster's head with a sickening crunch and a violent explosion of dark, crimson blood and gore splattering across the frame.

---

## Dance — K-Pop Formation, Spotlight Stage (Seedance 2.0)

**Music goes INSIDE the generation.** Generate the track in Suno first. Upload it into Seedance with this prompt — the model reads the beat before generating a single frame. Less prompt = better sync. Don't choreograph — just say "K-pop formation" and let Seedance work.

> A wide cinematic shot opens on @ZERO, @MIRA, @HARU, @REINA, @NAOMI — a K-pop group with an edgy, futuristic aesthetic, emerging from deep shadow into a dramatic, crisp spotlight that cuts through a smoky, desolate stage. @HARU commands attention. The overall setting is a minimalist, dark studio with a smooth, dark floor, creating a stark contrast with the brilliant overhead light. As the camera slowly pushes in with a fluid, deliberate motion, the dancers begin their powerful, confident choreography, their movements sharp and synchronized, radiating an intense, high-energy atmosphere. Dynamic cuts transition from a medium full shot to a tight medium shot, capturing the lead dancer's expressive face and then quickly back to the full group, showcasing their collective power. The lighting remains stark and theatrical, emphasizing shadows and highlights, enhancing the sleek, hyper-realistic visual style of a high-production K-pop music video in stunning 4K. The camera continues its dynamic movement, subtly panning and dollying to follow the intricate dance, maintaining an immersive, performance-driven mood.

---

## Dance — K-Pop Formation, Cyberpunk Studio (Seedance 2.0)

Same formation, different staging. Rectangular panels instead of spotlight. More cyberpunk, less theatrical. Use as a variation when the spotlight version isn't the right vibe.

> A high-definition K-pop music video featuring @ZERO, @MIRA, @HARU, @REINA, @NAOMI, performing a dynamic, sharp choreography. The setting is a minimalist, dark studio with a seamless dark gray floor and walls, subtly lit by soft, rectangular overhead panels casting cool ambient tones. Dramatic low-key lighting is focused on the subjects, with front and side key lights creating strong highlights on their diverse, futuristic, and tactical-inspired outfits. The mood is edgy, powerful, and mysterious, embodying a sci-fi cyberpunk aesthetic. The camera employs a mix of static and subtly moving shots, commencing with a full-body wide shot of the group, transitioning to dynamic medium close-ups on individual members, then returning to a wider shot as the group dances. A particular low-angle medium shot focuses on @REINA, followed by close-ups on her face and upper body, before concluding with a final full-body wide shot. The cuts are sharp and rhythmic, enhancing the energetic performance, with camera movements generally comprising subtle push-ins, pull-outs, and gentle pans to maintain a cinematic, high-production quality.

---

## Split Screen — Individual Cockpit Shots (Seedance 2.0)

Each character gets their own static clip. Edit them side by side in post. Keep these simple — the character does all the work.

**Naomi:**
> A static medium close-up from a slightly elevated angle, focusing on a determined @NAOMI. Her serious, intense gaze is fixed forward, suggesting deep concentration. She is seated within the detailed cockpit of a @NAOMI-MECH. The scene is bathed in soft, cool-toned cinematic lighting, subtly sculpting her features and the metallic interior, creating a tense, focused, and anticipatory mood. This hyper-realistic sci-fi film aesthetic is rendered with sharp focus and detailed textures, evoking a high-stakes space opera or action genre.

**Reina:**
> A high-fidelity cinematic render, in the style of a modern sci-fi action film. @REINA is seated in @REINA-MECH. Her gloved hands grip dual flight sticks, her dark hair slicked back, as she looks slightly upwards with a contemplative, determined gaze. The camera is a medium close-up, static shot, centered on her. Soft, diffused cool light illuminates the scene from above, casting subtle shadows and highlighting the metallic textures of the cockpit, creating a tense and anticipatory mood.

**Mira:**
> @MIRA is seated in the metallic, futuristic cockpit of @MIRA-MECH, her hands gripping twin joysticks. Soft, overhead ambient light casts a neutral glow, highlighting the details of her face and the machinery, creating a tense, anticipatory mood. This is a static medium shot, centered on the pilot, rendered with cinematic realism in a sci-fi action style.

**Zero:**
> A high-angle medium shot of a focused @ZERO seated in a @ZERO-MECH. Her hand rests gently on a console joystick. Soft, diffused overhead light illuminates the scene, enhancing the metallic textures and casting subtle shadows, while subtle operational lights from the cockpit add depth. The mood is calm, contemplative, and slightly tense, maintaining a realistic, high-fidelity cinematic sci-fi style. The camera is static.

**Haru:**
> A high-angle static shot looking down at @HARU. She holds a red lollipop in her slightly open mouth, with her tongue slightly visible, and looks directly up at the camera with a surprised or curious expression. She is seated in @HARU-MECH. The scene is lit by dramatic, focused overhead lighting, casting soft shadows and highlighting the glossy texture of her top and the contours of her face against the dark, mysterious environment. The atmosphere is a blend of futuristic sci-fi tension and youthful innocence, rendered with hyper-realistic detail and a high-fidelity visual style.
