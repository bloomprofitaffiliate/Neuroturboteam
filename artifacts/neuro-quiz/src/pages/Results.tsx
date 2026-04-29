import { getResult } from "@/data/questions";
import { BrainMascot } from "@/components/BrainMascot";

interface ResultsProps {
  totalScore: number;
  userName: string;
  onRetake: () => void;
}

const allDays = [
  { day: 1, goal: "The Score", subject: "Your Brain Score is in! (Plus a surprise) 🧠🎁" },
  { day: 2, goal: "The Problem", subject: "Why your head feels like a 1998 dial-up modem... 📡" },
  { day: 3, goal: "The Fix", subject: 'How to "overclock" your brain (The Ferrari upgrade) 🏎️' },
  { day: 4, goal: 'The "Spirals"', subject: "Adios, Brain Fog! Say goodbye to the Spirals 🌀👋" },
  { day: 5, goal: "The Science", subject: "Alpha, Beta, Theta... which wave are you riding? 🌊" },
  { day: 6, goal: "The Benefit", subject: 'Like a "Limitless" pill (but actually legal) 💊✨' },
  { day: 7, goal: "The Motivation", subject: 'That "Maybe Tomorrow" voice? Let\'s mute it. 🚀' },
  { day: 8, goal: "The Sleep", subject: 'Sleep like a "Lotus Brain" tonight 🧘‍♂️💤' },
  { day: 9, goal: "The Energy", subject: '3 PM slump? More like 3 PM "Let\'s Go!" ⚡' },
  { day: 10, goal: "The Focus", subject: "How to close the 50 tabs open in your mind 🖥️🚫" },
  { day: 11, goal: "The Truth", subject: "What your phone is doing to your brain waves 📱😱" },
  { day: 12, goal: "The Vision", subject: "Imagine your brain at 100% efficiency... 🌈🚀" },
  { day: 13, goal: "Urgency", subject: "Your customized Neural Report is expiring! ⏳" },
  { day: 14, goal: "Final Pitch", subject: 'Last chance for your "Quiz-Taker" discount 🎯' },
  { day: 15, goal: "The Goodbye", subject: "One last look at your new brain potential? 🧠🔓" },
];

export function Results({ totalScore, userName, onRetake }: ResultsProps) {
  const result = getResult(totalScore);
  const percentage = parseInt(result.scoreRange);

  const circumference = 2 * Math.PI * 52;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 slide-in">
      <div className="max-w-md w-full space-y-6">

        <div className="text-center space-y-2">
          <div
            className="inline-block text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest"
            style={{ backgroundColor: `${result.color}25`, color: result.color }}
          >
            Your Result
          </div>
          <h2 className="text-3xl font-black text-white">
            {userName ? `${userName}, ` : ""}You're a{" "}
            <span style={{ color: result.color }}>{result.title}!</span>
          </h2>
        </div>

        <div className="bg-[hsl(228_40%_12%)] rounded-2xl p-6 border border-[hsl(228_30%_20%)] text-center">
          <p className="text-[hsl(228_20%_60%)] text-sm font-semibold mb-3">Neural Performance Score</p>
          <div className="flex justify-center mb-3">
            <svg width="130" height="130" viewBox="0 0 130 130">
              <circle cx="65" cy="65" r="52" fill="none" stroke="hsl(228 30% 20%)" strokeWidth="10" />
              <circle
                cx="65" cy="65" r="52"
                fill="none"
                stroke={result.color}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform="rotate(-90 65 65)"
                style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
              />
              <text x="65" y="60" textAnchor="middle" fill="white" fontSize="28" fontWeight="900" fontFamily="Nunito">{percentage}</text>
              <text x="65" y="78" textAnchor="middle" fill="hsl(228 20% 60%)" fontSize="11" fontFamily="Nunito" fontWeight="600">/ 100</text>
            </svg>
          </div>
          <h3 className="text-xl font-black" style={{ color: result.color }}>{result.title}</h3>
          <p className="text-[hsl(0_0%_80%)] text-sm font-semibold">{result.subtitle}</p>
        </div>

        <div className="bg-[hsl(228_40%_12%)] rounded-2xl p-5 border border-[hsl(228_30%_20%)]">
          <p className="text-[hsl(0_0%_85%)] text-sm leading-relaxed" data-testid="text-result-description">
            {result.description}
          </p>
        </div>

        <div
          className="rounded-2xl p-5 border text-center space-y-4"
          style={{ borderColor: `${result.color}50`, background: `${result.color}12` }}
        >
          <div className="flex justify-center">
            <BrainMascot type={result.ctaMascot} size={110} />
          </div>
          <p className="text-white font-black text-lg leading-snug">
            {result.ctaHeadline}
          </p>
          <p className="text-[hsl(0_0%_75%)] text-sm leading-relaxed">
            {result.ctaBody}
          </p>
          <a
            href="https://tinyurl.com/2kc2mta4"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-clickbank-cta"
            className="block w-full text-white font-black text-base py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: result.color, color: result.color === "#B9F6CA" ? "#0B0E14" : "white" }}
          >
            Unlock the Rest Here →
          </a>
          <p className="text-[hsl(228_20%_50%)] text-xs">Special Quiz-Taker offer • Limited time</p>
        </div>

        <div className="bg-[hsl(228_40%_12%)] rounded-2xl p-5 border border-[hsl(228_30%_20%)] space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">📬</span>
            <h3 className="text-white font-black text-base">
              Your 15-Day "Neuro-Turbo" Email Series
            </h3>
          </div>
          <p className="text-[hsl(228_20%_55%)] text-xs">Check your inbox — Day 1 is on its way!</p>
          <div className="space-y-2">
            {allDays.map((item) => (
              <div key={item.day} className="flex gap-3 items-start py-2 border-b border-[hsl(228_30%_18%)] last:border-0">
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
                  style={{ backgroundColor: `${result.color}20`, color: result.color }}
                >
                  {item.day}
                </div>
                <div className="min-w-0">
                  <p className="text-[hsl(228_20%_50%)] text-xs font-bold uppercase tracking-wide">{item.goal}</p>
                  <p className="text-[hsl(0_0%_82%)] text-sm font-semibold leading-snug">{item.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          data-testid="button-retake"
          onClick={onRetake}
          className="w-full border-2 border-[hsl(228_30%_25%)] text-[hsl(228_20%_65%)] hover:border-[#FF69B4]/50 hover:text-white font-bold text-base py-4 rounded-2xl transition-all duration-200"
        >
          Retake the Quiz
        </button>
      </div>
    </div>
  );
}
