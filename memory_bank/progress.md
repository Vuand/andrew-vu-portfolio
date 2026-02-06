# Progress Tracker

> Updated: 2026-02-06

---

## Done (Recent)
- [x] Scaffolded Next.js 14+ project (App Router, TypeScript, Tailwind v4)
- [x] Installed core dependencies (framer-motion, next-themes, lucide-react, cva, clsx, tailwind-merge)
- [x] Configured global CSS with light/dark mode tokens, glass, grid, gradient utilities
- [x] Created utility functions (`cn()`) and site constants
- [x] Created Memory Bank with all 10 planning documents + Cursor rule
- [x] Built UI components: Button, Badge, Card, Toast, CopyButton, ThemeToggle, ScrollProgress, SectionHeading, MotionWrapper (FadeIn, Stagger, StaggerItem)
- [x] Built layout: Navbar (sticky, glass, mobile hamburger, active link), Footer, ThemeProvider
- [x] Built project data layer (`src/data/projects.ts`) with 4 projects
- [x] Built homepage: Hero, Recruiter TL;DR, Proof Tiles, Featured Projects, Skills Grid, CTA
- [x] Built projects index page with tag filter chips
- [x] Built project case study template with full sections (Problem → Solution → Arch → Security → Results → Tech → Artifacts)
- [x] Built SponsorHub architecture diagram as animated SVG React component
- [x] Built all 4 project case study pages (SponsorHub, Home Assistant AI, WPI, GUMC)
- [x] Built security proof page (provable patterns, threat models, coursework)
- [x] Built resume page (timeline layout, education, experience, achievements, volunteer)
- [x] Built contact page (copy email, GitHub, LinkedIn, direct CTA)
- [x] Added SEO: metadata, JSON-LD Person schema, sitemap.ts, robots.ts, OG tags
- [x] Added skip-to-content link for accessibility
- [x] Production build passes — 14 routes, 0 errors

## In Progress
- [ ] Lighthouse audit and performance tuning

## Not Started
- [ ] Add real assets (headshot, screenshots, resume PDF, OG image)
- [ ] Vercel deployment
- [ ] Lighthouse ≥ 90 verification
- [ ] Home Assistant architecture diagram (SVG component, like SponsorHub)

## Blockers
- None

## Bugs / Tech Debt
- (none — clean build)

## Milestones
1. **M1 — Skeleton**: All pages render with content ✅ DONE
2. **M2 — Polish**: Animations, interactions, dark mode, responsive ✅ DONE
3. **M3 — Content**: Copy, placeholders, SEO ✅ DONE
4. **M4 — Ship**: Deploy to Vercel + add real assets → NEXT
