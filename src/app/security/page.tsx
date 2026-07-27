import type { Metadata } from "next";
import { SecurityContent } from "./security-content";
import { SITE_CONFIG } from "@/lib/constants";
import { SECURITY_POSITIONING } from "@/data/security";

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
  return (
    <>
      {/* Shares the @id of the site-wide Person in the root layout, so this
          specialises that node rather than declaring a second person. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${SITE_CONFIG.url}#person`,
            name: "Andrew Vu",
            url: `${SITE_CONFIG.url}/security`,
            jobTitle: SECURITY_POSITIONING.headline,
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Oregon State University",
            },
            sameAs: [SITE_CONFIG.linkedin],
            knowsAbout: [
              "Digital Forensics",
              "Incident Response",
              "Security Analysis",
              "Vulnerability Assessment",
              "Windows Registry Forensics",
              "Timeline Reconstruction",
              "Active Directory Security",
              "Linux Hardening",
              "NIST Cybersecurity Framework",
              "CIS Controls",
            ],
          }),
        }}
      />
      <SecurityContent />
    </>
  );
}
