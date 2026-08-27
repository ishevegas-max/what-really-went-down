import { useEffect, useState } from "react";
import { ExternalLink, Pause, Play } from "lucide-react";
import { clips } from "@/lib/meeting";
import { cn, youtubeEmbed, youtubeUrl } from "@/lib/utils";

const DWELL_MS = 10000;

export function ClipReel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [watch, setWatch] = useState(false);
  const clip = clips[index];

  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => {
      setIndex((i) => (i + 1) % clips.length);
      setWatch(false);
    }, DWELL_MS);
    return () => window.clearTimeout(id);
  }, [index, playing]);

  return (
    <section id="highlights" className="border-b border-rule bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-ui text-[11px] font-medium uppercase tracking-[0.22em] text-crimson">
              Highlight reel
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Eight moments from the tape.
            </h2>
          </div>
          <p className="max-w-sm font-ui text-sm leading-relaxed text-muted">
            Quotes are from the official WSCS recording. Each clip jumps to that
            point in the meeting.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl bg-ink shadow-soft">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative aspect-16/10 bg-ink sm:aspect-video">
              {watch ? (
                <iframe
                  key={clip.id}
                  title={`Meeting clip: ${clip.title}`}
                  src={`${youtubeEmbed(clip.start)}&autoplay=1`}
                  className="absolute inset-0 size-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setWatch(true);
                    setPlaying(false);
                  }}
                  className="group absolute inset-0"
                  aria-label={`Play meeting footage for ${clip.title}`}
                >
                  <img
                    src="/images/weill.jpg"
                    alt=""
                    className="size-full object-cover opacity-70 transition-opacity duration-250 group-hover:opacity-85"
                  />
                  <span className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
                  <span className="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-[0.18em] text-on-crimson/70">
                    Clip {clip.n} · {clip.clock}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex size-16 items-center justify-center rounded-full bg-on-crimson text-ink shadow-soft transition-transform duration-150 group-hover:scale-105 group-active:scale-[0.96]">
                      <Play className="ml-0.5 size-6" fill="currentColor" />
                    </span>
                  </span>
                  <span className="absolute bottom-5 left-5 right-5 text-left font-ui text-xs uppercase tracking-[0.14em] text-on-crimson/80">
                    Watch this moment in the meeting
                  </span>
                </button>
              )}
            </div>

            <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
              <div>
                <p className="font-ui text-[11px] font-medium uppercase tracking-[0.18em] text-faint">
                  {clip.speaker} · {clip.role}
                </p>
                <blockquote
                  key={clip.id}
                  className="mt-3 font-display text-2xl font-medium italic leading-snug tracking-tight text-on-crimson sm:text-[1.7rem]"
                >
                  “{clip.quote}”
                </blockquote>
                <p className="mt-5 font-ui text-sm leading-relaxed text-faint">
                  {clip.annotation}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPlaying((p) => !p)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-on-crimson/20 px-3 font-ui text-xs font-medium uppercase tracking-[0.14em] text-on-crimson transition-colors duration-150 hover:border-on-crimson/45"
                >
                  {playing ? (
                    <Pause className="size-3.5" />
                  ) : (
                    <Play className="size-3.5" />
                  )}
                  {playing ? "Pause reel" : "Play reel"}
                </button>
                <a
                  href={youtubeUrl(clip.start)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-sm px-3 font-ui text-xs font-medium uppercase tracking-[0.14em] text-on-crimson/80 transition-colors duration-150 hover:text-on-crimson"
                >
                  Open on YouTube
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="h-0.5 bg-on-crimson/10">
            {playing ? (
              <div key={clip.id} className="clip-progress h-full bg-crimson" />
            ) : (
              <div className="h-full w-0 bg-crimson" />
            )}
          </div>
        </div>

        <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {clips.map((c, i) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => {
                  setIndex(i);
                  setWatch(false);
                }}
                className={cn(
                  "flex min-h-16 w-full flex-col items-start rounded-md border px-3 py-3 text-left transition-colors duration-150",
                  i === index
                    ? "border-crimson bg-crimson text-on-crimson"
                    : "border-rule bg-paper text-ink hover:border-ink/30",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.16em]",
                    i === index ? "text-on-crimson/70" : "text-muted",
                  )}
                >
                  {c.n} · {c.clock}
                </span>
                <span className="mt-1 font-ui text-sm font-medium leading-snug">
                  {c.title}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
