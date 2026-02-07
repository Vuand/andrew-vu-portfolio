"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Lock,
  Shield,
  Scale,
  // FileText,
  // Image as ImageIcon,
  // Play,
  // AlertTriangle,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { SponsorHubDiagram } from "@/components/projects/sponsorhub-diagram";

// const artifactIcons = {
//   diagram: FileText,
//   screenshot: ImageIcon,
//   video: Play,
//   "threat-model": AlertTriangle,
// };

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <ScrollProgress />

      <article className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Back link */}
          <FadeIn>
            <Link
              href="/projects"
              className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.05}>
            <header className="mb-12">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="accent">
                    {tag}
                  </Badge>
                ))}
                {project.confidential && (
                  <Badge variant="warning">
                    <Lock className="mr-1 h-3 w-3" />
                    Confidential
                  </Badge>
                )}
                <Badge variant="outline">{project.status}</Badge>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                {project.tagline}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>
                  <strong className="text-foreground">Role:</strong>{" "}
                  {project.role}
                </span>
                <span>
                  <strong className="text-foreground">Period:</strong>{" "}
                  {project.period}
                </span>
              </div>

              {project.links && project.links.length > 0 && (
                <div className="mt-4 flex gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary" size="sm">
                        {link.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Button>
                    </a>
                  ))}
                </div>
              )}
            </header>
          </FadeIn>

          {/* Confidentiality notice */}
          {project.confidential && (
            <FadeIn delay={0.1}>
              <div className="mb-10 rounded-lg border border-amber-500/30 bg-amber-500/5 p-5">
                <div className="flex items-start gap-3">
                  <Lock className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Confidentiality Note
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Code is private during active development. This case study
                      covers architecture, system invariants, and engineering
                      decisions — not implementation details. Happy to walk
                      through architecture and modules live.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Description */}
          <FadeIn delay={0.15}>
            <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </FadeIn>

          {/* Problem */}
          <FadeIn>
            <CaseSection title="Problem">
              <p className="leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </CaseSection>
          </FadeIn>

          {/* Solution */}
          <FadeIn>
            <CaseSection title="Solution">
              <p className="leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </CaseSection>
          </FadeIn>

          {/* Architecture */}
          <FadeIn>
            <CaseSection title="Architecture">
              {project.slug === "sponsorhub" && (
                <div className="mb-6 overflow-hidden rounded-xl border border-border bg-muted/30 p-6">
                  <SponsorHubDiagram />
                </div>
              )}
              <ul className="space-y-3">
                {project.architecture.map((point, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
          </FadeIn>

          {/* Security & Reliability */}
          <FadeIn>
            <CaseSection title="Security & Reliability" icon={Shield}>
              <ul className="space-y-3">
                {project.securityReliability.map((point, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <Shield className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
          </FadeIn>

          {/* Design Tradeoffs */}
          {project.designTradeoffs && project.designTradeoffs.length > 0 && (
            <FadeIn>
              <CaseSection title="Design Tradeoffs" icon={Scale}>
                <ul className="space-y-3">
                  {project.designTradeoffs.map((point, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <Scale className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>
            </FadeIn>
          )}

          {/* Results */}
          <FadeIn>
            <CaseSection title="Results">
              <ul className="space-y-3">
                {project.results.map((point, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
          </FadeIn>

          {/* Tech Stack */}
          <FadeIn>
            <CaseSection title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="default">
                    {t}
                  </Badge>
                ))}
              </div>
            </CaseSection>
          </FadeIn>

          {/* Artifacts — commented out until proper media is added
          {project.artifacts.length > 0 && (
            <FadeIn>
              <CaseSection title="Artifacts">
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.artifacts.map((artifact) => {
                    const Icon = artifactIcons[artifact.type];
                    return (
                      <div
                        key={artifact.label}
                        className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {artifact.label}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            [placeholder — to be added]
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CaseSection>
            </FadeIn>
          )}
          */}
        </div>
      </article>
    </>
  );
}

function CaseSection({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
        {Icon && <Icon className="h-6 w-6 text-accent" />}
        {title}
      </h2>
      {children}
    </section>
  );
}
