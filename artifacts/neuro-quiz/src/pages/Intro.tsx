import { useState } from "react";
import { BrainMascot } from "@/components/BrainMascot";

interface IntroProps {
  onStart: () => void;
  onLockedTips: () => void;
}

const cheekLines = [
  "Oh, you think tips just fall from the sky?! 😤 Finish the quiz first, then we'll talk.",
  "Nice try, sneaky brain! 🕵️ The tips are locked until you complete your scan.",
  "Mmm, no. Absolutely not. Do the quiz. THEN the tips. That's the deal. 🙅",
  "The tips are in another castle, Mario. 🏰 Start the quiz to unlock them!",
  "*taps forehead* These tips? Not for pre-quiz brains. Do your scan first. 🧠",
  "You haven't even started the quiz yet and you want the tips?! Bold. I respect it. But no. 😂",
];

export function Intro({ onStart, onLockedTips }: IntroProps) {
  const [showCheeky, setShowCheeky] = useState(false);
  const [cheekLine] = useState(() => cheekLines[Math.floor(Math.random() * cheekLines.length)]);

  function handleTipsTap() {
    setShowCheeky(true);
    onLockedTips();
  }

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
            { emoji: "⚡", label: "15 Questions", clickable: false },
            { emoji: "🧠", label: "Brain Score", clickable: false },
            { emoji: "🎯", label: "Custom Tips", clickable: true },
          ].map((item) => (
            <div
              key={item.label}
              onClick={item.clickable ? handleTipsTap : undefined}
              className={`bg-[hsl(228_40%_12%)] rounded-xl p-3 border border-[hsl(228_30%_20%)] ${item.clickable ? "cursor-pointer hover:border-[#FF69B4]/60 hover:bg-[hsl(228_40%_16%)] transition-all duration-200" : ""}`}
            >
              <div className="text-2xl">{item.emoji}</div>
              <div className="text-xs text-[hsl(228_20%_65%)] font-semibold mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {showCheeky && (
          <div className="bg-[hsl(228_40%_12%)] rounded-2xl p-5 border-2 border-[#FF69B4]/40 slide-in">
            <div className="flex justify-center mb-1 relative">
              <div style={{ transform: "rotate(-8deg)" }}>
                <BrainMascot type="turbo" size={80} />
              </div>
              <span
                className="absolute text-3xl select-none pointer-events-none"
                style={{ bottom: -6, right: "calc(50% - 52px)", transform: "rotate(15deg)" }}
              >
                😛
              </span>
            </div>
            <p className="text-[#FF69B4] font-black text-sm uppercase tracking-widest mt-3 mb-1">
              Start your brain up first! 😛
            </p>
            <p className="text-white font-black text-base leading-snug">{cheekLine}</p>
            <button
              onClick={() => setShowCheeky(false)}
              className="mt-3 text-[hsl(228_20%_50%)] text-xs font-bold hover:text-white transition-colors"
            >
              Fine, fine... I'll do the quiz 🙄
            </button>
          </div>
        )}

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
