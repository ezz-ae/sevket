"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const returnData = [
  { investor: "Early (2021)", annualReturn: 24, cumulative: 145, units: 32 },
  { investor: "Growth (2022)", annualReturn: 20, cumulative: 102, units: 28 },
  { investor: "Standard (2023)", annualReturn: 18, cumulative: 78, units: 24 },
  { investor: "Current (2024)", annualReturn: 16, cumulative: 48, units: 20 },
  { investor: "New (2025)", annualReturn: 14, cumulative: 15, units: 12 },
];

const capitalDeployment = [
  { quarter: "Q1 2024", deployed: 400, reserved: 800, utilization: 33 },
  { quarter: "Q2 2024", deployed: 520, reserved: 680, utilization: 43 },
  { quarter: "Q3 2024", deployed: 680, reserved: 520, utilization: 57 },
  { quarter: "Q4 2024", deployed: 820, reserved: 380, utilization: 68 },
  { quarter: "Q1 2025", deployed: 1100, reserved: 100, utilization: 92 },
];

const cohortPerformance = [
  { cohort: "2021", count: 32, avgReturn: 145, retention: 100, status: "Exited" },
  {
    cohort: "2022",
    count: 28,
    avgReturn: 102,
    retention: 98,
    status: "Mature",
  },
  { cohort: "2023", count: 24, avgReturn: 78, retention: 96, status: "Mature" },
  {
    cohort: "2024",
    count: 20,
    avgReturn: 48,
    retention: 100,
    status: "Growth",
  },
  { cohort: "2025", count: 12, avgReturn: 15, retention: 100, status: "Early" },
];

export function InvestorReturns() {
  return (
    <div className="space-y-16">
      {/* Return Comparison by Cohort */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Returns by Investor Cohort
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={returnData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="investor" stroke="rgba(255,255,255,0.5)" />
            <YAxis yAxisId="left" stroke="rgba(255,255,255,0.5)" />
            <YAxis yAxisId="right" orientation="right" stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              formatter={(value) => `${value}%`}
            />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="annualReturn"
              fill="#8B5A3C"
              name="Annual Return %"
            />
            <Bar
              yAxisId="left"
              dataKey="cumulative"
              fill="rgba(217, 176, 121, 0.8)"
              name="Cumulative Return %"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Capital Deployment */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Capital Deployment Timeline
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={capitalDeployment}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="quarter" stroke="rgba(255,255,255,0.5)" />
            <YAxis yAxisId="left" stroke="rgba(255,255,255,0.5)" />
            <YAxis yAxisId="right" orientation="right" stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              formatter={(value) => `$${value}M`}
            />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="deployed"
              stroke="#8B5A3C"
              strokeWidth={2}
              dot={{ fill: "#8B5A3C", r: 4 }}
              name="Capital Deployed"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="reserved"
              stroke="rgba(139, 90, 60, 0.4)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: "rgba(139, 90, 60, 0.4)", r: 3 }}
              name="Reserved"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="utilization"
              stroke="#d9b079"
              strokeWidth={2}
              dot={{ fill: "#d9b079", r: 4 }}
              name="Utilization %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Cohort Performance Table */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Investment Cohort Performance
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-foreground/15">
                <th className="text-left py-4 px-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Cohort
                </th>
                <th className="text-right py-4 px-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Investors
                </th>
                <th className="text-right py-4 px-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Avg Return
                </th>
                <th className="text-right py-4 px-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Retention
                </th>
                <th className="text-right py-4 px-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {cohortPerformance.map((cohort) => (
                <tr
                  key={cohort.cohort}
                  className="border-b border-foreground/10 hover:bg-foreground/5"
                >
                  <td className="py-4 px-4 font-mono text-sm">{cohort.cohort}</td>
                  <td className="text-right py-4 px-4">{cohort.count}</td>
                  <td className="text-right py-4 px-4 text-green-500/70">
                    {cohort.avgReturn}%
                  </td>
                  <td className="text-right py-4 px-4">{cohort.retention}%</td>
                  <td className="text-right py-4 px-4">
                    <span
                      className={`text-xs font-mono tracking-[0.1em] px-2 py-1 rounded ${
                        cohort.status === "Exited"
                          ? "bg-green-500/10 text-green-500/70"
                          : cohort.status === "Mature"
                            ? "bg-blue-500/10 text-blue-500/70"
                            : "bg-yellow-500/10 text-yellow-500/70"
                      }`}
                    >
                      {cohort.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Capital Raised", value: "$18.2M", color: "text-blue-500/70" },
          {
            label: "Avg Annual Return",
            value: "18.4%",
            color: "text-green-500/70",
          },
          { label: "Investor Retention", value: "98.6%", color: "text-emerald-500/70" },
          {
            label: "Successful Exits",
            value: "32",
            color: "text-green-500/70",
          },
        ].map((metric) => (
          <div
            key={metric.label}
            className="border border-foreground/15 p-6 bg-foreground/[0.015]"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
              {metric.label}
            </p>
            <p className={`font-display text-3xl tracking-[-0.015em] ${metric.color}`}>
              {metric.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
