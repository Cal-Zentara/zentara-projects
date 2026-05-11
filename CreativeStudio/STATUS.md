# STATUS — CreativeStudio

*Last updated: 2026-05-10*

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

## Waiting on
- Salvia Lion stickers to arrive — all hero shots and video will be redone with the real branded label once available

## What's next

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
- `advertising-masterclass.md` — research on what converts for spiritual wellness
- `CLAUDE.md` — full winning formula, video rules, gotchas
