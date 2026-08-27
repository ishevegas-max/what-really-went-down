import { Tape } from "@/components/tape";

export function Story() {
  return (
    <article id="story" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="mx-auto max-w-2xl">
            <p className="font-ui text-[11px] font-medium uppercase tracking-[0.22em] text-crimson">
              The briefing
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              A workday hearing, a stacked agenda, and a unanimous yes.
            </h2>

            <p className="drop-cap mt-8 text-[1.05rem] leading-[1.7] text-ink">
              The Sheboygan Plan Commission did not have a long night. It had a
              4 p.m. Wednesday. On the official WSCS recording posted the same
              evening —{" "}
              <a
                className="underline decoration-rule underline-offset-4 transition-colors hover:decoration-crimson"
                href="https://www.youtube.com/watch?v=7TqK79kAxOo"
                target="_blank"
                rel="noreferrer"
              >
                Plan Commission 2026 08 26
              </a>{" "}
              — the chair calls the meeting at 4:00, notes that Jerry is
              excused, and moves through two tax-increment hearings, three
              architectural approvals, a fight over a fence, and a comprehensive
              plan update. They adjourn at 5:07.
            </p>

            <p className="mt-5 text-[1.05rem] leading-[1.7]">
              What the agenda does not show is the shape of the hour. One
              resident, Lisa Salgado of the Ellis neighborhood, used both public
              hearings. She arrived with page numbers. She left with no second
              speaker behind her. Then the commission approved both districts
              without a dissenting vote.
            </p>

            <Tape
              className="my-10"
              src="/video/rocks.mp4"
              poster="/images/rocks.jpg"
              caption="Harbor rocks. Unmute for the walk."
            />

            <h3 className="mt-12 font-display text-2xl font-medium tracking-tight">
              The questions that did not travel
            </h3>
            <p className="mt-4 text-[1.05rem] leading-[1.7]">
              Salgado’s first round was about TID 21, the downtown district.
              She was not arguing a vibe. She was arguing a packet. The May 2025
              plan, she said, showed four general-obligation promissory notes —
              $79.9 million in principal, $52 million in interest, $132 million
              in total debt service. The August 2026 cash-flow page showed $47
              million. “That is a reduction of $85 million in a little more than
              a year. So what changed?”
            </p>
            <p className="mt-5 text-[1.05rem] leading-[1.7]">
              She kept going. Developer incentives in the projected cash flow,
              she said, rose from about $19 million to about $47 million.
              Administration costs from $545,000 to $1.9 million. A new $22
              million line labeled “potential future incentive allowance,” even
              as the amendment text said no changes to project costs were
              planned. Last year’s language promised the district would pay off
              all project costs, liabilities, and obligations. This year’s
              version, she said, would pay off “portions.”
            </p>
            <p className="mt-5 text-[1.05rem] leading-[1.7]">
              And the attorney letter. Wisconsin statute wants an opinion that
              the plan is legally complete. The page in the packet said
              “sample.” “Where is our verified legal statement?”
            </p>

            <blockquote className="my-10 border-l-2 border-crimson pl-5 font-display text-2xl font-medium italic leading-snug text-ink">
              “Isn’t over $400 million in TID city cost obligations enough for
              roughly 21,000 households in Sheboygan?”
              <footer className="mt-3 font-ui text-xs not-italic uppercase tracking-[0.14em] text-muted">
                Lisa Salgado, public hearing on TID 21
              </footer>
            </blockquote>

            <p className="text-[1.05rem] leading-[1.7]">
              When the hearing closed, nobody else had spoken. The commission
              did not interrogate those figures in the hearing itself. The
              answers, such as they were, arrived later as a consultant
              presentation.
            </p>

            <h3 className="mt-12 font-display text-2xl font-medium tracking-tight">
              What Ehlers told the room
            </h3>
            <p className="mt-4 text-[1.05rem] leading-[1.7]">
              Greg, a municipal advisor with Ehlers — the firm on the city’s
              TID documents — described a boundary amendment adding 7.44 acres
              to TID 21 for future redevelopment, including three publicly owned
              parcels with no value coming over from TID 17. Eligible project
              costs, he said, stay capped at $182,418,000. No new debt in this
              amendment. Pay-as-you-go incentives tied to development
              agreements, so the city is not on the hook if increment falls
              short. The 12% valuation test still has headroom: existing TID
              incremental value plus the added territory around $202 million,
              against a city equalized value of $6.61 billion, leaving 3.66%
              capacity.
            </p>
            <p className="mt-5 text-[1.05rem] leading-[1.7]">
              A commissioner did ask about the sample attorney letter. Greg said
              the city attorney had reviewed the plan, with additional legal
              eyes. Staff said the extra acres were for the 2019 Riverbend
              Neighborhood Plan, not a named project sitting in the packet.
              Braden moved approval. It passed.
            </p>
            <p className="mt-5 text-[1.05rem] leading-[1.7]">
              That is the honest split in the tape. Salgado asked why the
              cash-flow pages moved. The consultant explained the cap, the
              statutory test, and the incentive structure. Those are not the
              same conversation. In 67 minutes, the room never made them one.
            </p>

            <figure className="my-10">
              <img
                src="/images/path.jpg"
                alt="Cracked paved path with a fallen scooter"
                className="max-h-[32rem] w-full rounded-lg object-cover object-bottom"
              />
              <figcaption className="mt-3 font-ui text-xs leading-relaxed text-muted">
                The path.
              </figcaption>
            </figure>

            <h3 className="mt-12 font-display text-2xl font-medium tracking-tight">
              A new district that runs red until 2045
            </h3>
            <p className="mt-4 text-[1.05rem] leading-[1.7]">
              TID 27 is smaller money and a cleaner story, which is why the
              thinness of it is so easy to miss. Northland Plastics wants a
              72,152-square-foot plant on 36 acres at Weeden Creek Road and
              County Highway A, with an optional bay that would push the
              building to 90,142. The company has been in town since 1953.
              Director Zer called it like-for-like manufacturing. The building
              and its architecture were approved earlier in the same meeting,
              almost without discussion.
            </p>
            <p className="mt-5 text-[1.05rem] leading-[1.7]">
              The district in front of the commission: about $3 million in
              project costs, including $650,000 for water and sewer, a potential
              $2 million developer incentive still subject to a development
              agreement, and enough interest and admin to matter. Projected
              increment: about $3.1 million over the life of a 20-year district.
              Base value on the land: $234,000. Incremental value assumed: $10
              million.
            </p>
            <p className="mt-5 text-[1.05rem] leading-[1.7]">
              Salgado’s second three minutes were a close read of page 25. Cash
              balance negative from 2026 through 2045, turning positive in 2046,
              finishing at that $149,334 cushion in 2047. The $2 million
              incentive is 63% of projected revenue. The plan, she noted, lets
              project costs move without coming back for an amendment, and it
              lets sewer work outside the district count if it is “necessary to
              implement the plan.” She asked what “advance from utilities”
              actually means, and whether the $650,000 is a slice of a much
              larger Weeden Creek water project.
            </p>
            <p className="mt-5 text-[1.05rem] leading-[1.7]">
              Staff’s later answers: a utility advance is money repaid with
              interest, an alternative to issuing debt. The incentive is
              pay-as-you-go, with milestones, and is not a city obligation if
              revenue never arrives. Water and sewer last more than 50 years and
              keep generating utility revenue after the TID closes. There is not
              yet a development agreement. Braden moved approval. It passed.
              Next stop is Common Council on September 21, then the Joint Review
              Board.
            </p>

            <h3 className="mt-12 font-display text-2xl font-medium tracking-tight">
              The fortress
            </h3>
            <p className="mt-4 text-[1.05rem] leading-[1.7]">
              The longest argument of the afternoon was not about either
              district. It was about a fence.
            </p>
          </div>

          <aside className="lg:pt-16">
            <div className="lg:sticky lg:top-6 space-y-4">
              <div className="rounded-lg border border-rule bg-surface p-5">
                <p className="font-ui text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                  In the room
                </p>
                <ul className="mt-3 space-y-2 font-ui text-sm leading-relaxed">
                  <li>Present: Mike, Kevin, Joe, Kim, Braden</li>
                  <li>Excused: Jerry</li>
                  <li>Public: Lisa Salgado</li>
                  <li>Staff: Director Zer, Elise</li>
                  <li>Consultant: Greg, Ehlers</li>
                </ul>
              </div>
              <div className="rounded-lg border border-rule bg-surface p-5">
                <p className="font-ui text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                  How to read this
                </p>
                <p className="mt-3 font-ui text-sm leading-relaxed text-muted">
                  Quotes are from the WSCS recording. Financial figures are what
                  was said in the room or published in city TID filings, not an
                  independent audit. Discrepancies Salgado flagged are her
                  comparison of the May 2025 and August 2026 packets.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <figure className="mx-auto mt-6 max-w-4xl">
          <img
            src="/images/weill.jpg"
            alt="Weill Center doors with posters for The Book of Mormon and Dolly Parton’s Smoky Mountain Christmas Carol"
            className="w-full rounded-lg object-cover"
          />
          <figcaption className="mt-3 font-ui text-xs leading-relaxed text-muted">
            Weill Center. Broadway is back. Dolly in November.
          </figcaption>
        </figure>

        <div className="mx-auto mt-10 max-w-2xl">
          <p className="text-[1.05rem] leading-[1.7]">
            Rachel Kohler’s specific implementation plan already had an
            approval. The new drawing asked for height and opacity the ordinance
            does not give as of right. Joe said the south line, across from a
            park, would change how the property sat in the neighborhood. Kevin
            wanted the fence pulled off the property line so plantings could
            soften it. Kim wondered what happens when more lots on the block
            are bought — does the barrier just keep walking?
          </p>
          <p className="mt-5 text-[1.05rem] leading-[1.7]">
            The architect, John Joyce of GMX, said the south fence faces the
            park, not a neighbor; the west line toward houses is open metal;
            there is a 20-foot setback and landscaping meant to screen it. Staff
            laid out the fork: minor change, vote tonight; substantial change,
            public hearing, table item 11.
          </p>
          <p className="mt-5 text-[1.05rem] leading-[1.7]">
            Joe moved substantial. Alder Close seconded. Ayes, with one
            abstention. It was the only item all afternoon that the commission
            refused to finish in the room.
          </p>

          <Tape
            className="my-10"
            src="/video/swing.mp4"
            poster="/images/swing.jpg"
            caption="Downtown playground. Unmute if you want the room tone."
          />

          <h3 className="mt-12 font-display text-2xl font-medium tracking-tight">
            Everything else was easy
          </h3>
          <p className="mt-4 text-[1.05rem] leading-[1.7]">
            Paper Box and Specialty, a 1960s industrial facade, is swapping dead
            green aluminum for McElroy metal in patina green. Owner Joe
            Vanderpie had to explain that the AI renderings in the packet had
            invented a door and, on one page, deleted the building next door.
            “AI taking over,” a commissioner said. Approved.
          </p>
          <p className="mt-5 text-[1.05rem] leading-[1.7]">
            Then the comprehensive plan. Director Zer reported a ninth
            engagement session, about 50 people, and the usual split brain of a
            small city: do not expand transit, and also please run buses to
            Plymouth, Johnsonville, the airport, and Brewers games. Alder Close
            wanted measurable goals, especially on housing. Braden preferred to
            keep the comprehensive plan statutory and put the fight in a
            strategic plan that does not yet exist. Consensus: publish the
            hearing notice.
          </p>

          <figure className="my-10">
            <img
              src="/images/marina.jpg"
              alt="Sheboygan marina behind the harbor breakwater"
              className="w-full rounded-lg object-cover"
            />
            <figcaption className="mt-3 font-ui text-xs leading-relaxed text-muted">
              The harbor behind the rocks.
            </figcaption>
          </figure>

          <h3 className="mt-12 font-display text-2xl font-medium tracking-tight">
            Why this meeting was never only this meeting
          </h3>
          <p className="mt-4 text-[1.05rem] leading-[1.7]">
            Salgado is not a one-afternoon critic. In May she helped launch a
            direct-legislation petition that would force a citywide referendum
            before Sheboygan commits $10 million or more in TID project costs,
            or $5 million or more in developer incentives. It is modeled on Port
            Washington, where voters moved after a massive data-center TID.
            Organizers have argued the city collected about $17 million in
            property taxes in 2025 against hundreds of millions in
            TID-related obligations, and that several TID 21 and 23 projects are
            already behind schedule. Mayor Ryan Sorenson has called the petition
            an “obstructionist approach” that would scare off housing and
            investment.
          </p>
          <p className="mt-5 text-[1.05rem] leading-[1.7]">
            That is the frame she carried into a 4 p.m. hearing most people
            could not attend. TID 27’s $2 million incentive sits under her
            proposed $5 million trigger. TID 21’s $182 million cap does not.
            The petition, if it becomes law, would not rewind Wednesday. It
            would change who gets a vote the next time a packet this large
            lands.
          </p>
          <p className="mt-5 text-[1.05rem] leading-[1.7]">
            What really went down is smaller and sharper than a conspiracy and
            larger than a routine consent agenda. A local manufacturer got a
            path to expand. Downtown kept a giant district’s room to grow. A
            neighbor’s fence was the one thing the commission decided the public
            still needed to see. And the only resident who showed up spent six
            minutes reading the pages the rest of the city was at work too late
            to read with her.
          </p>
        </div>
      </div>
    </article>
  );
}
