import { createFileRoute } from "@tanstack/react-router";
import { Brief } from "@/components/brief";
import { ClipReel } from "@/components/clip-reel";
import { Hero } from "@/components/hero";
import { Masthead } from "@/components/masthead";
import { Numbers } from "@/components/numbers";
import { Story } from "@/components/story";
import { Timeline } from "@/components/timeline";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <Masthead />
      <Hero />
      <ClipReel />
      <Story />
      <Numbers />
      <Timeline />
      <Brief />
      <footer className="bg-ink px-5 py-8 text-on-crimson/70 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg text-on-crimson">SheVegas</p>
          <p className="font-ui text-xs uppercase tracking-[0.14em]">
            <a className="hover:text-on-crimson" href="/paper.html">
              Archive
            </a>
            {" · "}
            <a
              className="hover:text-on-crimson"
              href="https://shevegas.org"
              target="_blank"
              rel="noreferrer"
            >
              shevegas.org
            </a>
            {" · Art by Mike Brunette"}
          </p>
        </div>
      </footer>
    </main>
  );
}
