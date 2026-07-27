/**
 * Content for /security.
 *
 * The tooling groups and their contents mirror the cybersecurity résumé
 * exactly, so a recruiter cross-referencing the page against the PDF sees the
 * same claims in the same shape. If the résumé changes, change this too.
 */

export const SECURITY_POSITIONING = {
  headline: "Digital Forensics & Incident Response · Security Analyst",
  /**
   * Rendered as plain dated text, never as an earned-credential badge.
   * Security+ is scheduled, not held.
   */
  certification: "CompTIA Security+ — scheduled August 2026",
} as const;

export interface ToolingGroup {
  name: string;
  items: string[];
}

export const SECURITY_TOOLING: ToolingGroup[] = [
  {
    name: "Forensics & Incident Response",
    items: [
      "Autopsy",
      "FTK Imager",
      "Registry Explorer",
      "ShellBags Explorer",
      "HxD",
      "Windows Event Viewer",
      "E01 evidence images",
      "Registry hive analysis (SYSTEM, SOFTWARE, SAM, NTUSER.DAT, UsrClass.dat)",
      "USBSTOR & MountedDevices",
      "ShellBags",
      "MRU keys",
      "Event log analysis",
      "File carving & signature analysis",
      "Timeline reconstruction",
      "Malware detection triage",
      "Anti-forensics detection",
      "Chain of custody",
      "Expert witness reporting",
    ],
  },
  {
    name: "Detection, Windows & Active Directory",
    items: [
      "Wazuh (SIEM)",
      "Sysmon",
      "Autoruns",
      "Process Explorer",
      "Process Monitor",
      "Windows Advanced Audit Policy",
      "PowerShell script-block logging",
      "Active Directory Domain Services",
      "Group Policy",
      "NTLM & Kerberos",
      "SMB signing",
      "RDP / Network Level Authentication",
    ],
  },
  {
    name: "Linux, Network & Cloud",
    items: [
      "Linux hardening",
      "OpenSSH / sshd_config",
      "vsftpd",
      "Wireshark",
      "Packet analysis",
      "TCP/IP",
      "DNS",
      "AWS IAM",
      "Google Cloud IAM",
      "Service accounts",
      "Least-privilege role design",
      "RBAC",
      "VMware vSphere",
      "Docker",
      "CI/CD",
    ],
  },
  {
    name: "Governance & Frameworks",
    items: [
      "NIST Cybersecurity Framework",
      "CIS Controls",
      "COBIT",
      "ISO 27001",
      "DISA STIGs",
      "Risk assessment",
      "Vulnerability assessment",
      "Security policy development",
    ],
  },
  {
    name: "Development & ML",
    items: [
      "Python",
      "Java",
      "JavaScript/TypeScript",
      "C/C++",
      "SQL",
      "Bash",
      "PyTorch",
      "Convolutional neural networks",
      "React Native",
      "Next.js",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
    ],
  },
];

export interface SecurityCourse {
  code: string;
  name: string;
}

export const SECURITY_COURSEWORK: SecurityCourse[] = [
  { code: "CS 473", name: "Digital Forensics" },
  {
    code: "CS 373",
    name: "Defense Against the Dark Arts: Enterprise Defense",
  },
  { code: "ECE 478", name: "Network Security" },
  { code: "CS 427", name: "Cryptography" },
  { code: "CS 370", name: "Introduction to Security" },
  { code: "BIS 482", name: "Information Security Governance" },
  { code: "", name: "Cloud Application Development" },
];

export interface AdditionalWork {
  title: string;
  context: string;
  detail: string;
  /** Cross-link rather than duplicating an existing case study. */
  href?: string;
  hrefLabel?: string;
}

export const ADDITIONAL_SECURITY_WORK: AdditionalWork[] = [
  {
    title: "Security governance framework comparison",
    context: "BIS 482 Information Security Governance · Team assignment",
    detail:
      "Compared CIS Controls, the NIST Cybersecurity Framework, and COBIT for a small healthcare clinic risk assessment, evaluating control specificity, implementation burden, governance scope, and top-down versus bottom-up adoption; recommended CIS Controls as the practical entry point for an organization without a mature risk program. Also designed an enterprise security staffing model spanning CISO, security manager, architect, analyst, incident responder, IAM specialist, GRC analyst, and security engineer roles.",
  },
  {
    title: "Google Cloud IAM for a deployed application",
    context: "Cloud Application Development",
    detail:
      "Configured GCP IAM for a deployed application: dedicated service accounts per component with least-privilege roles scoped to required resources rather than broad predefined roles, eliminating shared high-privilege credentials between services.",
  },
  {
    title: "AWS IAM access-control model",
    context: "StrokeVision · Production iOS application",
    detail:
      "Implemented the access-control model for a production iOS application: scoped S3 bucket policies and IAM roles per service, isolated each user's uploaded video under least-privilege access, and kept long-lived credentials out of the mobile client.",
    href: "/projects/stroke-vision",
    hrefLabel: "StrokeVision case study",
  },
];

/**
 * External verification (TryHackMe, Hack The Box, etc.).
 *
 * TODO(andrew): you do not have a profile to link yet. When you do, set
 * `url` and `label` here and the section renders itself — nothing else to
 * change. Leave `url` empty and the section stays hidden rather than
 * advertising an empty promise.
 */
export const EXTERNAL_VERIFICATION: {
  enabled: boolean;
  platform: string;
  label: string;
  url: string;
} = {
  enabled: false,
  platform: "TryHackMe",
  label: "",
  url: "",
};
