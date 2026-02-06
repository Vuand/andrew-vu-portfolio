import { Hero } from "@/components/sections/hero";
import { RecruiterTLDR } from "@/components/sections/recruiter-tldr";

import { FeaturedProjects } from "@/components/sections/featured-projects";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecruiterTLDR />

      <FeaturedProjects />
      <SkillsGrid />
      <CTASection />
    </>
  );
}
