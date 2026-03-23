"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#000000] z-[100] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Ambient Orbs */}
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-900/40 rounded-full mix-blend-screen filter blur-[150px] opacity-50 animate-pulse-slow"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/30 rounded-full mix-blend-screen filter blur-[150px] opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

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
