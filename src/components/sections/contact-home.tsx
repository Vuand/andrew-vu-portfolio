"use client";

import Image from "next/image";
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
          <div className="relative rounded-2xl border border-border bg-card">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5" />

            {/* Desktop: 3-column grid  |  Mobile: centered stack */}
            <div className="relative flex flex-col items-center gap-6 px-8 py-8 text-center md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:px-10 md:py-8 md:text-left">
              {/* Avatar */}
              <Image
                src="/HeadShot3.jpg"
                alt="Andrew Vu — Full-Stack Software Engineer"
                width={112}
                height={112}
                className="h-[72px] w-[72px] rounded-xl object-cover object-center shadow-md shadow-accent/10 ring-2 ring-border md:h-[104px] md:w-[104px]"
              />

              {/* Identity */}
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-foreground md:text-xl">
                  Andrew Vu
                </h3>
                <p className="mt-0.5 whitespace-nowrap text-sm text-muted-foreground">
                  Full-Stack Software Engineer &middot; Security-first mindset
                </p>
                <p className="mt-1 flex items-center justify-center gap-1 text-xs text-muted-foreground md:justify-start">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                  Oregon, USA
                </p>
              </div>

              {/* Actions */}
              <div className="flex w-full flex-col items-center gap-3 md:w-auto md:items-end">
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <a href={`mailto:${SITE_CONFIG.email}`}>
                    <Button variant="accent" size="lg" className="w-full sm:w-auto">
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
                <div className="flex items-center gap-2">
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
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
