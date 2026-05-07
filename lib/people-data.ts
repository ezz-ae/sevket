import { siteMetrics } from "@/lib/site-metrics";

export type JobCountry =
  | "United States"
  | "Turkey"
  | "United Kingdom"
  | "Saudi Arabia"
  | "Greece"
  | "Jordan"
  | "UAE"
  | "Remote / Global";

export type JobDepartment =
  | "Operations"
  | "AFFAREM"
  | "Investor Relations"
  | "Hospitality"
  | "Kitchen"
  | "Marketing"
  | "Government Relations"
  | "Finance"
  | "Education"
  | "Social Responsibility"
  | "Technology"
  | "Field Operations"
  | "Events";

export type JobType = "Full-time" | "Part-time" | "Contract" | "Internship" | "Hybrid";

export type JobStatus =
  | "Accepting candidates"
  | "Active this week"
  | "Priority hiring"
  | "Opening soon"
  | "Pipeline review";

export type JobOpening = {
  id: string;
  title: string;
  country: JobCountry;
  city: string;
  department: JobDepartment;
  jobType: JobType;
  applications: number;
  screeningActivity: string;
  status: JobStatus;
  summary: string;
  applyHref: string;
};

export const countryFilters: ("All" | JobCountry)[] = [
  "All",
  "United States",
  "Turkey",
  "United Kingdom",
  "Saudi Arabia",
  "Greece",
  "Jordan",
  "UAE",
  "Remote / Global",
];

export const departmentFilters: ("All" | JobDepartment)[] = [
  "All",
  "Operations",
  "AFFAREM",
  "Investor Relations",
  "Hospitality",
  "Kitchen",
  "Marketing",
  "Government Relations",
  "Finance",
  "Education",
  "Social Responsibility",
  "Technology",
  "Field Operations",
  "Events",
];

const screening = [
  "Active this week",
  "First interviews running",
  "Portfolio reviews open",
  "Branch manager screens active",
  "People Office reviewing daily",
  "New shortlist every Friday",
  "Assessment calls in progress",
];

const markets: { country: JobCountry; cities: string[]; prefix: string; target: number }[] = [
  { country: "United States", cities: ["New York", "Houston", "Miami", "Phoenix"], prefix: "US", target: 38 },
  { country: "Turkey", cities: ["Istanbul", "Ankara", "Izmir", "Bursa"], prefix: "TR", target: 31 },
  { country: "United Kingdom", cities: ["Edinburgh", "London", "Manchester", "Birmingham"], prefix: "UK", target: 18 },
  { country: "Saudi Arabia", cities: ["Riyadh", "Jeddah", "Dammam", "Medina"], prefix: "SA", target: 9 },
  { country: "Jordan", cities: ["Amman", "Irbid", "Aqaba", "Zarqa"], prefix: "JO", target: 6 },
  { country: "UAE", cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ras Al Khaimah"], prefix: "AE", target: 7 },
  { country: "Greece", cities: ["Athens", "Thessaloniki", "Patras", "Heraklion"], prefix: "GR", target: 4 },
  { country: "Remote / Global", cities: ["Remote", "Hybrid", "Global Desk", "Market Desk"], prefix: "GL", target: 12 },
];

const templates: {
  title: string;
  department: JobDepartment;
  jobType: JobType;
  summary: string;
}[] = [
  {
    title: "Branch Operations Manager",
    department: "Operations",
    jobType: "Full-time",
    summary:
      "Own daily branch rhythm, shift readiness, manager handoffs, and operating-score improvement.",
  },
  {
    title: "AFFAREM Reporting Analyst",
    department: "AFFAREM",
    jobType: "Hybrid",
    summary:
      "Review branch data, distribution files, investor messages, and exception notes inside AFFAREM.",
  },
  {
    title: "Investor Access Coordinator",
    department: "Investor Relations",
    jobType: "Full-time",
    summary:
      "Guide investor inquiries, account setup, document requests, and reporting expectations without promising returns.",
  },
  {
    title: "Hospitality Captain",
    department: "Hospitality",
    jobType: "Full-time",
    summary:
      "Lead guest flow, service recovery, counter language, and the visible discipline of the restaurant room.",
  },
  {
    title: "Kitchen Shift Lead",
    department: "Kitchen",
    jobType: "Full-time",
    summary:
      "Protect prep, recipe, hygiene, stock rotation, and ticket timing during live service.",
  },
  {
    title: "Market Launch Marketer",
    department: "Marketing",
    jobType: "Hybrid",
    summary:
      "Translate new market openings into local campaigns, launch content, and grounded community activity.",
  },
  {
    title: "Government Relations Associate",
    department: "Government Relations",
    jobType: "Full-time",
    summary:
      "Support permits, institutional meetings, municipal correspondence, and market-entry documentation.",
  },
  {
    title: "Branch Finance Controller",
    department: "Finance",
    jobType: "Full-time",
    summary:
      "Own reconciliation, operating-cost checks, distribution support, reserves, and branch statement accuracy.",
  },
  {
    title: "Hospitality Education Coach",
    department: "Education",
    jobType: "Part-time",
    summary:
      "Coach students and new workers through service discipline, basic food business, and training attendance.",
  },
  {
    title: "Community Program Coordinator",
    department: "Social Responsibility",
    jobType: "Contract",
    summary:
      "Coordinate student support, responsible market-entry work, and local community-backed business development.",
  },
  {
    title: "Investor Platform Product Manager",
    department: "Technology",
    jobType: "Hybrid",
    summary:
      "Shape dashboard, wallet, document, support-ticket, and distribution-history workflows for investors.",
  },
  {
    title: "Field Operations Auditor",
    department: "Field Operations",
    jobType: "Full-time",
    summary:
      "Visit units, verify standards, inspect branch evidence, and report issues before they become financial drift.",
  },
  {
    title: "Launch Event Producer",
    department: "Events",
    jobType: "Contract",
    summary:
      "Plan founder briefings, investor rooms, hiring days, launch events, and local partner sessions.",
  },
  {
    title: "Starter Pool Support Specialist",
    department: "Investor Relations",
    jobType: "Full-time",
    summary:
      "Support junior investor pools, six-month subscription questions, account rhythm, and distribution literacy.",
  },
];

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const peopleOpenings: JobOpening[] = markets.flatMap((market, marketIndex) =>
  Array.from({ length: market.target }, (_, openingIndex) => {
    const template = templates[(openingIndex + marketIndex) % templates.length];
    const id = `PEO-${market.prefix}-${String(openingIndex + 1).padStart(3, "0")}`;
    const city = market.cities[(openingIndex + marketIndex) % market.cities.length];
    const applications = 24 + ((marketIndex + 3) * (openingIndex + 7) * 11) % 221;
    const status: JobStatus =
      openingIndex % 11 === 0
        ? "Priority hiring"
        : openingIndex % 7 === 0
          ? "Pipeline review"
          : openingIndex % 5 === 0
            ? "Opening soon"
            : "Accepting candidates";

    return {
      id,
      title: template.title,
      country: market.country,
      city,
      department: template.department,
      jobType: template.jobType,
      applications,
      screeningActivity: screening[(openingIndex + marketIndex) % screening.length],
      status,
      summary: template.summary,
      applyHref: `/people/apply?role=${encodeURIComponent(id)}&title=${encodeURIComponent(template.title)}&country=${encodeURIComponent(market.country)}&city=${encodeURIComponent(city)}`,
    };
  })
);

export const peopleTotals = {
  employees: siteMetrics.employees,
  countries: siteMetrics.countries,
  openRoles: peopleOpenings.length,
};

export const peopleCulture = [
  {
    title: "People enter a system, not a mood",
    body:
      "The company hires for calm execution, accountability, and the ability to make a busy room feel controlled.",
  },
  {
    title: "Opportunity follows readiness",
    body:
      "Growth is real only when a person can carry standards under pressure. The opening comes after the operating behavior.",
  },
  {
    title: "Support has a direct office",
    body:
      "Anyone working with Ölmez can reach the People Office for private support, internal concerns, and guidance.",
  },
];

export const peopleRegions = markets.map((market) => ({
  country: market.country,
  cities: market.cities,
  summary:
    market.country === "Remote / Global"
      ? "Remote and hybrid roles for AFFAREM, investor support, technology, marketing, and documentation work."
      : `${market.country} hiring covers branch operations, AFFAREM reporting, investor relations, hospitality, field work, and market-entry support.`,
}));

export function findOpening(roleId?: string | null) {
  if (!roleId) return undefined;
  return peopleOpenings.find((opening) => opening.id === roleId || slugify(opening.title) === roleId);
}
