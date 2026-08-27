const WATER =
  "https://cdn.jsdelivr.net/gh/ishevegas-max/sheboyganite@41ef5ea/live"
const PACKET =
  "https://mccmeetings.blob.core.usgovcloudapi.net/sheboygnwi-pubu/MEET-Packet-e722495ab18c470f8a186bbc730ff4fd.pdf"

const zones = [
  { n: "01", zone: "Southside shore", measure: "1.14 miles", money: "$11.9M · FEMA + wastewater", what: "Stone armor and a 12-foot access road on top of a 1930 sewer." },
  { n: "02", zone: "Kite Beach", measure: "210 apartments", money: "TID 21 · tax increment", what: "Malibu takes the grass lot. The sand stays. The launch does not." },
  { n: "03", zone: "Harbor Centre", measure: "Phase one", money: "$77M vision · marina ledger", what: "Docks, the admin building, parking. Same shoreline, third budget." },
]

const facts = [
  ["Wild shore going", "1.14 mi"],
  ["Access road", "12 ft"],
  ["Interceptor job", "$11.9M"],
  ["FEMA share", "$7.8M"],
  ["Called ineligible", "$1.82M"],
  ["Window", "2023–28"],
]

const split = [
  { w: "65.5%", bg: "var(--on)", label: "FEMA hazard grant", amt: "$7.8M" },
  { w: "19.2%", bg: "rgba(244,239,230,.45)", label: "Wastewater / city match", amt: "$2.3M" },
  { w: "15.3%", bg: "var(--crimson)", label: "FEMA called ineligible", amt: "$1.82M" },
]

export default function Lakefront() {
  return (
    <section id="water">
      <div className="poster">
        <img className="fill" src={`${WATER}/images/groin-wide.jpg`} alt="" style={{ objectPosition: "60% 50%" }} />
        <div className="shade" />
        <div className="copy">
          <div className="inner">
            <p className="kicker ui">The Sheboygan Lakefront Series · 4 dispatches</p>
            <h2 className="display">How the lakefront is changing.</h2>
            <p className="lede display">One shore. Three budgets. A road on the water, a launch that loses its lot, a marina vision still waiting on the rest of the money.</p>
          </div>
        </div>
      </div>

      <div className="zones">
        {zones.map((z) => (
          <article key={z.n}>
            <p className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.5 }}>Zone {z.n}</p>
            <h3 className="display" style={{ margin: "8px 0 0", fontSize: 28, fontWeight: 500 }}>{z.zone}</h3>
            <p className="display" style={{ margin: "12px 0 0", fontSize: 32 }}>{z.measure}</p>
            <p className="ui" style={{ margin: "4px 0 0", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.55 }}>{z.money}</p>
            <p className="ui" style={{ margin: "16px 0 0", maxWidth: 360, fontSize: 14, lineHeight: 1.5, opacity: 0.8 }}>{z.what}</p>
          </article>
        ))}
      </div>
      <dl className="facts">
        {facts.map(([k, v]) => (
          <div key={k}>
            <dt className="ui" style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.45 }}>{k}</dt>
            <dd className="display" style={{ margin: "4px 0 0", fontSize: 22 }}>{v}</dd>
          </div>
        ))}
      </dl>
      <div className="cell">
        <div className="inner">
          <p className="kicker ui">$11.9 million interceptor · how FEMA split it</p>
          <div className="split" aria-hidden="true">
            {split.map((s) => (
              <i key={s.label} style={{ width: s.w, background: s.bg }} />
            ))}
          </div>
          <ul className="legend">
            {split.map((s) => (
              <li key={s.label}>
                <span className="ui"><i className="swatch" style={{ background: s.bg }} />{s.label}</span>
                <span className="display" style={{ fontSize: 18 }}>{s.amt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <article id="southside" className="poster">
        <img className="fill" src={`${WATER}/images/groin-peace.jpg`} alt="Mike Brunette on the southside groin" />
        <div className="shade" />
        <div className="copy">
          <div className="inner">
            <p className="kicker ui">Lakefront · 1 of 4</p>
            <h2 className="display">The southside is about to become a road</h2>
            <p className="lede display">About 6,000 feet of lakeshore gets a stone revetment. On top of that, a 12-foot crushed-stone access road. The whole job is $11.9 million. FEMA puts in $7.8 million.</p>
          </div>
        </div>
      </article>
      <div className="cell">
        <div className="inner">
          <p>If you've walked the shoreline south of King Park any time in the last forty years, you know the routine: pick your way down the bank, follow the narrow strip of sand, watch the manholes. Those concrete cylinders are the lids of a 96-year-old secret — the southside interceptor, a trunk sewer buried since 1930.</p>
          <p>That shoreline is about to be gone. Not eroded away. Replaced. On purpose, with federal money, by design. $1.82 million FEMA marked ineligible includes enlarging the parking lot at High Avenue.</p>
          <p>A tourism amenity wearing a hard hat. The sewer protection is real. The parking lot is the play.</p>
        </div>
      </div>

      <article id="kite" className="poster">
        <video className="fill" autoPlay muted loop playsInline poster={`${WATER}/images/kite-lot.jpg`} src={`${WATER}/video/kite-beach.mp4`} />
        <div className="shade" />
        <div className="copy">
          <div className="inner">
            <p className="kicker ui">Lakefront · 2 of 4</p>
            <h2 className="display">Malibu is what's ending Kite Beach</h2>
            <p className="lede display">210 apartments take the grass lot. The sand stays public by contract. The sand without the lot is a beach you can look at. It is not a launch.</p>
          </div>
        </div>
      </article>

      <article id="ledgers" className="poster">
        <video className="fill" autoPlay muted loop playsInline poster={`${WATER}/images/marina-mike.jpg`} src={`${WATER}/video/marina.mp4`} />
        <div className="shade" />
        <div className="copy">
          <div className="inner">
            <p className="kicker ui">Lakefront · 3 of 4</p>
            <h2 className="display">Three ledgers. One appetite.</h2>
            <p className="lede display">TID 21 pays Malibu and marina design. Wastewater plus FEMA pays the interceptor. Harbor Centre sits inside a $77 million vision. Only phase one is funded.</p>
          </div>
        </div>
      </article>

      <article id="wild" className="poster">
        <img className="fill" src={`${WATER}/images/groin-wide.jpg`} alt="Southside shore" />
        <div className="shade" />
        <div className="copy">
          <div className="inner">
            <p className="kicker ui">Lakefront · 4 of 4</p>
            <h2 className="display">1.14 miles of wild shore, gone</h2>
            <p className="lede display">A crushed-stone access road is not a trail. It is a road. It is 12 feet wide. It is being built with hazard money on top of a sewer.</p>
            <p className="ui" style={{ marginTop: 18, fontSize: 13, opacity: 0.6 }}>
              Source: <a href={PACKET} target="_blank" rel="noreferrer">July 27, 2026 Public Works packet</a>. Drone: Mike Brunette.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}
