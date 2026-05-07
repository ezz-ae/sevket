import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { siteMetrics } from "@/lib/site-metrics";

export interface AchievementCategory {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface AchievementYear {
  year: string;
  status: "published" | "planned";
  title: string;
  summary: string;
  heroImage: {
    src: string;
    alt: string;
  };
  categories: AchievementCategory[];
}

const archiveTemplate = [
  "Business Growth",
  "AFFAREM Development",
  "Social Responsibility",
  "Education & Student Support",
  "Franchise Network",
  "Events & Media",
  "Annual Summary",
];

export const achievementFolderTree = `Achievements
├── 2026
│   ├── Business Growth
│   ├── AFFAREM Development
│   ├── Social Responsibility
│   ├── Education & Student Support
│   ├── Franchise Network
│   ├── Events & Media
│   └── Annual Summary
├── 2027
│   ├── Business Growth
│   ├── AFFAREM Development
│   ├── Social Responsibility
│   ├── Education & Student Support
│   ├── Franchise Network
│   ├── Events & Media
│   └── Annual Summary
├── 2028
│   └── Same structure
└── Archive`;

export const achievementYears: AchievementYear[] = [
  {
    year: "2026",
    status: "published",
    title: "2026 operational and social impact record",
    summary:
      "The 2026 archive combines growth, AFFAREM rollout, student support, Turkish village education, and the company’s first formal achievements structure.",
    heroImage: olmezBrandAssets.images.folderTimeline,
    categories: [
      {
        slug: "business-growth",
        title: "Business Growth",
        summary:
          "Growth in 2026 was framed around disciplined scaling, premium flagship authority, and expansion of compact U.S. food assets.",
        highlights: [
          "Premium Turkish Houses continued to anchor cultural authority in major cities.",
          "The U.S. gas station model remained the main repeatable growth engine.",
          "The company kept the rule: never scale confusion.",
        ],
        image: olmezBrandAssets.images.achievementsWall,
      },
      {
        slug: "affarem-development",
        title: "AFFAREM Development",
        summary:
          "The control layer deepened its role as the operating room for investors, accountants, operators, and LiveOps intervention.",
        highlights: [
          "Investor Room, Design Session Room, Operator Room, Accountant Room, LiveOps Room, and Payback Room remained core to the stack.",
          "Smart Discipline Score stayed central to account expansion rights.",
          "Remote visibility and reporting discipline continued to define the model.",
        ],
        image: olmezBrandAssets.images.reception,
      },
      {
        slug: "social-responsibility",
        title: "Social Responsibility",
        summary:
          "Responsibility in 2026 was built around measurable environmental and community commitments instead of symbolic philanthropy.",
        highlights: [
          "One tree committed for every 100 bills generated through operations.",
          "Village education campaigns expanded across Turkey.",
          "Responsibility was designed to be visible, structured, and reportable.",
        ],
        image: olmezBrandAssets.images.treePlanting,
      },
      {
        slug: "education-student-support",
        title: "Education & Student Support",
        summary:
          "The company formalized a stronger support path for students, hospitality learners, and families managing education costs.",
        highlights: [
          `${siteMetrics.studentSponsorshipCurrent} students sponsored with a public target of ${siteMetrics.studentSponsorshipTarget}.`,
          "Paid hospitality internships structured around 4–7 hour working days.",
          "School support, books, and equipment linked education to employability.",
        ],
        image: olmezBrandAssets.images.studentSupport,
      },
      {
        slug: "franchise-network",
        title: "Franchise Network",
        summary:
          "The network matured around the British-Istanbul operating bridge, the 4-investor model, and the operator ladder from Micro-Start to multi-unit.",
        highlights: [
          "42 British franchise holders remained an important cross-border discipline story.",
          "The 4-investor branch model kept accountability attached to ownership.",
          "Micro-Start stayed positioned as a human capital ladder, not a symbolic entry point.",
        ],
        image: olmezBrandAssets.images.peopleEvent,
      },
      {
        slug: "events-media",
        title: "Events & Media",
        summary:
          "Events and media turned the business system into public belief through showcases, publications, and cultural programming.",
        highlights: [
          "The Turkish Chef sponsorship concept expanded the cultural side of the brand.",
          "Investor-facing events and demonstrations supported trust formation.",
          "Magazine and editorial outputs reinforced Ölmez as a business system, not only a food brand.",
        ],
        image: olmezBrandAssets.images.turkishChef,
      },
      {
        slug: "annual-summary",
        title: "Annual Summary",
        summary:
          "The annual summary held together unit economics, capital recovery logic, people programs, and social initiatives within one disciplined reporting frame.",
        highlights: [
          "Target payback discipline remained a defining investor narrative.",
          "Operational reporting and public narrative were brought closer together.",
          "Achievements were organized into a repeatable annual archive structure.",
        ],
        image: olmezBrandAssets.editorial[0],
      },
    ],
  },
  {
    year: "2027",
    status: "planned",
    title: "2027 archive scaffold",
    summary:
      "The 2027 achievements folder is prepared with the same category structure so annual records can be published without rebuilding the reporting system.",
    heroImage: olmezBrandAssets.images.achievementsWall,
    categories: archiveTemplate.map((title, index) => ({
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title,
      summary:
        "Reserved for the 2027 annual cycle. The structure is in place so performance, programs, and media can be archived consistently.",
      highlights: [
        "Category shell ready for 2027 reporting.",
        "Designed to keep each year comparable.",
        "Prepared for archive publication once the year closes.",
      ],
      image: [
        olmezBrandAssets.images.reception,
        olmezBrandAssets.images.folderTimeline,
        olmezBrandAssets.images.treePlanting,
        olmezBrandAssets.images.studentSupport,
        olmezBrandAssets.images.peopleEvent,
        olmezBrandAssets.images.networking,
        olmezBrandAssets.editorial[1],
      ][index],
    })),
  },
  {
    year: "2028",
    status: "planned",
    title: "2028 archive scaffold",
    summary:
      "The 2028 folder mirrors the same yearly structure, preserving a stable archive format for future achievements and annual reporting.",
    heroImage: olmezBrandAssets.images.folderTimeline,
    categories: archiveTemplate.map((title, index) => ({
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title,
      summary:
        "Reserved for the 2028 annual cycle. The archive structure is prebuilt to protect continuity across the department.",
      highlights: [
        "Same structure as 2026 and 2027.",
        "Ready for achievements, reports, and media evidence.",
        "Supports year-over-year review without redesign.",
      ],
      image: [
        olmezBrandAssets.images.achievementsWall,
        olmezBrandAssets.images.reception,
        olmezBrandAssets.images.treePlanting,
        olmezBrandAssets.images.paidInternship,
        olmezBrandAssets.images.peopleEvent,
        olmezBrandAssets.images.turkishChef,
        olmezBrandAssets.editorial[2],
      ][index],
    })),
  },
];

export const achievementYearMap = Object.fromEntries(
  achievementYears.map((year) => [year.year, year])
) as Record<string, AchievementYear>;
