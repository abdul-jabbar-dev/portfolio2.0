import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import clientServer from "./lib/apolloClient";
import API from "../api/gql";
import CONFIG from "./config";
const protectedRoutes = ["/edit", "/profile", "/admin", "/dashboard"];

const middleware = async (request: NextRequest) => {
  let user;
  const { pathname } = request.nextUrl;

  const token = request.cookies.get(CONFIG.STORAGE.TOKEN_KEY)?.value;

  const getData = async () => {
    const res: any = await clientServer
      .setHeaders({
        Cookie: `token=${token}`,
      })
      .request(API.Query.GET_ME);

    if (res?.getMe?.id) {
      return res?.getMe;
    }
  };


  if (token) {
    try {
      const data = await getData();
      user = data;
    } catch (error: any) {
      console.log(error?.response?.errors[0]?.message || error?.message || (error));
    }
  }


  if (protectedRoutes.some((path) => pathname.startsWith(path)) && (!user?.id || !token)) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname.startsWith("/login") && user?.id && token) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
};

export default middleware;

export const config = {
  matcher: ["/dashboard/:path*", "/edit/:path*", "/admin/:path*", "/dashboard", "/login"],
};
