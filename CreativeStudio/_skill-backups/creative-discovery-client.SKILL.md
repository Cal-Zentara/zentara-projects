---
name: creative-discovery-client
description: "Onboards a new CreativeStudio client by running a tight 6-question creative-direction interview (product, video type, feeling + wildness dial, anti-version, anchor details, music), then scaffolds the full client folder: clients/[name]/ with brief.md, CLAUDE.md, assets/, outputs/. Also adds the new client to the STATUS.md Clients table. Video-first — designed for ad, organic post, entertainment piece, or AI character intros. Trigger phrases: 'new client', 'starting a new client', 'client discovery', 'creative discovery client', 'onboard a client'. Always run this BEFORE banana-pro-director or cinema-worldbuilder when the client doesn't have a folder yet."
---

# Creative Discovery Client — Intake Interview & Folder Scaffold

The skill that runs at the start of any new client engagement. It asks 6 questions in a controlled flow, pauses for answers, then builds the full client folder so banana-pro-director and cinema-worldbuilder have a brief to read from.

**Do not skip questions. Do not batch all 6 at once. Do not build the folder before the user says "lock it."**

---

## When this skill fires

Trigger phrases (case-insensitive): *"new client"*, *"starting a new client"*, *"client discovery"*, *"creative discovery client"*, *"onboard a client"*, *"new project for a client"*.

Also fire it proactively if the user asks for a prompt or generation for a client whose folder does not exist under `clients/`. In that case, say:

> *"I don't see a folder for [name] yet. Let's run the discovery interview first — it'll take about 2 minutes and lock the creative direction before we generate anything. Ready?"*

If the user says yes, start at Round 1. If the user says no, do NOT proceed with any gen — surface that nothing should be generated for a client without a brief.

---

## The Interview

Run the rounds in order. Ask one round, wait for the answer, then move on. Never collapse rounds.

### Round 1 — Client name and product (one combined question)

Ask:

> *"What's the client's name and what do they sell? One sentence."*

Capture as: `client_name` (folder-safe, lowercase, hyphens) and `product_line` (verbatim sentence).

If the name contains spaces or special characters, propose the folder name back to the user before continuing: *"I'll use `garlic-high` as the folder name — sound right?"*

### Round 2 — The first video

Use AskUserQuestion. Single-select.

Question: *"What's the first video we're making?"*
Header: `Video type`

Options:
- **Ad (paid promo)** — Built to convert. Hook in first 1.5s, product as hero.
- **Organic post (Reel / TikTok / Short)** — Built for the algorithm. Looser, faster, more entertaining than ads.
- **Entertainment piece** — Narrative or music-video vibe. Story-driven. Longer.
- **Character intro** — AI influencer or mascot debut. Establishes the character before any product.

Capture as: `video_type`.

Then ask follow-up (plain chat, not AskUserQuestion):

> *"What platform — IG, TikTok, YouTube, or all three?"*

Capture as: `platform`. Auto-suggest aspect ratio:
- IG Reel / TikTok / YouTube Short → `9:16`
- IG grid post → `1:1`
- YouTube long-form → `16:9`

State the suggestion: *"That maps to 9:16 — sound right or do you want a different aspect ratio?"*

Capture as: `aspect_ratio`.

### Round 3 — The feel + wildness dial

Two questions, asked together as plain chat (not AskUserQuestion — these are creative answers, not multiple choice):

> *"Two questions for the creative direction:*
>
> *1. One feeling word — what should the audience walk away with? (savage, craved, calm, playful, haunted, nostalgic, dangerous, numb, proud — or your own word)*
>
> *2. Wildness dial 1–10 — how far can we push? 1–3 is clean and realistic (luxury, finance, medical). 4–6 is stylized but believable (lifestyle, fashion). 7–10 is anime physics, broken reality, impossible moments. Garlic High was a 9."*

Capture as: `feeling_word` and `wildness_dial` (integer 1–10).

If the user picks a wildness dial of 7+, briefly confirm: *"Pushing into impossible-physics territory — every shot should land like an impact, not a quiet beat. Locked in."*

### Round 4 — The anti-version

Ask (plain chat):

> *"What would make this look fake, generic, or wrong? Easier to describe what to avoid than what to chase."*

Capture as: `anti_version`. This is the most important answer for keeping prompts on-brand — surface it back if the user gives a vague answer like *"I don't know"* or *"anything bad"*:

> *"Push on it — even a half-thought helps. 'Looks like a stock photo' or 'too corporate' or 'too cluttered' is enough."*

### Round 5 — Anchor details

Ask (plain chat):

> *"Give me 1–2 weird specific details that ARE this brand — the things that prevent the AI from drifting. Examples: chipped tooth on the chef, broken neon in the window, gold tooth on the customer, faded tattoo. Specifics that AI can hold onto."*

Capture as: `anchor_details` (array of 1–2 short phrases).

If the user can't think of any, propose 2 based on the product/feeling/wildness context and ask: *"Either of these fit, or want me to keep brainstorming?"*

### Round 6 — Music

Two questions, asked together:

> *"Music — do you already have a track, or are we generating one on Suno?*
>
> *And one tempo word: slow / driving / chaotic / hypnotic / quiet — which one fits?"*

Capture as: `music_source` (existing path / "generating on Suno" / "TBD") and `music_tempo` (one word).

---

## The Summary + Lock Gate

After all 6 rounds, summarize in this exact format. Do NOT generate any files until the user says "lock it" or equivalent.

```
Locking in the brief for [client_name]:

- Product: [product_line]
- First video: [video_type] for [platform] at [aspect_ratio]
- Feel: [feeling_word], wildness [wildness_dial]/10
- Anti-version: [anti_version]
- Anchor details: [anchor_details joined with " + "]
- Music: [music_source], tempo [music_tempo]

Lock it?
```

If the user wants to change something, edit the captured field and re-show the summary.

If the user says "lock it" / "lock" / "yes" / "go" — proceed to the build step.

---

## The Build Step

Create the following files. Use absolute paths. Do not ask permission for each file — the user already approved by locking.

### 1. The folder structure

Run (PowerShell-compatible):

```
mkdir "C:/Users/Aesth/Desktop/Zentara/Projects/CreativeStudio/clients/[client_name]/assets" -Force
mkdir "C:/Users/Aesth/Desktop/Zentara/Projects/CreativeStudio/clients/[client_name]/outputs" -Force
```

### 2. `clients/[client_name]/brief.md`

Write this exact template, with all `{{...}}` placeholders replaced by captured values:

```markdown
# {{client_name}} — Brief

## What They Sell

{{product_line}}

## The Creative Direction

- **Feeling word:** {{feeling_word}}
- **Wildness dial:** {{wildness_dial}}/10
- **Anti-version:** {{anti_version}}
- **Anchor details:** {{anchor_details_bulleted}}

## First Video

- **Type:** {{video_type}}
- **Platform:** {{platform}}
- **Aspect ratio:** {{aspect_ratio}}

## Music

- **Source:** {{music_source}}
- **Tempo:** {{music_tempo}}

## Notes

(Add anything that comes up during prompt writing or generation — NSFW traps, specific blocks, what worked, what didn't.)
```

### 3. `clients/[client_name]/CLAUDE.md`

Write this exact template:

```markdown
# {{client_name}} — Locked Formulas

## Brief

See `brief.md` for product, creative direction, first video, and music.

## Locked Formulas (populate as you find what works)

| Asset type | Formula | Source prompt | Date locked |
|---|---|---|---|
| TODO: populate once a gen is approved | | | |

## NSFW / Sensitivity Traps

| Word / phrase | What it blocked | Replacement |
|---|---|---|
| TODO: log triggers as they happen | | |

## Open Questions / Decisions Pending

- TODO: populate as questions come up during gens
```

### 4. Update `STATUS.md` Clients table

Read `STATUS.md`. Find the line that starts with `| Client | Status | Notes |` (the Clients table). Add this row immediately after the existing client rows, before the next blank line:

```
| {{client_name}} | Discovery complete — first {{video_type}} pending | {{feeling_word}}, wildness {{wildness_dial}}/10. {{anchor_details_joined}}. |
```

### 5. Confirm the build

Reply to the user with this format:

```
Folder built for {{client_name}}:

clients/{{client_name}}/
├── brief.md      ✓ filled in
├── CLAUDE.md     ✓ scaffolded
├── assets/       ✓ ready for logos/photos
└── outputs/      ✓ ready for gens

STATUS.md updated — new row in Clients table.
```

---

## Optional Extras (after the folder is built)

These are opt-in — never auto-run. Ask each one separately. Wait for an answer before moving to the next.

### Extra A — Niche research (background)

Ask:

> *"Want me to research what's actually converting in this niche right now? Runs in the background — I'll save the findings to `clients/{{client_name}}/research.md` so you can read it when you're ready."*

If yes, spawn an agent in the background (run_in_background: true). Prompt:

> *Research what's working right now (2026) for [product_line] on [platform]. Specifically: (1) top 3 hooks that stop the scroll, (2) visual styles that perform on this platform for this kind of product, (3) copy angles that convert, (4) what to avoid — overused tropes, common mistakes. Use web search. Save the output as `C:/Users/Aesth/Desktop/Zentara/Projects/CreativeStudio/clients/{{client_name}}/research.md` in plain English — short, scannable, written for someone with no marketing background. Under 500 words.*

Do not wait for the agent. Move to Extra B while it runs.

If no, skip and move on.

### Extra B — 3 quick exploration images

Ask:

> *"Want me to fire 3 cheap test images to lock the visual direction before we commit to full quality? Three variations, one credit each. Helps you pick the aesthetic without burning credits on the real gens."*

If yes:

1. Write 3 short image prompts that explore different aesthetic interpretations of the locked brief. Each prompt should reference: `feeling_word`, `wildness_dial`, `anchor_details`. Vary the camera distance, lighting, or framing across the 3 — not the subject. Keep the variable controlled so the user can actually pick a direction.

2. For each prompt, run the CreativeStudio CLI at the cheapest settings:

   ```
   higgsfield generate create \
     --prompt "<test prompt>" \
     --model nano_banana_2 \
     --aspect_ratio {{aspect_ratio}} \
     --wait \
     --json | node tracker/log-from-json.js "TEST: <short description>" "nano_banana_2" "{{client_name}}"
   ```

3. After each one completes, open the result file immediately: `start "" "<output path>"` so Cal can see it.

4. Once all 3 are done, show the 3 outputs side-by-side and ask: *"Which direction works? Or do all 3 miss?"*

5. Save the user's pick to `clients/{{client_name}}/CLAUDE.md` under "Locked Formulas" with the winning prompt.

If no, skip.

### Final confirm

After both Extras (or after the user declines both), reply:

```
Discovery complete for {{client_name}}.

Folder: clients/{{client_name}}/
Research: [running in background / skipped]
Test images: [3 generated, "<winner>" locked / skipped]

Next: drop any existing brand assets into clients/{{client_name}}/assets/, then call banana-pro-director or cinema-worldbuilder to generate the first {{video_type}}.
```

---

## Hard rules

- **Never skip the interview** — even if the user is impatient. Two minutes of intake saves hours of off-brand gens later.
- **Never collapse rounds** — one round at a time. Cal's CLAUDE.md says *"One concept. Cal asks for more if needed."*
- **Never build the folder before "lock it"** — the user must explicitly approve the summary.
- **Folder name is lowercase + hyphens** — `garlic-high` not `Garlic High`. Higgsfield CLI and tracker scripts assume this.
- **If a client folder already exists, do not overwrite it** — tell the user the folder exists and ask if they want to update the brief or start fresh.
- **Plain English throughout** — no jargon. Cal's profile rules: no technical terms unless he asks.
- **No sidebars (blockquote `>`) in the summary or final reply** — CreativeStudio CLAUDE.md universal rule.
