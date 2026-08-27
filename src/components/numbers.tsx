import { tid21, tid27 } from "@/lib/meeting";

function formatMoney(value: number) {
  const abs = Math.abs(value);
  if (abs >= 1_000_000) {
    const n = value / 1_000_000;
    const digits = Number.isInteger(n) ? 0 : 1;
    return `$${n.toFixed(digits)}M`;
  }
  if (abs >= 10_000) {
    return `$${Math.round(value / 1000)}K`;
  }
  return `$${Math.round(value).toLocaleString("en-US")}`;
}

function Money({ value }: { value: number }) {
  return <span className="font-display tabular-nums">{formatMoney(value)}</span>;
}

function Delta({ from, to, label }: { from: number; to: number; label: string }) {
  const diff = to - from;
  const sign = diff > 0 ? "+" : "−";
  return (
    <div className="flex items-end justify-between gap-4 border-b border-rule py-4 last:border-0">
      <div>
        <p className="font-ui text-xs uppercase tracking-[0.14em] text-muted">
          {label}
        </p>
        <p className="mt-1 font-ui text-sm text-muted">
          May 2025 <Money value={from} /> → Aug 2026 <Money value={to} />
        </p>
      </div>
      <p className="font-display text-2xl font-medium text-crimson">
        {sign}
        <Money value={Math.abs(diff)} />
      </p>
    </div>
  );
}

export function Numbers() {
  const rest = 1 - tid27.incentiveShare;

  return (
    <section id="numbers" className="border-b border-rule bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="font-ui text-[11px] font-medium uppercase tracking-[0.22em] text-crimson">
          The numbers
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          What she read off the pages, and what the consultant put on the
          record.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { k: "TID 21 cost cap", v: tid21.capLabel },
            { k: "TID 27 incentive share", v: "63%" },
            { k: "20-year cushion", v: "$149,334" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-lg border border-rule bg-paper px-5 py-6"
            >
              <p className="font-ui text-[11px] uppercase tracking-[0.16em] text-muted">
                {s.k}
              </p>
              <p className="mt-2 font-display text-4xl font-medium tracking-tight">
                {s.v}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-rule bg-paper p-6 sm:p-8">
            <p className="font-ui text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              {tid21.name}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium">
              {tid21.action}
            </h3>
            <p className="mt-2 font-ui text-sm text-muted">
              {tid21.acres}. {tid21.headroom}.
            </p>
            <div className="mt-6">
              <Delta
                from={tid21.debtWas}
                to={tid21.debtNow}
                label="Debt service on the cash-flow page"
              />
              <Delta
                from={tid21.incentivesWas}
                to={tid21.incentivesNow}
                label="Developer incentives in the projection"
              />
              <Delta
                from={tid21.adminWas}
                to={tid21.adminNow}
                label="Professional / administrative costs"
              />
            </div>
            <p className="mt-5 font-ui text-xs leading-relaxed text-muted">
              Deltas are Salgado’s May 2025 vs. August 2026 comparison, stated
              in the hearing. Ehlers’ action-item presentation held the eligible
              cost cap at $182.4 million and described incentives as
              pay-as-you-go.
            </p>
          </div>

          <div className="rounded-xl border border-rule bg-paper p-6 sm:p-8">
            <p className="font-ui text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              {tid27.name}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium">
              {tid27.action}
            </h3>
            <p className="mt-2 font-ui text-sm text-muted">
              {tid27.acres} · {tid27.building} · closes in {tid27.close}
            </p>

            <p className="mt-6 font-ui text-[11px] uppercase tracking-[0.16em] text-muted">
              Where $3.1 million of projected increment goes
            </p>
            <div className="mt-3 flex h-4 overflow-hidden rounded-full bg-surface">
              <div
                className="h-full bg-crimson"
                style={{ width: `${tid27.incentiveShare * 100}%` }}
              />
              <div
                className="h-full bg-pass"
                style={{ width: `${rest * 100}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between font-ui text-xs text-muted">
              <span>Incentives 63%</span>
              <span>Infrastructure & admin 37%</span>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-4">
              {[
                ["Project costs", "$3.0M"],
                ["Developer incentive", "$2.0M"],
                ["Water / sewer", "$650K"],
                ["Financing interest", "$320K"],
                ["Base land value", "$234K"],
                ["Assumed increment", "$10M"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-ui text-[11px] uppercase tracking-[0.14em] text-muted">
                    {k}
                  </dt>
                  <dd className="mt-1 font-display text-xl font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 font-ui text-xs leading-relaxed text-muted">
              Cash balance is projected negative through {tid27.negativeThrough}.
              Staff: utility advance is repaid with interest; incentive is not
              owed if increment never arrives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
