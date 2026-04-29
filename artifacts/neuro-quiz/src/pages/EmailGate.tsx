import { useState } from "react";
import { BrainMascot } from "@/components/BrainMascot";
import { getResult } from "@/data/questions";

interface EmailGateProps {
  totalScore: number;
  onSubmit: (name: string, email: string) => void;
}

export function EmailGate({ totalScore, onSubmit }: EmailGateProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const result = getResult(totalScore);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your first name");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    onSubmit(name.trim(), email.trim());
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 slide-in">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <BrainMascot type={result.ctaMascot} size={120} />
        </div>

        <div className="space-y-2">
          <div
            className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full"
            style={{ backgroundColor: `${result.color}25`, color: result.color }}
          >
            <span>🧪</span> Neural Scan Complete!
          </div>
          <h2 className="text-3xl font-black text-white">
            Your Brain Score is Ready!
          </h2>
          <p className="text-[hsl(228_20%_65%)] text-base leading-relaxed">
            Enter your details below to reveal your customized{" "}
            <span style={{ color: result.color }} className="font-bold">Neural Performance Score</span>{" "}
            and personalized brain optimization tips.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-bold text-[hsl(0_0%_80%)] mb-2" htmlFor="name">
              First Name
            </label>
            <input
              id="name"
              data-testid="input-name"
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setError(""); }}
              placeholder="Your first name"
              className="w-full bg-[hsl(228_40%_12%)] border-2 border-[hsl(228_30%_22%)] focus:border-[#FF69B4] text-white placeholder-[hsl(228_20%_45%)] rounded-xl px-4 py-4 text-base font-semibold outline-none transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[hsl(0_0%_80%)] mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              data-testid="input-email"
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              placeholder="your@email.com"
              className="w-full bg-[hsl(228_40%_12%)] border-2 border-[hsl(228_30%_22%)] focus:border-[#FF69B4] text-white placeholder-[hsl(228_20%_45%)] rounded-xl px-4 py-4 text-base font-semibold outline-none transition-all duration-200"
            />
          </div>
          {error && (
            <p className="text-[#FF6B6B] text-sm font-semibold" data-testid="text-error">{error}</p>
          )}
          <button
            type="submit"
            data-testid="button-reveal-score"
            className="glow-button w-full bg-[#FF69B4] hover:bg-[#ff4da6] text-white font-black text-xl py-5 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Reveal My Brain Score! 🧠
          </button>
        </form>

        <p className="text-[hsl(228_20%_45%)] text-xs leading-relaxed">
          We respect your privacy. No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
