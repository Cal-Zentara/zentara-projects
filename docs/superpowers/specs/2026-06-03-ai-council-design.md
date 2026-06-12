# Cal's AI Council — The Plan

*Written June 3, 2026. Plain English on purpose.*

## What it is

A panel of four AI advisors Cal can call anytime by typing `/council`.
Cal says what he's deciding. Four advisors weigh in, each on their own.
One of them (the Chairman) pulls it together into a single clear answer.

## What it's for

Decisions and judgment calls. A second opinion before Cal spends time, credits, or money.
- "Is this ad good enough to send?"
- "Should I charge this client, and how much?"
- "Am I about to waste effort on the wrong thing?"

NOT for: looking up facts or doing tasks. That's a normal chat with Claude.

## The four seats

Three seats are always there. The third seat swaps to fit the decision.

| Seat | Always in? | Job |
|---|---|---|
| The Strategist | Yes | Is this the right move for Cal's bigger goal and the relationship? |
| The Skeptic | Yes | Attack it. What goes wrong, what's Cal not seeing, where will he cave? |
| The Chairman | Yes | Read all of it, audit it, hand Cal one clear verdict. |
| The swap seat | Picks one below | The right specialist for the topic. |

The swap seat:
- **Money decision** (pricing, charge or not) -> **The Money voice**
- **Ad or creative decision** -> **The Customer** (would the real audience buy?)
- **A site or pitch before it ships** -> **The Critic** (what looks unfinished or off?)
- **Content or social decision** -> **The Content seat** (checks what's trending and working right now, judges if the idea would stop a scroll, pitches sharper angles)

More seats can be added later anytime. The room only ever sits four at once, so the right specialist shows up for the job.

## What makes them deep, not shallow

Two rules, both backed by research (Wharton 2025: a title alone does nothing; PromptHub: the method is where depth lives).

1. **Each seat gets a real brief, not a name tag.** It is told the exact checklist a real expert runs, and what to look for.
2. **Each seat reads real knowledge first, then answers.** It studies Cal's own playbooks before speaking:

| Seat | Reads first |
|---|---|
| Strategist | Cal's business vision, goals, brand.md |
| Skeptic | Cal's JOURNEY lessons (his real past mistakes) |
| Money voice | The pricing-strategy playbook + Cal's price menu |
| Customer | The customer-research playbook + the client's audience notes |
| Critic | decisions.md (design taste) + the critique playbook |
| Content | Live trend check (web search) + brand.md + Cal's voice profile + his content rules |

## How it runs

1. Cal types `/council` and says what he's deciding.
2. The council pulls the facts it needs from Cal's project files. If something key is missing, it asks Cal one question.
3. The right swap seat is chosen for the topic.
4. The three advisors answer **blind** (they do not see each other's answers). This stops them from just agreeing. (Karpathy's key insight.)
5. The Chairman reads all three, **audits** them (does not just average), and hands Cal one verdict: go, don't go, or fix these first. The disagreements are shown, not hidden.

## The honest guardrails

- **Cal makes the final call.** The council catches blind spots. It does not decide for him. (Harvard 2025: AI helps strong operators about 10 to 15%, but only as a thinking partner.)
- **The Skeptic is built to genuinely push back.** No flattery, no yes-man. If the advisors just polish Cal's idea, the tool is worthless.
- **Garbage in, garbage out.** A vague question gets a vague answer. Real facts get a sharp one.

## What gets built

One Claude Code skill named `council`, so `/council` works anytime.
Free. No app, no install, nothing to maintain. It is just Claude running Cal's advisors.

## How we test it

Run it on a real live decision (a price or an ad). If it's sharp, keep it. If not, fix the briefs and run again.
