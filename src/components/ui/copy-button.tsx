"use client";

import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";
import { Button, type ButtonProps } from "./button";
import { Toast } from "./toast";

interface CopyButtonProps extends Omit<ButtonProps, "onClick"> {
  text: string;
  label?: string;
  toastMessage?: string;
}

export function CopyButton({
  text,
  label = "Copy",
  toastMessage = "Copied to clipboard",
  children,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <>
      <Button
        onClick={handleCopy}
        aria-label={copied ? "Copied" : label}
        {...props}
      >
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        {children}
      </Button>
      <Toast message={toastMessage} visible={copied} />
    </>
  );
}
