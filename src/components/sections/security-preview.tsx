"use client";

import Link from "next/link";
import {
  Shield,
  ArrowRight,
  Lock,
  Database,
  RefreshCw,
  Key,
  FileCheck,
  AlertTriangle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion-wrapper";

const canProve = [
  { icon: Lock, label: "HMAC-signed artifacts", project: "SponsorHub" },
  { icon: Database, label: "Append-only audit ledger", project: "SponsorHub" },
  { icon: RefreshCw, label: "Replay protection & dedup", project: "SponsorHub" },
  { icon: Key, label: "RBAC enforcement", project: "SponsorHub" },
  { icon: Shield, label: "Allow-listed LLM execution", project: "Home Assistant" },
  { icon: FileCheck, label: "JSON Schema validation", project: "Home Assistant" },
];

const learning = [
  "Penetration testing methodology",
  "SAST/SCA toolchain integration",
  "SOC operations & incident response",
  "Container security (runtime policies)",
];

const threatModelCards = [
  {
    title: "LLM → Home Assistant Safe Execution",
    subtitle: "Threat Model",
    threats: ["Prompt injection", "Entity spoofing", "API key leakage"],
    mitigations: ["Allow-listed services", "Entity validation", "JSON Schema enforcement"],
    project: "Home Assistant AI",
  },
  {
    title: "SponsorHub Payout Correctness",
    subtitle: "Invariants & Fraud Controls",
    threats: ["Fake conversions", "Replay attacks", "Budget overrun"],
    mitigations: ["HMAC signing", "Append-only ledger", "Idempotent Stripe payouts"],
    project: "SponsorHub",
  },
];

export function SecurityPreview() {
  return (
    <section id="security" className="py-20 md:py-28" aria-label="Security proof">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="// security engineering"
          title="Security-Minded by Default"
          description="Patterns backed by shipped code — not claims."
        />

        {/* Two-column: What I can prove / What I'm learning */}
        <div className="mb-14 grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-xl border border-border bg-card p-6 h-full">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Shield className="h-5 w-5 text-emerald-500" />
                What I Can Prove
              </h3>
              <div className="space-y-3">
                {canProve.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-foreground">{item.label}</span>
                    <Badge variant="outline" className="ml-auto text-xs">
                      {item.project}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="rounded-xl border border-border bg-card p-6 h-full">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                What I&apos;m Learning
              </h3>
              <ul className="space-y-3">
                {learning.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                9 security courses at OSU: Network Security, Digital Forensics,
                Cryptography, Defense Against the Dark Arts, Security Governance,
                and more.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Threat model artifact cards */}
        <FadeIn>
          <h3 className="mb-6 text-xl font-bold text-foreground">
            Threat Model Artifacts
          </h3>
        </FadeIn>

        <Stagger className="grid gap-6 lg:grid-cols-2">
          {threatModelCards.map((card) => (
            <StaggerItem key={card.title}>
              <Card className="h-full">
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant="accent">{card.subtitle}</Badge>
                  <Badge variant="outline">{card.project}</Badge>
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {card.title}
                </h4>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-red-500 dark:text-red-400">
                      Threats
                    </p>
                    <ul className="space-y-1">
                      {card.threats.map((t) => (
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
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Mitigations
                    </p>
                    <ul className="space-y-1">
                      {card.mitigations.map((m) => (
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
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn>
          <div className="mt-10 text-center">
            <Link href="/security">
              <Button variant="secondary">
                Full Security Deep Dive
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
