import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY!);
    const toEmail = process.env.contact_to || "askanything@sugarsaltdesign.com";

    await resend.emails.send({
      from: "Sugar Salt Designs <hello@sugarsaltdesign.com>",
      to: [toEmail],
      reply_to: email,
      subject: `New enquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return new Response("Email failed", { status: 500 });
  }
}
