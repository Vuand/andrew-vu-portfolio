"use client";

import { GraduationCap, Award, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/motion-wrapper";

const keyCoursework = [
  "Data Structures & Algorithms",
  "Advanced Web Dev",
  "Cloud App Dev",
  "Operating Systems",
  "Computer Networks",
  "Parallel Programming",
  "Network Security",
  "Digital Forensics",
  "Cryptography",
  "Defense Against the Dark Arts",
  "Security Governance",
  "AI",
  "Data Mining & ML",
];

export function Education() {
  return (
    <section
      id="education"
      className="py-14 md:py-20 bg-muted/30"
      aria-label="Education"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Education"
          title="Academic Background"
          align="left"
        />

        <div className="space-y-10">
          {/* Oregon State */}
          <FadeIn>
            <div className="rounded-xl border border-border bg-card p-7 md:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-accent" />
                    <h3 className="text-2xl font-bold text-foreground">
                      Oregon State University
                    </h3>
                  </div>
                  <p className="mt-1 text-base font-medium text-foreground">
                    Bachelor of Science in Computer Science + Cybersecurity Certificate
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    Corvallis, Oregon
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-sm text-muted-foreground">
                    Sep 2022 – Jun 2026
                  </span>
                  <div className="mt-1 flex gap-2">
                    <Badge variant="accent">3.44 GPA</Badge>
                    <Badge variant="success">
                      <Award className="mr-1 h-3 w-3" />
                      Dean&apos;s List
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Capstone */}
              <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4">
                <h4 className="text-base font-semibold text-foreground">
                  Senior Capstone: AI-Powered Home Assistant Integration
                </h4>
                <p className="mt-1 text-base text-muted-foreground leading-relaxed">
                  Building a secure pipeline that converts natural language
                  commands into validated JSON actions for Home Assistant via
                  GPT-4o. Features allow-listed service execution, entity
                  validation, API key protection, and modular async architecture
                  (AsyncIO).
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    "Python",
                    "GPT-4o",
                    "Home Assistant",
                    "AsyncIO",
                    "JSON Schema",
                    "REST APIs",
                  ].map((t) => (
                    <Badge key={t} variant="default">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Coursework */}
              <div className="mt-6">
                <h4 className="mb-2 text-base font-semibold text-foreground">
                  Key Coursework
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {keyCoursework.map((c) => (
                    <Badge key={c} variant="outline">
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Portland State */}
          <FadeIn delay={0.05}>
            <div className="rounded-xl border border-border bg-card p-7 md:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-accent" />
                    <h3 className="text-2xl font-bold text-foreground">
                      Portland State University
                    </h3>
                  </div>
                  <p className="mt-1 text-base font-medium text-foreground">
                    Bachelor of Science in Computer Science (transferred)
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    Portland, Oregon
                  </p>
                </div>
                <span className="font-mono text-sm text-muted-foreground">
                  Sep 2020 – Jun 2022
                </span>
              </div>
              <p className="mt-3 text-base text-muted-foreground">
                Completed CS prerequisite coursework. NCAA Division I
                Men&apos;s Tennis Team member.
              </p>
            </div>
          </FadeIn>

          {/* Achievements */}
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-border bg-card p-7 md:p-9">
              <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
                <Award className="h-6 w-6 text-accent" />
                Achievements & Leadership
              </h3>
              <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <strong className="text-foreground">NCAA Division I</strong>{" "}
                  — Men&apos;s Tennis Team, Portland State University
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <strong className="text-foreground">Student Ambassador</strong>{" "}
                  — Oregon State University
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <strong className="text-foreground">
                    USTA Junior Championships
                  </strong>{" "}
                  — Multiple trophies
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
