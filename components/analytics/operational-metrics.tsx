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

const operationalData = [
  { month: "Jan", uptime: 92.3, staffing: 88, quality: 85, satisfaction: 82 },
  { month: "Feb", uptime: 93.1, staffing: 89, quality: 86, satisfaction: 83 },
  { month: "Mar", uptime: 93.8, staffing: 90, quality: 87, satisfaction: 84 },
  { month: "Apr", uptime: 94.2, staffing: 91, quality: 88, satisfaction: 86 },
  { month: "May", uptime: 94.5, staffing: 92, quality: 89, satisfaction: 87 },
  { month: "Jun", uptime: 94.8, staffing: 93, quality: 90, satisfaction: 88 },
];

const costMetrics = [
  { category: "Labor Cost/Unit", current: 12.3, target: 12.0, variance: -2.5 },
  {
    category: "Food Cost %",
    current: 30.0,
    target: 30.5,
    variance: 1.7,
  },
  { category: "Rent %Revenue", current: 10.0, target: 10.5, variance: 5.0 },
  {
    category: "Utilities/Unit",
    current: 4.0,
    target: 4.2,
    variance: 4.8,
  },
  { category: "Marketing/Unit", current: 5.0, target: 5.5, variance: 9.1 },
];

export function OperationalMetrics() {
  return (
    <div className="space-y-16">
      {/* Operational KPIs Trend */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Network Operational Performance
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={operationalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              formatter={(value) => `${value}%`}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="uptime"
              stroke="#8B5A3C"
              strokeWidth={2}
              dot={{ fill: "#8B5A3C", r: 3 }}
              name="System Uptime"
            />
            <Line
              type="monotone"
              dataKey="staffing"
              stroke="#d9b079"
              strokeWidth={2}
              dot={{ fill: "#d9b079", r: 3 }}
              name="Staffing Level"
            />
            <Line
              type="monotone"
              dataKey="quality"
              stroke="rgba(217, 176, 121, 0.6)"
              strokeWidth={2}
              dot={{ fill: "rgba(217, 176, 121, 0.6)", r: 3 }}
              name="Quality Score"
            />
            <Line
              type="monotone"
              dataKey="satisfaction"
              stroke="rgba(139, 90, 60, 0.5)"
              strokeWidth={2}
              dot={{ fill: "rgba(139, 90, 60, 0.5)", r: 3 }}
              name="Satisfaction"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Cost Metrics vs Target */}
      <div className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015]">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Cost Metrics vs Budget Targets
        </h3>
        <div className="space-y-6">
          {costMetrics.map((metric) => (
            <div key={metric.category}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm uppercase tracking-[0.1em]">
                  {metric.category}
                </span>
                <div className="flex gap-4 text-xs">
                  <span>Current: {metric.current}</span>
                  <span className="text-foreground/50">Target: {metric.target}</span>
                  <span
                    className={metric.variance > 0 ? "text-red-500/70" : "text-green-500/70"}
                  >
                    {metric.variance > 0 ? "+" : ""}{metric.variance}%
                  </span>
                </div>
              </div>
              <div className="h-2 bg-foreground/10 rounded-full overflow-hidden flex">
                <div
                  className="bg-[#8B5A3C] rounded-full"
                  style={{
                    width: `${Math.min((metric.current / metric.target) * 100, 100)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operational Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            label: "Average Uptime",
            value: "94.8%",
            description: "System availability across network",
          },
          {
            label: "Avg Quality Score",
            value: "89/100",
            description: "Customer satisfaction baseline",
          },
          {
            label: "Labor Efficiency",
            value: "93%",
            description: "Staff productivity vs benchmark",
          },
          {
            label: "Incident Rate",
            value: "0.3%",
            description: "Critical operational issues",
          },
          {
            label: "Recovery Time",
            value: "2.1 hrs",
            description: "Average issue resolution",
          },
          {
            label: "Training Completion",
            value: "97%",
            description: "Staff certification rate",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="border border-foreground/15 p-6 bg-foreground/[0.015]"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              {stat.label}
            </p>
            <p className="font-display text-3xl tracking-[-0.015em] mb-3">
              {stat.value}
            </p>
            <p className="text-sm text-foreground/60">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
