import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Andrew Vu — software and security engineer open to opportunities.",
};

export default function ContactPage() {
  return <ContactContent />;
}
