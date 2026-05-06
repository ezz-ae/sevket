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
    <header className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Link
          href={resolvedBackHref}
          className="mb-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground lg:mb-12"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {backLabel}
        </Link>

        <span className="mb-8 inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          <span className="w-10 h-px bg-[#b8865a]" />
          {eyebrow}
        </span>

        <h1 className="max-w-[12ch] font-display text-4xl leading-[0.98] tracking-[-0.03em] md:text-6xl lg:text-[88px]">
          {title}
          {italicTail && (
            <>
              <br />
              <span className="text-muted-foreground italic">{italicTail}</span>
            </>
          )}
        </h1>

        {dek && (
          <p className="mt-8 max-w-[60ch] text-base leading-[1.75] text-muted-foreground lg:mt-10 lg:text-lg">
            {dek}
          </p>
        )}

        {meta && meta.length > 0 && (
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-foreground/10 bg-foreground/10 md:grid-cols-4 lg:mt-14">
            {meta.map((m) => (
              <div
                key={m.label}
                className="min-h-[7rem] bg-background/72 px-4 py-5 backdrop-blur-sm lg:px-5 lg:py-6"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {m.label}
                </dt>
                <dd className="mt-3 font-display text-xl tracking-tight lg:text-2xl">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </header>
  );
}
