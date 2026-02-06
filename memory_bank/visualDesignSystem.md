# Visual Design System

## Direction
Modern, minimal, confident, technical. Eye-catching but fast-loading. Interactive but not gimmicky.

**References**: Linear, Vercel, Resend, Cal.com — clean developer portfolios with purposeful motion.

---

## Color Strategy

### Light Mode
| Token | Value | Usage |
|---|---|---|
| `--background` | `#fafafa` | Page background |
| `--foreground` | `#0a0a0a` | Primary text |
| `--muted` | `#f0f0f0` | Card backgrounds, subtle fills |
| `--muted-foreground` | `#6b7280` | Secondary text |
| `--card` | `#ffffff` | Card surface |
| `--border` | `#e5e7eb` | Borders, dividers |
| `--primary` | `#0a0a0a` | Buttons, emphasis |
| `--accent` | `#2563eb` | Links, highlights, accent |
| `--ring` | `#2563eb` | Focus rings |

### Dark Mode
| Token | Value | Usage |
|---|---|---|
| `--background` | `#0a0a0a` | Page background |
| `--foreground` | `#ededed` | Primary text |
| `--muted` | `#1a1a1a` | Card backgrounds |
| `--muted-foreground` | `#9ca3af` | Secondary text |
| `--card` | `#111111` | Card surface |
| `--border` | `#262626` | Borders |
| `--primary` | `#ededed` | Buttons, emphasis |
| `--accent` | `#3b82f6` | Links, highlights |
| `--ring` | `#3b82f6` | Focus rings |

### Gradient Accent
`linear-gradient(135deg, accent 0%, #8b5cf6 50%, #ec4899 100%)`
Used sparingly for hero text highlight and key CTAs.

---

## Typography

- **Sans**: Geist Sans (via `next/font/google`) — primary body + headings
- **Mono**: Geist Mono — code snippets, tech labels, metadata
- **Scale**: Tailwind defaults; hero h1 uses `text-5xl md:text-7xl`
- **Weight**: 400 body, 500 subheads, 600 headings, 700 hero
- **Line height**: Relaxed for body (`leading-relaxed`), tight for headings (`leading-tight`)

---

## Spacing
- Section padding: `py-20 md:py-32`
- Container max-width: `max-w-6xl mx-auto px-6`
- Card padding: `p-6`
- Component gaps: `gap-4` to `gap-8`

---

## UI Components

| Component | Usage |
|---|---|
| **Bento Grid** | Homepage proof tiles, skills grid |
| **Cards** | Project cards, proof tiles, skill categories |
| **Badge/Chip** | Tech tags, project status, filter chips |
| **Button** | CTAs (primary solid, secondary outline, ghost) |
| **Toast** | Email copy confirmation |
| **Timeline** | Experience section (if added) |
| **Glass panels** | Nav bar, floating elements |
| **Progress bar** | Scroll progress on case studies |
| **Copy button** | Email clipboard action |
| **Theme toggle** | Sun/moon icon swap |

---

## Motion Rules (Framer Motion)

### Principles
1. **Purposeful** — motion communicates state change or draws attention to content
2. **Subtle** — never distracting; user should barely notice
3. **Fast** — 200-400ms durations max; `easeOut` curves
4. **Accessible** — respect `prefers-reduced-motion`

### Standard Animations
- **Fade-in up**: `y: 20 → 0, opacity: 0 → 1` — default section entrance
- **Stagger children**: `staggerChildren: 0.1` — list items, grid cells
- **Scale on hover**: `scale: 1.02` — cards
- **Slide in**: nav menu mobile
- **Progress bar**: scroll-linked width

### Reduced Motion
Wrap all animations in `prefers-reduced-motion` check. Use `useReducedMotion()` from Framer Motion. Fall back to instant transitions.

---

## Accessibility Requirements

- **Contrast**: All text meets WCAG 2.1 AA (4.5:1 body, 3:1 large text)
- **Keyboard**: Full tab navigation, visible focus rings (2px accent)
- **Screen readers**: Semantic HTML, ARIA labels on interactive elements
- **Skip link**: "Skip to main content" at top
- **Reduced motion**: `prefers-reduced-motion` disables all animations
- **Color independence**: No information conveyed by color alone
- **Touch targets**: Minimum 44x44px on mobile

---

## Background Effects

- **Grid pattern**: Subtle CSS grid lines on hero/sections (`bg-grid` class)
- **Glass blur**: `backdrop-filter: blur(12px)` on nav and floating elements
- **Gradient blobs**: [OPTIONAL] Subtle background gradient orbs, very low opacity
- No particles, no 3D, no heavy canvas effects — performance first.
