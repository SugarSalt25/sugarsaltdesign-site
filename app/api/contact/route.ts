import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    const TO = process.env.CONTACT_TO || "";
    const resendKey = process.env.RESEND_API_KEY || "";

    if (!TO) return NextResponse.json({ ok: false, error: "CONTACT_TO not set" }, { status: 500 });
    const recipients = TO.split(",").map(s => s.trim()).filter(Boolean);

    if (!resendKey) {
      // Fallback: log-only if no key
      console.log("Contact submission (no RESEND key):", { name, email, message, recipients });
      return NextResponse.redirect("/", { status: 302 });
    }

    const resend = new Resend(resendKey);
    await resend.emails.send({
      from: "noreply@sugarsaltdesign.com",
      to: recipients,
      subject: `New enquiry from sugarsaltdesign.com — ${name}`,
      reply_to: email,
      text: `From: ${name} <${email}>\n\n${message}`
    });

    return NextResponse.redirect("/", { status: 302 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
