export interface Brand {
  id: string;
  slug: string;
  name: string;
  arabicName?: string;
  tagline: string;
  description: string;
  founded: string;
  headquarters: string;
  focusMarket: string;
  unitCount: number;
  trackedCapital: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  logo: string;
  backgroundImage: string;
  keyMetrics: {
    label: string;
    value: string;
  }[];
  operationalFocus: string[];
  status: "active" | "launching" | "planning";
}

export const brands: Brand[] = [
  {
    id: "olmez",
    slug: "olmez",
    name: "Ölmez Franchise Systems",
    tagline: "Restaurant Business Infrastructure",
    description:
      "Premium Turkish restaurants in global hubs (London, Edinburgh, New York) establishing cultural authority and serving as training centers. Gas station franchise units in the US market.",
    founded: "2020",
    headquarters: "Edinburgh, UK",
    focusMarket: "Global (UK, Europe, US)",
    unitCount: 147,
    trackedCapital: "$16.5M",
    theme: {
      primary: "#8B5A3C",
      secondary: "#A0674A",
      accent: "#6B4423",
    },
    logo: "/olmez-full-logo.svg",
    backgroundImage: "/images/olmez-bg.jpg",
    keyMetrics: [
      { label: "Active Units", value: "147" },
      { label: "Daily Gain Range", value: "$200–$1,400" },
      { label: "Payback Target", value: "30 months" },
      { label: "Units At Target", value: "72%" },
    ],
    operationalFocus: [
      "Full Turkish Restaurants",
      "Gas Station Units",
      "Operator Development",
    ],
    status: "active",
  },
  {
    id: "shawarmer",
    slug: "shawarmer",
    name: "SHAWARMA TIME",
    arabicName: "شاورما تايم",
    tagline: "US Food Station Platform",
    description:
      "High-efficiency shawarma units integrated into US gas station infrastructure. Specializing in quick-service food stations that transform fuel stops into measurable food inventory conversion points.",
    founded: "2026",
    headquarters: "New York, USA",
    focusMarket: "United States",
    unitCount: 42,
    trackedCapital: "$6.9M",
    theme: {
      primary: "#8B3A3A",
      secondary: "#A04545",
      accent: "#6B2E2E",
    },
    logo: "/shawarmer-logo.svg",
    backgroundImage: "/images/shawarmer-bg.jpg",
    keyMetrics: [
      { label: "Active Units", value: "42" },
      { label: "Markets", value: "12 States" },
      { label: "Avg Daily Gain", value: "$450–$950" },
      { label: "Time to Profitability", value: "6-8 weeks" },
    ],
    operationalFocus: [
      "Shawarma Preparation",
      "Gas Station Integration",
      "Inventory Optimization",
    ],
    status: "active",
  },
  {
    id: "turkishpide",
    slug: "turkishpide",
    name: "Turkish PIDE Co.",
    tagline: "Mediterranean Bakery Platform",
    description:
      "Artisan Turkish pide bakery stations with focus on European markets. Premium baked goods with fresh preparation and heritage recipes.",
    founded: "2026",
    headquarters: "Istanbul, Turkey",
    focusMarket: "Europe",
    unitCount: 28,
    trackedCapital: "$4.2M",
    theme: {
      primary: "#D4A574",
      secondary: "#E8B887",
      accent: "#C08D5C",
    },
    logo: "/pide-logo.svg",
    backgroundImage: "/images/pide-bg.jpg",
    keyMetrics: [
      { label: "Active Units", value: "28" },
      { label: "Countries", value: "6" },
      { label: "Avg Daily Gain", value: "$380–$750" },
      { label: "Specialization", value: "Bakery & Deli" },
    ],
    operationalFocus: [
      "Artisan Bakery",
      "Heritage Recipes",
      "Premium Positioning",
    ],
    status: "active",
  },
  {
    id: "affarem",
    slug: "affarem",
    name: "AFFAREM",
    tagline: "Asset Franchise & Field Management",
    description:
      "The internal branch and franchise management layer of the SevetTeam ecosystem, coordinating investors, operators, designers, accountants, compliance, and field performance inside one measurable operating environment.",
    founded: "2022",
    headquarters: "London, UK",
    focusMarket: "Internal Branch & Franchise Management",
    unitCount: 215,
    trackedCapital: "$2.8M",
    theme: {
      primary: "#2E5C7F",
      secondary: "#3D7BA3",
      accent: "#1F3A4F",
    },
    logo: "/affarem-logo.svg",
    backgroundImage: "/images/affarem-bg.jpg",
    keyMetrics: [
      { label: "Connected Units", value: "215" },
      { label: "Uptime", value: "99.8%" },
      { label: "Monthly Revenue", value: "$65K+" },
      { label: "System Scope", value: "Investor to Field" },
    ],
    operationalFocus: [
      "Branch Management",
      "Franchise Monitoring",
      "Field Performance Control",
    ],
    status: "active",
  },
  {
    id: "disciplina",
    slug: "disciplina",
    name: "DISCIPLINA",
    tagline: "Operator Excellence Training",
    description:
      "Comprehensive operator training and development platform. Micro-start program with tiered entry system starting at $1,000–$2,000, designed to cultivate disciplined pipeline of shift-managers.",
    founded: "2024",
    headquarters: "Istanbul, Turkey",
    focusMarket: "Global",
    unitCount: 180,
    trackedCapital: "$1.2M",
    theme: {
      primary: "#1B5E20",
      secondary: "#2E7D32",
      accent: "#1565C0",
    },
    logo: "/disciplina-logo.svg",
    backgroundImage: "/images/disciplina-bg.jpg",
    keyMetrics: [
      { label: "Program Participants", value: "180" },
      { label: "Success Rate", value: "94%" },
      { label: "Graduation Rate", value: "87%" },
      { label: "Avg Advancement", value: "8 months" },
    ],
    operationalFocus: [
      "Operator Development",
      "Smart Discipline Training",
      "Leadership Pipeline",
    ],
    status: "active",
  },
];

export const getBrand = (slug: string): Brand | undefined => {
  return brands.find((brand) => brand.slug === slug);
};

export const getBrandTheme = (slug: string) => {
  const brand = getBrand(slug);
  return brand?.theme || brands[0].theme;
};
