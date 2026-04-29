import foggyBrain from "@assets/brain_foggy.png";
import turboBrain from "@assets/brain_turbo.png";
import zenBrain from "@assets/brain_zen.png";
import trainingBrain from "@assets/brain_training.png";

interface BrainMascotProps {
  type: "foggy" | "turbo" | "zen" | "training";
  size?: number;
  className?: string;
}

const mascotImages: Record<BrainMascotProps["type"], string> = {
  foggy: foggyBrain,
  turbo: turboBrain,
  zen: zenBrain,
  training: trainingBrain,
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
