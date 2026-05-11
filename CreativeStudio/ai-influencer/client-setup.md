# AI Influencer — Client Setup

How to build an AI influencer for a client, start to finish.

---

## Step 1 — Collect From the Client

Send them these questions. You need all of them before you build anything.

### About Them
- What's your name and what do you do?
- What do you sell or promote?
- Who is your customer? (Age, lifestyle, what do they care about?)
- What do you want people to feel when they see your content?

### Their Look
- Send 3–5 photos of yourself (or the style you want your AI influencer to look like)
- What's your hair color, style, and general vibe?
- Any specific look you love — a celebrity, a style, a mood board?
- Are there any looks you absolutely don't want?

### Their Brand
- What are your brand colors? (Or describe the feeling — warm, cool, dark, clean, moody, bright?)
- What's your brand name?
- Do you have a logo?

### Their Voice
- How do you talk to your audience? (Warm and personal? Professional? Playful? No-nonsense?)
- What's one thing you always say or a phrase that feels like you?
- What do you never want to sound like?

### Their Goals
- What platforms are you posting on? (Instagram, TikTok, YouTube?)
- What's the main goal of the content? (Get followers, sell a product, build trust, promote services?)
- Is there a specific product or offer you want to promote first?

---

## Step 2 — Set Up Their Folder

Once you have their answers, create their folder:

```
AIInfluencers/
  [client-name]/
    profile.md        ← write this from their answers
    reference.png     ← their photo or the look they chose
    prompts.md        ← generated after running the skill
```

---

## Step 3 — Write Their Profile

Open `profile.md` and fill it out using their answers. Model it after `AIInfluencers/cal/profile.md`.

Cover:
- Who they are and what they do
- What their AI influencer looks like
- Their brand colors and vibe
- Their audience
- Their voice and tone
- Their main goal for the content

---

## Step 4 — Run the Skill

Type `/ai-influencer` and give it:
- Their reference photo
- Their product or service
- Their brand link (if they have a website)

The skill outputs:
- 3 content directions for their brand
- Multiple video prompts ready to paste into Higgsfield

Save the output to their `prompts.md` file.

---

## Step 5 — Generate the Video

1. Open Higgsfield
2. Go to Seedance 2.0
3. Paste one of the prompts
4. Upload their reference photo as the character
5. Generate

Review the result. If the look is off, adjust the prompt and regenerate.

---

## Step 6 — Deliver to the Client

Hand them:
- The finished video(s)
- Their content prompts (so they can generate more themselves, or you can do it on retainer)
- A short note on what each video is for and where to post it

---

## What to Charge

| What you deliver | Price |
|---|---|
| Full setup + 3 videos | $300–$500 |
| Setup + 3 videos + 5 extra prompts they can run themselves | $500–$800 |
| Monthly retainer — generate 8–12 videos/month | $300–$500/mo |
