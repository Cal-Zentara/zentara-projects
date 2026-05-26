# SSP — Workspace Index

Cal's main workspace for demo projects, experiments, and client work.

## Quick Nav — Read First

**Every sub-project has its own `STATUS.md` — always read that first.**

| Project | STATUS | CLAUDE |
|---|---|---|
| PhillipLoans | `PhillipLoans/STATUS.md` | `PhillipLoans/CLAUDE.md` |
| MyTa | `MyTa/STATUS.md` | `MyTa/CLAUDE.md` |
| HealthyProteinSpot | `HealthyProteinSpot/STATUS.md` | `HealthyProteinSpot/CLAUDE.md` |
| Unik | `Unik/STATUS.md` | `Unik/CLAUDE.md` |

**Do not explore.** Read the sub-project STATUS.md first.

---

## Active Projects

| Project | What It Is | Docs |
|---|---|---|
| PhillipLoans | Client site — Phillip La, Mortgage Loan Officer, Loan Factory CA. Live at philliplaloans.com | `PhillipLoans/CLAUDE.md` |
| MyTa | Bilingual SoCal real estate agent — discovery phase | `MyTa/CLAUDE.md` |
| ByronCampaign | Possible new client — early stage | `ByronCampaign/` |
| HealthyProteinSpot | Prospect demo — family-owned protein shake spot in Anaheim. Built one-page site to replace their Linktree | `HealthyProteinSpot/CLAUDE.md` |
| Unik | Family client — children's apparel + school uniforms, LA Fashion District. Cal's cousins. Discovery phase, initial meeting 2026-05-25 | `Unik/CLAUDE.md` |

---

## Archived — 2026-04-23

Moved to `../_archive/`. Do not read or edit unless Cal explicitly resumes.

| Project | What It Was |
|---|---|
| PavementScan | AI pavement assessment tool for crack seal contractors |
| DistressedLeads | Real estate lead dashboard for Tri — OC distressed property owners |
| FitTrackAI | Fitness tracking app — meals, workouts, AI coach, PWA |
| GoldKeyLegacy | Client project — financial firm, retirement + life insurance (discovery phase) |
| GarlicHigh | Demo site — Jiro-style ramen restaurant in Sunnyvale CA |

---

## On Pause

| Project | What It Is |
|---|---|
| AutoBuildCharlie | Main brand site — chatbot, Calendly, Stripe |

*Note: The active Global Road Sealing client project lives outside SSP at `../ZentaraHQ/Clients/GlobalRoadSealingInc/` — it's a paying client (not a demo), with a full field ops management system + marketing site deployed at globalroadsealing.com.*

---

## Shared Infrastructure

| Folder | What It Is |
|---|---|
| `cse-worker/` | Cloudflare Worker — proxies AI Vision API calls (OpenAI, Gemini, Claude) for PavementScan crack detection |
| `shared/` | Reusable helpers — `base.css` and `utils.js` shared across projects |

---

## Reference Files

| File | What It Is |
|---|---|
| `../ClaudeWAT.md` | WAT framework (Workflows/Agents/Tools) — read when building real automation |
| `ashley-calendly-workflow.json` | n8n workflow — voice AI demo that checks Calendly availability. For Ashley client + showing other businesses |
| `zentara-outreach-script.js` | Google Sheets script — sends cold outreach emails to construction companies. Cal's own outreach tool |

---

## Elevasis

Cal uses Elevasis to build workflow automation for clients. It's a TypeScript platform with 70+ tools — email campaigns, LLM, lead management, scheduling, CRM, scraping, and more.

**Existing Elevasis workspaces:** `SmallProjects/test/`, `ZentaraHQ/`

**To init a new workspace:** run `/meta init` inside the project folder after `pnpm install @elevasis/sdk`.

---

## Supabase Rule

- **AutoBuildCharlie** Supabase → demos and experiments (this workspace)
- **Cal_Zentara** Supabase → real clients (GRSI and future paying clients)

