export const siteMetrics = {
  brands: 5,
  employees: 2740,
  countries: 5,
  restaurantsOwnedManaged: 250,
  recordedDistributionsUsd: 16000000,
  shawermaBranchesProjected2028: 60,
  newMarketDevelopmentPlanUsd: 65000000,
  globalFundingTarget2028Usd: 50000000,
  studentSponsorshipCurrent: 500,
  studentSponsorshipTarget: 700,
  juniorLevel1Min: 1000,
  juniorLevel1Max: 3000,
  juniorLevel2Max: 12000,
  juniorMaxMonths: 6,
  paperAccountMonthlyFee: 500,
  paperAccountSimulationBalance: 12000,
  qualifiedLearningFirstMonthMax: 5000,
  workReportBonusPercent: 5,
  juniorGuaranteePercent: 10,
  affaremTurkeyNewTeam: 25,
} as const;

export function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}
