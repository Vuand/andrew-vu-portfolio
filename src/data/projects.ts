export type ProjectTag =
  | "Full-Stack"
  | "Security"
  | "AI"
  | "Web"
  | "Infra"
  | "Forensics"
  | "Detection"
  | "Assessment"
  | "Machine Learning"
  | "Academic";

/** Which index an entry belongs to. Drives /projects vs /security. */
export type ProjectCategory = "software" | "security";

/**
 * Drives the case-study template and the label shown on cards.
 *
 * Software work answers "does it work and is it well built?" — that is the
 * `project` template. Security casework answers "is the reasoning sound and
 * did they know when to stop?" — that is the examination/assessment template.
 */
export type ContentType = "project" | "examination" | "assessment";

export const CONTENT_TYPE_LABEL: Record<ContentType, string> = {
  project: "Case Study",
  examination: "Forensic Examination",
  assessment: "Security Assessment",
};

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

/** A tool used during an examination, with its version where known. */
export interface ToolingItem {
  name: string;
  purpose?: string;
}

/** One step of the examination, in the order it was performed. */
export interface MethodStep {
  title: string;
  detail: string;
}

/** Findings, optionally grouped (e.g. "Windows / Active Directory" vs "Linux"). */
export interface FindingGroup {
  group?: string;
  /** Rendered first and given visual weight — use for the finding to lead with. */
  lead?: string;
  items: string[];
}

/**
 * A bound on what the evidence supports.
 *
 * `claim` states what could NOT be concluded. `wouldConfirm` names the
 * artifact or test that would settle it. Both are drawn verbatim from the
 * source material — never inferred.
 */
export interface LimitEntry {
  claim: string;
  wouldConfirm?: string;
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
  /**
   * Token-driven inline SVG card artwork, used instead of `image` where there
   * is no publishable screenshot. Security coursework has none — the source
   * material cannot be republished — and stock security imagery is worse than
   * no imagery.
   */
  cardVisual?: "incident-timeline" | "rf-fingerprint" | "config-audit";
  confidential?: boolean;
  links?: { label: string; href: string }[];
  screenshots?: ProjectScreenshot[];

  // --- Classification -------------------------------------------------
  category?: ProjectCategory;
  contentType?: ContentType;
  /** Provenance line, e.g. "CS 473 Digital Forensics · Oregon State University · Spring 2026". */
  context?: string;
  /** For team work: what Andrew personally did. Rendered prominently near the top. */
  attribution?: string;
  /** Ordering on /security, independent of the /projects order. */
  featuredOnSecurity?: boolean;
  securityOrder?: number;

  // --- Software case-study sections -----------------------------------
  // Optional so security entries are not forced to invent software-shaped
  // content. Required in practice for every category: "software" entry.
  problem?: string;
  solution?: string;
  architecture?: string[];
  securityReliability?: string[];
  designTradeoffs?: string[];
  results?: string[];
  artifacts?: ProjectArtifact[];

  // --- Security case-study sections -----------------------------------
  // Rendered in this exact order. `limits` is not optional in practice: a
  // security write-up that never says what it could not conclude is the
  // failure mode this template exists to prevent.
  scope?: string;
  /** Caveats on scope — e.g. which parts of the work were not Andrew's. */
  scopeNotes?: string[];
  environment?: string;
  tooling?: ToolingItem[];
  methodIntro?: string;
  method?: MethodStep[];
  findings?: FindingGroup[];
  /** Qualifier shown under the Findings heading — e.g. that not all are listed. */
  findingsNote?: string;
  limitsIntro?: string;
  limits?: LimitEntry[];
  takeaway?: string;
  /** Formal citation, for work that builds on published research. */
  reference?: string;
}

export const ALL_TAGS: ProjectTag[] = [
  "Full-Stack",
  "Security",
  "Forensics",
  "Detection",
  "Assessment",
  "AI",
  "Machine Learning",
  "Web",
  "Infra",
  "Academic",
];

export const PROJECTS: Project[] = [
  {
    slug: "stroke-vision",
    category: "software",
    contentType: "project",
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
    category: "software",
    contentType: "project",
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
    category: "software",
    contentType: "project",
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
    category: "software",
    contentType: "project",
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
    category: "software",
    contentType: "project",
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

  // ---------------------------------------------------------------------
  // Security casework.
  //
  // Appended after the software entries so /projects keeps its existing
  // ordering priority and the home page's PROJECTS.slice(0, 3) is unchanged.
  // Ordering on /security is controlled independently by securityOrder.
  //
  // Every claim below is drawn from Andrew's own methodology and analysis.
  // Course materials — assignment prompts, instructor-supplied evidence, lab
  // handouts, graded reports — are not reproduced, and case-scenario names,
  // hostnames, usernames and device identifiers are not present.
  //
  // TODO(andrew): screenshot. None of the three entries carries a screenshot,
  // because the only available imagery is course-derived and cannot be
  // republished. If you want tool output on these pages, capture it from a
  // lab VM you built yourself — your own Autopsy/Registry Explorer session
  // against your own test image — and add it via the `screenshots` field.
  // Do not screenshot the course evidence image, even anonymized.
  // ---------------------------------------------------------------------

  {
    slug: "insider-threat-forensic-examination",
    category: "security",
    contentType: "examination",
    securityOrder: 1,
    featuredOnSecurity: true,
    cardVisual: "incident-timeline",
    title: "Insider-Threat Forensic Examination",
    tagline:
      "Windows 10 disk image examined for a simulated insider-threat matter, reported as expert witness testimony",
    description:
      "A forensic examination of a Windows 10 workstation disk image, delivered as a formal expert witness report written for counsel and non-technical readers. The report covered evidence handling, methodology, findings, a reconstructed timeline, and recommended follow-on examination. Most of the analytical work was exclusion: seven keyword hits reduced to a defensible set, and every timestamp qualified against a clock that could not be trusted.",
    context: "CS 473 Digital Forensics · Oregon State University · Spring 2026",
    tags: ["Forensics", "Security", "Academic"],
    role: "Sole Examiner",
    period: "Spring 2026",
    status: "Individual coursework",
    tech: [
      "Autopsy 4.21",
      "FTK Imager 4.5",
      "Registry Explorer",
      "ShellBags Explorer",
      "HxD",
      "Windows Event Viewer",
      "E01 evidence images",
      "Registry hive analysis",
      "File carving",
      "Timeline reconstruction",
      "Expert witness reporting",
    ],
    scope:
      "Forensic examination of a Windows 10 workstation disk image in a simulated insider-threat matter, delivered as a formal expert witness report written for counsel and non-technical readers. The report covered evidence handling, methodology, findings, a reconstructed timeline, and recommended follow-on examination.",
    scopeNotes: [
      "The image was acquired by a designated lead analyst in the exercise scenario. I received, verified, and examined it — I did not perform the acquisition.",
    ],
    environment:
      "An E01 forensic image of a Windows 10 workstation, examined in an isolated VMware vSphere lab.",
    tooling: [
      {
        name: "Autopsy 4.21",
        purpose: "Image analysis, hive extraction, keyword search",
      },
      { name: "FTK Imager 4.5", purpose: "Mounting, hash verification" },
      {
        name: "Registry Explorer",
        purpose: "Registry parsing (Eric Zimmerman)",
      },
      {
        name: "ShellBags Explorer",
        purpose: "Shell item parsing (Eric Zimmerman)",
      },
      { name: "Windows Event Viewer", purpose: "Event log analysis" },
      { name: "HxD", purpose: "Hex-level file signature analysis" },
    ],
    method: [
      {
        title: "Malware identification",
        detail:
          "Parsed Windows Defender detection records and identified a Meterpreter remote-access payload staged on removable media, extracting the threat ID, severity, SHA-256 hash, parent process, user context, and the remediation action taken. Defender had suspended the file.",
      },
      {
        title: "Corroboration across independent sources",
        detail:
          "Established the detection independently across three sources: the Defender detection record, the Defender Operational event log, and a deleted record recovered by carving unallocated space.",
      },
      /* TODO(andrew): the source note reads "Two originated from network
         scanner service-pbe signature files and one from the antivirus
         signature cache database", which is ambiguous about whether "two" and
         "one" count hits or groups — the two readings imply a different
         number of hits actually reported. The wording below is deliberately
         non-numeric on that point. Confirm the split and tighten it. Also
         confirm "service-pbe" is "service probe". */
      {
        title: "False positive triage",
        detail:
          "A full-image keyword search across live files, deleted files, the page file, and unallocated space returned seven hits, which sorted into three groups. Hits originating from network scanner probe signature files and from the antivirus signature cache database were excluded — those files legitimately contain thousands of malware names and are not indicators of compromise. Only the remaining hits were reported as findings.",
      },
      {
        title: "Anti-forensics detection",
        detail:
          "Identified a system clock correction of 58,551 seconds (approximately 16.3 hours) that Windows refused to apply because it exceeded the maximum permitted adjustment. Every timestamp in the affected window was qualified accordingly in the report rather than being presented as reliable.",
      },
      {
        title: "Timeline correlation",
        detail:
          "Correlated Windows Portable Device driver installation events against the antivirus detection to establish a 26-second interval between the removable device being connected and the execution attempt.",
      },
      {
        title: "Registry analysis",
        detail:
          "Examined SYSTEM, SOFTWARE, SAM, NTUSER.DAT, and UsrClass.dat hives. USBSTOR and MountedDevices for removable media attribution; UserAssist, RecentDocs, RunMRU, TypedPaths, ComDlg32 MRU keys, MountPoints2, and Terminal Server Client keys for user activity; ShellBags for Explorer navigation history that persists after folders are deleted.",
      },
      {
        title: "Event log analysis",
        detail:
          "Parsed 2,569 SYSTEM event log records, separating security-relevant events from benign infrastructure noise — network adapter link loss producing DNS timeouts, and an absent TPM provider. Flagged a Service Control Manager service start-type change as a possible persistence mechanism warranting further examination.",
      },
    ],
    findings: [
      {
        items: [
          "A Meterpreter remote-access payload was staged on removable media and detected by Windows Defender, which suspended the file before execution completed.",
          "The detection was corroborated independently across three sources — the Defender detection record, the Defender Operational event log, and a record recovered by carving unallocated space.",
          "Of seven keyword hits, those originating from network scanner probe signature files and from the antivirus signature cache database were excluded — such files legitimately contain thousands of malware names and are not indicators of compromise.",
          "A system clock correction of 58,551 seconds was attempted and refused by Windows, rendering every timestamp in the affected window qualified rather than reliable.",
          "26 seconds elapsed between the removable device being connected and the execution attempt.",
          "A Service Control Manager service start-type change was flagged as a possible persistence mechanism warranting further examination.",
        ],
      },
    ],
    limits: [
      {
        claim:
          "Removable media attribution was based on drive letter and shell item evidence.",
        wouldConfirm:
          "Confirming which physical device was connected requires USBSTOR and MountedDevices correlation in the SYSTEM hive, matched against device serial numbers.",
      },
      {
        claim:
          "ShellBag entries evidence that a folder view was rendered in Explorer. They do not establish that files were opened, copied, or exfiltrated.",
      },
      {
        claim:
          "The payload was suspended by Defender before execution. There is no evidence in the examined artifacts that it ran successfully.",
      },
      {
        claim:
          "Account activity establishes what a set of credentials did, not who was physically at the keyboard.",
      },
      {
        claim:
          "Clock manipulation is consistent with anti-forensic intent but has innocent explanations, including time synchronization failure and manual correction of a drifted clock.",
      },
    ],
    takeaway:
      "In a keyword-driven investigation, the analytically valuable work is often exclusion rather than discovery. Reporting a signature database as evidence of infection would have been a significant error, and the artifacts that were absent constrained the conclusions as much as the artifacts that were present.",
  },

  {
    slug: "rf-device-authentication",
    category: "security",
    contentType: "project",
    securityOrder: 2,
    featuredOnSecurity: true,
    cardVisual: "rf-fingerprint",
    title: "Deep-Learning RF Device Authentication",
    tagline:
      "Authenticating 31 Bluetooth Low Energy devices by transmitter hardware imperfections — and measuring where that fails",
    description:
      "RF fingerprinting authenticates wireless devices by the manufacturing imperfections in their transmitters, identifying hardware by physical-layer characteristics rather than credentials that can be stolen or spoofed. This project tested whether a CNN could authenticate 31 BLE devices from raw IQ signal data, and whether that held up when conditions changed. It did not: cross-channel accuracy collapsed by 65 percentage points. The failure mode was the result worth reporting.",
    context: "ECE 478 Network Security · Oregon State University · Spring 2026",
    tags: ["Security", "Machine Learning", "Detection", "Academic"],
    role: "Model & Training Pipeline — Four-Person Team",
    period: "Spring 2026",
    status: "Team coursework · IEEE-format technical report",
    /* TODO(andrew): the source note lists a teammate's work as the "s-domain
       experiments", which reads as a truncation of "cross-domain". Rendered
       as cross-domain below since you ran the same-domain set — confirm. */
    attribution:
      "I built the CNN model and the training pipeline, implemented and ran the same-domain experiment set, and authored the team's IEEE-format technical report. Teammates ran the cross-domain experiments, the phase-derivative experiments and per-device analysis, and the comparison analysis and plots.",
    tech: [
      "PyTorch",
      "Convolutional neural networks",
      "1D CNN",
      "IQ signal data",
      "Bluetooth Low Energy",
      "RF fingerprinting",
      "Domain shift analysis",
      "Python",
    ],
    scope:
      "RF fingerprinting authenticates wireless devices by the manufacturing imperfections in their transmitters — small variations in oscillators, amplifiers, mixers, and filters that produce a device-specific signature in the transmitted signal. This identifies hardware by physical-layer characteristics rather than cryptographic credentials that can be stolen or spoofed, which matters for IoT and BLE devices that cannot hold strong secrets. The project tested whether a CNN could authenticate 31 Bluetooth Low Energy devices from raw IQ signal data, and whether that held up when conditions changed.",
    environment:
      "A dataset of 31 BLE devices collected at Oregon State's NetSTAR lab, 1,850 IQ data points per sample. Two scenarios were tested: varying frequency channel (2.406, 2.408, 2.434, 2.470 GHz) with location fixed, and varying transmitter distance (1 m, 1.5 m, 2 m, 3 m) with channel fixed.",
    tooling: [
      { name: "PyTorch", purpose: "Model definition and training" },
      {
        name: "NetSTAR lab dataset",
        purpose: "31 BLE devices, 1,850 IQ data points per sample",
      },
    ],
    methodIntro:
      "A four-layer 1D convolutional network — 64, 128, 128, and 256 filters with kernel sizes 7, 5, 3, 3 — each layer using batch normalization, ReLU, and pooling, with an adaptive final pooling layer so the same architecture accepts both raw IQ and the shorter phase-derivative input. Two fully connected layers with dropout at 0.5 and 0.3. Trained with Adam at learning rate 1e-3, cross-entropy loss, and a ReduceLROnPlateau scheduler, for 30 epochs with a 10% validation split used for best-epoch selection. The test set was never used during training.",
    findings: [
      {
        items: [
          "Same-domain, where training and test conditions match: 93.2% mean accuracy across frequency channels, 99.4% across transmitter locations.",
          "Cross-domain with raw IQ, where the model is trained in one condition and tested in another: accuracy collapsed to 28.1% across channels — a 65-percentage-point drop — and 71.8% across locations, a 27.7-point drop.",
          "Channel shift degrades performance far more than location shift. Changing carrier frequency changes how the transmitter hardware itself responds; changing distance mostly changes signal amplitude and multipath.",
          "Using the phase derivative of the BLE preamble instead of raw IQ recovered much of the loss: cross-channel accuracy rose from 28.1% to 74.8%, and cross-location from 71.8% to 95.3%, reducing the location domain gap to 4.2 points.",
          "Transfer was asymmetric — models trained on a mid-range channel generalized better than models trained at the edge of the frequency range.",
        ],
      },
    ],
    limits: [
      {
        claim:
          "Same-domain accuracy above 99% is the easy case and should not be read as deployment performance. The honest result is the cross-domain collapse: a fingerprinting model trained under one set of RF conditions cannot be assumed to authenticate the same devices under different conditions.",
        wouldConfirm:
          "Deploying this as a real authentication control would require domain adaptation or multi-channel training, and would need validation against an adversary actively attempting to mimic a target device's signature — which this work did not test.",
      },
    ],
    takeaway:
      "The interesting result was the failure mode, not the accuracy figure. Raw IQ mixes the device's hardware signature with channel and environment effects, and the model learns both — so the learned features stop matching when conditions change.",
    reference:
      "H. Albousayri, B. Hamdaoui, W.-K. Wong, and N. Basha, “Bluetooth Fingerprint Identification Under Domain Shift Through Transient Phase Derivative,” IEEE Conference on Communications and Network Security (CNS), 2025.",
  },

  {
    slug: "enterprise-vulnerability-assessment",
    category: "security",
    contentType: "assessment",
    securityOrder: 3,
    featuredOnSecurity: true,
    cardVisual: "config-audit",
    title: "Enterprise Vulnerability Assessment",
    tagline:
      "17 vulnerabilities across a Windows Active Directory domain and a Linux server, ahead of a live instructor-run attack",
    description:
      "An assessment of a deliberately misconfigured enterprise environment — a Windows Active Directory domain and a Linux server — carried out ahead of a live exercise in which instructors attacked the environment. I identified and documented 17 vulnerabilities, each with affected systems, exploitation impact, and specific remediation, feeding a board-level remediation proposal. The most serious finding was a single misdirected line in a configuration file.",
    context:
      "CS 373 Defense Against the Dark Arts: Enterprise Defense · Oregon State University · Winter 2026",
    tags: ["Assessment", "Security", "Academic"],
    role: "Vulnerability Assessment Lead — Five-Person Team",
    period: "Winter 2026",
    status: "Team coursework",
    attribution:
      "I led the vulnerability assessment: I identified and documented the 17 vulnerabilities below, each with affected systems, exploitation impact, and specific remediation, which fed the team's board-level remediation proposal.",
    tech: [
      "Active Directory Domain Services",
      "Group Policy",
      "NTLM & Kerberos",
      "SMB signing",
      "RDP / Network Level Authentication",
      "Linux hardening",
      "OpenSSH / sshd_config",
      "vsftpd",
      "Vulnerability assessment",
    ],
    scope:
      "Assessment of a deliberately misconfigured enterprise environment — a Windows Active Directory domain and a Linux server — ahead of a live exercise in which instructors attacked the environment. I identified and documented 17 vulnerabilities, each with affected systems, exploitation impact, and specific remediation, feeding a board-level remediation proposal.",
    environment:
      "A deliberately misconfigured enterprise environment: a Windows Active Directory domain and a Linux server.",
    /* TODO(andrew): no tool list was recorded for this assessment. If you used
       specific tooling to enumerate Group Policy and service configuration
       (e.g. gpresult, secedit, a STIG viewer, an SSH/FTP banner check), add it
       to `tooling` below so this section matches the depth of the other two
       case studies. Do not invent one. */
    methodIntro:
      "Configuration review rather than exploitation testing. Each of the 17 findings records the affected systems, the impact if the condition were exploited, and a specific remediation.",
    /* TODO(andrew): the source material for this assessment records findings
       but not an ordered method. If you can reconstruct the sequence you
       actually worked in — e.g. Group Policy review, then service
       configuration review, then severity ranking — add it to `method` as
       MethodStep entries. Left absent rather than reconstructed from the
       findings, which would be a guess. */
    /* TODO(andrew): the source material enumerates 10 of the 17 findings —
       seven Windows/Group Policy and three Linux. The remaining seven are not
       described anywhere available, so they are not listed. The count line
       below says so explicitly rather than letting a reader who counts
       conclude the total was overstated. Supply the other seven if you want
       them published. */
    findingsNote:
      "Ten of the seventeen findings are reproduced here — the seven Windows Group Policy findings and the three Linux findings. The remainder are not published.",
    findings: [
      {
        group: "Windows / Active Directory Group Policy",
        items: [
          "Passwords stored using reversible encryption, making stored credentials recoverable in plaintext",
          "Minimum password length set to zero characters, complexity requirements disabled",
          "NTLM minimum session security set to None",
          "SMB signing disabled, permitting relay and tampering attacks",
          "Software restriction policy set to allow all, providing no application control",
          "Insecure guest logons enabled",
          "RDP exposed with Network Level Authentication disabled",
        ],
      },
      {
        group: "Linux",
        lead: "The SSH daemon was configured to serve /etc/shadow as its pre-authentication login banner. Any host that merely opened a connection received the system's password hashes before authenticating. Pre-authentication disclosure is categorically worse than a weak password policy, because no credential and no access is required to exploit it.",
        items: [
          "Password authentication permitted over SSH, with no limit on concurrent sessions",
          "vsftpd configured to permit anonymous login, anonymous upload, and anonymous directory creation, rooted at /, over an unencrypted channel",
        ],
      },
    ],
    limits: [
      {
        claim:
          "This was configuration review, not exploitation. Each finding identifies a condition that permits an attack; it does not establish that the attack succeeded in that environment.",
        wouldConfirm:
          "Confirming exploitability would require controlled testing against each specific misconfiguration.",
      },
    ],
    takeaway:
      "Severity does not track with complexity. The most serious finding was a single line in a configuration file pointing a banner at the wrong path — trivially fixed, and worse than every password policy weakness in the environment combined.",
    /* TODO(andrew): a detection-design section (Windows Advanced Audit Policy,
       command-line and PowerShell script-block logging, Wazuh SIEM agent with
       Sysmon and Autoruns) exists in the team deliverable, but ownership
       between team members is unconfirmed. Do not publish it until you confirm
       it was your work. */
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectsByTag(tag: ProjectTag): Project[] {
  return PROJECTS.filter((p) => p.tags.includes(tag));
}

/**
 * Security casework is rendered by a different template than software work,
 * and this is the single place that decision is made. Entries without an
 * explicit category are treated as software, which is what the five
 * pre-existing entries were before the category field existed.
 */
export function isSecurityCaseStudy(project: Project): boolean {
  return project.category === "security";
}

/** Academic work must always be labelled as such — see the Academic tag. */
export function isAcademic(project: Project): boolean {
  return project.tags.includes("Academic");
}

/**
 * Entries for /security, ordered by securityOrder rather than by the
 * /projects ordering, so the two indexes can lead with different work.
 */
export function getSecurityCaseStudies(): Project[] {
  return PROJECTS.filter(
    (p) => isSecurityCaseStudy(p) && p.featuredOnSecurity !== false
  ).sort(
    (a, b) =>
      (a.securityOrder ?? Number.MAX_SAFE_INTEGER) -
      (b.securityOrder ?? Number.MAX_SAFE_INTEGER)
  );
}

/** The label a card shows for this entry ("Case Study", "Forensic Examination", …). */
export function getContentTypeLabel(project: Project): string {
  return CONTENT_TYPE_LABEL[project.contentType ?? "project"];
}
