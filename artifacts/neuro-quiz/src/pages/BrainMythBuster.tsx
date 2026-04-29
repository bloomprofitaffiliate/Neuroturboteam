import { useState } from "react";
import { BrainMascot } from "@/components/BrainMascot";

interface BrainMythBusterProps {
  userName: string;
  onDone: () => void;
}

type Answer = "myth" | "fact";

interface MythQuestion {
  statement: string;
  correct: Answer;
  explanation: string;
}

const mythQuestions: MythQuestion[] = [
  {
    statement: "We only use 10% of our brain.",
    correct: "myth",
    explanation: "You use virtually ALL of your brain — just different parts for different things. The 10% idea? Hollywood made that up!",
  },
  {
    statement: "Your brain burns about 20% of your body's energy — even when you're just sitting there doing nothing.",
    correct: "fact",
    explanation: "It's the most expensive organ you own! Your brain never fully clocks off, even when you think you're relaxing.",
  },
  {
    statement: "Multitasking makes you get more done.",
    correct: "myth",
    explanation: "Your brain actually switches rapidly between tasks and is worse at both. Real multitasking is a myth — your brain is just speed-switching!",
  },
  {
    statement: "Sleep helps your brain literally wash away toxic waste.",
    correct: "fact",
    explanation: "Your brain's 'cleaning crew' (the glymphatic system) is most active at night. Skipping sleep means skipping brain maintenance!",
  },
  {
    statement: "Eating sugar makes kids go hyper.",
    correct: "myth",
    explanation: "Multiple studies found zero link between sugar and hyperactivity. The real culprit? The excitement of the birthday party itself!",
  },
  {
    statement: "You're either a left-brain logical thinker OR a right-brain creative — never both.",
    correct: "myth",
    explanation: "Brain scans show both sides constantly work together. The 'left brain vs right brain personality' idea has been thoroughly debunked!",
  },
  {
    statement: "Your brain keeps developing and maturing until your mid-20s.",
    correct: "fact",
    explanation: "The prefrontal cortex (decision-making HQ) isn't fully wired until around age 25. That explains a LOT about your teenage years.",
  },
  {
    statement: "You can grow brand new brain cells as an adult.",
    correct: "fact",
    explanation: "Neurogenesis is real! Exercise, quality sleep, and learning new things all help your brain grow fresh neurons at any age.",
  },
];

const scoreResults = [
  { min: 8, title: "Brain Legend!", emoji: "🏆", desc: "You crushed every myth. Your brain-knowledge is officially next level.", mascot: "turbo" as const },
  { min: 6, title: "Myth Slayer!", emoji: "⚡", desc: "Sharp and switched on — only a couple of sneaky myths fooled you.", mascot: "sharp" as const },
  { min: 4, title: "Getting There!", emoji: "🧠", desc: "Half myth-buster, half myth-victim. The good news? Now you know!", mascot: "zen" as const },
  { min: 0, title: "Myth Victim!", emoji: "😅", desc: "The myths had you fooled — but hey, that's literally why these are myths!", mascot: "foggy" as const },
];

export function BrainMythBuster({ userName, onDone }: BrainMythBusterProps) {
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<Answer | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [animating, setAnimating] = useState(false);

  const question = mythQuestions[index];
  const isCorrect = chosen !== null && chosen === question.correct;
  const totalQ = mythQuestions.length;

  function handleAnswer(ans: Answer) {
    if (chosen || animating) return;
    setChosen(ans);
    if (ans === question.correct) setScore(s => s + 1);
  }

  function handleNext() {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      if (index < totalQ - 1) {
        setIndex(i => i + 1);
        setChosen(null);
        setAnimating(false);
      } else {
        setDone(true);
        setAnimating(false);
      }
    }, 300);
  }

  const finalResult = scoreResults.find(r => score >= r.min)!;

  if (done) {
    return (
      <div className="min-h-screen flex flex-col items-center px-4 py-10 slide-in">
        <div className="max-w-md w-full space-y-6 text-center">
          <div className="text-6xl">{finalResult.emoji}</div>
          <div>
            <h2 className="text-3xl font-black text-white">{finalResult.title}</h2>
            {userName && <p className="text-[#FF69B4] font-bold mt-1">{userName}'s brain scored {score}/{totalQ}</p>}
          </div>
          <div className="flex justify-center">
            <BrainMascot type={finalResult.mascot} size={130} />
          </div>
          <div className="bg-[hsl(228_40%_12%)] rounded-2xl p-5 border border-[hsl(228_30%_20%)]">
            <p className="text-[hsl(0_0%_85%)] text-base leading-relaxed">{finalResult.desc}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
              const wasCorrect = i < totalQ;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-[hsl(228_40%_12%)] rounded-xl px-3 py-2 border border-[hsl(228_30%_20%)] text-xs font-bold"
                >
                  <span className="text-base">{i < score ? "✅" : "❌"}</span>
                  <span className="text-[hsl(0_0%_70%)] truncate">Q{i + 1}</span>
                </div>
              );
            })}
          </div>

          <div className="space-y-3">
            <a
              href="https://tinyurl.com/2kc2mta4"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#FF69B4] hover:bg-[#ff4da6] text-white font-black text-base py-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
            >
              Unlock Your Full Brain Upgrade →
            </a>
            <button
              onClick={onDone}
              className="w-full border-2 border-[hsl(228_30%_25%)] text-[hsl(228_20%_60%)] hover:text-white font-bold text-sm py-3 rounded-xl transition-all duration-200"
            >
              Back to My Results
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 slide-in">
      <div className="max-w-md w-full space-y-5">

        <div className="text-center space-y-1">
          <div className="inline-block bg-[#FF69B4]/20 text-[#FF69B4] text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
            🎮 Brain Myth Buster
          </div>
          <div className="flex justify-between text-sm font-semibold mt-2">
            <span className="text-[hsl(228_20%_60%)]">Question {index + 1} of {totalQ}</span>
            <span className="text-[#39FF14]">Score: {score}</span>
          </div>
          <div className="w-full bg-[hsl(228_30%_18%)] rounded-full h-2 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${((index) / totalQ) * 100}%`, background: "linear-gradient(90deg, #FF69B4, #FF6600)" }}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <BrainMascot
            type={chosen === null ? "training" : isCorrect ? "turbo" : "foggy"}
            size={100}
          />
        </div>

        <div className={`transition-all duration-300 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          <div className="bg-[hsl(228_40%_12%)] rounded-2xl p-6 border border-[hsl(228_30%_20%)] mb-4 text-center">
            <p className="text-[hsl(228_20%_55%)] text-xs font-black uppercase tracking-widest mb-3">Myth or Fact?</p>
            <h2 className="text-xl font-black text-white leading-snug">
              "{question.statement}"
            </h2>
          </div>

          {chosen === null ? (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleAnswer("myth")}
                className="py-5 rounded-xl border-2 border-[#FF6B6B]/40 bg-[#FF6B6B]/10 hover:bg-[#FF6B6B]/20 hover:border-[#FF6B6B] text-[#FF6B6B] font-black text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                🚫 MYTH!
              </button>
              <button
                onClick={() => handleAnswer("fact")}
                className="py-5 rounded-xl border-2 border-[#39FF14]/40 bg-[#39FF14]/10 hover:bg-[#39FF14]/20 hover:border-[#39FF14] text-[#39FF14] font-black text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                ✅ FACT!
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div
                className={`rounded-2xl p-5 border-2 text-center space-y-2 ${
                  isCorrect
                    ? "bg-[#39FF14]/10 border-[#39FF14]/60"
                    : "bg-[#FF6B6B]/10 border-[#FF6B6B]/60"
                }`}
              >
                <p className={`text-2xl font-black ${isCorrect ? "text-[#39FF14]" : "text-[#FF6B6B]"}`}>
                  {isCorrect ? "🎉 Correct!" : "😬 Nope!"}
                </p>
                <p className="text-white font-bold text-sm">
                  That was a <span className={`font-black uppercase ${question.correct === "myth" ? "text-[#FF6B6B]" : "text-[#39FF14]"}`}>{question.correct}</span>
                </p>
                <p className="text-[hsl(0_0%_78%)] text-sm leading-relaxed">{question.explanation}</p>
              </div>
              <button
                onClick={handleNext}
                className="w-full bg-[#FF69B4] hover:bg-[#ff4da6] text-white font-black text-base py-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
              >
                {index < totalQ - 1 ? "Next Question →" : "See My Score! 🏆"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
