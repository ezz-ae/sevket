// Investor Dashboard — sample data layer for the AFFAREM control surface.
// All numbers are illustrative — real account state is wired in by AFFAREM
// once the investor file is approved.

export type DashboardSectionId =
  | "overview"
  | "wallet"
  | "affarem"
  | "payouts"
  | "documents"
  | "messages"
  | "kyc"
  | "tax"
  | "settings";

export interface DashboardSection {
  id: DashboardSectionId;
  label: string;
  description: string;
}

export const dashboardSections: DashboardSection[] = [
  { id: "overview", label: "Overview", description: "Account state, alerts, distribution rhythm" },
  { id: "wallet", label: "Wallet", description: "Bank rail · prepaid card · crypto" },
  { id: "affarem", label: "AFFAREM Control", description: "Branch, pool, smart discipline" },
  { id: "payouts", label: "Payouts", description: "Twice-weekly distribution history" },
  { id: "documents", label: "Documents", description: "Agreements · filings · certificates" },
  { id: "messages", label: "Messages", description: "Investor desk + live chat" },
  { id: "kyc", label: "Identity / KYC", description: "ID, accreditation, ownership" },
  { id: "tax", label: "Tax", description: "Profile, statements, exports" },
  { id: "settings", label: "Account", description: "Personal, security, preferences" },
];

// ─── Mock account profile ──────────────────────────────────────────────────

export const mockInvestor = {
  name: "Alex Demir",
  initials: "AD",
  position: "Senior — Branch + Pool",
  country: "United Kingdom",
  joinDate: "April 2026",
  accountId: "AFM-2026-0418-77",
  status: "Active · Class A",
  disciplineScore: 92,
  unreadMessages: 3,
  activeAlerts: 1,
};

// ─── Overview ──────────────────────────────────────────────────────────────

export const overviewKpis = [
  { label: "Total deployed", value: "$48,500", delta: "+$5,000", deltaTone: "up" as const, hint: "Across 1 branch + 1 pool" },
  { label: "Eligible distribution (week)", value: "$1,184", delta: "+12%", deltaTone: "up" as const, hint: "Tuesday + Friday cycles" },
  { label: "Wallet balance", value: "$2,742.50", delta: "Available", deltaTone: "neutral" as const, hint: "Across bank, prepaid, crypto" },
  { label: "Smart Discipline Score", value: "92/100", delta: "Class A", deltaTone: "up" as const, hint: "Updated after every shift" },
];

export const overviewActivity = [
  { time: "12 min ago", title: "Friday distribution review opened", subtitle: "Pool ST-50 · cycle starts after Thursday close" },
  { time: "2 hours ago", title: "Houston branch — service report posted", subtitle: "Ticket time 3m48s · waste 4.1%" },
  { time: "Today, 09:14", title: "AFFAREM message from investor desk", subtitle: "Q3 statements ready for download" },
  { time: "Yesterday", title: "Bank rail confirmation matched", subtitle: "HSBC GB · ending 4421 · holder verified" },
  { time: "2 days ago", title: "Risk notice acknowledged", subtitle: "Junior pool — early-exit eligibility window" },
];

export const overviewAlerts = [
  { tone: "info" as const, label: "Tax profile incomplete", body: "Add UK National Insurance reference to unlock annual statements." },
  { tone: "ok" as const, label: "Distribution ready", body: "Friday cycle is reviewed and queued for release after reconciliation." },
];

// ─── Wallet ────────────────────────────────────────────────────────────────

export type RailStatus = "Connected" | "Pending" | "Available" | "Conditional";

export interface WalletRail {
  id: string;
  name: string;
  status: RailStatus;
  balance: string;
  currency: string;
  detail: string;
  highlight?: string;
}

export const walletRails: WalletRail[] = [
  {
    id: "bank-gbp",
    name: "Bank Rail · HSBC UK",
    status: "Connected",
    balance: "£2,140.20",
    currency: "GBP",
    detail: "Primary payout rail. Account holder verified. Statement records linked.",
  },
  {
    id: "prepaid-usd",
    name: "Ölmez Prepaid Wallet",
    status: "Connected",
    balance: "$602.30",
    currency: "USD",
    detail: "Virtual + physical card. Spending controls enabled. Reload from distribution.",
    highlight: "Mastercard rail",
  },
  {
    id: "crypto-usdc",
    name: "Crypto Wallet · USDC",
    status: "Available",
    balance: "0.00 USDC",
    currency: "USDC",
    detail: "Optional payout layer. Enable after KYC + country approval.",
    highlight: "Subject to compliance",
  },
  {
    id: "card-physical",
    name: "Physical Card Delivery",
    status: "Pending",
    balance: "—",
    currency: "—",
    detail: "Physical Mastercard shipping to UK address. Usually 7–10 business days.",
  },
];

export const walletTransactions = [
  { date: "May 6", description: "Friday cycle distribution → Bank GBP", amount: "+£684.10", state: "Reviewed" },
  { date: "May 3", description: "Tuesday cycle distribution → Prepaid USD", amount: "+$420.00", state: "Reviewed" },
  { date: "May 1", description: "Card spend · groceries (Edinburgh)", amount: "−£32.40", state: "Posted" },
  { date: "Apr 30", description: "Friday cycle distribution → Bank GBP", amount: "+£612.85", state: "Reviewed" },
  { date: "Apr 28", description: "Card top-up", amount: "+$200.00", state: "Posted" },
  { date: "Apr 27", description: "Prepaid card spend · fuel", amount: "−$48.20", state: "Posted" },
];

export const walletControls = [
  { label: "Daily card spend cap", value: "$300 / day" },
  { label: "Monthly card spend cap", value: "$5,000 / month" },
  { label: "ATM withdrawal", value: "Disabled" },
  { label: "International transactions", value: "Allowed" },
  { label: "Auto-reload from distribution", value: "70% to bank · 25% to card · 5% reserve" },
  { label: "Physical card delivery", value: "Edinburgh, UK" },
];

// ─── AFFAREM Control ──────────────────────────────────────────────────────

export const affaremPositions = [
  {
    id: "pool-st-50",
    name: "Pool ST-50 · Junior",
    type: "Junior pool",
    units: "50 units",
    capital: "$10,000",
    monthlyTarget: "$280 – $440",
    status: "Active · 6-month subscription",
    rotationNote: "Auto-distribution after twice-weekly review.",
  },
  {
    id: "branch-houston",
    name: "Houston Branch File",
    type: "Branch seat (1 of 4)",
    units: "1 unit",
    capital: "$30,000",
    monthlyTarget: "$1,200 – $3,200",
    status: "Active · Captain shift assigned",
    rotationNote: "Reserve fund 5% applied each cycle.",
  },
  {
    id: "branch-dallas",
    name: "Dallas Branch File",
    type: "Branch seat (1 of 4)",
    units: "1 unit",
    capital: "$8,500",
    monthlyTarget: "$340 – $920",
    status: "Building · 2 of 4 seats filled",
    rotationNote: "Opens for first distribution after week 15.",
  },
];

export const branchSignals = [
  { label: "Average ticket time", value: "3m 48s", target: "≤ 4m", state: "ok" as const },
  { label: "Waste %", value: "4.1%", target: "≤ 5%", state: "ok" as const },
  { label: "Captain Smart Discipline", value: "94 / 100", target: "≥ 80", state: "ok" as const },
  { label: "Reserve health", value: "$8,420", target: "Branch reserve", state: "neutral" as const },
  { label: "Lunch peak conversion", value: "67%", target: "Captive share", state: "neutral" as const },
  { label: "Open exceptions", value: "0", target: "0", state: "ok" as const },
];

export const liveOpsActions = [
  "Approve Tuesday distribution release",
  "Acknowledge weekly LiveOps recap",
  "Review captain change request — Dallas",
  "Confirm Q2 reserve adjustment for Houston",
];

// ─── Payouts ──────────────────────────────────────────────────────────────

export const payoutHistory = [
  { id: "pay-1", date: "May 9 (Fri)", source: "Pool ST-50", gross: "$520.00", deductions: "−$32.10", net: "$487.90", rail: "Bank GBP", state: "Reviewed" },
  { id: "pay-2", date: "May 6 (Tue)", source: "Houston Branch", gross: "$760.40", deductions: "−$76.30", net: "$684.10", rail: "Bank GBP", state: "Reviewed" },
  { id: "pay-3", date: "May 3 (Fri)", source: "Pool ST-50", gross: "$465.00", deductions: "−$45.00", net: "$420.00", rail: "Prepaid USD", state: "Reviewed" },
  { id: "pay-4", date: "Apr 30 (Tue)", source: "Houston Branch", gross: "$701.20", deductions: "−$88.35", net: "$612.85", rail: "Bank GBP", state: "Reviewed" },
  { id: "pay-5", date: "Apr 26 (Fri)", source: "Pool ST-50", gross: "$498.50", deductions: "−$28.10", net: "$470.40", rail: "Prepaid USD", state: "Reviewed" },
  { id: "pay-6", date: "Apr 23 (Tue)", source: "Houston Branch", gross: "$682.90", deductions: "−$60.10", net: "$622.80", rail: "Bank GBP", state: "Reviewed" },
];

export const distributionLegal =
  "Eligible net distributions are reviewed and released after sales reconciliation, operating costs, branch reserves, management fees, and applicable deductions. No fixed return is implied or guaranteed.";

// ─── Documents ────────────────────────────────────────────────────────────

export const investorDocuments = [
  { id: "doc-1", title: "AFFAREM Investor Agreement", type: "Signed agreement", updated: "Apr 18, 2026", size: "2.1 MB" },
  { id: "doc-2", title: "Pool ST-50 Subscription", type: "Subscription record", updated: "Apr 18, 2026", size: "640 KB" },
  { id: "doc-3", title: "Houston Branch File", type: "Branch dossier", updated: "Apr 22, 2026", size: "5.8 MB" },
  { id: "doc-4", title: "Q1 2026 Account Statement", type: "Statement", updated: "Apr 30, 2026", size: "320 KB" },
  { id: "doc-5", title: "Risk Notice — Junior Pool", type: "Risk notice", updated: "Apr 18, 2026", size: "120 KB" },
  { id: "doc-6", title: "Wallet Programme Terms", type: "Wallet T&Cs", updated: "Apr 30, 2026", size: "210 KB" },
];

// ─── Messages ─────────────────────────────────────────────────────────────

export const inboxThreads = [
  {
    id: "thread-1",
    from: "Investor Desk",
    subject: "Q1 statements ready",
    preview: "Your Q1 2026 statements are now downloadable from the Documents tab.",
    time: "Today 09:14",
    unread: true,
  },
  {
    id: "thread-2",
    from: "AFFAREM Operations",
    subject: "Friday cycle review opened",
    preview: "Pool ST-50 cycle queued for release after Thursday reconciliation.",
    time: "12 min ago",
    unread: true,
  },
  {
    id: "thread-3",
    from: "Houston Captain",
    subject: "Service report — week 18",
    preview: "Ticket time 3m48s. Waste 4.1%. Reserve healthy. No exceptions this week.",
    time: "Yesterday",
    unread: true,
  },
  {
    id: "thread-4",
    from: "DISCIPLINA",
    subject: "Operator check-in scheduled",
    preview: "Your bi-monthly operator briefing is scheduled for May 18.",
    time: "May 4",
    unread: false,
  },
];

// ─── KYC ─────────────────────────────────────────────────────────────────

export const kycSteps = [
  { id: "id", title: "Government ID verified", state: "complete" as const, detail: "UK passport — valid through 2031" },
  { id: "address", title: "Proof of address verified", state: "complete" as const, detail: "Utility bill — Edinburgh" },
  { id: "tax", title: "Tax profile started", state: "in-progress" as const, detail: "UK National Insurance reference required" },
  { id: "accreditation", title: "Investor accreditation declared", state: "complete" as const, detail: "Self-certified · Senior package" },
  { id: "source-of-funds", title: "Source of funds reviewed", state: "complete" as const, detail: "Employment income · self-attested" },
  { id: "screening", title: "Screening checks", state: "complete" as const, detail: "Sanctions and PEP — clear" },
];

// ─── Tax ─────────────────────────────────────────────────────────────────

export const taxProfile = {
  jurisdiction: "United Kingdom",
  taxId: "Pending — add NI reference",
  fiscalYear: "Apr 6 → Apr 5",
  exports: [
    { label: "2025/26 — Year-end statement", state: "Ready", note: "PDF + CSV available" },
    { label: "2024/25 — Adviser pack", state: "Archived", note: "Stored for 7 years" },
    { label: "K-1 / equivalent (US-bound investors)", state: "Not applicable", note: "" },
  ],
};

// ─── Settings ────────────────────────────────────────────────────────────

export const accountSecurity = [
  { label: "Two-factor authentication", state: "on" as const, detail: "TOTP authenticator + recovery codes" },
  { label: "Login alerts", state: "on" as const, detail: "Email + push when account is accessed" },
  { label: "Withdrawal whitelist", state: "off" as const, detail: "Lock payouts to verified rails only" },
  { label: "Session timeout", state: "on" as const, detail: "Auto sign-out after 20 minutes idle" },
];

export const accountPreferences = [
  { label: "Distribution day reminders", value: "Tuesday + Friday at 09:00 BST" },
  { label: "Weekly briefing", value: "Sunday — branch + pool roll-up" },
  { label: "Reporting language", value: "English" },
  { label: "Currency display", value: "GBP primary · USD secondary" },
];
