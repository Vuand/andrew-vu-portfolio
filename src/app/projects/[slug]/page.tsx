import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS, getProjectBySlug, isSecurityCaseStudy } from "@/data/projects";
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

  return {
    title: `${project.title} — Case Study`,
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
