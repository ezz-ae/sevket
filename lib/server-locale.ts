import { headers } from "next/headers";
import { normalizeLocale, SiteLocale } from "@/lib/site-locale";

export async function getRequestLocale(): Promise<SiteLocale> {
  const requestHeaders = await headers();
  return normalizeLocale(requestHeaders.get("x-olmez-locale"));
}
