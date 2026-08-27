# SheVegas — do not rebuild from scratch

This is **SheVegas**, Mike Brunette’s civic desk. Edit in place. Push to GitHub
and Vercel. Never scaffold a new app for a follow-up.

## One page, two apps, stacked

The homepage is both existing products, one above the other:

1. **What Really Went Down** (top) — Plan Commission, August 26, 2026.
   Clip reel, longform, numbers, timeline. Art by Mike Brunette
   (harbor rocks, swing, Weill Center, cracked path).
2. **The Sheboygan Brief** (bottom) — weekly spoken briefing.
   Episode 01 “149 Short.” Standalone also lives at shevegas.org
   (`ishevegas-max/the-sheboygan-brief`).

## Repos and live sites

- Code: `ishevegas-max/what-really-went-down`
- Media CDN: `cdn.jsdelivr.net/gh/ishevegas-max/what-really-went-down@…/public`
- Brief audio/cover: GitHub raw on `ishevegas-max/the-sheboygan-brief`
- shevegas.com — this combined page (light paper on top, dark brief below)
- shevegas.org — The Sheboygan Brief, standalone

## Rules for later sessions

- Do not recreate the meeting story, clip data, or Brief episode from memory of a transcript. They are already in `src/lib/meeting.ts` and `src/lib/episode.ts`.
- Do not weave the Brief into the Record or restyle one to match the other. They stay visually distinct: paper/ink magazine on top, Fraunces/Figtree night studio below.
- “Use my art” means Mike’s own photos and videos already in `public/` and on the CDN — not generated stand-ins.
- Auth and database stay OFF.
