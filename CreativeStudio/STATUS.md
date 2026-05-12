# STATUS — CreativeStudio

*Last updated: 2026-05-11*

## Completed this session (2026-05-11, evening)
- Installed Joey's two new free Claude skills — `banana-pro-director` (image prompts) and `cinema-worldbuilder` (Seedance video prompts) at `.claude/skills/`
- Added a "CreativeStudio CLI Integration" section to both skills so they run via Higgsfield CLI with auto-log to Google Sheet (overrides Joey's default "paste into web UI" workflow)
- Resolved image model conflict — deleted the global memory file `feedback_higgsfield_image_model.md` that said "always use gpt_image_2"; CLAUDE.md's rule wins now (soul_cinematic for faces/outfits, nano_banana_2 for everything else, gpt_image_2 only for text)
- Moved Joey's 15 Zephr example prompts out of CLAUDE.md into new file `zephr-prompt-examples.md` (reference only, can delete after skills prove themselves)
- CLAUDE.md slimmed from 339 → 198 lines
- Updated Quick Nav to point to the new Zephr file
- **All untested — first real client gen is the validation moment**

## Completed this session (2026-05-12)
- Shot 1 (bowl slam) v2 generated and APPROVED for Garlic High demo
- All Shot 2/3/4 start-images regenerated for stronger anime motion (mid-action poses, 3/4 angles)
- B-roll concept pivoted: cozy noodle macro → feral mouth close-up (matches "Savage & Happy" brand)
- Shot 2 v1 BLOCKED by NSFW filter — "glare/jaw tight/lock onto camera/bright flash" combo triggered it; softer rewrite passed
- Shot 2 v2 generated but Cal says too quiet — psychological beat doesn't sell for Reels
- Added universal CreativeStudio rule: regenerate start-image before video when it would improve output (cheap retry beats expensive video retry)
- Added universal rule: no blockquote sidebars in prompts/summaries
- B-roll mood word locked: "feral" instead of "demolition" (warmer, matches Savage & Happy)
- Tracker still broken — credentials.json missing — pushed through without logging

## What's next (Garlic High, paused mid-session)
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
