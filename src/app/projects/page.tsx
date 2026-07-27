import type { Metadata } from "next";
import { ProjectsContent } from "./projects-content";

// The index is interactive (tag filtering), so the UI lives in a client
// component and the route stays a server component. Previously the route
// itself was "use client", which makes `export const metadata` impossible —
// /projects was shipping the home page's title and description.
export const metadata: Metadata = {
  title: "Projects & Casework",
  description:
    "Software projects and security casework by Andrew Vu: an AI coaching iOS app, creator-payment infrastructure, a Windows forensic examination, and a vulnerability assessment.",
  openGraph: {
    title: "Projects & Casework — Andrew Vu",
    description:
      "Software projects and security casework: forensic examination, vulnerability assessment, RF device authentication, and production systems.",
    // Declaring `openGraph` on a route replaces the parent's entirely, image
    // included. This route has no segment-local opengraph-image, so it points
    // back at the site card explicitly rather than shipping no image.
    images: ["/opengraph-image"],
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
