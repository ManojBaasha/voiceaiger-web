export function ProblemSolution() {
  return (
    <section className="bg-blue-950/40 border-y border-blue-500/20 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-6">
          The problem
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-5xl leading-tight">
          &ldquo;Your flight just got cancelled.&rdquo;
        </h2>
        <p className="mt-6 text-xl text-white/60 max-w-2xl mx-auto">
          The airline puts you on hold for 45 minutes. The app crashes. You miss
          the last connection.
        </p>
        <div className="mt-12 h-px bg-white/10 max-w-sm mx-auto" />
        <p className="mt-12 text-sm font-semibold uppercase tracking-widest text-blue-400 mb-6">
          The fix
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-5xl leading-tight">
          VoiceAIger calls you back in 30 seconds with 3 rebooking options.
        </h2>
        <p className="mt-6 text-lg text-white/50">
          No app. No hold music. Just a quick phone call, handled by AI.
        </p>
      </div>
    </section>
  );
}
