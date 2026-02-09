"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  cursor?: boolean;
}

export function TypewriterText({
  text,
  className,
  speed = 18,
  startDelay = 200,
  cursor = true,
}: TypewriterTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const charIndex = useRef(0);
  const rafRef = useRef(0);
  const lastTime = useRef(0);

  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  // Respect prefers-reduced-motion
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    setPrefersReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  // Start after delay once in view
  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      setDisplayed(text);
      setDone(true);
      setStarted(true);
      return;
    }
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [isInView, startDelay, prefersReduced, text]);

  const animate = useCallback(
    (timestamp: number) => {
      if (charIndex.current >= text.length) {
        setDisplayed(text);
        setDone(true);
        return;
      }

      if (timestamp - lastTime.current < speed) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime.current = timestamp;

      charIndex.current += 1;
      setDisplayed(text.slice(0, charIndex.current));
      rafRef.current = requestAnimationFrame(animate);
    },
    [text, speed]
  );

  useEffect(() => {
    if (!started || prefersReduced) return;
    charIndex.current = 0;
    lastTime.current = 0;
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, animate, prefersReduced]);

  return (
    <p ref={containerRef} className={cn(className)} aria-label={text}>
      {started ? displayed : "\u00A0"}
      {cursor && started && !done && (
        <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.15em] animate-pulse bg-accent" />
      )}
    </p>
  );
}
