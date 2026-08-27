export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root { --ink:#110f0d; --on:#f4efe6; --dim:rgba(244,239,230,.78); --mute:rgba(244,239,230,.5); --crimson:#c45c4a; }
        * { box-sizing: border-box; }
        html, body, #__next { margin: 0; padding: 0; width: 100%; background: var(--ink); }
        body { color: var(--on); font-family: Newsreader, Georgia, serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        a { color: inherit; }
        button { font: inherit; color: inherit; background: none; }
        img, video { display: block; border: 0; }
        .ui { font-family: "IBM Plex Sans", system-ui, sans-serif; }
        .display { font-family: Newsreader, Georgia, serif; }
        .mono { font-family: "IBM Plex Mono", ui-monospace, monospace; }
        .brief { font-family: Figtree, system-ui, sans-serif; }
        .brief-d { font-family: Fraunces, Georgia, serif; }
        table.page { width: 100%; border-collapse: collapse; border-spacing: 0; background: var(--ink); }
        table.page > tbody > tr > td { padding: 0; }
        td.shot { position: relative; height: 100svh; overflow: hidden; background: #000; }
        td.shot .fill { position: absolute; inset: 0; width: 100% !important; height: 100% !important; max-width: none !important; object-fit: cover; }
        td.shot .shade { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(180deg, rgba(17,15,13,.4) 0%, rgba(17,15,13,.05) 42%, rgba(17,15,13,.92) 100%); }
        table.in { position: relative; width: 100%; height: 100svh; border-collapse: collapse; }
        table.in td.top { vertical-align: top; padding: max(12px, env(safe-area-inset-top)) 16px 0; }
        table.in td.bot { vertical-align: bottom; height: 100%; padding: 0 20px max(28px, env(safe-area-inset-bottom)); }
        table.in td.bot .inner { max-width: 34rem; }
        h1, h2 { margin: 8px 0 0; font-weight: 500; letter-spacing: -.03em; line-height: 1.04; }
        h1 { font-size: clamp(2.5rem, 10vw, 5.4rem); }
        h2 { font-size: clamp(2rem, 7vw, 3.8rem); }
        .lede { margin: 12px 0 0; font-size: clamp(1.15rem, 3.2vw, 1.55rem); font-style: italic; line-height: 1.3; color: var(--dim); }
        .kicker { margin: 0; font-size: 11px; letter-spacing: .18em; text-transform: uppercase; opacity: .72; }
        td.copy { padding: 32px 20px 56px; }
        td.copy .inner { max-width: 34rem; }
        td.copy p { font-size: 1.16rem; line-height: 1.58; margin: 0 0 1em; color: var(--dim); }
        td.copy p:last-child { margin-bottom: 0; }
        td.stage { position: relative; height: 70svh; background: #000; }
        td.stage iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
        .play { position: absolute; inset: 0; width: 100%; border: 0; padding: 0; cursor: pointer; color: var(--on); }
        .dot { width: 64px; height: 64px; border-radius: 50%; background: var(--on); color: var(--ink); display: table; }
        .dot span { display: table-cell; vertical-align: middle; text-align: center; font-size: 22px; }
        table.film { width: 100%; }
        table.film td { padding: 12px 16px 20px; }
        table.film .row { display: block; overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch; }
        table.film button { display: inline-block; vertical-align: top; min-height: 44px; margin-right: 8px; padding: 8px 12px; border: 1px solid rgba(244,239,230,.2); color: var(--on); text-align: left; cursor: pointer; white-space: normal; }
        table.film button.on { background: var(--on); color: var(--ink); border-color: var(--on); }
        table.zones { width: 100%; border-collapse: collapse; }
        table.zones td { padding: 28px 20px; border-top: 1px solid rgba(244,239,230,.12); vertical-align: top; }
        @media (min-width: 700px) { table.zones td { width: 33.33%; border-top: 0; border-left: 1px solid rgba(244,239,230,.12); } table.zones td:first-child { border-left: 0; } }
        table.facts { width: 100%; border-collapse: collapse; }
        table.facts td { padding: 8px 20px 28px; vertical-align: top; width: 50%; }
        @media (min-width: 800px) { table.facts td { width: 16.66%; } }
        table.split { width: 100%; height: 6px; border-collapse: collapse; }
        table.split td { padding: 0; height: 6px; }
        table.legend { width: 100%; max-width: 34rem; }
        table.legend td { padding: 6px 0; font-size: 14px; }
        td.foot { padding: 24px 20px 48px; color: var(--mute); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; }
        .nav a { text-decoration: none; }
        @media (max-width: 879px) { .wide { display: none; } }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
