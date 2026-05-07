import { olmezBrandAssets } from "@/lib/olmez-brand-assets";

export interface BrandPortalImage {
  src: string;
  alt: string;
  caption: string;
}

export interface BrandPortalCard {
  title: string;
  eyebrow: string;
  body: string;
  metric: string;
}

export interface BrandPortalLink {
  href: string;
  label: string;
  description: string;
  kind:
    | "reports"
    | "events"
    | "magazine"
    | "leadership"
    | "profile"
    | "achievements"
    | "social";
}

export interface BrandPortalContent {
  hero: {
    eyebrow: string;
    body: string;
    image: BrandPortalImage;
  };
  branchesIntro: string;
  branches: BrandPortalCard[];
  teamIntro: string;
  team: BrandPortalCard[];
  investmentIntro: string;
  investments: BrandPortalCard[];
  investorsIntro: string;
  investors: BrandPortalCard[];
  reviewsIntro: string;
  reviews: BrandPortalCard[];
  archiveIntro: string;
  archive: BrandPortalImage[];
  links: BrandPortalLink[];
}

const image = (
  src: string,
  alt: string,
  caption: string
): BrandPortalImage => ({
  src,
  alt,
  caption,
});

export const brandPortals: Record<string, BrandPortalContent> = {
  olmez: {
    hero: {
      eyebrow: "Flagship operating system",
      body:
        "Ölmez runs as a full brand command surface: flagship rooms, gas-station food assets, disciplined people systems, investor visibility, and long-form reporting tied into one operating language.",
      image: image(
        olmezBrandAssets.images.office.src,
        olmezBrandAssets.images.office.alt,
        "Main office and flagship reception"
      ),
    },
    branchesIntro:
      "The network is built to separate authority from throughput. Premium city rooms create trust. Roadside units turn movement into measured cash flow.",
    branches: [
      {
        title: "Edinburgh headquarters",
        eyebrow: "Flagship desk",
        body:
          "The room where publication, investor meetings, and identity control come together. This is the standard every other branch surface answers to.",
        metric: "HQ / board / editorial",
      },
      {
        title: "London and New York houses",
        eyebrow: "Brand authority",
        body:
          "Urban Turkish Houses anchor the premium end of the system, host investors, and act as visible proof that the food standard can hold high-rent environments.",
        metric: "Prestige market layer",
      },
      {
        title: "U.S. road-unit network",
        eyebrow: "Asset recovery",
        body:
          "Compact units inside existing traffic corridors convert routine fuel stops into disciplined food assets, monitored against payback and waste targets.",
        metric: "147 active units",
      },
    ],
    teamIntro:
      "Leadership is structured around accountability layers rather than ceremonial titles. The work is divided between operating truth, institutional trust, and people discipline.",
    team: [
      {
        title: "Founder office and governance",
        eyebrow: "Chairman / founder office",
        body:
          "Strategic timing, major capital decisions, design reviews, and portfolio discipline are filtered through the chairman and founder-office layer before expansion proceeds.",
        metric: "Central approval path",
      },
      {
        title: "People, government, and market relations",
        eyebrow: "Human + institutional layer",
        body:
          "People & culture, government relationship management, and market storytelling protect the company from scaling the brand faster than the operating behavior can support.",
        metric: "California / U.S. / Turkey",
      },
      {
        title: "Sales, events, and reporting",
        eyebrow: "Commercial discipline",
        body:
          "Sales qualifies capital, events stage trust, and annual reporting keeps the numbers legible for every serious stakeholder around the table.",
        metric: "UK / U.S. / annual cycle",
      },
    ],
    investmentIntro:
      "Capital options are intentionally separated by operating purpose, not by vanity. Each layer exists to answer a different risk and return profile.",
    investments: [
      {
        title: "Flagship restaurant platform",
        eyebrow: "Prestige allocation",
        body:
          "Designed for city-center authority, training visibility, and premium brand proof. Capital goes into room quality, culinary theater, and institutional hosting.",
        metric: "$245K+ build profile",
      },
      {
        title: "Road-unit branch model",
        eyebrow: "Core scalable asset",
        body:
          "The gas-station unit is the cleanest repeatable product in the system: limited menu, controlled labor, existing traffic, and aggressive payback visibility.",
        metric: "$165K standard unit",
      },
      {
        title: "Multi-unit operating cluster",
        eyebrow: "Portfolio growth",
        body:
          "For partners ready to graduate from a single branch into corridor management, shared dashboards, and a territory-level reporting cadence.",
        metric: "$300K+ portfolio path",
      },
    ],
    investorsIntro:
      "Investors do not buy distance from the work. They buy the right to participate inside a monitored operating environment with clear accountability rules.",
    investors: [
      {
        title: "Investor Room visibility",
        eyebrow: "Capital interface",
        body:
          "Every account can see branch status, design approvals, capital recovery, and corrective actions without needing a founder lecture to understand the truth.",
        metric: "AFFAREM live access",
      },
      {
        title: "Four-seat branch accountability",
        eyebrow: "25% seat structure",
        body:
          "Each branch is protected by four accountable seats. Investors either work a management role or appoint qualified representation for that shift responsibility.",
        metric: "4 investors / 4 seats",
      },
      {
        title: "LiveOps protection",
        eyebrow: "Intervention layer",
        body:
          "Underperforming branches are pulled into active correction mode with accountant oversight, two daily reviews, and on-site rescue when needed.",
        metric: "Two reviews per day",
      },
    ],
    reviewsIntro:
      "Review is built into the system at branch, portfolio, and annual levels so weak assets surface early instead of being buried behind narrative.",
    reviews: [
      {
        title: "Daily branch truth",
        eyebrow: "Operational review",
        body:
          "Sales, food cost, queue time, cleanliness, and reporting accuracy are read as live operating indicators rather than after-the-fact excuses.",
        metric: "$200-$1,400 gain ladder",
      },
      {
        title: "Quarterly capital review",
        eyebrow: "Portfolio review",
        body:
          "Expansion eligibility is tied to score behavior, payback progress, and branch-grade stability rather than investor optimism.",
        metric: "H1 / H2 / annual audit",
      },
      {
        title: "Achievements archive",
        eyebrow: "Annual review",
        body:
          "The achievements structure stores business growth, AFFAREM development, social responsibility, student support, events, and network progress by year.",
        metric: "2026-2028 live folders",
      },
    ],
    archiveIntro:
      "The local archive now feeds the portal directly, without recycled placeholders. These frames are the actual record behind the brand surface.",
    archive: [
      image(
        "/brand-library/olmez-founder-blackbackdrop.png",
        "Founder portrait against an Ölmez backdrop",
        "Formal brand portrait"
      ),
      image(
        "/brand-library/olmez-founder-office-chair.png",
        "Founder seated in an office chair",
        "Office portrait"
      ),
      image(
        "/brand-library/olmez-founder-red-chair-interview.png",
        "Founder seated for an interview in a red chair",
        "Interview setup"
      ),
      image(
        "/brand-library/olmez-founder-seated-portrait.png",
        "Founder seated in front of an Ölmez backdrop",
        "Founder archive"
      ),
      image(
        "/brand-library/olmez-founder-lounge-portrait.png",
        "Founder portrait in a lounge setting",
        "Lounge portrait"
      ),
      image(
        "/brand-library/olmez-business-review-issue-08.png",
        "Ölmez Business Review Issue 08 cover",
        "Editorial cover"
      ),
      image(
        "/brand-library/olmez-business-today-interview.png",
        "Founder interviewed with a Business Today microphone",
        "Press interview"
      ),
      image(
        "/brand-library/olmez-founder-journal-drive.png",
        "Founder candid frame during travel with a dog",
        "Founder journal"
      ),
      image(
        olmezBrandAssets.images.peopleEvent.src,
        olmezBrandAssets.images.peopleEvent.alt,
        "People and culture gathering"
      ),
      image(
        olmezBrandAssets.editorial[0].src,
        olmezBrandAssets.editorial[0].alt,
        "Issue 12 cover"
      ),
    ],
    links: [
      {
        href: "/brands/olmez/reports",
        label: "Reports Hub",
        description: "Strategic reports, capital deployment, and performance tiers.",
        kind: "reports",
      },
      {
        href: "/brands/olmez/events",
        label: "Events Calendar",
        description: "Investor meetings, branch sessions, and leadership briefings.",
        kind: "events",
      },
      {
        href: "/brands/olmez/magazine",
        label: "Magazine",
        description: "Field Notes, issue covers, and long-form editorial pieces.",
        kind: "magazine",
      },
      {
        href: "/people/leadership",
        label: "Leadership Profiles",
        description: "Individual articles for the active Ölmez leadership group.",
        kind: "leadership",
      },
      {
        href: "/company-profile",
        label: "Company Profile",
        description: "The ten-section editorial profile built from the local archive.",
        kind: "profile",
      },
      {
        href: "/social-responsibility",
        label: "Social Responsibility",
        description: "Tree planting, education support, and public-value commitments.",
        kind: "social",
      },
      {
        href: "/achievements",
        label: "Achievements",
        description: "Year-structured achievements folders with annual summaries.",
        kind: "achievements",
      },
    ],
  },
  shawarmer: {
    hero: {
      eyebrow: "Travel-lane food asset",
      body:
        "SHAWARMA TIME is the corridor brand inside the ecosystem: a compact, visible, fast-moving branch model built to turn fuel-stop movement into disciplined hot-food volume.",
      image: image(
        "/brand-library/shawarma-time-storefront-day.png",
        "SHAWARMA TIME branch integrated into a fuel-corridor roadside site",
        "Forecourt branch exterior"
      ),
    },
    branchesIntro:
      "Each location is designed around visibility, queue speed, and menu clarity. The branch should explain itself before the customer finishes fueling.",
    branches: [
      {
        title: "Texas roadside branch",
        eyebrow: "Exterior conversion",
        body:
          "The main roadside format blends a strong branded face with a compact service envelope and direct access from the forecourt.",
        metric: "Texas corridor format",
      },
      {
        title: "Houston counter service",
        eyebrow: "Front-line throughput",
        body:
          "Service speed, assembly logic, and the ability to handle lunch compression define the Houston-style counter footprint.",
        metric: "High-volume lunch window",
      },
      {
        title: "Night-trade site",
        eyebrow: "Extended hours",
        body:
          "The branch stays readable after dark, with strong line-of-sight branding and a service rhythm that fits late travel behavior.",
        metric: "Evening traffic capture",
      },
    ],
    teamIntro:
      "The brand depends on ordinary teams producing fast, stable service without menu inflation or emotional drift.",
    team: [
      {
        title: "Branch captain role",
        eyebrow: "Shift authority",
        body:
          "The lead operator owns opening pace, queue control, prep readiness, and end-of-shift reconciliation for the lane they protect.",
        metric: "One accountable captain",
      },
      {
        title: "Counter-line discipline",
        eyebrow: "Execution team",
        body:
          "Crew members are trained for speed, portion control, hygiene, and eye-level service so the branch stays clean under compression.",
        metric: "Fast-learning menu model",
      },
      {
        title: "Field coaching layer",
        eyebrow: "Travel support",
        body:
          "Regional coaches step into weak sites, reset routines, and push the branch back onto service and waste targets before problems compound.",
        metric: "Weekly operational resets",
      },
    ],
    investmentIntro:
      "Investment is organized around how much corridor surface the partner wants to control, not around decorative ownership titles.",
    investments: [
      {
        title: "Single-site travel unit",
        eyebrow: "Entry branch",
        body:
          "A single compact unit aimed at proving the lane, the staffing pattern, and the service-speed discipline inside one market.",
        metric: "$105K-$165K path",
      },
      {
        title: "Texas corridor cluster",
        eyebrow: "Regional expansion",
        body:
          "Two to five sites managed as one corridor operation with shared supply logic, shared reviews, and rolling management coverage.",
        metric: "2-5 site cluster",
      },
      {
        title: "Travel-hub growth package",
        eyebrow: "Scale package",
        body:
          "Structured for investors who want broader forecourt exposure across several cities without drifting into uncontrolled menu variety.",
        metric: "Cluster-led growth",
      },
    ],
    investorsIntro:
      "Investor participation is kept close to the floor because the asset is only as reliable as the branch behavior behind the numbers.",
    investors: [
      {
        title: "Operator-backed ownership",
        eyebrow: "Active seat",
        body:
          "Investors are expected to understand the rhythm of the branch itself, whether directly as owner-operators or through qualified managers.",
        metric: "Owner or managed seat",
      },
      {
        title: "Corridor partner review",
        eyebrow: "Shared accountability",
        body:
          "Cluster investors are reviewed on reporting speed, staff stability, and the ability to keep multiple branches within service windows.",
        metric: "Multi-site score discipline",
      },
      {
        title: "Capital protection logic",
        eyebrow: "Payback focus",
        body:
          "The branch is read as a recovery engine: repeat traffic, short menus, and route-level correction instead of speculative food storytelling.",
        metric: "6-8 week stabilization",
      },
    ],
    reviewsIntro:
      "The SHAWARMA TIME review layer is built around pace: ticket times, waste, line pressure, and whether the branch stays legible under rush.",
    reviews: [
      {
        title: "Ticket-speed review",
        eyebrow: "Service review",
        body:
          "Queue time and average ticket completion matter more than decorative marketing claims. Slow counters get corrected fast.",
        metric: "Under-4-minute target",
      },
      {
        title: "Food-cost and waste audit",
        eyebrow: "Margin review",
        body:
          "Protein yield, side control, and overnight loss are reviewed as hard indicators of whether the lane is still scalable.",
        metric: "Waste under 5%",
      },
      {
        title: "Weekly shift recap",
        eyebrow: "Operating review",
        body:
          "Weekly field reports compare branch performance by lane, staffing, and day-part so weak conditions can be copied or removed with clarity.",
        metric: "Weekly operating pack",
      },
    ],
    archiveIntro:
      "The SHAWARMA TIME portal now uses the real branch set from the local image folder rather than concept placeholders.",
    archive: [
      image(
        "/brand-library/shawarma-time-counter-houston.png",
        "SHAWARMA TIME counter service inside the Houston, Texas branch",
        "Houston counter"
      ),
      image(
        "/brand-library/shawarma-time-team-arizona.png",
        "SHAWARMA TIME team assembled outside the Arizona branch",
        "Branch team"
      ),
      image(
        "/brand-library/shawarma-time-arco-night.png",
        "SHAWARMA TIME branch operating at night at an ARCO station",
        "Night-trade branch"
      ),
    ],
    links: [
      {
        href: "/brands/shawarmer/reports",
        label: "Reports Hub",
        description: "Service-speed, margin, and payback reporting for travel-lane units.",
        kind: "reports",
      },
      {
        href: "/brands/shawarmer/events",
        label: "Events Calendar",
        description: "Operator days, travel-hub briefings, and launch sessions.",
        kind: "events",
      },
      {
        href: "/brands/shawarmer/magazine",
        label: "Magazine",
        description: "Field Notes from the corridor and branch team spotlights.",
        kind: "magazine",
      },
    ],
  },
  turkishpide: {
    hero: {
      eyebrow: "Bakery and chef-story platform",
      body:
        "Turkish PIDE Co. is the heritage-led layer in the system: baked identity, controlled hospitality, and a more curated retail rhythm built around fresh preparation.",
      image: image(
        olmezBrandAssets.images.turkishChef.src,
        olmezBrandAssets.images.turkishChef.alt,
        "Chef-led media and culinary storytelling"
      ),
    },
    branchesIntro:
      "The branch logic is slower and more sensory than the gas-station lane, but the operating question stays the same: can the product stay beautiful under repetition?",
    branches: [
      {
        title: "Istanbul test kitchen",
        eyebrow: "Recipe authority",
        body:
          "The kitchen-lab environment proves dough consistency, timing, and heritage menu logic before rollout into retail counters.",
        metric: "Recipe-first branch",
      },
      {
        title: "Bakery bar format",
        eyebrow: "Urban counter",
        body:
          "A compact bakery bar designed for high-visibility neighborhoods, morning traffic, and premium takeaway without losing craft cues.",
        metric: "City breakfast and lunch",
      },
      {
        title: "Retail-corner bake point",
        eyebrow: "Flexible footprint",
        body:
          "The lighter-footprint option fits mixed-use retail and travel locations where fresh baking creates the brand’s strongest marketing signal.",
        metric: "Small-footprint expansion",
      },
    ],
    teamIntro:
      "Turkish PIDE Co. relies on culinary discipline, front-of-house calm, and media-quality presentation without turning the kitchen into chaos.",
    team: [
      {
        title: "Dough and prep leads",
        eyebrow: "Production discipline",
        body:
          "The prep team protects recipe fidelity, oven timing, and batch rhythm so the product retains identity even during service compression.",
        metric: "Fresh-bake timing",
      },
      {
        title: "Hospitality floor",
        eyebrow: "Guest-facing layer",
        body:
          "Front-of-house teams translate the brand from product into atmosphere: composed service, visible confidence, and premium handling at the pass.",
        metric: "Premium guest service",
      },
      {
        title: "Chef-story activation",
        eyebrow: "Media and events",
        body:
          "Media partners and food showcases help the brand speak through craft rather than discounting, especially during launch and concept-testing windows.",
        metric: "Chef-led storytelling",
      },
    ],
    investmentIntro:
      "The investment case is built around slower throughput but stronger ticket atmosphere, higher craft value, and a more premium urban placement strategy.",
    investments: [
      {
        title: "Artisan bakery studio",
        eyebrow: "Premium fit-out",
        body:
          "Built for neighborhoods where interior warmth, open preparation, and slower dwell time create the margin opportunity.",
        metric: "$120K-$190K profile",
      },
      {
        title: "Express deli bar",
        eyebrow: "Compressed format",
        body:
          "A leaner option for mixed-use sites that still preserves freshness and brand theatre through visible preparation and careful menu restraint.",
        metric: "Reduced-footprint format",
      },
      {
        title: "City-cluster rollout",
        eyebrow: "Retail strategy",
        body:
          "Designed for districts where multiple small bakery bars can share supply and maintain consistent day-part programming.",
        metric: "Clustered city growth",
      },
    ],
    investorsIntro:
      "Investors here are judged on patience and product respect as much as on speed. A heritage concept fails quickly if it is pushed like a commodity lane.",
    investors: [
      {
        title: "Heritage-minded franchise seat",
        eyebrow: "Brand fit",
        body:
          "The right investor understands that slower service moments can still be highly profitable if freshness and positioning stay intact.",
        metric: "Quality over menu inflation",
      },
      {
        title: "Operator-baker partnership",
        eyebrow: "Production trust",
        body:
          "The core branch pairing is commercial discipline plus baking authority, so the unit never loses control of freshness during growth.",
        metric: "Two-sided accountability",
      },
      {
        title: "Retail-landlord alignment",
        eyebrow: "Location fit",
        body:
          "Because smell and visibility are so important, property partners are part of the value equation, not just an occupancy cost line.",
        metric: "Street-level visibility",
      },
    ],
    reviewsIntro:
      "Review is built around freshness, product integrity, and whether the guest experience still feels premium when measured against real labor and waste numbers.",
    reviews: [
      {
        title: "Bake-window review",
        eyebrow: "Product review",
        body:
          "The team reviews whether the branch is baking at the right rhythm for demand instead of padding the counter with stale volume.",
        metric: "Freshness-first cadence",
      },
      {
        title: "Waste and margin review",
        eyebrow: "Cost review",
        body:
          "Dough loss, topping yield, and unsold window inventory are read as the main signals of whether the concept is scaling honestly.",
        metric: "Controlled daily bake loss",
      },
      {
        title: "Monthly menu review",
        eyebrow: "Concept review",
        body:
          "New items must survive the same test as the core menu: trainability, speed, ingredient control, and real margin integrity.",
        metric: "No menu drift rule",
      },
    ],
    archiveIntro:
      "The archive frames below keep the brand grounded in real food, hospitality, and chef-led storytelling instead of stock imagery.",
    archive: [
      image(
        olmezBrandAssets.images.chefCampaign.src,
        olmezBrandAssets.images.chefCampaign.alt,
        "Editorial chef campaign"
      ),
      image(
        olmezBrandAssets.images.hospitalityTraining.src,
        olmezBrandAssets.images.hospitalityTraining.alt,
        "Hospitality training floor"
      ),
      image(
        olmezBrandAssets.images.reception.src,
        olmezBrandAssets.images.reception.alt,
        "Reception and premium room language"
      ),
      image(
        olmezBrandAssets.images.networking.src,
        olmezBrandAssets.images.networking.alt,
        "Investor and partner networking"
      ),
    ],
    links: [
      {
        href: "/brands/turkishpide/reports",
        label: "Reports Hub",
        description: "Freshness, premium ticket, and waste-control reporting.",
        kind: "reports",
      },
      {
        href: "/brands/turkishpide/events",
        label: "Events Calendar",
        description: "Chef showcases, tasting sessions, and concept briefings.",
        kind: "events",
      },
      {
        href: "/brands/turkishpide/magazine",
        label: "Magazine",
        description: "Craft stories, concept notes, and bakery-field observations.",
        kind: "magazine",
      },
    ],
  },
  affarem: {
    hero: {
      eyebrow: "Asset Franchise & Field Management",
      body:
        "AFFAREM is the internal branch and franchise management layer of the SevetTeam ecosystem: the operating room that tracks setup, operators, compliance, sales, field behavior, and payback visibility inside one controlled system. Primary interface: affarem.olmez.us.",
      image: image(
        "/brand-library/affarem-revenue-briefing.png",
        "Revenue and operating briefing under the AFFAREM banner",
        "AFFAREM revenue briefing"
      ),
    },
    branchesIntro:
      "AFFAREM does not sell food or run dining rooms. It installs the management surface inside branches and franchise operations so every unit can be followed from setup to field performance and capital recovery.",
    branches: [
      {
        title: "Investor Room and franchise view",
        eyebrow: "Stakeholder coordination",
        body:
          "Investors, operators, designers, and accountants are brought into one controlled environment so branch truth does not fragment across calls, spreadsheets, and assumptions.",
        metric: "Single operating room",
      },
      {
        title: "Operator and LiveOps control",
        eyebrow: "Field management",
        body:
          "When a branch drifts, AFFAREM moves from observation into intervention: routines, score pressure, ownership paths, and escalation from branch status into field correction.",
        metric: "Branch to field action",
      },
      {
        title: "Accountant Room and Payback Room",
        eyebrow: "Asset management",
        body:
          "The system tracks recovered capital, cost leakage, compliance quality, and reporting behavior so every unit can explain itself in numbers from setup through payback.",
        metric: "$650 monthly platform fee",
      },
    ],
    teamIntro:
      "The AFFAREM team is measured on whether branch truth stays legible when the network becomes noisy: investors must see clearly, operators must report clearly, and field issues must surface early.",
    team: [
      {
        title: "Product and data operators",
        eyebrow: "System team",
        body:
          "This layer owns the dashboards, alert logic, branch status flow, and the connective tissue that allows Investor Room, Operator Room, Accountant Room, and LiveOps to speak to one another.",
        metric: "215 connected units",
      },
      {
        title: "LiveOps analysts",
        eyebrow: "Correction team",
        body:
          "The analysts read branch drift early, assign action paths, and stop weak units from consuming capital quietly in the field.",
        metric: "Real-time flagging",
      },
      {
        title: "Accountant-room reviewers",
        eyebrow: "Financial truth",
        body:
          "They reconcile sales, waste, compliance, and reporting quality so the financial story never outruns operational behavior.",
        metric: "99.8% platform uptime",
      },
    ],
    investmentIntro:
      "AFFAREM capital is management capital: interface depth, alert logic, reporting quality, and the ability to stop distance from turning into blindness inside a franchise network.",
    investments: [
      {
        title: "Core branch-management license",
        eyebrow: "Platform seat",
        body:
          "The standard deployment gives a unit the reporting, stakeholder coordination, and live branch visibility needed to function as an asset rather than a loose restaurant.",
        metric: "Per-unit recurring revenue",
      },
      {
        title: "Advanced monitoring stack",
        eyebrow: "Compliance + scoring",
        body:
          "Higher layers expand CCTV compliance, Smart Discipline visibility, branch grading, and issue escalation for operators and investors who need deeper governance.",
        metric: "Remote control layer",
      },
      {
        title: "Enterprise corridor deployment",
        eyebrow: "Multi-site integration",
        body:
          "Built for brands and territories that need portfolio comparison, corridor review, and shared branch visibility across multiple operators and investors.",
        metric: "Cluster-wide reporting",
      },
    ],
    investorsIntro:
      "AFFAREM appeals to disciplined investors because it removes narrative fog. The value is not software alone; it is readable capital behavior, visible branch health, and measurable operating discipline.",
    investors: [
      {
        title: "Governance-first partners",
        eyebrow: "Visibility buyers",
        body:
          "These investors back the layer because it stops weak operations from hiding behind charisma, delayed reporting, or distance from the field.",
        metric: "Capital protection logic",
      },
      {
        title: "Operator-integrated accounts",
        eyebrow: "Behavior buyers",
        body:
          "Operators use the system when they want clarity about which habits are scaling and which behaviors are quietly harming the branch.",
        metric: "Behavior over wealth",
      },
      {
        title: "Portfolio reviewers",
        eyebrow: "Expansion gatekeepers",
        body:
          "Expansion decisions move faster because the branch truth is already structured into readable thresholds, scores, and room-by-room accountability.",
        metric: "90-100 elite threshold",
      },
    ],
    reviewsIntro:
      "AFFAREM review is the review of reviews: alerts, correction cycles, branch scoring, and stakeholder behavior designed to prevent confusion from scaling.",
    reviews: [
      {
        title: "Daily alert review",
        eyebrow: "Platform review",
        body:
          "The system flags the events that matter most: reporting gaps, cost spikes, sales slowdown, field non-compliance, and hygiene drift.",
        metric: "Live daily alert flow",
      },
      {
        title: "Monthly compliance review",
        eyebrow: "Behavior review",
        body:
          "Smart Discipline Scores and branch classes are read against actual participation, not only revenue, so capital cannot disguise low discipline.",
        metric: "9-category score model",
      },
      {
        title: "Quarterly platform review",
        eyebrow: "Capability review",
        body:
          "Each quarter the platform is reviewed as a branch and franchise management product: what improved transparency, what reduced drift, and what still needs refinement.",
        metric: "Quarterly rollout logic",
      },
    ],
    archiveIntro:
      "These portal frames come from the local AFFAREM-focused image set and replace the old abstract technology placeholder treatment.",
    archive: [
      image(
        "/brand-library/affarem-investor-briefing-selfie.png",
        "Event selfie with AFFAREM and SevetTeam backdrop",
        "Investor briefing frame"
      ),
      image(
        "/brand-library/affarem-camera-interview.png",
        "AFFAREM interview setup with a camera visible in the foreground",
        "Interview and media frame"
      ),
      image(
        "/brand-library/olmez-founder-panel-stage.png",
        "Panel appearance under the Ölmez system backdrop",
        "Panel-stage discussion"
      ),
      image(
        "/brand-library/olmez-stage-presentation-auditorium.png",
        "Stage presentation with the Ölmez brand projected behind the founder",
        "Auditorium presentation"
      ),
    ],
    links: [
      {
        href: "/brands/affarem/reports",
        label: "Reports Hub",
        description: "Platform revenue, connected-unit metrics, and compliance scoring.",
        kind: "reports",
      },
      {
        href: "/brands/affarem/events",
        label: "Events Calendar",
        description: "Investor demos, product briefings, and LiveOps walkthroughs.",
        kind: "events",
      },
      {
        href: "/brands/affarem/magazine",
        label: "Magazine",
        description: "Control-layer notes, product commentary, and system field stories.",
        kind: "magazine",
      },
    ],
  },
  disciplina: {
    hero: {
      eyebrow: "Operator development ladder",
      body:
        "DISCIPLINA is the people-building brand inside the ecosystem: training rooms, student support, paid placements, and micro-start discipline that prepares operators before they scale capital.",
      image: image(
        olmezBrandAssets.images.villageEducation.src,
        olmezBrandAssets.images.villageEducation.alt,
        "Village education session and applied operator training"
      ),
    },
    branchesIntro:
      "DISCIPLINA uses classrooms, local sessions, internships, and operator labs as its branch network. The product is behavioral readiness.",
    branches: [
      {
        title: "Village education rooms",
        eyebrow: "Community classroom",
        body:
          "Workshops across Turkish villages translate business basics, hygiene, service, and operator mindset into direct local application.",
        metric: "Village-based training",
      },
      {
        title: "Hospitality internship stations",
        eyebrow: "Applied learning",
        body:
          "Students move from theory into paid daily exposure, learning shift structure, pace, cleanliness, and reporting from inside working sites.",
        metric: "4-7 hour paid shifts",
      },
      {
        title: "Micro-start coaching hubs",
        eyebrow: "Growth ladder",
        body:
          "The training path keeps ordinary people close to the system long enough to prove they can grow cleanly from street start to kiosk to unit.",
        metric: "$1K-$20K ladder",
      },
    ],
    teamIntro:
      "The team is designed around mentorship, practical exposure, and the conversion of raw effort into operator habits.",
    team: [
      {
        title: "Field trainers",
        eyebrow: "Instruction layer",
        body:
          "Trainers deliver direct instruction in service standards, food safety, and the kind of repetition that makes a business survivable.",
        metric: "Hands-on teaching",
      },
      {
        title: "Education-support coordinators",
        eyebrow: "Student layer",
        body:
          "This group manages school-expense support, student selection, and part-time work access so education support stays organized and measurable.",
        metric: "500 to 700 students",
      },
      {
        title: "Operator mentors",
        eyebrow: "Advancement layer",
        body:
          "Graduates receive coaching on promotion paths, reporting behavior, and how to move into accountable roles instead of remaining in casual labor.",
        metric: "Operator advancement focus",
      },
    ],
    investmentIntro:
      "DISCIPLINA capital goes into people infrastructure: scholarships, starter kits, trainers, and environments where discipline can be practiced before it is priced.",
    investments: [
      {
        title: "Micro-start support fund",
        eyebrow: "Entry-level access",
        body:
          "Small-capital entrants need structured help with kits, process, and accountability before they can handle larger assets.",
        metric: "$1K-$2K starting path",
      },
      {
        title: "Internship and education support",
        eyebrow: "Student allocation",
        body:
          "Paid placements and expense support reduce dropout pressure and make the operating ladder realistic for students who need income while learning.",
        metric: "Part-time paid track",
      },
      {
        title: "Regional training rooms",
        eyebrow: "Scale infrastructure",
        body:
          "As the training pipeline grows, local teaching rooms and mobile sessions become the infrastructure that keeps discipline geographically portable.",
        metric: "Regional delivery model",
      },
    ],
    investorsIntro:
      "DISCIPLINA attracts mission-aligned capital, but the same rule applies here: responsibility is measured, not simply announced.",
    investors: [
      {
        title: "Scholarship sponsors",
        eyebrow: "Education capital",
        body:
          "Partners can fund student support, but they are shown real participant numbers, attendance patterns, and outcomes rather than vague claims.",
        metric: "700-student target",
      },
      {
        title: "Training-program backers",
        eyebrow: "Capability capital",
        body:
          "These investors fund the rooms, trainers, and progression systems that create stronger future operators for the wider ecosystem.",
        metric: "People-before-asset logic",
      },
      {
        title: "Mentor-seat partners",
        eyebrow: "Advancement capital",
        body:
          "Operator mentors and sponsor-partners create accountability for those moving from education support into real branch responsibility.",
        metric: "Progression checkpoints",
      },
    ],
    reviewsIntro:
      "Review in DISCIPLINA is behavioral and educational: attendance, practical performance, advancement, and whether support is converting into competence.",
    reviews: [
      {
        title: "Attendance and completion review",
        eyebrow: "Program review",
        body:
          "The first signal is simple: who shows up, who completes the work, and who can repeat the standard without supervision.",
        metric: "Weekly completion tracking",
      },
      {
        title: "Advancement review",
        eyebrow: "Promotion review",
        body:
          "Graduates are reviewed on whether they are ready for the next rung, not on whether they simply stayed present in the room.",
        metric: "Street / kiosk / unit ladder",
      },
      {
        title: "Sponsor dashboard review",
        eyebrow: "Support review",
        body:
          "Backers see where money was allocated, how many students were supported, and whether the program is building actual operator quality.",
        metric: "Annual support reporting",
      },
    ],
    archiveIntro:
      "The local DISCIPLINA archive is now exposed directly in the portal instead of being hidden behind generic education language.",
    archive: [
      image(
        olmezBrandAssets.images.studentSupport.src,
        olmezBrandAssets.images.studentSupport.alt,
        "Student support delivery"
      ),
      image(
        olmezBrandAssets.images.paidInternship.src,
        olmezBrandAssets.images.paidInternship.alt,
        "Paid internship program"
      ),
      image(
        olmezBrandAssets.images.hospitalityTraining.src,
        olmezBrandAssets.images.hospitalityTraining.alt,
        "Hospitality training floor"
      ),
      image(
        olmezBrandAssets.images.treePlanting.src,
        olmezBrandAssets.images.treePlanting.alt,
        "Community action and public responsibility"
      ),
      image(
        olmezBrandAssets.images.folderTimeline.src,
        olmezBrandAssets.images.folderTimeline.alt,
        "Achievements and annual structure"
      ),
    ],
    links: [
      {
        href: "/brands/disciplina/reports",
        label: "Reports Hub",
        description: "Program growth, graduation movement, and support deployment.",
        kind: "reports",
      },
      {
        href: "/brands/disciplina/events",
        label: "Events Calendar",
        description: "Training days, community sessions, and student briefings.",
        kind: "events",
      },
      {
        href: "/brands/disciplina/magazine",
        label: "Magazine",
        description: "Field Notes from the operator ladder and student-support programs.",
        kind: "magazine",
      },
    ],
  },
};
