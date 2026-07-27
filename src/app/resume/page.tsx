import type { Metadata } from "next";
import { ResumeContent } from "./resume-content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Andrew Vu — software and security engineer. Separate software engineering and cybersecurity resumes. CS + Cybersecurity Certificate, Oregon State University.",
};

export default function ResumePage() {
  return <ResumeContent />;
}
