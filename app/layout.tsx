import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoiceAIger — Your AI Travel Agent, On The Phone",
  description:
    "Flight cancelled? VoiceAIger calls you back in seconds with rebooking options and hotel suggestions. No app. No hold music.",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://voiceaiger-web.vercel.app/#organization",
    name: "VoiceAIger",
    url: "https://voiceaiger-web.vercel.app",
    description:
      "VoiceAIger is an AI-powered phone service that automatically calls travelers after flight disruptions to provide real-time rebooking options and hotel availability within seconds, eliminating the need for apps or hold music.",
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VoiceAIger",
    applicationCategory: "TravelApplication",
    description:
      "Voice AI travel agent. Flight cancelled? VoiceAIger calls you back in 30 seconds with rebooking options and hotel suggestions via Sabre GDS. Powered by Claude AI.",
    url: "https://voiceaiger-web.vercel.app",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      description: "Early access waitlist — free to join",
    },
    operatingSystem: "Phone, Web",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
