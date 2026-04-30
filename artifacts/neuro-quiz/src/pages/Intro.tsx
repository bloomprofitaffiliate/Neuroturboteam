import { useState } from "react";
import { BrainMascot } from "@/components/BrainMascot";

interface IntroProps {
  onStart: () => void;
  onLockedTips: () => void;
}

const cheekLines = [
  { intro: "Okay FINE, you little cheat 👀 Here's one sneaky tip on the house:", tip: "Drink water before your morning coffee — your brain is 73% water and dehydration tanks your focus before you even hit your inbox." },
  { intro: "Sneaking past the gate, are we? 👀 Alright, here's your reward:", tip: "A 10-minute walk after eating sharpens your brain for hours. Glucose spike without the crash. Science said so, not me." },
  { intro: "Oh you're THAT person 👀 Fine. One tip. Then go do the quiz:", tip: "Cold water on your face or wrists before a big task fires up your prefrontal cortex — that's your focus HQ. It actually works." },
  { intro: "Caught you cheating! 👀 But since you're here, here's a freebie:", tip: "Humming for 60 seconds vibrates your vagus nerve and drops stress hormones almost instantly. Weird but devastatingly effective." },
  { intro: "You absolute cheeky thing 👀 Go on then, take your tip:", tip: "Write down your 3 tasks for the day before you check your phone. Your brain will laser in on them instead of reacting all day." },
  { intro: "Bypassing the quiz like a pro 👀 Your reward:", tip: "Chewing gum during a boring task increases alertness by up to 20%. Your brain thinks something important is about to happen. Works every time." },
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
                <BrainMascot type="ferrari" size={90} />
              </div>
            </div>
            <p className="text-[#FF69B4] font-black text-sm uppercase tracking-widest mt-3 mb-1">
              👀 Sneaky peek unlocked!
            </p>
            <p className="text-sm font-black mb-2" style={{ color: "#FF6600" }}>{cheekLine.intro}</p>
            <p className="text-white font-black text-base leading-snug bg-[hsl(228_40%_8%)] rounded-xl p-3 border border-[#FF6600]/30">
              {cheekLine.tip}
            </p>
            <button
              onClick={() => setShowCheeky(false)}
              className="mt-3 text-xs font-black transition-colors hover:opacity-80"
              style={{ color: "#FF6600" }}
            >
              Okay fine, I'll do the quiz 🙄
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
