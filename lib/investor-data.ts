// Investor Relations & Opportunities Data

export const investorPortfolio = {
  totalDeployedCapital: "$30.9M",
  totalActiveUnits: 612,
  totalBrands: 5,
  marketsServed: 18,
  averagePayback: "26-month projection",
  successRate: "84%",
  livestreamingUnits: "100%",
  averageDailyGain: "$685",
};

export const investmentTiers = [
  {
    id: "micro-start",
    name: "Junior Investor Pool",
    minimum: "$1,000",
    maximum: "$12,000",
    typeOfReturn: "Pool-based eligible distribution",
    paybackTarget: "6-month subscription",
    description:
      "Low-friction entry into a shared pool of 50 Shawerma Time restaurant units. Designed for investors who need to learn AFFAREM reporting before applying for a branch position.",
    benefits: [
      "Shared 50-restaurant pool",
      "AFFAREM platform access",
      "No penalty for early closure",
      "Exit after at least two distributions",
      "Strongly recommended for limited food-business experience",
    ],
    riskLevel: "Starter",
    targetInvestor: "Starter and junior investors",
    color: "#1B5E20",
  },
  {
    id: "single-unit",
    name: "Single Unit Investment",
    minimum: "$165,000",
    maximum: "$250,000",
    typeOfReturn: "Cash Flow + Asset",
    paybackTarget: "24-30 month projection",
    description:
      "Direct branch-level exposure. Includes setup, equipment, training, operational support, and investor responsibility for communication and reporting.",
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
    typeOfReturn: "Diversified branch performance",
    paybackTarget: "20-26 month projection",
    description:
      "Portfolio of 3-15 units across multiple brands. Diversified exposure with performance based on actual branch results.",
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
    typeOfReturn: "Strategic participation",
    paybackTarget: "18-24 month projection",
    description:
      "Strategic capital partnership for territory-level investment, brand expansion initiatives, and market-entry infrastructure.",
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
    type: "Multi-Unit Investment",
    capitalRequired: "$6.6M",
    targetReturn: "26-month projected payback",
    timeline: "H2 2026 — Q2 2027",
    states: ["Texas", "Oklahoma", "California", "Florida", "Georgia"],
    description:
      "Premium fuel corridor placements across 5 high-traffic US states. SHAWARMA TIME's expansion into 40 additional units leveraging Sevet Global Market platform.",
    highlights: [
      "Pre-validated site selection",
      "AFFAREM monitoring included",
      "LiveOps support",
      "Heritage shawarma brand",
      "$450-$950 projected daily gain range",
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
    targetReturn: "30-month projected payback",
    timeline: "Q3 2026 — Q1 2027",
    states: ["Germany", "Netherlands"],
    description:
      "Strategic flagship openings in Berlin and Amsterdam — premium positioning in heritage-conscious European markets with master baker certification.",
    highlights: [
      "Premium European positioning",
      "Heritage recipe certification",
      "Direct supply chain integration",
      "$380-$750 projected daily gain range",
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
    targetReturn: "Strategic asset projection",
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
    targetReturn: "12-month projected payback + IP exposure",
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
    targetReturn: "8-month projected payback",
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
    title: "Real-Time Operating Visibility",
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
    title: "Capital Recovery Projection",
    description:
      "Month-by-month tracking of capital use and projected recovery. Targets are planning tools, not promises.",
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
      "In-depth performance reviews with founder access, strategic insights, and capital-use decisions.",
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
    title: "Capital Use & Setup",
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
    description: "Real-time monitoring, quarterly briefings, and capital recovery projection. No payback target is a commitment.",
    duration: "Ongoing",
  },
];
