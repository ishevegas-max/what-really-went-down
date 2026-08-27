export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --ink: #110f0d;
          --on: #f4efe6;
          --dim: rgba(244,239,230,.78);
          --mute: rgba(244,239,230,.5);
          --crimson: #c45c4a;
        }
        * { box-sizing: border-box; }
        html, body, #__next { margin: 0; padding: 0; width: 100%; max-width: 100%; overflow-x: hidden; background: var(--ink); }
        body { color: var(--on); font-family: Newsreader, Georgia, serif; -webkit-font-smoothing: antialiased; }
        a { color: inherit; }
        button { font: inherit; color: inherit; }
        img, video { display: block; border: 0; }
        .ui { font-family: "IBM Plex Sans", system-ui, sans-serif; }
        .display { font-family: Newsreader, Georgia, serif; }
        .mono { font-family: "IBM Plex Mono", ui-monospace, monospace; }
        .brief-font { font-family: Figtree, system-ui, sans-serif; }
        .brief-display { font-family: Fraunces, Georgia, serif; }

        .mast {
          position: fixed; top: 0; left: 0; right: 0; z-index: 40;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          padding: max(12px, env(safe-area-inset-top)) 16px 32px;
          background: linear-gradient(to bottom, rgba(17,15,13,.75), transparent);
        }
        .mast a { text-decoration: none; color: var(--on); }
        .mast nav { display: none; }
        @media (min-width: 880px) {
          .mast nav { display: flex; gap: 18px; font-size: 11px; letter-spacing: .16em; text-transform: uppercase; opacity: .7; }
        }

        .poster {
          position: relative;
          width: 100%;
          min-height: 100svh;
          overflow: hidden;
          background: var(--ink);
          color: var(--on);
        }
        .fill {
          position: absolute; inset: 0;
          width: 100% !important; height: 100% !important;
          max-width: none !important; max-height: none !important;
          object-fit: cover;
        }
        .shade {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(180deg, rgba(17,15,13,.35) 0%, rgba(17,15,13,.05) 40%, rgba(17,15,13,.92) 100%);
        }
        .copy {
          position: relative;
          min-height: 100svh;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 88px 20px max(28px, env(safe-area-inset-bottom));
        }
        @media (min-width: 700px) { .copy { padding: 96px 40px 48px; } }
        .copy .inner { max-width: 34rem; }
        .copy h1, .copy h2 { margin: 10px 0 0; font-weight: 500; letter-spacing: -.03em; line-height: 1.04; }
        .copy h1 { font-size: clamp(2.5rem, 10vw, 5.4rem); }
        .copy h2 { font-size: clamp(2rem, 7vw, 3.8rem); }
        .lede { margin: 14px 0 0; font-size: clamp(1.15rem, 3.2vw, 1.6rem); font-style: italic; line-height: 1.3; color: var(--dim); }
        .kicker { margin: 0; font-size: 11px; letter-spacing: .18em; text-transform: uppercase; opacity: .72; }

        .cell { padding: 32px 20px 64px; }
        @media (min-width: 700px) { .cell { padding: 48px 40px 80px; } }
        .cell .inner { max-width: 34rem; }
        .cell p { font-size: 1.16rem; line-height: 1.58; margin: 0 0 1em; color: var(--dim); }
        .cell p:last-child { margin-bottom: 0; }

        .stage { position: relative; width: 100%; min-height: 70svh; background: #000; }
        .stage iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
        .play { position: absolute; inset: 0; width: 100%; border: 0; padding: 0; background: #000; cursor: pointer; color: var(--on); }
        .dot {
          width: 64px; height: 64px; border-radius: 50%;
          background: var(--on); color: var(--ink);
          display: grid; place-items: center; font-size: 22px;
        }
        .strip {
          display: flex; gap: 8px; overflow-x: auto;
          padding: 12px 16px max(20px, env(safe-area-inset-bottom));
          -webkit-overflow-scrolling: touch; scrollbar-width: none;
        }
        .strip::-webkit-scrollbar { display: none; }
        .strip button {
          flex: 0 0 auto; min-height: 44px;
          padding: 8px 12px; border: 1px solid rgba(244,239,230,.2);
          background: transparent; color: var(--on); text-align: left; cursor: pointer;
        }
        .strip button.on { background: var(--on); color: var(--ink); border-color: var(--on); }

        .zones { display: grid; }
        @media (min-width: 700px) { .zones { grid-template-columns: 1fr 1fr 1fr; } }
        .zones article { padding: 28px 20px; border-top: 1px solid rgba(244,239,230,.12); }
        @media (min-width: 700px) {
          .zones article { border-top: 0; border-left: 1px solid rgba(244,239,230,.12); }
          .zones article:first-child { border-left: 0; padding-left: 40px; }
        }
        .facts { display: grid; grid-template-columns: 1fr 1fr; gap: 18px 24px; padding: 8px 20px 40px; }
        @media (min-width: 800px) { .facts { grid-template-columns: repeat(6, 1fr); padding-left: 40px; padding-right: 40px; } }
        .split { display: flex; height: 6px; overflow: hidden; margin: 18px 0 16px; }
        .split i { display: block; height: 100%; }
        .legend { list-style: none; margin: 0; padding: 0; }
        .legend li { display: flex; justify-content: space-between; gap: 12px; margin: 8px 0; font-size: 14px; }
        .swatch { display: inline-block; width: 8px; height: 8px; margin-right: 8px; }
        footer.desk { padding: 24px 20px 48px; color: var(--mute); }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
