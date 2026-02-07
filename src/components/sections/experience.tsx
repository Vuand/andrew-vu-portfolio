"use client";

import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/motion-wrapper";

interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  tech: string[];
  bullets: string[];
}

const roles: Role[] = [
  {
    title: "Software Engineer (Freelance)",
    company: "Gresham United Methodist Church",
    location: "Gresham, OR",
    period: "Sep 2025 – Dec 2025",
    tech: ["Framer", "HTML/CSS/JS", "PayPal API", "DNS"],
    bullets: [
      "Architected component-based web system in Framer with custom HTML/CSS/JS reusable components, reducing content update time for non-technical staff",
      "Led zero-downtime Wix → Framer migration — planned DNS transfer, domain config, and email continuity with no service interruption",
      "Built structured content models (events, leadership, programs) as data-driven templates for scalable CMS management",
      "Integrated secure PayPal payment processing; enforced mobile responsiveness and ADA accessibility across all pages",
    ],
  },
  {
    title: "Software Engineer (Intern)",
    company: "Wholistic Peace Institute",
    location: "Lake Oswego, OR",
    period: "Jun 2025 – Aug 2025",
    tech: ["WordPress", "PayPal/Stripe API", "Google Books API", "PHP", "Bluehost"],
    bullets: [
      "Sole developer — designed, built, and maintained full organizational website end-to-end, from frontend to server infrastructure",
      "Built API-driven digital library checkout system using Google Books API with custom AJAX-style JS interactions and session management",
      "Integrated PCI-compliant payment processing via PayPal and Stripe APIs for donations and product sales",
      "Managed Bluehost infrastructure — server configuration, performance optimization, and reliability monitoring",
      "Delivered scalable CMS workflow enabling nonprofit staff to manage content independently post-handoff",
    ],
  },
  {
    title: "Nike Tennis Coach",
    company: "Nike Tennis — Pepperdine University",
    location: "Malibu, CA",
    period: "Jun 2024 – Sep 2024",
    tech: [],
    bullets: [
      "Designed individualized training programs for youth and adult athletes across skill levels",
      "Managed multi-session logistics, safety protocols, and cross-team coordination",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-14 md:py-20" aria-label="Work experience">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Experience"
          title="Where I've Worked"
          align="left"
        />

        <div className="space-y-10">
          {roles.map((role, i) => (
            <FadeIn key={role.company} delay={i * 0.05}>
              <div className="relative border-l-2 border-border pl-8">
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <span className="font-mono text-sm text-muted-foreground">
                    {role.period}
                  </span>
                </div>

                <p className="text-base font-medium text-accent">
                  {role.company}
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {role.location}
                </p>

                {role.tech.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {role.tech.map((t) => (
                      <Badge key={t} variant="default">
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}

                <ul className="mt-4 space-y-2">
                  {role.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-base text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
