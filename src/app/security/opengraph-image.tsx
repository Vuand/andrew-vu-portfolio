import { ImageResponse } from "next/og";
import { SECURITY_POSITIONING } from "@/data/security";

/**
 * Share card for /security.
 *
 * This route exists because a per-route `openGraph` block replaces the parent's
 * entirely — including its image — so /security was sharing with no image at
 * all. A segment-local image file also lets the card say what this page is
 * about rather than reusing the generic site card.
 */
export const alt = "Andrew Vu — Digital Forensics & Incident Response";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function SecurityOpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#3b82f6",
              letterSpacing: "0.04em",
            }}
          >
            andrewvu.tech/security
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 78,
              fontWeight: 700,
              color: "#ededed",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Andrew Vu
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 40,
              color: "#3b82f6",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            {SECURITY_POSITIONING.headline}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 120,
              height: 4,
              background: "#3b82f6",
              marginBottom: 28,
            }}
          />
          <div style={{ display: "flex", fontSize: 28, color: "#9ca3af" }}>
            Forensic examination · Vulnerability assessment · RF device
            authentication
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 12,
              fontSize: 25,
              color: "#6b7280",
            }}
          >
            Each write-up states what the evidence did not establish
          </div>
        </div>
      </div>
    ),
    size
  );
}
