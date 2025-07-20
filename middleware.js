import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  if (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/create") ||
    pathname.startsWith("/profile")
  ) {
    if (token !== "admin-token") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (
    pathname.startsWith("/userProfile") ||
    pathname.startsWith("/listofblogs") ||
    pathname.startsWith("/blogs") ||
    pathname.startsWith("/TermsandConditions")
  ) {
    if (token !== "user-token" && token !== "admin-token") {
      return NextResponse.redirect(new URL("/userLogin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/create",
    "/profile",
    "/userProfile",
    "/listofblogs",
    "/blogs/:path*",
    "/TermsandConditions",
  ],
};
