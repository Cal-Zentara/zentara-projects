# STATUS — CreativeStudio

*Last updated: 2026-05-05*

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

## Waiting on
- Salvia Lion stickers to arrive — all hero shots and video will be redone with the real branded label once available

## What's next
1. When stickers arrive — take one clean product photo per scent with sticker on bag
2. Redo hero shots with the branded label as reference
3. Redo video clips with branded product
4. Add text overlays to videos (product name, brand name, CTA)
5. Reverse-engineer winning prompts into reusable skills
6. Build `/new-client` skill for onboarding future clients

## Key files
- `clients/salvia-lion/` — all generated outputs (images + videos)
- `tracker/` — Google Sheets logging scripts (log.js, format.js, mark-approved.js)
- `advertising-masterclass.md` — research on what converts for spiritual wellness
- `CLAUDE.md` — full winning formula, video rules, gotchas
