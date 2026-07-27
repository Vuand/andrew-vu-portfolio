import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock, Shield, Globe, Activity } from "lucide-react";
import { PROJECTS, getContentTypeLabel } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion-wrapper";
import { getTagVariant } from "@/lib/tag-variants";
import { ProjectCardVisual } from "@/components/projects/project-card-visual";

// Explicit slugs rather than PROJECTS.slice(0, 3): the slice silently
// depended on the software entries staying first in the array, which stopped
// being obvious once security casework was appended.
//
// The forensic examination is here because the home page previously showed
// only software while its own meta description promised digital forensics —
// a security recruiter arriving from the resume had to reach /security before
// seeing any security work at all. It sits last so the software ordering is
// unchanged for anyone reading left to right.
const FEATURED_SLUGS = [
  "stroke-vision",
  "sponsorhub",
  "home-assistant-ai",
  "insider-threat-forensic-examination",
];
const featured = FEATURED_SLUGS.map((slug) =>
  PROJECTS.find((p) => p.slug === slug)
).filter((p): p is (typeof PROJECTS)[number] => Boolean(p));

const proofTiles = [
  {
    icon: Activity,
    title: "Record · Analyze · Coach",
    detail: "Players film a forehand on their phone, the app studies their form from feet to fingertips, and tells them what to fix this session",
    project: "StrokeVision",
  },
  {
    icon: Lock,
    title: "Verification-Only Payouts",
    detail: "Append-only ledger + HMAC-signed attribution ensure no unverified dollar moves",
    project: "SponsorHub",
  },
  {
    icon: Shield,
    title: "Secure LLM Execution",
    detail: "Allow-listed services + entity validation prevent unauthorized smart-home control",
    project: "Home Assistant AI",
  },
  {
    icon: Globe,
    title: "Zero-Downtime Migration",
    detail: "DNS/domain/email continuity planned and executed with no service interruption",
    project: "GUMC",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-14 md:py-20 bg-muted/30" aria-label="Featured projects">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Projects"
          title="Selected Work"
          description="Systems I designed and shipped, and systems I examined."
        />

        {/* Proof tiles */}
        <Stagger className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofTiles.map((tile) => (
            <StaggerItem key={tile.title}>
              <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/30 h-full">
                <tile.icon className="mb-3 h-5 w-5 text-accent" />
                <h3 className="text-base font-semibold text-foreground">
                  {tile.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {tile.detail}
                </p>
                <span className="mt-2 inline-block font-mono text-xs text-accent">
                  {tile.project}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Project cards */}
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="block h-full"
              >
                <Card className="flex h-full flex-col justify-between">
                  <div className="relative mb-4 h-40 overflow-hidden rounded-lg bg-muted/50">
                    {project.cardVisual ? (
                      <ProjectCardVisual
                        visual={project.cardVisual}
                        label={`${project.title} — diagram`}
                      />
                    ) : project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className={
                          project.imageFit === "contain"
                            ? "object-contain p-5"
                            : "object-cover object-top"
                        }
                      />
                    ) : (
                      <span className="flex h-full items-center justify-center font-mono text-xs text-muted-foreground">
                        {project.confidential ? (
                          <span className="flex items-center gap-1.5">
                            <Lock className="h-3.5 w-3.5" /> confidential
                          </span>
                        ) : (
                          "[screenshot]"
                        )}
                      </span>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant={getTagVariant(tag)}>
                          {tag}
                        </Badge>
                      ))}
                      {project.confidential && (
                        <Badge variant="warning">Confidential</Badge>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">
                      {project.title}
                    </h3>
                    {project.context && (
                      <p className="mt-1.5 font-mono text-xs leading-snug text-muted-foreground">
                        {project.context}
                      </p>
                    )}
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                    Read {getContentTypeLabel(project).toLowerCase()}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className={buttonVariants({ variant: "secondary" })}
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
