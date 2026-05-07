"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getPeopleOnPage, formatCompactNumber } from "@/lib/live-engagement";

export function LivePageCount({ label = "People on this page now" }: { label?: string }) {
  const pathname = usePathname();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setCount(getPeopleOnPage(pathname));
    update();
    const timer = window.setInterval(update, 45000);
    return () => window.clearInterval(timer);
  }, [pathname]);

  return (
    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-current">
      <span className="h-2 w-2 bg-[#b8865a]" />
      {label}: {count === null ? "..." : formatCompactNumber(count)}
    </span>
  );
}
