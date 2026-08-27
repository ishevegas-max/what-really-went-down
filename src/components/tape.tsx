type TapeProps = {
  src: string;
  poster: string;
  caption: string;
  className?: string;
};

export function Tape({ src, poster, caption, className }: TapeProps) {
  return (
    <figure className={className}>
      <video
        className="w-full rounded-lg bg-ink"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="auto"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      <figcaption className="mt-3 font-ui text-xs leading-relaxed text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
