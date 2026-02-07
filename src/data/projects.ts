export type ProjectTag = "Full-Stack" | "Security" | "AI" | "Web" | "Infra";

export interface ProjectArtifact {
  label: string;
  type: "diagram" | "screenshot" | "video" | "threat-model";
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: ProjectTag[];
  tech: string[];
  role: string;
  period: string;
  status: string;
  image?: string;
  confidential?: boolean;
  links?: { label: string; href: string }[];
  problem: string;
  solution: string;
  architecture: string[];
  securityReliability: string[];
  results: string[];
  artifacts: ProjectArtifact[];
}

export const ALL_TAGS: ProjectTag[] = [
  "Full-Stack",
  "Security",
  "AI",
  "Web",
  "Infra",
];

export const PROJECTS: Project[] = [
  {
    slug: "sponsorhub",
    title: "SponsorHub",
    tagline: "Performance-based creator marketing infrastructure",
    description:
      "A platform where brands fund campaigns, creators drive verified conversions, and payouts happen only when performance is proven. Every dollar is tracked from deposit to payout through an append-only ledger.",
    tags: ["Full-Stack", "Security", "Infra"],
    tech: [
      "Next.js (App Router)",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "BullMQ",
      "Redis",
      "Stripe Connect",
      "Clerk RBAC",
      "Vercel",
    ],
    role: "Sole Engineer & Architect",
    period: "2025 – Present",
    status: "MVP backend built; frontend dashboards + testing next",
    image: "/SponsorHub.png",
    confidential: true,
    problem:
      "Creator marketing lacks accountability. Brands pay upfront with no proof of performance. Creators get stiffed when brands dispute results. No platform enforces funding, attribution, and verification end-to-end.",
    solution:
      "SponsorHub enforces three invariants in code: (1) campaigns cannot go live without confirmed funds in escrow, (2) every conversion is verified through platform-owned attribution artifacts before entering the ledger, and (3) payouts are computed strictly from the append-only ledger — no verification, no payout.",
    architecture: [
      "Client → /r redirect (HMAC-signed attribution link) → /v verification ingestion → Append-only event ledger",
      "Rollup jobs (BullMQ) → Payout computation → Stripe Connect disbursement",
      "State machines with guards enforce campaign lifecycle: Draft → Funded → Live → Completed → Paid Out",
      "Each transition requires explicit preconditions — Live requires escrow confirmation from Stripe webhook",
      "Platform-owned attribution artifacts carry HMAC-signed payloads with campaign/creator identifiers",
      "Verification events deduplicated by composite key and checked against replay windows",
    ],
    securityReliability: [
      "HMAC-signed attribution artifacts — tamper-evident redirect links and promo codes",
      "Replay protection — events deduplicated by composite key + time window",
      "Append-only ledger — no UPDATE/DELETE on conversion events; corrections via compensating entries",
      "Idempotent Stripe payouts — retry-safe disbursement with idempotency keys",
      "Role-gated access — Clerk RBAC enforces brand/creator/admin boundaries",
      "Hashed identifiers — PII never stored in plain text in event payloads",
      "Funding gate — state machine rejects Live transition without escrow confirmation",
      "Budget cap enforcement at the ledger rollup layer",
    ],
    results: [
      "MVP backend complete with state machine enforcement and append-only ledger",
      "Stripe Connect integration with idempotent payout processing",
      "Hybrid payout model (base + performance) for creator fairness",
      "Fraud/risk scoring pipeline architected for conversion validation",
    ],
    artifacts: [
      { label: "Architecture Diagram", type: "diagram" },
      { label: "Threat Model", type: "threat-model" },
    ],
  },
  {
    slug: "home-assistant-ai",
    title: "AI-Powered Home Assistant",
    tagline: "Natural language to secure smart-home automation",
    description:
      "Senior capstone project converting natural language commands into validated JSON actions for Home Assistant. Secure execution pipeline with allow-listed services, entity validation, and robust error handling.",
    image: "/HAArchitecture.png",
    tags: ["AI", "Security", "Full-Stack"],
    tech: [
      "Python",
      "GPT-4o (OpenAI API)",
      "Home Assistant",
      "REST APIs",
      "AsyncIO",
      "JSON Schema",
      "Git",
    ],
    role: "Lead Developer — Senior Capstone, Oregon State University",
    period: "Fall 2025 – Spring 2026",
    status: "In progress",
    links: [{ label: "GitHub", href: "https://github.com/Vuand" }],
    problem:
      "Smart home systems require complex UIs or YAML automations. Non-technical users cannot easily control their homes with natural language, and unvalidated LLM output poses security risks when connected to physical systems.",
    solution:
      "Built a modular async pipeline: natural language input → GPT-4o with structured output constraints → JSON Schema validation → allow-list check (services + entities) → Home Assistant REST API execution. The LLM never directly controls hardware.",
    architecture: [
      "User input → Prompt engineering layer (system prompt + few-shot examples) → GPT-4o structured output",
      "JSON Schema validation → Allow-list check (services + entities) → Home Assistant REST API",
      "AsyncIO handles multiple concurrent commands without blocking",
      "Modular design separates LLM interaction, validation, execution, and error handling into independent components",
    ],
    securityReliability: [
      "Allow-listed services — only pre-approved Home Assistant services can be invoked",
      "Entity validation — LLM output checked against known entity IDs before execution",
      "API key protection — secrets managed via environment variables, never in code or prompts",
      "JSON Schema validation — structured output validated before reaching execution layer",
      "Input sanitization — user input cleaned before prompt construction (prompt injection defense)",
      "Error isolation — failures in one command don't cascade to other operations",
      "Rate limiting — prevents runaway LLM calls from overwhelming the system",
    ],
    results: [
      "Converting natural language to validated smart-home actions with reliable execution",
      "Modular architecture enables easy addition of new services and entities",
      "Security-first design prevents unauthorized device control",
    ],
    artifacts: [
      { label: "Architecture Diagram", type: "diagram" },
      { label: "Threat Model", type: "threat-model" },
      { label: "Demo Video", type: "video" },
    ],
  },
  {
    slug: "wpi-website",
    title: "Wholistic Peace Institute",
    tagline: "Full-stack org website with digital library checkout",
    description:
      "Designed, built, and maintained an organization website end-to-end as sole developer. Features an API-driven digital library checkout system, secure payment integration, and scalable CMS workflows.",
    image: "/WPI.png",
    tags: ["Full-Stack", "Web"],
    tech: [
      "WordPress (Elementor Pro)",
      "HTML5 / CSS3 / JavaScript",
      "PHP",
      "PayPal API",
      "Stripe API",
      "Google Books API",
      "Bluehost cPanel",
      "YouTube API",
    ],
    role: "Sole Developer & Designer — Summer Intern",
    period: "Jun 2025 – Aug 2025",
    status: "Shipped & maintained",
    problem:
      "The nonprofit needed a professional web presence with e-commerce and a digital library, but had no technical staff and a limited budget. The existing site was static and could not support their programs.",
    solution:
      "Built a dynamic, responsive website with CMS-driven content management, PayPal + Stripe payment processing, and a custom digital library checkout system powered by Google Books API. Managed full infrastructure on Bluehost.",
    architecture: [
      "WordPress (Elementor Pro) → Custom PHP/JS modules → External API integrations",
      "Digital library: Search → Google Books API → Custom checkout flow (AJAX-style JS) → Session management",
      "Payments: Product/donation selection → PayPal/Stripe API → Confirmation + receipt generation",
    ],
    securityReliability: [
      "Secure payment handling via PCI-compliant third-party APIs (PayPal + Stripe)",
      "Server hardening on Bluehost cPanel",
      "Input validation on all user-facing forms",
      "Performance optimization for mobile page loads",
      "ADA-aware accessibility throughout",
    ],
    results: [
      "Delivered fully functional org website with payments + digital library",
      "Enabled nonprofit to manage content independently via CMS",
      "Optimized for mobile performance and accessibility",
    ],
    artifacts: [{ label: "Screenshots", type: "screenshot" }],
  },
  {
    slug: "gumc-migration",
    title: "GUMC Platform Migration",
    tagline: "Zero-downtime Wix-to-Framer migration",
    description:
      "Led a full platform migration from Wix to Framer. Built a component-based web architecture with reusable UI components, structured content models, and secure payment integration — with zero downtime.",
    image: "/GreshamUMC.png",
    tags: ["Web", "Full-Stack"],
    tech: [
      "Framer",
      "HTML / CSS / JavaScript",
      "PayPal API",
      "DNS Management",
      "Responsive Design",
      "ADA Accessibility",
    ],
    role: "Lead Developer — Freelance",
    period: "Sep 2025 – Dec 2025",
    status: "Shipped",
    problem:
      "The church's Wix site was inflexible, slow, and difficult for non-technical staff to update. Content was scattered with no consistent structure, and the site lacked mobile responsiveness.",
    solution:
      "Migrated to Framer with component-based architecture using custom HTML/CSS/JS reusable components. Built structured content models for events, leadership, and programs. Handled domain transfer, DNS config, and email continuity for zero-downtime migration.",
    architecture: [
      "Framer → Custom reusable components (HTML/CSS/JS) → Structured CMS collections",
      "Content models: events, leadership bios, program pages — all data-driven templates",
      "Migration path: Wix export → Content restructuring → Framer build → DNS transfer → Email continuity → Go-live",
    ],
    securityReliability: [
      "Zero-downtime migration with DNS pre-planning and email continuity verification",
      "Secure payment integration via PayPal",
      "ADA-aware accessibility practices",
      "Separation of concerns — content models decoupled from presentation components",
      "Mobile-first responsive design tested across devices",
    ],
    results: [
      "Zero-downtime migration completed successfully",
      "Component architecture reduced content update time for staff",
      "Improved mobile responsiveness and page load performance",
      "Enabled secure online giving via PayPal",
    ],
    artifacts: [{ label: "Screenshots", type: "screenshot" }],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectsByTag(tag: ProjectTag): Project[] {
  return PROJECTS.filter((p) => p.tags.includes(tag));
}
