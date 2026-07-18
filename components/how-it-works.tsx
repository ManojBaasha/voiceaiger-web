const steps = [
  {
    number: "01",
    title: "Flight disrupted",
    description:
      "Your flight is cancelled or delayed. Instead of waiting on hold, VoiceAIger gets notified automatically.",
  },
  {
    number: "02",
    title: "AI calls you",
    description:
      "Within 30 seconds, VoiceAIger calls your number. It searches real-time flight inventory and hotel availability while you talk.",
  },
  {
    number: "03",
    title: "Booking confirmed",
    description:
      "You pick an option. The AI creates the booking via Sabre GDS and reads back your confirmation number — all in one call.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
          How it works
        </h2>
        <p className="mb-16 text-center text-white/40 max-w-xl mx-auto">
          Three steps from disruption to new booking — all over a 2-minute phone call.
        </p>
        <div className="grid gap-12 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-8 left-full w-full h-px bg-white/10 -translate-y-1/2 z-0" />
              )}
              <span className="mb-4 block text-6xl font-black text-white/8 leading-none">
                {step.number}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
