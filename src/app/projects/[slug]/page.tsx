import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  PROJECTS,
  getProjectBySlug,
  getContentTypeLabel,
  isSecurityCaseStudy,
} from "@/data/projects";
import { ProjectCaseStudy } from "./project-case-study";
import { SecurityCaseStudy } from "./security-case-study";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  // "Case Study" for software work, "Forensic Examination" / "Security
  // Assessment" for casework — the tab title should not misdescribe the page.
  // Suppressed where the title already carries the noun, so titles do not
  // read "Forensic Examination — Forensic Examination".
  const label = getContentTypeLabel(project);
  const labelNoun = label.split(" ").pop()!.toLowerCase();
  const title = project.title.toLowerCase().includes(labelNoun)
    ? project.title
    : `${project.title} — ${label}`;

  return {
    title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Andrew Vu`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Security casework answers a different question than software work, so it
  // gets a different template on the same route.
  if (isSecurityCaseStudy(project)) {
    return <SecurityCaseStudy project={project} />;
  }

  return <ProjectCaseStudy project={project} />;
}
