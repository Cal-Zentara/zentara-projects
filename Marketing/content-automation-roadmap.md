# Content Automation Roadmap
*Saved: 2026-04-30 | Resume this when ready to build*

---

## The Goal

Build a full marketing automation system that:
- Pulls content ideas automatically
- Generates posts in Cal's voice
- Distributes across IG, TikTok, Facebook, LinkedIn
- Runs on a schedule with minimal manual input

Based on the 7-level framework from Chase's Claude Code marketing video.

---

## Where Cal Currently Stands

| Level | Name | Status | Notes |
|---|---|---|---|
| 1 | Raw Marketer | Done | |
| 2 | Taste Injector | **Done** | `ZentaraHQ/core/voice/cal-voice.md` — solid voice doc |
| 3 | Strategist | Partial | Jun Yuh framework + content ideas exist. No automated morning brief yet. |
| 4 | Creative Director | **Done** | IG carousel live and posting daily |
| 5 | Distributor | **Gap** | No cascade: one idea → multiple platform outputs |
| 6 | Systems Operator | Partial | IG on cron. Nothing else automated. |
| 7 | Autonomous Agent | Not yet | |

---

## The Key Gap — Level 5: Content Cascade

The missing piece. Right now each platform is manual or siloed.

What it needs to do:
- Take one input (a story, client win, lesson, or idea)
- Output: IG carousel + caption + TikTok script + Facebook post + LinkedIn version
- Everything in Cal's voice using the existing voice doc
- Output mix follows the 3-1-2-1 weekly cadence — see `Marketing/IG/jun-yuh-framework.md`
- Save outputs to `Marketing/content/`

This is the build that turns everything into a real machine.

---

## What Already Exists (Don't Rebuild)

- **Voice doc:** `ZentaraHQ/core/voice/cal-voice.md` — single source of truth
- **IG carousel:** Live, automated, posting daily at 10am
- **Content ideas:** `Marketing/IG/content-ideas-cal.md` — attract/position/nurture/convert posts ready to use
- **Jun Yuh framework:** `Marketing/IG/jun-yuh-framework.md` — 3-1-2-1 weekly posting system
- **Skills:** `Marketing/skills-reference.md` — 75+ skills including `/cal-content`
- **`/cal-content` skill:** Already exists. Generates content in Cal's voice. Just needs to be scheduled and extended to multi-platform output.

---

## Recommended Build Order (When Ready)

1. **Level 5 first** — Build the content cascade skill. One input → five platform outputs.
2. **Level 3 gap** — Add automated morning brief (scrape Twitter/AI news, surface content ideas daily)
3. **Level 6 extension** — Schedule the cascade to run on cron alongside the IG carousel

---

## Reference

- Chase's video: 7 Levels of Claude Code Marketing (transcript saved in Upwork scans: `Clients/Upwork/scans/2026-04-30.mdx`)
- Voice doc: `ZentaraHQ/core/voice/cal-voice.md`
- Skill library: `Marketing/skills-reference.md`
