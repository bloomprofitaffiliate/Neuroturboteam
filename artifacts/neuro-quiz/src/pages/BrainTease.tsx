import { useState } from "react";
import { BrainMascot } from "@/components/BrainMascot";

interface BrainTeaseProps {
  userName: string;
  onRetake: () => void;
}

interface Teaser {
  question: string;
  answer: string;
}

const allTeasers: Teaser[] = [
  { question: "What gets sharper the more you use it?", answer: "Your brain! 🧠 (Also a pencil, but your brain wins.)" },
  { question: "I have billions of connections, run 24/7, and get better with use. What am I?", answer: "Your brain! 🧠 The most powerful machine ever built — and it's free." },
  { question: "The more you take, the more you leave behind. What am I?", answer: "Footsteps 👣" },
  { question: "I'm always in front of you but can never be seen. What am I?", answer: "The future ⏳" },
  { question: "The more you share me, the more you have of me. What am I?", answer: "Knowledge 📚" },
  { question: "I can fill a room but take up no space. What am I?", answer: "Light 💡" },
  { question: "What has to be broken before you can use it?", answer: "An egg 🥚" },
  { question: "I speak without a mouth and hear without ears. I have no body but come alive with wind. What am I?", answer: "An echo 🏔️" },
  { question: "I'm light as a feather, but the strongest person can't hold me for more than a few minutes. What am I?", answer: "Breath 💨" },
  { question: "The more you have of me, the less you see. What am I?", answer: "Darkness 🌑" },
  { question: "What has keys but no locks, space but no room, and you can enter but can't go inside?", answer: "A keyboard ⌨️" },
  { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "The letter M 😄" },
  { question: "What has hands but can't clap?", answer: "A clock ⏰" },
  { question: "I have cities but no houses, mountains but no trees, water but no fish. What am I?", answer: "A map 🗺️" },
  { question: "What runs but never walks, has a mouth but never talks?", answer: "A river 🌊" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function BrainTease({ userName, onRetake }: BrainTeaseProps) {
  const [teasers] = useState<Teaser[]>(() => shuffle(allTeasers).slice(0, 5));
  const [revealed, setReveal] = useState<boolean[]>([false, false, false, false, false]);

  function toggle(i: number) {
    setReveal(r => r.map((v, idx) => (idx === i ? !v : v)));
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 slide-in">
      <div className="max-w-md w-full space-y-5">

        <div className="text-center space-y-2">
          <div className="inline-block bg-[#39FF14]/20 text-[#39FF14] text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
            🧠 Brain Tease
          </div>
          <h2 className="text-2xl font-black text-white leading-snug">
            {userName ? `${userName}'s` : "Your"} 5 Brain Teasers
          </h2>
          <p className="text-[hsl(228_20%_55%)] text-sm">
            Tap each one to reveal the answer 👇
          </p>
        </div>

        <div className="flex justify-center">
          <BrainMascot type="sharp" size={80} />
        </div>

        <div className="space-y-3">
          {teasers.map((t, i) => (
            <div
              key={i}
              onClick={() => toggle(i)}
              className="bg-[hsl(228_40%_12%)] rounded-2xl p-4 border cursor-pointer transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] slide-in"
              style={{
                borderColor: revealed[i] ? "#39FF14" : "hsl(228 30% 20%)",
                animationDelay: `${i * 0.07}s`,
              }}
            >
              <div className="flex gap-3 items-start">
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
                  style={{ backgroundColor: "#39FF1425", color: "#39FF14" }}
                >
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-black text-sm leading-relaxed">{t.question}</p>
                  {revealed[i] && (
                    <p className="text-[#39FF14] font-black text-sm mt-2 slide-in">
                      💡 {t.answer}
                    </p>
                  )}
                  {!revealed[i] && (
                    <p className="text-[hsl(228_20%_40%)] text-xs mt-1 font-semibold">
                      Tap to reveal →
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://tinyurl.com/2kc2mta4"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full font-black text-base py-4 rounded-xl text-center transition-all duration-200 hover:scale-[1.02]"
          style={{ background: "#39FF14", color: "#0B0E14" }}
        >
          Unlock the Full Brain Upgrade →
        </a>

        <button
          onClick={onRetake}
          className="w-full border-2 border-[hsl(228_30%_25%)] text-[hsl(228_20%_60%)] hover:text-white font-bold text-sm py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          🔄 Redo the Quiz
        </button>

      </div>
    </div>
  );
}
