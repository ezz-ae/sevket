"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const geographicData = [
  { territory: "Texas", units: 32, revenue: 27, growth: 18 },
  { territory: "Florida", units: 28, revenue: 23, growth: 16 },
  { territory: "California", units: 22, revenue: 18, growth: 22 },
  { territory: "New York", units: 21, revenue: 17, growth: 14 },
  { territory: "Illinois", units: 18, revenue: 15, growth: 20 },
  { territory: "Georgia", units: 12, revenue: 9, growth: 25 },
  { territory: "Other (6 regions)", units: 14, revenue: 11, growth: 15 },
];

const regionPerformance = [
  {
    region: "Southwest",
    units: 32,
    avgRevenue: 847,
    avgProfit: 383,
    efficiency: 96,
  },
  {
    region: "Southeast",
    units: 40,
    avgRevenue: 825,
    avgProfit: 370,
    efficiency: 92,
  },
  {
    region: "Midwest",
    units: 30,
    avgRevenue: 880,
    avgProfit: 400,
    efficiency: 95,
  },
  {
    region: "Northeast",
    units: 21,
    avgRevenue: 905,
    avgProfit: 410,
    efficiency: 97,
  },
  {
    region: "West Coast",
    units: 24,
    avgRevenue: 890,
    avgProfit: 405,
    efficiency: 96,
  },
];

export function GeographicDistribution() {
  return (
    <div className="space-y-16">
      {/* Territory Performance */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Units by Territory
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={geographicData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="territory" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />
            <Legend />
            <Bar dataKey="units" fill="#8B5A3C" name="Active Units" />
            <Bar dataKey="revenue" fill="#d9b079" name="Revenue ($M)" />
            <Bar
              dataKey="growth"
              fill="rgba(217, 176, 121, 0.5)"
              name="YoY Growth %"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Regional Analysis */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Regional Performance Metrics
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-foreground/15">
                <th className="text-left py-4 px-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Region
                </th>
                <th className="text-right py-4 px-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Units
                </th>
                <th className="text-right py-4 px-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Avg Revenue
                </th>
                <th className="text-right py-4 px-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Avg Profit
                </th>
                <th className="text-right py-4 px-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Efficiency
                </th>
              </tr>
            </thead>
            <tbody>
              {regionPerformance.map((region) => (
                <tr
                  key={region.region}
                  className="border-b border-foreground/10 hover:bg-foreground/5"
                >
                  <td className="py-4 px-4 font-mono text-sm">{region.region}</td>
                  <td className="text-right py-4 px-4">{region.units}</td>
                  <td className="text-right py-4 px-4">${region.avgRevenue}K</td>
                  <td className="text-right py-4 px-4">${region.avgProfit}K</td>
                  <td className="text-right py-4 px-4">
                    <span className="text-green-500/70">{region.efficiency}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expansion Opportunities */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-foreground/15 p-8 bg-foreground/[0.015]">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
            High-Potential Markets
          </h3>
          <ul className="space-y-4">
            {[
              { market: "Austin, TX", potential: "High", capacity: 8 },
              { market: "Nashville, TN", potential: "High", capacity: 6 },
              { market: "Denver, CO", potential: "Medium", capacity: 5 },
              { market: "Phoenix, AZ", potential: "High", capacity: 7 },
              { market: "Charlotte, NC", potential: "Medium", capacity: 4 },
            ].map((market) => (
              <li key={market.market} className="flex items-center justify-between">
                <span className="text-sm">{market.market}</span>
                <div className="flex gap-3">
                  <span
                    className={`text-xs font-mono tracking-[0.1em] ${
                      market.potential === "High"
                        ? "text-green-500/70"
                        : "text-yellow-500/70"
                    }`}
                  >
                    {market.potential}
                  </span>
                  <span className="text-xs text-foreground/50">
                    +{market.capacity} units
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-foreground/15 p-8 bg-foreground/[0.015]">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
            Market Statistics
          </h3>
          <div className="space-y-4">
            {[
              { label: "Total Coverage", value: "12 territories" },
              { label: "Largest Market", value: "Texas (32 units)" },
              { label: "Avg Market Size", value: "12.3 units" },
              { label: "Target Territories", value: "8 additional" },
              { label: "Expansion Timeline", value: "24 months" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between py-2 border-b border-foreground/10"
              >
                <span className="text-sm text-foreground/60">{stat.label}</span>
                <span className="font-mono text-sm">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
