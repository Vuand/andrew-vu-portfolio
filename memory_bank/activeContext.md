# Active Context — Current Sprint

> Updated: 2026-02-06

## What We're Working On
**Phase 2: Ship**
Full site is built and compiling. Next: add real assets and deploy.

## Current State
- Full Next.js site built — 14 routes, 0 build errors
- All 6 pages complete: Home, Projects (index + 4 case studies), Security, Resume, Contact
- Animations, dark mode, responsive design, keyboard nav all working
- SEO configured: metadata, JSON-LD, sitemap, robots, OG tags
- SponsorHub architecture diagram rendered as animated SVG

## What Was Built (file count)
- 10 UI components in `src/components/ui/`
- 3 layout components in `src/components/layout/`
- 6 homepage sections in `src/components/sections/`
- 1 project-specific component (SponsorHub diagram)
- 1 data file (`src/data/projects.ts`)
- 8 page routes (including server + client component splits)
- 2 SEO files (sitemap.ts, robots.ts)

## Immediate Next Steps
1. Run `npm run dev` and verify visually
2. Add real assets (headshot, project screenshots, resume PDF)
3. Deploy to Vercel
4. Run Lighthouse audit
5. Iterate on any visual/performance issues

## Open Questions for User
- [ ] What's your current city for the site? (Corvallis or Portland area?)
- [ ] Do you have a professional headshot ready?
- [ ] Are the WPI and GUMC sites still live? Can we link to them?
- [ ] Have you done any CTFs, bug bounties, or published security writeups?
- [ ] Which Oregon university was the Student Ambassador role for?
- [ ] Do you want a custom domain (e.g., andrewvu.dev)?
- [ ] Do you have a resume PDF ready to include?

## Blockers
- None — site is fully functional with placeholders
