"use client";

import { Download, ExternalLink, MapPin, GraduationCap, Briefcase, Trophy, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { SITE_CONFIG } from "@/lib/constants";

export function ResumeContent() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          label="// resume"
          title="Andrew Vu"
          description="Full-Stack Software Engineer &middot; Security-Minded Builder"
        />

        {/* Download + links */}
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            <a href="/documents/AndrewVu-SWE-Resume.pdf" download>
              <Button variant="accent">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </a>
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="sm">
                GitHub <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="sm">
                LinkedIn <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn>
          <ResumeSection title="Education" icon={GraduationCap}>
            <ResumeEntry
              title="Oregon State University"
              subtitle="BS Computer Science + Cybersecurity Certificate"
              location="Corvallis, Oregon"
              period="Sep 2022 – Jun 2026 (expected)"
              badges={["GPA: 3.44", "Dean's List"]}
            >
              <p className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">Senior Capstone:</strong>{" "}
                AI-Powered Home Assistant Integration — converting natural
                language to validated smart-home actions via GPT-4o with secure
                execution pipeline.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">Key Coursework:</strong>{" "}
                Data Structures & Algorithms, Advanced Web Dev, Cloud App Dev,
                Network Security, Digital Forensics, Cryptography, Defense
                Against the Dark Arts, Security Governance, AI, Parallel
                Programming
              </p>
            </ResumeEntry>

            <ResumeEntry
              title="Portland State University"
              subtitle="BS Computer Science (transferred)"
              location="Portland, Oregon"
              period="Sep 2020 – Jun 2022"
            >
              <p className="mt-2 text-sm text-muted-foreground">
                Completed CS prerequisite coursework before transferring to
                Oregon State.
              </p>
            </ResumeEntry>
          </ResumeSection>
        </FadeIn>

        {/* Experience */}
        <FadeIn>
          <ResumeSection title="Experience" icon={Briefcase}>
            <ResumeEntry
              title="Software Engineer (Freelance)"
              subtitle="Gresham United Methodist Church"
              location="Gresham, OR"
              period="Sep 2025 – Dec 2025"
              badges={["Framer", "HTML/CSS/JS", "PayPal API", "DNS"]}
            >
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Built component-based web architecture in Framer with custom
                  reusable UI components
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Led Wix → Framer migration with zero downtime — DNS config,
                  domain transfer, email continuity
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Built structured content models and data-driven templates for
                  scalable content management
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Integrated secure PayPal payments; optimized mobile
                  responsiveness and ADA accessibility
                </li>
              </ul>
            </ResumeEntry>

            <ResumeEntry
              title="Software Engineer (Intern)"
              subtitle="Wholistic Peace Institute"
              location="Lake Oswego, OR"
              period="Jun 2025 – Aug 2025"
              badges={[
                "WordPress",
                "PayPal/Stripe API",
                "Google Books API",
                "PHP",
              ]}
            >
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Sole developer — designed, built, and maintained org website
                  end-to-end
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Built API-driven digital library checkout system using Google
                  Books API
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Integrated PayPal + Stripe for secure payment processing
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Managed full infrastructure on Bluehost — server config,
                  performance, reliability
                </li>
              </ul>
            </ResumeEntry>

            <ResumeEntry
              title="Tennis Coach"
              subtitle="Nike Tennis — Pepperdine University"
              location="Malibu, CA"
              period="Jun 2024 – Sep 2024"
            >
              <p className="mt-2 text-sm text-muted-foreground">
                Coached youth and adult athletes. Designed customized training
                programs, managed logistics, and maintained safety standards.
              </p>
            </ResumeEntry>
          </ResumeSection>
        </FadeIn>

        {/* Achievements */}
        <FadeIn>
          <ResumeSection title="Achievements & Leadership" icon={Trophy}>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                NCAA Division I Men&apos;s Tennis Team — Portland State
                University
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Student Ambassador — Oregon University
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Multiple USTA Junior Championship trophies
              </li>
            </ul>
          </ResumeSection>
        </FadeIn>

        {/* Volunteer */}
        <FadeIn>
          <ResumeSection title="Volunteer" icon={Heart}>
            <ResumeEntry
              title="Elderly Care Volunteer"
              subtitle="Meals on Wheels Association of America"
              location="Beaverton, OR"
              period="Jun 2015 – Sep 2018"
            >
              <p className="mt-2 text-sm text-muted-foreground">
                Assisted elderly and disabled veterans with meal service and
                delivery. Maintained supportive, clean environment.
              </p>
            </ResumeEntry>
          </ResumeSection>
        </FadeIn>

        {/* PDF embed placeholder */}
        <FadeIn>
          <div className="mt-16 rounded-xl border border-border bg-muted/30 p-12 text-center">
            <p className="text-sm text-muted-foreground">
              [Resume PDF embed placeholder — add{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                /public/documents/AndrewVu-SWE-Resume.pdf
              </code>{" "}
              to enable]
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function ResumeSection({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
        <Icon className="h-6 w-6 text-accent" />
        {title}
      </h2>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

function ResumeEntry({
  title,
  subtitle,
  location,
  period,
  badges,
  children,
}: {
  title: string;
  subtitle: string;
  location: string;
  period: string;
  badges?: string[];
  children?: React.ReactNode;
}) {
  return (
    <div className="relative border-l-2 border-border pl-6">
      <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <span className="font-mono text-xs text-muted-foreground">
          {period}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      <p className="flex items-center gap-1 text-xs text-muted-foreground">
        <MapPin className="h-3 w-3" />
        {location}
      </p>
      {badges && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {badges.map((b) => (
            <Badge key={b} variant="default">
              {b}
            </Badge>
          ))}
        </div>
      )}
      {children}
    </div>
  );
}
