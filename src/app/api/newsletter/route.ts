import { NextResponse } from "next/server";
import { Resend } from "resend";

type NewsletterRequest = {
  email?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json()) as NewsletterRequest;
  const email = body.email?.trim().toLowerCase();

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const provider = process.env.NEWSLETTER_PROVIDER ?? "resend";
  if (provider !== "resend") {
    return NextResponse.json(
      {
        ok: false,
        error: `Unsupported provider: ${provider}`,
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.NEWSLETTER_FROM_EMAIL;
  const audience = process.env.NEWSLETTER_AUDIENCE_ID;
  if (!apiKey || !from || !audience) {
    return NextResponse.json(
      {
        ok: true,
        email,
        message:
          "Subscription scaffold active. Add RESEND_API_KEY, NEWSLETTER_FROM_EMAIL, and NEWSLETTER_AUDIENCE_ID to enable live subscriptions.",
      },
      { status: 200 },
    );
  }

  const resend = new Resend(apiKey);
  const result = await resend.contacts.create({
    email,
    audienceId: audience,
  });

  if (result.error) {
    return NextResponse.json(
      {
        ok: false,
        error: result.error.message,
      },
      { status: 500 },
    );
  }

  await resend.emails.send({
    from,
    to: email,
    subject: "Welcome to Dhruv World Newsletter",
    html: `<p>Thanks for subscribing to Dhruv World updates. You are now on the list.</p>`,
  });

  return NextResponse.json(
    {
      ok: true,
      email,
      message: "Subscribed successfully.",
    },
    { status: 200 },
  );
}
