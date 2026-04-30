import { useState, useMemo } from "react";
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
  {
    statement: "Listening to Mozart makes babies smarter.",
    correct: "myth",
    explanation: "The famous 'Mozart Effect' study only showed a short-term boost in one specific spatial task in college students — and it faded fast. No lasting baby genius effect!",
  },
  {
    statement: "Your brain can physically change and rewire itself at any age.",
    correct: "fact",
    explanation: "This is called neuroplasticity — and it's one of the most exciting things about your brain. New habits, skills, and experiences literally reshape your neural wiring.",
  },
  {
    statement: "Reading in dim light permanently damages your eyesight.",
    correct: "myth",
    explanation: "It might give you eye strain and a headache, but no permanent damage. Your eyes (and brain) bounce right back once the light improves!",
  },
  {
    statement: "Stress physically shrinks parts of your brain over time.",
    correct: "fact",
    explanation: "Chronic stress floods your brain with cortisol, which can shrink the hippocampus — your memory centre. Another reason to take stress seriously!",
  },
  {
    statement: "Your brain is fully formed by the time you're a teenager.",
    correct: "myth",
    explanation: "Not even close! The decision-making, impulse-control part of your brain (prefrontal cortex) isn't fully wired until your mid-20s.",
  },
  {
    statement: "Exercise is one of the best things you can do for your brain.",
    correct: "fact",
    explanation: "Physical movement boosts BDNF — basically 'fertiliser' for brain cells. It improves memory, focus, and mood better than almost anything else.",
  },
  {
    statement: "We have a dominant hand because one side of our brain is stronger.",
    correct: "myth",
    explanation: "Handedness is far more complex than one 'dominant' hemisphere. It involves a whole network of brain regions and even genetics.",
  },
  {
    statement: "Your gut has its own nervous system and communicates directly with your brain.",
    correct: "fact",
    explanation: "The enteric nervous system in your gut has around 100 million neurons. The gut-brain axis is real — your gut literally talks to your brain all day long!",
  },
  {
    statement: "Humans have the biggest brains of any animal.",
    correct: "myth",
    explanation: "Elephants and sperm whales have much bigger brains by weight! What matters is the brain-to-body ratio and the complexity of the cortex — where humans win.",
  },
  {
    statement: "A positive mindset can physically change how your brain processes pain.",
    correct: "fact",
    explanation: "Optimism and positive expectation activate real pain-reducing pathways in the brain. This is the placebo effect in action — and it's completely legitimate neuroscience.",
  },
  {
    statement: "You lose most of your brain cells by the time you reach 40.",
    correct: "myth",
    explanation: "You actually keep the vast majority of your neurons your whole life. The connections between them strengthen or weaken — but the cells themselves mostly stick around.",
  },
  {
    statement: "Dehydration — even mild — noticeably reduces your brain performance.",
    correct: "fact",
    explanation: "Being just 1–2% dehydrated is enough to impair focus, memory, and mood. Your brain is about 75% water — so drink up!",
  },
  {
    statement: "You can 'catch up' on lost sleep over the weekend and fully restore your brain.",
    correct: "myth",
    explanation: "Weekend sleep binges help a little, but they can't fully reverse the cognitive damage from a week of poor sleep. Consistency beats catch-up every time.",
  },
  {
    statement: "Your brain is more active during deep sleep than when you're watching TV.",
    correct: "fact",
    explanation: "During deep sleep your brain is furiously consolidating memories, clearing waste, and repairing itself. Passive TV-watching? Much lower brain activity.",
  },
  {
    statement: "Intelligence is fixed — you're either born smart or you're not.",
    correct: "myth",
    explanation: "Intelligence is highly malleable. Deliberate practice, learning, sleep, nutrition, and environment can all meaningfully raise your cognitive performance.",
  },
  {
    statement: "Meditation physically thickens parts of your brain's cortex.",
    correct: "fact",
    explanation: "Long-term meditators show measurably thicker prefrontal cortex regions — the areas linked to attention, awareness, and emotional regulation. Your brain literally grows.",
  },
  {
    statement: "Humans are the only species that can recognise themselves in a mirror.",
    correct: "myth",
    explanation: "Great apes, dolphins, elephants, and even some magpies can pass the mirror self-recognition test. You've got company!",
  },
  {
    statement: "Your brain generates enough electrical power to light a small LED bulb.",
    correct: "fact",
    explanation: "The brain produces about 12–25 watts of electricity — enough to power a low-energy LED. You're literally running on electricity!",
  },
  {
    statement: "Alcohol kills brain cells permanently every time you drink.",
    correct: "myth",
    explanation: "Moderate drinking doesn't directly kill neurons — it damages the connections (synapses) between them. Heavy long-term drinking is another story, but the odd glass isn't a mass brain-cell massacre.",
  },
  {
    statement: "Your brain processes visual information upside down and flips it for you.",
    correct: "fact",
    explanation: "Light hits your retina inverted — your brain automatically flips the image so you see the world right-side up. It's doing this processing trick every single second.",
  },
  {
    statement: "People who speak two languages develop Alzheimer's later than monolinguals.",
    correct: "fact",
    explanation: "Research consistently shows bilingualism can delay Alzheimer's onset by 4–5 years. Managing two languages keeps the brain's executive control systems in constant training.",
  },
  {
    statement: "Your memory works like a video recorder — storing events exactly as they happened.",
    correct: "myth",
    explanation: "Memory is reconstructive, not reproductive. Every time you recall something, you're partially rewriting it. Eyewitness testimony is notoriously unreliable for exactly this reason.",
  },
  {
    statement: "Laughing activates the same reward circuits in your brain as eating chocolate.",
    correct: "fact",
    explanation: "A good laugh triggers dopamine release in the nucleus accumbens — the same pleasure centre activated by food, music, and yes, chocolate.",
  },
  {
    statement: "Your brain has a dedicated area just for recognising faces.",
    correct: "fact",
    explanation: "The fusiform face area (FFA) is specialised for face recognition and activates more strongly for faces than any other object. Some people have damage to it and literally can't recognise faces — called prosopagnosia.",
  },
  {
    statement: "Humans have more brain cells than any other species.",
    correct: "myth",
    explanation: "An elephant has three times more neurons than a human. What we have is an unusually high density of neurons in the cerebral cortex — that's where our edge comes from.",
  },
  {
    statement: "Cold showers can genuinely improve mood and alertness through brain chemistry.",
    correct: "fact",
    explanation: "Cold water immersion triggers a noradrenaline spike in the brain — sometimes up to 300% — which sharpens focus and lifts mood. Uncomfortable but genuinely effective.",
  },
  {
    statement: "Your brain gets tired the same way your muscles do during exercise.",
    correct: "myth",
    explanation: "Mental fatigue isn't from neurons running out of fuel — it's largely driven by the buildup of glutamate in synapses, which signals the brain to slow down and preserve accuracy.",
  },
  {
    statement: "Music training in childhood produces lasting structural changes in the brain.",
    correct: "fact",
    explanation: "Learning an instrument rewires the brain — musicians show larger corpus callosums, stronger motor cortex, and better auditory processing that persists into adulthood.",
  },
  {
    statement: "Chewing gum improves focus and memory during tasks.",
    correct: "fact",
    explanation: "Several studies show chewing increases blood flow to the brain and raises alertness. It's not massive — but it's a real, measurable effect.",
  },
  {
    statement: "The brain feels pain just like the rest of your body.",
    correct: "myth",
    explanation: "The brain has no pain receptors whatsoever. Brain surgery can be done while you're fully awake — patients feel no pain from the brain tissue itself, only from the scalp.",
  },
  {
    statement: "Your subconscious brain makes decisions before your conscious mind is aware of them.",
    correct: "fact",
    explanation: "The famous Libet experiment showed brain activity preparing a movement up to 500ms before people consciously decided to move. Your brain is often one step ahead of 'you'.",
  },
  {
    statement: "Humans are naturally wired to be night owls or morning larks — it's genetic.",
    correct: "fact",
    explanation: "Chronotype (your natural sleep-wake preference) is strongly influenced by genetics. Being a night owl isn't laziness — it's biology. About 40 genes are involved.",
  },
  {
    statement: "You can boost IQ permanently by doing daily crossword puzzles.",
    correct: "myth",
    explanation: "Crosswords make you better at crosswords. The skills rarely transfer to other types of intelligence. True brain training requires varied, challenging, novel learning.",
  },
  {
    statement: "Your brain shrinks slightly in volume when you're sleep deprived.",
    correct: "fact",
    explanation: "Even short-term sleep deprivation causes measurable reduction in grey matter volume, particularly in areas handling attention and cognition. Sleep really is non-negotiable.",
  },
  {
    statement: "Humans are hardwired to crave stories — it's a brain preference, not just culture.",
    correct: "fact",
    explanation: "Narrative activates far more brain regions than plain facts — motor, sensory, emotional, and language areas all light up. Stories are literally how the brain prefers to process and store information.",
  },
  {
    statement: "Playing video games shrinks your attention span.",
    correct: "myth",
    explanation: "Action video games can actually improve selective attention, reaction time, and visual processing. The 'video games rot your brain' idea isn't supported by the science.",
  },
];

const scoreResults = [
  { min: 8, title: "Brain Legend!", emoji: "🏆", desc: "You crushed every myth. Your brain-knowledge is officially next level.", mascot: "turbo" as const },
  { min: 6, title: "Myth Slayer!", emoji: "⚡", desc: "Sharp and switched on — only a couple of sneaky myths fooled you.", mascot: "sharp" as const },
  { min: 4, title: "Getting There!", emoji: "🧠", desc: "Half myth-buster, half myth-victim. The good news? Now you know!", mascot: "zen" as const },
  { min: 0, title: "Myth Victim!", emoji: "😅", desc: "The myths had you fooled — but hey, that's literally why these are myths!", mascot: "foggy" as const },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function BrainMythBuster({ userName, onDone }: BrainMythBusterProps) {
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<Answer | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [animating, setAnimating] = useState(false);

  const QUESTIONS_PER_GAME = 8;
  const shuffledQuestions = useMemo(() => shuffle(mythQuestions).slice(0, QUESTIONS_PER_GAME), []);

  const question = shuffledQuestions[index];
  const isCorrect = chosen !== null && chosen === question.correct;
  const totalQ = shuffledQuestions.length;

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
          <div
            className={`flex justify-center cursor-pointer brain-hover-${finalResult.mascot}`}
            title="Hover me!"
          >
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
              🔄 Redo the Quiz
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
