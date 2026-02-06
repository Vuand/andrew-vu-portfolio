"use client";

import { Code2, Shield, Rocket, GraduationCap } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/motion-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";

const bullets = [
  {
    icon: Code2,
    label: "Full-stack builder",
    detail:
      "Next.js, TypeScript, Python, PostgreSQL — frontend through infrastructure",
  },
  {
    icon: Shield,
    label: "Security in the architecture",
    detail:
      "Threat models, HMAC signing, allow-listed execution, append-only ledgers",
  },
  {
    icon: Rocket,
    label: "Shipped production systems",
    detail:
      "Sole-developer websites, platform migrations, AI automation pipelines",
  },
  {
    icon: GraduationCap,
    label: "CS + Cybersecurity",
    detail:
      "Oregon State BS Computer Science + Cybersecurity Certificate (3.44 GPA, Dean's List)",
  },
];

export function RecruiterTLDR() {
  return (
    <section className="py-16 md:py-24" aria-label="Quick overview">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="// 30-second overview"
          title="The Short Version"
        />

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {bullets.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
