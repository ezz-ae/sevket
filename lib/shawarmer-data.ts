// SHAWARMA TIME Brand Data & Reports

export const shawarmerBrandReport = {
  title: "2026 H1 SHAWARMA TIME Growth & Market Expansion Report",
  quarter: "H1 2026",
  period: "January - June 2026",
  publishedDate: "June 2026",
  quarter_slug: "h1-2026",

  executiveSummary: {
    mandate:
      "SHAWARMA TIME has established itself as the premier quick-service shawarma platform integrated into US gas station infrastructure. Strategic focus on high-efficiency units that convert high-traffic fuel stops into food revenue centers.",
    pillars: [
      {
        name: "Gas Station Integration",
        subtitle: "Premium Unit Placement",
        description:
          "Strategic placement in high-traffic fuel corridors across 12 US states, leveraging existing customer flow.",
      },
      {
        name: "Shawarma Excellence",
        subtitle: "Signature Menu",
        description:
          "Consistent preparation standards, heritage recipes, and fresh ingredients driving customer loyalty and repeat visits.",
      },
      {
        name: "Operational Efficiency",
        subtitle: "Smart Discipline Model",
        description:
          "Smart Discipline Score tracking ensures consistent quality and service standards across all units.",
      },
    ],
  },

  unitPerformanceTiering: {
    description: "Unit Performance Classification by Daily Net Gain",
    tiers: [
      {
        class: "Elite Performer",
        dailyGainRange: "$900+",
        status: "Replication model",
        expansionEligibility: "Multi-Unit Tier",
        count: 4,
        percentageOfPortfolio: "9.5%",
      },
      {
        class: "High Performer",
        dailyGainRange: "$700–$899",
        status: "Requires asset protection",
        expansionEligibility: "Expansion Eligible",
        count: 12,
        percentageOfPortfolio: "28.6%",
      },
      {
        class: "Target (Class A)",
        dailyGainRange: "$450–$699",
        status: "Meets baseline target",
        expansionEligibility: "Standard Growth",
        count: 18,
        percentageOfPortfolio: "42.9%",
      },
      {
        class: "Developing",
        dailyGainRange: "$300–$449",
        status: "Stabilizing",
        expansionEligibility: "Probationary",
        count: 6,
        percentageOfPortfolio: "14.3%",
      },
      {
        class: "Intervention Required",
        dailyGainRange: "< $300",
        status: "Requires LiveOps support",
        expansionEligibility: "Hold Status",
        count: 2,
        percentageOfPortfolio: "4.8%",
      },
    ],
  },

  revenueLayers: [
    {
      layer: 1,
      name: "Gas Station Lease Fees",
      amount: "$15,000 per unit",
      description:
        "Location acquisition and setup costs for premium fuel corridor placements.",
      recurring: false,
    },
    {
      layer: 2,
      name: "Equipment & Build-out",
      amount: "$50,000 per unit",
      description:
        "Specialized food service equipment, CCTV, POS systems, and space optimization.",
      recurring: false,
    },
    {
      layer: 3,
      name: "Food & Inventory Revenue",
      amount: "$9,000–$21,000/month per unit",
      description:
        "Daily food sales revenue, averaging 50-70% gross margin on shawarma and sides.",
      recurring: true,
    },
    {
      layer: 4,
      name: "Royalties (6% of Gross)",
      amount: "$540–$1,260/month per unit",
      description:
        "Performance-linked revenue stream tied directly to unit sales.",
      recurring: true,
    },
    {
      layer: 5,
      name: "AFFAREM Operations Fee",
      amount: "$650/month per unit",
      description:
        "Smart monitoring, CCTV, control layer, and real-time analytics platform.",
      recurring: true,
    },
  ],

  portfolioMetrics: {
    activeUnits: 42,
    deployedCapital: "$6.9M",
    avgDailyGain: "$450–$950",
    targetPayback: "24-30 months",
    meetsOrExceedsTarget: "71%",

    monthlyRevenueSources: {
      directSales: {
        perUnit: "$13,500",
        portfolio: "$567,000",
      },
      royalties: {
        perUnit: "$810",
        portfolio: "$34,020",
      },
      affaremFees: {
        perUnit: "$650",
        portfolio: "$27,300",
      },
      total: "$628,320",
    },

    marketExpansion: {
      statesActive: 12,
      statesInDevelopment: 8,
      targetFor2026: 20,
      targetUnitsForYear: 40,
    },
  },

  smartDisciplineScore: {
    description: "SHAWARMA TIME-Specific 100-Point Discipline Scale",
    categories: [
      {
        category: "Preparation Standards",
        weight: "25%",
        description: "Meat quality, freshness, knife work, and presentation",
      },
      {
        category: "Ingredient Management",
        weight: "20%",
        description: "Inventory rotation, waste control (target <3%), freshness",
      },
      {
        category: "Customer Service",
        weight: "15%",
        description: "Speed, accuracy, greeting, and customer satisfaction",
      },
      {
        category: "Cleanliness & Safety",
        weight: "15%",
        description: "Station cleanliness, food safety, CCTV footage quality",
      },
      {
        category: "Daily Reporting",
        weight: "10%",
        description: "Sales entry accuracy, incident reporting, inventory counts",
      },
      {
        category: "Payment Discipline",
        weight: "10%",
        description: "Royalty settlement, fee payments, financial accuracy",
      },
      {
        category: "Operator Availability",
        weight: "5%",
        description: "Shift coverage, response time to issues",
      },
    ],
  },

  liveOpsPerformance: {
    description: "Remote Operations Support & Training",
    remoteOps: {
      description: "Weekly video check-ins and quality coaching",
      unitsSupported: 28,
      avgImprovement: "23%",
    },
    onSiteOps: {
      description: "Monthly on-site quality audits and training",
      unitsAssigned: 14,
      focusAreas: [
        "Meat preparation standards",
        "Waste reduction",
        "Customer service",
      ],
    },
  },

  investorCapitalRecovery: {
    setupCost: "$165,000",
    baseScenario: "$600/day daily gain",
    paybackSchedule: [
      {
        month: 6,
        recovered: "$36,000",
        percentageOfCapital: "21.8%",
        status: "Post-launch stabilization",
      },
      {
        month: 12,
        recovered: "$72,000",
        percentageOfCapital: "43.6%",
        status: "Operational maturity",
      },
      {
        month: 18,
        recovered: "$108,000",
        percentageOfCapital: "65.5%",
        status: "Consistent cash flow",
      },
      {
        month: 24,
        recovered: "$144,000",
        percentageOfCapital: "87.3%",
        status: "Final recovery phase",
      },
      {
        month: 30,
        recovered: "$180,000",
        percentageOfCapital: "109.1%",
        status: "Full Recovery + Profit",
      },
    ],
  },

  h2Roadmap: {
    title: "H2 2026 Strategic Plan",
    focus:
      "Geographic expansion into 8 additional states while maintaining operational excellence across existing portfolio.",
    mandate: "Growth through consistency. Scale without compromise.",

    priorities: [
      {
        initiative: "Corridor Expansion",
        description: "Identify and secure 40 additional high-traffic fuel stops",
        target: "Expand to 20 states by end of 2026",
      },
      {
        initiative: "Quality Standardization",
        description:
          "Implement unified preparation protocols and taste consistency standards",
        target: "100% unit consistency score by Q4 2026",
      },
      {
        initiative: "Smart Discipline Integration",
        description:
          "Deploy full AFFAREM suite with CCTV monitoring across all units",
        target: "Real-time visibility on all 82+ planned units",
      },
    ],
  },

  corePhilosophy: {
    quote:
      "Shawarma is not a product; it's a discipline. Every wrap, every rotation, every interaction is measured and optimized. Gas stations are just the venue—the real asset is the operator's commitment to excellence.",
    author: "SHAWARMA TIME Operations Philosophy",
  },

  marketAnalysis: {
    usMarketSize: "$24.8B",
    quickServiceSegment: "$8.3B",
    gasStationFoodCategory: "$2.1B",
    targetMarketShare: "2.5% by 2027",
    competitiveAdvantage:
      "Heritage preparation + strategic placement + real-time monitoring",
  },
};

export const shawarmerEvents = [
  {
    id: 1,
    title: "SHAWARMA TIME Territory Briefing - Texas & Oklahoma",
    date: new Date("2026-07-12"),
    time: "14:00 CST",
    location: "Dallas + Virtual",
    type: "Territory Briefing",
    capacity: 35,
    registered: 28,
    agenda: [
      "Texas & Oklahoma market opportunity",
      "Site selection criteria for fuel corridors",
      "Unit economics and payback projections",
      "Operator recruitment and training",
      "Q&A and partnership opportunities",
    ],
  },
  {
    id: 2,
    title: "SHAWARMA TIME Operator Summit - Preparation Excellence",
    date: new Date("2026-08-19"),
    time: "10:00 GMT",
    location: "Istanbul Training Center + Virtual",
    type: "Training Summit",
    capacity: 50,
    registered: 42,
    agenda: [
      "Heritage shawarma preparation masterclass",
      "Meat sourcing and quality standards",
      "Efficiency techniques and waste reduction",
      "Customer service and operator excellence",
      "Smart Discipline Score training",
    ],
  },
  {
    id: 3,
    title: "SHAWARMA TIME Investor Update - H1 Performance Review",
    date: new Date("2026-09-05"),
    time: "15:00 EDT",
    location: "New York + Virtual",
    type: "Investor Briefing",
    capacity: 40,
    registered: 32,
    agenda: [
      "H1 2026 market expansion results",
      "Unit economics and profitability analysis",
      "Capital allocation and performance tracking",
      "H2 2026 growth trajectory",
      "Risk mitigation and quality assurance",
    ],
  },
];

export const shawarmerMagazine = [
  {
    id: 1,
    title: "The Art of Meat Rotation: Weekly Shawarma Excellence",
    slug: "meat-rotation-excellence",
    excerpt:
      "How consistent preparation standards drive both quality and profitability in high-volume environments.",
    date: "June 2026",
    category: "Operations",
    featured: true,
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Gas Station Site Selection: Location as Asset",
    slug: "site-selection-strategy",
    excerpt:
      "Deep dive into traffic patterns, demographic analysis, and fuel-stop optimization for maximum food revenue.",
    date: "May 2026",
    category: "Strategy",
    featured: false,
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "Operator Spotlight: Building a $20K/Month Unit in Texas",
    slug: "operator-spotlight-texas",
    excerpt:
      "Profile of SHAWARMA TIME's top performer and the systems that drive consistent excellence.",
    date: "April 2026",
    category: "Spotlights",
    featured: false,
    readTime: "6 min read",
  },
];
