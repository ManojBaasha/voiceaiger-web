"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EmailFormProps {
  placeholder?: string;
  buttonLabel?: string;
  className?: string;
}

export function EmailForm({
  placeholder = "Enter your email",
  buttonLabel = "Join Waitlist",
  className,
}: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("You're on the list! We'll be in touch.");
        setEmail("");
      } else {
        toast.error(data.error ?? "Something went wrong");
      }
    } catch {
      toast.error("Network error — please try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 flex-wrap justify-center ${className ?? ""}`}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className="w-72 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/30"
      />
      <Button type="submit" disabled={loading} className="bg-blue-500 hover:bg-blue-600 text-white">
        {loading ? "Joining…" : buttonLabel}
      </Button>
    </form>
  );
}
