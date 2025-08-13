// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   const body = await req.json(); // { firstName, lastName, email, message }
//   // TODO: send to email/CRM. For now, just OK.
//   console.log('Contact form:', body);
//   return NextResponse.json({ ok: true });
// }


    // const transporter = nodemailer.createTransport({
    //   host: SMTP_HOST,
    //   port: Number(SMTP_PORT),
    //   secure: SMTP_SECURE === 'true', // true for 465, false for 587
    //   auth: { user: SMTP_USER, pass: SMTP_PASS },
    // });


import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Create a test account (Ethereal only works in dev)
const testAccount = await nodemailer.createTestAccount();

function validate(body: any) {
  const { firstName, lastName, email, message } = body || {};
  if (!firstName || !lastName || !email || !message) return 'Missing fields';
  if (!emailRegex.test(email)) return 'Invalid email';
  if (String(message).length > 5000) return 'Message too long';
  return null;
}

function escapeHtml(unsafe: string) {
  return unsafe.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[char] || char));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot check (optional)
    if (body?.website) return NextResponse.json({ ok: true });

    const err = validate(body);
    if (err) return NextResponse.json({ error: err }, { status: 400 });

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_SECURE,
      MAIL_TO,
      MAIL_FROM
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO || !MAIL_FROM) {
      return NextResponse.json({ error: 'Mail not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure, // true for 465, false for 587
      auth: { user: testAccount.user, pass: testAccount.pass},
    });

    const { firstName, lastName, email, message } = body;

    const subject = `New contact form: ${firstName} ${lastName}`;
    const text = `
From: ${firstName} ${lastName} <${email}>
Message:
${message}
`.trim();

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif">
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${firstName} ${lastName} &lt;${email}&gt;</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space: pre-wrap; background:#f3f4f6; padding:12px; border-radius:8px">${escapeHtml(message)}</pre>
      </div>
    `;

    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject,
      text,
      html,
    });

    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    return NextResponse.json({ ok: true, previewUrl: nodemailer.getTestMessageUrl(info) });
    //return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error sending mail', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}