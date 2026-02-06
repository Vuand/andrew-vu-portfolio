"use client";

import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion-wrapper";

const featured = PROJECTS.slice(0, 3);

export function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28" aria-label="Featured projects">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="// featured work"
          title="Selected Projects"
          description="Deep dives into systems I've designed, built, and shipped."
        />

        <Stagger className="grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <Card className="flex h-full flex-col justify-between">
                  {/* Header area — placeholder for screenshot */}
                  <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-muted/50">
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.confidential ? (
                        <span className="flex items-center gap-1.5">
                          <Lock className="h-3.5 w-3.5" /> confidential
                        </span>
                      ) : (
                        "[screenshot placeholder]"
                      )}
                    </span>
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
