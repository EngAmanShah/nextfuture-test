import { NextResponse } from "next/server";

const supportedLanguages = ["en", "ar"];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/fonts/") ||
    pathname.startsWith("/services/") ||
    pathname.startsWith("/work/") ||
    pathname.includes(".") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  if (
    pathname === "/admin" ||
    supportedLanguages.some((lang) => pathname === `/${lang}/admin`)
  ) {
    const langFromPath = supportedLanguages.find(
      (lang) => pathname === `/${lang}/admin`
    );

    const langToUse =
      langFromPath ||
      (() => {
        const acceptLang = request.headers.get("Accept-Language") || "";
        const preferredLang = acceptLang.split(",")[0].split("-")[0];
        return supportedLanguages.includes(preferredLang)
          ? preferredLang
          : "en";
      })();

    return NextResponse.redirect(
      new URL(`/${langToUse}/admin/system-management`, request.url)
    );
  }

  if (
    supportedLanguages.some(
      (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
    )
  ) {
    return NextResponse.next();
  }

  const acceptLang = request.headers.get("Accept-Language") || "";
  const preferredLang = acceptLang.split(",")[0].split("-")[0];

  const langToUse = supportedLanguages.includes(preferredLang)
    ? preferredLang
    : "en";

  return NextResponse.redirect(
    new URL(`/${langToUse}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|fonts|services|work|.*\\..*).*)"],
};
