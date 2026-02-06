"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { FadeIn } from "@/components/ui/motion-wrapper";

export function CTASection() {
  return (
    <section className="py-20 md:py-28" aria-label="Contact call to action">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center md:p-16">
            {/* Background gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5" />

            <div className="relative">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Let&apos;s build something together.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground md:text-lg">
                Looking for a full-stack engineer who cares about security and
                reliability? I&apos;d like to hear about what you&apos;re
                building.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button variant="accent" size="lg">
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="flex gap-3">
                  <a
                    href={SITE_CONFIG.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                  <a
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="icon">
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
