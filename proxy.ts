import { NextRequest, NextResponse } from "next/server";

const PAGE_MARKDOWN = `# VoiceAIger — Your AI Travel Agent, On The Phone

> Flight cancelled? VoiceAIger calls you back in seconds with rebooking options and hotel suggestions. No app. No hold music.

## What Is VoiceAIger

VoiceAIger is a voice AI travel agent that automatically calls travelers when flights are cancelled or disrupted. The AI searches real-time flight availability and hotel inventory via the Sabre Global Distribution System (GDS), powered by Claude AI, and confirms rebooking in a single phone call.

## How It Works

1. **Flight disrupted** — Your flight is cancelled or delayed. Instead of waiting on hold, VoiceAIger gets notified automatically.
2. **AI calls you** — Within 30 seconds, VoiceAIger calls your number. It searches real-time flight inventory and hotel availability while you talk.
3. **Booking confirmed** — You pick an option. The AI creates the booking via Sabre GDS and reads back your confirmation number — all in one call.

## Features

- **Voice-first AI** — A natural phone conversation. No app to download, no form to fill out. Just pick up the phone.
- **Real-time rebooking** — Live flight availability from Sabre GDS across hundreds of carriers. The AI compares price, layovers, and arrival times.
- **Hotel suggestions** — If your best rebooking option arrives late at night, VoiceAIger proactively searches hotels near the arrival airport.
- **Instant confirmation** — Booking is created in Sabre and your confirmation number is read back to you before the call ends.

## The Problem

Your flight just got cancelled. The airline puts you on hold for 45 minutes. The app crashes. You miss the last connection.

## The Solution

VoiceAIger calls you back in 30 seconds with 3 rebooking options. No app. No hold music. Just a quick phone call, handled by AI.

## Powered By

- Sabre GDS (Global Distribution System) — real-time flight and hotel inventory
- Claude AI (Anthropic) — reasoning and conversation
- VocalBridge — voice layer (STT/TTS/WebRTC)

## Join the Waitlist

Be first to fly smarter. Get early access at https://voiceaiger-web.vercel.app/#waitlist

No spam. Unsubscribe any time.
`;

export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";

  if (accept.includes("text/markdown")) {
    return new NextResponse(PAGE_MARKDOWN, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Vary: "Accept",
      },
    });
  }

  const response = NextResponse.next();
  response.headers.set("Vary", "Accept");
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|llms.txt|\\.well-known).*)"],
};
