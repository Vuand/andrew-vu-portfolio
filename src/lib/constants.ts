export const SITE_CONFIG = {
  name: "Andrew Vu",
  title: "Andrew Vu — Full-Stack Engineer",
  description:
    "Full-stack engineer with a security-first mindset. Building reliable, secure systems from Oregon State University to production.",
  url: "https://andrewvu.dev",
  email: "Andrewv11789@gmail.com",
  phone: "503-954-7316",
  github: "https://github.com/Vuand",
  linkedin: "https://www.linkedin.com/in/andrewvu189/",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export const HOME_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const SOFTWARE_SKILLS = [
  {
    name: "Languages",
    skills: ["Python", "Java", "JavaScript/TypeScript", "C/C++", "SQL"],
  },
  {
    name: "Web & Frameworks",
    skills: ["Next.js", "React", "Node.js", "Angular", "HTML/CSS", "WordPress"],
  },
  {
    name: "APIs & Data",
    skills: ["REST", "JSON Schema", "Swagger/OpenAPI", "Postman"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "GCP", "AWS", "CI/CD"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    name: "AI/ML",
    skills: ["LLM integration", "Prompt engineering", "NLP", "ML fundamentals"],
  },
] as const;

export const SECURITY_SKILLS = [
  {
    name: "Secure Development",
    skills: [
      "Secure API design",
      "Input validation & sanitization",
      "HMAC signing & verification",
      "Secrets management",
    ],
  },
  {
    name: "Access Control",
    skills: ["RBAC (Clerk, custom)", "IAM concepts", "Least privilege", "Role gating"],
  },
  {
    name: "Data Integrity",
    skills: [
      "Append-only ledgers",
      "Idempotency keys",
      "Replay protection",
      "PII hashing",
    ],
  },
  {
    name: "Analysis & Tooling",
    skills: ["Threat modeling", "Wireshark", "Network analysis", "Digital forensics"],
  },
  {
    name: "Infrastructure",
    skills: ["Server hardening", "DNS security", "PCI-compliant payments", "ADA compliance"],
  },
  {
    name: "Process & Governance",
    skills: ["Security governance", "SDLC integration", "Agile/Scrum", "QA testing"],
  },
] as const;
