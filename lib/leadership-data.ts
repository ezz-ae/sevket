import { olmezBrandAssets } from "@/lib/olmez-brand-assets";

export interface LeadershipProfile {
  slug: string;
  name: string;
  title: string;
  region: string;
  summary: string;
  article: string[];
  image: {
    src: string;
    alt: string;
  };
}

export const leadershipProfiles: LeadershipProfile[] = [
  {
    slug: "rosette-samoan",
    name: "Rosette Samoan",
    title: "People & Culture — California",
    region: "United States",
    summary:
      "Rosette Samoan protects the human side of the Ölmez machine, translating discipline into hiring standards, behavior, and team culture across California.",
    article: [
      "Rosette Samoan’s role inside Ölmez is not decorative HR. Her work sits at the center of the company’s ability to scale without losing discipline. In a business model built around franchise holders, shift managers, remote supervision, and cross-border teams, people are not simply employees. They are the operating quality of the company.",
      "Her responsibility in California is especially important because California represents a complex labor environment: multicultural teams, strict workplace expectations, high service standards, and a competitive hospitality market. Rosette’s part is to make sure Ölmez does not become a company with strong systems but weak human behavior.",
      "She builds the people structure behind the brand: hiring standards, internal culture, training expectations, conflict handling, leadership tone, performance behavior, and team discipline. In SevetTeam’s philosophy, money is becoming common, but discipline is rare. Rosette’s job is to turn that sentence into a working company culture.",
      "Her work connects directly with the Smart Discipline Score inside AFFAREM. She helps define what discipline means in human terms: showing up on time, reporting honestly, handling pressure, respecting process, communicating early, and correcting mistakes before they become patterns.",
    ],
    image: olmezBrandAssets.portraits.rosette,
  },
  {
    slug: "adnan-ahmet",
    name: "Adnan Ahmet",
    title: "Marketing Lead — Turkey",
    region: "Turkey",
    summary:
      "Adnan Ahmet translates Ölmez from a business system into a market story, making the company feel Turkish, international, and operationally credible at the same time.",
    article: [
      "Adnan Ahmet carries one of the most sensitive roles in the company: translating Ölmez from a business system into a market story. In Turkey, food is not only a product. It is memory, pride, street culture, identity, family, and rhythm. Marketing a Turkish food business badly would make the company look artificial. Marketing it well gives SevetTeam cultural power.",
      "His role is not to create noise. It is to make the market understand why Ölmez is different. He does not sell shawarma as another food product. He frames it as part of a larger business architecture: Turkish restaurants in major cities, gas station shawarma units in the United States, micro-start programs for small operators, and AFFAREM as the control layer behind the branches.",
      "In Turkey, his work also connects to the story of the 42 British franchise holders with Istanbul experience. This is a powerful narrative: Istanbul trained the food instinct, Britain added operational discipline, and SevetTeam turned both into a scalable model.",
      "Adnan’s value is not only advertising. His value is market belief. He makes the company feel Turkish without becoming old-fashioned, international without losing its roots, and operational without becoming boring.",
    ],
    image: olmezBrandAssets.portraits.adnan,
  },
  {
    slug: "annabel-komar",
    name: "Annabel Komar",
    title: "Senior Founder’s Office Manager",
    region: "Executive Office",
    summary:
      "Annabel Komar runs the executive order behind SevetTeam, turning founder decisions into traceable action across investors, operations, and internal teams.",
    article: [
      "Annabel Komar runs the part of the company that most people never see but every serious company depends on: executive order. In a business like SevetTeam, the founder’s office is not just calendar management. It is the nerve center between decisions, investors, branch design sessions, LiveOps reviews, legal coordination, reports, travel, and internal execution.",
      "Annabel’s part is to protect Sevet Ölmez from operational noise while making sure important decisions do not get lost in the noise. She coordinates the conversations that matter: investor meetings, AFFAREM design sessions, follow-ups after branch reviews, internal leadership discussions, travel planning for LiveOps intervention, and communication between departments.",
      "A weak founder’s office creates delays, duplicated decisions, missed commitments, and confused teams. Annabel prevents that. She makes sure the founder’s thinking becomes action, and action becomes traceable.",
      "In SevetTeam’s world, where every branch must explain itself in numbers, Annabel makes sure every leadership decision also has a clear owner, timeline, and next step.",
    ],
    image: olmezBrandAssets.portraits.annabel,
  },
  {
    slug: "dahger-olmez",
    name: "Dahger Ölmez",
    title: "Senior Business Management",
    region: "Business Operations",
    summary:
      "Dahger Ölmez is the management stabilizer of the company, keeping the structure hard and refusing to let weak operations hide behind strong branding.",
    article: [
      "Dahger Ölmez represents the management spine of the business. His role is not to invent the idea; his role is to make the idea survive contact with reality. SevetTeam has many moving parts: restaurants, gas station units, investors, operators, AFFAREM, LiveOps, Smart Discipline Scores, micro-start programs, and marketplace listings.",
      "Without strong business management, that system becomes beautiful chaos. Dahger’s part is to keep the structure hard. He looks at the company as a machine: which branch is underperforming, which investor is not disciplined, which unit is ready to expand, which manager is weak, which location is producing results, and which process needs correction.",
      "His role is close to the Sevet philosophy: do not scale confusion. Dahger turns that into management behavior. He does not allow weak operations to hide behind strong branding. He does not allow optimistic reports to replace hard numbers.",
      "He is the person who asks the uncomfortable questions before the market asks them. In the company story, Dahger is the stabilizer. Sevet creates the philosophy. Dahger makes sure the business does not betray it.",
    ],
    image: olmezBrandAssets.portraits.dahger,
  },
  {
    slug: "aliya-mansoury-raof",
    name: "Aliya Mansoury Raof",
    title: "U.S. Government Relationship Management",
    region: "United States",
    summary:
      "Aliya Mansoury Raof gives the U.S. expansion institutional credibility by shaping licensing posture, public-sector communication, and regulatory readiness.",
    article: [
      "Aliya Mansoury Raof handles one of the most serious parts of the U.S. expansion: government relationships, local compliance awareness, licensing pathways, public-sector communication, and institutional trust. For SevetTeam, the United States is not just a market. It is a regulatory environment.",
      "Gas station food units involve permits, food safety, labor rules, zoning, local authorities, insurance requirements, and state-by-state operational differences. A company can have a strong franchise model and still fail if it does not understand the official environment.",
      "Aliya’s part is to make the company look serious before it sells aggressively. She helps create the bridge between SevetTeam and the public systems that affect its branches. Her role reduces friction, protects the company from amateur mistakes, and gives investors confidence that the expansion is not built only on branding.",
      "She is not there to open doors in a vague way. Her role is to make the company institutionally readable: clear documents, clean communication, compliance posture, licensing awareness, and professional representation.",
    ],
    image: olmezBrandAssets.portraits.aliya,
  },
  {
    slug: "ray-walker",
    name: "Ray Walker",
    title: "Head of Sales — U.S. and UK",
    region: "United States / United Kingdom",
    summary:
      "Ray Walker sells the layered SevetTeam opportunity without cheapening it, balancing close rates with qualification discipline.",
    article: [
      "Ray Walker’s role is direct: turn the SevetTeam model into signed opportunities without cheapening the brand. This is harder than normal sales because SevetTeam is not selling one simple thing. It sells a layered product: franchise access, gas station units, micro-starts, AFFAREM control, Smart Discipline Scores, four-investor models, LiveOps, and marketplace listings.",
      "Ray has to sell the opportunity without making false promises. His discipline matters because the wrong salesperson can destroy the company. If he sells the dream too hard, weak investors enter. If he sells too coldly, the opportunity loses emotion.",
      "In the U.S., he sells the gas station model: existing traffic, compact food assets, projected daily gain scenarios, and operational control. In the UK, he sells trust: the Sevet identity, British operator network, Istanbul experience, and international credibility.",
      "Ray’s strongest value is filtering. He should not only close buyers. He should identify who deserves entry. In SevetTeam, sales is not persuasion. Sales is qualification.",
    ],
    image: olmezBrandAssets.portraits.ray,
  },
  {
    slug: "marrow-rehab",
    name: "Marrow Rehab",
    title: "Senior Events Management",
    region: "Brand Experience",
    summary:
      "Marrow Rehab turns the business model into physical belief by staging events, launches, investor rooms, and training moments with visible discipline.",
    article: [
      "Marrow Rehab owns the live experience of the company. His role is important because SevetTeam is a system-heavy business, and systems can feel cold if they are not presented through strong human moments. Events are where the company becomes visible.",
      "Investor gatherings, franchise discovery days, branch launch events, annual team meetings, operator training sessions, Sevet Global Market showcases, and AFFAREM demonstrations all need structure. Marrow’s job is to make those moments feel premium, controlled, and memorable.",
      "He is not planning parties. He is staging trust. For a company selling controlled food-business ownership, every event must communicate discipline. The lighting, seating, speaker order, presentations, investor flow, team introductions, product tastings, and brand materials must all say the same thing: this company is organized.",
      "A gas station unit on paper is interesting. A live demonstration with numbers, design, food, and operator logic becomes convincing. Marrow turns the business model into physical belief.",
    ],
    image: olmezBrandAssets.portraits.marrow,
  },
  {
    slug: "dr-azim-abdullah",
    name: "Dr. Azim Abdullah",
    title: "Tax and Annual Reports",
    region: "Finance & Reporting",
    summary:
      "Dr. Azim Abdullah gives the company financial truth, tax discipline, and formal reporting seriousness across the franchise infrastructure model.",
    article: [
      "Dr. Azim Abdullah handles the part of the business that gives the company long-term seriousness: tax discipline, annual reporting, financial structure, and formal accountability. In a franchise infrastructure company, accounting is not back-office paperwork. It is part of the product.",
      "Investors trust the system only if the numbers are clean. Branches can only be evaluated if reporting is consistent. Payback can only be discussed if financial data is disciplined. Dr. Azim’s role connects directly with AFFAREM’s accountant room.",
      "He helps define how branches report, how expenses are categorized, how performance is reviewed, how annual reports are prepared, and how the company maintains financial credibility across markets. His work protects SevetTeam from one of the biggest risks in food business: messy money.",
      "A restaurant can appear successful while leaking cash everywhere. Dr. Azim’s function is to stop that illusion. He gives the company the financial language to distinguish revenue from profit, profit from cash flow, and cash flow from real asset value.",
    ],
    image: olmezBrandAssets.portraits.azim,
  },
  {
    slug: "servet-olmez",
    name: "Servet Ölmez",
    title: "Chairman and Co-Founder",
    region: "Board Leadership",
    summary:
      "Servet Ölmez provides governance, restraint, and strategic gravity, keeping the company aligned with its infrastructure promise rather than drifting into franchise noise.",
    article: [
      "Servet Ölmez sits at the top of the company structure as chairman and co-founder. His role is governance, long-range judgment, and protection of the company’s direction. Every ambitious company needs someone who is not trapped in daily noise.",
      "Servet’s part is to ask whether the company is still becoming what it promised to become. He oversees the big questions: expansion timing, capital discipline, major partnerships, brand reputation, investor confidence, and the relationship between SevetTeam’s commercial ambition and its operating standards.",
      "He should not be written as a ceremonial chairman. His value is restraint. When sales wants speed, operations wants control, investors want return, and marketing wants visibility, the chairman protects the center.",
      "Servet’s role is to make sure SevetTeam does not become just another restaurant franchise company. The company’s real promise is bigger: restaurant business infrastructure, controlled ownership, operator development, and measurable food assets.",
    ],
    image: olmezBrandAssets.portraits.servet,
  },
  {
    slug: "luellen-magoob",
    name: "Luellen Magoob",
    title: "Official Company Speaking and Events Networking — UK",
    region: "United Kingdom",
    summary:
      "Luellen Magoob is the UK-facing voice of the company, translating seriousness into presence across networking rooms, presentations, and public representation.",
    article: [
      "Luellen Magoob is the voice-facing layer of SevetTeam in the UK. Her role connects communication, public presence, event networking, and relationship-building. This matters because the UK is emotionally and strategically important to the Sevet story.",
      "England is where Sevet became Sevet. The UK is not just a market; it is part of the character identity and company credibility. Luellen’s job is to make the company sound serious in rooms where reputation matters.",
      "She represents SevetTeam in events, investor networking spaces, business gatherings, hospitality discussions, and UK-facing presentations. Her role is not to over-explain the business. It is to make people want the next meeting.",
      "In a company where Sevet himself is direct and sometimes cold, Luellen provides the social intelligence layer. She makes the business easier to receive without weakening its seriousness. Her part is access through presence.",
    ],
    image: olmezBrandAssets.portraits.luellen,
  },
];

export const leadershipProfileMap = Object.fromEntries(
  leadershipProfiles.map((profile) => [profile.slug, profile])
) as Record<string, LeadershipProfile>;
