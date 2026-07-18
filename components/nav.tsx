import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-xl font-bold tracking-tight text-white">
          VoiceAI<span className="text-blue-400">ger</span>
        </span>
        <a href="#waitlist">
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
            Join Waitlist
          </Button>
        </a>
      </div>
    </header>
  );
}
