# Ideas — Tools & Integrations

Tools to add, integrations to build, and technical experiments worth revisiting.

---

## Microsoft Clarity + Claude MCP

Free heatmap/session recording tool. Has a Claude connector in Cowork. Connect it to landing pages running paid ads to see where visitors drop off, dead clicks, mobile vs desktop behavior, traffic source comparison. Relevant for any client running paid traffic to a funnel.

---

## Blender + Python — 3D Content & Product Renders

Use Python to control Blender (free professional 3D software). Automate 3D renders, animated intros, thumbnail generation, and product renders for clients. Studios charge $500–$2000 per product render — you'd do it with a script. Start small: rotating cube with your logo, then build up. Come back to this once Python basics are solid.

---

## Video Editing with Claude Code (April 17, 2026)

Automated video editing pipeline using Claude Code + free tools. ~5-15 cents per video.

**One-time setup:**
1. Install FFmpeg — `choco install ffmpeg` (free video cutter)
2. Install Whisper — `pip install openai-whisper` (free speech-to-text from OpenAI)
3. Create folder structure: `input/` and `output/`
4. Clone this repo — has the CLAUDE.md template and everything ready: `digitalsamba/claude-code-video-toolkit`
5. Set your editing preferences in CLAUDE.md (how aggressive to cut, caption style, etc.)

**Every time you edit a video:**
1. Drop raw video in `input/` folder
2. Tell Claude Code "edit this video"
3. Whisper transcribes it and finds filler words with timestamps
4. FFmpeg cuts filler words, silences, and long pauses
5. Edited video lands in `output/` folder

**What it handles automatically:**
- Removes filler words (um, uh, like, you know)
- Cuts silences longer than X seconds (you set the threshold)
- Enhances audio quality
- Burns in captions

**Real cost:** ~5-15 cents per video. FFmpeg and Whisper are free — only Claude tokens cost anything.

**Downside:** Cannot easily see what was changed — you just get the finished video.

**Alternative:** Descript — edit like a Google Doc, see every cut, more manual but higher quality.

**When to build this:** When Cal.Zentara content starts flowing and you need a fast cheap editing pipeline.
