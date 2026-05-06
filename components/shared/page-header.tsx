import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteLocale, withLocale } from "@/lib/site-locale";

export function PageHeader({
  eyebrow,
  title,
  italicTail,
  dek,
  meta,
  locale = "default",
  backHref,
  backLabel = "Return to landing",
}: {
  eyebrow: string;
  title: string;
  italicTail?: string;
  dek?: string;
  meta?: { label: string; value: string }[];
  locale?: SiteLocale;
  backHref?: string;
  backLabel?: string;
}) {
  const resolvedBackHref = backHref ?? withLocale("/", locale);

  return (
    <header className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Link
          href={resolvedBackHref}
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors mb-12 lg:mb-16"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {backLabel}
        </Link>

        <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10">
          <span className="w-10 h-px bg-[#b8865a]" />
          {eyebrow}
        </span>

        <h1 className="font-display tracking-[-0.015em] leading-[0.95] text-5xl md:text-7xl lg:text-[120px]">
          {title}
          {italicTail && (
            <>
              <br />
              <span className="text-muted-foreground italic">{italicTail}</span>
            </>
          )}
        </h1>

        {dek && (
          <p className="mt-10 lg:mt-14 max-w-[68ch] text-lg lg:text-xl text-muted-foreground leading-[1.7]">
            {dek}
          </p>
        )}

        {meta && meta.length > 0 && (
          <dl className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-foreground/10">
            {meta.map((m, i) => (
              <div
                key={m.label}
                className={`py-6 lg:py-8 ${
                  i < meta.length - 1 ? "md:border-r border-foreground/10" : ""
                } ${i < 2 ? "border-b md:border-b-0 border-foreground/10" : ""}`}
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {m.label}
                </dt>
                <dd className="mt-2 font-display text-2xl lg:text-3xl tracking-tight">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </header>
  );
}
