import type { Metadata } from "next";
import { ResumeContent } from "./resume-content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Andrew Vu — Full-Stack Engineer resume. CS + Cybersecurity at Oregon State University.",
};

export default function ResumePage() {
  return <ResumeContent />;
}
