import { EmailForm } from "@/components/email-form";

export function WaitlistCta() {
  return (
    <section id="waitlist" className="bg-black px-6 py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Be first to fly smarter
        </h2>
        <p className="text-white/50 mb-10 text-lg">
          Join the waitlist and get early access when we launch.
        </p>
        <div className="flex justify-center">
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
