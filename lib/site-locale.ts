export const localePrefixes = ["uk", "us", "tr", "ru"] as const;
export type LocalePrefix = (typeof localePrefixes)[number];
export type SiteLocale = "default" | LocalePrefix;

const localeSet = new Set<string>(localePrefixes);

export function isLocalePrefix(value?: string | null): value is LocalePrefix {
  return Boolean(value && localeSet.has(value));
}

export function normalizeLocale(value?: string | null): SiteLocale {
  if (isLocalePrefix(value)) return value;
  return "default";
}

export function getLocaleLang(locale: SiteLocale) {
  switch (locale) {
    case "uk":
      return "en-GB";
    case "us":
      return "en-US";
    case "tr":
      return "tr-TR";
    case "ru":
      return "ru-RU";
    default:
      return "en";
  }
}

export function isTurkishLocale(locale: SiteLocale) {
  return locale === "tr";
}

export function withLocale(path: string, locale: SiteLocale) {
  if (locale === "default") return path;
  const normalizedPath = path === "/" ? "" : path;
  return `/${locale}${normalizedPath}`;
}

export function splitLocaleFromPath(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (isLocalePrefix(first)) {
    const rest = segments.slice(1).join("/");
    return {
      locale: first,
      path: rest ? `/${rest}` : "/",
    };
  }

  return {
    locale: "default" as SiteLocale,
    path: pathname || "/",
  };
}

export function swapLocaleInPath(pathname: string, targetLocale: SiteLocale) {
  const { path } = splitLocaleFromPath(pathname);
  return withLocale(path, targetLocale);
}

export function getLocaleLabel(locale: SiteLocale) {
  switch (locale) {
    case "uk":
      return "UK";
    case "us":
      return "US";
    case "tr":
      return "TR";
    case "ru":
      return "RU";
    default:
      return "EN";
  }
}
