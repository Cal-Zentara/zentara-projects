# UNIK Girls Playground — The Winning Formula (May 30, 2026)

This is the recipe that finally cracked the girls ad after ~6 failed versions. Cal's words: "that's our best one yet." Save this. Reuse this. Don't re-learn it the hard way.

## WHY it works (read this first)

AI video looks fake when you ask it to do **hard** things, and real when you ask it to do **easy** things. That's the entire secret.

- **Why one location:** every cut to a new room is the AI hallucinating a whole new world from scratch. Your brain catches the inconsistency and calls it fake. One place = it only has to build one believable world, and it holds.
- **Why grounded actions:** feet leaving the ground (jumping, swinging) and fast hands (clapping) are the hardest physics for AI — it floats and morphs. Walking and crouching are easy and weighted, so they look real.
- **Why eyes off the lens:** the AI is trained mostly on people performing for cameras, so "smile at lens" is its default. You can't tell it "don't" (it ignores negatives) — you have to make it impossible (shoot from behind) or give it somewhere else to look.
- **Why the camera carries energy:** if the energy comes from the kids doing wild stuff, the AI breaks. If it comes from the camera moving and the beat hitting, the kids stay easy-to-render and it still feels alive.
- **Why photoreal kids are the hardest subject of all:** you've seen a million real children, so the instant one moves slightly wrong your brain screams fake. (Sci-fi CGI gets away with murder because you have no real version to compare it to. Real kids = zero margin for error.)

**The one-line version: stop fighting the tool. Give the AI easy things and let the camera, the light, and the music carry the energy.**

Every version that slopped was us asking the AI for hard stuff. Every version that worked was us asking for easy stuff. That's the whole game.

## The 6 rules that made it work

1. **One location.** Four different rooms cutting every 3 seconds = the AI reinvents a new world each cut and your brain screams "fake." One believable place (a playground) the whole time = real. This was the single biggest fix.

2. **Grounded actions only. No airborne, no fast hands.** Walking, crouching, standing, drawing, looking — these animate clean. Jumping, swinging on a swing, hopscotch hops, hand-clap games, running, cartwheels — these FLOAT and morph because feet leaving the ground and fast hand-timing are the hardest physics for AI. Feet on the ground + slow = real. Airborne + fast = slop.

3. **The camera brings the energy, not the kids.** The kids do simple calm things; the CAMERA bounces, swings, pops in, skips across, follows. That's how you get "fun and fast" without asking the kids to do hard motion. Energy lives in the camera, the cut pace, and the music — never in the kids' bodies.

4. **Eyes on each other or their activity — NEVER the lens.** AI defaults to "smile at camera" because that's most of its training data, and it's bad at "don't." Telling it "don't look at the camera" often backfires. The fixes that WORK: (a) shoot key moments from behind so a face-to-lens is physically impossible, (b) give every girl a specific thing to look AT — each other, the chalk, the ladybug. A strong eyeline target beats a negative instruction.

5. **Real emotion, not "smiling."** "Smiling" is the lazy default the AI loves. Use specific emotions that also pull eyes off the lens: deep concentration (tongue out, brow furrowed), mischief (whispering a secret), wonder (looking at a ladybug), genuine mid-laugh at a friend (different from a frozen posed smile).

6. **Four clean beats max for 15 seconds. Each beat = one girl, one simple thing.** Don't cram. The boys ad had four beats and they each had room to breathe. Cramming six+ activities = each gets 2 seconds = nothing lands = slop. Camera moves and VO lines are NOT extra beats — they live inside the four.

## Other proven specifics

- **Golden-hour light is key.** "Drenched in warm golden-hour light, low sun raking across, flaring through the fence, long soft shadows, glowing amber." Threaded through every beat. Makes it feel warm and real instead of flat.
- **Camcorder look = anti-slop.** "Sony Handycam DCR-TRV, CCD sensor color, auto-exposure hunting, warm cast, digital noise, motion blur, handheld wobble." This is what makes it read as found footage, not an ad.
- **Connect the scenes.** The ending girl walks OVER to join one of the earlier groups (red girl joins the ladybug girls). Ties the playground together, ends on a warm group moment instead of a random clip.
- **A small anchor detail** (the ladybug) gives a real candid moment you'd never stage. Pure wonder. Single biggest "this feels real" lever after the camcorder look.
- **Use the 4 product photos directly as the asset.** Pass them as `--image` references. The girls came out perfectly consistent every time — drift was NEVER our problem. No need to build/lock characters like Joey did.
- **"Fun and fast," NOT "aggressive."** Camera verbs should be playful: bounces, swings playfully, pops in, skips across. Aggressive verbs (shoves, whips hard, slamming, hitting) read harsh AND trip the child-safety filter.

## Child-safety filter traps (these silently fail the gen)

- **Body-position words on kids** — "knee up," "one foot pushing off," "tongue poking out," "hands flying," "face-to-face." Describe the ACTIVITY, not the body arrangement.
- **A start-image showing a kid in an unusual pose** (a girl riding a cart, knee up) — the filter scans input images too. A normal standing/sitting reference passes; an odd-pose one fails.
- **Aggressive verbs** — slamming, rips, shoves, detonates, violently. Soften them all.

## The winning prompt (girls_seedance_v6 → girls_v6_endcard.mp4)

Settings: seedance_2_0, 4 product photos as `--image`, 15s, 9:16, 480p. ~2,370 chars.

Sony Handycam DCR-TRV consumer camcorder, CCD sensor color, auto-exposure hunting, warm color cast, soft digital noise, motion blur on movement. One continuous handheld take on an outdoor school playground, drenched in warm golden-hour light — the low sun raking across the blacktop, flaring through a chain-link fence, long soft shadows, everything glowing amber. Hopscotch chalk on the pavement, a swing set and monkey bars off to the side, a brick school behind. The whole film is one person bouncing around with a camcorder at chest height, quick and playful, having fun following their friends at recess, the camera light and lively, always moving, never quite steady.

The take opens moving quick at chest height alongside a sky blue polo girl and a burgundy polo girl as they walk and talk, leaning into each other cracking up mid-laugh at some joke, the gold light warm on their faces, eyes locked on each other, never on the camera. The camera swings over playfully to a hunter green polo girl crouched low over the pavement, drawing with chalk lit warm by the low sun, in deep concentration, brow furrowed, eyes down on her hand. The camera pops in close on the chalk, holds half a beat, then lifts and skips across the playground quick and light, landing on two girls crouched close together looking at a tiny ladybug on one girl's finger, heads almost touching, eyes wide with wonder, the golden light catching the little bug. The camera leans in gently. A warm female voice over drifts in, easy and bright: School is 6 weeks away. New year, new fits.

The camera swings around playfully and falls in behind a red polo girl as she heads across the blacktop toward the two girls with the ladybug, the low sun flaring warm behind her. The camera bounces along behind her at chest height, her backpack swaying, her face never to the lens. Voice over lands warm and clear: UNIQUE — school uniforms for every kid. She reaches them and crouches down to see the bug too, all three girls' heads together over it, haloed in the golden amber light. The camera leans in close, then settles and cuts to black.

Audio: a bright upbeat bouncy hip hop beat driving from the very first frame, fun and quick, popping on every cut. Under it — sneakers on blacktop, chalk scraping pavement, swing chains creaking, overlapping laughter, low recess voices, a warm breeze.

## Post (FFmpeg) — final assembly

- v6 ends with a 0.375s fade-to-black (starts at 14.625s). **Trim it.**
- End card hard-cuts in. Cal wants it **1 second**, no black before it.
- To keep audio running all the way: trim video at **14.0s**, run the 1s card from 14.0–15.0 so the video ends exactly when v6's 15s audio ends. No trailing silence.
- Client rule: **hard cuts only, no crossfades.** The audio carrying continuously over the cut is what keeps a hard cut from feeling jarring.

Final file: `outputs/girls_scenes/girls_v6_endcard.mp4` (15.09s). Also on desktop as `UNIK Ads/unik_girls_playground.mp4`.
