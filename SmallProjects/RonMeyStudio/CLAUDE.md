# {{PROJECT_NAME}} — Project Docs

## Quick Nav — Read First

| I'm doing... | Read only... |
|---|---|
| Continuing work / resuming | `STATUS.md` |
| Fixing a bug | `STATUS.md` + Dev Reference (below) + the specific section of this doc |
| Adding a feature | `STATUS.md` + Dev Reference + the section that owns the feature |
| Deploying / publishing | Deployment section |
| Understanding the whole project | This CLAUDE.md in full |

**Do not explore.** If the answer isn't in the files above, ask before searching.

---

## Dev Reference — Symbol Map / Schema / Gotchas

> **Scaffold only — populate on first real touch.** Update ranges inline whenever code shifts lines (see global `CLAUDE.md` → "Mid-Session Efficiency"). For fast-churning files, use grep-able comments like `<!-- SECTION: hero -->` and reference the comment name instead of raw line numbers.

### Symbol Map

| Feature | File | Lines |
|---|---|---|
| TODO: populate on next touch | | |

### Data Schema

TODO: populate on next touch. Document stored/sent data here — localStorage keys, API payloads, form fields, hidden fields, query params, external link patterns. If none, write: "No client-side persistence — static site. Forms submit to: {{endpoint}}."

### Known Gotchas

TODO: populate on next touch. Intentional-looking-weird code with the reason. If none, write: "None identified."

---

## Project Overview

{{One short paragraph: who the client is, what the project does, why it exists.}}

---

## Stack

| Layer | Tech |
|---|---|
| UI | |
| Fonts | |
| Storage | |
| Hosting | |
| Repo | |

---

## File Structure

```
{{project-name}}/
├── STATUS.md
├── CLAUDE.md          ← this file
├── index.html
└── ...
```

---

## Key Decisions

| Decision | Why |
|---|---|
| | |

---

## Deployment

{{How to deploy — repo, branch, host, custom domain, any DNS notes.}}

---

## Current Version & Status

**Version:** 0.1 — initial build
**Status:** {{active / discovery / on hold / etc.}}
