export type ArticleBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "lead"; text: string }
  | { type: "pullquote"; text: string; attribution?: string }
  | { type: "callout"; label: string; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "divider" };

export type Article = {
  slug: string;
  series: string;
  sectionNumber: number;
  totalInSeries: number;
  title: string;
  dek: string;
  publishedAt: string;
  readingMinutes: number;
  body: ArticleBlock[];
};

export const series = {
  name: "The Franchise Architect",
  description:
    "Strategic logic and market positioning of Şevketullah Ölmez — a seven-part dossier on how repetition becomes infrastructure.",
  publishedAt: "2026-05-06",
  hq: "Edinburgh",
};

export const articles: Article[] = [
  {
    slug: "the-founders-blueprint",
    series: series.name,
    sectionNumber: 1,
    totalInSeries: 7,
    title: "The Founder's Blueprint",
    dek: "Why a systems-first mind is built in three cities, not one.",
    publishedAt: "2026-05-06",
    readingMinutes: 4,
    body: [
      {
        type: "lead",
        text: "To understand the operational precision of SevetTeam, one must first deconstruct the systems-first mindset of its architect, Şevketullah Ölmez. His methodology is a clinical rejection of emotional business models, born from a life shaped by geographical displacement and the search for structural stability.",
      },
      {
        type: "paragraph",
        text: "Sevet's identity is tiered into three distinct market-adapted layers. Şevketullah is the name of his roots and his father's discipline. Şevket is the streamlined business identity. Sevet is the university nickname in England that became a private identity for those who understand the machine before the brand.",
      },
      { type: "heading", level: 2, text: "Three cities. Three lessons." },
      {
        type: "callout",
        label: "Ankara · Turkey",
        text: "The roots. Hard discipline, personal responsibility, and the uncompromising nature of the father's world.",
      },
      {
        type: "callout",
        label: "England",
        text: "Identity through distance. People simplify what they cannot carry — the UK provided the distance to observe systems from the outside.",
      },
      {
        type: "callout",
        label: "Edinburgh · Scotland",
        text: "Strategic silence. Stop chasing the noise of metropolis startups; engineer silent, high-margin repetitions instead.",
      },
      {
        type: "paragraph",
        text: "This personal requirement for stable systems in an unstable world led to a professional pursuit of business repetition — a machine that functions independently of the person behind the counter.",
      },
      {
        type: "pullquote",
        text: "The objective is to create a machine that functions independently of the person behind the counter.",
      },
    ],
  },
  {
    slug: "strategic-location",
    series: series.name,
    sectionNumber: 2,
    totalInSeries: 7,
    title: "Strategic Location",
    dek: "The logic of overlooked markets — and why metropolises lie.",
    publishedAt: "2026-05-06",
    readingMinutes: 4,
    body: [
      {
        type: "lead",
        text: "The metropolis trap is a common failure: entrepreneurs mistake big-city noise for opportunity. Ölmez argues that big cities lie by using massive volume to hide operational rot. Gas stations and small cities, by contrast, reveal the truth.",
      },
      {
        type: "paragraph",
        text: "This logic is backed by NACS data: roughly 80% of fuel purchases involve a stop that can be converted into food revenue through existing customer-traffic infrastructure. The customer is already there. You are not inventing a reason for them to visit — you are capturing an existing flow.",
      },
      {
        type: "table",
        headers: ["Criteria", "Crowded metropolis (the illusion)", "Gas station / small city (the asset)"],
        rows: [
          [
            "Customer traffic",
            "Invented traffic. You must spend on marketing to invent a reason to visit.",
            "Existing traffic. People are already stopped for fuel; you capture an existing flow.",
          ],
          [
            "Operational risk",
            "High rent and competition mask system weaknesses with temporary hype.",
            "Lower overhead and limited noise reveal whether the operational system is actually profitable.",
          ],
          [
            "Brand truth",
            "Success is often a 'mood' or a trend — unscalable.",
            "Success is a system built on speed, convenience, and consistent quality.",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "Once a market with existing traffic is secured, the strategist's focus shifts from the where to the how — from a subjective mood to a clinical system.",
      },
      {
        type: "pullquote",
        text: "Big cities lie. Gas stations tell the truth.",
      },
    ],
  },
  {
    slug: "mood-vs-system",
    series: series.name,
    sectionNumber: 3,
    totalInSeries: 7,
    title: "Mood vs. System",
    dek: "We are not building a restaurant company; we are building a restaurant business company.",
    publishedAt: "2026-05-06",
    readingMinutes: 5,
    body: [
      {
        type: "lead",
        text: "SevetTeam's foundational thesis is clear: we are not building a restaurant company; we are building a restaurant business company. A traditional restaurant relies on a mood — a genius chef or a specific vibe. That is a scaling death sentence. A business company builds a machine.",
      },
      {
        type: "paragraph",
        text: "The machine is governed by AFFAREM and Smart CCTV — the digital eyes of the operation. It is supported by LiveOps, a high-intensity oversight layer involving two daily video calls (Morning Target and Closing Review) and an accountant who acts as the ultimate truth-teller in the system.",
      },
      { type: "heading", level: 2, text: "The Four Lenses of Repeatability" },
      {
        type: "list",
        ordered: true,
        items: [
          "Can it be repeated? Does it produce identical results in different geographies?",
          "Can an average person run it? If the model requires a genius, it cannot be franchised.",
          "Can cost be controlled? Is there a gram-by-gram accounting of every ingredient?",
          "Can the customer understand it instantly? Does the smell and layout explain the product in under six seconds?",
        ],
      },
      {
        type: "paragraph",
        text: "A system is only as strong as the trust it builds through consistency. It replaces the need for human inspiration with the reliability of a managed asset.",
      },
      {
        type: "pullquote",
        text: "If the model requires a genius, it cannot be franchised.",
      },
    ],
  },
  {
    slug: "the-repeated-promise",
    series: series.name,
    sectionNumber: 4,
    totalInSeries: 7,
    title: "The Repeated Promise",
    dek: "A brand is not a graphic-design choice. It is a promise repeated until it becomes an asset.",
    publishedAt: "2026-05-06",
    readingMinutes: 4,
    body: [
      {
        type: "lead",
        text: "In the architecture of SevetTeam, a brand is not a graphic-design choice. Ölmez defines a brand as a repeated promise. The product is not shawarma; the product is the certainty of the experience.",
      },
      {
        type: "paragraph",
        text: "This promise is validated by the Istanbul–London bridge: a network of 42 British franchise holders with extended working experience in Istanbul. They bridge British operational discipline with the rhythmic street-intelligence of Turkey, proving the system can be exported across cultures.",
      },
      {
        type: "pullquote",
        text: "I don't build restaurants. I build repetition.",
        attribution: "Şevketullah Ölmez",
      },
      { type: "heading", level: 2, text: "What repetition looks like on the ground" },
      {
        type: "list",
        items: [
          "Acoustic and olfactory consistency — the customer recognizes the product by smell before they see the counter.",
          "The 42-operator proof — British discipline applied to Istanbul rhythm so the promise stays standardized.",
          "Controlled timing — every wrap is prepared within a non-negotiable window, visible on the AFFAREM dashboard.",
          "Receipt for a memory — the logo is merely a confirmation of an experience the customer already expects.",
        ],
      },
      {
        type: "paragraph",
        text: "When a promise is repeated successfully a thousand times, it transforms from a food item into a measurable financial asset.",
      },
    ],
  },
  {
    slug: "economics-of-access",
    series: series.name,
    sectionNumber: 5,
    totalInSeries: 7,
    title: "Economics of Access",
    dek: "Payback, micro-starts, and the four-investor model that makes the ladder real.",
    publishedAt: "2026-05-06",
    readingMinutes: 5,
    body: [
      {
        type: "lead",
        text: "The SevetTeam model is sellable because it focuses on capital recovery. By utilizing compact units in gas stations, the startup cost is minimized — approximately $165,000 for a standard unit — with a 2.5-year projected payback period.",
      },
      {
        type: "paragraph",
        text: "To ensure accessibility, Ölmez engineered the Micro-Start program ($1,000 – $2,000), allowing ordinary operators to enter the ladder. The model uses a four-investor structure: four partners own 25% each. This is not passive. Each investor must either work a shift as a manager or hire a professional manager. You can outsource work; you cannot outsource accountability.",
      },
      { type: "heading", level: 2, text: "The SevetTeam profit ladder" },
      {
        type: "table",
        headers: ["Daily operating gain", "Monthly gain", "Sevet verdict"],
        rows: [
          ["$200", "$6,000", "Class D — Survival branch; requires LiveOps intervention."],
          ["$550", "$16,500", "Class B — The healthy, official franchise target."],
          ["$1,000", "$30,000", "Class A — High performer; candidate for second unit."],
          ["$1,400", "$42,000", "Flagship (Elite) — Not a default promise; a replication-study candidate."],
        ],
      },
      {
        type: "paragraph",
        text: "Capital buys entry. The Smart Discipline Score determines who is permitted to expand within the ladder.",
      },
      {
        type: "pullquote",
        text: "You can outsource work. You cannot outsource accountability.",
      },
    ],
  },
  {
    slug: "smart-discipline-over-wealth",
    series: series.name,
    sectionNumber: 6,
    totalInSeries: 7,
    title: "Smart Discipline Over Wealth",
    dek: "Money is normal. Discipline is rare. The score decides who scales.",
    publishedAt: "2026-05-06",
    readingMinutes: 4,
    body: [
      {
        type: "lead",
        text: "Money is normal; discipline is rare. Within AFFAREM, every investor and operator is assigned a Smart Discipline Score (SDS). This behavior-based metric ensures the system is not corrupted by ghost owners or passive investors who lack operational rigor.",
      },
      { type: "heading", level: 2, text: "The three components that matter most" },
      {
        type: "callout",
        label: "Transparency with problems",
        text: "Reporting a loss or error immediately to trigger LiveOps. Why it matters: the system can intervene before the asset's value is destroyed.",
      },
      {
        type: "callout",
        label: "Reporting accuracy",
        text: "Sending clinical, numbers-based data — not stories — to the dashboard. Why it matters: the accountant account verifies the truth of the cash flow.",
      },
      {
        type: "callout",
        label: "Meeting attendance",
        text: "Consistent presence in design sessions and daily video calls. Why it matters: it proves the investor is managing the asset, not just watching a bank account.",
      },
      {
        type: "paragraph",
        text: "This infrastructure turns a food concept into a measurable business asset, where a disciplined small operator will always out-scale an undisciplined wealthy investor.",
      },
      {
        type: "pullquote",
        text: "Money is becoming normal. Behavioral consistency is the rarity.",
      },
    ],
  },
  {
    slug: "golden-rules",
    series: series.name,
    sectionNumber: 7,
    totalInSeries: 7,
    title: "Golden Rules",
    dek: "Three takeaways for the operator who wants to build an asset, not a job.",
    publishedAt: "2026-05-06",
    readingMinutes: 3,
    body: [
      {
        type: "lead",
        text: "The Franchise Architect model demonstrates that the most resilient businesses are not the most creative. They are the most disciplined.",
      },
      { type: "heading", level: 2, text: "Three rules to carry" },
      {
        type: "callout",
        label: "Stand where the customer is already stopping",
        text: "Prioritize existing traffic infrastructure over invented traffic. Convert flow; do not manufacture it.",
      },
      {
        type: "callout",
        label: "Systematize until average people can run it",
        text: "If your business requires a genius, you have a job, not an asset. Repetition is the only thing that scales.",
      },
      {
        type: "callout",
        label: "Audit discipline as strictly as profit",
        text: "Use LiveOps and Smart CCTV to ensure the repeated promise is never broken. The score, not the wire, decides who scales.",
      },
      {
        type: "pullquote",
        text: "We do not build restaurants. We build repetition.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAdjacent(slug: string): { prev?: Article; next?: Article } {
  const idx = articles.findIndex((a) => a.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? articles[idx - 1] : undefined,
    next: idx < articles.length - 1 ? articles[idx + 1] : undefined,
  };
}
