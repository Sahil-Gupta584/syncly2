import { auth } from "@/auth";
import { user } from "@heroui/react";
import { NextRequest, NextResponse } from "next/server";
import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";

export async function POST(req: NextRequest) {

  try {
    const session = await auth()
    const eventData = await req.text()

    console.log(
      JSON.stringify({  json: eventData,})
    );

    const isValid = validateWebhookSignature(eventData, "sha256", process.env.RAZORPAY_WEBHOOK_SECRET!);
console.log({isValid});
if (!isValid) {
  console.log('Got invalid webhook signature for userId',session?.user.id,);
  
}
    return NextResponse.json(user);
  } catch (error) {
    console.log("error in /api/webhook:", error);
    return NextResponse.json({ error });
  }
}
