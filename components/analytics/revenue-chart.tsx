"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 1200, target: 1400, units: 95 },
  { month: "Feb", revenue: 1450, target: 1400, units: 103 },
  { month: "Mar", revenue: 1600, target: 1500, units: 112 },
  { month: "Apr", revenue: 1750, target: 1600, units: 121 },
  { month: "May", revenue: 1920, target: 1700, units: 128 },
  { month: "Jun", revenue: 2100, target: 1800, units: 135 },
];

const quarterlyData = [
  { quarter: "Q1 2024", revenue: 4250, profit: 1020, margin: 24 },
  { quarter: "Q2 2024", revenue: 5370, profit: 1340, margin: 25 },
  { quarter: "Q3 2024", revenue: 6820, profit: 1820, margin: 27 },
  { quarter: "Q4 2024", revenue: 7650, profit: 2150, margin: 28 },
  { quarter: "Q1 2025", revenue: 8420, profit: 2480, margin: 29 },
  { quarter: "Q2 2025", revenue: 9180, profit: 2750, margin: 30 },
];

export function RevenueChart() {
  return (
    <div className="space-y-16">
      {/* Monthly Trend */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Monthly Revenue Trend (2025)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              formatter={(value) => `$${value}K`}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8B5A3C"
              strokeWidth={2}
              dot={{ fill: "#8B5A3C", r: 4 }}
              name="Actual Revenue"
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: "rgba(255,255,255,0.3)", r: 3 }}
              name="Target Revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Quarterly Performance */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Quarterly Performance & Margin
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={quarterlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="quarter" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              formatter={(value) => `$${value}K`}
            />
            <Legend />
            <Bar dataKey="revenue" fill="#8B5A3C" name="Revenue" />
            <Bar dataKey="profit" fill="#d9b079" name="Profit" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Key Insights */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            label: "Revenue CAGR",
            value: "32.4%",
            description: "Compound annual growth rate over 24 months",
          },
          {
            label: "Profit Margin",
            value: "30%",
            description: "Average net margin across network",
          },
          {
            label: "YTD Growth",
            value: "+38%",
            description: "Year-to-date revenue growth vs prior year",
          },
        ].map((insight) => (
          <div
            key={insight.label}
            className="border border-foreground/15 p-6 bg-foreground/[0.015]"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              {insight.label}
            </p>
            <p className="font-display text-3xl tracking-[-0.015em] mb-3">
              {insight.value}
            </p>
            <p className="text-sm text-foreground/60">{insight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
