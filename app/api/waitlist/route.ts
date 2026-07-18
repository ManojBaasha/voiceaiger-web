import { NextRequest, NextResponse } from "next/server";
import { addEmail } from "@/lib/waitlist-store";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email: unknown = body?.email;

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const added = addEmail(email.toLowerCase().trim());
  if (!added) {
    return NextResponse.json({ error: "Already on the list" }, { status: 409 });
  }

  return NextResponse.json({ success: true });
}
