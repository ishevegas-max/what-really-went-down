import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { Pause, Play, RotateCcw, RotateCw } from "lucide-react";
import { chapterAt, EPISODE } from "@/lib/episode";
import { cn, formatClock } from "@/lib/utils";

const RATES = [1, 1.25, 1.5] as const;
const BAR_COUNT = 72;

function waveformHeights(count: number) {
  const out: number[] = [];
  let x = 17;
  for (let i = 0; i < count; i++) {
    x = (x * 16807) % 2147483647;
    const pulse = 0.35 + 0.65 * Math.abs(Math.sin(i * 0.31));
    const noise = (x % 1000) / 1000;
    const h = 0.18 + pulse * 0.55 + noise * 0.27;
    out.push(Math.round(h * 100) / 100);
  }
  return out;
}

function StationMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 22 V12" />
      <path d="M28 22 V12" />
      <path d="M4 14 H28" />
      <circle cx="16" cy="14" r="1.6" fill="currentColor" stroke="none" />
      <path d="M8 22 H24" />
    </svg>
  );
}

function PodcastPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const armed = useRef(false);
  const bars = useMemo(() => waveformHeights(BAR_COUNT), []);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState<number>(EPISODE.duration);
  const [rate, setRate] = useState<(typeof RATES)[number]>(1);
  const chapter = chapterAt(time);
  const progress = duration > 0 ? Math.min(time / duration, 1) : 0;

  const seekTo = useCallback(
    (seconds: number) => {
      const el = audioRef.current;
      if (!el) return;
      const next = Math.max(0, Math.min(seconds, el.duration || duration));
      el.currentTime = next;
      setTime(next);
    },
    [duration],
  );

  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    armed.current = true;
    if (el.paused) {
      void el.play();
    } else {
      el.pause();
    }
  }, []);

  const skip = useCallback(
    (delta: number) => {
      seekTo(time + delta);
    },
    [seekTo, time],
  );

  const cycleRate = useCallback(() => {
    setRate((current) => {
      const i = RATES.indexOf(current);
      return RATES[(i + 1) % RATES.length] ?? 1;
    });
  }, []);

  useEffect(() => {
    const el = audioRef.current;
    if (el) el.playbackRate = rate;
  }, [rate]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onTime = () => setTime(el.currentTime);
    const onMeta = () => {
      if (Number.isFinite(el.duration) && el.duration > 0) {
        setDuration(el.duration);
      }
      try {
        const saved = localStorage.getItem(EPISODE.storageKey);
        if (saved) {
          const t = Number(saved);
          if (t > 2 && t < el.duration - 2) {
            el.currentTime = t;
            setTime(t);
          }
        }
      } catch {
        /* ignore */
      }
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnd = () => {
      setPlaying(false);
      setTime(0);
    };

    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onEnd);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onEnd);
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(EPISODE.storageKey, String(time));
    } catch {
      /* ignore */
    }
  }, [time]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!armed.current) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON") return;
      if (e.code === "Space") {
        e.preventDefault();
        toggle();
      } else if (e.code === "ArrowLeft" || e.key === "j") {
        e.preventDefault();
        skip(-15);
      } else if (e.code === "ArrowRight" || e.key === "l") {
        e.preventDefault();
        skip(15);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [skip, toggle]);

  const onWaveClick = (event: MouseEvent<HTMLDivElement>) => {
    armed.current = true;
    const rect = event.currentTarget.getBoundingClientRect();
    const pct = Math.min(
      Math.max((event.clientX - rect.left) / rect.width, 0),
      1,
    );
    seekTo(pct * duration);
  };

  return (
    <div className="flex flex-col gap-8">
      <audio ref={audioRef} src={EPISODE.audioSrc} preload="metadata" />

      <div className="flex items-start gap-4 sm:gap-6">
        <img
          src={EPISODE.coverSrc}
          alt="Sheboygan harbor at blue hour, a swing bridge over dark water"
          className="size-[4.5rem] shrink-0 rounded-md object-cover outline outline-1 -outline-offset-1 outline-brief-fg/10 sm:size-28 sm:rounded-lg"
        />
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="font-brief text-[11px] font-medium uppercase tracking-[0.18em] text-brief-muted">
            Episode 01 · {EPISODE.dateLabel}
          </p>
          <h3 className="mt-1 font-brief-display text-[1.75rem] font-medium leading-[1.15] tracking-[-0.03em] text-brief-fg sm:text-4xl">
            {EPISODE.title}
          </h3>
          <p className="mt-2 max-w-prose font-brief text-sm leading-relaxed text-brief-muted">
            {EPISODE.dek}
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-brief-surface p-4 sm:rounded-2xl sm:p-5">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brief-primary text-brief-primary-fg transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            {playing ? (
              <Pause className="size-7 fill-current" strokeWidth={0} />
            ) : (
              <Play className="ml-0.5 size-7 fill-current" strokeWidth={0} />
            )}
          </button>

          <div className="min-w-0 flex-1">
            <p className="font-brief text-xs font-medium tracking-wide text-brief-muted">
              Now · {chapter.title}
            </p>
            <div
              role="slider"
              aria-label="Seek"
              aria-valuemin={0}
              aria-valuemax={Math.round(duration)}
              aria-valuenow={Math.round(time)}
              tabIndex={0}
              className="mt-2 flex h-12 cursor-pointer items-end gap-px"
              onClick={onWaveClick}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") skip(-5);
                if (e.key === "ArrowRight") skip(5);
              }}
            >
              {bars.map((h, i) => {
                const filled = i / bars.length < progress;
                return (
                  <span
                    key={i}
                    className={cn(
                      "min-w-px flex-1 rounded-full transition-colors duration-150",
                      filled ? "bg-brief-primary" : "bg-brief-fg/18",
                    )}
                    style={{ height: `${Math.round(h * 100)}%` }}
                  />
                );
              })}
            </div>
            <div className="mt-2 flex items-center justify-between font-brief text-xs tabular-nums text-brief-subtle">
              <span>{formatClock(time)}</span>
              <span>{formatClock(duration)}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => skip(-15)}
              aria-label="Back 15 seconds"
              className="inline-flex size-11 items-center justify-center rounded-md text-brief-fg transition-colors duration-150 hover:bg-brief-fg/8"
            >
              <RotateCcw className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => skip(15)}
              aria-label="Forward 15 seconds"
              className="inline-flex size-11 items-center justify-center rounded-md text-brief-fg transition-colors duration-150 hover:bg-brief-fg/8"
            >
              <RotateCw className="size-4" />
            </button>
          </div>
          <button
            type="button"
            onClick={cycleRate}
            aria-label="Playback speed"
            className="inline-flex min-h-11 items-center rounded-md px-3 font-brief text-xs font-medium text-brief-muted transition-colors duration-150 hover:text-brief-fg"
          >
            {rate}×
          </button>
        </div>
      </div>

      <section>
        <h4 className="font-brief text-[11px] font-medium uppercase tracking-[0.18em] text-brief-muted">
          Chapters
        </h4>
        <ol className="mt-3 divide-y divide-brief-border">
          {EPISODE.chapters.map((ch) => {
            const active = ch.id === chapter.id;
            return (
              <li key={ch.id}>
                <button
                  type="button"
                  onClick={() => {
                    armed.current = true;
                    seekTo(ch.start);
                    const el = audioRef.current;
                    if (el && el.paused) void el.play();
                  }}
                  className={cn(
                    "flex min-h-11 w-full items-baseline gap-4 py-3.5 text-left transition-colors duration-150",
                    active
                      ? "text-brief-fg"
                      : "text-brief-muted hover:text-brief-fg",
                  )}
                >
                  <span className="w-10 shrink-0 font-brief text-xs tabular-nums text-brief-subtle">
                    {formatClock(ch.start)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium">{ch.title}</span>
                    <span className="mt-0.5 block text-sm text-brief-subtle">
                      {ch.dek}
                    </span>
                  </span>
                  {active ? (
                    <span className="shrink-0 font-brief text-[10px] uppercase tracking-[0.16em] text-brief-primary">
                      Playing
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}

function Transcript() {
  return (
    <section>
      <h4 className="font-brief text-[11px] font-medium uppercase tracking-[0.18em] text-brief-muted">
        Transcript
      </h4>
      <ol className="mt-5 flex flex-col gap-5">
        {EPISODE.transcript.map((line, i) => (
          <li
            key={i}
            className="grid grid-cols-[4.5rem_1fr] gap-4 sm:grid-cols-[5.5rem_1fr]"
          >
            <span className="pt-0.5 font-brief text-[11px] font-medium uppercase tracking-[0.14em] text-brief-subtle">
              {line.speaker}
            </span>
            <p className="font-brief text-[15px] leading-relaxed text-brief-fg/90">
              {line.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Brief() {
  return (
    <section
      id="brief"
      className="bg-brief font-brief text-brief-fg"
      aria-labelledby="brief-title"
    >
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <header className="flex items-center justify-between gap-4 border-b border-brief-border pb-5">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-md text-brief-primary outline outline-1 outline-brief-fg/10">
              <StationMark className="size-5" />
            </span>
            <div>
              <p
                id="brief-title"
                className="font-brief-display text-lg font-medium leading-none tracking-[-0.02em]"
              >
                {EPISODE.show}
              </p>
              <p className="mt-1 font-brief text-[11px] uppercase tracking-[0.16em] text-brief-muted">
                {EPISODE.location}
              </p>
            </div>
          </div>
          <p className="hidden font-brief text-[11px] uppercase tracking-[0.14em] text-brief-subtle sm:block">
            Recorded · {EPISODE.hosts}
          </p>
        </header>

        <p className="mt-8 max-w-[38ch] font-brief-display text-2xl font-medium leading-snug tracking-[-0.03em] text-brief-fg sm:text-[2rem]">
          Local news, spoken. One week in Sheboygan, without the filler.
        </p>

        <div className="mt-10">
          <PodcastPlayer />
        </div>

        <hr className="my-12 border-brief-border" />

        <Transcript />

        <p className="mt-16 border-t border-brief-border pt-6 pb-2 font-brief text-xs leading-relaxed text-brief-subtle">
          Sources as reported late August 2026. Hosts are a studio pairing for
          this briefing. Space plays and pauses after you hit play. J and L skip
          fifteen seconds.
          <span className="mt-2 block text-brief-muted">
            {EPISODE.show} · {EPISODE.dateLabel}
          </span>
        </p>
      </div>
    </section>
  );
}
