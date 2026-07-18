import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { ProblemSolution } from "@/components/problem-solution";
import { WaitlistCta } from "@/components/waitlist-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Nav />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Features />
      <ProblemSolution />
      <WaitlistCta />
      <Footer />
    </main>
  );
}
