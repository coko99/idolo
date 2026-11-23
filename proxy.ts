import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { safeNextPath, SITE_GATE_COOKIE, SITE_GATE_TOKEN } from "@/lib/site-gate";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/ulaz") return NextResponse.next();

  if (request.cookies.get(SITE_GATE_COOKIE)?.value === SITE_GATE_TOKEN) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/ulaz";
  url.search = "";
  const next = `${pathname}${request.nextUrl.search}`;
  if (next !== "/") url.searchParams.set("next", safeNextPath(next));
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|images/|favicon.ico|icon.png|apple-icon.png).*)"],
};
