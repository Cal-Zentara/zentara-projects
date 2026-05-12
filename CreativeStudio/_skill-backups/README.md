# Skill Backups

These are point-in-time copies of customized SKILL.md files that live at `.claude/skills/`. The live folder is gitignored (machine-specific), so these copies are the only version saved with the project.

**Why they exist:** The two skills below were customized to use CreativeStudio's Higgsfield CLI + Google Sheet auto-logger instead of Joey's default "paste into web UI" flow. That customization is real work — backed up here so it isn't lost if the machine dies, Claude reinstalls, or Joey updates the originals.

## What's here

- `banana-pro-director.SKILL.md` — image prompts (Banana Pro / Soul Cinema / GPT-2)
- `cinema-worldbuilder.SKILL.md` — video prompts (Seedance 2.0, 5 cinema modes)

## How to restore

If the live skill files at `.claude/skills/<name>/SKILL.md` go missing:

```bash
cp _skill-backups/banana-pro-director.SKILL.md .claude/skills/banana-pro-director/SKILL.md
cp _skill-backups/cinema-worldbuilder.SKILL.md .claude/skills/cinema-worldbuilder/SKILL.md
```

Then close and reopen Claude Code so the skills reload.

## How to keep in sync

If you edit a live skill file, copy the updated version back here in the same session:

```bash
cp .claude/skills/banana-pro-director/SKILL.md _skill-backups/banana-pro-director.SKILL.md
cp .claude/skills/cinema-worldbuilder/SKILL.md _skill-backups/cinema-worldbuilder.SKILL.md
```

Then commit. Otherwise the backup goes stale.
