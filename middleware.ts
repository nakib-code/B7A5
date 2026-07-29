import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

type Payload = {
  role: "ADMIN" | "CUSTOMER" | "TECHNICIAN";
};

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;

  const { pathname } = req.nextUrl;

  // Not logged in
  if (!token) {
    if (pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(
        new URL("/auth/login", req.url)
      );
    }

    return NextResponse.next();
  }

  const user = jwtDecode<Payload>(token);

  // Prevent authenticated users from opening auth pages
  if (pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Admin routes
  if (
    pathname.startsWith("/dashboard/admin") &&
    user.role !== "ADMIN"
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Technician routes
  if (
    pathname.startsWith("/dashboard/technician") &&
    user.role !== "TECHNICIAN"
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Customer routes
  if (
    pathname.startsWith("/dashboard/customer") &&
    user.role !== "CUSTOMER"
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};