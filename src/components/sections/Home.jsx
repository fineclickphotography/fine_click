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

    const homeLink = document.getElementById("home-link");
    homeLink?.addEventListener("click", handleClick);
    return () => {
      homeLink?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section
      key={animationKey}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 md:px-10 overflow-hidden"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* Decorative Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-500/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: 6,
              height: 6,
              opacity: 0.3,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 1.1,
            }}
          />
        ))}
      </div>

      {/* Background Glows */}
      <motion.div
        className="absolute top-28 left-1/4 w-40 h-40 rounded-full bg-yellow-400/20 blur-3xl -z-20"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-24 right-1/4 w-44 h-44 rounded-full bg-red-600/15 blur-3xl -z-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      />

      {/* Content Block */}
      <motion.div
        className="z-10 max-w-5xl w-full text-center space-y-10 md:space-y-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Icon */}
        <motion.div
          className="flex justify-center"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 10,
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
              filter: "drop-shadow(0 0 6px rgba(255, 165, 0, 0.5))",
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-yellow-400 text-lg sm:text-xl tracking-wide font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hello Boss, Ready to capture greatness?
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-yellow-400 via-red-500 to-white bg-clip-text text-transparent select-none"
          animate={{
            textShadow: [
              "0 0 10px rgba(255, 215, 0, 0.3)",
              "0 0 20px rgba(255, 215, 0, 0.6)",
              "0 0 10px rgba(255, 215, 0, 0.3)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          Fine Click Photography
        </motion.h1>

        {/* Quote */}
        <motion.blockquote
          className="italic text-gray-400 text-base sm:text-lg relative py-2 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          "Every face tells a story. Every click reveals a legend."
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent" />
        </motion.blockquote>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-2 drop-shadow"
          initial={{ letterSpacing: 1 }}
          animate={{ letterSpacing: 0.5 }}
          transition={{ duration: 2 }}
        >
          Cinematic elegance. Bold storytelling. Whether it's weddings,
          portraits, or nightlife — we capture emotion with style, finesse, and flair.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 pt-4">
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
                boxShadow: "0 0 18px rgba(255,215,0,0.3)",
                "&:hover": {
                  background: "linear-gradient(to right, #FFEB3B, #A52A2A)",
                  boxShadow: "0 0 28px rgba(255,215,0,0.4)",
                },
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
                borderColor: "#666",
                fontWeight: 500,
                px: 5,
                py: 1.5,
                borderRadius: 9999,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#000",
                  borderColor: "#fff",
                  boxShadow: "0 0 18px rgba(255,255,255,0.2)",
                },
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
