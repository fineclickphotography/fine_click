import { useEffect, useState } from "react";
import { Camera } from "@mui/icons-material";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Capturing Moments/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center px-4 py-8">
      {/* Camera Icon */}
      <Camera style={{ fontSize: 50, marginBottom: "1rem", color: "#60A5FA" }} />

      {/* Typing Text */}
      <div className="mb-4 text-2xl md:text-3xl font-mono font-semibold text-center tracking-widest">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-xs h-[3px] bg-gray-800 rounded overflow-hidden relative">
        <div className="w-[50%] h-full bg-blue-400 shadow-[0_0_15px_#60A5FA] animate-loading-bar"></div>
      </div>
    </div>
  );
};
