"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const SplashScreen = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onFinish, 1200); 
    }, 3800); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  const text = "Ajinkya Dhumal".split("");

  // Generate floating particles with stable positions
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.15 + 0.05,
    })), []
  );

  // Generate floating lines
  const lines = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      width: Math.random() * 120 + 40,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.06 + 0.02,
      angle: Math.random() * 60 - 30,
    })), []
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#000000] z-[100] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* === AMBIENT BACKGROUND LAYERS === */}

          {/* Layer 1: Drifting Gradient Orbs */}
          <motion.div
            className="absolute w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[150px]"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)", top: "-20%", left: "-15%" }}
            animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[150px]"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)", bottom: "-25%", right: "-10%" }}
            animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute w-[35vw] h-[35vw] rounded-full mix-blend-screen filter blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)", top: "40%", right: "10%" }}
            animate={{ x: [0, -40, 20, 0], y: [0, 30, -20, 0], scale: [1, 1.1, 0.95, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[130px]"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", bottom: "20%", left: "15%" }}
            animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />

          {/* Layer 2: Floating Particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-white"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
                opacity: 0,
              }}
              animate={{
                opacity: [0, p.opacity, p.opacity, 0],
                y: [0, -80, -160],
                x: [0, (p.id % 2 === 0 ? 20 : -20), (p.id % 3 === 0 ? -10 : 10)],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Layer 3: Drifting Lines */}
          {lines.map((l) => (
            <motion.div
              key={`line-${l.id}`}
              className="absolute bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                width: l.width,
                height: 1,
                left: `${l.x}%`,
                top: `${(l.id / lines.length) * 100}%`,
                opacity: 0,
                transform: `rotate(${l.angle}deg)`,
              }}
              animate={{
                opacity: [0, l.opacity, l.opacity, 0],
                x: [0, 100, 200],
              }}
              transition={{
                duration: l.duration,
                repeat: Infinity,
                delay: l.delay,
                ease: "linear",
              }}
            />
          ))}

          {/* Layer 4: Radial Pulse Ring behind spinner */}
          <motion.div
            className="absolute rounded-full border border-indigo-500/10"
            style={{ width: 200, height: 200 }}
            animate={{ scale: [1, 2.5, 1], opacity: [0.15, 0, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full border border-purple-500/10"
            style={{ width: 150, height: 150 }}
            animate={{ scale: [1, 3, 1], opacity: [0.1, 0, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Layer 5: Subtle grid dot pattern */}
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
              }}
            >
              <motion.div
                className="w-full h-full border-t-2 border-blue-400 rounded-full blur-[2px]"
                animate={{ rotate: -720 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl font-extrabold tracking-tight flex text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              {text.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.5 + index * 0.08,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
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
