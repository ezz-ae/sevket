import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isLocalePrefix } from "@/lib/site-locale";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const requestHeaders = new Headers(request.headers);

  if (isLocalePrefix(firstSegment)) {
    requestHeaders.set("x-olmez-locale", firstSegment);

    const rewriteUrl = request.nextUrl.clone();
    const strippedPath = `/${segments.slice(1).join("/")}`;
    rewriteUrl.pathname = strippedPath === "/" ? "/" : strippedPath.replace(/\/$/, "") || "/";

    return NextResponse.rewrite(rewriteUrl, {
      request: {
        headers: requestHeaders,
      },
    });
  }

  requestHeaders.set("x-olmez-locale", "default");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|icon.svg|apple-icon.png|manifest.json|robots.txt|sitemap.xml|brand-images|images|placeholder|.*\\..*).*)",
  ],
};
