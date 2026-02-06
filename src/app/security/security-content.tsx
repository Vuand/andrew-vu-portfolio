"use client";

import {
  Shield,
  Lock,
  Key,
  FileCheck,
  AlertTriangle,
  Database,
  Fingerprint,
  RefreshCw,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion-wrapper";
import Link from "next/link";

const provablePatterns = [
  {
    icon: Lock,
    name: "HMAC-Signed Artifacts",
    detail: "Tamper-evident redirect links and promo codes for attribution integrity",
    project: "SponsorHub",
    slug: "sponsorhub",
  },
  {
    icon: Database,
    name: "Append-Only Ledger",
    detail: "No UPDATE/DELETE on conversion events — corrections via compensating entries",
    project: "SponsorHub",
    slug: "sponsorhub",
  },
  {
    icon: RefreshCw,
    name: "Replay Protection",
    detail: "Events deduplicated by composite key + time window to prevent double-counting",
    project: "SponsorHub",
    slug: "sponsorhub",
  },
  {
    icon: Key,
    name: "Role-Based Access Control",
    detail: "Clerk RBAC enforces brand/creator/admin boundaries across all endpoints",
    project: "SponsorHub",
    slug: "sponsorhub",
  },
  {
    icon: Shield,
    name: "Allow-Listed Execution",
    detail: "Only pre-approved Home Assistant services can be invoked — LLM never controls hardware directly",
    project: "Home Assistant AI",
    slug: "home-assistant-ai",
  },
  {
    icon: FileCheck,
    name: "JSON Schema Validation",
    detail: "All LLM structured output validated against schema before reaching execution layer",
    project: "Home Assistant AI",
    slug: "home-assistant-ai",
  },
  {
    icon: Fingerprint,
    name: "Idempotent Payments",
    detail: "Stripe Connect payouts with idempotency keys — retry-safe disbursement",
    project: "SponsorHub",
    slug: "sponsorhub",
  },
  {
    icon: AlertTriangle,
    name: "Input Sanitization",
    detail: "Prompt injection defense — user input cleaned before prompt construction",
    project: "Home Assistant AI",
    slug: "home-assistant-ai",
  },
];

const coursework = [
  "Network Security",
  "Digital Forensics",
  "Cryptography",
  "Defense Against the Dark Arts",
  "Security Governance",
  "Computer Networks",
  "Operating Systems",
  "Cloud Application Development",
];

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
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="// security & reliability"
          title="Security-Minded Engineering"
          description="Every pattern listed here is backed by shipped code or coursework — not claims."
        />

        {/* Provable Security Patterns */}
        <FadeIn>
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Provable Patterns
          </h2>
          <p className="mb-8 text-muted-foreground">
            Security patterns implemented in production code. Each links to
            the project where it&apos;s used.
          </p>
        </FadeIn>

        <Stagger className="mb-16 grid gap-4 sm:grid-cols-2">
          {provablePatterns.map((pattern) => (
            <StaggerItem key={pattern.name}>
              <Link href={`/projects/${pattern.slug}`}>
                <Card className="flex h-full gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <pattern.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">
                        {pattern.name}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {pattern.detail}
                    </p>
                    <Badge variant="outline" className="mt-2">
                      {pattern.project}
                    </Badge>
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Threat Models */}
        <FadeIn>
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
            <AlertTriangle className="h-6 w-6 text-accent" />
            Threat Models
          </h2>
          <p className="mb-8 text-muted-foreground">
            Attack surface analysis and mitigation strategies for key
            projects.
          </p>
        </FadeIn>

        <div className="mb-16 grid gap-6 lg:grid-cols-2">
          {threatModels.map((model) => (
            <FadeIn key={model.title}>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {model.title}
                  </h3>
                  <Badge variant="accent">{model.project}</Badge>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-red-500 dark:text-red-400">
                    Threats
                  </h4>
                  <ul className="space-y-1.5">
                    {model.threats.map((t, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    Mitigations
                  </h4>
                  <ul className="space-y-1.5">
                    {model.mitigations.map((m, i) => (
                      <li
                        key={i}
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

        {/* Coursework */}
        <FadeIn>
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
            <BookOpen className="h-6 w-6 text-accent" />
            Security Coursework
          </h2>
          <p className="mb-6 text-muted-foreground">
            Formal security education at Oregon State University — the
            foundation behind the patterns above.
          </p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <Badge key={course} variant="default">
                {course}
              </Badge>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
