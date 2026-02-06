"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactHome() {
  return (
    <section id="contact" className="py-20 md:py-28" aria-label="Contact">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="// contact"
          title="Let's Build Something Together"
          description="Looking for a full-stack engineer who cares about security and reliability?"
        />

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center md:p-14">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5" />

            <div className="relative">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a href={`mailto:${SITE_CONFIG.email}`}>
                  <Button variant="accent" size="lg">
                    <Mail className="h-4 w-4" />
                    {SITE_CONFIG.email}
                  </Button>
                </a>
                <CopyButton
                  text={SITE_CONFIG.email}
                  variant="secondary"
                  size="lg"
                  toastMessage="Email copied to clipboard"
                >
                  Copy Email
                </CopyButton>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
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

              <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Oregon, USA
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
