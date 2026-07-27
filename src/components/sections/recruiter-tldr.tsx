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
    detail: "Oregon State University — B.S. in Computer Science + Cybersecurity Certificate, 3.51 GPA, Cum Laude, Dean's List",
  },
  {
    icon: Code2,
    label: "Software & Security Engineer",
    detail: "Python · Java · JavaScript · TypeScript · React · SQL · REST APIs · Docker · CI/CD · Git · AWS · GCP",
  },
  {
    icon: Shield,
    label: "Forensics & Secure Systems",
    detail: "Windows forensic examination, enterprise vulnerability assessment, RF device authentication — plus allow-listed execution, HMAC signing, and audit-ready ledgers in shipped code",
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
            I build software with the security model designed in, and I examine
            systems other people built. Bachelor of Science in Computer Science
            and a Cybersecurity Certificate from Oregon State University. Recent
            work spans a computer-vision iOS coaching app, escrow-and-attribution
            payment infrastructure, a Windows disk-image forensic examination
            reported as expert witness testimony, and a vulnerability assessment
            across a Windows domain and a Linux server. I work in both directions
            &mdash; building secure systems and investigating them &mdash; and
            I&rsquo;m open to software and cybersecurity engineering roles.
            Outside of tech: tennis, the gym, and anything I haven&rsquo;t tried
            yet.
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
