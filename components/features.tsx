import { Card, CardContent, CardHeader } from "@/components/ui/card";

const features = [
  {
    icon: "🎙️",
    title: "Voice-first AI",
    description:
      "A natural phone conversation — no app to download, no form to fill out. Just pick up the phone.",
  },
  {
    icon: "✈️",
    title: "Real-time rebooking",
    description:
      "Live flight availability from Sabre GDS across hundreds of carriers. The AI compares price, layovers, and arrival times.",
  },
  {
    icon: "🏨",
    title: "Hotel suggestions",
    description:
      "If your best rebooking option arrives late at night, VoiceAIger proactively searches hotels near the arrival airport.",
  },
  {
    icon: "✅",
    title: "Instant confirmation",
    description:
      "Booking is created in Sabre and your confirmation number is read back to you before the call ends.",
  },
];

export function Features() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
          Everything handled, end to end
        </h2>
        <p className="mb-16 text-center text-white/40 max-w-xl mx-auto">
          VoiceAIger takes care of every step so you don&apos;t have to.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card
              key={f.title}
              className="border-white/10 bg-white/[0.03] text-white transition-colors hover:bg-white/[0.06]"
            >
              <CardHeader className="pb-2">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="mt-3 font-semibold text-white">{f.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/50 leading-relaxed">
                  {f.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
