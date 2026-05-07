// Comprehensive Brand Reports, Events & Magazine Data — All 5 Brands

export interface BrandReport {
  title: string;
  quarter: string;
  period: string;
  publishedDate: string;
  executiveSummary: {
    mandate: string;
    pillars: { name: string; subtitle: string; description: string }[];
  };
  unitPerformanceTiering: {
    description: string;
    tiers: {
      class: string;
      dailyGainRange: string;
      status: string;
      expansionEligibility: string;
      count: number;
      percentageOfPortfolio: string;
    }[];
  };
  revenueLayers: {
    layer: number;
    name: string;
    amount: string;
    description: string;
    recurring: boolean;
  }[];
  portfolioMetrics: {
    activeUnits: number;
    deployedCapital: string;
    avgDailyGain: string;
    targetPayback: string;
    meetsOrExceedsTarget: string;
  };
  h2Roadmap: {
    title: string;
    focus: string;
    mandate: string;
    priorities: { initiative: string; description: string; target: string }[];
  };
  corePhilosophy: { quote: string; author: string };
}

export interface BrandEvent {
  id: number;
  title: string;
  date: Date;
  time: string;
  location: string;
  type: string;
  capacity: number;
  registered: number;
  agenda: string[];
}

export interface BrandArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  featured: boolean;
  readTime: string;
  author?: string;
  content?: string;
  coverImage?: string;
  issueNumber?: string;
}

// Magazine Issues — Cover-driven publications
export interface MagazineIssue {
  id: string;
  brand: string;
  title: string;
  subtitle: string;
  issueNumber: string;
  date: string;
  coverImage: string;
  description: string;
  featuredHeadlines: string[];
  pages: number;
}

export const magazineIssues: MagazineIssue[] = [
  {
    id: "olmez-mid-2026",
    brand: "olmez",
    title: "The Mid-2026 Blueprint",
    subtitle: "How Ölmez is shaping a sharper, more disciplined future",
    issueNumber: "Issue 12",
    date: "Mid 2026",
    coverImage: "/brand-library/olmez-mid-2026-issue-12.png",
    description:
      "An in-depth look at the strategic blueprint guiding Ölmez through 2026. From leadership and expansion to office, fleet, and identity—this issue explores what comes after growth.",
    featuredHeadlines: [
      "Leadership & Expansion",
      "Office. Fleet. Identity.",
      "Designing for Scale",
      "What Comes After Growth?",
    ],
    pages: 64,
  },
  {
    id: "olmez-top-turkey-businessmen",
    brand: "olmez",
    title: "Top Turkey Businessmen",
    subtitle: "The visionaries building tomorrow's Turkey — and the systems behind them",
    issueNumber: "Issue 11.5",
    date: "May 2026",
    coverImage: "/brand-library/olmez-business-review-discipline-cover.png",
    description:
      "A long-form portrait issue profiling the operators, founders, and infrastructure thinkers building Turkey's next institutional generation, anchored by the cover essay on why discipline must precede scale.",
    featuredHeadlines: [
      "Discipline Before Scale",
      "Smart Expansion: When and Where to Grow",
      "Leading Through Uncertainty",
      "The New Rules of Business Influence",
    ],
    pages: 56,
  },
  {
    id: "olmez-mag-26",
    brand: "olmez",
    title: "Building the Next Business Standard",
    subtitle: "From vision to scale — the operational discipline that defines a generation",
    issueNumber: "Issue 11",
    date: "Q2 2026",
    coverImage: "/brand-library/mag-26-olmez.jpg",
    description:
      "Inside the operational framework that's reshaping how franchise systems are built. Real numbers, real operators, real discipline.",
    featuredHeadlines: [
      "Smart Discipline at Scale",
      "30-Month Capital Recovery",
      "Operator Pipeline Strategy",
      "AFFAREM Control Layer",
    ],
    pages: 52,
  },
  {
    id: "olmez-magazine-mid26",
    brand: "olmez",
    title: "Edinburgh to New York",
    subtitle: "Building cultural authority through premium flagship operations",
    issueNumber: "Issue 10",
    date: "Spring 2026",
    coverImage: "/brand-library/magazaine-mid26.jpg",
    description:
      "A visual journey through Ölmez's premium brand authority centers and the strategic placement of training facilities across global hubs.",
    featuredHeadlines: [
      "Premium Restaurant Strategy",
      "Brand Authority by Design",
      "Training Center Architecture",
      "The Cultural Asset Model",
    ],
    pages: 48,
  },
  {
    id: "olmez-business-review-issue-08",
    brand: "olmez",
    title: "Discipline Before Scale",
    subtitle: "Leadership, systems, and the operating posture behind durable growth",
    issueNumber: "Issue 08",
    date: "May 2025",
    coverImage: "/brand-library/olmez-business-review-issue-08.png",
    description:
      "An earlier Ölmez Business Review issue focused on leadership posture, systems thinking, and why structure matters before rapid expansion.",
    featuredHeadlines: [
      "Discipline Before Scale",
      "Smart Expansion Rules",
      "Leadership Through Uncertainty",
      "The Systems Behind Influence",
    ],
    pages: 44,
  },
];

// ÖLMEZ Brand Data
export const olmezBrandReport: BrandReport = {
  title: "2026 H1 Ölmez Franchise Systems — Strategic Performance Report",
  quarter: "H1 2026",
  period: "January - June 2026",
  publishedDate: "June 2026",
  executiveSummary: {
    mandate:
      "Ölmez Franchise Systems has established itself as the premier restaurant business infrastructure platform, with operations spanning premium Turkish restaurants in global hubs and high-efficiency gas station franchise units in the US market.",
    pillars: [
      {
        name: "Brand Authority",
        subtitle: "Full Turkish Restaurants",
        description:
          "Premium operations in London, Edinburgh, and New York establishing cultural authority and serving as standardized training centers.",
      },
      {
        name: "Asset Value",
        subtitle: "Gas Station Units",
        description:
          "High-efficiency franchise units in U.S. gas stations transforming fuel stops into measurable hot-food inventory conversion points.",
      },
      {
        name: "Operator Pipeline",
        subtitle: "Micro-Start Program",
        description:
          "Tiered entry system ($1,000-$2,000) cultivating disciplined shift-managers and franchise candidates.",
      },
    ],
  },
  unitPerformanceTiering: {
    description: "Unit Performance Classification by Daily Net Gain",
    tiers: [
      { class: "Flagship (Elite)", dailyGainRange: "$1,400+", status: "Replication model", expansionEligibility: "Multi-Unit Tier", count: 12, percentageOfPortfolio: "8.2%" },
      { class: "Class A+", dailyGainRange: "$1,000-$1,399", status: "High performer", expansionEligibility: "Eligible", count: 28, percentageOfPortfolio: "19.0%" },
      { class: "Class A (Target)", dailyGainRange: "$550-$999", status: "Baseline standard", expansionEligibility: "Eligible", count: 78, percentageOfPortfolio: "53.1%" },
      { class: "Class B (Stable)", dailyGainRange: "$350-$549", status: "Maintaining", expansionEligibility: "Probationary", count: 20, percentageOfPortfolio: "13.6%" },
      { class: "Class C (Weak)", dailyGainRange: "$200-$349", status: "Operational failure", expansionEligibility: "Ineligible", count: 8, percentageOfPortfolio: "5.4%" },
      { class: "Class D (Risk)", dailyGainRange: "<$200", status: "Systemic leak", expansionEligibility: "Termination Pending", count: 1, percentageOfPortfolio: "0.7%" },
    ],
  },
  revenueLayers: [
    { layer: 1, name: "Franchise Fees", amount: "$25,000 per unit", description: "Initial onboarding and Design Sessions", recurring: false },
    { layer: 2, name: "Setup Margins", amount: "8%-12%", description: "Equipment procurement margins", recurring: false },
    { layer: 3, name: "Royalties", amount: "6% of Gross Sales", description: "Recurring performance-linked revenue", recurring: true },
    { layer: 4, name: "AFFAREM Fees", amount: "$650/month per unit", description: "Control layer SaaS revenue", recurring: true },
    { layer: 5, name: "LiveOps Review Fees", amount: "Variable", description: "Operational correction service", recurring: false },
  ],
  portfolioMetrics: {
    activeUnits: 147,
    deployedCapital: "$16.5M",
    avgDailyGain: "$550-$1,400",
    targetPayback: "30 months",
    meetsOrExceedsTarget: "72%",
  },
  h2Roadmap: {
    title: "H2 2026 Strategic Plan",
    focus: "Expand the disciplined operator pipeline while scaling US gas station corridors.",
    mandate: "Never scale confusion.",
    priorities: [
      { initiative: "Micro-Start Pipeline", description: "Recruit disciplined operators through $1,000-$2,000 entry program", target: "50+ new participants" },
      { initiative: "U.S. Gas Station Corridors", description: "Secure high-traffic fuel stop locations", target: "40 additional units" },
      { initiative: "Smart Control Layer", description: "100% AFFAREM rollout across network", target: "Q4 2026 complete" },
    ],
  },
  corePhilosophy: {
    quote: "We do not invest in people; we invest in the discipline they are capable of maintaining. If a branch cannot explain its existence through the AFFAREM numbers, it is not a business—it is a systemic failure that must be corrected or removed.",
    author: "Şevketullah Ölmez, Founder",
  },
};

// SHAWARMA TIME Brand Data
export const shawarmerReport: BrandReport = {
  title: "2026 H1 SHAWARMA TIME — Growth & Market Expansion Report",
  quarter: "H1 2026",
  period: "January - June 2026",
  publishedDate: "June 2026",
  executiveSummary: {
    mandate:
      "SHAWARMA TIME has emerged as the premier quick-service shawarma platform integrated into US gas station infrastructure. Strategic focus on high-efficiency units that convert high-traffic fuel stops into food revenue centers.",
    pillars: [
      { name: "Gas Station Integration", subtitle: "Premium Unit Placement", description: "Strategic placement in high-traffic fuel corridors across 12 US states." },
      { name: "Shawarma Excellence", subtitle: "Signature Menu", description: "Heritage recipes and fresh ingredients driving customer loyalty." },
      { name: "Operational Efficiency", subtitle: "Smart Discipline", description: "Smart Discipline Score tracking ensures consistent quality across all units." },
    ],
  },
  unitPerformanceTiering: {
    description: "Unit Performance Classification by Daily Net Gain",
    tiers: [
      { class: "Elite Performer", dailyGainRange: "$900+", status: "Replication model", expansionEligibility: "Multi-Unit Tier", count: 4, percentageOfPortfolio: "9.5%" },
      { class: "High Performer", dailyGainRange: "$700-$899", status: "Asset protection", expansionEligibility: "Expansion", count: 12, percentageOfPortfolio: "28.6%" },
      { class: "Target (Class A)", dailyGainRange: "$450-$699", status: "Baseline target", expansionEligibility: "Standard", count: 18, percentageOfPortfolio: "42.9%" },
      { class: "Developing", dailyGainRange: "$300-$449", status: "Stabilizing", expansionEligibility: "Probationary", count: 6, percentageOfPortfolio: "14.3%" },
      { class: "Intervention", dailyGainRange: "<$300", status: "LiveOps support", expansionEligibility: "Hold", count: 2, percentageOfPortfolio: "4.8%" },
    ],
  },
  revenueLayers: [
    { layer: 1, name: "Gas Station Lease Fees", amount: "$15,000 per unit", description: "Location acquisition for premium fuel corridor placements", recurring: false },
    { layer: 2, name: "Equipment & Build-out", amount: "$50,000 per unit", description: "Specialized food service equipment, CCTV, POS systems", recurring: false },
    { layer: 3, name: "Food Sales Revenue", amount: "$9,000-$21,000/mo", description: "Daily food sales averaging 50-70% gross margin", recurring: true },
    { layer: 4, name: "Royalties (6%)", amount: "$540-$1,260/mo", description: "Performance-linked revenue stream", recurring: true },
    { layer: 5, name: "AFFAREM Fee", amount: "$650/month", description: "Smart monitoring, CCTV, control layer", recurring: true },
  ],
  portfolioMetrics: {
    activeUnits: 42,
    deployedCapital: "$6.9M",
    avgDailyGain: "$450-$950",
    targetPayback: "24-30 months",
    meetsOrExceedsTarget: "71%",
  },
  h2Roadmap: {
    title: "H2 2026 Strategic Plan",
    focus: "Expansion into 8 additional states while maintaining operational excellence.",
    mandate: "Growth through consistency. Scale without compromise.",
    priorities: [
      { initiative: "Corridor Expansion", description: "Secure 40 additional high-traffic fuel stops", target: "20 states by end of 2026" },
      { initiative: "Quality Standardization", description: "Unified preparation protocols", target: "100% consistency by Q4" },
      { initiative: "Smart Discipline Integration", description: "Full AFFAREM suite deployment", target: "All 82+ planned units" },
    ],
  },
  corePhilosophy: {
    quote: "Shawarma is not a product; it's a discipline. Every wrap, every rotation, every interaction is measured and optimized.",
    author: "SHAWARMA TIME Operations Philosophy",
  },
};

// TURKISH PIDE CO Brand Data
export const turkishPideReport: BrandReport = {
  title: "2026 H1 Turkish PIDE Co — European Expansion Report",
  quarter: "H1 2026",
  period: "January - June 2026",
  publishedDate: "June 2026",
  executiveSummary: {
    mandate:
      "Turkish PIDE Co has established a premium Mediterranean bakery network across European markets, focusing on artisan-quality pide preparation with heritage recipes and fresh daily production.",
    pillars: [
      { name: "Artisan Bakery", subtitle: "Premium Heritage Recipes", description: "Traditional Turkish pide and bakery items crafted to authentic standards." },
      { name: "European Markets", subtitle: "Strategic Placement", description: "Premium positioning in 6 European countries with focus on quality-conscious consumers." },
      { name: "Fresh Daily Production", subtitle: "Quality Control", description: "On-site preparation with daily fresh ingredients and quality monitoring." },
    ],
  },
  unitPerformanceTiering: {
    description: "Unit Performance Classification by Daily Net Gain",
    tiers: [
      { class: "Premium Outlet", dailyGainRange: "$700+", status: "Replication model", expansionEligibility: "Multi-Unit", count: 3, percentageOfPortfolio: "10.7%" },
      { class: "Class A", dailyGainRange: "$500-$699", status: "Strong performer", expansionEligibility: "Expansion", count: 11, percentageOfPortfolio: "39.3%" },
      { class: "Class B (Target)", dailyGainRange: "$380-$499", status: "Baseline target", expansionEligibility: "Standard", count: 9, percentageOfPortfolio: "32.1%" },
      { class: "Developing", dailyGainRange: "$250-$379", status: "Stabilizing", expansionEligibility: "Probationary", count: 4, percentageOfPortfolio: "14.3%" },
      { class: "Intervention", dailyGainRange: "<$250", status: "Quality review", expansionEligibility: "Hold", count: 1, percentageOfPortfolio: "3.6%" },
    ],
  },
  revenueLayers: [
    { layer: 1, name: "Lease & Setup", amount: "$45,000 per unit", description: "Premium European retail location costs", recurring: false },
    { layer: 2, name: "Equipment", amount: "$65,000 per unit", description: "Professional bakery ovens and preparation equipment", recurring: false },
    { layer: 3, name: "Daily Sales", amount: "$11,400-$22,500/mo", description: "Premium pricing on artisan products", recurring: true },
    { layer: 4, name: "Royalties (5.5%)", amount: "$627-$1,238/mo", description: "Heritage-linked recurring revenue", recurring: true },
    { layer: 5, name: "AFFAREM Fee", amount: "$650/month", description: "Operational control layer", recurring: true },
  ],
  portfolioMetrics: {
    activeUnits: 28,
    deployedCapital: "$4.2M",
    avgDailyGain: "$380-$750",
    targetPayback: "28-32 months",
    meetsOrExceedsTarget: "82%",
  },
  h2Roadmap: {
    title: "H2 2026 European Strategy",
    focus: "Deepen presence in existing markets while exploring 2 new European countries.",
    mandate: "Heritage at scale. Authenticity at every unit.",
    priorities: [
      { initiative: "Germany & Netherlands Expansion", description: "Strategic flagship openings in Berlin and Amsterdam", target: "8 new units" },
      { initiative: "Master Baker Training", description: "Heritage recipe certification program", target: "100% certification" },
      { initiative: "Premium Ingredient Supply", description: "Direct sourcing from Turkish heritage suppliers", target: "All units by Q4" },
    ],
  },
  corePhilosophy: {
    quote: "Pide is not just food—it is heritage made manifest. Every dough, every bake, every customer interaction carries 500 years of Turkish baking tradition.",
    author: "Turkish PIDE Co. Operations Charter",
  },
};

// AFFAREM Brand Data
export const affaremReport: BrandReport = {
  title: "2026 H1 AFFAREM — Asset Franchise & Field Management Report",
  quarter: "H1 2026",
  period: "January - June 2026",
  publishedDate: "June 2026",
  executiveSummary: {
    mandate:
      "AFFAREM (Asset Franchise & Field Management) is the internal branch and franchise management layer of the SevetTeam ecosystem, delivering live branch visibility, smart CCTV compliance, stakeholder coordination, and field-performance control across all active units.",
    pillars: [
      { name: "Branch Visibility", subtitle: "Investor to Operator", description: "Live operational data, smart CCTV feeds, reporting quality, and instant alerting across the entire network." },
      { name: "Field Management", subtitle: "LiveOps Control", description: "Active management capabilities that allow intervention, correction, and field coordination from any location." },
      { name: "Asset Truth", subtitle: "Payback and Compliance", description: "Real-time financial visibility with capital recovery tracking, compliance scoring, and branch-performance analytics." },
    ],
  },
  unitPerformanceTiering: {
    description: "Connected Unit Health Score Distribution",
    tiers: [
      { class: "Optimal (95-100)", dailyGainRange: "Health Score", status: "Full visibility", expansionEligibility: "Replication", count: 145, percentageOfPortfolio: "67.4%" },
      { class: "Healthy (85-94)", dailyGainRange: "Health Score", status: "Standard ops", expansionEligibility: "Standard", count: 52, percentageOfPortfolio: "24.2%" },
      { class: "Moderate (70-84)", dailyGainRange: "Health Score", status: "Monitoring", expansionEligibility: "Watch", count: 14, percentageOfPortfolio: "6.5%" },
      { class: "Critical (<70)", dailyGainRange: "Health Score", status: "Intervention", expansionEligibility: "Hold", count: 4, percentageOfPortfolio: "1.9%" },
    ],
  },
  revenueLayers: [
    { layer: 1, name: "Hardware Setup", amount: "$3,500 per unit", description: "CCTV, sensors, edge devices", recurring: false },
    { layer: 2, name: "Platform License", amount: "$650/month per unit", description: "Core SaaS access and monitoring", recurring: true },
    { layer: 3, name: "Premium Analytics", amount: "$200/month per unit", description: "Advanced reporting and predictive analytics", recurring: true },
    { layer: 4, name: "LiveOps Service", amount: "Variable", description: "Active intervention and remote management", recurring: false },
    { layer: 5, name: "Investor Portal", amount: "$5,000/year per investor", description: "Premium dashboard access", recurring: true },
  ],
  portfolioMetrics: {
    activeUnits: 215,
    deployedCapital: "$2.8M",
    avgDailyGain: "$65K monthly recurring",
    targetPayback: "12 months",
    meetsOrExceedsTarget: "99.8%",
  },
  h2Roadmap: {
    title: "H2 2026 Platform Strategy",
    focus: "Advance branch-management intelligence, predictive field monitoring, and stronger multi-stakeholder visibility across the network.",
    mandate: "Visibility precedes intervention. Data precedes decision.",
    priorities: [
      { initiative: "AI Predictive Analytics", description: "Machine learning for demand forecasting and quality prediction", target: "Beta launch Q3" },
      { initiative: "Universal Adoption", description: "100% rollout across all Ölmez ecosystem brands", target: "Complete by Q4" },
      { initiative: "Investor Mobile App", description: "Real-time portfolio access on iOS/Android", target: "Public release" },
    ],
  },
  corePhilosophy: {
    quote: "What cannot be measured cannot be managed. AFFAREM exists so every branch, franchise seat, and field issue can explain itself in numbers before instinct is allowed to speak.",
    author: "AFFAREM Engineering Charter",
  },
};

// DISCIPLINA Brand Data
export const disciplinaReport: BrandReport = {
  title: "2026 H1 DISCIPLINA — Operator Development Report",
  quarter: "H1 2026",
  period: "January - June 2026",
  publishedDate: "June 2026",
  executiveSummary: {
    mandate:
      "DISCIPLINA has emerged as the most rigorous operator development platform in the franchise industry, cultivating disciplined shift-managers and franchise candidates through tiered training programs.",
    pillars: [
      { name: "Operator Development", subtitle: "Tiered Training", description: "Structured progression from $1,000 micro-start to full franchise ownership." },
      { name: "Smart Discipline", subtitle: "Behavioral Engineering", description: "9-category 100-point scoring system measuring operational excellence." },
      { name: "Leadership Pipeline", subtitle: "Career Pathways", description: "Clear advancement from operator to area manager to multi-unit franchisee." },
    ],
  },
  unitPerformanceTiering: {
    description: "Operator Tier Distribution & Advancement",
    tiers: [
      { class: "Master Operator", dailyGainRange: "Score 95-100", status: "Multi-unit ready", expansionEligibility: "Franchise Track", count: 22, percentageOfPortfolio: "12.2%" },
      { class: "Senior Operator", dailyGainRange: "Score 85-94", status: "Area lead potential", expansionEligibility: "Promotion", count: 48, percentageOfPortfolio: "26.7%" },
      { class: "Operator (Target)", dailyGainRange: "Score 75-84", status: "Standard", expansionEligibility: "Standard", count: 78, percentageOfPortfolio: "43.3%" },
      { class: "Trainee", dailyGainRange: "Score 60-74", status: "Developing", expansionEligibility: "Training", count: 24, percentageOfPortfolio: "13.3%" },
      { class: "Probation", dailyGainRange: "<60", status: "Intervention", expansionEligibility: "Hold", count: 8, percentageOfPortfolio: "4.4%" },
    ],
  },
  revenueLayers: [
    { layer: 1, name: "Micro-Start Entry", amount: "$1,000-$2,000", description: "Initial program enrollment", recurring: false },
    { layer: 2, name: "Training Tuition", amount: "$3,500/program", description: "Comprehensive operator certification", recurring: false },
    { layer: 3, name: "Monthly Coaching", amount: "$200/month", description: "Ongoing development and mentorship", recurring: true },
    { layer: 4, name: "Certification Fees", amount: "$1,500/cert", description: "Master operator and franchise readiness", recurring: false },
    { layer: 5, name: "Placement Premium", amount: "$5,000/placement", description: "Successful operator-to-unit matching", recurring: false },
  ],
  portfolioMetrics: {
    activeUnits: 180,
    deployedCapital: "$1.2M",
    avgDailyGain: "94% Success Rate",
    targetPayback: "8 months",
    meetsOrExceedsTarget: "87%",
  },
  h2Roadmap: {
    title: "H2 2026 Training Strategy",
    focus: "Scale operator pipeline to support multi-brand expansion across all 5 ecosystems.",
    mandate: "Discipline is the only true asset. We manufacture excellence.",
    priorities: [
      { initiative: "Istanbul Academy Expansion", description: "Triple training capacity at flagship facility", target: "300 simultaneous trainees" },
      { initiative: "Digital Learning Platform", description: "Hybrid online/in-person curriculum", target: "Launch Q3" },
      { initiative: "Master Operator Program", description: "Elite tier for multi-unit franchisees", target: "50 graduates" },
    ],
  },
  corePhilosophy: {
    quote: "We do not teach franchise operations. We engineer disciplined operators. The skill can be trained—the discipline must be cultivated daily.",
    author: "DISCIPLINA Training Charter",
  },
};

// Brand Reports Map
export const brandReports: Record<string, BrandReport> = {
  olmez: olmezBrandReport,
  shawarmer: shawarmerReport,
  turkishpide: turkishPideReport,
  affarem: affaremReport,
  disciplina: disciplinaReport,
};

// Brand Events
export const brandEvents: Record<string, BrandEvent[]> = {
  olmez: [
    { id: 1, title: "H1 2026 Investor Briefing & Strategic Roadmap", date: new Date("2026-06-15"), time: "14:00 GMT", location: "Edinburgh HQ + Virtual", type: "Investor Briefing", capacity: 50, registered: 42, agenda: ["H1 2026 performance review", "Unit economics deep dive", "Capital recovery tracking", "H2 2026 expansion targets"] },
    { id: 2, title: "Micro-Start Program Launch", date: new Date("2026-06-22"), time: "10:00 GMT", location: "Istanbul Training Center", type: "Operator Workshop", capacity: 30, registered: 28, agenda: ["$1,000-$2,000 program overview", "Operator development pathway", "Smart Discipline training", "AFFAREM walkthrough"] },
    { id: 3, title: "U.S. Gas Station Corridor Expansion", date: new Date("2026-07-08"), time: "16:00 EST", location: "New York + Virtual", type: "Territory Briefing", capacity: 40, registered: 35, agenda: ["40-unit U.S. expansion plan", "Site selection criteria", "Territory assignment", "Capital deployment timeline"] },
    { id: 4, title: "Smart CCTV Deployment Seminar", date: new Date("2026-07-20"), time: "11:00 GMT", location: "Edinburgh HQ + Virtual", type: "Technology Briefing", capacity: 60, registered: 58, agenda: ["100% remote visibility architecture", "Smart CCTV system", "Real-time monitoring", "Investor dashboard access"] },
    { id: 5, title: "Franchise Holder Summer Conference", date: new Date("2026-08-05"), time: "10:00 GMT", location: "Edinburgh HQ", type: "Annual Conference", capacity: 150, registered: 124, agenda: ["Founder strategic vision", "Advanced operator workshops", "Best practice sessions", "Awards ceremony"] },
  ],
  shawarmer: [
    { id: 1, title: "SHAWARMA TIME Texas & Oklahoma Territory Briefing", date: new Date("2026-07-12"), time: "14:00 CST", location: "Dallas + Virtual", type: "Territory Briefing", capacity: 35, registered: 28, agenda: ["Texas & Oklahoma market opportunity", "Site selection for fuel corridors", "Unit economics", "Operator recruitment"] },
    { id: 2, title: "SHAWARMA TIME Operator Excellence Summit", date: new Date("2026-08-19"), time: "10:00 GMT", location: "Istanbul Training Center", type: "Training Summit", capacity: 50, registered: 42, agenda: ["Heritage shawarma masterclass", "Meat sourcing standards", "Efficiency techniques", "Smart Discipline training"] },
    { id: 3, title: "SHAWARMA TIME H1 Performance Review", date: new Date("2026-09-05"), time: "15:00 EDT", location: "New York + Virtual", type: "Investor Briefing", capacity: 40, registered: 32, agenda: ["H1 market expansion results", "Unit economics analysis", "Capital deployment ROI", "H2 growth trajectory"] },
    { id: 4, title: "California & West Coast Launch", date: new Date("2026-10-15"), time: "13:00 PST", location: "Los Angeles + Virtual", type: "Market Launch", capacity: 45, registered: 38, agenda: ["West Coast market entry", "Premium fuel corridor strategy", "Local supply chain", "Operator partnerships"] },
  ],
  turkishpide: [
    { id: 1, title: "European Expansion Forum — Berlin & Amsterdam", date: new Date("2026-07-18"), time: "13:00 CEST", location: "London Conference Center", type: "Expansion Forum", capacity: 60, registered: 47, agenda: ["European market analysis", "Site selection criteria", "Heritage supplier integration", "Master baker training"] },
    { id: 2, title: "Heritage Recipe Certification Program", date: new Date("2026-08-08"), time: "09:00 GMT", location: "Istanbul Master Bakery", type: "Training Workshop", capacity: 25, registered: 25, agenda: ["500-year recipe heritage", "Master baker techniques", "Quality control", "Daily fresh production"] },
    { id: 3, title: "Premium Ingredient Sourcing Summit", date: new Date("2026-09-12"), time: "11:00 GMT", location: "London + Istanbul", type: "Supply Chain Summit", capacity: 30, registered: 28, agenda: ["Direct heritage suppliers", "Quality grading standards", "Logistics infrastructure", "Cost optimization"] },
  ],
  affarem: [
    { id: 1, title: "AFFAREM 4.0 Platform Launch", date: new Date("2026-07-25"), time: "15:00 GMT", location: "London Tech Hub + Virtual", type: "Product Launch", capacity: 80, registered: 72, agenda: ["AI predictive analytics", "Mobile investor app preview", "Universal adoption rollout", "Live demo session"] },
    { id: 2, title: "Smart CCTV Integration Workshop", date: new Date("2026-08-14"), time: "10:00 GMT", location: "Edinburgh HQ", type: "Technology Workshop", capacity: 50, registered: 45, agenda: ["Smart CCTV architecture", "Edge computing deployment", "Real-time analytics", "Privacy & compliance"] },
    { id: 3, title: "Investor Dashboard Demo Day", date: new Date("2026-09-22"), time: "14:00 GMT", location: "Virtual", type: "Investor Demo", capacity: 100, registered: 87, agenda: ["Real-time portfolio views", "Capital recovery tracking", "Performance benchmarking", "Custom reporting"] },
  ],
  disciplina: [
    { id: 1, title: "Master Operator Graduation Ceremony", date: new Date("2026-07-30"), time: "16:00 GMT", location: "Istanbul Academy", type: "Graduation", capacity: 80, registered: 75, agenda: ["50 master operator graduations", "Multi-unit franchise opportunities", "Career progression talks", "Networking dinner"] },
    { id: 2, title: "Digital Learning Platform Beta", date: new Date("2026-08-22"), time: "11:00 GMT", location: "Virtual + Istanbul", type: "Platform Launch", capacity: 100, registered: 89, agenda: ["Hybrid learning preview", "Module structure", "Certification pathway", "Open enrollment"] },
    { id: 3, title: "DISCIPLINA Annual Operator Summit", date: new Date("2026-09-30"), time: "09:00 GMT", location: "Istanbul Academy", type: "Annual Summit", capacity: 200, registered: 167, agenda: ["Industry best practices", "Operator excellence awards", "Multi-brand operator networking", "2027 program preview"] },
  ],
};

// Brand Magazine Articles
export const brandMagazine: Record<string, BrandArticle[]> = {
  olmez: [
    { id: 1, title: "The Founder's Blueprint: 30-Month Capital Recovery", slug: "founders-blueprint", excerpt: "How disciplined unit economics drive predictable capital recovery in restaurant franchising.", date: "June 2026", category: "Strategy", featured: true, readTime: "12 min read", author: "Şevketullah Ölmez" },
    { id: 2, title: "Why We Don't Invest in People (We Invest in Discipline)", slug: "discipline-vs-people", excerpt: "The philosophical foundation that has produced 72% of units exceeding targets.", date: "June 2026", category: "Philosophy", featured: false, readTime: "8 min read", author: "Şevketullah Ölmez" },
    { id: 3, title: "Edinburgh to New York: Building Cultural Authority", slug: "edinburgh-to-new-york", excerpt: "How premium flagship locations establish authority for franchise expansion.", date: "May 2026", category: "Brand", featured: false, readTime: "10 min read" },
    { id: 4, title: "Smart Discipline Score: 9 Categories That Matter", slug: "smart-discipline-9-categories", excerpt: "A deep dive into the 100-point scoring system measuring operational excellence.", date: "April 2026", category: "Operations", featured: false, readTime: "15 min read" },
    { id: 5, title: "British Franchise Holders: A Case Study in Manager-Operators", slug: "british-franchise-case-study", excerpt: "How 42 manager-operators are achieving faster payback than passive ownership models.", date: "March 2026", category: "Case Study", featured: false, readTime: "11 min read" },
  ],
  shawarmer: [
    { id: 1, title: "The Art of Meat Rotation: Weekly Shawarma Excellence", slug: "meat-rotation-excellence", excerpt: "How consistent preparation standards drive both quality and profitability in high-volume environments.", date: "June 2026", category: "Operations", featured: true, readTime: "8 min read" },
    { id: 2, title: "Gas Station Site Selection: Location as Asset", slug: "site-selection-strategy", excerpt: "Deep dive into traffic patterns, demographic analysis, and fuel-stop optimization.", date: "May 2026", category: "Strategy", featured: false, readTime: "10 min read" },
    { id: 3, title: "Operator Spotlight: Building a $20K/Month Unit in Texas", slug: "operator-spotlight-texas", excerpt: "Profile of SHAWARMA TIME's top performer and the systems driving consistent excellence.", date: "April 2026", category: "Spotlights", featured: false, readTime: "6 min read" },
    { id: 4, title: "Heritage Recipes Meet Modern Speed", slug: "heritage-meets-speed", excerpt: "Balancing authentic shawarma tradition with quick-service efficiency.", date: "March 2026", category: "Brand", featured: false, readTime: "9 min read" },
  ],
  turkishpide: [
    { id: 1, title: "500 Years of Pide: Heritage as Competitive Moat", slug: "500-years-of-pide", excerpt: "Why authentic Turkish baking traditions cannot be replicated by competitors.", date: "June 2026", category: "Heritage", featured: true, readTime: "11 min read" },
    { id: 2, title: "Master Baker Certification: The Path to Excellence", slug: "master-baker-certification", excerpt: "Inside the rigorous certification program that produces our master bakers.", date: "May 2026", category: "Training", featured: false, readTime: "9 min read" },
    { id: 3, title: "European Markets: Where Heritage Pays Premium", slug: "european-premium-markets", excerpt: "Strategic positioning in markets that value authentic heritage products.", date: "April 2026", category: "Strategy", featured: false, readTime: "8 min read" },
    { id: 4, title: "Daily Fresh Production: The 4am Operations Standard", slug: "4am-operations-standard", excerpt: "Why every Turkish PIDE Co outlet starts production at 4am, every day.", date: "March 2026", category: "Operations", featured: false, readTime: "7 min read" },
  ],
  affarem: [
    { id: 1, title: "100% Visibility: The AFFAREM Architecture", slug: "100-visibility-architecture", excerpt: "How real-time monitoring transforms franchise operations from reactive to proactive.", date: "June 2026", category: "Technology", featured: true, readTime: "13 min read" },
    { id: 2, title: "AI Predictive Analytics for Restaurant Operations", slug: "ai-predictive-analytics", excerpt: "Machine learning applications driving operational improvements across the network.", date: "May 2026", category: "AI & Analytics", featured: false, readTime: "12 min read" },
    { id: 3, title: "Smart CCTV: Beyond Surveillance to Intelligence", slug: "smart-cctv-intelligence", excerpt: "How AI-powered CCTV provides actionable operational insights, not just security.", date: "April 2026", category: "Technology", featured: false, readTime: "10 min read" },
    { id: 4, title: "Investor Dashboard: Capital Visibility in Real-Time", slug: "investor-dashboard-realtime", excerpt: "Live portfolio tracking that transforms the franchise investment experience.", date: "March 2026", category: "Investor Tech", featured: false, readTime: "9 min read" },
  ],
  disciplina: [
    { id: 1, title: "Manufacturing Excellence: How We Train Disciplined Operators", slug: "manufacturing-excellence", excerpt: "The systematic approach to cultivating discipline through structured training.", date: "June 2026", category: "Training", featured: true, readTime: "14 min read" },
    { id: 2, title: "From $1,000 Micro-Start to Multi-Unit Franchisee", slug: "micro-start-to-franchisee", excerpt: "The career progression pathway that has produced 50+ master operators.", date: "May 2026", category: "Career", featured: false, readTime: "10 min read" },
    { id: 3, title: "9 Categories of Smart Discipline: A Deep Dive", slug: "9-categories-deep-dive", excerpt: "Detailed exploration of the scoring system that drives operational excellence.", date: "April 2026", category: "Methodology", featured: false, readTime: "16 min read" },
    { id: 4, title: "Istanbul Academy: Inside the Operator Factory", slug: "istanbul-academy-inside", excerpt: "Behind the scenes at the world's most rigorous franchise operator training facility.", date: "March 2026", category: "Operations", featured: false, readTime: "11 min read" },
  ],
};
