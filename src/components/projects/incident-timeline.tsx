"use client";

/**
 * The reconstructed sequence from the insider-threat examination.
 *
 * Every value here comes from the examination itself: the 26-second interval
 * was established by correlating Windows Portable Device driver installation
 * events against the antivirus detection. No timing is shown for the
 * remediation step because none was established — it is rendered as an
 * outcome, not as a timed node.
 *
 * Node markers are inline SVG drawn with the site's CSS custom properties so
 * the diagram tracks the light/dark theme instead of shipping an image with
 * baked-in colours. The rail is a rule rather than SVG so the layout can flip
 * from vertical (mobile) to horizontal (md and up) without the labels
 * shrinking below legibility.
 */
const STEPS = [
  {
    marker: "T+0",
    title: "Removable device connected",
    detail:
      "Windows Portable Device driver installation events recorded in the SYSTEM event log.",
  },
  {
    marker: "T+26s",
    title: "Execution attempt",
    detail:
      "Meterpreter remote-access payload staged on the removable media is executed.",
  },
  {
    marker: "Outcome",
    title: "Payload suspended",
    detail:
      "Windows Defender remediated the file. No artifact examined shows the payload running successfully.",
  },
] as const;

export function IncidentTimeline() {
  return (
    <figure className="rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <figcaption className="mb-5 text-sm font-semibold text-foreground">
        Reconstructed sequence
      </figcaption>

      <ol className="grid gap-x-4 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex gap-4 md:block">
            {/* Marker + rail */}
            <div
              className="flex flex-col items-center md:w-full md:flex-row"
              aria-hidden="true"
            >
              <svg
                className="h-3 w-3 shrink-0"
                viewBox="0 0 12 12"
                fill="none"
                focusable="false"
              >
                <circle
                  cx="6"
                  cy="6"
                  r="5"
                  fill="var(--background)"
                  stroke="var(--accent)"
                  strokeWidth="2"
                />
              </svg>
              {i < STEPS.length - 1 && (
                <span className="w-0.5 flex-1 bg-border md:h-0.5 md:w-auto md:flex-1" />
              )}
            </div>

            <div className="pb-6 md:mt-3 md:pb-0 md:pr-4">
              <span className="font-mono text-xs font-semibold text-accent">
                {step.marker}
              </span>
              <h4 className="mt-0.5 text-sm font-semibold text-foreground">
                {step.title}
              </h4>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">
                {step.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* The timestamps above are only as good as the system clock, and the
          clock was not reliable in this window. */}
      <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        <strong className="font-semibold text-amber-700 dark:text-amber-400">
          Timestamps qualified:
        </strong>{" "}
        a system clock correction of 58,551 seconds (~16.3 hours) was attempted
        in the affected window and refused by Windows for exceeding the maximum
        permitted adjustment. Every timestamp in that window was reported with
        that caveat attached rather than as reliable.
      </p>
    </figure>
  );
}
