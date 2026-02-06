"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/ui/glitch-text";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-grid"
      aria-label="Introduction"
    >
      {/* Gradient background orb */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-32">
        {/* Two-column layout: text left, photo right */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
          {/* Text column */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-6 inline-block rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-muted-foreground">
                Bachelors of Science in Computer Science + Cybersecurity Certificate @ Oregon State &middot; 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl"
            >
              Full-stack software engineer.
              <br />
              <GlitchText
                text="Security-first mindset."
                className="font-bold font-sans gradient-text"
                delay={800}
                speed={35}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
            >
              I build reliable software from frontend to infrastructure &mdash;
              with security designed in, not bolted on. From validated LLM
              pipelines to fraud-resistant payment systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start"
            >
              <Button variant="primary" size="lg" onClick={scrollToProjects}>
                View Projects
                <ArrowDown className="h-4 w-4" />
              </Button>
              <a href="/documents/andrew-vu-resume.pdf" download>
                <Button variant="secondary" size="lg">
                  <Download className="h-4 w-4" />
                  Resume PDF
                </Button>
              </a>
              <div className="flex gap-2">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 blur-sm" />
              <Image
                src="/HeadShot.jpg"
                alt="Andrew Vu"
                width={340}
                height={420}
                className="relative rounded-2xl border-2 border-border object-cover shadow-2xl"
                style={{ width: 340, height: 420 }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
