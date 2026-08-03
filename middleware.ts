import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

type Payload = {
  role: "ADMIN" | "CUSTOMER" | "TECHNICIAN";
};

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;

  const { pathname } = req.nextUrl;


  // Auth pages
  if (pathname.startsWith("/auth")) {

    // যদি token থাকে login/register এ যেতে দিবে না
    if (token) {
      try {
        jwtDecode<Payload>(token);

        return NextResponse.redirect(
          new URL("/", req.url)
        );

      } catch {
        const response = NextResponse.next();

        response.cookies.delete("accessToken");
        response.cookies.delete("refreshToken");

        return response;
      }
    }


    return NextResponse.next();
  }



  // Dashboard এখন middleware দিয়ে block করবে না
  // কারণ HttpOnly cookie backend domain এ থাকে

  return NextResponse.next();
}



export const config = {
  matcher: [
    "/auth/:path*",
  ],
};