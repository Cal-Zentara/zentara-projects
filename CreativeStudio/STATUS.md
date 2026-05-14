# STATUS — CreativeStudio

*Last updated: 2026-05-14 — Garlic High photoreal intro ad, VO testing in progress*

## Completed this session (2026-05-14 — Garlic High photoreal intro)

- **New direction locked:** Photoreal commercial intro using Cal's real food photos (not AI-generated food). Two photos — ramen (`IMG_4322`) + mazesoba (`IMG_4430`) — used as storyboard reference.
- Ran full `creative-pipeline` skill end-to-end: storyboard → video → FFmpeg post. First real photoreal test.
- Storyboard `storyboard_intro_v1.png` approved. 12-panel, both bowls, no hands, no characters.
- Seedance gen `garlichigh_intro_raw_v1.mp4` — Cal rated C+. Kept it, moved to post.
- Dropped end card (`soon.png`) — Cal said too cheesy for this ad.
- VO testing in progress — wrote new 4-line VO script matched to the actual video. Testing ElevenLabs voices. Juniper currently the best fit.
- Fixed FFmpeg audio mapping bug — was pulling Seedance audio instead of the VO file. Fixed with explicit `-map 0:v -map 1:a`.
- Locked motion rule: **no "Hold longer on this final shot"** — always use slow motion or camera drift on final frame. Updated `system-prompts/video-prompt-architect.md` and Garlic High `CLAUDE.md`.
- Used real food photos to fix the core problem: three AI photoreal attempts failed because AI can't do premium food. Real photos solved it instantly.

**Where we left off:**
1. VO not finalized — still testing voices in ElevenLabs
2. Once VO locked: mix with `Garlic High.mp3` background music and final render
3. Optional 720p/1080p upgrade after content approved

## Completed this session (2026-05-13 — late night — Jiro explainer PARKED)

The Jiro explainer photoreal direction is officially scrapped. Cal pulled the plug after three iterations.

- Cal shot 16 real photos at the Garlic High shop (in `C:\Users\Aesth\Desktop\Images\food\`) — hero bowls, Mazesoba top-downs, noodle lifts with "POR FAVOR" sign visible, brothless variants. Real food, real shop light, real chaos.
- Built v1 of the Jiro explainer using FFmpeg Ken Burns push-ins on the real photos + existing VO + Soy Steam Symphony at 25% + soon.png end card. Saved at `clients/Garlic-high/outputs/jiro_explainer_REAL_v1.mp4`.
- Cal vibe-checked v1 — wanted always-on captions with hero word emphasis. Rebuilt as v2 with full caption track (15 drawtext layers, GARLIC/JIRO-STYLE/MAZESOBA pumped to 200-240px). Saved at `jiro_explainer_REAL_v2.mp4`.
- Cal called v2 "bland." Rebuilt as v3 with manga-poster styling — thick black outlines, red drop shadows, hero words slammed center-frame instead of bottom. Saved at `jiro_explainer_REAL_v3.mp4`.
- Cal called v3 "very unprofessional. no one is going to pay me for this." Pushed back on the WHOLE approach — not just the captions.
- Researched real AI food commercial campaigns (Popeyes Veo 3 diss track, Kalshi NBA Finals $2000 ad, Sora burger ad creators on TikTok/YouTube). Pattern that emerged: **AI-led ads that work LEAN INTO being AI — surreal, comedic, impossible. AI-led ads that try to fake photoreal food → small creators, low engagement. Major food brands using AI → packaging/copy/social, NOT hero food video.**
- **The insight that ended the night:** Cal said "I've been trying to make it perfect and not fun... that's the problem." The McDonald's-explainer brief was chasing AI's weakest category (photoreal premium food cinematography). The original Garlic High anime direction is AI's STRONGEST category (impossible physics, illustrated chaos, exaggerated everything).
- Saved feedback memory: `feedback_ai_creative_fun_not_perfect.md` — AI creative works when it's fun, not perfect. Trying to make AI photoreal/premium fights the tool.
- Logged JOURNEY entry: "I Was Putting AI In A Turtleneck" — full lesson + scroll-stopping content idea ("AI doesn't want a turtleneck. It wants a cape.")

**DECISION:** Park the Jiro explainer entirely. Pick up the anime concept (4-shot WILD ANIME plan, Bowl SLAM already approved) tomorrow morning. May 20 launch ships with the anime ad, not the explainer.

**Where we left off (next session pickup):**
1. Drop the Jiro explainer — it's done. Build artifacts can stay in `outputs/build_v1/` as reference but no more work on this direction.
2. Resume the anime ad: 3 shots left to generate (Garlic NUKE / Noodle WHIRLWIND / Power-UP). Bowl SLAM (`outputs/shot1_bowl_v2_slam.mp4`) is already approved.
3. Use existing locked start-images: `Images/hgshot1.png` (Garlic NUKE), `Images/hgshot3_noodle.png.png` (Noodle WHIRLWIND), `Images/hgshot3.png` (Power-UP).
4. Music + end card already locked (Garlic High.mp3, soon.png).
5. Final order: Bowl SLAM → Garlic NUKE → Noodle WHIRLWIND → Power-UP.
6. Generate at 4 sec each (Seedance min), trim to 3 sec, stitch, slam end card. SFX layer in Descript.

## Completed this session (2026-05-13 — Garlic High Jiro explainer pivot)
- Ran the `creative-pipeline` skill for the first time on Garlic High. Started with 7-day Torrance teaser direction, mid-session Cal added that Yorba Linda also opens May 20 → two-city grand opening → pivoted entirely to McDonald's-style calm explainer ad. New direction sells the product to a US audience that doesn't know what Jiro ramen IS.
- Pulled brand voice from Cal's website: https://cal-zentara.github.io/garlic-high-demo/. Locked phrases: "Thick. Garlicky. No Mercy." / "Savage & Happy Ramen" / "Born Tokyo, 1968." / "Extra-thick noodles, rich pork broth, fresh garlic with zero restraint."
- Locked three product references in `C:\Users\Aesth\Desktop\Images\`: `AdRamen.png` (hero ramen photo), `AdMazesoba.png` (Mazesoba photo), `GHLogo.png` (clean brand wordmark).
- **Research:** Ran 7 parallel Haiku agents on fast food commercial production. Synthesized output into `docs/fast-food-commercial-production-vocab.md` — reusable paste-ready vocab for any premium photoreal food ad. Covers cinematography (85mm macro, 3200K key, 3500K rim), food styling (glycerin noodles, dry-ice steam, droplet suspension), color grade (Kodak Portra 400H, crushed blacks), Japanese ramen ad signatures, money shots, AI prompt anti-defaults, and audio direction.
- Locked the new direction: photoreal premium TV commercial, 7 panels, no characters, no hands/arms anywhere, voiceover-driven (no text overlays), panel 7 candid documentary-style (NOT polished logo card).
- Iterated through 6 storyboard versions:
  - v1 — anime Torrance teaser (scrapped after pivot)
  - v2 — first McDonald's-style draft (too basic, low quality)
  - v3 — fixed brand close with logo + shop interior (logo too dominant)
  - v4 — bowl-being-placed scene (returned single panel only, not full sheet)
  - v5 — re-ran panel edit with full-sheet preservation (worked but duplicated panels on bottom-left)
  - v5 manually composited → `storyboard_jiro_FINAL.png` (FFmpeg crop + vstack — clean 6-panel grid + wide hero close)
  - v6 — full regen with NO HANDS rule and candid documentary panel 7 — awaiting Cal's approval
- Updated Garlic High `CLAUDE.md` with new direction section. Anime direction parked as fallback.
- Saved memories: `project_garlichigh_jiro_explainer.md` + `feedback_brand_close_no_ai_slop.md`.

**Where we left off (next session pickup):**
1. Cal to approve v6 storyboard at `clients/Garlic-high/outputs/storyboard_jiro_v6.png`
2. If approved → Phase 4 (Seedance video prompt with NO HANDS constraint)
3. Phase 5 (Seedance video gen, 480p test, --duration 15)
4. Generate music in Suno: "Warm acoustic + light koto pluck, 85 BPM, dreamy looped melody, no vocals" — NOT the existing anime track
5. FFmpeg post: trim 13s, layer music, no end card (panel 7 IS the brand close)

**Key gotcha confirmed this session:** `nano_banana_2` sometimes returns just the edited panel as a single image instead of the full contact sheet. Fix: include explicit "OUTPUT MUST BE THE COMPLETE CONTACT SHEET" language. Fallback: manually composite via FFmpeg crop + vstack.

## Completed earlier this session (2026-05-13 — creative-pipeline skill build)
- Researched Higgsfield CLI capabilities in depth. **Major finding:** `--audio` IS a real flag for Seedance 2.0 CLI. What silently fails is `--generate_audio` (doesn't exist on Seedance 2.0, only exists on `marketing_studio_video`). Updated studio root CLAUDE.md and Garlic High CLAUDE.md to fix the wrong gotcha.
- Built **`creative-pipeline` skill** at `.claude/skills/creative-pipeline/SKILL.md`. Walks Claude through full storyboard-first pipeline: setup → storyboard prompt → image gen → approval gate (regen full / edit panel / approve) → video prompt → video gen → FFmpeg post (trim + music + end card) → log + save. Babysit mode — pauses for user approval at every step.
- Wrote two locked system prompts:
  - `system-prompts/storyboard-architect.md` — Joey's free version, verbatim (turns brief + product image into 12-panel storyboard prompt)
  - `system-prompts/video-prompt-architect.md` — custom Seedance video prompt architect (the "secret" from Joey's paid community). Reads storyboard + brief → writes Seedance 2.0 video prompt with all Garlic High lessons baked in (NSFW trap words + soft replacements, energy/physics language, diegetic audio rule, character anchor rule, 2000-char cap).
- Saved design doc at `docs/superpowers/specs/2026-05-13-creative-pipeline-skill-design.md` with v1 (Cal's version) / v2 (shareable friend version) build phases.
- Saved skill backup at `_skill-backups/creative-pipeline.SKILL.md` for git.
- Decided: NO web app, NO Higgsfield Canvas clone, NO node graph. Skill-based pipeline that runs through Claude Code. Cal + friend each install on their own machines, each use their own Higgsfield CLI credits + Claude API. Same recipe, identical output quality.

**Build order locked (the build the user wants to repeat for future tools):**
1. Write the locked system prompts FIRST (the magic is here, not in the plumbing)
2. Write the skill file SECOND (just CLI commands + approval gates + file paths)
3. Backup to git
4. Test once on a real client
5. Save session

## Completed this session (2026-05-13 — storyboard-first pivot)
- Pivoted Garlic High to **storyboard-first workflow**. One 12-panel storyboard image → one Seedance gen animating across it → FFmpeg post for music + end card. Replaces shot-by-shot generation as primary.
- Tried Higgsfield Canvas `1image2fullAD [lite-version]` template — works but the lite version's second LLM node doesn't generate proper Seedance video prompts (just describes the storyboard). Cal pasted manual prompt into Video Generation node to bypass.
- Canvas first output: `C:\Users\Aesth\Downloads\hf_20260513_055126_5b50b4d1-e1a8-4be1-b0a6-08221fba692a.mp4` (silent, 15s).
- CLI version: ran Seedance via CLI with the locked storyboard as `--image` and our anime grammar prompt. Output: `garlichigh_cli_v3.mp4`.
- **Final reel: `C:\Users\Aesth\Downloads\GarlicHigh_CLI_final_v3.mp4`** — 16s, music baked in via FFmpeg, `soon.png` end card appended. Trimmed at 13.0s to cut Seedance's appended storyboard frame.
- Workflow documented in studio root `CLAUDE.md` ("Workflow Options" section). Garlic High `CLAUDE.md` now lists storyboard-first as primary, shot-by-shot v3 WILD ANIME as fallback.
- Saved project memory `project_garlichigh_workflow.md`.

**Operational gotchas learned this session:**
- `--audio` to Seedance CLI **silently breaks the gen** — auto-sets `generate_audio: true` which isn't supported. Status returns `failed` with no error. Always bake music in via FFmpeg post.
- FFmpeg `-c copy` trim doesn't cut on non-keyframes — re-encode to get a clean cut.
- Seedance appends source storyboard frame at ~13.5s of a 15s gen. Always trim before adding end card.
- Aggressive verbs (violently, detonates, rip, blast, glare, lock) trigger NSFW filter. Soften to "lands hard, lift sharply, rushing, looks, lifts."

## Completed this session (2026-05-11, late evening — discovery skill)
- Built new skill `creative-discovery-client` — video-first 6-question intake interview that scaffolds the full client folder (brief.md, CLAUDE.md, assets/, outputs/) and adds a row to STATUS.md. Triggers on "new client", "client discovery", "starting a new client".
- Two optional extras after lock: background niche research (subagent) + 3 cheap exploration images. Both opt-in.
- Retired stale `client-creative` skill — Salvia-Lion-era product-photo workflow superseded by current video-first flow.
- Skill backup saved to `_skill-backups/creative-discovery-client.SKILL.md` (since `.claude/` is gitignored).
- Committed global `.claude/` snapshot at `C:/Users/Aesth/.claude` — 91 pending changes resolved in one snapshot commit (new global skills, expanded impeccable references, research-to-connect API docs).
- Committed tracker fix (`log-from-json.js` handles `result_url` / `result_urls[0]` JSON shapes) + first Lucy test image from the banana-pro-director skill validation.
- Date corrections: STATUS.md + JOURNEY.md entries flipped from 2026-05-12 → 2026-05-11.

## Completed this session (2026-05-11, evening)
- Installed Joey's two new free Claude skills — `banana-pro-director` (image prompts) and `cinema-worldbuilder` (Seedance video prompts) at `.claude/skills/`
- Added a "CreativeStudio CLI Integration" section to both skills so they run via Higgsfield CLI with auto-log to Google Sheet (overrides Joey's default "paste into web UI" workflow)
- Resolved image model conflict — deleted the global memory file `feedback_higgsfield_image_model.md` that said "always use gpt_image_2"; CLAUDE.md's rule wins now (soul_cinematic for faces/outfits, nano_banana_2 for everything else, gpt_image_2 only for text)
- Moved Joey's 15 Zephr example prompts out of CLAUDE.md into new file `zephr-prompt-examples.md` (reference only, can delete after skills prove themselves)
- CLAUDE.md slimmed from 339 → 198 lines
- Updated Quick Nav to point to the new Zephr file
- **All untested — first real client gen is the validation moment**

## Completed this session (2026-05-11, Garlic High demo work)
- Shot 1 (bowl slam) v2 generated and APPROVED for Garlic High demo
- All Shot 2/3/4 start-images regenerated for stronger anime motion (mid-action poses, 3/4 angles)
- B-roll concept pivoted: cozy noodle macro → feral mouth close-up (matches "Savage & Happy" brand)
- Shot 2 v1 BLOCKED by NSFW filter — "glare/jaw tight/lock onto camera/bright flash" combo triggered it; softer rewrite passed
- Shot 2 v2 generated but Cal says too quiet — psychological beat doesn't sell for Reels
- Added universal CreativeStudio rule: regenerate start-image before video when it would improve output (cheap retry beats expensive video retry)
- Added universal rule: no blockquote sidebars in prompts/summaries
- B-roll mood word locked: "feral" instead of "demolition" (warmer, matches Savage & Happy)
- Tracker still broken — credentials.json missing — pushed through without logging

## Completed this session (2026-05-11, late — wild anime pivot)
- **Concept reset → v3 WILD ANIME locked.** Two earlier passes (cozy v1, savage stares v2) confirmed: every shot needs food-as-hero + impossible physics. No psychological beats. Shot 1 was the only one that hit because the food was the star.
- New 4-shot structure: Bowl SLAM ✓ / Garlic NUKE (chef cleaver, lights flicker) / Noodle WHIRLWIND (chopsticks vortex, frozen broth droplets) / First Bite POWER-UP (eyes flash white, aura, dragon steam from ears).
- Garlic High CLAUDE.md updated: new Locked Video Concept v3 + new Shot 2/3/4 prompts written.
- Three new start-image prompts written for Cal to generate (Shot 2/3/4 setups, all "half-second before impact" framing).
- B-roll cut from plan — 4 shots only, every shot is its own impact.
- Saved feedback memory: "Push AI video to the wild version, not the safe one" — for future creative work, lead with the impossible version first.

## What's next (creative-pipeline skill)
- **First real test run:** Trigger `/creative-pipeline` on Garlic High. Use existing locked storyboard (`hf_20260513_053145_695db5f1-...png`) as input or generate fresh. Validate: storyboard prompt quality, video prompt quality, NSFW pass, FFmpeg post correctness, log to Sheet.
- If first run passes → mark skill as production-ready. If not → tune whichever phase broke.
- v2 (friend's generic mode): not yet started. Ship after v1 proves itself.
- Skill backup committed to git in next commit.

## What's next (Garlic High — paused May 12 session 2)
- All start-images locked. Tracker fixed. End card updated to soon.png (cities + franchise angle).
- Generate Shots 2, 3, 4 via Seedance CLI (4 sec each, trim to 3 sec)
- Final order: Bowl SLAM → Garlic NUKE → Noodle WHIRLWIND → Power-UP
- Music: Garlic High.mp3 bake-in (cut into 4 x 3-sec segments)
- SFX: Shonen SFX pack (heltonyan.itch.io) — apply in Descript after stitching
- Slam soon.png end card over Shot 4 in post
- See clients/Garlic-high/CLAUDE.md for full step-by-step

## What's next (OLD — superseded by wild anime pivot above)
- Cal to choose: add physical action to Shot 2 / move eye-lock to Shot 3 / cut Shot 2 entirely
- Generate Shots 3, 4, B-roll
- Trim + stitch in FFmpeg → 10-12s final reel
- Text overlay + NOTICE end card

## What this is
AI-powered creative studio using Higgsfield CLI to generate product ads and content for clients.

## What's live
- Higgsfield CLI installed ✅
- Higgsfield auth completed ✅
- All 4 Higgsfield skills installed ✅
- Google Sheets tracker live ✅ — 10+ rows logged, formatted with short URLs and dark header
- Salvia Lion reference images copied ✅ — EsponSalt.jpeg, WhiteTLavender.jpeg, ChamomileLavender.jpeg
- **Hero product shot formula locked ✅** — dark velvet, single candle, matching crystal per scent
- White Tea Lavender hero image generated ✅
- **Video formula tested ✅** — Seedance 2.0, 480p, 1:1, bathtub format, products on tub edge
- 3-clip collection video output: `clients/salvia-lion/three-scents-v3.mp4` ✅ (on desktop for review)

## Completed this session (2026-05-05, continued)
- Generated White Tea Lavender hero shot (clear quartz + dried lavender sprigs)
- Fixed Google Sheet formatting — short URLs, column widths, frozen header, dark header row
- Marked approved/rejected rows in sheet (4 approved hero shots, 1 rejected)
- Discovered Higgsfield CLI credits are raw units (divide by 100 = website cost)
- Discovered Higgsfield app and Cloud are separate platforms with separate credit pools
- Tested video generation — Seedance 2.0 at 480p 1:1 is cheapest (~0.3 credits/generation)
- Landed on winning video format: product sitting on bathtub edge, steam, candles, botanicals
- Generated 3-clip collection video: White Tea Lavender + Chamomile Lavender + full collection wide shot
- Sticker.jpeg discovered — the real Salvia Lion branded label. Decision: wait for stickers before generating production content.

## Current best video output
`clients/salvia-lion/three-scents-v3.mp4` — 12 seconds, 3 products, no audio, on desktop for second opinion

## Completed this session (2026-05-09)
- Onboarded Garlic High as second client — `clients/garlic-high/brief.md` with full visual identity locked
- Built auto-logging system — `tracker/log-from-json.js` pipes Higgsfield JSON output directly to Google Sheet on every generation
- Built PowerShell system-level wrapper — `higgsfield` command auto-logs for any generation (manual or via Claude). Set client with `Set-HiggsfieldClient <name>` once per session.
- Added `.gitignore` — credentials.json and token.json protected from git
- Fixed Google Sheets tracker — re-linked to correct sheet, all 4 Garlic High generations logged
- Logged Garlic High ramen shop iterations: noren direction, yellow chef coat approval, ghost NPC, final solid NPC asset

## Completed this session (2026-05-11)
- Added Cal as a client — `clients/cal/` with CLAUDE.md, brief.md, prompts.md
- Moved AI influencer files from ZentaraHQ knowledge base into CreativeStudio
- Added Lucy and Cal to client table in STATUS.md

## Completed this session (2026-05-10)
- Locked Garlic High video production rules: 90s anime illustrated style, split-track music method, one emotion (HUNGRY), 9:16 reel format
- Generated music track "Static Sunlight" on Suno — instrumental, no vocals. Source: `C:\Users\Aesth\Desktop\Static Sunlight (1).mp3`
- Wrote 4-clip video concept (4s each = 16s total): street approach → enters shop → food arrives → first bite
- Regenerated shots 3 & 4 with correct emotion (hungry, eyes open) — approved
- Tested Shot 1 generation — two issues found: wrong direction (walked away from camera) + @Audio1 tag missing. Corrected prompt saved in `clients/garlic-high/CLAUDE.md`
- Created `clients/garlic-high/CLAUDE.md` — all formulas, prompts, issues, and assets locked

## Clients
| Client | Status | Notes |
|---|---|---|
| Salvia Lion | Waiting on stickers | All formulas locked. Redo hero shots + video once branded labels arrive. |
| Garlic High | Active — video in progress | Shot 1 corrected. Shots 2-4 prompts pending. Shop image needs regen (empty seat). |
| Lucy (@xolucy.pearls) | Active — 2 posts live | AI influencer for Nail'd It Spa. Character locked. 4 prompts ready. Building to 6–9 grid posts. |
| Cal (Zentara) | Setup — not yet generated | AI influencer for Zentara. 3 prompts written. Blocked on Soul ID character generation. |

## Waiting on
- Salvia Lion stickers to arrive — all hero shots and video will be redone with the real branded label once available

## What's next

**Test the new skills (priority — blocks deleting Zephr examples):**
1. Pick one client (likely Cal or Lucy — both fit Joey's defaults)
2. Run one simple gen through the new skill — image first, video second
3. Check that the CLI command Claude generates actually runs without flag errors
4. Check that the gen auto-logs to the Google Sheet
5. If skills pass → safe to delete `zephr-prompt-examples.md`. If not → patch the skills' CLI section.

**Garlic High (priority):**
1. Regenerate ramen shop image with one empty stool on the right
2. Retry Shot 1 with corrected prompt (direction + @Audio1)
3. Write + generate Shots 2, 3, 4
4. Stitch 4 clips with FFmpeg
5. If quality good → upgrade to 1080p for final version

**Salvia Lion (waiting):**
1. When stickers arrive — take one clean product photo per scent
2. Redo hero shots with branded label as reference
3. Redo video clips with branded product

## Key files
- `clients/salvia-lion/` — all generated outputs (images + videos)
- `tracker/` — Google Sheets logging scripts (log.js, format.js, mark-approved.js)
- `clients/salvia-lion/advertising-masterclass.md` — research on what converts for spiritual wellness
- `CLAUDE.md` — full winning formula, video rules, gotchas
