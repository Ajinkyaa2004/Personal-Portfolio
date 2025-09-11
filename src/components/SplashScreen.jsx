"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false); // trigger fade out
      setTimeout(onFinish, 1000); // wait for fade animation to finish
    }, 4000); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  const text = "Welcome to my Portfolio".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="relative flex items-center justify-center h-screen bg-[#F2F0EA] overflow-hidden px-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* 🔵 Floating Gradient Blob */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-[#3A41C6] to-[#00D4FF] rounded-full filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-gradient-to-r from-[#00D4FF] to-[#6C63FF] rounded-full filter blur-3xl opacity-40 animate-blob"></div>

          {/* Animated Heading */}
          <motion.h1
            className="relative z-10 text-3xl sm:text-4xl md:text-6xl font-bold flex flex-wrap text-center bg-gradient-to-r from-[#3A41C6] via-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent"
          >
            {text.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
