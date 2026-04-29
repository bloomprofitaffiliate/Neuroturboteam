import { BrainMascot } from "@/components/BrainMascot";

interface IntroProps {
  onStart: () => void;
}

export function Intro({ onStart }: IntroProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 slide-in">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <BrainMascot type="turbo" size={140} />
        </div>

        <div className="space-y-2">
          <div className="inline-block bg-[#FF69B4]/20 text-[#FF69B4] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2">
            Free Brain Quiz
          </div>
          <h1 className="text-4xl font-black text-white leading-tight">
            What's Your
            <span className="block text-[#FF69B4]">Neural Performance</span>
            Score?
          </h1>
          <p className="text-[hsl(228_20%_70%)] text-lg leading-relaxed">
            15 quick, fun questions reveal exactly how your brain is running — and what to do about it.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { emoji: "⚡", label: "15 Questions" },
            { emoji: "🧠", label: "Brain Score" },
            { emoji: "🎯", label: "Custom Tips" },
          ].map((item) => (
            <div key={item.label} className="bg-[hsl(228_40%_12%)] rounded-xl p-3 border border-[hsl(228_30%_20%)]">
              <div className="text-2xl">{item.emoji}</div>
              <div className="text-xs text-[hsl(228_20%_65%)] font-semibold mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        <button
          data-testid="button-start-quiz"
          onClick={onStart}
          className="glow-button w-full bg-[#FF69B4] hover:bg-[#ff4da6] text-white font-black text-xl py-5 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Start My Brain Scan →
        </button>

        <p className="text-[hsl(228_20%_50%)] text-xs">
          Takes about 2 minutes • 100% free • No credit card
        </p>
      </div>
    </div>
  );
}
