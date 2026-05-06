export type Status = "Open" | "Filling" | "Final seat" | "Reserved";

export type Opportunity = {
  code: string;
  tier: "Standard" | "Premium" | "Kiosk" | "Flagship";
  status: Status;
  city: string;
  state: string;
  corridor: string;
  coordinates: string;
  capital: number;
  capitalPerSeat: number;
  seatsFilled: number;
  seatsTotal: number;
  locationScore: number;
  disciplineFloor: number;
  daily: { target: number; floor: number };
  monthlyNetPerSeat: number;
  paybackMonths: number;
  cogsCeiling: number;
  contributionMargin: number;
  site: {
    adv: string;
    captive: string;
    traffic: string;
    lease: string;
    footprint: string;
    neighbors: string;
  };
  capitalBreakdown: { label: string; amount: number }[];
  timeline: { phase: string; window: string; description: string }[];
  requirements: string[];
  liveops: string[];
  risks: { factor: string; rating: "Low" | "Medium" | "Elevated"; mitigation: string }[];
  documentation: string[];
};

export const opportunities: Opportunity[] = [
  {
    code: "TX-GAS-014",
    tier: "Standard",
    status: "Filling",
    city: "Waco",
    state: "TX",
    corridor: "I-35 · Texas Triangle",
    coordinates: "31.5493 N · 97.1467 W",
    capital: 165000,
    capitalPerSeat: 41250,
    seatsFilled: 2,
    seatsTotal: 4,
    locationScore: 88,
    disciplineFloor: 75,
    daily: { target: 612, floor: 480 },
    monthlyNetPerSeat: 4590,
    paybackMonths: 27,
    cogsCeiling: 32,
    contributionMargin: 41.5,
    site: {
      adv: "1.42M gal / yr",
      captive: "63%",
      traffic: "11,200 vehicles / day",
      lease: "10y NNN · 2× 5y options",
      footprint: "420 sq ft kiosk insert",
      neighbors: "Buc-ee's adj · Subway · ATM bank",
    },
    capitalBreakdown: [
      { label: "Build-out & permits", amount: 58000 },
      { label: "Kitchen equipment", amount: 47000 },
      { label: "Smart CCTV + POS stack", amount: 12500 },
      { label: "Brand kit & signage", amount: 9500 },
      { label: "Working capital (90d)", amount: 22000 },
      { label: "Royalty deposit", amount: 11000 },
      { label: "Contingency 3%", amount: 5000 },
    ],
    timeline: [
      { phase: "T+0", window: "Day 0", description: "Qualification clears · seats locked" },
      { phase: "T+14", window: "Week 2", description: "Design Session · brand kit & menu lock" },
      { phase: "T+45", window: "Week 6–7", description: "Build-out · equipment install · smart CCTV provisioning" },
      { phase: "T+60", window: "Week 9", description: "Soft launch · Launch LiveOps team on-site" },
      { phase: "T+120", window: "Month 4", description: "Transition to Remote LiveOps · steady-state" },
    ],
    requirements: [
      "Smart Discipline Score ≥ 75 / 100 at qualification",
      "One mandatory full-shift trial alongside operator",
      "Personal capacity to take Manager-Operator seat OR commit to SevetTeam-trained pro manager",
      "Bilingual operator preferred (EN / ES corridor)",
      "Personal background filing + SOFI verification",
    ],
    liveops: [
      "Launch LiveOps · 60 days on-site (included)",
      "Remote LiveOps · $1,800 / mo from month 4",
      "On-site reactivation triggered if score drops below 70",
    ],
    risks: [
      {
        factor: "Operator turnover during ramp",
        rating: "Medium",
        mitigation: "4-investor seat redundancy · Manager-Operator backup",
      },
      {
        factor: "Fuel station foot-traffic seasonality",
        rating: "Low",
        mitigation: "I-35 trucking corridor · year-round captive",
      },
      {
        factor: "Local food licensing delay",
        rating: "Low",
        mitigation: "Edinburgh legal pre-files · 14d permit lead",
      },
    ],
    documentation: [
      "Letter of Intent · station operator co-signature",
      "10-year NNN lease · executed copy",
      "P&L pro forma · 36-month model",
      "Design pack · brand kit + menu engineering",
      "AFFAREM access credentials · all six rooms",
      "Smart CCTV + POS audit chain certificate",
    ],
  },
  {
    code: "FL-GAS-022",
    tier: "Premium",
    status: "Open",
    city: "Tampa",
    state: "FL",
    corridor: "I-75 · Florida Gulf",
    coordinates: "27.9506 N · 82.4572 W",
    capital: 245000,
    capitalPerSeat: 61250,
    seatsFilled: 1,
    seatsTotal: 4,
    locationScore: 91,
    disciplineFloor: 78,
    daily: { target: 745, floor: 580 },
    monthlyNetPerSeat: 5980,
    paybackMonths: 25,
    cogsCeiling: 31,
    contributionMargin: 43,
    site: {
      adv: "1.78M gal / yr",
      captive: "71%",
      traffic: "14,400 vehicles / day",
      lease: "12y NNN · 2× 5y options",
      footprint: "560 sq ft premium insert",
      neighbors: "Wawa adj · Starbucks · Chase ATM",
    },
    capitalBreakdown: [
      { label: "Build-out & permits", amount: 92000 },
      { label: "Kitchen equipment", amount: 64000 },
      { label: "Smart CCTV + POS stack", amount: 14500 },
      { label: "Brand kit & signage", amount: 13500 },
      { label: "Working capital (90d)", amount: 32000 },
      { label: "Royalty deposit", amount: 18000 },
      { label: "Contingency 4%", amount: 11000 },
    ],
    timeline: [
      { phase: "T+0", window: "Day 0", description: "Qualification clears · seats locked" },
      { phase: "T+18", window: "Week 3", description: "Design Session · premium build review" },
      { phase: "T+55", window: "Week 8", description: "Build-out · equipment install" },
      { phase: "T+75", window: "Week 11", description: "Soft launch · Launch LiveOps + founder visit" },
      { phase: "T+135", window: "Month 4.5", description: "Transition to Remote LiveOps" },
    ],
    requirements: [
      "Smart Discipline Score ≥ 78 / 100",
      "Mandatory two-shift trial (one weekday, one weekend)",
      "Demonstrated cash management discipline (prior business or seat reference)",
      "Coastal humidity equipment training certificate",
      "Personal background filing + SOFI verification",
    ],
    liveops: [
      "Launch LiveOps · 75 days on-site (included)",
      "Remote LiveOps · $2,400 / mo from month 5",
      "On-site reactivation if score drops below 72",
    ],
    risks: [
      {
        factor: "Hurricane season operational pause",
        rating: "Medium",
        mitigation: "Insured business interruption · 2-week reserve in working capital",
      },
      {
        factor: "Premium price-point execution",
        rating: "Medium",
        mitigation: "Founder-supervised launch · brand-kit lock",
      },
      { factor: "Tourism corridor variance", rating: "Low", mitigation: "71% captive · resilient to seasonal swing" },
    ],
    documentation: [
      "Letter of Intent · premium operator co-signature",
      "12-year NNN lease · executed copy",
      "P&L pro forma · 36-month model",
      "Premium design pack · brand engineering report",
      "AFFAREM access credentials · all six rooms",
      "Founder oversight charter · premium tier addendum",
    ],
  },
  {
    code: "OH-GAS-041",
    tier: "Standard",
    status: "Open",
    city: "Columbus",
    state: "OH",
    corridor: "I-70 · Midwest Belt",
    coordinates: "39.9612 N · 82.9988 W",
    capital: 165000,
    capitalPerSeat: 41250,
    seatsFilled: 0,
    seatsTotal: 4,
    locationScore: 84,
    disciplineFloor: 75,
    daily: { target: 555, floor: 430 },
    monthlyNetPerSeat: 4150,
    paybackMonths: 30,
    cogsCeiling: 32,
    contributionMargin: 40,
    site: {
      adv: "1.18M gal / yr",
      captive: "58%",
      traffic: "9,400 vehicles / day",
      lease: "10y NNN · 2× 5y options",
      footprint: "400 sq ft kiosk insert",
      neighbors: "Sheetz adj · Dollar General · regional bank",
    },
    capitalBreakdown: [
      { label: "Build-out & permits", amount: 56000 },
      { label: "Kitchen equipment", amount: 47000 },
      { label: "Smart CCTV + POS stack", amount: 12500 },
      { label: "Brand kit & signage", amount: 9500 },
      { label: "Working capital (90d)", amount: 22000 },
      { label: "Royalty deposit", amount: 11000 },
      { label: "Contingency 4%", amount: 7000 },
    ],
    timeline: [
      { phase: "T+0", window: "Day 0", description: "Qualification clears · seats locked" },
      { phase: "T+14", window: "Week 2", description: "Design Session · standard kit lock" },
      { phase: "T+45", window: "Week 6–7", description: "Build-out · winter-grade install" },
      { phase: "T+62", window: "Week 9", description: "Soft launch · Launch LiveOps on-site" },
      { phase: "T+120", window: "Month 4", description: "Remote LiveOps transition" },
    ],
    requirements: [
      "Smart Discipline Score ≥ 75 / 100",
      "One mandatory full-shift trial",
      "Cold-climate operational drill (winter SOP signoff)",
      "Personal background filing + SOFI verification",
    ],
    liveops: [
      "Launch LiveOps · 60 days on-site (included)",
      "Remote LiveOps · $1,800 / mo from month 4",
      "On-site reactivation if score drops below 70",
    ],
    risks: [
      { factor: "Winter traffic variance", rating: "Medium", mitigation: "Salt-belt SOP · heated holding cabinets" },
      { factor: "Operator first-cycle for territory", rating: "Medium", mitigation: "Founder onsite at launch" },
      { factor: "Lower captive % than Texas/Florida", rating: "Low", mitigation: "Lower entry capital offsets daily floor" },
    ],
    documentation: [
      "Letter of Intent · station operator co-signature",
      "10-year NNN lease · executed copy",
      "P&L pro forma · 36-month model",
      "Design pack · winter-grade addendum",
      "AFFAREM access credentials · all six rooms",
    ],
  },
  {
    code: "NC-GAS-007",
    tier: "Standard",
    status: "Open",
    city: "Charlotte",
    state: "NC",
    corridor: "I-85 · Carolinas",
    coordinates: "35.2271 N · 80.8431 W",
    capital: 105000,
    capitalPerSeat: 26250,
    seatsFilled: 1,
    seatsTotal: 4,
    locationScore: 79,
    disciplineFloor: 75,
    daily: { target: 410, floor: 320 },
    monthlyNetPerSeat: 2980,
    paybackMonths: 32,
    cogsCeiling: 33,
    contributionMargin: 38,
    site: {
      adv: "0.9M gal / yr",
      captive: "55%",
      traffic: "7,800 vehicles / day",
      lease: "8y NNN · 2× 5y options",
      footprint: "320 sq ft compact insert",
      neighbors: "Circle K adj · regional QSR",
    },
    capitalBreakdown: [
      { label: "Build-out & permits", amount: 34000 },
      { label: "Kitchen equipment", amount: 32000 },
      { label: "Smart CCTV + POS stack", amount: 11000 },
      { label: "Brand kit & signage", amount: 7000 },
      { label: "Working capital (90d)", amount: 14000 },
      { label: "Royalty deposit", amount: 5000 },
      { label: "Contingency 2%", amount: 2000 },
    ],
    timeline: [
      { phase: "T+0", window: "Day 0", description: "Qualification clears · seats locked" },
      { phase: "T+12", window: "Week 2", description: "Design Session · compact-build lock" },
      { phase: "T+38", window: "Week 5–6", description: "Build-out · compact install" },
      { phase: "T+55", window: "Week 8", description: "Soft launch · Launch LiveOps on-site" },
      { phase: "T+115", window: "Month 4", description: "Remote LiveOps transition" },
    ],
    requirements: [
      "Smart Discipline Score ≥ 75 / 100",
      "Compact-unit operator certification",
      "Single-protein menu lock acceptance",
      "Personal background filing + SOFI verification",
    ],
    liveops: [
      "Launch LiveOps · 45 days on-site (included)",
      "Remote LiveOps · $1,500 / mo from month 3",
      "On-site reactivation if score drops below 70",
    ],
    risks: [
      { factor: "Lower-tier corridor revenue ceiling", rating: "Medium", mitigation: "Compact build keeps payback tight" },
      { factor: "Compact menu monotony risk", rating: "Low", mitigation: "Single-recipe doctrine · brand consistency" },
      { factor: "First-cycle Carolinas territory", rating: "Medium", mitigation: "Founder remote oversight" },
    ],
    documentation: [
      "Letter of Intent · operator co-signature",
      "8-year NNN lease · executed copy",
      "P&L pro forma · 36-month model",
      "Compact design pack",
      "AFFAREM access credentials · all six rooms",
    ],
  },
  {
    code: "AZ-GAS-009",
    tier: "Premium",
    status: "Final seat",
    city: "Phoenix",
    state: "AZ",
    corridor: "I-10 · Southwest Arid",
    coordinates: "33.4484 N · 112.0740 W",
    capital: 245000,
    capitalPerSeat: 61250,
    seatsFilled: 3,
    seatsTotal: 4,
    locationScore: 86,
    disciplineFloor: 78,
    daily: { target: 685, floor: 540 },
    monthlyNetPerSeat: 5420,
    paybackMonths: 28,
    cogsCeiling: 31,
    contributionMargin: 42,
    site: {
      adv: "1.55M gal / yr",
      captive: "68%",
      traffic: "12,800 vehicles / day",
      lease: "12y NNN · 2× 5y options",
      footprint: "540 sq ft premium insert",
      neighbors: "Loves adj · in-station QSR · ATM",
    },
    capitalBreakdown: [
      { label: "Build-out & permits", amount: 88000 },
      { label: "Kitchen equipment (heat-spec)", amount: 66000 },
      { label: "Smart CCTV + POS stack", amount: 14500 },
      { label: "Brand kit & signage", amount: 13000 },
      { label: "Working capital (90d)", amount: 32000 },
      { label: "Royalty deposit", amount: 18000 },
      { label: "Contingency 5%", amount: 13500 },
    ],
    timeline: [
      { phase: "T+0", window: "Day 0", description: "Final seat lock" },
      { phase: "T+18", window: "Week 3", description: "Design Session · arid-spec equipment" },
      { phase: "T+55", window: "Week 8", description: "Heat-spec build-out · refrigeration redundancy" },
      { phase: "T+78", window: "Week 11", description: "Soft launch · Launch LiveOps + founder" },
      { phase: "T+140", window: "Month 5", description: "Remote LiveOps transition" },
    ],
    requirements: [
      "Smart Discipline Score ≥ 78 / 100",
      "Two-shift trial · one summer afternoon mandatory",
      "Heat-cycle equipment training certificate",
      "Bilingual operator strongly preferred",
      "Personal background filing + SOFI verification",
    ],
    liveops: [
      "Launch LiveOps · 75 days on-site (included)",
      "Remote LiveOps · $2,200 / mo from month 5",
      "On-site reactivation if score drops below 72",
    ],
    risks: [
      { factor: "Summer heat equipment stress", rating: "Elevated", mitigation: "Heat-spec equipment · refrigeration redundancy" },
      { factor: "Final seat fill window", rating: "Low", mitigation: "3 of 4 seats already locked" },
      { factor: "Premium tier execution discipline", rating: "Medium", mitigation: "Founder-supervised launch" },
    ],
    documentation: [
      "Letter of Intent · operator co-signature",
      "12-year NNN lease · executed copy",
      "P&L pro forma · 36-month heat-adjusted model",
      "Premium design pack · arid-spec addendum",
      "AFFAREM access · all six rooms",
      "Founder oversight charter · premium tier",
    ],
  },
  {
    code: "WA-GAS-003",
    tier: "Standard",
    status: "Reserved",
    city: "Tacoma",
    state: "WA",
    corridor: "I-5 · Pacific Northwest",
    coordinates: "47.2529 N · 122.4443 W",
    capital: 165000,
    capitalPerSeat: 41250,
    seatsFilled: 4,
    seatsTotal: 4,
    locationScore: 82,
    disciplineFloor: 75,
    daily: { target: 580, floor: 460 },
    monthlyNetPerSeat: 4350,
    paybackMonths: 29,
    cogsCeiling: 32,
    contributionMargin: 41,
    site: {
      adv: "1.25M gal / yr",
      captive: "60%",
      traffic: "9,900 vehicles / day",
      lease: "10y NNN · 2× 5y options",
      footprint: "420 sq ft kiosk insert",
      neighbors: "76 station adj · Subway · regional bank",
    },
    capitalBreakdown: [
      { label: "Build-out & permits", amount: 58000 },
      { label: "Kitchen equipment", amount: 47000 },
      { label: "Smart CCTV + POS stack", amount: 12500 },
      { label: "Brand kit & signage", amount: 9500 },
      { label: "Working capital (90d)", amount: 22000 },
      { label: "Royalty deposit", amount: 11000 },
      { label: "Contingency 3%", amount: 5000 },
    ],
    timeline: [
      { phase: "T+0", window: "Locked", description: "All 4 seats reserved · qualification complete" },
      { phase: "T+14", window: "Week 2", description: "Design Session · PNW moisture-grade lock" },
      { phase: "T+48", window: "Week 7", description: "Build-out · winter-spec install" },
      { phase: "T+65", window: "Week 9–10", description: "Soft launch · Launch LiveOps" },
      { phase: "T+125", window: "Month 4", description: "Remote LiveOps transition" },
    ],
    requirements: ["Reserved · waitlist closed", "Next PNW seat opens with WA-GAS-006 (filing in review)"],
    liveops: ["Launch LiveOps · 60 days on-site", "Remote LiveOps · $1,900 / mo from month 4"],
    risks: [
      { factor: "PNW moisture impact on equipment", rating: "Low", mitigation: "Sealed kit · marine-grade gaskets" },
      { factor: "Long-night winter retention", rating: "Low", mitigation: "Heat-station + holding spec" },
    ],
    documentation: ["Closed filing · reference only"],
  },
];

export const corridors = ["All", "Texas", "Florida", "Carolinas", "Midwest", "Southwest", "Pacific NW"];

export const corridorMatch: Record<string, string[]> = {
  All: opportunities.map((o) => o.code),
  Texas: ["TX-GAS-014"],
  Florida: ["FL-GAS-022"],
  Carolinas: ["NC-GAS-007"],
  Midwest: ["OH-GAS-041"],
  Southwest: ["AZ-GAS-009"],
  "Pacific NW": ["WA-GAS-003"],
};

export function fmtMoney(n: number): string {
  if (n >= 1000) return `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k`;
  return `$${n.toLocaleString()}`;
}

export function getFiling(code: string): Opportunity | undefined {
  return opportunities.find((o) => o.code === code);
}

export function relatedFilings(code: string, limit = 3): Opportunity[] {
  const target = getFiling(code);
  if (!target) return [];
  const others = opportunities.filter((o) => o.code !== code);
  const sameCorridor = others.filter((o) => o.corridor.split(" · ")[1] === target.corridor.split(" · ")[1]);
  const sameTier = others.filter((o) => o.tier === target.tier && !sameCorridor.includes(o));
  const rest = others.filter((o) => !sameCorridor.includes(o) && !sameTier.includes(o));
  return [...sameCorridor, ...sameTier, ...rest].slice(0, limit);
}
