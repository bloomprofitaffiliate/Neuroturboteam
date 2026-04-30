import { useState } from "react";
import { BrainMascot } from "@/components/BrainMascot";
import type { MascotType } from "@/components/BrainMascot";

interface CustomTipsProps {
  brainType: "turbo" | "zen" | "spirals" | "foggy";
  userName: string;
  onBack: () => void;
  onRetake: () => void;
}

type TipPool = Record<string, string[]>;

const tipPools: TipPool = {
  turbo: [
    "Blueberries improve working memory within hours of eating them. Your brain is literally upgraded by breakfast. 🫐",
    "Your brain uses 20% of your body's energy despite being 2% of your weight. It's the most expensive organ you own — feed it like it. ⚡",
    "Multitasking drops your IQ by up to 10 points temporarily. That's worse than being mildly drunk. Put the phone face down. 📵",
    "Cold showers increase norepinephrine (your focus chemical) by up to 300%. Uncomfortable? Yes. Effective? Embarrassingly so. 🚿",
    "Sleep is when your brain literally washes itself. Your glymphatic system flushes toxins overnight. Poor sleep = dirty brain. 🧠🫧",
    "Caffeine blocks adenosine receptors — it doesn't create energy, it just delays the fatigue bill. When it wears off, all that adenosine floods back at once. ☕",
    "Omega-3s make up 8% of your brain by weight. Most high performers are chronically deficient and have no idea. 🐟",
    "Social connection is one of the strongest scientifically proven protectors against dementia. Lunch with a mate is literally brain medicine. 🫂",
    "Music at 60–80 BPM (think lo-fi or classical) has been shown in studies to enhance concentration and spatial reasoning. Your playlist is a performance tool. 🎵",
    "Stress hormone cortisol physically shrinks your hippocampus over time — measurable on an MRI. Protecting your brain means managing your stress, not just pushing through it. 📉",
    "Your prefrontal cortex (decision HQ) starts declining slowly from your late 20s. The people who keep it sharp into their 60s aren't lucky — they're deliberate. 🏎️",
    "Exercise grows new brain cells in the hippocampus. Even a 20-minute walk counts. The dog walk is making you smarter. 🐕",
    "Dehydration of just 2% causes measurable drops in focus and short-term memory. You're probably slightly dehydrated right now. Drink water. 💧",
    "The flow state is neurologically real — five brain chemicals spike simultaneously. It feels amazing because your brain is running at its highest gear. 🔥",
    "Reading fiction for just 6 minutes reduces stress by 68% — more effectively than a walk or music. Novels are an underrated performance hack. 📖",
  ],
  zen: [
    "People who meditate for 8 weeks grow measurably more grey matter in their prefrontal cortex. Calm is literally building a better brain. 🧘",
    "Your gut produces 90% of your body's serotonin. What you eat directly affects your clarity and mood — your gut and brain are the same system. 🦠",
    "Magnesium deficiency affects over 50% of adults and directly causes anxiety, poor sleep, and reduced focus. Most people don't know they're low. 💊",
    "The afternoon dip at 2–3pm is biological — your body temperature drops and melatonin briefly spikes. It's not weakness, it's circadian rhythm fighting you. ⏰",
    "Breathing in for 4 counts, hold 4, out for 6 activates your parasympathetic nervous system in under 60 seconds. Instant calm, backed by neuroscience. 💨",
    "Spending 20 minutes in nature reduces cortisol by 21%. Your brain evolved outdoors — it still needs a field trip occasionally. 🌿",
    "Decision fatigue is real: research shows judges give harsher rulings later in the day. Schedule your hardest thinking before noon. ⚖️",
    "Regular aerobic exercise increases BDNF — literally called 'brain fertiliser' — which helps neurons grow and resists cognitive decline. 🏃",
    "Bright morning light resets your circadian clock and boosts alertness for hours. Your phone screen is not a substitute for actual sunlight. ☀️",
    "Your brain has two main modes: focused and default (daydreaming). Switching between them cleanly is a trainable skill — most people are stuck in one. 🔄",
    "Gratitude journaling for 5 minutes daily increases long-term wellbeing more measurably than receiving a cash bonus. Weird but rigorously studied. 📝",
    "Reading fiction for 6 minutes reduces stress by 68%. Turns out novels are a clinical-grade intervention. Your book club is a health plan. 📚",
    "Zinc is critical for neurotransmitter function. Low zinc is directly linked to low mood, anxiety, and poor memory. Many people don't think to check it. 🔬",
    "Your peak cognitive window is about 90–120 minutes after waking. Protect that block. Don't let email eat it. 🕗",
    "Prolonged chronic stress physically thickens your amygdala (fear centre) and thins your prefrontal cortex. Zen isn't optional — it's structural maintenance. 🧱",
  ],
  spirals: [
    "Brain fog is often inflammation. Sugar, refined carbs, and ultra-processed food trigger measurable brain inflammation. It's not 'in your head' — it IS your head. 🔥",
    "Vitamin B12 deficiency causes genuine cognitive impairment — poor memory, mental fatigue, brain fog. It's extremely common in people over 40. Get it checked. 💉",
    "Caffeine has a half-life of 5–6 hours. Your 3pm coffee is still 50% active at 9pm. That's why the sleep feels 'fine' but isn't repairing you properly. ☕",
    "Phone notifications trigger cortisol every single time. With 80+ a day, your stress system is basically never off. That's the fog. 📱",
    "Iron deficiency is one of the most common causes of poor concentration — especially in women — and most people are borderline low without knowing it. 🩸",
    "Alcohol disrupts REM sleep even at 1–2 drinks. REM is when your brain consolidates memory. That's why things feel fuzzy after 'just a couple.' 🍷",
    "Chronic stress erodes the myelin sheath around your neurons — the insulation that makes signals fast. Slow signals = foggy thinking. It's physical, not psychological. 🧬",
    "Your brain's hippocampus CAN grow new neurons in response to the right inputs, at any age. The fog can lift. That's not a sales pitch — it's neuroscience. 🌱",
    "Standing up and moving for 2 minutes every hour increases blood flow to the brain by 15%. Your brain needs oxygen delivery, not just more caffeine. 🦵",
    "Dehydration of just 2% causes measurable drops in short-term memory. Most people walk around at this level all day. Drink water before you think you need it. 💧",
    "The hippocampus (memory hub) physically shrinks under chronic stress. This is why you're blanking on names and losing your thread mid-sentence. It's reversible. 📉",
    "Intermittent fasting — even just delaying breakfast 2 hours — triggers autophagy, your brain's self-cleaning process. Your brain actually performs better with a break. ⏳",
    "Decision fatigue is real: by 3pm your brain is making worse choices than it did at 9am. It's not laziness — it's a depleted prefrontal cortex. 🧠",
    "Your gut bacteria produce GABA — the brain's main calming chemical. Gut imbalance directly contributes to anxiety, scattered thinking, and the spirals. 🦠",
    "Omega-3 deficiency is directly linked to brain fog, depression, and poor memory. Two servings of fatty fish a week matters more than most supplements people buy. 🐟",
  ],
  foggy: [
    "Brain fog is a medical symptom, not a personality flaw. It means your brain isn't getting what it needs — not that you're getting dumber. Big difference. 🧠",
    "40% of dementia risk is now considered preventable through lifestyle changes — according to The Lancet. That's not hopeful spin. That's peer-reviewed research. 📊",
    "Chronic sleep deprivation causes amyloid plaques to build up in the brain — the same plaques linked to Alzheimer's. Sleep isn't a luxury. It's maintenance. 😴",
    "Your brain at rest uses 60% of your body's glucose. Unstable blood sugar = an unstable brain. The fog often follows the crash. 📉",
    "Ultra-processed food is directly linked to cognitive decline in multiple long-term studies. Your brain eats what you eat. Literally. 🍔",
    "Omega-3 deficiency is one of the most common and under-diagnosed contributors to persistent brain fog and low mood. Two portions of oily fish a week is a real start. 🐟",
    "Your gut bacteria produce neurotransmitters your brain depends on. Gut imbalance — from stress, antibiotics, or poor diet — directly creates brain fog. 🦠",
    "Loneliness has the same impact on lifespan as smoking 15 cigarettes a day. Connection is genuinely protective brain medicine, not just a nice-to-have. 🫂",
    "Light exercise — even a 10-minute walk — increases cerebral blood flow for up to 90 minutes. That's a free, immediate upgrade available right now. 🚶",
    "One in three people over 65 develop dementia. The lifestyle factors that influence it show up in your 40s. Now is genuinely the right time to act. ⏰",
    "The blood-brain barrier becomes more permeable with age and poor diet — meaning more harmful substances get in. What you eat is literally reaching your brain. 🔓",
    "B12 deficiency causes real cognitive impairment and is extremely common — especially if you're vegetarian, over 50, or stressed. Get your levels checked. 💊",
    "People who say 'I've always been like this' about their brain fog are almost always wrong. Cognitive reversal is well-documented in the research. Brains are not set in stone. 🪨➡️🌱",
    "Cortisol from chronic stress physically damages your hippocampus over time. The fog isn't weakness — it's chemistry. And chemistry can change. 🧪",
    "There are people in their 70s with the brain sharpness of someone 30 years younger. The difference isn't genetics. It's what they did in their 40s and 50s. 🏆",
  ],
};

const TIPS_PER_SESSION = 5;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const mascotMap: Record<string, MascotType> = {
  turbo: "ferrari",
  zen: "awakening",
  spirals: "spirals",
  foggy: "sos",
};

const colorMap: Record<string, string> = {
  turbo: "#B9F6CA",
  zen: "#FF69B4",
  spirals: "#FFB347",
  foggy: "#FF69B4",
};

const titleMap: Record<string, string> = {
  turbo: "Neuro-Turbo",
  zen: "Neuro-Zen",
  spirals: "Neuro-Spirals",
  foggy: "Neuro-Foggy",
};

export function CustomTips({ brainType, userName, onBack, onRetake }: CustomTipsProps) {
  const [tips] = useState<string[]>(() =>
    shuffle(tipPools[brainType]).slice(0, TIPS_PER_SESSION)
  );

  const color = colorMap[brainType];
  const mascot = mascotMap[brainType];
  const title = titleMap[brainType];

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 slide-in">
      <div className="max-w-md w-full space-y-5">

        <div className="text-center space-y-2">
          <div
            className="inline-block text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest"
            style={{ backgroundColor: `${color}25`, color }}
          >
            🎯 Custom Tips — {title}
          </div>
          <h2 className="text-2xl font-black text-white leading-snug">
            {userName ? `${userName}'s` : "Your"} Brain Insider Tips
          </h2>
          <p className="text-[hsl(228_20%_55%)] text-sm">
            Based on your scan results — tap refresh for 5 new ones
          </p>
        </div>

        <div className="flex justify-center">
          <BrainMascot type={mascot} size={90} />
        </div>

        <div className="space-y-3">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="bg-[hsl(228_40%_12%)] rounded-2xl p-4 border border-[hsl(228_30%_20%)] slide-in"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="flex gap-3 items-start">
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
                  style={{ backgroundColor: "#39FF1425", color: "#39FF14" }}
                >
                  {i + 1}
                </div>
                <p className="text-[hsl(0_0%_85%)] text-sm leading-relaxed">{tip}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://tinyurl.com/2kc2mta4"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full font-black text-base py-4 rounded-xl text-center transition-all duration-200 hover:scale-[1.02]"
          style={{ background: color, color: color === "#B9F6CA" ? "#0B0E14" : "white" }}
        >
          Unlock the Full Brain Upgrade →
        </a>

        <button
          onClick={onRetake}
          className="w-full border-2 border-[hsl(228_30%_25%)] text-[hsl(228_20%_60%)] hover:text-white font-bold text-sm py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          🔄 Redo the Test
        </button>
      </div>
    </div>
  );
}
