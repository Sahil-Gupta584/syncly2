import { auth } from "@/auth";
import { prisma } from "@repo/db";
import { NextRequest, NextResponse } from "next/server";
import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user.id) {
      return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
    }
    const rawBody = await req.text();

    const signature = req.headers.get("x-razorpay-signature");

    const isValid = validateWebhookSignature(
      rawBody,
      signature!,
      process.env.RAZORPAY_WEBHOOK_SECRET!
    );

    if (!isValid) {
      console.error("Invalid webhook signature ");
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const payload = JSON.parse(rawBody);
    console.log("Webhook payload:", payload);

    if (payload.event.includes("subscription.")) {
      await prisma.$transaction(async () => {
        await prisma.subscription.update({
          where: {
            userId: session.user.id,
            razorpaySubId: payload.payload.subscription.entity.id,
            status: "active",
          },
          data: {
            status: "completed",
          },
        });

        if (payload.event === "subscription.charged") {
          await prisma.subscription.create({
            data: {
              userId: session?.user.id,
              razorpayCustId: payload.payload.subscription.entity.customer_id,
              razorpaySubId: payload.payload.subscription.entity.id,
              status: "active",
            },
          });
        }

        if (payload.event === "subscription.pending") {
          await prisma.subscription.create({
            data: {
              userId: session?.user.id,
              razorpayCustId: payload.payload.subscription.entity.customer_id,
              razorpaySubId: payload.payload.subscription.entity.id,
              status: "failed",
            },
          });
        }
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in webhook handler:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
