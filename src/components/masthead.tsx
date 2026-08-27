import { clips } from "@/lib/meeting";

const links = [
  { href: "#highlights", label: "Highlights" },
  { href: "#story", label: "The story" },
  { href: "#numbers", label: "The numbers" },
  { href: "#tape", label: "Timeline" },
  { href: "/paper.html", label: "Archive" },
];

export function Masthead() {
  return (
    <header className="border-b border-rule bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            SheVegas
          </span>
          <span className="hidden font-ui text-[11px] uppercase tracking-[0.18em] text-muted sm:inline">
            shevegas.com
          </span>
        </a>
        <nav
          aria-label="Sections"
          className="hidden items-center gap-5 md:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-ui text-xs font-medium uppercase tracking-[0.14em] text-muted transition-colors duration-150 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#highlights"
          className="inline-flex min-h-11 items-center rounded-sm bg-crimson px-3 font-ui text-xs font-medium uppercase tracking-[0.14em] text-on-crimson transition-transform duration-150 ease-out active:scale-[0.96]"
        >
          {clips.length} clips
        </a>
      </div>
    </header>
  );
}
