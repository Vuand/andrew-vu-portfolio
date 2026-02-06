"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { PROJECTS, ALL_TAGS, type ProjectTag } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion-wrapper";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<ProjectTag | "All">("All");

  const filtered =
    activeTag === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="// projects"
          title="What I've Built"
          description="End-to-end systems — designed, built, shipped, and maintained."
        />

        {/* Filter chips */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveTag("All")}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer",
              activeTag === "All"
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer",
                activeTag === tag
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <Stagger className="grid gap-6 md:grid-cols-2" key={activeTag}>
          {filtered.map((project) => (
            <StaggerItem key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="block h-full"
              >
                <Card className="flex h-full flex-col">
                  {/* Thumbnail placeholder */}
                  <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-muted/50">
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
                    <h2 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.tagline}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.period}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-accent">
                      Read case study
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
