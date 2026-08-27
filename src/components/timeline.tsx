import { timeline } from "@/lib/meeting";
import { cn } from "@/lib/utils";

const stamp: Record<(typeof timeline)[number]["result"], string> = {
  approved: "Approved",
  hearing: "Hearing",
  tabled: "Tabled",
  noted: "On the record",
};

export function Timeline() {
  return (
    <section id="tape" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="font-ui text-[11px] font-medium uppercase tracking-[0.22em] text-crimson">
          67 minutes
        </p>
        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          The meeting, in order.
        </h2>
        <p className="mt-3 max-w-xl font-ui text-sm leading-relaxed text-muted">
          Clock times after the hearings are approximate from the flow of the
          recording. Votes are not.
        </p>

        <ol className="mt-10 space-y-0">
          {timeline.map((beat, i) => (
            <li key={beat.time} className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr]">
              <div className="pr-4 text-right">
                <span className="font-mono text-xs tabular-nums text-muted">
                  {beat.time}
                </span>
              </div>
              <div
                className={cn(
                  "relative border-l border-rule pb-8 pl-5 sm:pl-8",
                  i === timeline.length - 1 && "pb-0",
                )}
              >
                <span className="absolute -left-1.5 top-1 size-3 rounded-full bg-crimson" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-medium">{beat.title}</h3>
                  <span
                    className={cn(
                      "font-ui text-[10px] font-medium uppercase tracking-[0.14em]",
                      beat.result === "approved" && "text-pass",
                      beat.result === "tabled" && "text-crimson",
                      (beat.result === "hearing" || beat.result === "noted") &&
                        "text-muted",
                    )}
                  >
                    {stamp[beat.result]}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl font-body text-[0.98rem] leading-relaxed text-ink/90">
                  {beat.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-xl border border-rule bg-surface p-6 sm:p-8">
          <p className="font-ui text-[11px] font-medium uppercase tracking-[0.18em] text-crimson">
            What happens next
          </p>
          <h3 className="mt-2 font-display text-2xl font-medium">
            Common Council, September 21, 2026.
          </h3>
          <p className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed">
            Plan Commission approval is a station, not the last stop. TID 21’s
            boundary amendment and TID 27’s creation still need the Common
            Council, then the Joint Review Board. The 120 Worth fence still
            needs a public hearing. The comprehensive plan still needs its own.
          </p>
          <p className="mt-4 max-w-2xl font-ui text-sm leading-relaxed text-muted">
            Sources: WSCS Sheboygan recording of the August 26, 2026 Plan
            Commission; City of Sheboygan TID document center; contemporary
            reporting on the citizen TID petition. Photographs and video by
            Mike Brunette.
          </p>
        </div>
      </div>
    </section>
  );
}
