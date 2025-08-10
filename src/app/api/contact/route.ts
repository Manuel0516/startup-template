import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json(); // { firstName, lastName, email, message }
  // TODO: send to email/CRM. For now, just OK.
  console.log('Contact form:', body);
  return NextResponse.json({ ok: true });
}