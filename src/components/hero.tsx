import { MEETING_CLOCK, MEETING_DATE, MEETING_PLACE } from "@/lib/meeting";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <video
        className="absolute inset-0 size-full object-cover opacity-80 motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/swing.jpg"
        aria-hidden="true"
      >
        <source src="/video/swing.mp4" type="video/mp4" />
      </video>
      <img
        src="/images/swing.jpg"
        alt=""
        className="absolute inset-0 hidden size-full object-cover opacity-80 motion-reduce:block"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-ink/15" />

      <div className="relative mx-auto flex min-h-[78dvh] max-w-6xl flex-col justify-end px-5 pb-12 pt-20 sm:px-8 sm:pb-16">
        <p className="rise font-ui text-[11px] font-medium uppercase tracking-[0.22em] text-on-crimson/80">
          City Plan Commission · {MEETING_DATE}
        </p>
        <h1 className="rise mt-4 max-w-4xl font-display text-[2.6rem] font-medium leading-[1.05] tracking-[-0.03em] text-on-crimson sm:text-6xl lg:text-7xl">
          What really went down.
        </h1>
        <p className="rise mt-5 max-w-2xl font-display text-lg italic leading-snug text-on-crimson/80 sm:text-2xl">
          One resident. Two tax districts. Sixty-seven minutes. A fence got more
          debate than $185 million.
        </p>
        <dl className="rise mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-on-crimson/20 pt-5 font-ui text-xs uppercase tracking-[0.14em] text-on-crimson/70">
          <div>
            <dt className="text-on-crimson/40">When</dt>
            <dd className="mt-1 text-on-crimson">{MEETING_CLOCK}</dd>
          </div>
          <div>
            <dt className="text-on-crimson/40">Where</dt>
            <dd className="mt-1 max-w-xs text-on-crimson">{MEETING_PLACE}</dd>
          </div>
          <div>
            <dt className="text-on-crimson/40">Public speakers</dt>
            <dd className="mt-1 text-on-crimson">One</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
