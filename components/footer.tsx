export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-white/30">
          © {new Date().getFullYear()} VoiceAIger. All rights reserved.
        </span>
        <div className="flex gap-6 text-sm text-white/30">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          <a href="mailto:hello@voiceaiger.com" className="hover:text-white/60 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
