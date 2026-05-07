export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  country: string;
  category: string;
  tag: string;
  publishedAt: string;
  readTime: number;
  views: number;
  likes: number;
  shares: number;
};

export const stories: Story[] = [
  {
    slug: "from-counter-shift-to-branch-manager",
    title: "From Counter Shift to Branch Manager",
    excerpt:
      "A cashier learned the reporting rhythm, then became the person trusted to open and close the branch without losing control.",
    country: "United States",
    category: "Branch manager",
    tag: "Started small",
    publishedAt: "2026-05-04",
    readTime: 4,
    views: 12840,
    likes: 2190,
    shares: 347,
  },
  {
    slug: "the-intern-who-stayed-for-operations",
    title: "The Intern Who Stayed for Operations",
    excerpt:
      "A hospitality intern entered through a 6-hour shift model and grew into a field operations track.",
    country: "Turkey",
    category: "Hospitality intern",
    tag: "Training graduate",
    publishedAt: "2026-05-02",
    readTime: 3,
    views: 9740,
    likes: 1432,
    shares: 218,
  },
  {
    slug: "junior-investor-first-report",
    title: "A Junior Investor’s First Real Report",
    excerpt:
      "The first lesson was not the payout. It was learning what sales, costs, reserves, and timing actually mean.",
    country: "UAE",
    category: "Junior investor",
    tag: "AFFAREM learning",
    publishedAt: "2026-04-29",
    readTime: 5,
    views: 11206,
    likes: 1780,
    shares: 264,
  },
  {
    slug: "kitchen-staff-to-shift-lead",
    title: "Kitchen Staff to Shift Lead",
    excerpt:
      "A prep role became a leadership path when the person proved they could protect consistency under pressure.",
    country: "Jordan",
    category: "Kitchen staff",
    tag: "Kitchen discipline",
    publishedAt: "2026-04-25",
    readTime: 4,
    views: 8455,
    likes: 1162,
    shares: 190,
  },
  {
    slug: "operator-who-chose-reporting-first",
    title: "The Operator Who Chose Reporting First",
    excerpt:
      "Before chasing another unit, the operator fixed reports, waste logs, and team attendance. Growth came after that.",
    country: "Greece",
    category: "Operator",
    tag: "Growth path",
    publishedAt: "2026-04-21",
    readTime: 4,
    views: 10412,
    likes: 1524,
    shares: 233,
  },
  {
    slug: "people-office-private-support",
    title: "Why the People Office Stayed Direct",
    excerpt:
      "The company grew, but personal support stayed reachable through one direct people address.",
    country: "United Kingdom",
    category: "People support",
    tag: "Human system",
    publishedAt: "2026-04-18",
    readTime: 3,
    views: 7560,
    likes: 984,
    shares: 146,
  },
];
