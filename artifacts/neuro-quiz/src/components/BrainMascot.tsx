interface BrainMascotProps {
  type: "foggy" | "turbo" | "zen" | "training";
  size?: number;
  className?: string;
}

export function BrainMascot({ type, size = 120, className = "" }: BrainMascotProps) {
  if (type === "turbo") {
    return (
      <svg width={size} height={size} viewBox="0 0 120 120" className={`float-animation ${className}`} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="65" rx="42" ry="38" fill="#F9A8C9" />
        <ellipse cx="60" cy="63" rx="38" ry="34" fill="#FFB6CB" />
        <path d="M30 55 Q25 40 35 35 Q45 30 50 40" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M50 40 Q55 28 65 30 Q75 32 72 45" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M72 45 Q80 35 88 42 Q94 50 85 58" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M60 65 Q60 75 60 82" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
        <path d="M48 65 Q48 78 48 85" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
        <path d="M72 65 Q72 78 72 85" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="48" cy="58" r="6" fill="white" />
        <circle cx="72" cy="58" r="6" fill="white" />
        <circle cx="50" cy="58" r="3" fill="#1a1a2e" />
        <circle cx="74" cy="58" r="3" fill="#1a1a2e" />
        <circle cx="51" cy="57" r="1.2" fill="white" />
        <circle cx="75" cy="57" r="1.2" fill="white" />
        <path d="M52 68 Q60 74 68 68" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
        <text x="60" y="22" textAnchor="middle" fontSize="18" fill="#FFD700">⚡</text>
        <text x="30" y="30" textAnchor="middle" fontSize="14" fill="#FFD700">⚡</text>
        <text x="90" y="30" textAnchor="middle" fontSize="14" fill="#FFD700">⚡</text>
      </svg>
    );
  }

  if (type === "zen") {
    return (
      <svg width={size} height={size} viewBox="0 0 120 120" className={`float-animation ${className}`} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="68" rx="42" ry="38" fill="#F9A8C9" />
        <ellipse cx="60" cy="66" rx="38" ry="34" fill="#FFB6CB" />
        <path d="M30 58 Q25 43 35 38 Q45 33 50 43" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M50 43 Q55 31 65 33 Q75 35 72 48" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M72 48 Q80 38 88 45 Q94 53 85 61" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M60 68 Q60 78 60 85" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
        <path d="M48 68 Q48 81 48 88" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
        <path d="M72 68 Q72 81 72 88" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
        <path d="M43 60 Q48 57 53 60" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M67 60 Q72 57 77 60" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M52 70 Q60 76 68 70" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
        <text x="60" y="18" textAnchor="middle" fontSize="20" opacity="0.6">🌸</text>
        <text x="28" y="110" textAnchor="middle" fontSize="14" opacity="0.5">✨</text>
        <text x="92" y="110" textAnchor="middle" fontSize="14" opacity="0.5">✨</text>
      </svg>
    );
  }

  if (type === "training") {
    return (
      <svg width={size} height={size} viewBox="0 0 120 120" className={`float-animation ${className}`} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="62" rx="42" ry="38" fill="#F9A8C9" />
        <ellipse cx="60" cy="60" rx="38" ry="34" fill="#FFB6CB" />
        <path d="M30 52 Q25 37 35 32 Q45 27 50 37" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M50 37 Q55 25 65 27 Q75 29 72 42" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M72 42 Q80 32 88 39 Q94 47 85 55" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M60 62 Q60 72 60 79" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
        <path d="M48 62 Q48 75 48 82" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
        <path d="M72 62 Q72 75 72 82" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="48" cy="55" r="6" fill="white" />
        <circle cx="72" cy="55" r="6" fill="white" />
        <circle cx="50" cy="54" r="3.5" fill="#1a1a2e" />
        <circle cx="74" cy="54" r="3.5" fill="#1a1a2e" />
        <circle cx="51.5" cy="52.5" r="1.2" fill="white" />
        <circle cx="75.5" cy="52.5" r="1.2" fill="white" />
        <path d="M52 66 Q60 72 68 66" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
        <rect x="15" y="62" width="8" height="3" rx="1.5" fill="#888" />
        <rect x="23" y="58" width="4" height="11" rx="2" fill="#555" />
        <rect x="27" y="60" width="14" height="6" rx="3" fill="#777" />
        <rect x="41" y="58" width="4" height="11" rx="2" fill="#555" />
        <rect x="45" y="62" width="8" height="3" rx="1.5" fill="#888" />
        <rect x="75" y="62" width="8" height="3" rx="1.5" fill="#888" />
        <rect x="83" y="58" width="4" height="11" rx="2" fill="#555" />
        <rect x="87" y="60" width="14" height="6" rx="3" fill="#777" />
        <rect x="101" y="58" width="4" height="11" rx="2" fill="#555" />
        <rect x="105" y="62" width="8" height="3" rx="1.5" fill="#888" />
        <rect x="42" y="8" width="36" height="16" rx="4" fill="white" opacity="0.9"/>
        <text x="60" y="20" textAnchor="middle" fontSize="10" fill="#1a1a2e" fontFamily="Nunito" fontWeight="800">TURBO MODE</text>
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={`float-animation ${className}`} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="65" rx="42" ry="38" fill="#F9A8C9" />
      <ellipse cx="60" cy="63" rx="38" ry="34" fill="#FFB6CB" />
      <path d="M30 55 Q25 40 35 35 Q45 30 50 40" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M50 40 Q55 28 65 30 Q75 32 72 45" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M72 45 Q80 35 88 42 Q94 50 85 58" fill="none" stroke="#E879A0" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M60 65 Q60 75 60 82" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
      <path d="M48 65 Q48 78 48 85" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
      <path d="M72 65 Q72 78 72 85" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
      <path d="M43 59 Q48 57 52 60" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M68 59 Q72 57 77 60" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M52 70 Q60 67 68 70" fill="none" stroke="#E879A0" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="40" cy="30" rx="12" ry="8" fill="hsl(228 40% 18% / 0.5)" />
      <ellipse cx="80" cy="30" rx="12" ry="8" fill="hsl(228 40% 18% / 0.5)" />
      <ellipse cx="60" cy="22" rx="12" ry="6" fill="hsl(228 40% 18% / 0.4)" />
    </svg>
  );
}
