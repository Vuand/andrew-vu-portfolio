export type ProjectTag = "Full-Stack" | "Security" | "AI" | "Web" | "Infra";

export interface ProjectArtifact {
  label: string;
  type: "diagram" | "screenshot" | "video" | "threat-model";
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
  orientation?: "portrait" | "landscape";
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
  imageFit?: "cover" | "contain";
  confidential?: boolean;
  links?: { label: string; href: string }[];
  problem: string;
  solution: string;
  architecture: string[];
  securityReliability: string[];
  designTradeoffs?: string[];
  results: string[];
  artifacts: ProjectArtifact[];
  screenshots?: ProjectScreenshot[];
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
    slug: "stroke-vision",
    title: "StrokeVision",
    tagline: "Your AI tennis coach — record your swing, get clear feedback, fix your technique",
    description:
      "An AI-powered tennis coach that lives in your phone. Players record themselves practicing, the app studies the swing from feet to fingertips, and it tells them the one or two things to focus on this session and how to fix them. Built for the millions of recreational players who practice far more often than they can afford a coach.",
    image: "/strokevision-logo.svg",
    imageFit: "contain",
    tags: ["AI", "Full-Stack"],
    tech: [
      "React Native (Expo)",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Computer Vision",
      "Pose Estimation",
      "AWS S3",
      "Async Worker Pipeline",
    ],
    role: "Founding Engineer — Early-Stage Startup",
    period: "Jan 2026 – Jun 2026",
    status: "V1 (forehand) approaching TestFlight; multi-stroke roadmap in progress",
    confidential: true,
    screenshots: [
      {
        src: "/strokevision-onboarding-1.png",
        alt: "StrokeVision onboarding — Record",
        caption: "01 · Record — film one forehand from the side.",
      },
      {
        src: "/strokevision-onboarding-2.png",
        alt: "StrokeVision onboarding — Feedback",
        caption: "02 · Feedback — tips you can act on, in plain language.",
      },
      {
        src: "/strokevision-onboarding-3.png",
        alt: "StrokeVision onboarding — Compare",
        caption: "03 · Compare — see where your form diverges from a pro reference.",
      },
      {
        src: "/strokevision-onboarding-4.png",
        alt: "StrokeVision onboarding — Scope & limits",
        caption: "04 · Scope & limits — a training aid, within honest limits.",
      },
      {
        src: "/strokevision-signup.png",
        alt: "StrokeVision sign-up screen",
        caption: "Sign-up — email + password or Continue with Apple.",
      },
      {
        src: "/strokevision-signin.png",
        alt: "StrokeVision sign-in screen",
        caption: "Sign-in — welcome back.",
      },
      {
        src: "/strokevision-sessions-empty.png",
        alt: "StrokeVision empty sessions state",
        caption: "First session — clear capture instructions, low friction to start.",
      },
      {
        src: "/strokevision-stroke-index.png",
        alt: "StrokeVision stroke analysis screen with skeleton overlay, per-stroke trend, and coaching notes",
        caption: "Analysis — skeleton overlay, per-stroke trend, and AI coaching notes tied to the frame they came from.",
      },
    ],
    problem:
      "Getting better at tennis is hard without regular coaching. Lessons cost $60–$150 each and most players only get one a week — but they practice three to five times more than that. The rest of the time, they're reinforcing whatever habits they already have. Filming yourself on your phone doesn't help much either: you watch the clip once, can't tell what's wrong, and shelve it.",
    solution:
      "StrokeVision turns any practice video into a coaching session. The player films one swing, the app studies it from feet to fingertips, and gives back specific, easy-to-act-on feedback — things like \"your hips opened a fraction too early\" or \"your base was set well this time.\" Tips are written and reviewed by qualified tennis coaches before they reach the player. The app also lets players overlay their swing on a pro's so they can see exactly where their form differs.",
    architecture: [
      "Mobile app for recording and reviewing swings — iPhone first, Android next",
      "Cloud-based video analysis that processes each swing in the background while the player keeps using the app",
      "Computer vision tracks the player's body through every frame of the swing — feet, knees, hips, shoulders, arms, wrist",
      "Smart coaching layer picks the one or two most important things to work on this session, instead of overwhelming the player with a dozen tips",
      "Side-by-side and overlay comparison against pro reference clips so the player can see exactly where their form differs",
      "Built to grow with the player — starting with the forehand today and expanding to backhand, serve, volley, and overhead",
    ],
    securityReliability: [
      "The app only coaches technique — never gives medical, injury, or rehab advice. That's a hard rule.",
      "Every coaching tip is written or reviewed by a qualified tennis coach before it ships. AI does the personalization; coaches own the content.",
      "If the camera angle or video quality means the app can't see something clearly, it says so. No fake confidence — same as a human coach watching a bad-angle clip.",
      "Player videos are uploaded directly to secure cloud storage and only the player can see them.",
      "Every tip has thumbs-up / thumbs-down buttons so players can flag anything that doesn't feel right — and that feedback loops back to improve the coaching.",
    ],
    designTradeoffs: [
      "Ship one stroke really well, not five strokes poorly. Version 1 launches with the forehand fully coached. Backhand, serve, volley, and overhead are next — the foundations are already built for them.",
      "Honest first, magical second. The app tells the player when it can't see their swing clearly instead of guessing. Players trust feedback they know is real.",
      "Pro overlays are a reference, not a rulebook. The app shows how a player's swing compares to Federer or Sinner — without telling them \"be Federer.\" Everyone's body is different, and good coaching reflects that.",
    ],
    results: [
      "Version 1 works end-to-end on the forehand — record, analyze, get tips, track progress over time",
      "Coaching content reviewed and approved by qualified tennis coaches before any of it reaches users",
      "App Store launch materials prepared; TestFlight beta submission in progress",
      "Foundation is built to add every other major stroke without re-doing the work",
    ],
    links: [{ label: "strokevision.app", href: "https://strokevision.app" }],
    artifacts: [],
  },
  {
    slug: "sponsorhub",
    title: "SponsorHub",
    tagline: "Performance-based creator marketing infrastructure with built-in financial accountability",
    description:
      "I'm building the financial infrastructure that makes creator marketing trustworthy — escrow, attribution, verification, and payout in one system. Campaign funds are held in escrow, conversions are verified through platform-controlled mechanisms, and payouts are computed strictly from an immutable audit ledger.",
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
      "The creator marketing space runs on trust and spreadsheets. Brands prepay with no guarantee of results. Creators deliver but have no leverage when payouts are disputed. Attribution is fragmented across third-party pixels and self-reported metrics. There's no single system that enforces financial accountability from dollar-in to dollar-out.",
    solution:
      "SponsorHub closes that gap by enforcing three properties end-to-end: campaigns cannot activate without confirmed escrow, conversions are verified through platform-controlled attribution before they count, and payouts are computed strictly from an immutable ledger. These aren't policies — they're system constraints enforced through guarded state transitions and server-side validation. No verification, no payout — enforced in code, not policy.",
    architecture: [
      "Designed and implemented campaign lifecycle management with guarded state transitions that enforce funding and verification preconditions before activation",
      "Built a tamper-evident attribution system where every tracked interaction is signed and validated server-side before recording",
      "Implemented an immutable event ledger for conversion tracking — all corrections happen through reversible adjustments, never mutations",
      "Integrated Stripe Connect for escrow and disbursement with idempotent payout processing and retry safety",
      "Architected async worker pipelines for ledger rollups and payout computation, decoupled from the request path",
      "Enforced role-based access control across brand, creator, and admin boundaries",
    ],
    securityReliability: [
      "Signed, tamper-evident attribution artifacts validated before ledger entry",
      "Replay and duplicate protection on all conversion events",
      "Immutable audit ledger with reversible adjustments — no silent edits",
      "Idempotent payment operations with retry safety across all disbursement flows",
      "Role-gated access enforced at every boundary",
      "Minimal PII exposure — sensitive identifiers hashed at rest",
      "Budget cap enforcement at the rollup layer",
      "Property-based validation on state transitions — no illegal lifecycle jumps",
    ],
    designTradeoffs: [
      "Auditability vs. flexibility — chose an immutable ledger with reversible adjustments over mutable records. Corrections are more complex to implement but guarantee a complete, tamper-evident audit trail critical for financial disputes.",
      "Fraud prevention vs. user friction — server-side attribution verification adds latency to conversion recording but eliminates an entire class of self-report fraud. Prioritized correctness over speed in the verification path.",
      "Payout correctness vs. latency — payouts are computed from async ledger rollups rather than real-time totals. This introduces a processing delay but ensures every payout is backed by verified, deduplicated events — no double-counts, no race conditions.",
    ],
    results: [
      "MVP backend complete — lifecycle enforcement, immutable ledger, and payout pipeline operational",
      "Stripe Connect escrow + disbursement integration deployed with idempotent processing",
      "Fraud and risk scoring pipeline architected for conversion validation",
      "Frontend dashboards and integration testing in progress",
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
    status: "Completed",
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
