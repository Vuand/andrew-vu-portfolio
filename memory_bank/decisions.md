# Architecture Decision Records

> Format: Date | Decision | Rationale | Alternatives Considered | Consequences

---

## ADR-001: Tech Stack — Next.js + Tailwind + Framer Motion

**Date**: 2026-02-06
**Status**: Accepted

**Decision**: Build with Next.js 14+ (App Router), TypeScript, Tailwind CSS v4, Framer Motion, next-themes, lucide-react.

**Rationale**:
- Next.js App Router: Server components for performance, file-based routing, built-in SEO support (metadata API, sitemap, robots)
- TypeScript: Type safety, better DX, signals engineering rigor to recruiters
- Tailwind v4: Utility-first CSS with new CSS-first config, fast iteration, small bundle
- Framer Motion: Best-in-class React animation library, supports reduced motion, declarative API
- next-themes: Battle-tested dark mode with zero flash
- lucide-react: Lightweight, consistent icon set

**Alternatives Considered**:
- Astro (faster static, but less React ecosystem support)
- Vanilla CSS/SCSS (slower iteration, harder to maintain)
- GSAP for animations (heavier, more complex API)
- shadcn/ui (considered, may add later for complex components)

**Consequences**:
- Requires Node.js runtime for dev
- Tailwind v4 uses new `@theme` syntax (different from v3)
- Must handle hydration carefully with dark mode (next-themes handles this)

---

## ADR-002: Information Architecture — One-Scroll Home + Deep Case Studies

**Date**: 2026-02-06
**Status**: Accepted

**Decision**: Homepage is a single-scroll page with 6 sections. Projects have their own index page with filters and individual case study pages.

**Rationale**:
- Recruiters scan fast — home page must convey value in 10 seconds
- Deep case studies prove depth for interested readers
- Separate `/security` page positions cybersecurity credibility as first-class
- `/resume` page provides familiar format for HR/ATS workflows

**Alternatives Considered**:
- Multi-page home (slower navigation, worse first impression)
- Projects only on home page (not enough depth)
- No security page (misses cybersecurity positioning)

**Consequences**:
- Must keep homepage sections concise and scannable
- Case studies need a consistent template for quality
- Navigation must clearly surface all pages

---

## ADR-003: Confidential Project Handling — SponsorHub

**Date**: 2026-02-06
**Status**: Accepted

**Decision**: Feature SponsorHub as a case study focusing on architecture, invariants, and engineering decisions. No private repo code exposed. Include explicit confidentiality note.

**Rationale**:
- SponsorHub is the strongest proof of security-minded engineering
- Architecture + invariants demonstrate capability without leaking IP
- Confidentiality note is professional and transparent
- Recruiters care about design decisions, not implementation details

**Alternatives Considered**:
- Exclude SponsorHub entirely (loses best security proof)
- Include sanitized code snippets (risky, hard to maintain)
- Wait until launch to feature (delays portfolio value)

**Consequences**:
- Must be careful about what details are shared
- Architecture diagrams should be abstract (system-level, not code-level)
- "Happy to walk through live" CTA creates interview conversation starter

---

## ADR-004: Styling Strategy — CSS Variables + Tailwind Tokens

**Date**: 2026-02-06
**Status**: Accepted

**Decision**: Use CSS custom properties for theme tokens, mapped through Tailwind v4's `@theme inline` directive. Dark mode via class strategy with `next-themes`.

**Rationale**:
- CSS variables enable runtime theme switching without JS
- Tailwind v4's `@theme inline` maps vars to utility classes seamlessly
- Class-based dark mode (`.dark` class) is more reliable than media query
- next-themes handles the class toggle + SSR flash prevention

**Alternatives Considered**:
- Tailwind's built-in `dark:` variant with media query (no user toggle)
- CSS-in-JS (larger bundle, worse performance)
- Static light-only (limits appeal)

**Consequences**:
- All color values must use CSS variable tokens
- Components use Tailwind utilities that reference these tokens
- Theme toggle must be accessible (keyboard, screen reader)
