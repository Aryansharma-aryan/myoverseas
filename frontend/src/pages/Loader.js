import { motion } from "framer-motion";
import React from "react";

// Fixed floating letter positions
const floatingLetters = "V S A U X E R T".split(" ").map((char, i) => ({
  char,
  top: `${Math.random() * 80 + 5}%`,
  left: `${Math.random() * 80 + 5}%`,
}));

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
      role="status"
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #0d1b2a, #1b263b, #415a77, #ff8a00, #d00068)",
          backgroundSize: "500% 500%",
          animation: "bgShift 15s ease-in-out infinite",
        }}
      />

      {/* Floating Letters */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {floatingLetters.map(({ char, top, left }, i) => (
          <motion.span
            key={i}
            className="absolute text-[5rem] md:text-[8rem] font-extrabold text-white/10 select-none"
            style={{
              top,
              left,
              filter: "drop-shadow(0 0 6px rgba(255,255,255,0.07))",
            }}
            initial={{ y: 0, opacity: 0.06 }}
            animate={{ y: -30, opacity: 0.12 }}
            transition={{
              duration: 4 + i,
              delay: i * 0.3,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Loader Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Red Spinner */}
        <motion.div
          className="w-20 h-20 border-[6px] border-white/20 border-t-[#ff4d4d] rounded-full mb-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, ease: "linear" }}
          style={{
            boxShadow: "0 0 20px rgba(255, 77, 77, 0.4)",
          }}
        />

        {/* Brand Text */}
        <h1 className="relative text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-[#ff4d4d] via-[#ff8a00] to-[#007bff] bg-clip-text shimmer-glow tracking-widest drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
          VERTEX STUDY VISA
        </h1>

        {/* Subtitle */}
        <div className="mt-3 text-sm md:text-lg text-white/85 tracking-wider">
          Empowering Dreams. Enabling Futures.
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .shimmer-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 100%
          );
          animation: shimmerText 2s forwards;
        }

        @keyframes shimmerText {
          0% {
            left: -150%;
          }
          100% {
            left: 150%;
          }
        }

        @keyframes bgShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Loader;
