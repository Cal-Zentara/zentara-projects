## Demo Projects

### 0. AutoBuildCharlie — The Main Brand
**Focus:** AI automation services for small businesses
- Live website at https://autobuildcharlie.github.io/AutoBuildCharlie-site
- Chatbase chatbot embedded and trained on business info
- Calendly booking system with automated email reminders
- Stripe live payment processor ready to collect deposits
**Pain Points AutoBuildCharlie Solves:** Small business owners drowning in repetitive admin, no-shows, missed bookings, and manual follow-ups — no time to focus on their actual work
**Pitch:** "I set up AI tools for small businesses — chatbots, automated emails, admin tasks. So you can spend more time with your clients while the back-end handles itself."

---

### 1. Neil Dang Fitness — Personal Trainer
**Focus:** Local service business (appointments)
- Book in-person and online training sessions
- Answer FAQs about pricing, services, and location
- Automated reminders to reduce no-shows
- Nutrition and powerlifting coaching info
**Pain Points:** Admin overload, no-shows, inconsistent social media, finding new clients, onboarding new clients manually

### 2. Heros Threads — Clothing Store
**Focus:** E-commerce and retail
- Handle customer support (sizing, shipping, returns)
- Suggest collections and products
- Order tracking and return/exchange flows
- Both online and physical store presence
**Pain Points:** High volume of repetitive support questions, managing returns, low foot traffic, no consistent social media presence

### 3. Eagles Expo — Marketing Agency
**Focus:** Agencies and professional services
- Qualify leads and book free audit calls
- Showcase services (social media, ads, branding, SEO)
- Automate follow-ups with prospects
- Clear process from inquiry to client
**Pain Points:** Lead generation, slow follow-ups, losing prospects who never hear back, client onboarding and management

### 4. My La Realty — Real Estate
**Focus:** Solo realtor / real estate
- Respond to listing inquiries 24/7
- Qualify buyers, sellers, and renters
- Schedule showings and calls
- Nurture leads with property info
**Pain Points:** Missing inquiries after hours, manually qualifying leads, no-show showings, inconsistent follow-up, admin and onboarding, low social media presence

### 6. Global Road Sealing Inc (GRSI) — Road & Pavement Contractor
**Status: Real client — full project, not a demo**
- La family business based in Stanton, CA — founded by Cezar La
- CSLB Licensed, DIR Registered, DBE & SBE Certified
- Live app: app.globalroadsealing.com — React + Supabase field operations management app
- Marketing site: globalroadsealing.com
- Full project lives at: `Desktop/Zentara/Projects/GlobalRoadSealingInc`
**Key people:** Tri La (President), Steve La (VP), Cezar La (Treasurer & Founder), Louise La (Co-Founder)

---

### 5. Disinfect Programs — Healthcare Cleaning (B2B)
**Focus:** Small B2B sales and marketing
- Target businesses (hospitals, clinics, dental offices)
- Qualify leads and book quote calls
- Highlight compliance (CDC, OSHA, AORN)
- Monthly service contracts
**Pain Points:** Finding new facility clients, slow follow-ups after outreach, manual scheduling and admin, no consistent online presence to build credibility

---

## What I've Learned

### Foundations (March 2025 — March 2026)
**AI & Claude**
- How Claude works and why context matters
- Prompt writing — giving Claude clear, specific instructions gets better results
- CLAUDE.md — not a config file, a teaching document for Claude
- Memory files — Claude's long-term brain across sessions
- MCP — extra limbs that let Claude reach into external tools
- Context compaction — Claude silently loses older info when session gets too long. Fix: `/memory`

**Building & Vibe Coding**
- Building websites using AI without traditional coding
- Single-file HTML/JS/CSS builds
- GitHub + GitHub Pages — version control and free hosting
- Cloudflare Workers — proxy layer to hide API keys safely
- Groq API — free AI model
- PWA — making a website installable like a phone app

**No-Code Tools**
- Chatbase — building and embedding chatbots
- Calendly — booking system with automated reminders
- Stripe — taking payments online
- Supabase — databases

**Business**
- How to pitch AI to small business owners in plain language
- How to build demo projects to show potential clients
- What pain points small businesses actually have (no-shows, admin overload, missed inquiries)

---

### Session Notes
- **2026-03-20** — Context compaction: Claude's memory fills up mid-session and older info gets silently erased. Fix: type `/memory` at the end of every session so important stuff gets saved to memory files before it's lost.
- **2026-03-20** — CLAUDE.md is not a config file — it's like onboarding a colleague who never forgets. Write it like you're teaching someone, not setting up an app.
- **2026-03-20** — Memory files are Claude's long-term brain. MEMORY.md is just the index — keep it under 200 lines. Details go in topic files.
- **2026-03-20** — MCP (Model Context Protocol): like giving Claude extra limbs that reach into external tools. Each MCP lets Claude interact with a different service. My current MCPs: Brave Search (web search), GitHub (push code live), Supabase (database).