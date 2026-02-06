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
  { href: "/security", label: "Security" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export const SKILL_CATEGORIES = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript/TypeScript", "C/C++", "SQL"],
  },
  {
    name: "Web",
    skills: ["Next.js", "React", "Node.js", "Angular", "HTML/CSS"],
  },
  {
    name: "APIs & Data",
    skills: ["REST", "JSON Schema", "Swagger", "Postman", "GraphQL"],
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
    name: "Security",
    skills: [
      "Secure API design",
      "Input validation",
      "IAM",
      "Wireshark",
      "HMAC/signing",
      "Threat modeling",
    ],
  },
  {
    name: "Systems & Process",
    skills: ["Linux", "Agile/Scrum", "SDLC", "QA testing", "Git"],
  },
  {
    name: "AI/ML",
    skills: ["NLP", "LLM integration", "Prompt engineering", "ML fundamentals"],
  },
] as const;
