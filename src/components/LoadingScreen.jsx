import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [showFlash, setShowFlash] = useState(false);
  const fullText = "Capturing Moments";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setShowFlash(true);

        setTimeout(() => {
          setShowFlash(false);
          onComplete();
        }, 1000);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center px-4 py-8 space-y-4">
      {/* Stickman with DSLR */}
      <div className="w-32 h-32 relative">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          {/* Head */}
          <circle cx="50" cy="15" r="6" stroke="white" strokeWidth="2" />

          {/* Body */}
          <line x1="50" y1="21" x2="50" y2="50" stroke="white" strokeWidth="2" />

          {/* Arms */}
          <path d="M50 28 Q40 32 35 38" stroke="white" strokeWidth="2" fill="none" />
          <path d="M50 28 Q60 32 65 38" stroke="white" strokeWidth="2" fill="none" />

          {/* Legs */}
          <path d="M50 50 Q45 65 40 80" stroke="white" strokeWidth="2" fill="none" />
          <path d="M50 50 Q55 65 60 80" stroke="white" strokeWidth="2" fill="none" />

          {/* Camera */}
          <g transform="translate(35, 22)">
            <rect x="0" y="0" width="30" height="18" rx="2" fill="#1e293b" stroke="#60A5FA" strokeWidth="1.5" />
            {/* Lens */}
            <circle cx="23" cy="9" r="4.5" fill="#60A5FA" stroke="white" strokeWidth="1" />
            {/* Flash unit */}
            <rect x="6" y="-6" width="8" height="5" rx="1" fill="#60A5FA" />
            {/* Button */}
            <circle cx="3" cy="4" r="1.5" fill="white" />
          </g>
        </svg>

        {/* Flash */}
        {showFlash && (
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white opacity-80 animate-ping pointer-events-none" />
        )}
      </div>

      {/* Typing Text */}
      <div className="text-2xl md:text-3xl font-mono font-semibold text-center tracking-widest">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>
    </div>
  );
};
