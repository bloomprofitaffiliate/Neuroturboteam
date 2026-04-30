import { useState, useMemo } from "react";
import { BrainMascot } from "@/components/BrainMascot";
import type { MascotType } from "@/components/BrainMascot";

interface CustomTipsProps {
  brainType: "turbo" | "zen" | "spirals" | "foggy";
  userName: string;
  onBack: () => void;
}

type TipPool = Record<string, string[]>;

const tipPools: TipPool = {
  turbo: [
    "High performers don't just work harder — they protect their cognitive edge the way an athlete protects their body. The question isn't if your brain needs support. It's whether you're giving it the right kind. 🏎️",
    "Your 40s are when your brain's natural repair speed quietly starts to slow. The people who arrive at 60 still razor-sharp? They didn't wait until 60 to start thinking about it.",
    "Imagine if every Friday afternoon felt like your best Monday morning. That's not a fantasy for an optimised brain — it's just another working day.",
    "Even Turbo brains need premium fuel. The biggest edge high performers report isn't their IQ — it's sustaining deep focus longer than everyone else in the room.",
    "The boardroom doesn't reward effort. It rewards output. And output is only as good as the brain producing it. Protect the machine, and the machine protects your results.",
    "Top surgeons, senior partners, elite executives — they all have one thing in common. They treat their cognitive performance as a non-negotiable asset. Not an afterthought.",
    "Your brain is brilliant right now. The interesting question is: what does it look like in 20 years if you actively invest in it now — versus if you don't?",
    "Flow states don't happen by accident. People who consistently hit that locked-in, time-disappears zone have usually figured out what their brain specifically needs to get there.",
    "Memory isn't just for exams. Remembering names in a networking event, callbacks in a negotiation, details in a presentation — that's a competitive advantage hiding in plain sight.",
    "The supplement industry is full of noise. But the research on specific compounds and neuroplasticity is genuinely remarkable — especially for brains already performing well. This is the difference between good and unbeatable.",
    "A Turbo brain that doesn't get the right nutritional support is like a Ferrari running on regular unleaded. It'll still outperform most cars. But it'll never hit its real top speed.",
    "Sleep debt compounds like financial debt. The people who stay sharp through their 50s and 60s paid off that debt early — and kept paying it forward.",
    "Your peak window — the hours when your brain is most capable of deep work — is probably shorter than you think. The right support extends it. Significantly.",
    "Cognitive longevity is the new career strategy. The smartest professionals in the room aren't just thinking about next quarter. They're thinking about next decade.",
    "There's a reason high-achieving CEOs and professionals increasingly talk about brain optimisation in the same breath as fitness and nutrition. It's not a trend. It's finally taken seriously.",
  ],
  zen: [
    "There's a measurable gap between 'calm and focused' and 'completely locked in.' You're at calm. But locked in is where deals close, ideas land, and reputations are built.",
    "That moment when everything clicks and time disappears? Flow state. People in that zone consistently report 400–500% productivity gains. You're one step from living there regularly.",
    "Your brain is running smoothly — but smooth isn't the same as sharp. A premium car with average tyres still won't corner the way it should. The right support changes the whole driving experience.",
    "Memory isn't declining dramatically — but it doesn't have to decline at all. Most people accept cognitive drift as 'just getting older.' The people who don't are the ones still outperforming at 65.",
    "Zen is wonderful for stress management. The boardroom, though, rewards sharpness. The good news? With the right brain support, you don't have to choose between the two.",
    "The difference between you and someone performing at the next level up isn't necessarily talent. It's often just a 15–20% lift in sustained focus. That gap is smaller than it feels.",
    "That 3pm energy dip you've learned to manage? It doesn't have to be managed — it can be eliminated. What you put in your body between 7am and noon matters more than most people realise.",
    "Imagine walking into your most important meeting of the year knowing your brain will be completely with you. No wandering. No fading. No 'what was I about to say?' Just clarity, start to finish.",
    "You're the person in the room who rarely loses the plot — but occasionally the thread slips. The difference between occasionally and never is a lot smaller than you'd think.",
    "Dementia doesn't announce itself. It builds — quietly, gradually, over years. The smartest prevention isn't treatment later. It's active support now, while everything's still working well.",
    "People in high-pressure roles who stay consistently sharp into their 60s aren't just lucky. They made deliberate choices about their brain health 20 years earlier.",
    "Your prefrontal cortex — the part doing most of your best thinking — is the first to feel the effects of stress, poor sleep, and nutritional gaps. It's also the most responsive to the right support.",
    "Being 'fine' is a dangerous place to stay. Fine doesn't get promoted. Fine doesn't close the deal. Fine is what you settle for when you don't know what better actually feels like.",
    "Focus is a skill AND a physiological state. You've got the skill. Optimising the physiology is the part most people haven't figured out yet.",
    "The people around you who seem to have unlimited mental energy aren't superhuman. They've just figured out what their brain needs — and they give it that consistently.",
  ],
  spirals: [
    "Reading the same paragraph four times and still not knowing what it said — that's your hippocampus asking for help. Not dramatically. Urgently.",
    "Every time you blank mid-sentence in a meeting, your brain is telling you something. Not that you're not smart enough. That it needs something specific it's not getting.",
    "Brain fog at work isn't a personality trait. It's a physiological state. And physiological states — unlike personality — can be changed. Sometimes surprisingly fast.",
    "The Spirals are invisible to you, but they're not invisible in the room. Colleagues notice the pauses. The 'sorry, what was that?' The trailing off. You deserve to be the sharpest person at the table.",
    "Imagine heading into your next presentation knowing your brain will stay with you the whole way. No going blank. No stumbling on words you know perfectly well. Just clean, confident clarity.",
    "The afternoon fog, the decision fatigue by 2pm, the sense that your brain finished working hours before you did — this isn't normal. It's common. But common and normal are very different things.",
    "People who work in high-cognitive-demand roles and don't support their brain properly are essentially doing overtime on 60% battery. The job is the same. The cost is much higher.",
    "Memory lapses in your 30s, 40s, or 50s aren't 'senior moments.' They're early signals. The good news? Your brain is extraordinarily responsive when you give it what it's asking for.",
    "You probably know people who seem completely switched on at the end of a long day while you're already on fumes. That gap is real — and it's not about willpower.",
    "The correlation between chronic brain fog and long-term cognitive risk is something researchers are taking much more seriously than they were even five years ago. This isn't a small-print concern.",
    "Your brain isn't broken. It's running on whatever fuel you've been giving it. Change the fuel — even slightly, with the right things — and the change in output can be startling.",
    "Dementia isn't just a concern for 80-year-olds. The groundwork for later cognitive decline is laid decades earlier. What you do now is genuinely, significantly relevant.",
    "One of the most under-discussed workplace performance gaps is cognitive — not skill, not experience, not attitude. Just raw brain function. And it's fixable.",
    "The Spirals respond remarkably well to targeted nutritional support. Not in a vague 'feel a bit better' way. In a 'why did no one tell me about this sooner' way.",
    "If your brain was a business, it would be performing at 60% capacity with a maintenance backlog and no investment budget. That's fixable — and the ROI is immediately obvious.",
  ],
  foggy: [
    "Brain fog isn't just annoying. Long-term, untreated cognitive strain has been linked to early markers of decline that neurologists are now tracking from people's 40s onward. This is worth taking seriously.",
    "Your brain isn't broken. It's exhausted. The difference matters — because exhausted can be fixed. And sometimes the fix is genuinely simpler than years of struggling have made it feel.",
    "Forgetting names of people you see weekly. Losing your train of thought mid-sentence. Blanking on words you've used a thousand times. These aren't personality quirks. They're messages.",
    "The statistics on age-related cognitive decline are sobering. The hopeful part? Your brain remains remarkably responsive to the right inputs — at almost any age, in almost any condition.",
    "Your grandmother's forgetfulness didn't happen overnight. Brain health works like a savings account — what you invest now determines what's available when you need it most. Starting late is still starting.",
    "There are people in their 70s with the cognitive sharpness of someone 30 years younger. And people in their 50s whose brains are running decades ahead of their age. The difference is not luck.",
    "One in three people over 65 will develop dementia. The lifestyle and nutritional choices made in your 40s and 50s are now understood to be among the most significant influencing factors.",
    "The brain fog you're experiencing is a symptom, not a sentence. Symptoms have causes. Causes have solutions. And this particular symptom responds well to the right targeted approach.",
    "Imagine a Monday morning where you sit down and your brain just... works. Clear, present, focused — for hours. Not fighting through fog to reach basic function. Just operating.",
    "High-functioning people with brain fog are often the most frustrated — because they remember what sharp felt like. That memory is actually a useful thing. It means the hardware is intact. It just needs the right support.",
    "The office isn't the only place this shows up. Conversations with your kids where you trail off. Appointments you forgot. Books you can't track. The fog doesn't clock out when you do.",
    "Specific compounds have shown meaningful results in clinical settings for reducing brain fog — particularly in adults dealing with stress, poor sleep, or the compounding effects of ageing. The evidence is real.",
    "You've probably tried more coffee, more sleep, more willpower. And they help — a little, temporarily. But they're not solving what's actually creating the fog.",
    "Some of the most impressive recovery stories in cognitive health aren't from young people bouncing back quickly. They're from people in their 50s and 60s who made targeted changes and genuinely couldn't believe the difference.",
    "You deserve to feel as smart as you actually are. Because you are smart. The fog is just getting in the way. And fog — given the right conditions — lifts.",
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

export function CustomTips({ brainType, userName, onBack }: CustomTipsProps) {
  const [tips, setTips] = useState<string[]>(() =>
    shuffle(tipPools[brainType]).slice(0, TIPS_PER_SESSION)
  );
  const [refreshCount, setRefreshCount] = useState(0);

  const color = colorMap[brainType];
  const mascot = mascotMap[brainType];
  const title = titleMap[brainType];

  function handleRefresh() {
    setTips(shuffle(tipPools[brainType]).slice(0, TIPS_PER_SESSION));
    setRefreshCount(c => c + 1);
  }

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
              key={`${refreshCount}-${i}`}
              className="bg-[hsl(228_40%_12%)] rounded-2xl p-4 border border-[hsl(228_30%_20%)] slide-in"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="flex gap-3 items-start">
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
                  style={{ backgroundColor: `${color}25`, color }}
                >
                  {i + 1}
                </div>
                <p className="text-[hsl(0_0%_85%)] text-sm leading-relaxed">{tip}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleRefresh}
          className="w-full border-2 font-black text-sm py-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{ borderColor: color, color }}
        >
          🔄 Give Me 5 New Tips
        </button>

        <a
          href="https://tinyurl.com/2kc2mta4"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-white font-black text-base py-4 rounded-xl text-center transition-all duration-200 hover:scale-[1.02]"
          style={{ background: color, color: color === "#B9F6CA" ? "#0B0E14" : "white" }}
        >
          Unlock the Full Brain Upgrade →
        </a>

        <button
          onClick={onBack}
          className="w-full border-2 border-[hsl(228_30%_25%)] text-[hsl(228_20%_60%)] hover:text-white font-bold text-sm py-3 rounded-xl transition-all duration-200"
        >
          ← Back to My Results
        </button>
      </div>
    </div>
  );
}
