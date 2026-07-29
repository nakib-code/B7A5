import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

type Payload = {
  role: "ADMIN" | "CUSTOMER" | "TECHNICIAN";
};

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;

  const { pathname } = req.nextUrl;

  if (!token) {
    if (
      pathname.startsWith("/dashboard") ||
      pathname === "/" ||
      pathname.startsWith("/services")
    ) {
      return NextResponse.redirect(
        new URL("/auth/login", req.url)
      );
    }

    return NextResponse.next();
  }

  try {
    const user = jwtDecode<Payload>(token);

    if (pathname.startsWith("/auth")) {
      return NextResponse.redirect(
        new URL("/", req.url)
      );
    }

    if (
      pathname.startsWith("/dashboard/admin") &&
      user.role !== "ADMIN"
    ) {
      return NextResponse.redirect(
        new URL(`/dashboard/${user.role.toLowerCase()}`, req.url)
      );
    }

    if (
      pathname.startsWith("/dashboard/customer") &&
      user.role !== "CUSTOMER"
    ) {
      return NextResponse.redirect(
        new URL(`/dashboard/${user.role.toLowerCase()}`, req.url)
      );
    }

    if (
      pathname.startsWith("/dashboard/technician") &&
      user.role !== "TECHNICIAN"
    ) {
      return NextResponse.redirect(
        new URL(`/dashboard/${user.role.toLowerCase()}`, req.url)
      );
    }

    return NextResponse.next();
  } catch {
    const res = NextResponse.redirect(
      new URL("/auth/login", req.url)
    );

    res.cookies.delete("accessToken");
    res.cookies.delete("refreshToken");

    return res;
  }
}

export const config = {
  matcher: [
    "/",
    "/services/:path*",
    "/dashboard/:path*",
    "/auth/:path*",
  ],
};