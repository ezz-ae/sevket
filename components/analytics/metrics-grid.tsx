"use client";

export function MetricsGrid() {
  const metrics = [
    {
      label: "Total Network Units",
      value: "147",
      change: "+18",
      period: "YoY",
      trend: "up",
    },
    {
      label: "Average Unit Revenue",
      value: "$847K",
      change: "+22%",
      period: "YoY",
      trend: "up",
    },
    {
      label: "Territories Active",
      value: "12",
      change: "+3",
      period: "YoY",
      trend: "up",
    },
    {
      label: "Total AUM",
      value: "$18.2M",
      change: "+28%",
      period: "YoY",
      trend: "up",
    },
    {
      label: "Avg Capital Recovery",
      value: "30 mo",
      change: "-6 mo",
      period: "YoY",
      trend: "down",
    },
    {
      label: "Network Efficiency",
      value: "94.2%",
      change: "+2.1%",
      period: "YoY",
      trend: "up",
    },
    {
      label: "Investor File Coverage",
      value: "98.4%",
      change: "+3.2%",
      period: "YoY",
      trend: "up",
    },
    {
      label: "Operational Cost/Unit",
      value: "$12.3K",
      change: "-8%",
      period: "YoY",
      trend: "down",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className="border border-foreground/15 p-8 bg-foreground/[0.015]"
        >
          <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
            {metric.label}
          </h3>
          <p className="font-display text-4xl tracking-[-0.015em] mb-4">
            {metric.value}
          </p>
          <p
            className={`text-sm font-mono tracking-[0.1em] ${
              metric.trend === "up" ? "text-green-500/70" : "text-emerald-500/70"
            }`}
          >
            {metric.trend === "up" ? "↑" : "↓"} {metric.change} {metric.period}
          </p>
        </article>
      ))}
    </div>
  );
}
