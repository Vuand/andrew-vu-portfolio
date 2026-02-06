# Projects Catalog

---

## 1. SponsorHub (Confidential)

**One-liner**: Performance-based creator marketing infrastructure — verified payouts, append-only ledger, fraud controls.

**Confidentiality Note**: Code is private during active development. Happy to walk through architecture and modules live.

### Problem
Creator marketing has no accountability. Brands pay upfront without proof. Creators get stiffed on disputed results. No platform enforces funding → attribution → verification → payout end-to-end.

### Role
Sole Engineer & Architect

### Solution
Three enforced invariants:
1. **Funding gate** — campaigns can't go live without confirmed escrow
2. **Verification-only payouts** — every conversion verified via platform-owned attribution before entering the ledger
3. **Append-only ledger** — no UPDATE/DELETE on conversion events; corrections are compensating entries

### Tech Stack
Next.js (App Router), TypeScript, PostgreSQL, Prisma, BullMQ, Redis, Stripe Connect, Clerk RBAC, Vercel

### Architecture (diagram these)
- `/r` redirect → attribution link (HMAC-signed payload)
- `/v` verification ingestion → event ledger
- Rollup jobs (BullMQ) → payout computation
- Stripe Connect disbursement (idempotent)
- State machine: Draft → Funded → Live → Completed → Paid Out (guards at each transition)

### Security & Reliability
- HMAC-signed attribution artifacts (tamper-evident)
- Replay protection (composite key + time window dedup)
- Append-only ledger (no mutation of conversion records)
- Idempotent Stripe payouts (retry-safe)
- Role-gated access (Clerk RBAC: brand/creator/admin)
- Hashed identifiers (no plain-text PII in event payloads)
- Funding gate (state machine rejects Live without escrow)
- Budget cap enforcement at rollup layer
- Fraud/risk scoring pipeline

### Results
- MVP backend complete with state machine enforcement + append-only ledger + Stripe Connect
- Hybrid payout model (base + performance) for creator fairness
- **Status**: Frontend dashboards + integration/security/load testing next

### Links
- **GitHub**: Private repo (confidential)
- **Live**: Not yet deployed publicly

### Artifacts
- [ ] Architecture diagram (SVG): request flow `/r` → `/v` → ledger → rollups → payouts
- [ ] Threat model: payout fraud, replay attacks, budget overrun
- [ ] System invariants document

---

## 2. AI-Powered Home Assistant Integration (Senior Capstone)

**One-liner**: Natural language → validated JSON → secure smart-home execution via GPT-4o + Home Assistant.

### Problem
Smart home systems require complex UIs or YAML. Non-technical users can't use natural language. Unvalidated LLM output is dangerous when connected to physical systems.

### Role
Lead Developer (Senior Capstone, Oregon State University)

### Solution
Modular async pipeline: natural language → GPT-4o structured output → JSON Schema validation → allow-list check → Home Assistant REST API execution. The LLM never directly controls hardware.

### Tech Stack
Python, GPT-4o (OpenAI API), Home Assistant, REST APIs, AsyncIO, JSON Schema, Git

### Architecture (diagram these)
- User input → prompt engineering layer → GPT-4o structured output
- JSON Schema validation → allow-list check (services + entities)
- Home Assistant REST API execution → response formatting
- AsyncIO for concurrent command handling

### Security & Reliability
- Allow-listed services (only pre-approved HA services invocable)
- Entity validation (LLM output checked against known entity IDs)
- API key protection (env vars, never in code/prompts)
- JSON Schema validation before execution layer
- Input sanitization (prompt injection defense)
- Error isolation (no cascading failures)
- Rate limiting on LLM calls

### Results
- Successfully converting natural language to validated smart-home actions
- Modular architecture for easy service/entity extension
- Security-first design prevents unauthorized device control
- **Status**: In progress (Fall 2025 – Spring 2026)

### Links
- **GitHub**: https://github.com/Vuand [TODO: confirm specific repo link]

### Artifacts
- [ ] Architecture diagram: NL input → validation pipeline → HA execution
- [ ] Threat model: prompt injection, unauthorized service calls, entity spoofing
- [ ] Demo video placeholder

---

## 3. Wholistic Peace Institute (WPI) Website

**One-liner**: Full-stack org website with API-driven digital library checkout, payment integration, and CMS workflow.

### Problem
Nonprofit needed professional web presence with e-commerce + digital library. No technical staff, limited budget, static existing site.

### Role
Sole Developer & Designer (Summer Intern)

### Solution
Dynamic responsive website with CMS-driven content, PayPal + Stripe payments, Google Books API-powered digital library checkout. Full infrastructure management on Bluehost.

### Tech Stack
WordPress (Elementor Pro), HTML5/CSS3/JavaScript, PHP, PayPal API, Stripe API, Google Books API, Bluehost cPanel, YouTube API

### Architecture (diagram these)
- WordPress + Elementor Pro → custom PHP/JS modules → external APIs
- Digital library: search → Google Books API → custom checkout (AJAX-style JS) → session management
- Payments: selection → PayPal/Stripe API → confirmation + receipt

### Security & Reliability
- PCI-compliant payment handling via PayPal + Stripe
- Server hardening on Bluehost cPanel
- Input validation on all forms
- Performance optimization for mobile
- ADA-aware accessibility

### Results
- Fully functional org website with integrated payments + digital library
- Nonprofit can manage content independently via CMS
- Optimized for mobile + accessibility
- [Add metric: page load time improvement]
- [Add metric: content update frequency improvement]

### Links
- **Live**: [TODO: add live URL or note "client site — use screenshots"]

### Artifacts
- [ ] Screenshots: homepage, library checkout, payment flow
- [ ] Before/after comparison (if available)

---

## 4. GUMC Wix-to-Framer Migration (Optional Feature)

**One-liner**: Zero-downtime platform migration with component-based architecture, structured content models, and secure payments.

### Problem
Wix site was inflexible, slow, hard for non-technical staff to update. No mobile responsiveness, scattered content.

### Role
Lead Developer (Freelance)

### Solution
Migrated to Framer with component-based architecture. Custom HTML/CSS/JS reusable components. Structured content models for events, leadership, programs. Zero-downtime DNS/domain/email migration.

### Tech Stack
Framer, HTML/CSS/JavaScript, PayPal API, DNS/Domain Management, Responsive Design, ADA Accessibility

### Architecture
- Framer → custom reusable components → structured CMS collections → PayPal integration
- Migration: Wix export → content restructuring → Framer build → DNS transfer → email continuity → go-live

### Security & Reliability
- Zero-downtime migration (DNS pre-planning + email continuity)
- Secure PayPal integration
- ADA-aware accessibility
- Separation of concerns (content models decoupled from presentation)

### Results
- Zero-downtime migration complete
- Reduced content update time for staff [Add metric: estimate %]
- Improved mobile responsiveness + page load
- Secure online giving via PayPal

### Links
- **Live**: [TODO: add live URL or "client site — use screenshots"]

### Artifacts
- [ ] Screenshots: before (Wix) vs after (Framer)
- [ ] Component library overview
