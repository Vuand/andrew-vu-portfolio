import { ImageResponse } from "next/og";

/**
 * Social card, generated at build time.
 *
 * Replaces a reference to /images/og-image.png that had never existed — every
 * share of this site was rendering a broken image. Generated rather than
 * checked in so it cannot drift out of sync with the site's positioning the
 * way a static PNG saying "Full-Stack Engineer" did.
 */
export const alt = "Andrew Vu — Software & Security Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
            andrewvu.tech
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 82,
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
              fontSize: 46,
              color: "#3b82f6",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Software &amp; Security Engineer
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
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#9ca3af",
              lineHeight: 1.4,
            }}
          >
            Digital forensics · Secure systems design · Full-stack development
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 12,
              fontSize: 26,
              color: "#6b7280",
            }}
          >
            Oregon State University, 2026
          </div>
        </div>
      </div>
    ),
    size
  );
}
