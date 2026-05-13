# Creative Pipeline Skill — Design

**Date:** 2026-05-13
**Owner:** Cal
**For:** Cal + buddy (each running their own Claude Code)

---

## What it is

A Claude skill that walks Claude Code through the full storyboard-first AI ad pipeline. One product image + one brief in, one finished 15-second ad out.

Adapted from the Higgsfield Canvas workflow Joey shared on YouTube. Replaces the manual step-by-step process Cal runs today.

## Build phases

**v1 — Cal's version (build first).** Optimized for Cal's existing setup. Reads from his `clients/` folders. Auto-loads Garlic High / Salvia Lion / Lucy / Cal briefs. Uses his locked music and end cards. Bakes in all the lessons from his existing CLAUDE.md (NSFW traps, FFmpeg gotchas, image model rules).

**v2 — Friend's version (build later).** Same skill file, generic mode. Works without pre-existing client folders. User types brief manually, uploads music/end card manually if they have them. Ships when v1 is proven.

The same skill file handles both modes — if a `clients/[name]/` folder exists, use it; if not, ask the user for the inputs manually.

---

## Who uses it and how

**Cal:** Has client folders already (Garlic High, Salvia Lion, Lucy, Cal). Skill auto-loads each client's brief, locked music, end card, brand rules.

**Buddy:** Has no client folders yet. Skill works generically — he types his own brief, uploads his own image, no client memory needed. He can build his own client folders later using the same `clients/[name]/` structure.

**Trigger:** User types `/creative-pipeline` (or similar) in Claude Code, or says "let's make a video for [client]" / "let's build an ad."

---

## The pipeline (locked recipe, identical for both users)

```
Setup (inputs)
  ↓
Storyboard prompt (Claude writes)
  ↓
Storyboard image (gpt_image_2)
  ↓ [APPROVAL: regenerate full / edit panel / approve]
Video prompt (Claude writes, reads the storyboard image)
  ↓ [APPROVAL: edit prompt / approve]
Video generation (Seedance 2.0)
  ↓
FFmpeg post (trim, music, end card)
  ↓
Output saved + Google Sheet logged
```

---

## Inputs

| Input | Required | Notes |
|---|---|---|
| Client name | Optional | If provided, skill loads `clients/[name]/CLAUDE.md` and `brief.md` automatically |
| Product image | Yes | Path to local image — the hero asset |
| Reference images | Optional | Multiple — style ref, character ref, mood board |
| Brief text | Yes | Pre-filled from client's brief.md if client provided, else typed manually |
| Music track | Optional | MP3, gets baked in via FFmpeg post |
| End card image | Optional | PNG, appended after video |

---

## The 4 phases Claude walks through

### Phase 1 — Setup
Claude reads the user's request, asks for any missing inputs. If client name is given, Claude reads the client folder and pre-loads the brief. Otherwise asks the user to paste their brief.

### Phase 2 — Storyboard
Claude writes the storyboard prompt using the locked "storyboard architect" system prompt (from Joey's free version) + the user's brief + a reference to the uploaded product image. Then runs the Higgsfield CLI:

```
higgsfield generate create gpt_image_2 --prompt "<storyboard prompt>" --aspect_ratio 16:9 --quality high --wait --json | node tracker/log-from-json.js "..."
```

Opens the result image immediately for review.

**Approval gate:**
- **Regenerate full** — user edits the prompt or the brief, Claude reruns from scratch.
- **Edit panel** — user says "fix panel 7 — her face is wrong," Claude runs `nano_banana_2` with the storyboard as image input + a panel-specific edit prompt.
- **Approve** — proceed to video.

### Phase 3 — Video prompt
Claude reads the approved storyboard image, writes the Seedance 2.0 video prompt using the locked "video prompt" system prompt + the storyboard content. Shows the prompt to the user.

**Approval gate:**
- User edits the prompt directly or types changes in chat.
- Approve to proceed.

### Phase 4 — Video gen + post
Claude runs Seedance:

```
higgsfield generate create seedance_2_0 --prompt "<video prompt>" --image <storyboard.png> --duration 15 --aspect_ratio 9:16 --resolution 480p --wait --json | node tracker/log-from-json.js "..."
```

After it lands, Claude runs FFmpeg:
1. Trim the appended storyboard frame off the end (re-encode, not `-c copy`)
2. Add music track (if provided) — FFmpeg post is the default method, not `--audio` flag on Seedance. Keeps the pipeline deterministic and avoids any chance of silent gen failure.
3. Append end card image (if provided)

Final video saved to `clients/[name]/outputs/` (or current working directory if no client). Skill confirms it was logged to the Google Sheet.

---

## What's baked into the skill file

1. **The storyboard architect system prompt** — Joey's free version, locked verbatim (~2K words). Tells Claude how to convert a product image + brief into a 12-panel storyboard prompt with locked product fidelity and 16:9 panel framing.
2. **The video prompt architect system prompt** — written fresh as a client-agnostic template (Joey's version was Orbit-specific). Tells Claude: read the approved storyboard image, write a Seedance 2.0 video prompt that animates each panel sequentially, preserve product identity, use diegetic audio only, avoid NSFW trigger verbs.
3. **The CLI commands** — `higgsfield generate create gpt_image_2` for storyboard, `nano_banana_2` for panel edits, `seedance_2_0` for video. All with correct flags from the locked CLAUDE.md.
4. **The FFmpeg post commands** — trim re-encode + optional music + optional end card append.
5. **The approval gate logic** — 3 options after storyboard (regenerate full / edit panel / approve), 2 options after video prompt (edit / approve).
6. **The Google Sheet log call** — `node tracker/log-from-json.js` piped from every Higgsfield gen.
7. **Client auto-load logic** — if `clients/[name]/` exists, read CLAUDE.md + brief.md + look for locked music and end card in assets.

---

## Gotchas baked in (from existing CLAUDE.md)

- Never pass `--generate_audio` to Seedance CLI (doesn't exist, silently fails)
- Use `--audio ./track.mp3` if baking music in via CLI is preferred over FFmpeg
- FFmpeg `-c copy` trim doesn't cut on non-keyframes — re-encode with `-c:v libx264 -pix_fmt yuv420p -r 24`
- Seedance appends source storyboard frame at ~13.5s — always trim before adding end card
- Aggressive verbs (violently, detonates, rip, blast, glare, lock) trigger NSFW filter — soften to "lands hard, lift sharply, rushing, looks, lifts"
- Image model rule: `gpt_image_2` for first storyboard draft (text rendering), `nano_banana_2` for panel edits (preserves the rest)

---

## What's NOT in the skill

- No web UI, no server, no hosting, no deployment
- No client memory beyond reading existing folders
- No multi-variation generation (single run per pipeline call)
- No node graph
- No automatic SFX pack injection (manual Descript step stays)

---

## File location

Skill file lives at `.claude/skills/creative-pipeline.md` on each user's machine. Backup at `CreativeStudio/_skill-backups/creative-pipeline.SKILL.md` for git.

---

## Success criteria

1. Cal types `/creative-pipeline` for Garlic High → ends with `GarlicHigh_pipeline_v1.mp4` in `clients/Garlic-high/outputs/`, logged to Sheet, music + end card baked in.
2. Buddy installs the skill, types `/creative-pipeline`, provides his own image + brief → ends with a finished video in his current directory.
3. Both videos use the same architect prompts, same CLI flags, same FFmpeg post — quality is consistent across machines.
