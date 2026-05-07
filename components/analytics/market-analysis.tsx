"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const competitivePosition = [
  { company: "Ölmez", unitCount: 147, avgUnit: 847, margin: 45, score: 94 },
  {
    company: "Competitor A",
    unitCount: 213,
    avgUnit: 720,
    margin: 32,
    score: 78,
  },
  {
    company: "Competitor B",
    unitCount: 89,
    avgUnit: 650,
    margin: 28,
    score: 68,
  },
  {
    company: "Competitor C",
    unitCount: 156,
    avgUnit: 580,
    margin: 24,
    score: 62,
  },
];

const marketTrends = [
  { year: 2019, marketSize: 8200, ölmezShare: 0.5, growth: 4.2 },
  { year: 2020, marketSize: 7900, ölmezShare: 0.8, growth: -3.7 },
  { year: 2021, marketSize: 8400, ölmezShare: 2.1, growth: 6.3 },
  { year: 2022, marketSize: 8950, ölmezShare: 4.5, growth: 6.5 },
  { year: 2023, marketSize: 9680, ölmezShare: 7.8, growth: 8.2 },
  { year: 2024, marketSize: 10520, ölmezShare: 12.4, growth: 8.7 },
  { year: 2025, marketSize: 11380, ölmezShare: 15.2, growth: 8.2 },
];

const marketInsights = [
  {
    segment: "Fine Dining",
    size: 2800,
    growth: 3.2,
    ölmez: false,
    note: "Low operating fit",
  },
  {
    segment: "Casual Dining",
    size: 3400,
    growth: 5.8,
    ölmez: true,
    note: "Primary Focus",
  },
  {
    segment: "Fast Casual",
    size: 2950,
    growth: 8.4,
    ölmez: true,
    note: "High Growth",
  },
  {
    segment: "QSR",
    size: 2230,
    growth: 6.1,
    ölmez: true,
    note: "Expansion Zone",
  },
];

export function MarketAnalysis() {
  return (
    <div className="space-y-16">
      {/* Competitive Positioning */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Competitive Performance Matrix
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis
              type="number"
              dataKey="unitCount"
              stroke="rgba(255,255,255,0.5)"
              name="Unit Count"
            />
            <YAxis
              type="number"
              dataKey="margin"
              stroke="rgba(255,255,255,0.5)"
              name="Profit Margin %"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              cursor={{ strokeDasharray: "3 3" }}
              formatter={(value, name) => {
                if (name === "unitCount") return `${value} units`;
                if (name === "margin") return `${value}%`;
                return value;
              }}
            />
            <Scatter
              name="Market Players"
              data={competitivePosition}
              fill="#8B5A3C"
              shape="circle"
            />
            {competitivePosition.map((company, index) => (
              <text
                key={company.company}
                x={company.unitCount}
                y={company.margin + 2}
                fill="rgba(255,255,255,0.7)"
                fontSize={11}
                textAnchor="middle"
              >
                {company.company}
              </text>
            ))}
          </ScatterChart>
        </ResponsiveContainer>
        <p className="text-center text-sm text-foreground/60 mt-6">
          Bubble size represents operational efficiency score (50-100)
        </p>
      </div>

      {/* Market Trends */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Market Growth & Ölmez Market Share
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={marketTrends}>
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
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="marketSize"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: "rgba(255,255,255,0.3)", r: 3 }}
              name="Total Market ($M)"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="ölmezShare"
              stroke="#8B5A3C"
              strokeWidth={2}
              dot={{ fill: "#8B5A3C", r: 4 }}
              name="Ölmez Market Share %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Market Segments */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Restaurant Market Segments
        </h3>
        <div className="space-y-6">
          {marketInsights.map((segment) => (
            <div key={segment.segment}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="font-mono text-sm uppercase tracking-[0.1em]">
                    {segment.segment}
                  </span>
                  <span className="ml-4 text-xs text-foreground/50">
                    Market: ${segment.size}M
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs font-mono tracking-[0.1em] ${
                      segment.growth > 7 ? "text-green-500/70" : "text-yellow-500/70"
                    }`}
                  >
                    Growth: {segment.growth}%
                  </span>
                  {segment.ölmez && (
                    <span className="text-xs bg-[#8B5A3C]/20 text-[#d9b079] px-2 py-1 rounded">
                      {segment.note}
                    </span>
                  )}
                </div>
              </div>
              <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                <div
                  className={segment.ölmez ? "bg-[#8B5A3C]" : "bg-foreground/20"}
                  style={{
                    width: `${Math.min((segment.size / 3400) * 100, 100)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Insights Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-foreground/15 p-8 bg-foreground/[0.015]">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
            Market Opportunities
          </h3>
          <ul className="space-y-3">
            {[
              "Franchise consolidation trend",
              "Rising labor costs benefit systemized models",
              "Consumer preference for proven brands",
              "Technology integration demand",
              "Supply chain optimization needs",
            ].map((opportunity) => (
              <li
                key={opportunity}
                className="flex items-start gap-3 text-sm text-foreground/70"
              >
                <span className="text-green-500/70 mt-1">✓</span>
                <span>{opportunity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-foreground/15 p-8 bg-foreground/[0.015]">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
            Market Challenges
          </h3>
          <ul className="space-y-3">
            {[
              "Labor shortage in key markets",
              "Rising commodity food costs",
              "Increased competition from tech-enabled concepts",
              "Real estate cost inflation",
              "Supply chain volatility",
            ].map((challenge) => (
              <li
                key={challenge}
                className="flex items-start gap-3 text-sm text-foreground/70"
              >
                <span className="text-yellow-500/70 mt-1">⚠</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Key Market Metrics */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            label: "Total Addressable Market",
            value: "$11.4B",
            trend: "+8.2%",
          },
          {
            label: "Ölmez Market Position",
            value: "#1",
            subtitle: "In disciplined franchise model",
          },
          {
            label: "Market Share Growth",
            value: "+3.2%",
            trend: "YoY",
          },
          { label: "Target Capture Rate", value: "25%", subtitle: "By 2027" },
        ].map((metric) => (
          <div
            key={metric.label}
            className="border border-foreground/15 p-6 bg-foreground/[0.015]"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              {metric.label}
            </p>
            <p className="font-display text-3xl tracking-[-0.015em] mb-1">
              {metric.value}
            </p>
            <p className="text-xs text-foreground/60">
              {metric.trend || metric.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
