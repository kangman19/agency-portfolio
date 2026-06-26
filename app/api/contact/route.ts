import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name: string;
  contactInfo: string;
  businessType: string;
  budget: string;
  description: string;
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;color:#888;font-size:13px;width:130px;vertical-align:top">${label}</td>
      <td style="padding:10px 0;font-size:14px;color:#111;vertical-align:top">${value || "N/A"}</td>
    </tr>`;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, contactInfo, businessType, budget, description } = body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kangetheian19@gmail.com",
      subject: `New enquiry from ${name || "a visitor"} | Astral Agency`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;background:#fff">
          <div style="margin-bottom:28px">
            <span style="display:inline-block;background:#C9A96E;color:#fff;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:4px 10px;border-radius:4px">New Lead</span>
          </div>
          <h2 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#111">Project Enquiry</h2>
          <p style="margin:0 0 28px;font-size:14px;color:#666">Submitted via astral.agency contact form</p>
          <table style="width:100%;border-collapse:collapse;border-top:1px solid #eee">
            ${row("Name", name)}
            ${row("Contact", contactInfo)}
            ${row("Service", businessType)}
            ${row("Budget", budget)}
            ${row("Message", description)}
          </table>
          <p style="margin:32px 0 0;font-size:12px;color:#aaa">Astral Agency · Nairobi, Kenya</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[/api/contact]", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
