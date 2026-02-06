# Active Context — Current Sprint

> Updated: 2026-02-06

## What We're Working On
**Phase 2: Ship**
Homepage is now a complete recruiter view. Next: real assets + deploy.

## Current State
- Full Next.js site built — 14 routes, 0 build errors
- **Homepage is a complete recruiter view** — no clicking required to see full experience/education/skills/security:
  Hero → TL;DR → Projects (proof tiles + 3 cards) → Experience → Education → Skills (Software|Security tabs) → Security Preview → Contact
- Navbar uses scroll-spy with section anchors on homepage, page links on subpages
- Scroll progress indicator on homepage
- Skills section has Software/Security toggle tabs
- Security preview shows "What I Can Prove" vs "What I'm Learning" split
- All subpages (projects, security, resume, contact) still accessible for deep dives

## Homepage Section Flow
1. Hero (id="hero") — dual-role headline, CTAs, GitHub/LinkedIn
2. Recruiter TL;DR — 4 proof bullets
3. Featured Projects (id="projects") — 4 proof tiles + 3 project cards
4. Experience (id="experience") — full work history in HTML
5. Education (id="education") — OSU + PSU + achievements
6. Skills (id="skills") — Software/Security tab toggle
7. Security Preview (id="security") — provable patterns, threat model cards
8. Contact (id="contact") — email copy, socials

## Immediate Next Steps
1. Add real assets (headshot, screenshots, resume PDF)
2. Deploy to Vercel
3. Run Lighthouse audit
4. Iterate on visual/performance issues

## Open Questions for User
- [ ] What's your current city for the site?
- [ ] Do you have a professional headshot?
- [ ] Are the WPI and GUMC sites still live?
- [ ] Have you done any CTFs, bug bounties, or security writeups?
- [ ] Do you have a resume PDF ready?

## Blockers
- None — fully functional with placeholders
