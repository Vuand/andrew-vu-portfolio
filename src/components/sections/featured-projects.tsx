"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock, Shield, Cpu, Globe } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion-wrapper";

const featured = PROJECTS.slice(0, 3);

const proofTiles = [
  {
    icon: Shield,
    title: "Secure LLM Execution",
    detail: "Allow-listed services + entity validation prevent unauthorized smart-home control",
    project: "Home Assistant AI",
  },
  {
    icon: Lock,
    title: "Verification-Only Payouts",
    detail: "Append-only ledger + HMAC-signed attribution ensure no unverified dollar moves",
    project: "SponsorHub",
  },
  {
    icon: Globe,
    title: "Zero-Downtime Migration",
    detail: "DNS/domain/email continuity planned and executed with no service interruption",
    project: "GUMC",
  },
  {
    icon: Cpu,
    title: "API-Driven Digital Library",
    detail: "Google Books API checkout system with PayPal/Stripe payment integration",
    project: "WPI",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-14 md:py-20 bg-muted/30" aria-label="Featured projects">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Projects"
          title="Selected Projects"
          description="End-to-end systems — designed, built, shipped."
        />

        {/* Proof tiles */}
        <Stagger className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofTiles.map((tile) => (
            <StaggerItem key={tile.title}>
              <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/30 h-full">
                <tile.icon className="mb-3 h-5 w-5 text-accent" />
                <h3 className="text-sm font-semibold text-foreground">
                  {tile.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {tile.detail}
                </p>
                <span className="mt-2 inline-block font-mono text-[10px] text-accent">
                  {tile.project}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Project cards */}
        <Stagger className="grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="block h-full"
              >
                <Card className="flex h-full flex-col justify-between">
                  <div className="relative mb-4 h-40 overflow-hidden rounded-lg bg-muted/50">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover object-top"
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
                        <Badge key={tag} variant="accent">
                          {tag}
                        </Badge>
                      ))}
                      {project.confidential && (
                        <Badge variant="warning">Confidential</Badge>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                    Read case study <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <Link href="/projects">
            <Button variant="secondary">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
