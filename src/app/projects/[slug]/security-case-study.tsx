"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  GraduationCap,
  Scale,
  ScanSearch,
  Terminal,
  ListOrdered,
  FileSearch,
  Lightbulb,
  UserCheck,
  BookMarked,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { getContentTypeLabel } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { getTagVariant } from "@/lib/tag-variants";
import { IncidentTimeline } from "@/components/projects/incident-timeline";

/**
 * Template for security casework.
 *
 * A software case study answers "does it work and is it well built?" This one
 * answers "is the reasoning sound, and did they know when to stop?" — which is
 * why the section order is fixed and why "Limits & what would confirm" gets
 * callout treatment rather than being a footnote. An examination that never
 * states what the evidence could not support is not a credible examination.
 */
export function SecurityCaseStudy({ project }: { project: Project }) {
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
            <header className="mb-10">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge variant="outline">{getContentTypeLabel(project)}</Badge>
                {project.tags.map((tag) => (
                  <Badge key={tag} variant={getTagVariant(tag)}>
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                {project.tagline}
              </p>

              {/* Course provenance — never let a reader assume this was
                  professional or client work. */}
              {project.context && (
                <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-violet-600 dark:text-violet-300" />
                  <span>{project.context}</span>
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>
                  <strong className="text-foreground">Role:</strong>{" "}
                  {project.role}
                </span>
                <span>
                  <strong className="text-foreground">Period:</strong>{" "}
                  {project.period}
                </span>
              </div>
            </header>
          </FadeIn>

          {/* Attribution — for team work, what Andrew personally did.
              Sits above the body so it is read before any finding. */}
          {project.attribution && (
            <FadeIn delay={0.1}>
              <div className="mb-10 rounded-lg border border-violet-500/30 bg-violet-500/5 p-5">
                <div className="flex items-start gap-3">
                  <UserCheck className="mt-0.5 h-5 w-5 shrink-0 text-violet-600 dark:text-violet-300" />
                  <div>
                    <h2 className="font-semibold text-foreground">
                      My contribution
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {project.attribution}
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

          {/* 1 — Scope */}
          {project.scope && (
            <FadeIn>
              <Section title="Scope" icon={ScanSearch}>
                <p className="leading-relaxed text-muted-foreground">
                  {project.scope}
                </p>
                {project.scopeNotes && project.scopeNotes.length > 0 && (
                  <div className="mt-5 space-y-3 border-l-2 border-border pl-4">
                    {project.scopeNotes.map((note, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {note}
                      </p>
                    ))}
                  </div>
                )}
              </Section>
            </FadeIn>
          )}

          {/* 2 — Environment & tooling */}
          {(project.environment ||
            (project.tooling && project.tooling.length > 0)) && (
            <FadeIn>
              <Section title="Environment & tooling" icon={Terminal}>
                {project.environment && (
                  <p className="leading-relaxed text-muted-foreground">
                    {project.environment}
                  </p>
                )}
                {project.tooling && project.tooling.length > 0 && (
                  <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {project.tooling.map((tool) => (
                      <div key={tool.name}>
                        <dt className="font-mono text-sm font-medium text-foreground">
                          {tool.name}
                        </dt>
                        {tool.purpose && (
                          <dd className="mt-0.5 text-sm leading-snug text-muted-foreground">
                            {tool.purpose}
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
                )}
              </Section>
            </FadeIn>
          )}

          {/* 3 — Method */}
          {(project.methodIntro ||
            (project.method && project.method.length > 0)) && (
            <FadeIn>
              <Section title="Method" icon={ListOrdered}>
                {project.methodIntro && (
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {project.methodIntro}
                  </p>
                )}
                {project.method && project.method.length > 0 && (
                  <ol className="space-y-6">
                    {project.method.map((step, i) => (
                      <li key={step.title} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-semibold text-accent"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {step.title}
                          </h3>
                          <p className="mt-1 leading-relaxed text-muted-foreground">
                            {step.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
                {project.slug === "insider-threat-forensic-examination" && (
                  <div className="mt-8">
                    <IncidentTimeline />
                  </div>
                )}
              </Section>
            </FadeIn>
          )}

          {/* 4 — Findings */}
          {project.findings && project.findings.length > 0 && (
            <FadeIn>
              <Section title="Findings" icon={FileSearch}>
                {project.findingsNote && (
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {project.findingsNote}
                  </p>
                )}
                <div className="space-y-8">
                  {project.findings.map((group, gi) => (
                    <div key={group.group ?? gi}>
                      {group.group && (
                        <h3 className="mb-3 text-lg font-semibold text-foreground">
                          {group.group}
                        </h3>
                      )}
                      {/* The finding to lead with, when severity does not
                          track with position in the list. */}
                      {group.lead && (
                        <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
                          <p className="leading-relaxed text-foreground">
                            {group.lead}
                          </p>
                        </div>
                      )}
                      <ul className="space-y-3">
                        {group.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>
            </FadeIn>
          )}

          {/* 5 — Limits & what would confirm.
              Deliberately the heaviest treatment on the page. */}
          {project.limits && project.limits.length > 0 && (
            <FadeIn>
              <section className="mb-12">
                <div className="rounded-xl border-2 border-amber-500/40 bg-amber-500/5 p-6 md:p-8">
                  <h2 className="flex items-center gap-2.5 text-2xl font-bold text-foreground">
                    <Scale className="h-6 w-6 shrink-0 text-amber-600 dark:text-amber-400" />
                    Limits &amp; what would confirm
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.limitsIntro ??
                      "What the available evidence did not establish, and what it would take to settle each open question."}
                  </p>

                  <ul className="mt-6 space-y-5">
                    {project.limits.map((limit, i) => (
                      <li
                        key={i}
                        className="border-l-2 border-amber-500/40 pl-4"
                      >
                        <p className="leading-relaxed text-foreground">
                          {limit.claim}
                        </p>
                        {limit.wouldConfirm && (
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            <strong className="font-semibold text-amber-700 dark:text-amber-400">
                              Would confirm:
                            </strong>{" "}
                            {limit.wouldConfirm}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </FadeIn>
          )}

          {/* 6 — Takeaway */}
          {project.takeaway && (
            <FadeIn>
              <Section title="Takeaway" icon={Lightbulb}>
                <p className="text-lg leading-relaxed text-foreground/90">
                  {project.takeaway}
                </p>
              </Section>
            </FadeIn>
          )}

          {/* Tools & techniques */}
          {project.tech.length > 0 && (
            <FadeIn>
              <Section title="Tools & techniques">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="default">
                      {t}
                    </Badge>
                  ))}
                </div>
              </Section>
            </FadeIn>
          )}

          {/* Reference */}
          {project.reference && (
            <FadeIn>
              <Section title="Reference" icon={BookMarked}>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.reference}
                </p>
              </Section>
            </FadeIn>
          )}

          {project.links && project.links.length > 0 && (
            <FadeIn>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/30 transition-all duration-200 hover:shadow-lg hover:shadow-accent/40 hover:brightness-110 active:scale-[0.98]"
                  >
                    {link.label}
                    <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Academic publication constraint. Rendered for every academic
              entry so the boundary is stated on the page itself, not just
              assumed by the reader. */}
          {project.tags.includes("Academic") && (
            <FadeIn>
              <div className="mt-14 border-t border-border pt-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  This page describes my own methodology, reasoning, and
                  analysis. Course materials — assignment prompts, instructor-
                  supplied evidence, lab handouts, and graded reports — are not
                  reproduced here, and case-scenario names, hostnames,
                  usernames, and device identifiers have been removed.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </article>
    </>
  );
}

function Section({
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
        {Icon && <Icon className="h-6 w-6 shrink-0 text-accent" />}
        {title}
      </h2>
      {children}
    </section>
  );
}
