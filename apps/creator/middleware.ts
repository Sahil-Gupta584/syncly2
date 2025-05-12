import { Prisma } from "@repo/db";
import moment from "moment";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const publicRoutes = ["/auth", "/api/webhook"];
  const { pathname } = req.nextUrl;
  const isPublicRoute = publicRoutes.includes(pathname);
  const session = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });

  if (!session?.email && !isPublicRoute) {
    console.log("pathname", pathname);
    console.log("userId", session);

    console.log("is public", isPublicRoute);

    console.log("can't access private  route");
    return NextResponse.redirect(new URL("/auth", req.nextUrl.origin));
  }

  if (!session?.email) return NextResponse.next();

  if (session?.email && pathname === "/auth") {
    return NextResponse.redirect(new URL("/videos", req.nextUrl.origin));
  }
  const res = await fetch(
    `${process.env.CREATOR_BASE_URL}/api/user?email=${session?.email}`
  );

  const user: Prisma.UserGetPayload<{ include: { subscriptions: true } }> =
    await res.json();

  const isTrialExpired =
    user && user.plan === "TRIAL" && Number(user.trialEndAt) < moment().unix();

  if (isTrialExpired && pathname !== "/blocked/trial-expired") {
    return NextResponse.redirect(
      new URL("/blocked/trial-expired", req.nextUrl.origin)
    );
  }

  const isPaymentActive =
    user &&
    user.subscriptions[0] &&
    user.subscriptions[0].status === "active" &&
    moment(user.subscriptions[0].createdAt).unix() <
      moment(user.subscriptions[0].createdAt).add(7, "day").unix();

  if (
    user.plan !== "TRIAL" &&
    !isPaymentActive &&
    pathname !== "/blocked/payment-failed"
  ) {
    return NextResponse.redirect(
      new URL("/blocked/payment-failed", req.nextUrl.origin)
    );
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
