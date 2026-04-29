import { useEffect, useState } from "react";
import { BrainMascot } from "@/components/BrainMascot";

interface NeuralScanProps {
  onComplete: () => void;
}

export function NeuralScan({ onComplete }: NeuralScanProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initialising Neural Scanner...");

  useEffect(() => {
    const messages = [
      { at: 0, text: "Initialising Neural Scanner..." },
      { at: 20, text: "Reading brainwave patterns..." },
      { at: 45, text: "Analysing cognitive performance..." },
      { at: 70, text: "Calculating your Neural Score..." },
      { at: 90, text: "Almost there..." },
      { at: 99, text: "Scan complete! 🎉" },
    ];

    const duration = 4000;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const newProgress = Math.min(Math.round((current / steps) * 100), 100);
      setProgress(newProgress);

      const msg = [...messages].reverse().find((m) => newProgress >= m.at);
      if (msg) setStatusText(msg.text);

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 slide-in">
      <div className="max-w-md w-full text-center space-y-8">
        <div>
          <div className="inline-block bg-[#B9F6CA]/20 text-[#B9F6CA] text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest mb-4">
            ⚡ Neural Scan In Progress
          </div>
          <h2 className="text-3xl font-black text-white">
            Scanning Your Brain...
          </h2>
          <p className="text-[hsl(228_20%_60%)] mt-2">
            Hold tight while we calculate your score
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <svg width="140" height="140" viewBox="0 0 140 140" className="absolute">
            <circle
              cx="70" cy="70" r="54"
              fill="none"
              stroke="hsl(228 30% 18%)"
              strokeWidth="8"
            />
            <circle
              cx="70" cy="70" r="54"
              fill="none"
              stroke="#B9F6CA"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 70 70)"
              style={{ transition: "stroke-dashoffset 0.03s linear" }}
            />
          </svg>
          <BrainMascot type="training" size={110} className="relative z-10" />
        </div>

        <div className="space-y-3">
          <div className="text-5xl font-black text-white tabular-nums" data-testid="scan-progress">
            {progress}
            <span className="text-2xl text-[hsl(228_20%_55%)]">%</span>
          </div>
          <p className="text-[#B9F6CA] font-bold text-base min-h-[24px]" data-testid="scan-status">
            {statusText}
          </p>
        </div>

        <div className="w-full bg-[hsl(228_30%_18%)] rounded-full h-3 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #B9F6CA, #69f0ae)",
              boxShadow: "0 0 12px #B9F6CA88",
            }}
          />
        </div>
      </div>
    </div>
  );
}
