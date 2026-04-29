import { useState } from "react";
import { Intro } from "@/pages/Intro";
import { Quiz } from "@/pages/Quiz";
import { NeuralScan } from "@/pages/NeuralScan";
import { EmailGate } from "@/pages/EmailGate";
import { Results } from "@/pages/Results";

type Stage = "intro" | "quiz" | "scan" | "email" | "results";

function App() {
  const [stage, setStage] = useState<Stage>("intro");
  const [totalScore, setTotalScore] = useState(0);
  const [userName, setUserName] = useState("");

  function handleQuizComplete(answers: number[]) {
    const score = answers.reduce((sum, s) => sum + s, 0);
    setTotalScore(score);
    setStage("scan");
  }

  function handleEmailSubmit(name: string, _email: string) {
    setUserName(name);
    setStage("results");
  }

  function handleRetake() {
    setStage("intro");
    setTotalScore(0);
    setUserName("");
  }

  return (
    <div className="min-h-screen">
      {stage === "intro" && <Intro onStart={() => setStage("quiz")} />}
      {stage === "quiz" && <Quiz onComplete={handleQuizComplete} />}
      {stage === "scan" && <NeuralScan onComplete={() => setStage("email")} />}
      {stage === "email" && <EmailGate totalScore={totalScore} onSubmit={handleEmailSubmit} />}
      {stage === "results" && (
        <Results totalScore={totalScore} userName={userName} onRetake={handleRetake} />
      )}
    </div>
  );
}

export default App;
