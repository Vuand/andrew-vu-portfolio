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
    label: "B.S. in Computer Science + Cybersecurity Certificate",
    detail: "Oregon State University — B.S. in Computer Science + Cybersecurity Certificate, 3.44 GPA, Dean's List",
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
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80 md:text-xl">
            I&rsquo;m a Computer Science student at Oregon State University pursuing
            a Bachelor of Science in Computer Science along with a Cybersecurity
            Certificate, graduating in June 2026. I have a strong foundation in
            programming, algorithms, data structures, cloud technologies, AI/ML,
            and cybersecurity, supported by hands-on academic and personal
            projects. I enjoy building full-stack applications with a
            security-first mindset across systems, web, and cloud environments.
            I&rsquo;m motivated, curious, and passionate about continuous learning,
            problem-solving, and working in collaborative environments. Outside
            of tech, I enjoy playing tennis, working out at the gym, and
            exploring new experiences. I&rsquo;m currently seeking entry-level roles
            in software or cybersecurity engineering where I can apply my skills
            and gain real-world industry experience.
          </p>
        </motion.div>

        {/* Signal cards */}
        <Stagger className="grid gap-3 sm:grid-cols-2">
          {signals.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/30">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-0.5 text-base leading-snug text-foreground/60">
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
