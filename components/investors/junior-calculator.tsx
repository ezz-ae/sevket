"use client";

import { useMemo, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function JuniorCalculator() {
  const [budget, setBudget] = useState(1000);
  const projection = useMemo(() => {
    const monthlyLow = Math.round(budget * 0.012);
    const monthlyHigh = Math.round(budget * 0.034);
    const sixMonthLow = monthlyLow * 6;
    const sixMonthHigh = monthlyHigh * 6;
    return { monthlyLow, monthlyHigh, sixMonthLow, sixMonthHigh };
  }, [budget]);

  return (
    <div className="border border-white/10 bg-black/28 p-6 lg:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/46">
            Starter budget
          </p>
          <p className="mt-2 font-display text-5xl tracking-[-0.04em] text-white">
            {formatter.format(budget)}
          </p>
        </div>
        <div className="border border-white/10 bg-black/24 p-4 text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
            Pool size
          </p>
          <p className="mt-2 font-display text-2xl tracking-[-0.03em] text-[#e7bc8b]">
            50 restaurants
          </p>
        </div>
      </div>

      <input
        aria-label="Junior investor budget"
        type="range"
        min={1000}
        max={12000}
        step={250}
        value={budget}
        onChange={(event) => setBudget(Number(event.target.value))}
        className="mt-8 w-full accent-[#b8865a]"
      />
      <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">
        <span>$1,000</span>
        <span>$12,000 max</span>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="border border-white/10 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
            Estimated monthly eligible distribution
          </p>
          <p className="mt-3 font-display text-3xl tracking-[-0.03em] text-white">
            {formatter.format(projection.monthlyLow)} – {formatter.format(projection.monthlyHigh)}
          </p>
        </div>
        <div className="border border-white/10 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
            Estimated six-month range
          </p>
          <p className="mt-3 font-display text-3xl tracking-[-0.03em] text-white">
            {formatter.format(projection.sixMonthLow)} – {formatter.format(projection.sixMonthHigh)}
          </p>
        </div>
      </div>

      <p className="mt-6 text-xs leading-[1.8] text-white/48">
        Projection only. Eligible distributions depend on pool performance, sales reconciliation, operating costs, reserves, fees, and applicable deductions. No fixed return or guaranteed payout is implied.
      </p>
    </div>
  );
}
