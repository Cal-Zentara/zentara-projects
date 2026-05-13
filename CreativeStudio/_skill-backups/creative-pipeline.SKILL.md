---
name: creative-pipeline
description: "Walks Claude through the full storyboard-first AI ad pipeline for CreativeStudio. One product image + brief in, one finished 15-second video ad out. Auto-loads client briefs and locked assets if a clients/[name]/ folder exists. Babysit mode — pauses for user approval after every step. Trigger phrases: 'creative pipeline', 'run the pipeline', 'let's make a video for [client]', 'build a video ad', 'storyboard to video', 'creative-pipeline'. Replaces the manual storyboard-first workflow documented in CreativeStudio/CLAUDE.md."
---

# Creative Pipeline — Storyboard-First Ad Production

The skill that runs the full pipeline: brief → storyboard prompt → storyboard image → approval → video prompt → video → music + end card → final output. Same recipe every time, baked with all the lessons from CreativeStudio/CLAUDE.md and each client's CLAUDE.md.

**Babysit mode.** Pause after every step for user approval. Never chain phases together without user confirmation. Never run a CLI command without the user saying "go."

---

## When this skill fires

Trigger phrases (case-insensitive): *"creative pipeline"*, *"run the pipeline"*, *"let's make a video for [client]"*, *"build a video ad"*, *"storyboard to video"*, *"creative-pipeline"*, *"start the pipeline"*.

Also fire it when the user asks for a full video ad workflow and references storyboard + Seedance in the same request.

---

## Phase 1 — Setup

Gather all inputs before generating anything. Confirm each one back to the user.

**Step 1.1 — Detect the client**

Ask the user: *"Which client is this for? (Garlic High, Salvia Lion, Lucy, Cal, or none)"*

If the user names a client, check if `clients/[name]/` exists under `CreativeStudio/`. If it exists, read these files in order:
1. `clients/[name]/CLAUDE.md` — locked formulas, NSFW traps, brand voice
2. `clients/[name]/brief.md` — full client brief
3. List files in `clients/[name]/assets/` — find locked music (.mp3), end card (.png), product images

If no client given, skip to Step 1.2 and ask the user for inputs manually.

**Step 1.2 — Gather inputs**

Confirm each of these. Ask for any that aren't pre-loaded from the client folder:

| Input | Required | Default if missing |
|---|---|---|
| Product image | Yes | Ask user to paste a path |
| Brief (1–3 sentences) | Yes | Pre-load from `brief.md` if client, else ask |
| Visual style anchor | Yes | Pre-load from client `CLAUDE.md` if present (e.g., "90s anime illustrated style"), else ask |
| Reference images | Optional | Ask once, accept multiple paths |
| Music track | Optional | Pre-load locked client music if present, else ask |
| End card image | Optional | Pre-load locked client end card if present, else ask |
| Aspect ratio | No | Default `9:16` for Reels/TikTok/Shorts. Confirm. |
| Output destination | No | `clients/[name]/outputs/` if client, else current directory |

**Step 1.3 — Confirm and lock**

Restate every input back to the user in plain English. Example:

> Locked in:
> - Client: Garlic High
> - Product image: `Images/MoreGarlic.png`
> - Brief: Loud, irreverent garlic ramen shop. Gen Z audience. "MORE GARLIC POR FAVOR."
> - Style: 90s anime illustrated, late-night, warm sodium streetlight.
> - Music: `Audio/Garlic High.mp3`
> - End card: `Images/soon.png`
> - Aspect ratio: 9:16
> - Output: `clients/Garlic-high/outputs/`
>
> Ready to write the storyboard prompt?

Wait for "yes" / "go" / "lock" before moving to Phase 2.

---

## Phase 2 — Storyboard prompt

**Step 2.1 — Load the system prompt**

Read `CreativeStudio/system-prompts/storyboard-architect.md`. Use its content as the system prompt for this phase.

**Step 2.2 — Write the storyboard prompt**

Apply the storyboard architect system prompt to the user's inputs. Output the resulting storyboard generation prompt.

**Step 2.3 — Show and confirm**

Show the prompt to the user. Ask:

> *"Here's the storyboard prompt. Want to run it as-is or tweak it first?"*

Options:
- **Run** — proceed to Phase 3
- **Tweak** — user edits in chat, regenerate the prompt, show again
- **Stop** — abort the pipeline

---

## Phase 3 — Storyboard image generation

**Step 3.1 — Run the CLI command**

Use `gpt_image_2` for the first storyboard draft (renders text better than other models). Run:

```bash
higgsfield generate create gpt_image_2 \
  --prompt "<storyboard prompt from Phase 2>" \
  --image <product_image_path> \
  --aspect_ratio 16:9 \
  --quality high \
  --wait \
  --json | node tracker/log-from-json.js "<storyboard prompt>" "gpt_image_2" "<client>"
```

If reference images were provided, add them with additional `--image` flags (one per reference).

**Step 3.2 — Open the result immediately**

Once the gen completes, open the output file so the user can see it:

```powershell
start "" "<output_path.png>"
```

**Step 3.3 — Approval gate**

Ask the user:

> *"Storyboard ready. Three options:*
> *1. Approve — proceed to video prompt*
> *2. Regenerate full — change the prompt or brief and rerun gpt_image_2*
> *3. Edit panel — fix one specific panel using nano_banana_2 (keeps the other 11)"*

**If "Approve":** proceed to Phase 4.

**If "Regenerate full":** ask what to change, regenerate the storyboard prompt with the user's tweaks, rerun `gpt_image_2` from Step 3.1.

**If "Edit panel":** ask the user *"Which panel number (1–12) and what should change?"* Then run:

```bash
higgsfield generate create nano_banana_2 \
  --prompt "Edit panel [N] of this storyboard: <change description>. Keep all other panels exactly as they are." \
  --image <storyboard_path.png> \
  --wait \
  --json | node tracker/log-from-json.js "panel edit" "nano_banana_2" "<client>"
```

Open the new file. Return to the approval gate.

---

## Phase 4 — Video prompt

**Step 4.1 — Load the system prompt**

Read `CreativeStudio/system-prompts/video-prompt-architect.md`. Use its content as the system prompt for this phase.

**Step 4.2 — Write the video prompt**

Apply the video prompt architect system prompt with these inputs:
- The approved storyboard image (Claude reads it directly — visual input)
- The user's original brief
- The visual style anchor
- Any client-specific NSFW traps or locked rules from the client `CLAUDE.md`

Output the resulting Seedance 2.0 video prompt.

**Step 4.3 — Show and confirm**

Show the prompt to the user. Ask:

> *"Here's the video prompt. Want to run it as-is or tweak it first?"*

Options:
- **Run** — proceed to Phase 5
- **Tweak** — user edits in chat, regenerate the prompt, show again
- **Stop** — abort the pipeline

**Before running, scan the prompt for NSFW trigger words.** If any of these appear, flag them and suggest softer replacements:

| NSFW trigger | Softer replacement |
|---|---|
| violently | lands hard |
| detonates | lands hard |
| rip | lift sharply |
| blast | rushing |
| glare | looks |
| lock (onto camera) | meets the camera |
| snap | sets |
| slam-grab | lifts |

---

## Phase 5 — Video generation

**Step 5.1 — Run the CLI command**

```bash
higgsfield generate create seedance_2_0 \
  --prompt "<video prompt from Phase 4>" \
  --image <storyboard_path.png> \
  --duration 15 \
  --aspect_ratio <aspect_ratio> \
  --resolution 480p \
  --wait \
  --json | node tracker/log-from-json.js "<video prompt>" "seedance_2_0" "<client>"
```

**Critical CLI rules:**
- Never pass `--generate_audio` (flag doesn't exist on Seedance 2.0, silently fails)
- Use `--resolution 480p` for first pass to save credits. Only upgrade to `720p` or `1080p` after Cal approves.
- Use `--duration 15` for full storyboard animation. Minimum is 4 (anything less errors out).

**Step 5.2 — Open the raw result**

```powershell
start "" "<seedance_output_path.mp4>"
```

Ask user: *"Raw Seedance gen done. Continue to FFmpeg post (trim + music + end card)?"*

If yes → Phase 6. If no → stop and report file location.

---

## Phase 6 — FFmpeg post

**Step 6.1 — Trim the appended storyboard frame**

Seedance appends the source storyboard image at ~13.5s of a 15s gen. Trim it before doing anything else. Re-encode — `-c copy` does not cut on non-keyframes.

```bash
ffmpeg -i <seedance_output.mp4> \
  -t 13.0 \
  -c:v libx264 -pix_fmt yuv420p -r 24 \
  <trimmed_output.mp4> -y
```

**Step 6.2 — Add music (if provided)**

```bash
ffmpeg -i <trimmed_output.mp4> -i <music_path.mp3> \
  -c:v copy -c:a aac -shortest \
  <with_music.mp4> -y
```

If no music, skip this step — pass `<trimmed_output.mp4>` straight to Step 6.3.

**Step 6.3 — Append end card (if provided)**

The end card is a static image that slams in at the end. Generate a 2-second still video from the image, concat with the main video, write final output.

```bash
ffmpeg -loop 1 -i <end_card.png> \
  -c:v libx264 -t 2 -pix_fmt yuv420p -vf "scale=1080:1920" \
  <end_card_video.mp4> -y

printf "file '<with_music.mp4>'\nfile '<end_card_video.mp4>'" > concat.txt
ffmpeg -f concat -safe 0 -i concat.txt -c copy <final_output.mp4> -y
rm concat.txt <end_card_video.mp4>
```

If no end card, skip this step — `<with_music.mp4>` is the final output.

**Step 6.4 — Final filename**

Save the final video to:
- `clients/[name]/outputs/[client]_pipeline_v[N].mp4` if client folder exists
- `<current_directory>/pipeline_output_v[N].mp4` otherwise

Increment `v[N]` if a previous version exists.

---

## Phase 7 — Wrap up

**Step 7.1 — Open the final video**

```powershell
start "" "<final_output_path>"
```

**Step 7.2 — Report**

Tell the user:

> Final video saved to `<path>`.
> Total Higgsfield credits used: ~X.X (1 storyboard + N panel edits + 1 video).
> Logged to Google Sheet: storyboard + video rows added.

**Step 7.3 — Offer next actions**

> Three things you might want to do next:
> 1. Run again with a different brief — start fresh from Phase 1
> 2. Upgrade to 720p/1080p — same prompt, higher resolution gen
> 3. Stop here — final is in `<outputs folder>`

---

## Hard rules (apply at every step)

- **Babysit mode always.** Never chain phases without user confirmation. Never auto-proceed.
- **Open every file immediately after gen.** Use `start "" "<path>"` on Windows.
- **Log every gen.** Pipe `--json` to `node tracker/log-from-json.js` every single CLI call.
- **Open all CLI gens with `--wait` and `--json`.** No background jobs, no polling loops.
- **Read the client `CLAUDE.md` first** if a client is named. It contains NSFW traps, brand voice, locked assets specific to that client.
- **Default resolution is 480p** for first pass. Only upgrade after explicit user approval.
- **Default aspect ratio is 9:16** unless user says otherwise.
- **No `--generate_audio` flag.** Doesn't exist on Seedance 2.0, silently fails the gen.
- **No `-c copy` for FFmpeg trim.** Re-encode with `libx264` to get a clean cut.
- **No NSFW trigger verbs** in the video prompt. Soften every aggressive verb before running Seedance.
- **One emotion per shot** in the video prompt. Don't stack emotions in a single panel description.
- **Final shot holds longer** — the video prompt always tells Seedance to hold the last panel.

---

## What this skill is NOT

- Not a one-click "press go and walk away" tool. Cal explicitly wants to babysit every step.
- Not a node graph. It's a sequential walkthrough.
- Not multi-variation. One run = one video. To get variations, run the skill again.
- Not for non-Higgsfield pipelines. Hardcoded to Higgsfield CLI + Seedance 2.0.
- Not for high-resolution finals. Default is 480p draft — user approves before any 720p/1080p rerun.

---

## File map

- System prompts: `CreativeStudio/system-prompts/storyboard-architect.md` + `video-prompt-architect.md`
- Tracker: `CreativeStudio/tracker/log-from-json.js`
- Client folders: `CreativeStudio/clients/[name]/`
- Outputs: `CreativeStudio/clients/[name]/outputs/`
- Skill backup (git-tracked): `CreativeStudio/_skill-backups/creative-pipeline.SKILL.md`
