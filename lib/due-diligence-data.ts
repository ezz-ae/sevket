import { formatUsd, siteMetrics } from "@/lib/site-metrics";

export const accountLevels = [
  { level: "Visitor", access: "Public pages", limit: "None", review: "No" },
  { level: "Academy Account", access: "Learning + paper account", limit: `${formatUsd(siteMetrics.paperAccountSimulationBalance)} simulated`, review: "Yes" },
  { level: "Junior Level 1", access: "First real junior exposure", limit: `${formatUsd(siteMetrics.juniorLevel1Min)}-${formatUsd(siteMetrics.juniorLevel1Max)}`, review: "Yes" },
  { level: "Junior Level 2", access: "Full junior cap", limit: `${formatUsd(siteMetrics.juniorLevel2Max)} max`, review: "Yes" },
  { level: "Qualified Learning Entry", access: "Students/former managers", limit: `${formatUsd(siteMetrics.qualifiedLearningFirstMonthMax)} first month`, review: "Yes" },
  { level: "Starter Investor", access: "Specific opportunity review", limit: "Case-based", review: "Yes" },
  { level: "Branch Investor", access: "Branch/group access", limit: "Case-based", review: "Yes" },
  { level: "Operator-Investor", access: "Investor + shift/manager role", limit: "Case-based", review: "Yes" },
  { level: "Senior Investor", access: "Senior opportunities", limit: "Restricted", review: "Yes" },
  { level: "Mega Candidate", access: "Large/market opportunities", limit: "Restricted", review: "Yes" },
];

export const requiredDocuments = [
  "ID",
  "Address",
  "Tax profile",
  "Bank or wallet details",
  "Signed terms",
  "Risk acknowledgment",
];

export const riskLevels = [
  { account: "Visitor", access: "Public information only", risk: "No capital access", next: "Create account or request documents" },
  { account: "Academy", access: "Learning and paper account", risk: "Simulation only", next: "Complete lessons and account profile" },
  { account: "Junior Level 1", access: "First real junior exposure", risk: "Entry cap and account behavior review", next: "Hold first-month cap and complete reporting checks" },
  { account: "Junior Level 2", access: "Full junior cap", risk: "Pool performance and six-month limit", next: "Maintain documents and distribution understanding" },
  { account: "Starter", access: "Specific opportunity review", risk: "Case-based market and branch file", next: "Review terms and responsibility file" },
  { account: "Branch", access: "Branch/group participation", risk: "Operating exposure", next: "Read market, operator, and branch files" },
  { account: "Operator-Investor", access: "Capital plus operating role", risk: "Shift, staffing, and manager responsibility", next: "Complete operator review" },
  { account: "Senior", access: "Restricted senior files", risk: "No junior guarantee; separate risk file", next: "Suitability and document room review" },
  { account: "Mega Candidate", access: "Large or market opportunities", risk: "Market, regulatory, and allocation risk", next: "Committee review" },
];

export const allocationOptions = [
  "Hold position",
  "Reallocate",
  "Move to pool",
  "Hold credit",
  "Request exit review",
];

export const publicLibraryFolders = [
  "Company Profile",
  "Brands Overview",
  "AFFAREM Overview",
  "Risk Management Overview",
  "Junior Investor Public Guide",
  "Partners & Supply Overview",
  "Open Tenders Guide",
  "Social Responsibility Report",
  "People & Careers Guide",
];

export const accessGrantedFolders = [
  "Investment Books",
  "Opportunity Files",
  "Market Risk Files",
  "Account Agreements",
  "Distribution Documents",
  "AFFAREM Technical Guides",
  "Regulatory Holding Files",
  "Partner / Tender Files",
  "Legal & Compliance",
];

export const tenderCategories = [
  "Food & Farm Supply",
  "Halal Meat & Poultry",
  "Cheese / Dairy",
  "Fleet & Car Rental",
  "Staff Clothing",
  "Computers & Technology",
  "Outdoor & Event Equipment",
  "Team Accommodation",
  "English Teaching / Training",
  "Security",
  "Tax / Legal / Banking",
  "Logistics",
  "Other",
];

export const tenderStatuses = [
  "Open",
  "Under Review",
  "Shortlisting",
  "Documents Requested",
  "In Negotiation",
  "Approved Supplier",
  "Closed",
];

export const supplyInterests = [
  "Tomato farms",
  "Old Italian cheese farms",
  "Halal meat and poultry",
  "Dairy",
  "Flour",
  "Wheat",
  "Olive oil",
  "Packaging",
  "Cold chain",
  "Equipment",
];

export const networkFeed = [
  { type: "Branch update", text: "Unit 024 moved into opening preparation after design approval and hiring completion.", date: "May 2026" },
  { type: "Risk note", text: "One market file remains in regulatory holding while local documentation is reviewed.", date: "May 2026" },
  { type: "Tender update", text: "Fleet rental tender moved to shortlisting for U.S. and UK brand-new vehicle cycles.", date: "May 2026" },
  { type: "People update", text: `${siteMetrics.affaremTurkeyNewTeam} AFFAREM Turkey roles are under account and reporting review.`, date: "May 2026" },
  { type: "Social responsibility", text: `${siteMetrics.studentSponsorshipCurrent} student sponsorship records are active against a ${siteMetrics.studentSponsorshipTarget} target.`, date: "May 2026" },
  { type: "Distribution record", text: `${formatUsd(siteMetrics.recordedDistributionsUsd)} in recorded distributions remains tied to statement and tax review workflow.`, date: "May 2026" },
];
