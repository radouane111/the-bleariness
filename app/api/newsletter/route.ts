import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const audienceId = process.env.RESEND_AUDIENCE_ID!;
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  const { error } = await resend.contacts.create({
    email,
    audienceId,
    unsubscribed: false,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
