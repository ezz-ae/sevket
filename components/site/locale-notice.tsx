import { SiteLocale } from "@/lib/site-locale";

// The platform now ships English (default) and Turkish (/tr). Other locales
// were retired so the menu and chrome stay focused. The component is kept as
// a no-op for backwards compatibility with the layout import.
export function LocaleNotice({ locale: _locale }: { locale: SiteLocale }) {
  return null;
}
