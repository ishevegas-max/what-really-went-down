export type Chapter = {
  id: string;
  title: string;
  start: number;
  dek: string;
};

export type Line = {
  speaker: "Mara" | "Ben";
  text: string;
};

const BRIEF =
  "https://raw.githubusercontent.com/ishevegas-max/the-sheboygan-brief/main/public";

export const EPISODE = {
  show: "The Sheboygan Brief",
  title: "149 Short",
  dek: "A petition dies on procedure, a plant takes 34 acres, and a riverfront idea waits another year.",
  dateLabel: "Late August 2026",
  location: "Sheboygan, Wisconsin",
  hosts: "Mara Novak & Ben Keller",
  audioSrc: `${BRIEF}/episodes/sheboygan-brief-late-august-2026.mp3`,
  coverSrc: `${BRIEF}/covers/episode-001.jpg`,
  duration: 339.7,
  storageKey: "sheboygan-brief:ep-001:time",
  chapters: [
    {
      id: "open",
      title: "Cold open",
      start: 0,
      dek: "The week in one breath.",
    },
    {
      id: "tif",
      title: "The TIF petition",
      start: 21,
      dek: "2,450 valid names. 149 short.",
    },
    {
      id: "plastics",
      title: "Northland Plastics",
      start: 137,
      dek: "34 acres off Wilson, unanimous.",
    },
    {
      id: "crash",
      title: "A fatal crash",
      start: 178,
      dek: "A 14-year-old girl is gone.",
    },
    {
      id: "i43",
      title: "I-43 construction",
      start: 216,
      dek: "Wisconsin 23 closes for 35 days.",
    },
    {
      id: "bridge",
      title: "The swing bridge",
      start: 259,
      dek: "Floated in 2007. Still a drawing.",
    },
    {
      id: "notes",
      title: "Quick notes",
      start: 295,
      dek: "A poet laureate, new principals, Erie noise.",
    },
  ] satisfies Chapter[],
  transcript: [
    {
      speaker: "Mara",
      text: "From City Hall to the interstate, this is the week Sheboygan's biggest political fight, a major factory expansion, and one heartbreaking crash all hit at once. I'm Mara Novak.",
    },
    {
      speaker: "Ben",
      text: "And I'm Ben Keller. You're listening to The Sheboygan Brief for late August, 2026. A short, honest pass through the stories that actually moved this week.",
    },
    {
      speaker: "Mara",
      text: "We start with the TIF petition. The one a lot of people thought might force a citywide vote on the biggest tax-increment deals. It is over. At least for now.",
    },
    {
      speaker: "Ben",
      text: "On August 21st, a Sheboygan County Circuit Court judge denied an emergency injunction. Organizers wanted one extra day to collect signatures for a direct-legislation petition. That petition would have required voter approval of large TIF projects. TIF is tax increment financing, the tool cities use to subsidize development with future property-tax growth.",
    },
    {
      speaker: "Mara",
      text: "They turned in about 2,702 signatures. Only 2,450 were ruled valid. The bar was 2,599. They were 149 short.",
    },
    {
      speaker: "Ben",
      text: "149. That is not a landslide miss. That is a Saturday of clipboards.",
    },
    {
      speaker: "Mara",
      text: "The organizers say it was not just a numbers problem. They allege City Attorney Liz Majerus interfered with their First Amendment rights on July 14th. They say she told them they could not collect signatures near City Hall's main entrance, and pushed them out to a public sidewalk where nobody was walking by.",
    },
    {
      speaker: "Ben",
      text: "Judge George Limbeck had already spoken to part of that on August 11th. He ruled he did not have the authority to change state petition deadlines. And he noted the city blocked them from one spot, not from the entire city.",
    },
    {
      speaker: "Mara",
      text: "So the legal theory is this. Even if that doorway was a bad place to be moved from, the clock still ran, and the judge would not rewind it.",
    },
    {
      speaker: "Ben",
      text: "Mayor Ryan Sorenson has been a vocal opponent of the petition from the start. He warned it would be detrimental to the long-term economic health of the city.",
    },
    {
      speaker: "Mara",
      text: "That is the heart of the fight. One side wants voters to sign off before the city commits the big TIF packages. The other side says that kind of referendum would freeze deals and scare off employers. This week, the mayor's side won on procedure, not on a public vote.",
    },
    {
      speaker: "Ben",
      text: "Which brings us to an employer that just got a green light.",
    },
    {
      speaker: "Mara",
      text: "Northland Plastics. The Common Council unanimously approved annexing about 34 acres from the Town of Wilson, along Interstate 43, so the company can relocate and expand its headquarters and manufacturing.",
    },
    {
      speaker: "Ben",
      text: "The Plan Commission signed off on July 28th. Council made it final on August 3rd. No drama in the chamber. A clean, unanimous vote.",
    },
    {
      speaker: "Mara",
      text: "If you live on the Wilson side of that line, annexation is never abstract. It is whose tax base, whose services, whose future industrial neighbor. For the city, it is a jobs and expansion story sitting right on the interstate.",
    },
    {
      speaker: "Ben",
      text: "We need to stop here for a harder story. On August 6th, a 14-year-old girl was killed, and a 13-year-old was injured, in an e-bike crash in Sheboygan.",
    },
    {
      speaker: "Mara",
      text: "Authorities say the teens failed to stop at a stop sign. That is the official account. We are not going to dress it up, and we are not going to name them. A family lost a child. Another family is sitting with an injured kid. That is the whole story that matters.",
    },
    {
      speaker: "Ben",
      text: "E-bikes are fast, quiet, and everywhere now, including with teenagers who are still learning the road. This is a reminder with the worst possible cost.",
    },
    {
      speaker: "Mara",
      text: "Construction is also reshaping how people move through the county. Wisconsin D.O.T.'s Interstate 43 resurfacing and bridge work is still underway through Sheboygan County.",
    },
    {
      speaker: "Ben",
      text: "A 35-day closure of the Wisconsin 23 bridge started August 20th. Detours are up. If your commute uses that crossing, it is going to feel like a different map for more than a month.",
    },
    {
      speaker: "Mara",
      text: "The job itself is pavement overlay, bridge maintenance, and guardrail replacement, from Wilson Lima Road to Wisconsin 42. Scheduled finish is November 2026.",
    },
    {
      speaker: "Ben",
      text: "So this is not a new interstate. It is a rebuild of the one we have, with a real closure in the middle of it. Budget the extra time.",
    },
    {
      speaker: "Mara",
      text: "And then there is the project Sheboygan has been talking about since before some of those teenagers were born. The proposed Sheboygan River pedestrian swing bridge.",
    },
    {
      speaker: "Ben",
      text: "First floated in 2007. Still in planning. The city hosted a public open house on June 10th. Photos from early August show the riverfront stretch where it may eventually go.",
    },
    {
      speaker: "Mara",
      text: "A swing bridge would open for river traffic and close for people on foot and bike. It is the kind of civic amenity that photographs beautifully and takes a generation to actually build. Nineteen years in, it is still a proposal.",
    },
    {
      speaker: "Ben",
      text: "A few other notes before we let you go.",
    },
    {
      speaker: "Mara",
      text: "Mayor Sorenson named Anneliese Finke as Sheboygan's new Poet Laureate.",
    },
    {
      speaker: "Ben",
      text: "Two Sheboygan schools will start the 2026-27 year with new principals.",
    },
    {
      speaker: "Mara",
      text: "And the Sheboygan Press printed a letter questioning the noise coming off the Erie Avenue construction. If you live along that corridor, you already knew.",
    },
    {
      speaker: "Ben",
      text: "That is the week. A petition that died 149 signatures short. A plastics plant moving onto 34 annexed acres. A fatal e-bike crash. A 35-day bridge closure. And a pedestrian bridge still waiting on the river.",
    },
    {
      speaker: "Mara",
      text: "I'm Mara Novak.",
    },
    {
      speaker: "Ben",
      text: "I'm Ben Keller. This was The Sheboygan Brief. We'll be back when the city moves again.",
    },
  ] satisfies Line[],
} as const;

export function chapterAt(time: number) {
  let current = EPISODE.chapters[0];
  for (const ch of EPISODE.chapters) {
    if (time >= ch.start) current = ch;
  }
  return current;
}
