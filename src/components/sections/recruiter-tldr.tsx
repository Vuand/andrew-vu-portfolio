"use client";

import {
  Code2,
  Shield,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/ui/motion-wrapper";

const signals = [
  {
    icon: GraduationCap,
    label: "CS + Cybersecurity",
    detail: "Oregon State — BS Computer Science + Cybersecurity Certificate, 3.44 GPA, Dean's List",
  },
  {
    icon: Code2,
    label: "Full-Stack Engineer",
    detail: "Next.js, TypeScript, React, Python, PostgreSQL, REST APIs, Docker, CI/CD",
  },
  {
    icon: Shield,
    label: "Security-First",
    detail: "Input validation, allow-listing, authZ patterns, HMAC signing, audit-ready systems",
  },
  {
    icon: Trophy,
    label: "Leadership & Discipline",
    detail: "NCAA Division I Men's Tennis (PSU), Student Ambassador (OSU)",
  },
];

export function RecruiterTLDR() {
  return (
    <section className="py-12 md:py-16" aria-label="About me">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading + intro paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-3xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
            I&rsquo;m a Computer Science student at Oregon State University pursuing
            a Cybersecurity Certificate (graduating June 2026). I build
            full-stack software with a security-first mindset, backed by
            hands-on projects across systems, web, and cloud. Outside of
            coding, I&rsquo;m usually playing tennis or chasing a new adventure.
          </p>
        </motion.div>

        {/* Signal cards */}
        <Stagger className="grid gap-3 sm:grid-cols-2">
          {signals.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-0.5 text-sm leading-snug text-foreground/60">
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
