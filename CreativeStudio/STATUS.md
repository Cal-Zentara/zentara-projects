# STATUS — CreativeStudio

*Last updated: 2026-05-31 — cleaned up, Unik is sole active focus*

---

## Completed this session (2026-05-28 session 12 — advertising masterclass)

- Built `advertising-masterclass.md` at studio root — universal reference doc for every client ad. Pull from this before writing copy or building Seedance prompts.
- Synthesized from 6 parallel research agents covering: hook formulas + viral examples, platform algorithm differences (IG/FB/TikTok), AI ad success patterns 2026, visual + audio patterns from winners, A/B testing + CTA strategy, 2026-specific trends + AI fatigue.
- 60+ cited sources from Motion App, Meta for Business, TikTok Creative Center, Sprout Social, Buffer, Hootsuite, Edelman Trust Barometer, eMarketer, IAB, Marketing Brew, Adweek, etc.
- ~580 lines. Covers 10 sections: TL;DR cheat sheet, organic best practices, platform breakdown, what converts vs flops, 12 hook formulas, visual patterns, audio strategy, A/B testing framework, CTA strategy, AI-specific notes, 2026 trends.

---

## Completed this session (2026-05-28 session 11 — UNIK hallway ad)

- Tested Marketing Studio (CLI + browser, UGC + Hypermotion modes) for UNIK — came back generic/wrong. Confirmed: Marketing Studio can't handle multi-shot school hallway content. Scrapped.
- Pivoted back to v5/v6 hallway ads. Combined them: v5 video (first 10s) + v6 video (last 1.5s) for the final visual track.
- Researched visual hooks with 5 parallel subagents — locked on demographic call-out format: "Why are we still paying thirty dollars for a school polo?"
- Locked VO: "UNIQUE. Every color. Under fifteen dollars." (phonetic "UNIQUE" so AI pronounces brand name correctly)
- Generated end card: GPT Image 2 bulletin board PSA poster — blue background, "unik" logo, "Ready for the school year." Cal prompted it himself.
- Built `unik_final_v7.mp4` via FFmpeg: 14.5s total (v5 0–10s + v6 13.5–15s + 3s static end card), v6 VO (12.16s) + Hall Pass Bounce at 50% throughout. Hard cuts only.
- Created `clients/Unik/CLAUDE.md` — all locked assets, FFmpeg commands, what doesn't work.

**Where we left off:**
- `unik_final_v7.mp4` approved. Ready to post.
- Next: post organically, evaluate before any paid spend.
- Deferred: gray background product photo swap, Joey's @image tagging workflow, Deal Alert format.

---

## Completed this session (2026-05-27 session 10 — video prompt architect tweaks)

- Compared a viral X cooking-video prompt against our two pipeline system prompts. Confirmed ours are stronger (camera-first, physics, NSFW list).
- Added one-line flow summary step to `system-prompts/video-prompt-architect.md` ("Flow: Opening → prep → wok → hero shot"). Universal — works for any client.
- Sharpened the no-slideshow constraint to be more explicit.
- Decided NOT to make the storyboard architect prompt flexible — Cal confirmed it's used for products most of the time.

---

## What this is
AI-powered creative studio using Higgsfield CLI to generate product ads and content for clients.

## What's live
- Higgsfield CLI installed ✅
- Higgsfield auth completed ✅
- All 4 Higgsfield skills installed ✅
- Google Sheets tracker live ✅
- Advertising masterclass built ✅ — `advertising-masterclass.md` at studio root
- Both system prompts current ✅ — `system-prompts/storyboard-architect.md` + `system-prompts/video-prompt-architect.md`

## Clients
| Client | Status | Notes |
|---|---|---|
| Unik | **Active — sole focus** | 4 ad videos made. Landing page live. Waiting on Cynthia's feedback + paid engagement. |
| Garlic High | Parked | UGC Clip 1 approved, Clip 2 pending. Yellow commercial + anime both ready to send. See `clients/Garlic-high/CLAUDE.md`. |
| Nail'd It Spa | Parked — blocked | Waiting on 5 real salon photos from Dalena. See `clients/NaildItSpa/CLAUDE.md`. |
| Salvia Lion | Parked — waiting on stickers | Post 1 Reiki content approved. Video pending. See `clients/Salvia-lion/CLAUDE.md`. |
| Lucy (@xolucy.pearls) | Parked | AI influencer for Nail'd It Spa. Character locked. 4 prompts ready. |
| Cal (Zentara) | Parked | Soul ID made, voice clone done. Blocked on facial movement fix. |

## Waiting on
- **Unik:** Cynthia's feedback on landing page + paid engagement discussion
- **Salvia Lion:** stickers to arrive for hero shot redo
- **Nail'd It Spa:** 5 real salon photos from Dalena

## What's next
All active work is on **Unik**. See `clients/Unik/CLAUDE.md` and `SmallProjects/Unik/STATUS.md`.

## Key files
- `clients/[name]/CLAUDE.md` — each client's locked formulas and where we left off
- `tracker/` — Google Sheets logging scripts
- `advertising-masterclass.md` — universal ad reference (hooks, platform rules, what converts)
- `system-prompts/` — storyboard-architect.md + video-prompt-architect.md
- `CLAUDE.md` — full studio rules, video principles, gotchas
