# CreativeStudio — Project Docs

## Quick Nav — Read First

| I'm doing... | Read only... |
|---|---|
| Continuing work / resuming | `STATUS.md` |
| Adding a new client | `STATUS.md` + Client Structure section below |
| Generating content for a client | `STATUS.md` + that client's folder |
| Understanding the whole project | This CLAUDE.md in full |

**Do not explore.** If the answer isn't in the files above, ask before searching.

---

## Dev Reference — Symbol Map / Schema / Gotchas

### Symbol Map

| Feature | File | Lines |
|---|---|---|
| TODO: populate on next touch | | |

### Data Schema

No persistent storage yet. Higgsfield API handles generation. Client briefs live in each client folder.

### Known Gotchas

TODO: populate on next touch.

---

## Project Overview

Zentara's internal creative studio for generating AI video ads and content using Higgsfield. First client is Salvia Lion — she sells handmade Reiki-charged bath salts and needs product content for Instagram and ads.

---

## Stack

| Layer | Tech |
|---|---|
| Video/Image generation | Higgsfield API (via CLI) |
| Client management | Folder-based (`clients/[client-name]/`) |
| Storage | Local + client delivery |
| Hosting | N/A — output delivery only |

---

## File Structure

```
CreativeStudio/
├── STATUS.md
├── CLAUDE.md              ← this file
└── clients/
    └── salvia-lion/       ← first client
        └── (brief, assets, outputs go here)
```

---

## Client Structure

Each client folder follows this pattern:
```
clients/[client-name]/
├── brief.md       — who they are, product, vibe, target audience
├── assets/        — logos, product photos, brand colors
└── outputs/       — generated videos/images, ready to deliver
```

---

## Higgsfield

**CLI installed:** `npm install -g @higgsfield/cli`
**Auth:** `higgsfield auth login` (browser OAuth — one time per machine)
**Skills installed:** `npx skills add higgsfield-ai/skills --yes`
**Skills location:** `.agents/` folder at project root
**Skills lock:** `skills-lock.json` at project root

### Key Commands
| Command | What it does |
|---|---|
| `higgsfield auth login` | Re-authenticate if session expires |
| `npx skills add higgsfield-ai/skills --yes` | Reinstall all 4 default skills |

### Generation Gotchas
| Situation | Fix |
|---|---|
| Sensitive content block + credit refund | Read the rejected prompt, remove flagged words, retry |
| Reference image ignored | Explicitly say "use this exact reference image, do not alter it" in every prompt |
| Wrong product appears (generic version) | Drag product photo into chat + tag it — never describe by text alone |
| Model choice matters | Hypermotion = fast-paced launch video. Marketing Studio = mixed model. Standard = slower, quieter |
| Skills not appearing | Close and reopen Claude Code after install |
| Interactive selector on skills install | Use `--yes` flag to skip it |

### Models Available
- **Hypermotion** — fast cuts, energetic, product launch style
- **Marketing Studio** — mixed model, handles UGC, unboxing, product shots
- **Standard video** — slower pace, quieter feel
- **Image generation** — product shots, ads, static creatives

### Skill Workflow
1. Generate 3–5 variations
2. Pick the best output
3. Copy its prompt
4. Ask Claude to reverse-engineer a skill from it → saves to `.claude/skills/`
5. Every future generation using that skill is consistent

---

## Key Decisions

| Decision | Why |
|---|---|
| Folder-per-client structure | Simple, no database needed at this scale |
| Higgsfield for generation | Cal's chosen tool — video-first, good for product ads |

---

## Current Version & Status

**Version:** 0.1 — setup
**Status:** active — Higgsfield install pending
