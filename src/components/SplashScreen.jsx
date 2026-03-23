"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const SplashScreen = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onFinish, 800); // reduced from 1200ms
    }, 3000); // reduced from 3800ms
    return () => clearTimeout(timer);
  }, [onFinish]);

  const text = "Ajinkya Dhumal".split("");

  // Reduced from 30 to 12 particles — still looks great, much lighter
  const particles = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.15 + 0.05,
    })), []
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#000000] z-[100] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* === AMBIENT BACKGROUND — CSS-only orbs instead of Framer Motion === */}
          <div
            className="absolute w-[60vw] h-[60vw] rounded-full animate-splash-orb-1"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", top: "-20%", left: "-15%", willChange: "transform" }}
          />
          <div
            className="absolute w-[45vw] h-[45vw] rounded-full animate-splash-orb-2"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", bottom: "-25%", right: "-10%", willChange: "transform" }}
          />

          {/* Particles — reduced count, CSS animation fallback for better perf */}
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-white animate-splash-particle"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
                opacity: p.opacity,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                willChange: "transform, opacity",
              }}
            />
          ))}

          {/* Radial Pulse Ring — CSS animation */}
          <div
            className="absolute rounded-full border border-indigo-500/10 animate-splash-pulse"
            style={{ width: 200, height: 200 }}
          />

          {/* Grid dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* === MAIN CONTENT === */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.div
              className="w-16 h-16 border-t-2 border-r-2 border-l-2 border-indigo-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              style={{
                boxShadow: "0 0 40px 0 rgba(99, 102, 241, 0.5)",
                willChange: "transform",
              }}
            >
              <div
                className="w-full h-full border-t-2 border-blue-400 rounded-full blur-[2px] animate-spin-reverse"
              />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl font-extrabold tracking-tight flex text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              {text.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.4 + index * 0.06,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              className="px-6 py-2 rounded-full border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <p className="text-white/60 text-sm tracking-widest uppercase font-semibold">
                Building Reality
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
