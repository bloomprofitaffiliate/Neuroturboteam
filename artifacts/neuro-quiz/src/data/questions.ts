import type { MascotType } from "@/components/BrainMascot";

export interface Question {
  id: number;
  text: string;
  options: { label: string; value: string; score: number }[];
  mascot: MascotType;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Does your brain feel like a supercomputer or a potato?",
    mascot: "sharp",
    options: [
      { label: "Total supercomputer — firing on all cylinders!", value: "a", score: 4 },
      { label: "Decent laptop... maybe needs a reboot", value: "b", score: 3 },
      { label: "More like a potato with ambition", value: "c", score: 2 },
      { label: "Potato. Just potato.", value: "d", score: 1 },
    ],
  },
  {
    id: 2,
    text: "How many browser tabs are open in your head right now?",
    mascot: "turbo",
    options: [
      { label: "Just 1-2 — I'm laser focused", value: "a", score: 4 },
      { label: "About 5 — manageable chaos", value: "b", score: 3 },
      { label: "15+ and some are frozen", value: "c", score: 2 },
      { label: "So many Chrome ran out of memory", value: "d", score: 1 },
    ],
  },
  {
    id: 3,
    text: "Walk into a room and forget why? Does this happen daily?",
    mascot: "foggy",
    options: [
      { label: "Never — I always know my mission", value: "a", score: 4 },
      { label: "Occasionally, but I recover fast", value: "b", score: 3 },
      { label: "Yes, it's my signature move", value: "c", score: 2 },
      { label: "I forgot what this question was about", value: "d", score: 1 },
    ],
  },
  {
    id: 4,
    text: '3 PM energy: "Let\'s Go!" or "Where is the sofa?"',
    mascot: "sleepy",
    options: [
      { label: "Let's Go! 3PM is prime time for me", value: "a", score: 4 },
      { label: "Still going but need a coffee assist", value: "b", score: 3 },
      { label: "I'm physically present but mentally napping", value: "c", score: 2 },
      { label: "The sofa is calling and I must go", value: "d", score: 1 },
    ],
  },
  {
    id: 5,
    text: "Stress level: Stay cool or turn into a spicy meatball?",
    mascot: "zen",
    options: [
      { label: "Cool as a cucumber — stress bounces off me", value: "a", score: 4 },
      { label: "I manage it, with deep breaths", value: "b", score: 3 },
      { label: "Getting spicy... simmering nicely", value: "c", score: 2 },
      { label: "Full spicy meatball mode, 24/7", value: "d", score: 1 },
    ],
  },
  {
    id: 6,
    text: "Sleep: Instant lights out or replaying 2012 conversations?",
    mascot: "sleepy",
    options: [
      { label: "Out in 5 minutes, sleep like a rock", value: "a", score: 4 },
      { label: "Takes a bit but I get there", value: "b", score: 3 },
      { label: "Some replays but mostly okay", value: "c", score: 2 },
      { label: "Full cinema of regrets every night", value: "d", score: 1 },
    ],
  },
  {
    id: 7,
    text: 'Big dreams but brain says "Maybe tomorrow"?',
    mascot: "dreamy",
    options: [
      { label: "I act on my ideas immediately", value: "a", score: 4 },
      { label: "I procrastinate a bit but get going", value: "b", score: 3 },
      { label: "Tomorrow has been very busy lately", value: "c", score: 2 },
      { label: "Tomorrow is where all my best ideas live", value: "d", score: 1 },
    ],
  },
  {
    id: 8,
    text: "How much coffee is holding your personality together?",
    mascot: "coffee",
    options: [
      { label: "Zero — I run on pure vitality", value: "a", score: 4 },
      { label: "1 cup, just for the ritual", value: "b", score: 3 },
      { label: "2-3 cups — it's structural support", value: "c", score: 2 },
      { label: "Coffee IS my personality at this point", value: "d", score: 1 },
    ],
  },
  {
    id: 9,
    text: 'Is "Brain Fog" your middle name?',
    mascot: "foggy",
    options: [
      { label: "Absolutely not — sharp as a tack", value: "a", score: 4 },
      { label: "Occasionally foggy, mostly clear", value: "b", score: 3 },
      { label: "It's more like my first name", value: "c", score: 2 },
      { label: "Brain Fog is my entire personality", value: "d", score: 1 },
    ],
  },
  {
    id: 10,
    text: "If you could \"overclock\" your brain like a PC, would you?",
    mascot: "turbo",
    options: [
      { label: "Already running at full overclock!", value: "a", score: 4 },
      { label: "Yes — could use a 20% boost", value: "b", score: 3 },
      { label: "Desperately... please send instructions", value: "c", score: 2 },
      { label: "Just overclock it and put me out of my misery", value: "d", score: 1 },
    ],
  },
  {
    id: 11,
    text: '"Jump out of bed" or "5 more snoozes"?',
    mascot: "sleepy",
    options: [
      { label: "Jump out — mornings are my power hour", value: "a", score: 4 },
      { label: "One snooze, then I'm up", value: "b", score: 3 },
      { label: "3-4 snoozes... it's a process", value: "c", score: 2 },
      { label: "5 snoozes minimum, non-negotiable", value: "d", score: 1 },
    ],
  },
  {
    id: 12,
    text: "Be real: How much does your phone own your attention?",
    mascot: "phone",
    options: [
      { label: "I own it — I use it intentionally", value: "a", score: 4 },
      { label: "We have a healthy relationship", value: "b", score: 3 },
      { label: "It has majority shares in my attention", value: "c", score: 2 },
      { label: "My phone is essentially my brain at this point", value: "d", score: 1 },
    ],
  },
  {
    id: 13,
    text: "End of day: Energized or a human-shaped puddle?",
    mascot: "zen",
    options: [
      { label: "Still energized — evenings are my second wind", value: "a", score: 4 },
      { label: "Tired but functional", value: "b", score: 3 },
      { label: "Definitely puddle-adjacent", value: "c", score: 2 },
      { label: "I am the puddle. The puddle is me.", value: "d", score: 1 },
    ],
  },
  {
    id: 14,
    text: 'Snap decisions or "I\'ll decide in 3 years"?',
    mascot: "sharp",
    options: [
      { label: "Snap — confident and fast", value: "a", score: 4 },
      { label: "I take reasonable time", value: "b", score: 3 },
      { label: "I'll overthink it for a while", value: "c", score: 2 },
      { label: "Still deciding what to have for breakfast last Tuesday", value: "d", score: 1 },
    ],
  },
  {
    id: 15,
    text: "Ready for your customized Neural Performance Score?",
    mascot: "training",
    options: [
      { label: "Yes! I need to know my brain score!", value: "a", score: 4 },
      { label: "Sure, let's see what we've got", value: "b", score: 3 },
      { label: "A bit nervous but yes...", value: "c", score: 2 },
      { label: "I'm scared but I need this", value: "d", score: 1 },
    ],
  },
];

export interface ScoreResult {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  mascot: "turbo" | "zen" | "training" | "foggy";
  ctaMascot: "ferrari" | "awakening" | "spirals" | "sos";
  ctaHeadline: string;
  ctaBody: string;
  scoreRange: string;
  tipKey: "turbo" | "zen" | "spirals" | "foggy";
}

export function getResult(totalScore: number): ScoreResult {
  // Normalize against actual range (min 15, max 60) so results spread properly
  const MIN_SCORE = 15;
  const MAX_SCORE = 60;
  const percentage = Math.round(((totalScore - MIN_SCORE) / (MAX_SCORE - MIN_SCORE)) * 100);

  if (percentage >= 75) {
    return {
      title: "Neuro-Turbo",
      subtitle: "Your brain is in peak performance mode!",
      description: "Your Neural Performance Score is outstanding. Your brain is firing on all cylinders — sharp focus, great energy, and mental clarity to spare. Keep doing what you're doing, and let's take it to the next level.",
      color: "#B9F6CA",
      mascot: "turbo",
      ctaMascot: "ferrari",
      ctaHeadline: "You're already in the fast lane — now hit the nitro! 🏎️",
      ctaBody: "Your brain is performing above average, but there's a whole turbo boost waiting for you. This is what separates good from genuinely unstoppable.",
      scoreRange: `${percentage}`,
      tipKey: "turbo",
    };
  } else if (percentage >= 50) {
    return {
      title: "Neuro-Zen",
      subtitle: "Solid brain, ready to level up!",
      description: "Your Neural Performance Score shows a well-balanced brain with real room to grow. You're managing stress reasonably, but focus and energy could be optimized. A few targeted upgrades could unlock your next performance tier.",
      color: "#FF69B4",
      mascot: "zen",
      ctaMascot: "awakening",
      ctaHeadline: "You're calm — but there's a genius level above this you haven't unlocked yet 💡",
      ctaBody: "You've got the zen, now it's time for the turbo. One level up and your brain becomes a completely different machine.",
      scoreRange: `${percentage}`,
      tipKey: "zen",
    };
  } else if (percentage >= 25) {
    return {
      title: "Neuro-Spirals",
      subtitle: "Your brain needs some TLC!",
      description: "Your Neural Performance Score reveals some Spirals — those mental patterns that keep you foggy, scattered, and running below capacity. The good news? Spirals are completely fixable with the right approach.",
      color: "#FFB347",
      mascot: "foggy",
      ctaMascot: "spirals",
      ctaHeadline: "Your Ferrari engine is stuck in second gear! 🌀",
      ctaBody: "The Spirals are real — but they're not permanent. The fix is simpler than you think, and it starts right here.",
      scoreRange: `${percentage}`,
      tipKey: "spirals",
    };
  } else {
    return {
      title: "Neuro-Foggy",
      subtitle: "Time for a serious brain upgrade!",
      description: "Your Neural Performance Score shows your brain is running in heavy fog. But here's the exciting part — you're not broken, you're just untrained. With the right tools, you can completely transform your mental performance.",
      color: "#FF69B4",
      mascot: "foggy",
      ctaMascot: "sos",
      ctaHeadline: "Your brain is sending an SOS — and we heard it! ☁️",
      ctaBody: "The fog is real, but here's the great news: it lifts fast with the right tools. You're one click away from a completely different brain.",
      scoreRange: `${percentage}`,
      tipKey: "foggy",
    };
  }
}
