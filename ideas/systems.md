# Ideas — Systems & Automation

Internal systems to build for Zentara operations.

---

## Second Brain Bridge — ZentaraHQ ↔ Memory Files (April 22, 2026)

Cal already has both halves of a second brain. This idea connects them.

**The two halves:**
- ZentaraHQ = the doing half (operations, automation, client work, scheduled workflows)
- CLAUDE.md + memory files = the knowing half (who Cal is, voice, lessons, business context)

**The gap:** When something happens in ZentaraHQ (client signs, project completes, lesson learned), it doesn't automatically update the memory files. And when Claude reads memory, it doesn't know what's running in ZentaraHQ.

**The bridge — 3 phases:**
1. **Phase 1 — Manual trigger:** One Elevasis workflow that writes to memory files when Cal says "log this" inside ZentaraHQ. ~1 day to build.
2. **Phase 2 — Auto-capture:** Key events (contract signed, project complete) automatically log to JOURNEY.md. ~2-3 days.
3. **Phase 3 — Weekly digest:** Workflow runs every Sunday night, looks at what ran that week, writes a plain-English summary to memory. Claude knows what happened last week without Cal saying a word. ~1 day.

**Why not yet:** Nothing is slipping. Manual logging is working. Build this when: logging feels like a chore, Claude is missing recent context, or client volume gets high enough that manual can't keep up.
