import type { Metadata } from "next";
import { SecurityContent } from "./security-content";
import { SITE_CONFIG } from "@/lib/constants";
import { SECURITY_POSITIONING } from "@/data/security";

export const metadata: Metadata = {
  title: "Security — Digital Forensics & Incident Response",
  // Kept under ~160 characters so the credential clause is not truncated in
  // search results.
  description:
    "Digital forensics and incident response casework by Andrew Vu: a Windows forensic examination, an enterprise vulnerability assessment, and RF device authentication.",
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
            // No `url` here: this node shares an @id with the site-wide Person
            // in the root layout, and two different `url` values on one @id is
            // a conflict rather than a specialisation.
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
