import { SiteLocale } from "@/lib/site-locale";

export function LocaleNotice({ locale }: { locale: SiteLocale }) {
  if (locale !== "ru") return null;

  return (
    <div className="border-b border-[#b8865a]/25 bg-[#160d09] px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-[#efc895]">
      Russian localization is being prepared. You are currently viewing the English fallback.
    </div>
  );
}
