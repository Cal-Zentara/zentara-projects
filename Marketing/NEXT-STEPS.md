# Marketing Skills — Next Steps

Resume here after compaction. Three consolidations approved by Cal, ranked by priority.

---

## Status as of 2026-04-26 (FULLY COMPLETE)

All 3 builds done. skills-reference.md updated. Nothing left on this doc.

**Already done this session:**
- Installed zubair-trabzada/ai-marketing-claude (15 `/market` skills + 5 parallel agents)
- Installed BrianRWagner/ai-marketing-claude-code-skills (23 skills)
- Fixed PDF generator at `C:\Users\Aesth\.claude\skills\market\scripts\generate_pdf_report.py`:
  - Text wrapping in competitor table
  - "Weight %" replaced with "Priority" (Most Important / Very Important / Important)
  - Methodology page rewritten in plain English with score column
  - Unicode encoding fix (em dashes, arrows, smart quotes)
  - Plain English content throughout
- Generated working PDF on Cal's Desktop: `MARKETING-REPORT-nailditspa.pdf`
- Created reference doc: `Marketing/skills-reference.md` (covers all 38 skills)
- **Build #1 DONE:** Modified `market-audit/SKILL.md` — `/market audit` now auto-produces PDF
- **Build #2 DONE:** Created `cal-content` skill — full content chain with saved positioning
- **Build #3 DONE:** Created `cal-pitch` skill — audit + case study + proposal in one command
- Updated `Marketing/skills-reference.md` to cover all 41 skills

**Skipped:** coreyhaines31/marketingskills — not needed yet, would cause skill overload

---

## Build #1 — PDF-wrap the `/market audit` output (DO FIRST)

**Problem:** Right now `/market audit [url]` runs 5 parallel agents (`market-content`, `market-conversion`, `market-competitive`, `market-technical`, `market-strategy`) and dumps 5 separate markdown files. Cal needs ONE PDF deliverable.

**Plan:**
1. Read `C:\Users\Aesth\.claude\skills\market\SKILL.md` and `market-audit/SKILL.md` to see how the orchestrator currently invokes the 5 agents and collects output
2. Modify `market-audit/SKILL.md` so after the 5 agents complete, it:
   - Compiles their findings into the JSON structure expected by `generate_pdf_report.py`
   - Auto-runs the PDF generator
   - Outputs ONE client-ready PDF instead of 5 markdown files
3. Test by running `/market audit https://nailditspa.com` and confirming a single PDF is produced
4. Verify: open the PDF, check formatting matches the fixed Nail'd It version

**Files involved:**
- `C:\Users\Aesth\.claude\skills\market-audit\SKILL.md` (modify)
- `C:\Users\Aesth\.claude\skills\market\scripts\generate_pdf_report.py` (already fixed, just consume)
- `C:\Users\Aesth\.claude\agents\market-*.md` (5 agent files — read only, do not modify)

---

## Build #2 — Content chain (DO SECOND)

**Goal:** One command runs `positioning-basics` -> `content-idea-generator` -> `social-card-gen` in sequence. Cal sets up positioning once, then every monthly content session pulls from it automatically.

**Plan:**
1. Create new skill: `C:\Users\Aesth\.claude\skills\cal-content\SKILL.md`
2. Skill flow:
   - Check if `Marketing/positioning.md` exists. If yes, skip step 1. If no, run `positioning-basics` first.
   - Run `content-idea-generator` with positioning as input
   - For each idea, run `social-card-gen` to produce platform variants
   - Save output to `Marketing/content/[YYYY-MM-DD]/`
3. Save Cal's positioning to `C:\Users\Aesth\Desktop\Zentara\Projects\Marketing\positioning.md` so it persists

---

## Build #3 — `/cal-pitch` chain (DO THIRD — biggest)

**Goal:** One command produces a sales-ready PDF for any prospect. Combines audit + relevant past case study + Cal's voice into one deliverable.

**Plan:**
1. Create new skill: `C:\Users\Aesth\.claude\skills\cal-pitch\SKILL.md`
2. Skill flow:
   - Run `/market audit [prospect-url]` (uses Build #1)
   - Run `case-study-builder` to find a relevant past Cal client (Nail'd It, Lavender Moon, Phillip Loans)
   - Pull Cal's voice profile from memory (`feedback_cal_phrases.md`, voice profile)
   - Compile into a single PDF: audit + case study + custom proposal in Cal's voice
3. Save output to `Marketing/pitches/[prospect-name]-[date].pdf`

**Cal's past wins to draw from for case studies:**
- Nail'd It Spa — full website + local SEO + review automation
- Lavender Moon — full site + intake form + Square integration
- Phillip Loans — mortgage agent site
- Global Road Sealing — field ops management + marketing site

---

## Important Context for Next Session

- Cal is non-technical — explanations must be plain English, no jargon
- Cal's voice profile is saved in `C:\Users\Aesth\.claude\projects\C--Users-Aesth-Desktop-Zentara-Projects\memory\cal_voice_profile.md`
- Cal's business: Zentara — teaches people to use Claude ($150-250 Teach offer, $300-800 Build offer)
- Reference doc with all 38 skills: `Marketing/skills-reference.md`
- Test website for any audit work: `https://nailditspa.com` (Cal's existing client, real data already known)

---

## To Resume

Tell Claude: "Read `Marketing/NEXT-STEPS.md` and start Build #1."
