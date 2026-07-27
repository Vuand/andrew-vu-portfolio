import type { Metadata } from "next";
import { SecurityContent } from "./security-content";

export const metadata: Metadata = {
  title: "Security — Digital Forensics & Incident Response",
  description:
    "Andrew Vu — digital forensics and incident response, security analysis. Windows forensic examination, enterprise vulnerability assessment, and RF device authentication. Oregon State University, Cybersecurity Certificate, 2026.",
  openGraph: {
    title: "Andrew Vu — Digital Forensics & Incident Response",
    description:
      "Forensic examination, vulnerability assessment, and detection engineering casework — each write-up stating what the evidence established and what it did not.",
  },
};

export default function SecurityPage() {
  return <SecurityContent />;
}
