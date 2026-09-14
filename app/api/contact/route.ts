import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || "prathikganiga07@gmail.com";
    const senderName = name.trim();
    const senderEmail = email.trim();
    const senderPhone = phone?.trim() || "Not provided";
    const messageContent = message.trim();
    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: #ffffff; padding: 28px 32px; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
    .header p { margin: 6px 0 0; opacity: 0.9; font-size: 14px; }
    .content { padding: 32px; }
    .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .meta-table td { padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
    .meta-table td.label { font-weight: 600; color: #64748b; width: 110px; }
    .meta-table td.val { color: #0f172a; font-weight: 500; }
    .meta-table td.val a { color: #2563eb; text-decoration: none; font-weight: 600; }
    .message-box { background: #f8fafc; border-left: 4px solid #2563eb; padding: 18px 20px; border-radius: 8px; margin: 20px 0 28px; }
    .message-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 8px; }
    .message-text { margin: 0; font-size: 15px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; }
    .action-btn { display: inline-block; background: #2563eb; color: #ffffff !important; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; text-decoration: none; text-align: center; }
    .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Portfolio Message</h1>
      <p>Someone reached out via your portfolio website contact form</p>
    </div>
    <div class="content">
      <table class="meta-table">
        <tr>
          <td class="label">Sender</td>
          <td class="val"><strong>${senderName}</strong></td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td class="val"><a href="mailto:${senderEmail}">${senderEmail}</a></td>
        </tr>
        <tr>
          <td class="label">Phone</td>
          <td class="val">${senderPhone}</td>
        </tr>
        <tr>
          <td class="label">Time (IST)</td>
          <td class="val">${formattedDate}</td>
        </tr>
      </table>

      <div class="message-box">
        <div class="message-title">Message</div>
        <p class="message-text">${messageContent}</p>
      </div>

      <div>
        <a href="mailto:${senderEmail}?subject=Re: Portfolio Inquiry" class="action-btn">
          Reply Directly to ${senderName}
        </a>
      </div>
    </div>
    <div class="footer">
      Delivered by Resend &bull; Portfolio Contact Form
    </div>
  </div>
</body>
</html>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: senderEmail,
        subject: `New Portfolio Message from ${senderName}`,
        html: htmlContent,
        text: `New Portfolio Message\n\nName: ${senderName}\nEmail: ${senderEmail}\nPhone: ${senderPhone}\nDate: ${formattedDate}\n\nMessage:\n${messageContent}`,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendData);
      return NextResponse.json(
        { error: resendData.message || "Failed to send email via Resend." },
        { status: resendResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      id: resendData.id,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact API internal error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}
