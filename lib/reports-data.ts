// 2026 H1 Strategic Revenue & Operational Performance Report Data

export const h1_2026_report = {
  title: "2026 Semi-Annual Strategic Revenue & Operational Performance Report",
  quarter: "H1 2026",
  period: "January - June 2026",
  publishedDate: "June 2026",
  documentUrl: "/docs/h1-2026-strategic-report.pdf",

  executiveSummary: {
    mandate:
      "SevetTeam has solidified its position not as a traditional food service provider, but as a restaurant business company. Our strategic focus remains the engineering of repeatable systems that convert existing high-traffic corridors into high-yield financial assets.",
    pillars: [
      {
        name: "Brand Authority",
        subtitle: "Full Turkish Restaurants",
        description:
          "Premium operations in major global hubs (London, Edinburgh, New York) that establish cultural authority and serve as standardized training centers.",
      },
      {
        name: "Asset Value",
        subtitle: "Gas Station Units",
        description:
          "High-efficiency franchise units integrated into U.S. gas station infrastructure, transforming fuel stops into measurable hot-food inventory conversion points.",
      },
      {
        name: "Operator Development",
        subtitle: "Micro-Start Program",
        description:
          "A tiered entry system starting at $1,000–$2,000, designed to cultivate a disciplined pipeline of shift-managers.",
      },
    ],
  },

  unitPerformanceTiering: {
    description:
      "Unit Performance Classification by Daily Net Gain and Expansion Eligibility",
    tiers: [
      {
        class: "Flagship (Elite)",
        dailyGainRange: "$1,400+",
        status: "Flagship track; replication model",
        expansionEligibility: "High (Multi-Unit Tier)",
        count: 12,
        percentageOfPortfolio: "8.2%",
      },
      {
        class: "Class A+",
        dailyGainRange: "$1,000–$1,399",
        status: "High performer; requires asset protection",
        expansionEligibility: "Eligible for Multi-Unit",
        count: 28,
        percentageOfPortfolio: "19.0%",
      },
      {
        class: "Class A (Target)",
        dailyGainRange: "$550–$999",
        status: "Baseline standard; meets system target",
        expansionEligibility: "Eligible for Expansion",
        count: 78,
        percentageOfPortfolio: "53.1%",
      },
      {
        class: "Class B (Stable)",
        dailyGainRange: "$350–$549",
        status: "Maintaining; requires standard monitoring",
        expansionEligibility: "Probationary",
        count: 20,
        percentageOfPortfolio: "13.6%",
      },
      {
        class: "Class C (Weak)",
        dailyGainRange: "$200–$349",
        status: "Operational failure; needs intervention",
        expansionEligibility: "Ineligible",
        count: 8,
        percentageOfPortfolio: "5.4%",
      },
      {
        class: "Class D (Risk)",
        dailyGainRange: "< $200",
        status: "Systemic leak; mandatory intervention",
        expansionEligibility: "Termination Pending",
        count: 1,
        percentageOfPortfolio: "0.7%",
      },
    ],
  },

  revenueLayers: [
    {
      layer: 1,
      name: "Franchise Fees",
      amount: "$25,000 per unit",
      description:
        "Non-recurring capital required to offset overhead of intensive Design Sessions and system onboarding.",
      recurring: false,
    },
    {
      layer: 2,
      name: "Setup Margins",
      amount: "8%–12%",
      description:
        "Ensures equipment procurement meets technical specs while generating launch revenue to fund Sevet Global Market infrastructure.",
      recurring: false,
    },
    {
      layer: 3,
      name: "Royalties",
      amount: "6% of Gross Sales",
      description:
        "Creates recurring performance-linked revenue stream that aligns parent company cash flow with unit-level efficiency.",
      recurring: true,
      monthlyPerUnit: "$2,000 (average)",
    },
    {
      layer: 4,
      name: "AFFAREM Fees",
      amount: "$650/month per unit",
      description:
        "High-margin SaaS revenue that pays for the Control Layer, providing investors with real-time visibility.",
      recurring: true,
    },
    {
      layer: 5,
      name: "LiveOps Review Fees",
      amount: "Variable",
      description:
        "High-value service stream that converts operational correction into revenue-protection mechanism for underperforming units.",
      recurring: false,
    },
  ],

  portfolioMetrics: {
    activeUnits: 147,
    deployedCapital: "$16,500,000",
    avgDailyGain: "$550–$1,400",
    targetPayback: "30 months",
    meetsOrExceedsTarget: "72%",

    monthlyRevenueSources: {
      royalties: {
        perUnit: "$2,000",
        portfolio: "$200,000",
      },
      affaremFees: {
        perUnit: "$650",
        portfolio: "$65,000",
      },
      total: "$265,000",
    },

    annualizedSetupRevenue: "$3,500,000",
    setupUnitsPerYear: 21,
  },

  smartDisciplineScore: {
    description:
      "Every account is graded on a 100-point scale within AFFAREM across 9 categories",
    categories: [
      {
        category: "Operational Compliance",
        weight: "20%",
        description:
          "Adherence to prep, cleaning, and service standards",
      },
      {
        category: "Reporting Accuracy",
        weight: "15%",
        description: "Precision in daily data entry into AFFAREM controller",
      },
      {
        category: "Transparency with Problems",
        weight: "15%",
        description: "Speed in flagging operational drifts or cash variance",
      },
      {
        category: "Meeting Attendance",
        weight: "10%",
        description:
          "Participation in mandatory daily and design sessions",
      },
      {
        category: "Payment Discipline",
        weight: "10%",
        description:
          "Timeliness of royalty and system fee settlements",
      },
      {
        category: "Cost/Waste Control",
        weight: "10%",
        description: "Maintaining waste under 4% threshold",
      },
      {
        category: "Response Speed",
        weight: "10%",
        description: "Reaction time to AFFAREM alerts or LiveOps directives",
      },
      {
        category: "Training Completion",
        weight: "5%",
        description: "Completion of ongoing education and certifications",
      },
      {
        category: "Team Behavior",
        weight: "5%",
        description: "Adherence to professional management protocols",
      },
    ],
  },

  liveOpsPerformance: {
    description: "LiveOps as Revenue-Protection Mechanism",
    remoteOps: {
      description: "Two daily video calls and accountant audits",
      unitsStabilized: 14,
      successRate: "94%",
    },
    onSiteOps: {
      description: "On-site manager intervention for systemic correction",
      unitsAssigned: 3,
      focusAreas: [
        "Labor cost control",
        "Inventory management",
        "Daily reporting accuracy",
      ],
    },
  },

  investorCapitalRecovery: {
    setupCost: "$165,000",
    baseScenario: "$550/day daily gain",
    paybackSchedule: [
      {
        month: 6,
        recovered: "$27,000",
        percentageOfCapital: "16.4%",
        status: "Post-stabilization",
      },
      {
        month: 12,
        recovered: "$61,200",
        percentageOfCapital: "37.1%",
        status: "Operational maturity",
      },
      {
        month: 18,
        recovered: "$94,800",
        percentageOfCapital: "57.5%",
        status: "Consistent cash flow",
      },
      {
        month: 24,
        recovered: "$127,800",
        percentageOfCapital: "77.5%",
        status: "Final recovery sprint",
      },
      {
        month: 30,
        recovered: "$160,800",
        percentageOfCapital: "97.5%",
        status: "Full Capital Recovery Achieved",
      },
    ],

    britishFranchiseHolders: {
      count: 42,
      description:
        "Manager-Operators who have undergone extended discipline training in Istanbul",
      operatingModel: "Take shifts and manage the floor personally",
      benefits: [
        "Minimized labor leaks",
        "Maximized Smart Discipline Scores",
        "Faster payback rates than passive ownership",
      ],
    },
  },

  h2Roadmap: {
    title: "Strategic Roadmap: H2 2026 & Beyond",
    focus:
      "Every branch currently explains itself in numbers, allowing surgical capital allocation decisions.",
    mandate: "Never scale confusion.",

    priorities: [
      {
        initiative: "Micro-Start Pipeline",
        description:
          "Intensifying recruitment for $1,000–$2,000 models to build reserve of disciplined operators",
        target: "50+ new micro-start participants",
      },
      {
        initiative: "U.S. Gas Station Corridors",
        description:
          "Leveraging Sevet Global Market to secure additional high-traffic fuel-stop units",
        target: "40 additional units in American market",
      },
      {
        initiative: "Smart Control Layer Integration",
        description:
          "Mandatory rollout of Smart CCTV & Remote Control Layer for 100% investor visibility",
        target: "100% rollout across network by Q4 2026",
      },
    ],
  },

  corePhilosophy: {
    quote:
      "We do not invest in people; we invest in the discipline they are capable of maintaining. If a branch cannot explain its existence through the AFFAREM numbers, it is not a business—it is a systemic failure that must be corrected or removed. Money is a norm; discipline is the only asset.",
    author: "Şevketullah Ölmez, Founder",
  },
};

export const investorMeetings = [
  {
    id: 1,
    title: "H1 2026 Investor Briefing & Strategic Roadmap",
    date: new Date("2026-06-15"),
    time: "14:00 GMT",
    location: "Edinburgh HQ + Virtual",
    type: "Strategic Briefing",
    capacity: 50,
    registered: 42,
    agenda: [
      "H1 2026 performance review",
      "Unit economics deep dive",
      "Capital recovery tracking",
      "H2 2026 expansion targets",
      "Q&A and investment opportunities",
    ],
  },
  {
    id: 2,
    title: "Micro-Start Program Launch & Operator Training",
    date: new Date("2026-06-22"),
    time: "10:00 GMT",
    location: "Istanbul Training Center",
    type: "Operator Workshop",
    capacity: 30,
    registered: 28,
    agenda: [
      "Micro-start $1,000–$2,000 program overview",
      "Operator development pathway",
      "Smart Discipline training",
      "AFFAREM system walkthrough",
      "Unit assignment process",
    ],
  },
  {
    id: 3,
    title: "U.S. Gas Station Corridor Expansion - Territory Briefing",
    date: new Date("2026-07-08"),
    time: "16:00 EST",
    location: "New York + Virtual",
    type: "Territory Briefing",
    capacity: 40,
    registered: 35,
    agenda: [
      "40-unit U.S. expansion plan",
      "Gas station site selection criteria",
      "Territory assignment process",
      "Capital allocation timeline",
      "LiveOps infrastructure readiness",
    ],
  },
  {
    id: 4,
    title: "Smart CCTV & Remote Control Layer Seminar",
    date: new Date("2026-07-20"),
    time: "11:00 GMT",
    location: "Edinburgh HQ + Virtual",
    type: "Technology Briefing",
    capacity: 60,
    registered: 58,
    agenda: [
      "Smart CCTV system overview",
      "100% remote visibility architecture",
      "Real-time operational monitoring",
      "Integration with AFFAREM",
      "Investor dashboard access",
    ],
  },
];

export const companyEvents = [
  ...investorMeetings,
  {
    id: 5,
    title: "Franchise Holder Summer Conference & Training Summit",
    date: new Date("2026-08-05"),
    type: "Conference",
    location: "Edinburgh HQ",
    capacity: 150,
  },
  {
    id: 6,
    title: "Q3 2026 Mid-Year Strategic Realignment",
    date: new Date("2026-08-15"),
    type: "Strategic Meeting",
    location: "Edinburgh HQ + Istanbul",
    capacity: 25,
  },
  {
    id: 7,
    title: "U.K. & European Expansion Forum",
    date: new Date("2026-09-10"),
    type: "Expansion Forum",
    location: "London Conference Center",
    capacity: 70,
  },
  {
    id: 8,
    title: "2027 Strategic Planning Retreat",
    date: new Date("2026-09-25"),
    type: "Strategic Retreat",
    location: "Edinburgh HQ + Istanbul",
    capacity: 30,
  },
];
