import { useState } from "react";
import { questions } from "@/data/questions";
import { BrainMascot } from "@/components/BrainMascot";

interface QuizProps {
  onComplete: (answers: number[]) => void;
}

export function Quiz({ onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);

  const question = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  function handleSelect(value: string, score: number) {
    if (animating) return;
    setSelected(value);

    setTimeout(() => {
      const newAnswers = [...answers, score];
      setAnimating(true);
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setAnswers(newAnswers);
          setCurrentIndex(currentIndex + 1);
          setSelected(null);
          setAnimating(false);
        } else {
          onComplete(newAnswers);
        }
      }, 300);
    }, 400);
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-semibold">
            <span className="text-[hsl(228_20%_65%)]">Question {currentIndex + 1} of {questions.length}</span>
            <span className="text-[#B9F6CA]">{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-[hsl(228_30%_18%)] rounded-full h-3 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #B9F6CA, #69f0ae)",
              }}
              data-testid="progress-bar"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <BrainMascot type={question.mascot} size={100} />
        </div>

        <div
          className={`transition-all duration-300 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
          key={currentIndex}
        >
          <div className="bg-[hsl(228_40%_12%)] rounded-2xl p-6 border border-[hsl(228_30%_20%)] mb-4">
            <h2 className="text-2xl font-black text-white leading-snug" data-testid="question-text">
              {question.text}
            </h2>
          </div>

          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.value}
                data-testid={`option-${option.value}`}
                onClick={() => handleSelect(option.value, option.score)}
                className={`option-card w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 font-semibold text-base
                  ${selected === option.value
                    ? "selected bg-[#FF69B4]/15 border-[#FF69B4] text-white"
                    : "bg-[hsl(228_40%_12%)] border-[hsl(228_30%_20%)] text-[hsl(0_0%_85%)] hover:border-[#FF69B4]/60 hover:bg-[hsl(228_40%_16%)]"
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
