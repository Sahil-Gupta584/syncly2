import { prisma } from "@repo/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email");

    if (!email) return NextResponse.json(null);

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        subscriptions: { orderBy: { createdAt: "desc" } },
      },
    });

    if (!user) return NextResponse.json(null);

    return NextResponse.json(user);
  } catch (error) {
    console.log("error in /api/user:", error);
    return NextResponse.json(null);
  }
}
