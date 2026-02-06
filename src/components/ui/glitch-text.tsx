"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>/\\|{}[]~^";

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  as?: "span" | "div" | "h1" | "h2" | "p";
}

export function GlitchText({
  text,
  className,
  delay = 0,
  speed = 30,
  as: Tag = "span",
}: GlitchTextProps) {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);
  const revealed = useRef(0);
  const frameRef = useRef<number | null>(null);

  const animate = useCallback(() => {
    if (revealed.current >= text.length) {
      setDisplay(text);
      return;
    }

    const locked = text.slice(0, revealed.current);
    const remaining = text.length - revealed.current;
    const scrambled = Array.from({ length: Math.min(remaining, 8) }, () =>
      CHARS[Math.floor(Math.random() * CHARS.length)]
    ).join("");

    setDisplay(locked + scrambled);

    revealed.current += 1;
    frameRef.current = window.setTimeout(animate, speed);
  }, [text, speed]);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    revealed.current = 0;
    animate();
    return () => {
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [started, animate]);

  return (
    <Tag className={cn("font-mono", className)} aria-label={text}>
      {started ? display || "\u00A0" : "\u00A0"}
    </Tag>
  );
}
