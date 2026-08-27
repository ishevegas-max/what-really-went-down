import Head from "next/head"
import { useState } from "react"
import Lakefront from "../components/Lakefront"

const M =
  "https://cdn.jsdelivr.net/gh/ishevegas-max/what-really-went-down@a41e014/public"
const AUDIO =
  "https://raw.githubusercontent.com/ishevegas-max/the-sheboygan-brief/main/public/episodes/sheboygan-brief-late-august-2026.mp3"
const COVER =
  "https://raw.githubusercontent.com/ishevegas-max/the-sheboygan-brief/main/public/covers/episode-001.jpg"

const clips = [
  { n: "01", t: 197, clock: "4:00", who: "Chair", title: "Call to order", q: "It is 4 o'clock. I will call our plan commission meeting to order." },
  { n: "02", t: 276, clock: "4:04", who: "Lisa Salgado", title: "The only public comment", q: "I'm disappointed that the city held two meetings on these TIDs today during work hours." },
  { n: "03", t: 295, clock: "4:05", who: "Lisa Salgado", title: "The $400 million question", q: "Isn't over $400 million in TID city cost obligations enough for roughly 21,000 households?" },
  { n: "04", t: 313, clock: "4:05", who: "Lisa Salgado", title: "The page that says sample", q: "Why does the page say sample? Where is our verified legal statement?" },
  { n: "05", t: 374, clock: "4:06", who: "Lisa Salgado", title: "$85 million off the cash flow", q: "Today the total debt service is down to $47 million. That is a reduction of $85 million. So what changed?" },
  { n: "06", t: 422, clock: "4:07", who: "Lisa Salgado", title: "Incentives up $28 million", q: "Developer incentives increased by $28.2 million even though the amendment says no changes to project costs." },
  { n: "07", t: 560, clock: "4:10", who: "Lisa Salgado", title: "A $149,334 cushion", q: "The TID cash balance is projected to remain negative through 2045." },
  { n: "08", t: 1500, clock: "later", who: "Commissioner Joe", title: "The fortress", q: "It essentially makes the property fairly fortress-like." },
]

function embed(start) {
  return `https://www.youtube-nocookie.com/embed/7TqK79kAxOo?start=${start}&rel=0&autoplay=1`
}

export default function Home() {
  const [i, setI] = useState(0)
  const [watch, setWatch] = useState(false)
  const clip = clips[i]

  return (
    <>
      <Head>
        <title>SheVegas — What really went down</title>
        <meta name="description" content="What really went down at Sheboygan Plan Commission, how the lakefront is changing, and The Sheboygan Brief." />
        <meta name="theme-color" content="#110f0d" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Fraunces:opsz,wght@9..144,500;600&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,600;1,6..72,400&display=swap" />
      </Head>

      <header className="mast ui">
        <a href="#top" className="display" style={{ fontSize: 22, fontWeight: 600 }}>SheVegas</a>
        <nav>
          <a href="#highlights">Tape</a>
          <a href="#story">Story</a>
          <a href="#water">Lakefront</a>
          <a href="#brief">Brief</a>
        </nav>
        <a href="#highlights" className="ui" style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>8 clips</a>
      </header>

      <section id="top" className="poster">
        <video className="fill" autoPlay muted loop playsInline poster={`${M}/images/swing.jpg`} style={{ objectPosition: "42% 18%" }}>
          <source src={`${M}/video/swing.mp4`} type="video/mp4" />
        </video>
        <div className="shade" />
        <div className="copy">
          <div className="inner">
            <p className="kicker ui">City Plan Commission · August 26, 2026</p>
            <h1 className="display">What really went down.</h1>
            <p className="lede display">One resident. Two tax districts. Sixty-seven minutes. A fence got more debate than $185 million.</p>
          </div>
        </div>
      </section>

      <section id="highlights" className="poster" style={{ minHeight: "auto" }}>
        <div className="stage">
          {watch ? (
            <iframe title={clip.title} src={embed(clip.t)} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          ) : (
            <button type="button" className="play" onClick={() => setWatch(true)} aria-label={`Play ${clip.title}`}>
              <img className="fill" src={`${M}/images/weill.jpg`} alt="" />
              <div className="shade" />
              <span className="mono" style={{ position: "absolute", left: 20, top: 20, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", zIndex: 1 }}>
                Clip {clip.n} · {clip.clock}
              </span>
              <span style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", zIndex: 1 }}><span className="dot">▶</span></span>
            </button>
          )}
        </div>
        <div className="cell">
          <div className="inner">
            <p className="kicker ui">{clip.who}</p>
            <h2 className="display" style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", margin: "8px 0 0" }}>{clip.title}</h2>
            <p className="lede display" style={{ fontSize: "1.25rem" }}>“{clip.q}”</p>
          </div>
        </div>
        <div className="strip">
          {clips.map((c, idx) => (
            <button key={c.n} type="button" className={idx === i ? "on" : ""} onClick={() => { setI(idx); setWatch(false) }}>
              <span className="mono" style={{ fontSize: 10, letterSpacing: "0.12em", display: "block", opacity: 0.7 }}>{c.n} · {c.clock}</span>
              <span className="ui" style={{ fontSize: 13 }}>{c.title}</span>
            </button>
          ))}
        </div>
      </section>

      <article id="story">
        <section className="poster">
          <video className="fill" autoPlay muted loop playsInline poster={`${M}/images/rocks.jpg`} style={{ objectPosition: "50% 60%" }}>
            <source src={`${M}/video/rocks.mp4`} type="video/mp4" />
          </video>
          <div className="shade" />
          <div className="copy">
            <div className="inner">
              <p className="kicker ui">The record</p>
              <h2 className="display">A fence got more debate than $185 million.</h2>
              <p className="lede display">Harbor rocks. Art: Mike Brunette.</p>
            </div>
          </div>
        </section>
        <div className="cell">
          <div className="inner">
            <p>The Sheboygan Plan Commission did not have a long night. It had a 4 p.m. Wednesday. On the official WSCS recording the chair calls the meeting at 4:00, notes that Jerry is excused, and moves through two tax-increment hearings, three architectural approvals, a fight over a fence, and a comprehensive plan update. They adjourn at 5:07.</p>
            <p>One resident, Lisa Salgado of the Ellis neighborhood, used both public hearings. She arrived with page numbers. She left with no second speaker behind her. Then the commission approved both districts without a dissenting vote.</p>
            <p>Salgado was not arguing a vibe. She was arguing a packet. Last year's cash flow showed $132 million in debt service. This year's page showed $47 million. Incentives jumped about $28 million. The packet still had an attorney letter marked "sample."</p>
            <p>TID 21 keeps a $182.4 million cost cap. TID 27 is a new industrial district for Northland Plastics — about $3 million in project costs, a potential $2 million incentive, and a $149,334 cushion after twenty years of negative cash. Next stop is Common Council on September 21.</p>
          </div>
        </div>
        <section className="poster" style={{ minHeight: "78dvh" }}>
          <img className="fill" src={`${M}/images/path.jpg`} alt="Cracked paved path" style={{ objectPosition: "50% 80%" }} />
          <div className="shade" />
          <div className="copy">
            <div className="inner">
              <p className="lede display">“Isn't over $400 million in TID city cost obligations enough for roughly 21,000 households?”</p>
              <p className="kicker ui" style={{ marginTop: 16 }}>Lisa Salgado · Ellis neighborhood</p>
            </div>
          </div>
        </section>
      </article>

      <Lakefront />

      <section id="brief" className="poster">
        <img className="fill" src={COVER} alt="" style={{ objectPosition: "50% 60%" }} />
        <div className="shade" />
        <div className="copy">
          <div className="inner">
            <p className="kicker brief-font">The Sheboygan Brief</p>
            <h2 className="brief-display">149 Short</h2>
            <p className="lede brief-font" style={{ fontStyle: "normal" }}>A petition dies on procedure, a plant takes 34 acres, and a riverfront idea waits another year.</p>
            <p className="brief-font" style={{ marginTop: 12, fontSize: 13, opacity: 0.7 }}>Mara Novak & Ben Keller · Late August 2026</p>
            <audio controls preload="metadata" src={AUDIO} style={{ width: "100%", marginTop: 18, maxWidth: 420 }} />
            <p className="brief-font" style={{ marginTop: 14, fontSize: 13 }}>
              <a href="https://www.shevegas.org/">Open the full Brief on shevegas.org</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="desk ui" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>
        <span className="display" style={{ fontSize: 18, letterSpacing: 0, textTransform: "none", color: "var(--on)" }}>SheVegas</span>
        <span>
          <a href="#water" style={{ textDecoration: "none" }}>Lakefront</a>
          {" · "}
          <a href="https://shevegas.org" style={{ textDecoration: "none" }}>shevegas.org</a>
          {" · Art by Mike Brunette"}
        </span>
      </footer>
    </>
  )
}
