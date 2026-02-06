import type { Metadata } from "next";
import { SecurityContent } from "./security-content";

export const metadata: Metadata = {
  title: "Security & Reliability",
  description:
    "Security patterns, threat models, and reliability engineering — backed by shipped projects and coursework.",
};

export default function SecurityPage() {
  return <SecurityContent />;
}
