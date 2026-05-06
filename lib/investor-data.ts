// Investor Relations & Opportunities Data

export const investorPortfolio = {
  totalDeployedCapital: "$30.9M",
  totalActiveUnits: 612,
  totalBrands: 5,
  marketsServed: 18,
  averagePayback: "26 months",
  successRate: "84%",
  livestreamingUnits: "100%",
  averageDailyGain: "$685",
};

export const investmentTiers = [
  {
    id: "micro-start",
    name: "Micro-Start Tier",
    minimum: "$1,000",
    maximum: "$2,000",
    typeOfReturn: "Operator Equity",
    paybackTarget: "3-6 months",
    description:
      "Entry-level participation in operator development pipeline. Ideal for individuals seeking franchise career path.",
    benefits: [
      "Smart Discipline training included",
      "AFFAREM platform access",
      "Mentorship from master operators",
      "Direct unit assignment opportunities",
    ],
    riskLevel: "Low",
    targetInvestor: "First-time entrants",
    color: "#1B5E20",
  },
  {
    id: "single-unit",
    name: "Single Unit Investment",
    minimum: "$165,000",
    maximum: "$250,000",
    typeOfReturn: "Cash Flow + Asset",
    paybackTarget: "24-30 months",
    description:
      "Direct ownership of one operational unit. Includes setup, equipment, training, and operational support.",
    benefits: [
      "Full ownership of unit operations",
      "AFFAREM monitoring included",
      "LiveOps support 24/7",
      "Performance dashboards",
      "Quarterly investor briefings",
    ],
    riskLevel: "Moderate",
    targetInvestor: "Individual accredited investors",
    color: "#8B5A3C",
  },
  {
    id: "multi-unit",
    name: "Multi-Unit Portfolio",
    minimum: "$500,000",
    maximum: "$2.5M",
    typeOfReturn: "Diversified Cash Flow",
    paybackTarget: "20-26 months",
    description:
      "Portfolio of 3-15 units across multiple brands. Diversified risk with brand-level exposure.",
    benefits: [
      "Cross-brand diversification",
      "Priority site selection",
      "Custom investor reporting",
      "Master Operator access",
      "Direct line to investment committee",
    ],
    riskLevel: "Moderate",
    targetInvestor: "Family offices",
    color: "#8B3A3A",
  },
  {
    id: "institutional",
    name: "Institutional Capital",
    minimum: "$5M",
    maximum: "$50M+",
    typeOfReturn: "IRR + Strategic",
    paybackTarget: "18-24 months",
    description:
      "Strategic capital partnership for territory-level deployments and brand expansion initiatives.",
    benefits: [
      "Territory exclusivity options",
      "Brand-level participation",
      "Custom structuring available",
      "Board observer rights",
      "Strategic advisory access",
    ],
    riskLevel: "Strategic",
    targetInvestor: "Institutional investors, funds",
    color: "#2E5C7F",
  },
];

export const opportunities = [
  {
    id: "us-gas-corridor",
    title: "U.S. Gas Station Corridor — 40 Unit Expansion",
    brand: "shawarmer",
    type: "Multi-Unit Deployment",
    capitalRequired: "$6.6M",
    targetReturn: "26-month payback",
    timeline: "H2 2026 — Q2 2027",
    states: ["Texas", "Oklahoma", "California", "Florida", "Georgia"],
    description:
      "Premium fuel corridor placements across 5 high-traffic US states. SHAWARMER's expansion into 40 additional units leveraging Sevet Global Market platform.",
    highlights: [
      "Pre-validated site selection",
      "AFFAREM monitoring included",
      "LiveOps support",
      "Heritage shawarma brand",
      "$450-$950 daily gain target",
    ],
    status: "open",
    minimumInvestment: "$165,000 per unit",
    spotsAvailable: 40,
    spotsAllocated: 12,
  },
  {
    id: "european-pide-expansion",
    title: "Berlin & Amsterdam Premium Bakery Launch",
    brand: "turkishpide",
    type: "Strategic Market Entry",
    capitalRequired: "$880K",
    targetReturn: "30-month payback",
    timeline: "Q3 2026 — Q1 2027",
    states: ["Germany", "Netherlands"],
    description:
      "Strategic flagship openings in Berlin and Amsterdam — premium positioning in heritage-conscious European markets with master baker certification.",
    highlights: [
      "Premium European positioning",
      "Heritage recipe certification",
      "Direct supply chain integration",
      "$380-$750 daily gain target",
      "82% of units exceed targets",
    ],
    status: "open",
    minimumInvestment: "$110,000 per unit",
    spotsAvailable: 8,
    spotsAllocated: 3,
  },
  {
    id: "uk-flagship",
    title: "London & Manchester Flagship Restaurants",
    brand: "olmez",
    type: "Premium Brand Authority",
    capitalRequired: "$3.5M",
    targetReturn: "Strategic Asset",
    timeline: "Q4 2026 — Q3 2027",
    states: ["United Kingdom"],
    description:
      "Premium full-service Turkish restaurants establishing brand authority in tier-1 UK markets. Strategic positioning supporting franchise expansion.",
    highlights: [
      "Tier-1 city flagships",
      "Brand authority establishment",
      "Training center designation",
      "Multi-revenue stream (restaurant + training + brand)",
      "Long-term asset value",
    ],
    status: "open",
    minimumInvestment: "$1,750,000 per restaurant",
    spotsAvailable: 2,
    spotsAllocated: 0,
  },
  {
    id: "affarem-mobile",
    title: "AFFAREM Mobile Platform — Strategic Partnership",
    brand: "affarem",
    type: "Technology Investment",
    capitalRequired: "$2M",
    targetReturn: "12-month payback + IP",
    timeline: "Q3 2026 — Q1 2027",
    states: ["Global"],
    description:
      "Strategic capital for AI predictive analytics development and iOS/Android investor app launch. High-margin SaaS revenue stream.",
    highlights: [
      "99.8% platform uptime",
      "$65K+ MRR baseline",
      "Universal ecosystem adoption",
      "AI/ML proprietary IP",
      "Investor mobile app launch",
    ],
    status: "limited",
    minimumInvestment: "$500,000",
    spotsAvailable: 4,
    spotsAllocated: 1,
  },
  {
    id: "disciplina-academy",
    title: "Istanbul Academy Expansion — Triple Capacity",
    brand: "disciplina",
    type: "Infrastructure Investment",
    capitalRequired: "$1.5M",
    targetReturn: "8-month payback",
    timeline: "H2 2026",
    states: ["Turkey"],
    description:
      "Triple training capacity at flagship Istanbul facility. Supports operator pipeline for multi-brand expansion.",
    highlights: [
      "300 simultaneous trainees",
      "Hybrid digital/in-person",
      "Master Operator program launch",
      "94% success rate",
      "Cross-brand operator pipeline",
    ],
    status: "open",
    minimumInvestment: "$250,000",
    spotsAvailable: 6,
    spotsAllocated: 2,
  },
];

export const investorBenefits = [
  {
    title: "100% Real-Time Visibility",
    description:
      "Live AFFAREM dashboard access to your unit's operations, financials, and performance metrics 24/7.",
    icon: "Eye",
  },
  {
    title: "Smart Discipline Score",
    description:
      "Operator excellence measured on a 100-point scale across 9 categories. No mystery, no excuses.",
    icon: "Target",
  },
  {
    title: "Capital Recovery Tracking",
    description:
      "Month-by-month tracking of capital deployment and recovery. 30-month target with quarterly reviews.",
    icon: "TrendingUp",
  },
  {
    title: "LiveOps Intervention",
    description:
      "Active operational management when units underperform. Revenue-protection mechanism built into the system.",
    icon: "Shield",
  },
  {
    title: "Quarterly Investor Briefings",
    description:
      "In-depth performance reviews with founder access. Strategic insights and capital deployment decisions.",
    icon: "Calendar",
  },
  {
    title: "Multi-Brand Diversification",
    description:
      "Spread risk across 5 brands with different markets, customer bases, and operational models.",
    icon: "Layers",
  },
];

export const investmentProcess = [
  {
    step: 1,
    title: "Initial Inquiry",
    description: "Submit interest through investor portal or direct contact. Receive accredited investor verification packet.",
    duration: "1-3 days",
  },
  {
    step: 2,
    title: "Due Diligence Package",
    description: "Comprehensive disclosure documents, financial statements, and operational data. Direct founder Q&A available.",
    duration: "1-2 weeks",
  },
  {
    step: 3,
    title: "Site Selection & Operator Match",
    description: "Pre-validated site identification matched with certified operator from DISCIPLINA pipeline.",
    duration: "2-4 weeks",
  },
  {
    step: 4,
    title: "Capital Deployment & Setup",
    description: "Equipment procurement, build-out, and operational setup. AFFAREM systems installed.",
    duration: "8-12 weeks",
  },
  {
    step: 5,
    title: "Operations Launch",
    description: "Unit goes live with full LiveOps support. Investor dashboard access activated.",
    duration: "Day 1",
  },
  {
    step: 6,
    title: "Ongoing Performance",
    description: "Real-time monitoring, quarterly briefings, capital recovery tracking. 30-month payback target.",
    duration: "Ongoing",
  },
];
