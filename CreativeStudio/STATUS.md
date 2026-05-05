# STATUS — CreativeStudio

*Last updated: 2026-05-05*

## What this is
AI-powered creative studio using Higgsfield CLI to generate product ads and content for clients.

## What's live
- Higgsfield CLI installed ✅
- Higgsfield auth completed ✅
- All 4 Higgsfield skills installed ✅
- Google Sheets tracker live ✅ — `tracker/` folder, 10 rows logged
- Salvia Lion reference image copied ✅ — `clients/salvia-lion/EsponSalt.jpeg`
- **Hero product shot formula locked ✅** — dark velvet, single candle, matching crystal per scent, salt spill, macro

## Completed this session (2026-05-05)
- Set up Google Sheets tracker with OAuth (GCP project reused from carousel pipeline)
- Generated 10 test images across 6 different approaches
- Landed on winning formula: `product_shot` mode, luxury jewelry-style, one hero product
- Generated full set of 4 hero shots — one per scent, all logged
- Identified NSFW triggers to avoid in prompts

## Winning outputs (use as reference)
| File | Scent | Rating |
|---|---|---|
| `test-6-hero.png` | Chamomile Lavender | ⭐ High |
| `test-7-lavender-rose.png` | Lavender Rose | ⭐ High |
| `test-8b-cherry-blossom.png` | Cherry Blossom Lavender | ⭐ High |
| `test-9-jasmine-euca.png` | Jasmine Euca | ⭐ High |

## What's next
1. **Videos** — use winning hero shots as reference for Higgsfield video generation
   - Format: 7–15 second Reels (slow pour, steam, salt crystals falling)
   - Same dark velvet + single candle aesthetic
   - One product per video
2. Reverse-engineer winning image prompts into reusable skills
3. Build `/new-client` skill for onboarding future clients
4. Set up Sunday planning + Monday generation routines

## Key files
- `clients/salvia-lion/` — all generated outputs
- `tracker/` — Google Sheets logging scripts
- `advertising-masterclass.md` — research on what converts for spiritual wellness
- `CLAUDE.md` — full winning formula prompt template
