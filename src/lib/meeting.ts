export const VIDEO_ID = "7TqK79kAxOo";
export const MEETING_DATE = "August 26, 2026";
export const MEETING_CLOCK = "4:00–5:07 p.m.";
export const MEETING_PLACE =
  "City Hall, 3rd Floor Council Chambers, 828 Center Avenue, Sheboygan, WI";

export type Clip = {
  id: string;
  n: string;
  start: number;
  clock: string;
  speaker: string;
  role: string;
  title: string;
  quote: string;
  annotation: string;
};

export const clips: Clip[] = [
  {
    id: "gavel",
    n: "01",
    start: 197,
    clock: "4:00 p.m.",
    speaker: "Chair",
    role: "Plan Commission",
    title: "Five present, one empty chair",
    quote:
      "It is 4 o’clock. I will call our plan commission meeting to order.",
    annotation:
      "Mike, Kevin, Joe, Kim, and Braden answer present. Jerry is excused. No conflicts noted. The room is already running on a workday clock.",
  },
  {
    id: "hours",
    n: "02",
    start: 276,
    clock: "4:04 p.m.",
    speaker: "Lisa Salgado",
    role: "Ellis Neighborhood",
    title: "The only public comment",
    quote:
      "I’m disappointed that the city held two meetings on these TIDs today during work hours on the same day when a lot of residents could not attend.",
    annotation:
      "A Joint Review Board session had already met at 8 a.m. She is the only resident who steps to the microphone for either public hearing.",
  },
  {
    id: "four-hundred",
    n: "03",
    start: 295,
    clock: "4:05 p.m.",
    speaker: "Lisa Salgado",
    role: "Ellis Neighborhood",
    title: "The $400 million question",
    quote:
      "Isn’t over $400 million in TID city cost obligations enough for roughly 21,000 households in Sheboygan? When is the spending going to stop?",
    annotation:
      "She is describing the city’s stacked tax-increment districts as a household-level load, not an abstract downtown tool. Nobody answers her in the hearing.",
  },
  {
    id: "sample",
    n: "04",
    start: 313,
    clock: "4:05 p.m.",
    speaker: "Lisa Salgado",
    role: "Ellis Neighborhood",
    title: "The page that says “sample”",
    quote:
      "State statute requires an attorney’s opinion that this plan is completely and legally compliant. Why does the page say sample? Where is our verified legal statement?",
    annotation:
      "Later, when the action item comes up, a commissioner flags the same page. Ehlers says the city attorney has reviewed it. The packet still went out with a sample letter.",
  },
  {
    id: "eighty-five",
    n: "05",
    start: 374,
    clock: "4:06 p.m.",
    speaker: "Lisa Salgado",
    role: "Ellis Neighborhood",
    title: "$85 million off the cash-flow page",
    quote:
      "Last year it showed four G.O. promissory notes. Principal $79.9 million, interest $52 million, total debt service $132 million. Today the total debt service is down to $47 million. That is a reduction of $85 million in a little more than a year. So what changed?",
    annotation:
      "The August 2026 cash flow, she says, no longer shows those four notes. The consultant later tells the commission eligible project costs are unchanged at a $182.4 million cap. The line-by-line comparison she asked for never happens in the room.",
  },
  {
    id: "incentives",
    n: "06",
    start: 422,
    clock: "4:07 p.m.",
    speaker: "Lisa Salgado",
    role: "Ellis Neighborhood",
    title: "Incentives up $28 million, plan says “no changes”",
    quote:
      "The amount of developer incentives included in TID 21’s projected cash flow increased by $28.2 million. Why did the August 2026 cash flow suddenly add another $22 million labeled potential future incentive allowance even though amendment number two says no changes to project costs are planned?",
    annotation:
      "She also flags administration costs rising from $545,000 to $1.9 million. The amendment’s own language — “no changes to eligible project costs” — is the trap she is pointing at.",
  },
  {
    id: "cushion",
    n: "07",
    start: 560,
    clock: "4:10 p.m.",
    speaker: "Lisa Salgado",
    role: "Ellis Neighborhood",
    title: "A $149,334 cushion over 20 years",
    quote:
      "There is a thin financial margin of only $149,334 as a cushion over the next 20 years. The TID cash balance is projected to remain negative through 2045. The $2 million developer incentive consumes nearly two-thirds of all projected revenue.",
    annotation:
      "That is TID 27, the new industrial district for Northland Plastics. Sixty-three percent of every projected increment dollar is earmarked for incentives. Staff will later call the incentive pay-as-you-go.",
  },
  {
    id: "fortress",
    n: "08",
    start: 1500,
    clock: "later",
    speaker: "Commissioner Joe",
    role: "Plan Commission",
    title: "The only thing that didn’t sail through",
    quote:
      "It essentially makes the property fairly fortress-like. I’m not sure if that’s the feel that the neighbors would want for that site directly across from the park.",
    annotation:
      "A fence at 120 Worth Boulevard gets more back-and-forth than either tax district. The commission votes it a substantial change and sends it to a public hearing. One abstention. Everything else is approved on a chorus of ayes.",
  },
];

export type Beat = {
  time: string;
  title: string;
  detail: string;
  result: "approved" | "hearing" | "tabled" | "noted";
};

export const timeline: Beat[] = [
  {
    time: "4:00",
    title: "Call to order",
    detail: "Pledge. Five members present. Jerry excused. Minutes approved.",
    result: "noted",
  },
  {
    time: "4:04",
    title: "Hearing: TID 21 boundary amendment",
    detail:
      "Lisa Salgado is the only speaker. She gets three minutes, plus a wrap-up. Hearing closed.",
    result: "hearing",
  },
  {
    time: "4:10",
    title: "Hearing: create TID 27",
    detail:
      "Salgado again. Thin margin, negative cash through 2045, 63% incentives, “advance from utilities.” Hearing closed.",
    result: "hearing",
  },
  {
    time: "4:15",
    title: "Paper Box remodel",
    detail:
      "1505 Sibi Court. Vertical aluminum to McElroy metal. Owner says AI renderings invented a door and deleted a neighbor. Approved.",
    result: "approved",
  },
  {
    time: "4:20",
    title: "Northland Plastics building",
    detail:
      "72,152 sq ft industrial building at Weeden Creek and CTH A, optional bay to 90,142. Approved, then the architecture is approved again as submitted.",
    result: "approved",
  },
  {
    time: "4:28",
    title: "120 Worth Boulevard fence",
    detail:
      "Is a taller, more opaque fence a minor tweak or a substantial change? Commissioners call it fortress-like. Public hearing required. Item 11 tabled.",
    result: "tabled",
  },
  {
    time: "4:40",
    title: "TID 21 approved",
    detail:
      "Ehlers: add 7.44 acres, $182.4 million cost cap unchanged, under the 12% test. Unanimous.",
    result: "approved",
  },
  {
    time: "4:50",
    title: "TID 27 approved",
    detail:
      "New 20-year industrial district. $3 million in project costs, $2 million potential incentive. Unanimous. Next stop: Common Council on September 21.",
    result: "approved",
  },
  {
    time: "5:00",
    title: "Comprehensive plan",
    detail:
      "Ninth engagement session. Contradictory transit feedback. Draft meets statute. Hearing notice to be published.",
    result: "noted",
  },
  {
    time: "5:07",
    title: "Adjourned",
    detail: "Sixty-seven minutes, two new or expanded TIDs, one fence held back.",
    result: "noted",
  },
];

export const tid21 = {
  name: "TID 21 — Downtown",
  action: "Boundary amendment",
  acres: "7.44 acres added",
  cap: 182_418_000,
  capLabel: "$182.4M",
  incentivesWas: 19_000_000,
  incentivesNow: 47_000_000,
  adminWas: 545_000,
  adminNow: 1_900_000,
  debtWas: 132_000_000,
  debtNow: 47_000_000,
  cityValue: "$6.61B",
  incrementShare: "~$202M of city incremental value in TIDs",
  headroom: "3.66% capacity left under the 12% cap",
};

export const tid27 = {
  name: "TID 27 — Northland Plastics",
  action: "New industrial district",
  acres: "36 acres",
  building: "72,152 sq ft (optional 90,142)",
  costs: 3_000_000,
  incentive: 2_000_000,
  revenue: 3_100_000,
  water: 650_000,
  interest: 320_000,
  cushion: 149_334,
  incentiveShare: 0.63,
  negativeThrough: "2045",
  close: "20 years",
  base: 234_000,
};
