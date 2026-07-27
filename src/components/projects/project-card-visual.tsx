"use client";

/**
 * Card artwork for security casework.
 *
 * Deliberately not stock security imagery — no padlocks, no hooded figures,
 * no matrix rain. That genre reads as marketing to anyone who actually works
 * in security. These are typographic and diagrammatic marks drawn from the
 * work itself, in the site's own tokens, so they render correctly in both
 * themes and cost no image bytes.
 */
export type CardVisual =
  | "incident-timeline"
  | "rf-fingerprint"
  | "config-audit";

const VIEWBOX = "0 0 400 200";

export function ProjectCardVisual({
  visual,
  label,
}: {
  visual: CardVisual;
  label: string;
}) {
  return (
    <svg
      viewBox={VIEWBOX}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={label}
      className="h-full w-full"
    >
      <rect width="400" height="200" fill="var(--muted)" />
      {visual === "incident-timeline" && <IncidentTimelineMark />}
      {visual === "rf-fingerprint" && <RfFingerprintMark />}
      {visual === "config-audit" && <ConfigAuditMark />}
    </svg>
  );
}

/** Three nodes on a rail: device connected, +26s execution, suspended. */
function IncidentTimelineMark() {
  const nodes = [
    { x: 66, marker: "T+0", label: "device" },
    { x: 200, marker: "T+26s", label: "execution" },
    { x: 334, marker: "—", label: "suspended" },
  ];
  return (
    <g>
      <line
        x1="66"
        y1="100"
        x2="334"
        y2="100"
        stroke="var(--border)"
        strokeWidth="2"
      />
      {nodes.map((n, i) => (
        <g key={n.label}>
          <circle
            cx={n.x}
            cy="100"
            r="8"
            fill="var(--background)"
            stroke="var(--accent)"
            strokeWidth="2.5"
          />
          <text
            x={n.x}
            y="76"
            textAnchor="middle"
            fill="var(--accent)"
            fontFamily="var(--font-geist-mono), ui-monospace, monospace"
            fontSize="15"
            fontWeight="600"
          >
            {n.marker}
          </text>
          <text
            x={n.x}
            y="130"
            textAnchor="middle"
            fill="var(--muted-foreground)"
            fontFamily="var(--font-geist-sans), system-ui, sans-serif"
            fontSize="14"
          >
            {n.label}
          </text>
          {i === 2 && (
            <circle
              cx={n.x}
              cy="100"
              r="3"
              fill="var(--accent)"
            />
          )}
        </g>
      ))}
      <text
        x="200"
        y="172"
        textAnchor="middle"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-geist-mono), ui-monospace, monospace"
        fontSize="13"
      >
        insider-threat examination
      </text>
    </g>
  );
}

/**
 * Two waveforms of identical shape but different phase — the premise of RF
 * fingerprinting, where the same protocol from two radios differs by
 * manufacturing imperfection rather than by content.
 */
function RfFingerprintMark() {
  const wave = (phase: number, amp: number) => {
    const pts: string[] = [];
    for (let x = 0; x <= 300; x += 4) {
      const t = x / 300;
      const y =
        100 +
        Math.sin(t * Math.PI * 6 + phase) *
          amp *
          Math.exp(-Math.pow(t - 0.5, 2) * 3);
      pts.push(`${(50 + x).toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(" ");
  };

  return (
    <g>
      <polyline
        points={wave(0, 34)}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <polyline
        points={wave(0.9, 26)}
        fill="none"
        stroke="var(--muted-foreground)"
        strokeWidth="2"
        strokeDasharray="5 5"
        strokeLinecap="round"
      />
      <text
        x="200"
        y="176"
        textAnchor="middle"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-geist-mono), ui-monospace, monospace"
        fontSize="13"
      >
        31 BLE devices · IQ fingerprinting
      </text>
      <text
        x="200"
        y="34"
        textAnchor="middle"
        fill="var(--accent)"
        fontFamily="var(--font-geist-mono), ui-monospace, monospace"
        fontSize="15"
        fontWeight="600"
      >
        same signal, different radio
      </text>
    </g>
  );
}

/** A config file with one line flagged — the shape of the leading finding. */
function ConfigAuditMark() {
  const lines = [
    { w: 150, flag: false },
    { w: 196, flag: false },
    { w: 224, flag: true },
    { w: 168, flag: false },
    { w: 138, flag: false },
  ];
  return (
    <g>
      {lines.map((line, i) => {
        const y = 52 + i * 24;
        return (
          <g key={i}>
            <text
              x="52"
              y={y + 5}
              fill="var(--muted-foreground)"
              fontFamily="var(--font-geist-mono), ui-monospace, monospace"
              fontSize="13"
              opacity="0.7"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
            <rect
              x="80"
              y={y - 6}
              width={line.w}
              height="11"
              rx="2.5"
              fill={line.flag ? "var(--accent)" : "var(--border)"}
            />
            {line.flag && (
              <rect
                x="72"
                y={y - 11}
                width={line.w + 16}
                height="21"
                rx="4"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
                opacity="0.55"
              />
            )}
          </g>
        );
      })}
      <text
        x="200"
        y="176"
        textAnchor="middle"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-geist-mono), ui-monospace, monospace"
        fontSize="13"
      >
        17 findings · one line, worst of them
      </text>
    </g>
  );
}
