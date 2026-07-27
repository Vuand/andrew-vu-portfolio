import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  BookOpen,
  Download,
  Wrench,
  ExternalLink,
  ArrowRight,
  MapPin,
  Plus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { getSecurityCaseStudies, getContentTypeLabel } from "@/data/projects";
import {
  SECURITY_POSITIONING,
  SECURITY_TOOLING,
  SECURITY_COURSEWORK,
  ADDITIONAL_SECURITY_WORK,
  EXTERNAL_VERIFICATION,
} from "@/data/security";
import { getTagVariant } from "@/lib/tag-variants";
import { ProjectCardVisual } from "@/components/projects/project-card-visual";

/**
 * Threat models carried over from the previous version of this page. Unlike
 * the coursework above, these come from systems that were actually built, so
 * they stay — they are the only evidence on the site of security reasoning
 * applied to shipped code rather than to an exercise.
 */
const threatModels = [
  {
    title: "LLM → Home Assistant Safe Execution",
    project: "Home Assistant AI",
    slug: "home-assistant-ai",
    threats: [
      "Prompt injection → unauthorized service calls",
      "Entity spoofing → control wrong devices",
      "API key leakage → unauthorized HA access",
      "Malformed JSON → unexpected execution behavior",
    ],
    mitigations: [
      "Allow-listed services (explicit whitelist)",
      "Entity ID validation against known devices",
      "JSON Schema validation on all LLM output",
      "API keys in environment variables only",
      "Input sanitization before prompt construction",
      "Error isolation per command",
    ],
  },
  {
    title: "SponsorHub Payout Correctness & Fraud",
    project: "SponsorHub",
    slug: "sponsorhub",
    threats: [
      "Fake conversions → inflated payouts",
      "Replay attacks → duplicate payouts",
      "Budget overrun → overspending client funds",
      "Tampered attribution → incorrect creator credit",
    ],
    mitigations: [
      "HMAC-signed attribution artifacts",
      "Composite key dedup + time window",
      "Append-only ledger (no mutation)",
      "Idempotent Stripe payouts",
      "Funding gate (state machine enforcement)",
      "Budget cap at rollup layer",
    ],
  },
];

export function SecurityContent() {
  const caseStudies = getSecurityCaseStudies();

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* 1 — Positioning header */}
        <FadeIn>
          <header className="mb-16 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Andrew Vu
            </h1>
            <p className="mt-3 text-xl text-accent md:text-2xl">
              {SECURITY_POSITIONING.headline}
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-base text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 shrink-0" />
                Oregon, USA
              </span>
              <span>
                B.S. Computer Science + Cybersecurity Certificate, Oregon State
                University, 2026
              </span>
            </p>
            {/* Plain dated text — Security+ is scheduled, not earned. No badge. */}
            <p className="mt-2 text-base text-muted-foreground">
              {SECURITY_POSITIONING.certification}
            </p>
          </header>
        </FadeIn>

        {/* 2 — Case studies */}
        <FadeIn>
          <SectionTitle>Casework</SectionTitle>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            Each page states what the evidence established, and — separately —
            what it did not, with the artifact that would settle each open
            question.
          </p>
        </FadeIn>

        {/* Two-up at tablet width; three-up only once there is room for the
            content-type badge to sit on one line. */}
        <Stagger className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((project) => (
            <StaggerItem key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <Card className="flex h-full flex-col">
                  <div className="relative mb-4 h-40 overflow-hidden rounded-lg bg-muted/50">
                    {project.cardVisual && (
                      <ProjectCardVisual
                        visual={project.cardVisual}
                        label={`${project.title} — diagram`}
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      <Badge variant="outline">
                        {getContentTypeLabel(project)}
                      </Badge>
                      {project.tags
                        .filter((t) => t === "Academic")
                        .map((tag) => (
                          <Badge key={tag} variant={getTagVariant(tag)}>
                            {tag}
                          </Badge>
                        ))}
                    </div>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">
                      {project.title}
                    </h3>
                    {project.context && (
                      <p className="mt-1.5 font-mono text-xs leading-snug text-muted-foreground">
                        {project.context}
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-1 text-sm font-medium text-accent">
                    Read the write-up
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {/* 3 — Tooling, grouped by function */}
        <FadeIn>
          <SectionTitle icon={Wrench}>Tooling</SectionTitle>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            Grouped as they appear on the cybersecurity résumé.
          </p>
        </FadeIn>

        <div className="mb-20 space-y-8">
          {SECURITY_TOOLING.map((group) => (
            <FadeIn key={group.name}>
              <div className="grid gap-x-8 gap-y-3 border-t border-border pt-5 md:grid-cols-[minmax(0,15rem)_1fr]">
                <h3 className="text-base font-semibold text-foreground">
                  {group.name}
                </h3>
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-muted px-2.5 py-1 text-sm text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 4 — Security coursework */}
        <FadeIn>
          <SectionTitle icon={BookOpen}>Security coursework</SectionTitle>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            Oregon State University.
          </p>
          <ul className="mb-12 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {SECURITY_COURSEWORK.map((course) => (
              <li
                key={`${course.code}${course.name}`}
                className="flex gap-3 border-b border-border pb-3"
              >
                {course.code && (
                  <span className="w-16 shrink-0 font-mono text-sm text-accent">
                    {course.code}
                  </span>
                )}
                <span
                  className={
                    course.code
                      ? "text-foreground"
                      : "ml-[4.75rem] text-foreground"
                  }
                >
                  {course.name}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Additional security work — short entries, not full case studies */}
        <FadeIn>
          <SectionTitle icon={Plus}>Additional security work</SectionTitle>
          <div className="mb-20 space-y-6">
            {ADDITIONAL_SECURITY_WORK.map((work) => (
              <div
                key={work.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {work.title}
                </h3>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                  {work.context}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {work.detail}
                </p>
                {work.href && (
                  <Link
                    href={work.href}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    {work.hrefLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Applied security in shipped systems — threat models from code that
            was actually built, as opposed to the coursework above. */}
        <FadeIn>
          <SectionTitle icon={AlertTriangle}>
            Applied security in shipped systems
          </SectionTitle>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            Attack surface and mitigations for systems I built, rather than
            environments I was given.
          </p>
        </FadeIn>

        <div className="mb-20 grid gap-6 lg:grid-cols-2">
          {threatModels.map((model) => (
            <FadeIn key={model.title}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {model.title}
                  </h3>
                  <Badge variant="accent">{model.project}</Badge>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-red-600 dark:text-red-400">
                    Threats
                  </h4>
                  <ul className="space-y-1.5">
                    {model.threats.map((t) => (
                      <li
                        key={t}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                    Mitigations
                  </h4>
                  <ul className="space-y-1.5">
                    {model.mitigations.map((m) => (
                      <li
                        key={m}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <Shield className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <Link
                    href={`/projects/${model.slug}`}
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    View full case study &rarr;
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 5 — Résumé download */}
        <FadeIn>
          <div className="mb-16 rounded-2xl border border-border bg-card p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Cybersecurity resume
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              The full record — tooling, coursework, and experience — in one
              page.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {/* TODO(andrew): replace public/documents/AndrewVu_Resume_Cybersecurity.pdf
                  with the updated cybersecurity resume. The file currently at
                  that path is the one committed in 6e239d4 and predates the
                  three case studies on this page — a recruiter cross-checking
                  the PDF against this page will not find them. No placeholder
                  has been generated; drop the real file in at the same path
                  and nothing here needs to change. */}
              <a
                href="/documents/AndrewVu_Resume_Cybersecurity.pdf"
                download
                className={buttonVariants({ variant: "accent", size: "md" })}
              >
                <Download className="h-4 w-4" />
                Cybersecurity Resume
              </a>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "secondary", size: "md" })}
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* 6 — External verification. Renders only once a real profile exists. */}
        {EXTERNAL_VERIFICATION.enabled && EXTERNAL_VERIFICATION.url && (
          <FadeIn>
            <div className="rounded-xl border border-border bg-muted/30 p-6 text-center">
              <h2 className="text-base font-semibold text-foreground">
                External verification
              </h2>
              <a
                href={EXTERNAL_VERIFICATION.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                {EXTERNAL_VERIFICATION.label ||
                  `${EXTERNAL_VERIFICATION.platform} profile`}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-3 flex items-center gap-2.5 text-3xl font-bold tracking-tight text-foreground">
      {Icon && <Icon className="h-6 w-6 shrink-0 text-accent" />}
      {children}
    </h2>
  );
}
