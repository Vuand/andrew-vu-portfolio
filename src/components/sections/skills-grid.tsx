"use client";

import { SKILL_CATEGORIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion-wrapper";

export function SkillsGrid() {
  return (
    <section className="py-20 md:py-28 bg-muted/30" aria-label="Technical skills">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="// technical skills"
          title="Tools & Technologies"
          description="Curated by what I've actually shipped with — not a keyword dump."
        />

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((cat) => (
            <StaggerItem key={cat.name}>
              <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/30 h-full">
                <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                  {cat.name}
                </h3>
                <ul className="space-y-1.5">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
