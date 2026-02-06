"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion-wrapper";

const tiles = [
  {
    number: "4",
    label: "Production Projects",
    detail:
      "End-to-end systems shipped — from nonprofit websites to creator marketing infrastructure.",
    accent: false,
  },
  {
    number: "8+",
    label: "Security Patterns",
    detail:
      "HMAC signing, append-only ledgers, RBAC, allow-listed execution, replay protection, and more.",
    accent: true,
  },
  {
    number: "9",
    label: "Security Courses",
    detail:
      "Network Security, Digital Forensics, Cryptography, Defense Against the Dark Arts, and more at OSU.",
    accent: false,
  },
];

export function ProofTiles() {
  return (
    <section className="py-20 md:py-28 bg-muted/30" aria-label="Proof of work">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="// proof of work"
          title="Built, Not Claimed"
          description="Numbers backed by shipped code and coursework — not adjectives."
        />

        <Stagger className="grid gap-6 md:grid-cols-3">
          {tiles.map((tile) => (
            <StaggerItem key={tile.label}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`rounded-xl border p-8 text-center transition-colors ${
                  tile.accent
                    ? "border-accent/40 bg-accent/5"
                    : "border-border bg-card"
                }`}
              >
                <div
                  className={`text-5xl font-bold ${
                    tile.accent ? "gradient-text" : "text-foreground"
                  }`}
                >
                  {tile.number}
                </div>
                <div className="mt-2 text-sm font-semibold text-foreground">
                  {tile.label}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {tile.detail}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
