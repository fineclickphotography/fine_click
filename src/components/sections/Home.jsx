import React, { useState, useEffect } from "react";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export const Home = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setAnimationKey((prev) => prev + 1);
    };

    // Replace this with your actual home page link ID or selector
    const homeLink = document.getElementById("home-link");
    homeLink?.addEventListener("click", handleClick);

    return () => {
      homeLink?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section
      key={animationKey} // changing this key remounts and restarts animations
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black px-6 md:px-12 text-white overflow-hidden"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-500/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: 6,
              height: 6,
              opacity: 0.4,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          />
        ))}
      </div>

      {/* Soft glowing background circles */}
      <motion.div
        aria-hidden="true"
        className="absolute top-24 left-1/4 w-36 h-36 rounded-full bg-yellow-500 opacity-20 blur-2xl -z-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-24 right-1/4 w-44 h-44 rounded-full bg-red-600 opacity-15 blur-3xl -z-10"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <motion.div
        className="z-10 max-w-4xl w-full text-center space-y-10 md:space-y-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Camera Icon with subtle pulse */}
        <motion.div
          className="flex justify-center"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <PhotoCameraRoundedIcon
            fontSize="large"
            sx={{
              fontSize: 80,
              color: "transparent",
              background: "linear-gradient(135deg, #FFD700, #B22222)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 6px rgba(255, 165, 0, 0.6))",
            }}
          />
        </motion.div>

        {/* Greeting */}
        <motion.p
          className="text-yellow-400 font-semibold text-lg sm:text-xl tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Hello Boss, Ready to capture greatness?
        </motion.p>

        {/* Main Heading with subtle glowing text shadow */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-yellow-400 via-red-500 to-gray-300 bg-clip-text text-transparent select-none"
          animate={{
            textShadow: [
              "0 0 8px rgba(255, 215, 0, 0.3)",
              "0 0 18px rgba(255, 215, 0, 0.6)",
              "0 0 8px rgba(255, 215, 0, 0.3)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          Fine Click Photography
        </motion.h1>

        {/* Quote */}
        <motion.blockquote
          className="italic text-gray-400 text-base sm:text-lg max-w-xl mx-auto mt-2 relative py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent w-3/4 mx-auto" />
          "Every face tells a story. Every click reveals a legend."
          <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent w-3/4 mx-auto" />
        </motion.blockquote>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow"
          initial={{ letterSpacing: 1 }}
          animate={{ letterSpacing: 0.5 }}
          transition={{ duration: 2, ease: "backOut" }}
        >
          Cinematic elegance, bold detail. Weddings, portraits, nightlife — we
          capture moments with class and soul. Timeless frames. Limitless swagger.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              href="#projects"
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(to right, #FFD700, #B22222)",
                color: "#000",
                fontWeight: 600,
                px: 5,
                py: 1.5,
                borderRadius: 9999,
                textTransform: "none",
                boxShadow: "0 0 20px rgba(255,215,0,0.3)",
                "&:hover": {
                  background: "linear-gradient(to right, #FFEB3B, #A52A2A)",
                  boxShadow: "0 0 30px rgba(255,215,0,0.5)",
                },
                transition: "all 0.3s ease",
              }}
              startIcon={<PhotoCameraRoundedIcon />}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              href="#contact"
              variant="outlined"
              size="large"
              sx={{
                color: "#ccc",
                borderColor: "#555",
                fontWeight: 500,
                px: 5,
                py: 1.5,
                borderRadius: 9999,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#000",
                  borderColor: "#fff",
                  boxShadow: "0 0 20px rgba(255,255,255,0.2)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
