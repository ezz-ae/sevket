"use client";

import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";

const unitGrowthData = [
  { year: "2021", units: 45, coverage: 8 },
  { year: "2022", units: 67, coverage: 9 },
  { year: "2023", units: 94, coverage: 10 },
  { year: "2024", units: 128, coverage: 11 },
  { year: "2025", units: 147, coverage: 12 },
];

const monthlyAdditions = [
  { month: "Jan", new: 4, churn: 0, retention: 100 },
  { month: "Feb", new: 6, churn: 1, retention: 98 },
  { month: "Mar", new: 5, churn: 0, retention: 100 },
  { month: "Apr", new: 7, churn: 0, retention: 100 },
  { month: "May", new: 8, churn: 1, retention: 99 },
  { month: "Jun", new: 9, churn: 0, retention: 100 },
];

const marketPenetration = [
  { territory: "Texas", penetration: 42, potential: 100 },
  { territory: "Florida", penetration: 38, potential: 100 },
  { territory: "California", penetration: 28, potential: 100 },
  { territory: "New York", penetration: 35, potential: 100 },
  { territory: "Illinois", penetration: 25, potential: 100 },
];

export function GrowthMetrics() {
  return (
    <div className="space-y-16">
      {/* Unit Growth Over Time */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Network Unit Growth & Territory Expansion
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={unitGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" />
            <YAxis yAxisId="left" stroke="rgba(255,255,255,0.5)" />
            <YAxis yAxisId="right" orientation="right" stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />
            <Legend />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="units"
              fill="rgba(139, 90, 60, 0.3)"
              stroke="#8B5A3C"
              strokeWidth={2}
              name="Active Units"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="coverage"
              stroke="#d9b079"
              strokeWidth={2}
              name="Territories"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Unit Additions */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Monthly Unit Additions & Retention
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={monthlyAdditions}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
            <YAxis yAxisId="left" stroke="rgba(255,255,255,0.5)" />
            <YAxis yAxisId="right" orientation="right" stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="new"
              stroke="#8B5A3C"
              strokeWidth={2}
              dot={{ fill: "#8B5A3C", r: 4 }}
              name="New Units"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="retention"
              stroke="#d9b079"
              strokeWidth={2}
              dot={{ fill: "#d9b079", r: 4 }}
              name="Retention %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Territory Penetration */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Market Penetration by Territory
        </h3>
        <div className="space-y-6">
          {marketPenetration.map((territory) => (
            <div key={territory.territory}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm uppercase tracking-[0.1em]">
                  {territory.territory}
                </span>
                <span className="text-sm text-foreground/60">
                  {territory.penetration}%
                </span>
              </div>
              <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#8B5A3C] rounded-full transition-all"
                  style={{ width: `${territory.penetration}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Growth Metrics Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            label: "YoY Unit Growth",
            value: "+18 units",
            description: "New franchises added in past 12 months",
          },
          {
            label: "Territory Expansion",
            value: "+3 regions",
            description: "New markets entered in 2025",
          },
          {
            label: "Network Retention",
            value: "99.3%",
            description: "Average unit retention rate",
          },
        ].map((metric) => (
          <div
            key={metric.label}
            className="border border-foreground/15 p-6 bg-foreground/[0.015]"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              {metric.label}
            </p>
            <p className="font-display text-3xl tracking-[-0.015em] mb-3">
              {metric.value}
            </p>
            <p className="text-sm text-foreground/60">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
