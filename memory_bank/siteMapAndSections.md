# Site Map & Sections

## Page Structure

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | One-scroll landing page — hook, proof, CTA |
| `/projects` | Projects Index | Filterable project cards with tag chips |
| `/projects/[slug]` | Project Case Study | Deep dive: problem → solution → architecture → results |
| `/security` | Security Proof | Cybersecurity credibility page — patterns, artifacts, proof |
| `/resume` | Resume | Embedded PDF placeholder + download button |
| `/contact` | Contact | Email copy-to-clipboard + optional lightweight form |

---

## Homepage Section Order

1. **Hero** — Headline + subhead + 2 CTAs (View Projects, Download Resume)
2. **Recruiter TL;DR** — 4 proof bullets in a bento card
3. **Proof Tiles** — 3 impact-oriented tiles (projects shipped, security patterns, tech breadth)
4. **Featured Projects** — 3 project cards (SponsorHub, Home Assistant, WPI)
5. **Skills** — Compact bento grid of skill categories
6. **CTA** — "Let's talk" section with contact link

---

## Navigation

**Sticky top nav** with:
- Logo/name (left) → links to `/`
- Links: Home, Projects, Security, Resume, Contact
- Theme toggle (dark/light) on far right
- Active-section highlighting on homepage scroll
- Mobile: hamburger menu with slide-out

---

## Content Priorities

### 10-Second Scan (above the fold)
Recruiter must understand:
1. Name + role target (Full-Stack + Security)
2. Currently studying CS + Cybersecurity at Oregon State
3. Has shipped real projects
4. CTA to dig deeper

### 60-Second Read
Recruiter should be able to:
1. Read TL;DR bullets
2. Scan 3 proof tiles
3. Click into 1 project case study
4. See tech stack breadth
5. Find resume download + contact

---

## Case Study Template (for `/projects/[slug]`)

Each project page follows this structure:
1. **Header**: Title, one-liner tagline, tags, status badge
2. **Problem**: What needed solving and why
3. **Role**: What Andrew specifically did
4. **Solution**: What was built and key decisions
5. **Architecture**: System design + diagram (or placeholder)
6. **Security & Reliability**: Threat mitigations, invariants, hardening
7. **Results**: Outcomes, metrics (or `[Add metric: ...]` placeholder)
8. **Tech Stack**: Listed with context
9. **Links / Artifacts**: GitHub, live site, screenshots, diagrams, demos

---

## Interactivity Checklist

- [ ] Sticky nav with active-section highlighting
- [ ] Scroll progress indicator on case study pages
- [ ] Filter chips on `/projects` (Full-Stack / Security / AI / Web / Infra)
- [ ] Copy-email button with toast notification
- [ ] Light/dark mode toggle with smooth transition
- [ ] Hover micro-interactions on cards
- [ ] Motion on scroll (Framer Motion, subtle)
- [ ] Keyboard accessible throughout
