import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "The Bleariness <onboarding@resend.dev>",
    to: ["contact@bleariness.com"],
    replyTo: email,
    subject: `[Kontakt] ${subject} — von ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Betreff:</strong> ${subject}</p>
      <hr />
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
