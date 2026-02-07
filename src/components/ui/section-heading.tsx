"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-8",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="mb-2 inline-block font-mono text-base text-accent">
          {label}
        </span>
      )}
      <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
