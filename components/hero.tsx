import { EmailForm } from "@/components/email-form";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 pt-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/20 cursor-default">
          ✈️ Powered by Sabre GDS + Claude AI
        </Badge>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Your AI travel agent,{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            on the phone
          </span>
        </h1>
        <p className="mt-6 text-lg text-white/60 sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Flight cancelled? VoiceAIger calls you back in seconds with rebooking
          options and hotel suggestions — no app, no hold music, just a quick
          phone conversation.
        </p>
        <div className="mt-10 flex justify-center">
          <EmailForm
            placeholder="you@example.com"
            buttonLabel="Get Early Access"
          />
        </div>
        <p className="mt-4 text-sm text-white/30">
          No spam. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
