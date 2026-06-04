# Kling — Start Frame & End Frame Cheat Sheet

Researched June 2, 2026. Universal CreativeStudio reference (not client specific).

## The idea in one line

You give Kling two pictures, a start and an end. It fills in all the motion between them. Picture A turns into picture B.

## How to run it (Higgsfield CLI)

```
higgsfield generate create kling3_0 --prompt "slow camera push in, soft natural motion" --start-image ./start.png --end-image ./end.png --duration 5 --mode pro --wait --json | node tracker/log-from-json.js "kling start-end" "kling3_0" "<client>"
```

- The two flags that matter: `--start-image` and `--end-image`.
- **Only Kling 3.0 (`kling3_0`) supports start + end in Higgsfield.** The older Kling there (`kling2_6`) does not.
- Both flags take a local file path (auto uploaded) or a UUID from a previous upload.
- Mode: `std` or `pro`. Sound: `on` or `off` (3.0 can do native audio).

## The rules that make or break it

1. **The two pictures have to be close.** Same character, same spot, same lighting. Small change between them = smooth. Big change (indoor to outdoor, day to night, totally different scene) = ugly morph or a hard cut (Kling treats it as a jump cut, not a transition).
2. **Faces morph easily.** If the face is at a different angle, or smiling in one and neutral in the other, it warps. Keep the face at the same angle and lighting between the two frames. Neutral beats a big expression change.
3. **Match scale and aspect ratio.** Keep the subject/product the same size in both frames, and the same aspect ratio (it locks to the start frame). Mismatched size = stretching.
4. **5 seconds is the sweet spot.** 10s works but more glitches show up mid clip. For longer, chain two 5s clips (the end frame of clip one becomes the start frame of clip two).
5. **Go light on the prompt.** The pictures do the heavy lifting. The prompt just describes the motion ("she turns to look back", "camera pushes in slowly"). Overloading it with detail is the number one way to break it. You can even leave it blank.

## Common failures and the fix

| What goes wrong | Why | Fix |
|---|---|---|
| Subject stretches/warps | Subject is a different size in the two frames | Keep it the same size in both |
| Face changes identity | Face angle or expression shifts between frames | Same angle, same lighting, neutral face |
| Jittery middle | Prompt too detailed or two camera moves at once | Keep prompt minimal, one camera move |
| Nothing moves | The two frames are basically identical | Add a clear intended motion or more difference |
| Hard cut instead of smooth morph | Frames differ too much in scene/color/light | Keep lighting and color continuous between frames |

## Good uses

- Before / after reveal
- A kid turning front to back to show the outfit (start = front, end = back)
- Product zoom (start = wide, end = close)
- Outfit swap on the same kid, same pose (start = outfit A, end = outfit B)
- Loop: use the SAME image as start and end and it returns to where it began

## Model notes (June 2026)

- **Kling 3.0** is the newest/best (released Jan 31, 2026). Up to 15s, native audio, 4K, best face consistency. This is the one that supports start+end in Higgsfield.
- Kling 2.5 Turbo is the budget option on the Kling app itself (~30% cheaper) but isn't the start/end model in Higgsfield.
- Standard mode = cheaper/faster, Professional mode = more polish (roughly 2–3x the cost). Use `pro` for finals, `std` for tests.

## Where this fits vs Seedance

Seedance 2.0 stays our default for character/personality driven motion (the kid videos). Reach for Kling start+end when you need a controlled transition between two exact images — a clean before/after, a reveal, a turn. Two-point control: you set frame A and frame B, Kling fills the middle.
