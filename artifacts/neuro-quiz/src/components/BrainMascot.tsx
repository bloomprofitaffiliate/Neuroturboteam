import foggyBrain from "@assets/brain_foggy.png";
import turboBrain from "@assets/brain_turbo.png";
import zenBrain from "@assets/brain_zen.png";
import trainingBrain from "@assets/brain_training.png";
import sleepyBrain from "@assets/brain_sleepy.png";
import coffeeBrain from "@assets/brain_coffee.png";
import phoneBrain from "@assets/brain_phone.png";
import dreamyBrain from "@assets/brain_dreamy.png";
import sharpBrain from "@assets/brain_sharp.png";
import ferrariBrain from "@assets/brain_ferrari.png";
import spiralsBrain from "@assets/brain_spirals.png";
import awakeningBrain from "@assets/brain_awakening.png";
import sosBrain from "@assets/brain_sos.png";

export type MascotType =
  | "foggy" | "turbo" | "zen" | "training"
  | "sleepy" | "coffee" | "phone" | "dreamy" | "sharp"
  | "ferrari" | "spirals" | "awakening" | "sos";

interface BrainMascotProps {
  type: MascotType;
  size?: number;
  className?: string;
}

const mascotImages: Record<MascotType, string> = {
  foggy: foggyBrain,
  turbo: turboBrain,
  zen: zenBrain,
  training: trainingBrain,
  sleepy: sleepyBrain,
  coffee: coffeeBrain,
  phone: phoneBrain,
  dreamy: dreamyBrain,
  sharp: sharpBrain,
  ferrari: ferrariBrain,
  spirals: spiralsBrain,
  awakening: awakeningBrain,
  sos: sosBrain,
};

export function BrainMascot({ type, size = 120, className = "" }: BrainMascotProps) {
  return (
    <img
      src={mascotImages[type]}
      alt={`${type} brain character`}
      width={size}
      height={size}
      className={`float-animation object-contain drop-shadow-lg ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
