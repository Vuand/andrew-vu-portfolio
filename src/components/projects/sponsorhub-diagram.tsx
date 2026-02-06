"use client";

import { motion } from "framer-motion";

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

export function SponsorHubDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <motion.svg
        viewBox="0 0 900 340"
        className="mx-auto w-full max-w-[900px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        role="img"
        aria-label="SponsorHub architecture diagram showing request flow from attribution redirect through verification, ledger, rollups, and payout"
      >
        <title>SponsorHub Architecture — Request Flow</title>

        {/* Arrows */}
        <motion.path
          d="M 160 80 L 250 80"
          stroke="var(--accent)"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow)"
          variants={lineVariants}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.path
          d="M 390 80 L 480 80"
          stroke="var(--accent)"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow)"
          variants={lineVariants}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.path
          d="M 620 80 L 710 80"
          stroke="var(--accent)"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow)"
          variants={lineVariants}
          transition={{ duration: 0.6, delay: 0.7 }}
        />
        <motion.path
          d="M 810 110 L 810 160"
          stroke="var(--accent)"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow)"
          variants={lineVariants}
          transition={{ duration: 0.6, delay: 0.9 }}
        />
        <motion.path
          d="M 750 200 L 560 200"
          stroke="var(--accent)"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow)"
          variants={lineVariants}
          transition={{ duration: 0.6, delay: 1.1 }}
        />
        <motion.path
          d="M 430 200 L 250 200"
          stroke="var(--accent)"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow)"
          variants={lineVariants}
          transition={{ duration: 0.6, delay: 1.3 }}
        />

        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* Row 1: Main flow */}
        {/* /r Redirect */}
        <motion.g variants={nodeVariants} transition={{ duration: 0.4, delay: 0.1 }}>
          <rect x="40" y="50" width="120" height="60" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <text x="100" y="75" textAnchor="middle" fill="var(--foreground)" fontSize="13" fontWeight="600">/r redirect</text>
          <text x="100" y="95" textAnchor="middle" fill="var(--muted-foreground)" fontSize="10">HMAC-signed</text>
        </motion.g>

        {/* /v Verification */}
        <motion.g variants={nodeVariants} transition={{ duration: 0.4, delay: 0.3 }}>
          <rect x="250" y="50" width="140" height="60" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <text x="320" y="75" textAnchor="middle" fill="var(--foreground)" fontSize="13" fontWeight="600">/v verification</text>
          <text x="320" y="95" textAnchor="middle" fill="var(--muted-foreground)" fontSize="10">dedup + validate</text>
        </motion.g>

        {/* Event Ledger */}
        <motion.g variants={nodeVariants} transition={{ duration: 0.4, delay: 0.5 }}>
          <rect x="480" y="50" width="140" height="60" rx="8" fill="var(--accent)" fillOpacity="0.1" stroke="var(--accent)" strokeWidth="1.5" />
          <text x="550" y="75" textAnchor="middle" fill="var(--accent)" fontSize="13" fontWeight="600">Event Ledger</text>
          <text x="550" y="95" textAnchor="middle" fill="var(--muted-foreground)" fontSize="10">append-only</text>
        </motion.g>

        {/* Rollup Jobs */}
        <motion.g variants={nodeVariants} transition={{ duration: 0.4, delay: 0.7 }}>
          <rect x="710" y="50" width="140" height="60" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <text x="780" y="75" textAnchor="middle" fill="var(--foreground)" fontSize="13" fontWeight="600">Rollup Jobs</text>
          <text x="780" y="95" textAnchor="middle" fill="var(--muted-foreground)" fontSize="10">BullMQ + Redis</text>
        </motion.g>

        {/* Row 2: Payout flow */}
        {/* Stripe Connect */}
        <motion.g variants={nodeVariants} transition={{ duration: 0.4, delay: 0.9 }}>
          <rect x="710" y="165" width="190" height="60" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <text x="805" y="190" textAnchor="middle" fill="var(--foreground)" fontSize="13" fontWeight="600">Stripe Connect</text>
          <text x="805" y="210" textAnchor="middle" fill="var(--muted-foreground)" fontSize="10">idempotent payouts</text>
        </motion.g>

        {/* State Machine */}
        <motion.g variants={nodeVariants} transition={{ duration: 0.4, delay: 1.1 }}>
          <rect x="430" y="165" width="140" height="60" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <text x="500" y="190" textAnchor="middle" fill="var(--foreground)" fontSize="13" fontWeight="600">State Machine</text>
          <text x="500" y="210" textAnchor="middle" fill="var(--muted-foreground)" fontSize="10">guards + transitions</text>
        </motion.g>

        {/* Clerk RBAC */}
        <motion.g variants={nodeVariants} transition={{ duration: 0.4, delay: 1.3 }}>
          <rect x="110" y="165" width="140" height="60" rx="8" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <text x="180" y="190" textAnchor="middle" fill="var(--foreground)" fontSize="13" fontWeight="600">Clerk RBAC</text>
          <text x="180" y="210" textAnchor="middle" fill="var(--muted-foreground)" fontSize="10">brand / creator / admin</text>
        </motion.g>

        {/* State flow labels at bottom */}
        <motion.g variants={nodeVariants} transition={{ duration: 0.4, delay: 1.5 }}>
          <text x="450" y="280" textAnchor="middle" fill="var(--muted-foreground)" fontSize="11" fontFamily="var(--font-geist-mono), monospace">
            Draft → Funded → Live → Completed → Paid Out
          </text>
          <text x="450" y="300" textAnchor="middle" fill="var(--muted-foreground)" fontSize="10">
            Each transition requires explicit preconditions
          </text>
        </motion.g>
      </motion.svg>
    </div>
  );
}
