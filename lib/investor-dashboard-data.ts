export const dashboardMetricCards = [
  {
    label: "AFFAREM Access",
    value: "Control account",
    detail: "Branch, pool, agreement, document, and message visibility from one investor login.",
  },
  {
    label: "Distribution Review",
    value: "Twice weekly",
    detail: "Eligible net distributions are reviewed after reconciliation, reserves, fees, and deductions.",
  },
  {
    label: "Wallet Layer",
    value: "Future rail",
    detail: "Bank, prepaid card, digital wallet, and crypto connections subject to provider approval.",
  },
  {
    label: "Account Standard",
    value: "KYC + risk",
    detail: "Identity, tax, bank details, agreements, and risk notices stay attached to the account.",
  },
];

export const dashboardGroups = [
  {
    eyebrow: "AFFAREM operating control",
    title: "One account for branch truth.",
    summary:
      "The dashboard gives investors structured access to the control layer behind their branch, pool, documents, and messages.",
    items: [
      {
        title: "AFFAREM account",
        detail: "Investor profile, system permissions, account status, and access level.",
      },
      {
        title: "Branch / pool performance",
        detail: "Sales, cost movement, reserves, fees, operator notes, and performance flags.",
      },
      {
        title: "System agreement",
        detail: "Signed terms, active package rules, distribution conditions, and current obligations.",
      },
      {
        title: "Discipline score",
        detail: "A controlled account signal based on document status, communication, review completion, and risk acknowledgement.",
      },
    ],
  },
  {
    eyebrow: "Money movement",
    title: "Wallet, payout, and distribution controls.",
    summary:
      "Investors can see payout details and future wallet options without confusing projections with guaranteed returns.",
    items: [
      {
        title: "Payout details",
        detail: "Eligible distribution records, payout rail, payout status, and reconciliation note.",
      },
      {
        title: "Ölmez Investor Wallet",
        detail: "Future wallet layer for eligible payouts through approved banking, prepaid card, or digital wallet partners.",
      },
      {
        title: "Bank and card rails",
        detail: "Bank payout, virtual card, physical card delivery, spending controls, and wallet balance where available.",
      },
      {
        title: "Crypto wallet connection",
        detail: "Optional connection concept subject to provider approval, licensing, country rules, and compliance review.",
      },
    ],
  },
  {
    eyebrow: "Identity and documents",
    title: "The investor file stays complete.",
    summary:
      "AFFAREM should reduce back-and-forth by keeping the investor file, tax needs, account statements, and identity checks in one place.",
    items: [
      {
        title: "KYC / identity area",
        detail: "ID status, business profile, ownership details, renewal reminders, and verification checks.",
      },
      {
        title: "Documents",
        detail: "Investor agreement, package summary, branch records, notices, certificates, and account files.",
      },
      {
        title: "Tax filing",
        detail: "Tax profile, annual exports, country notes, and statement downloads prepared for adviser review.",
      },
      {
        title: "Account statements",
        detail: "Downloadable monthly, quarterly, and annual account statements with distribution history.",
      },
    ],
  },
  {
    eyebrow: "Communication",
    title: "Support belongs inside the system.",
    summary:
      "Messages, support, and investor notices are kept close to the account so decisions are documented instead of scattered.",
    items: [
      {
        title: "AFFAREM messages",
        detail: "Official account messages, investor desk updates, branch notes, and system alerts.",
      },
      {
        title: "Live chat",
        detail: "Dashboard support channel for account access, documents, payout questions, and escalation.",
      },
      {
        title: "Support tickets",
        detail: "Ticket status, priority, assigned desk, history, and expected response window.",
      },
      {
        title: "Risk notices",
        detail: "Plain-language notices before larger commitments, package upgrades, and branch-specific decisions.",
      },
    ],
  },
];

export const walletRails = [
  {
    name: "Bank payout",
    status: "Core rail",
    detail: "Reviewed payout settings, account holder match, statement record, and distribution history.",
  },
  {
    name: "Prepaid wallet",
    status: "Future rail",
    detail: "Prepaid balance, virtual card, physical card delivery, and spending controls with approved partners.",
  },
  {
    name: "Crypto connection",
    status: "Conditional rail",
    detail: "Connection concept only, subject to licensing, compliance review, partner availability, and market rules.",
  },
];

export const distributionRows = [
  {
    label: "Pool ST-50",
    period: "Week 22 review",
    status: "After reconciliation",
    amount: "Estimated eligible",
  },
  {
    label: "Houston unit file",
    period: "Branch review",
    status: "Reserve applied",
    amount: "Statement ready",
  },
  {
    label: "Starter account",
    period: "Second distribution",
    status: "Exit window open",
    amount: "Priority reviewed",
  },
];

export const accountChecklist = [
  "Identity verified",
  "System agreement signed",
  "Bank rail reviewed",
  "Risk notice acknowledged",
  "Tax profile started",
  "Distribution setting selected",
];

export const dashboardAccessMatrix = [
  {
    group: "Account",
    items: ["Investor profile", "Personal details", "KYC / identity area", "System agreement"],
  },
  {
    group: "Money",
    items: ["Payout details", "Distribution settings", "Twice-weekly history", "Bank account details"],
  },
  {
    group: "Wallet",
    items: ["Prepaid investor wallet", "Wallet balance", "Card spending controls", "Crypto wallet connection"],
  },
  {
    group: "Operations",
    items: ["Branch / pool performance", "Risk notices", "Documents", "Account statement downloads"],
  },
  {
    group: "Support",
    items: ["Messages", "AFFAREM messages", "Live chat", "Support tickets"],
  },
  {
    group: "Tax",
    items: ["Tax filing", "Statement export", "Annual documents", "Adviser-ready records"],
  },
];
