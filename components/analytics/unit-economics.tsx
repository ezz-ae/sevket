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
  PieChart,
  Pie,
  Cell,
} from "recharts";

const unitEconomicsData = [
  { metric: "Revenue", value: 847 },
  { metric: "COGS", value: 254 },
  { metric: "Labor", value: 169 },
  { metric: "Rent", value: 85 },
  { metric: "Marketing", value: 42 },
  { metric: "Utilities", value: 34 },
  { metric: "Other", value: 50 },
];

const profitByUnitType = [
  { type: "Standard", revenue: 847, cogs: 254, opex: 210, profit: 383 },
  { type: "Premium", revenue: 1100, cogs: 310, opex: 250, profit: 540 },
  { type: "Express", revenue: 620, cogs: 186, opex: 160, profit: 274 },
];

const paybackAnalysis = [
  { month: 0, cumulative: -165 },
  { month: 3, cumulative: -135 },
  { month: 6, cumulative: -100 },
  { month: 9, cumulative: -60 },
  { month: 12, cumulative: -15 },
  { month: 15, cumulative: 35 },
  { month: 18, cumulative: 85 },
  { month: 21, cumulative: 140 },
  { month: 24, cumulative: 200 },
  { month: 27, cumulative: 265 },
  { month: 30, cumulative: 330 },
];

const revenueComposition = [
  { name: "Food Sales", value: 520, color: "#8B5A3C" },
  { name: "Beverage", value: 210, color: "#d9b079" },
  { name: "Catering", value: 85, color: "rgba(217, 176, 121, 0.6)" },
  { name: "Other", value: 32, color: "rgba(139, 90, 60, 0.4)" },
];

export function UnitEconomicsChart() {
  return (
    <div className="space-y-16">
      {/* Cost Breakdown */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Standard Unit Economics (Annual)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={unitEconomicsData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis type="number" stroke="rgba(255,255,255,0.5)" />
            <YAxis dataKey="metric" type="category" stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              formatter={(value) => `$${value}K`}
            />
            <Bar dataKey="value" fill="#8B5A3C" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Unit Type Comparison */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Performance by Unit Type
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={profitByUnitType}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="type" stroke="rgba(255,255,255,0.5)" />
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
            <Bar dataKey="cogs" fill="rgba(217, 176, 121, 0.8)" name="COGS" />
            <Bar dataKey="opex" fill="rgba(139, 90, 60, 0.4)" name="OpEx" />
            <Bar dataKey="profit" fill="#d9b079" name="Profit" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Payback Period */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Capital Payback Timeline
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={paybackAnalysis}>
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
            <Line
              type="monotone"
              dataKey="cumulative"
              stroke="#8B5A3C"
              strokeWidth={3}
              dot={{ fill: "#8B5A3C", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-center text-sm text-foreground/60 mt-6">
          Breakeven point occurs at 30 months with standard operating model
        </p>
      </div>

      {/* Revenue Composition */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
            Revenue Composition
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={revenueComposition}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: $${value}K`}
                outerRadius={80}
                fill="#8B5A3C"
                dataKey="value"
              >
                {revenueComposition.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
                formatter={(value) => `$${value}K`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          {[
            { label: "Gross Margin", value: "70%", color: "text-green-500/70" },
            { label: "Operating Margin", value: "45%", color: "text-green-500/70" },
            { label: "Net Margin", value: "38%", color: "text-green-500/70" },
            { label: "ROAS (Marketing)", value: "8.2x", color: "text-emerald-500/70" },
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
    </div>
  );
}
