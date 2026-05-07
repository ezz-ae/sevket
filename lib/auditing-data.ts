export type ControlLayer = {
  code: string;
  title: string;
  role: string;
  body: string;
  metric: string;
  detail: string;
};

export const controlLayers: ControlLayer[] = [
  {
    code: "L01",
    title: "Smart CCTV",
    role: "Accountability infrastructure",
    body: "Cameras measure queue time, hand-wash compliance, and food handling. Not security — operational truth.",
    metric: "147 cameras live",
    detail:
      "Every camera feeds AFFAREM's vision pipeline in Edinburgh. The metric is not 'we recorded it' — it's whether queue time stayed under 3:42, whether the hand-wash threshold cleared, whether the food-handling SOP held during the breakfast rush. Operators see the same readout we do; nothing is hidden upstream.",
  },
  {
    code: "L02",
    title: "POS variance",
    role: "Cash & ticket reconciliation",
    body: "Every till is reconciled inside the hour. No end-of-month mystery line items, ever.",
    metric: "0.6% network variance",
    detail:
      "POS ↔ inventory ↔ cash drop are reconciled hourly, not daily. If a ticket clears without an inventory drawdown, AFFAREM flags it before the shift ends. End-of-month variance averages 0.6% network-wide — a number we publish, not protect.",
  },
  {
    code: "L03",
    title: "Inventory pulse",
    role: "Waste & COGS guardrails",
    body: "5% waste threshold triggers LiveOps. Walk-in temperatures, prep yields, all logged.",
    metric: "5.0% waste ceiling",
    detail:
      "Walk-in temperatures, prep yields, and cycle counts log every four hours. Cross 5% waste in any rolling 7-day window and Remote LiveOps activates a coaching cycle at no operator cost. Cross 7% and on-site activates at the operator's expense.",
  },
  {
    code: "L04",
    title: "Shift telemetry",
    role: "Manager presence & speed",
    body: "Open / close compliance, prep checks, and per-shift speed-of-service tied to manager seat.",
    metric: "3:42 avg service",
    detail:
      "The shift number isn't 'how busy was it' — it's 'did the Manager-Operator seat hold the line.' Open / close timestamp, prep check signoff, speed-of-service per ticket. The seat owns the number, not the team.",
  },
  {
    code: "L05",
    title: "Royalty rails",
    role: "Automated remittance",
    body: "Royalties drawn on schedule from a SevetTeam-controlled escrow. No manual collection.",
    metric: "100% on-time",
    detail:
      "No invoicing, no chasing. Royalties draw from an Edinburgh-controlled escrow on the same calendar every month. Operators never have to remember; the system never has to ask twice.",
  },
  {
    code: "L06",
    title: "Alert fanout",
    role: "Sub-minute escalation",
    body: "Threshold trips ping all four investor seats and the regional LiveOps lead simultaneously.",
    metric: "&lt; 60s fanout",
    detail:
      "When a threshold trips, all four investor seats and the regional LiveOps lead are notified within 60 seconds. There is no chain of command. There is one circle, lit at once.",
  },
  {
    code: "L07",
    title: "Design lock",
    role: "Layout sovereignty",
    body: "AFFAREM-approved blueprints; no on-site improvisation, no construction creep.",
    metric: "0 deviations",
    detail:
      "The build is filed, dated, and signed before a single nail. Field changes route through Edinburgh; nothing improvises. The number we publish here is zero deviations across the network — and it stays zero because the rule is older than the franchise.",
  },
  {
    code: "L08",
    title: "Identity & seat",
    role: "Four-investor enforcement",
    body: "Each unit is split into 4 manager seats. No seat is ever permitted to go dark.",
    metric: "4 seats / unit",
    detail:
      "Every unit is owned across four 25% seats. Every seat must take shifts as Manager-Operator or commit a SevetTeam-trained pro manager. A dark seat — capital with no presence — is not permitted at any tier. The four-seat structure is the discipline; the discipline is the asset.",
  },
];

export type DisciplineFactor = {
  name: string;
  weight: number;
  body: string;
};

export const disciplineFactors: DisciplineFactor[] = [
  { name: "Operational compliance", weight: 20, body: "Adherence to manuals, safety, and CCTV protocols across all shifts." },
  { name: "Reporting accuracy", weight: 15, body: "Precision and timing of AFFAREM data entry. Late or inaccurate reports degrade the score." },
  { name: "Transparency with problems", weight: 15, body: "Honest reporting of losses, waste, or staff issues. Hidden problems are the lethal failure." },
  { name: "Meeting attendance", weight: 10, body: "Attendance at Design Sessions, LiveOps calls, and quarterly accountancy reviews." },
  { name: "Payment discipline", weight: 10, body: "On-time royalties, supplier payments, and tax-reserve transfers." },
  { name: "Response speed", weight: 10, body: "Speed of corrective action following AFFAREM alerts and threshold trips." },
  { name: "Cost / waste control", weight: 10, body: "Inventory efficiency and COGS management against the 32% ceiling." },
  { name: "Training completion", weight: 5, body: "Mandatory operator and manager training cycles, completed on schedule." },
  { name: "Team behavior", weight: 5, body: "Staff conduct, cleanliness, and customer-handling standards on camera." },
];

export type Band = {
  name: string;
  range: string;
  outcome: string;
  tone: "elite" | "strong" | "standard" | "risk" | "intervention";
};

export const bands: Band[] = [
  { name: "Elite", range: "90 – 100", outcome: "Multi-unit & flagship territory authorized", tone: "elite" },
  { name: "Strong", range: "80 – 89", outcome: "Stable. Eligible for shared-ownership expansion", tone: "strong" },
  { name: "Standard", range: "70 – 79", outcome: "Operational. Annual review.", tone: "standard" },
  { name: "Risk", range: "60 – 69", outcome: "Frozen from new investment. Coaching cycle required.", tone: "risk" },
  { name: "Intervention", range: "&lt; 60", outcome: "On-site LiveOps activated at operator's expense.", tone: "intervention" },
];

export type LiveOpsMode = {
  name: string;
  window: string;
  pricing: string;
  body: string;
  triggers: string[];
};

export const liveOpsModes: LiveOpsMode[] = [
  {
    name: "Launch LiveOps",
    window: "First 30 – 75 days · on-site",
    pricing: "Included in build cost",
    body: "Founder-led or regional-lead presence on the floor through soft launch. Targets are written, prep is timed, the four seats hand the unit between them under supervision until Edinburgh signs off on steady-state.",
    triggers: ["T+0 qualification clear", "Soft launch", "First 30 – 75 days depending on tier"],
  },
  {
    name: "Remote LiveOps",
    window: "Steady-state · monthly retainer",
    pricing: "$1,500 – $2,400 / mo",
    body: "Two daily video calls (Morning Target / Closing Review) and threshold-driven coaching. The accountant account verifies the cash-flow truth in parallel. The line stays awake even when the city sleeps.",
    triggers: ["After Launch LiveOps signoff", "Held while score remains in Standard band or above"],
  },
  {
    name: "On-site LiveOps",
    window: "Triggered · operator cost",
    pricing: "$7,500 – $15,000 / mo",
    body: "A regional lead goes to the floor. Auto-activated by a Smart Discipline Score drop, a waste-threshold breach, or operator-initiated request. Held until the score recovers and three audit cycles clear.",
    triggers: ["SDS drops below tier floor", "7%+ waste in rolling 7-day window", "Operator-requested intervention"],
  },
];

export const auditChainPoints: string[] = [
  "Every filing dated at Edinburgh on issue and on revision",
  "Audit chain certificate attached to every Smart CCTV + POS stack",
  "Royalty rails operate on a published calendar — no off-cycle draws",
  "Design lock blueprints are signed before a single nail",
  "Quarterly accountancy reviews are minuted and circulated to all four seats",
  "Smart Discipline Score is computed weekly from the same data the operator sees",
];
