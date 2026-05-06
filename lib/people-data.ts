export type JobCountry = "United States" | "Turkey" | "United Kingdom";
export type JobDepartment =
  | "Culinary"
  | "Service"
  | "Operations"
  | "Logistics"
  | "People"
  | "Growth"
  | "Finance";

export type JobOpening = {
  id: string;
  title: string;
  department: JobDepartment;
  country: JobCountry;
  city: string;
  office: string;
  workMode: "On-site" | "Field" | "Hybrid";
  employmentType: "Full-time";
  team: string;
  summary: string;
  focus: string;
  responsibilities: string[];
  requirements: string[];
  applySteps: string[];
  applyEmail: string;
  applySubject: string;
  isAI: boolean;
};

type JobTemplate = {
  department: JobDepartment;
  team: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  applyChecklist: string[];
};

type JobSeed = {
  id: string;
  title: string;
  template: keyof typeof templates;
  country: JobCountry;
  city: string;
  office: string;
  workMode: "On-site" | "Field" | "Hybrid";
  focus: string;
  applyEmail: string;
  isAI?: boolean;
};

const templates = {
  chef: {
    department: "Culinary",
    team: "Kitchen Leadership",
    summary:
      "Lead disciplined kitchen execution, menu consistency, mise en place control, and shift readiness inside the Ölmez operating standard.",
    responsibilities: [
      "Run prep, service, and close-down routines with exact recipe, hygiene, and timing compliance.",
      "Coach line cooks and junior kitchen staff on station discipline, food safety, and ticket flow.",
      "Coordinate with captains and cashiers so the guest experience stays smooth under pressure.",
    ],
    requirements: [
      "2+ years in a structured kitchen, premium casual dining operation, or high-volume service environment.",
      "Strong command of food safety, stock rotation, and portion discipline.",
      "Comfort working to checklists, shift targets, and documented operating standards.",
    ],
    applyChecklist: [
      "Updated CV with your most recent kitchen roles.",
      "A short note on the type of volume or service style you handle best.",
      "Availability for trial shift, weekend work, and relocation if applicable.",
    ],
  },
  steward: {
    department: "Service",
    team: "Back-of-House Support",
    summary:
      "Keep the kitchen and service zones clean, stocked, and shift-ready so operating rhythm never breaks.",
    responsibilities: [
      "Maintain wash-up, sanitation, and restocking routines through the entire shift.",
      "Support chefs and service teams with fast resets, equipment care, and clean handoffs.",
      "Monitor back-of-house order, waste control, and breakage reporting.",
    ],
    requirements: [
      "Experience in stewarding, cleaning operations, or back-of-house support is preferred.",
      "Able to stay organized during rush periods and repetitive task cycles.",
      "Reliable attendance, physical stamina, and attention to hygiene detail.",
    ],
    applyChecklist: [
      "Updated CV or short work history summary.",
      "Reference contact from your latest hospitality or facility role.",
      "Earliest start date and preferred shift pattern.",
    ],
  },
  delivery: {
    department: "Logistics",
    team: "Delivery & Dispatch",
    summary:
      "Coordinate orders, last-mile execution, and service handoff timing so customers receive the brand promise without operational drift.",
    responsibilities: [
      "Track order status, dispatch timing, and customer handoff quality in real time.",
      "Work across stores, drivers, and captains to protect accuracy and delivery SLAs.",
      "Escalate delays, reroute issues, or packaging failures before they affect the guest experience.",
    ],
    requirements: [
      "Experience in dispatch, food delivery coordination, or high-tempo order operations.",
      "Confident communicator with calm judgment under live service pressure.",
      "Comfort with shift dashboards, messaging tools, and operational checklists.",
    ],
    applyChecklist: [
      "Updated CV with delivery, dispatch, or service coordination experience.",
      "Short note describing the busiest environment you have handled.",
      "Availability for evenings, weekends, and peak service windows.",
    ],
  },
  carService: {
    department: "Operations",
    team: "Guest Mobility",
    summary:
      "Support premium guest movement, executive transport coordination, and car service quality around flagship offices and partner locations.",
    responsibilities: [
      "Coordinate schedules, vehicle readiness, and guest-facing presentation standards.",
      "Handle route changes, timing adjustments, and priority guest requests professionally.",
      "Work with office, hospitality, and security teams to keep movement friction low.",
    ],
    requirements: [
      "Experience in hospitality transport, concierge operations, or chauffeur coordination.",
      "Strong communication skills with a polished guest-facing approach.",
      "Able to work with schedules, live updates, and professional confidentiality.",
    ],
    applyChecklist: [
      "Updated CV showing transport, concierge, or premium service experience.",
      "Driving license status if relevant to the role.",
      "Availability for split shifts, airport runs, or executive travel cover.",
    ],
  },
  cashier: {
    department: "Service",
    team: "Front Counter",
    summary:
      "Operate the front counter with speed, accuracy, and clear guest communication while protecting queue flow and payment accuracy.",
    responsibilities: [
      "Process orders and payments accurately across peak and off-peak periods.",
      "Keep the counter zone tidy, stocked, and ready for fast service resets.",
      "Resolve simple guest questions while escalating issues cleanly to the captain or manager.",
    ],
    requirements: [
      "Experience in cashiering, quick-service operations, or customer-facing hospitality.",
      "Comfort with POS systems, cash handling, and upsell prompts.",
      "Professional tone, dependable attendance, and shift discipline.",
    ],
    applyChecklist: [
      "Updated CV or recent customer-service work history.",
      "Short note on languages spoken and POS systems used.",
      "Preferred city and earliest start date.",
    ],
  },
  storeOfficer: {
    department: "Operations",
    team: "Inventory Control",
    summary:
      "Protect stock accuracy, receiving discipline, and operational readiness across storerooms and branch supply flows.",
    responsibilities: [
      "Receive, label, count, and rotate stock to standard with zero ambiguity.",
      "Maintain storage order, shrink control, and daily discrepancy reporting.",
      "Coordinate with procurement, finance, and branch managers on replenishment timing.",
    ],
    requirements: [
      "Experience in stock control, warehouse routines, or restaurant inventory operations.",
      "Comfort working with counts, reconciliation sheets, and storage standards.",
      "Strong detail orientation and accountability for handoff accuracy.",
    ],
    applyChecklist: [
      "Updated CV with stock, store, or warehouse experience.",
      "Example of any inventory software or reporting tools used.",
      "Availability for opening, receiving, or weekend schedules.",
    ],
  },
  procurement: {
    department: "Operations",
    team: "Procurement & Vendor Control",
    summary:
      "Manage purchasing discipline, vendor follow-through, and replenishment planning so branches stay supplied without leakage or confusion.",
    responsibilities: [
      "Source and place orders to approved vendor standards and lead-time requirements.",
      "Track pricing changes, delivery performance, and replenishment risk across live branches.",
      "Work with finance and store teams to keep purchase records accurate and fully supported.",
    ],
    requirements: [
      "Experience in procurement, purchasing, supply coordination, or vendor management.",
      "Strong attention to lead times, order accuracy, and supplier follow-up.",
      "Comfort balancing operational urgency with disciplined documentation.",
    ],
    applyChecklist: [
      "Updated CV showing procurement, purchasing, or supply chain experience.",
      "Short note on categories or vendor volumes handled most recently.",
      "Availability for branch visits, supplier meetings, or urgent replenishment support.",
    ],
  },
  captain: {
    department: "Service",
    team: "Front-of-House Leadership",
    summary:
      "Run the floor with calm authority, clear service flow, and strong shift discipline across guest experience, team coordination, and escalation handling.",
    responsibilities: [
      "Lead pre-shift briefing, service pacing, and handoff quality between counter and kitchen.",
      "Coach cashiers and service staff on standards, language, and table-side judgment.",
      "Own guest recovery on service issues before they become brand damage.",
    ],
    requirements: [
      "2+ years in front-of-house leadership, shift supervision, or restaurant captain roles.",
      "Strong presence, attention to detail, and guest communication skills.",
      "Comfort owning targets, opening and closing checklists, and live escalation decisions.",
    ],
    applyChecklist: [
      "Updated CV with leadership scope and service environment type.",
      "Short note on team size and shift volume previously handled.",
      "Availability for late service and weekend leadership shifts.",
    ],
  },
  recruitment: {
    department: "People",
    team: "Talent & People Operations",
    summary:
      "Build disciplined hiring pipelines, screen talent against operating standards, and keep recruitment organized across markets and teams.",
    responsibilities: [
      "Manage sourcing, screening, scheduling, and offer coordination for assigned roles.",
      "Keep candidate communication tight, fast, and brand-appropriate.",
      "Partner with operations leaders on role briefs, interview packs, and start-date readiness.",
    ],
    requirements: [
      "Experience in recruitment, hiring coordination, or people operations.",
      "Strong writing, scheduling, and stakeholder communication skills.",
      "Comfort working across multiple live openings and structured scorecards.",
    ],
    applyChecklist: [
      "Updated CV with recruitment or people operations experience.",
      "Short note on the roles and volumes you have hired for.",
      "Example of ATS, hiring tracker, or interview coordination workflow used.",
    ],
  },
  marketing: {
    department: "Growth",
    team: "Brand & Market Growth",
    summary:
      "Translate the Ölmez brand system into campaigns, local launches, and performance-oriented growth work without losing editorial discipline.",
    responsibilities: [
      "Plan and execute market-facing campaigns around launches, seasonal moments, and store priorities.",
      "Coordinate creative, community, and branch teams so the brand stays consistent on the ground.",
      "Report on campaign performance, guest response, and next-step opportunities.",
    ],
    requirements: [
      "Experience in brand marketing, field marketing, or multi-location campaign execution.",
      "Strong eye for copy, visual consistency, and performance reporting.",
      "Comfort balancing premium brand direction with practical commercial targets.",
    ],
    applyChecklist: [
      "Updated CV and link to campaigns, decks, or launch work.",
      "Short note on the type of market activation you execute best.",
      "Availability for branch visits, launches, or event coverage.",
    ],
  },
  social: {
    department: "Growth",
    team: "Content & Social",
    summary:
      "Create and manage social content that feels premium, disciplined, and operationally true to the Ölmez flagship identity.",
    responsibilities: [
      "Plan monthly content calendars, live coverage, and short-form storytelling around the brand.",
      "Capture or direct content from offices, teams, and launch moments with consistent tone.",
      "Track engagement patterns and recommend stronger creative or distribution moves.",
    ],
    requirements: [
      "Experience managing social media, content calendars, or creator-style capture workflows.",
      "Strong taste level with confidence across captions, editing, and brand voice.",
      "Able to move quickly on shoots, approvals, and same-day publishing requests.",
    ],
    applyChecklist: [
      "Updated CV and portfolio or account links.",
      "Three examples of content formats you execute confidently.",
      "Availability for evening or launch-day content capture.",
    ],
  },
  accountant: {
    department: "Finance",
    team: "Finance & Control",
    summary:
      "Protect daily financial accuracy, reconciliations, and reporting discipline across branches, vendors, and office operations.",
    responsibilities: [
      "Handle daily reconciliations, invoice checks, and branch reporting reviews.",
      "Coordinate with operations and procurement on discrepancies, accruals, and missing support.",
      "Keep finance files clean, current, and ready for audit or leadership review.",
    ],
    requirements: [
      "Experience in accounting, branch finance, bookkeeping, or cost control.",
      "Strong spreadsheet discipline and attention to source documentation.",
      "Comfort working with deadlines, reconciliations, and multi-entity reporting.",
    ],
    applyChecklist: [
      "Updated CV with accounting software and reconciliation scope.",
      "Short note on the reporting cycle you have handled most recently.",
      "Availability for month-end close, weekend counts, or branch travel if needed.",
    ],
  },
  driver: {
    department: "Logistics",
    team: "Fleet & Route Execution",
    summary:
      "Move stock, people, or service-critical items reliably while protecting time, safety, and brand presentation.",
    responsibilities: [
      "Complete assigned routes with clean communication and precise timing.",
      "Maintain vehicle readiness, paperwork, and loading discipline.",
      "Escalate route issues quickly and work closely with dispatch or branch teams.",
    ],
    requirements: [
      "Valid license with clean driving record and strong local route knowledge.",
      "Experience in delivery driving, fleet support, or executive transport is preferred.",
      "Reliable, punctual, and comfortable representing the brand in person.",
    ],
    applyChecklist: [
      "Updated CV or work history showing driving experience.",
      "License class, city of residence, and route familiarity.",
      "Availability for early starts, late returns, or weekend driving cover.",
    ],
  },
  aiMarketing: {
    department: "Growth",
    team: "AI Growth Systems",
    summary:
      "Use AI tooling to accelerate campaign planning, audience analysis, reporting, and production workflows inside a premium brand environment.",
    responsibilities: [
      "Design AI-assisted workflows for campaign briefs, channel reporting, and content production.",
      "Translate brand strategy into scalable prompts, templates, and operating rules.",
      "Train marketing teams to use AI systems without lowering brand quality.",
    ],
    requirements: [
      "Experience in marketing operations, AI workflow design, or growth systems.",
      "Strong grounding in brand strategy plus hands-on comfort with automation and prompt design.",
      "Able to explain technical systems clearly to creative and commercial teams.",
    ],
    applyChecklist: [
      "Updated CV and links to AI-enabled marketing workflows or case studies.",
      "Short note on one automation you built that improved campaign speed or quality.",
      "Preferred office base and availability for hybrid collaboration in the UK.",
    ],
  },
  aiAccounting: {
    department: "Finance",
    team: "AI Finance Systems",
    summary:
      "Build AI-assisted finance workflows across reconciliation, anomaly review, document classification, and management reporting.",
    responsibilities: [
      "Map accounting processes that can be safely improved with AI and automation.",
      "Work with finance leaders to design controls, review gates, and exception-handling rules.",
      "Document and maintain reliable reporting workflows for multi-office finance operations.",
    ],
    requirements: [
      "Experience in accounting plus workflow automation, analytics, or AI-enabled finance operations.",
      "Strong understanding of controls, reconciliation quality, and audit-readiness.",
      "Able to bridge financial accuracy with practical systems implementation.",
    ],
    applyChecklist: [
      "Updated CV and overview of finance systems you have improved or automated.",
      "Short note on your experience with AI, scripts, or automation platforms.",
      "Availability for hybrid UK office work and quarterly cross-office travel.",
    ],
  },
} satisfies Record<string, JobTemplate>;

const seeds: JobSeed[] = [
  {
    id: "PEO-TR-001",
    title: "Executive Chef",
    template: "chef",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul Flagship Kitchen",
    workMode: "On-site",
    focus: "Own the opening kitchen standard for the flagship team and mentor senior station leads.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-002",
    title: "Sous Chef",
    template: "chef",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul Flagship Kitchen",
    workMode: "On-site",
    focus: "Drive shift execution, prep control, and handoff quality under the Executive Chef.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-003",
    title: "Line Chef",
    template: "chef",
    country: "Turkey",
    city: "Ankara",
    office: "Ankara Branch",
    workMode: "On-site",
    focus: "Run a disciplined hot line during lunch and dinner service with strong ticket timing.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-004",
    title: "Steward",
    template: "steward",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul Flagship Kitchen",
    workMode: "On-site",
    focus: "Keep the flagship dish area and prep support zone service-ready across long shifts.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-005",
    title: "Steward",
    template: "steward",
    country: "Turkey",
    city: "Izmir",
    office: "Izmir Coastal Branch",
    workMode: "On-site",
    focus: "Support a fast service cycle with high cleanliness discipline and strong back-of-house resets.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-006",
    title: "Delivery Coordinator",
    template: "delivery",
    country: "Turkey",
    city: "Ankara",
    office: "Ankara Dispatch Desk",
    workMode: "On-site",
    focus: "Coordinate branch handoff timing and third-party delivery windows across central routes.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-007",
    title: "Delivery Dispatcher",
    template: "delivery",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul Operations Desk",
    workMode: "On-site",
    focus: "Own delivery routing updates and escalation handling during flagship rush periods.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-008",
    title: "Car Service Concierge",
    template: "carService",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul Executive Services",
    workMode: "Field",
    focus: "Support guest transport and executive movement tied to office, airport, and partner visits.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-009",
    title: "Cashier",
    template: "cashier",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul Flagship Counter",
    workMode: "On-site",
    focus: "Handle flagship counter flow and high guest interaction volume with polished communication.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-010",
    title: "Cashier",
    template: "cashier",
    country: "Turkey",
    city: "Bursa",
    office: "Bursa Branch",
    workMode: "On-site",
    focus: "Protect queue flow and payment accuracy in a high-turnover branch environment.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-011",
    title: "Store Officer",
    template: "storeOfficer",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul Central Stores",
    workMode: "On-site",
    focus: "Own central receiving, weekly counts, and flagship stock accuracy.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-012",
    title: "Store Officer",
    template: "storeOfficer",
    country: "Turkey",
    city: "Izmir",
    office: "Izmir Coastal Branch",
    workMode: "On-site",
    focus: "Control branch-level storeroom discipline with tight shelf rotation and receiving logs.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-013",
    title: "Restaurant Captain",
    template: "captain",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul Flagship Floor",
    workMode: "On-site",
    focus: "Lead service language and floor control for the flagship guest room.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-014",
    title: "Restaurant Captain",
    template: "captain",
    country: "Turkey",
    city: "Ankara",
    office: "Ankara Branch",
    workMode: "On-site",
    focus: "Strengthen shift leadership and front-of-house guest recovery in a growth market branch.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-015",
    title: "Procurement Officer",
    template: "procurement",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul Central Procurement",
    workMode: "On-site",
    focus: "Bridge purchasing, receiving, and branch stock accuracy for core supply categories.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-016",
    title: "Recruitment Coordinator",
    template: "recruitment",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul People Desk",
    workMode: "Hybrid",
    focus: "Support hiring across culinary, service, and driver pipelines in Turkey.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-017",
    title: "Marketing Coordinator",
    template: "marketing",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul Brand Desk",
    workMode: "Hybrid",
    focus: "Coordinate launch support, branch campaigns, and premium local activations.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-018",
    title: "Social Media Content Producer",
    template: "social",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul Brand Desk",
    workMode: "Hybrid",
    focus: "Capture flagship content and translate the room, food, and founder story into short-form output.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-019",
    title: "Accountant",
    template: "accountant",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul Finance Desk",
    workMode: "Hybrid",
    focus: "Own flagship branch reconciliation, invoice control, and vendor ledger readiness.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-020",
    title: "Accountant",
    template: "accountant",
    country: "Turkey",
    city: "Ankara",
    office: "Ankara Finance Support",
    workMode: "Hybrid",
    focus: "Support branch finance discipline with weekly close, petty cash, and stock variance review.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-021",
    title: "Driver",
    template: "driver",
    country: "Turkey",
    city: "Istanbul",
    office: "Istanbul Fleet Desk",
    workMode: "Field",
    focus: "Cover branch, office, and vendor routes with clean timing and professional presentation.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-TR-022",
    title: "Driver",
    template: "driver",
    country: "Turkey",
    city: "Bursa",
    office: "Bursa Fleet Desk",
    workMode: "Field",
    focus: "Support branch transfer routes and urgent stock movement across Bursa service zones.",
    applyEmail: "people.tr@olmez.franchise.systems",
  },
  {
    id: "PEO-US-023",
    title: "Executive Chef",
    template: "chef",
    country: "United States",
    city: "New York",
    office: "New York Flagship Kitchen",
    workMode: "On-site",
    focus: "Lead disciplined kitchen execution for the U.S. flagship and train future market leads.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-024",
    title: "Prep Chef",
    template: "chef",
    country: "United States",
    city: "Houston",
    office: "Texas Branch",
    workMode: "On-site",
    focus: "Own prep accuracy, cold line readiness, and production consistency in a fast service branch.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-025",
    title: "Steward",
    template: "steward",
    country: "United States",
    city: "Newark",
    office: "New Jersey Branch",
    workMode: "On-site",
    focus: "Support wash-up, back-of-house resets, and branch hygiene discipline across double shifts.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-026",
    title: "Steward",
    template: "steward",
    country: "United States",
    city: "Miami",
    office: "Florida Branch",
    workMode: "On-site",
    focus: "Maintain clean handoffs and sanitation rhythm in a guest-heavy location.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-027",
    title: "Delivery Supervisor",
    template: "delivery",
    country: "United States",
    city: "New York",
    office: "New York Dispatch Desk",
    workMode: "On-site",
    focus: "Own route coordination, app-partner escalation, and branch service-level delivery standards.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-028",
    title: "Delivery Runner",
    template: "delivery",
    country: "United States",
    city: "Houston",
    office: "Texas Dispatch Desk",
    workMode: "Field",
    focus: "Support same-day branch delivery pressure with strong timing, communication, and customer handoff care.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-029",
    title: "Car Service Lead",
    template: "carService",
    country: "United States",
    city: "New York",
    office: "New York Executive Services",
    workMode: "Field",
    focus: "Coordinate guest movement, airport runs, and premium transport standards around the flagship office.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-030",
    title: "Car Service Dispatcher",
    template: "carService",
    country: "United States",
    city: "Miami",
    office: "Florida Executive Services",
    workMode: "Hybrid",
    focus: "Handle bookings, driver coordination, and arrival timing for premium guest movement.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-031",
    title: "Cashier",
    template: "cashier",
    country: "United States",
    city: "New York",
    office: "New York Flagship Counter",
    workMode: "On-site",
    focus: "Protect front-counter flow and guest confidence during high-volume flagship service.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-032",
    title: "Cashier",
    template: "cashier",
    country: "United States",
    city: "Houston",
    office: "Texas Branch",
    workMode: "On-site",
    focus: "Run accurate POS flow and fast guest handoff inside a growth-market branch.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-033",
    title: "Store Officer",
    template: "storeOfficer",
    country: "United States",
    city: "Newark",
    office: "New Jersey Inventory Hub",
    workMode: "On-site",
    focus: "Control receiving, transfers, and branch inventory accuracy for the U.S. east corridor.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-034",
    title: "Store Officer",
    template: "storeOfficer",
    country: "United States",
    city: "Miami",
    office: "Florida Branch",
    workMode: "On-site",
    focus: "Maintain branch stock discipline and shrink prevention during rapid service cycles.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-035",
    title: "Restaurant Captain",
    template: "captain",
    country: "United States",
    city: "New York",
    office: "New York Flagship Floor",
    workMode: "On-site",
    focus: "Lead guest service language and floor command for the U.S. flagship room.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-036",
    title: "Restaurant Captain",
    template: "captain",
    country: "United States",
    city: "Miami",
    office: "Florida Branch",
    workMode: "On-site",
    focus: "Strengthen shift leadership, guest recovery, and FOH coaching in a fast-growth branch.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-037",
    title: "Procurement Specialist",
    template: "procurement",
    country: "United States",
    city: "New York",
    office: "New York Procurement Desk",
    workMode: "Hybrid",
    focus: "Bridge vendor purchasing, branch replenishment, and stock accuracy across U.S. sites.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-038",
    title: "Recruitment Specialist",
    template: "recruitment",
    country: "United States",
    city: "New York",
    office: "New York People Desk",
    workMode: "Hybrid",
    focus: "Own hiring coordination for U.S. kitchen, service, and driver talent pipelines.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-039",
    title: "Marketing Field Executive",
    template: "marketing",
    country: "United States",
    city: "New York",
    office: "New York Brand Desk",
    workMode: "Field",
    focus: "Execute on-the-ground campaigns, partner launches, and premium branch activations.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-040",
    title: "Social Media Community Manager",
    template: "social",
    country: "United States",
    city: "Miami",
    office: "Florida Brand Desk",
    workMode: "Hybrid",
    focus: "Translate U.S. branch activity and guest moments into premium, fast-moving social output.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-041",
    title: "Accountant",
    template: "accountant",
    country: "United States",
    city: "Houston",
    office: "Texas Finance Desk",
    workMode: "Hybrid",
    focus: "Own branch finance discipline, reconciliations, and vendor control across Texas operations.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-042",
    title: "Accountant",
    template: "accountant",
    country: "United States",
    city: "Newark",
    office: "New Jersey Finance Support",
    workMode: "Hybrid",
    focus: "Support east corridor reporting, close process, and cost variance review.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-043",
    title: "Senior Driver",
    template: "driver",
    country: "United States",
    city: "New York",
    office: "New York Fleet Desk",
    workMode: "Field",
    focus: "Cover premium executive movement and urgent branch transfer routes with strong timing discipline.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-US-044",
    title: "Route Driver",
    template: "driver",
    country: "United States",
    city: "Miami",
    office: "Florida Fleet Desk",
    workMode: "Field",
    focus: "Run scheduled stock and service support routes across Miami service zones.",
    applyEmail: "people.us@olmez.franchise.systems",
  },
  {
    id: "PEO-UK-045",
    title: "People & Recruitment Partner",
    template: "recruitment",
    country: "United Kingdom",
    city: "London",
    office: "London People Office",
    workMode: "Hybrid",
    focus: "Lead senior hiring coordination and employer-brand tone for UK office and leadership roles.",
    applyEmail: "people.uk@olmez.franchise.systems",
  },
  {
    id: "PEO-UK-046",
    title: "Brand Marketing Manager",
    template: "marketing",
    country: "United Kingdom",
    city: "Edinburgh",
    office: "Edinburgh Brand Office",
    workMode: "Hybrid",
    focus: "Own premium brand planning, publication launches, and cross-market campaign discipline.",
    applyEmail: "people.uk@olmez.franchise.systems",
  },
  {
    id: "PEO-UK-047",
    title: "AI Marketing Operations Lead",
    template: "aiMarketing",
    country: "United Kingdom",
    city: "London",
    office: "London AI Growth Office",
    workMode: "Hybrid",
    focus: "Build AI-enabled campaign systems for content, targeting, reporting, and editorial scaling.",
    applyEmail: "people.uk@olmez.franchise.systems",
    isAI: true,
  },
  {
    id: "PEO-UK-048",
    title: "AI Accounting Automation Manager",
    template: "aiAccounting",
    country: "United Kingdom",
    city: "Edinburgh",
    office: "Edinburgh Finance Systems Office",
    workMode: "Hybrid",
    focus: "Design AI-assisted finance workflows across reconciliation, controls, and reporting quality.",
    applyEmail: "people.uk@olmez.franchise.systems",
    isAI: true,
  },
];

export const peopleCulture = [
  {
    title: "Discipline beats charisma",
    body: "We hire for reliability, standards, and operating calm. The team should make the brand stronger on an ordinary day, not just a dramatic one.",
  },
  {
    title: "Rooms must stay ready",
    body: "Whether the work happens in a kitchen, a fleet route, or an office, the expectation is the same: hand off the shift cleaner than you received it.",
  },
  {
    title: "Systems are human work",
    body: "The brand looks premium because the people are structured. Human resourcing is not separate from operations here; it is one of the operating layers.",
  },
];

export const peopleRegions = [
  {
    country: "Turkey",
    cities: ["Istanbul", "Ankara", "Izmir", "Bursa"],
    summary:
      "Flagship, training, and branch roles across kitchen, service, finance, logistics, and people operations.",
  },
  {
    country: "United States",
    cities: ["New York", "Newark", "Houston", "Miami"],
    summary:
      "Growth-market hospitality, fleet, delivery, finance, and brand roles supporting U.S. expansion.",
  },
  {
    country: "United Kingdom",
    cities: ["Edinburgh", "London"],
    summary:
      "Four office-based roles focused on people, marketing, and AI-enabled growth and accounting systems.",
  },
];

export const peopleOpenings: JobOpening[] = seeds.map((seed) => {
  const template = templates[seed.template];

  return {
    id: seed.id,
    title: seed.title,
    department: template.department,
    country: seed.country,
    city: seed.city,
    office: seed.office,
    workMode: seed.workMode,
    employmentType: "Full-time",
    team: template.team,
    summary: template.summary,
    focus: seed.focus,
    responsibilities: [
      ...template.responsibilities,
      seed.focus,
    ],
    requirements: [
      ...template.requirements,
      `Must be able to work from ${seed.office} in ${seed.city}, ${seed.country}.`,
    ],
    applySteps: [
      "Email your application directly to the regional people team.",
      ...template.applyChecklist,
      `Use the subject line "${seed.id} — ${seed.title}" so the role is routed correctly.`,
    ],
    applyEmail: seed.applyEmail,
    applySubject: `${seed.id} — ${seed.title}`,
    isAI: Boolean(seed.isAI),
  };
});
