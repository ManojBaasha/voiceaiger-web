export function TrustBar() {
  const items = [
    { label: "Sabre GDS", sublabel: "Real-time inventory" },
    { label: "Claude AI", sublabel: "Powered by Anthropic" },
    { label: "VocalBridge", sublabel: "Voice layer" },
    { label: "Cert + Production", sublabel: "Sandbox safe" },
  ];

  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-8 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-white/30">
          Powered by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-semibold text-white/80">{item.label}</p>
              <p className="text-xs text-white/30 mt-1">{item.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
