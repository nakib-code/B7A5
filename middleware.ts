import { NextRequest, NextResponse } from "next/server";

export function middleware(
  request: NextRequest
) {
  const token =
    request.cookies.get("accessToken")?.value;

  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/dashboard") &&
    !token
  ) {
    return NextResponse.redirect(
      new URL("/auth/login", request.url)
    );
  }

  if (
    pathname.startsWith("/auth") &&
    token
  ) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};