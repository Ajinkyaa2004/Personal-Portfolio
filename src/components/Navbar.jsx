import React, { useState, useEffect, useRef, useCallback } from "react";
import { FolderOpen, Trophy, Code2, GraduationCap, Mail, Menu, X, Download, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "education", label: "Education", icon: GraduationCap, color: "from-amber-400 to-orange-400" },
  { id: "projects", label: "Projects", icon: FolderOpen, color: "from-blue-400 to-cyan-400" },
  { id: "achievements", label: "Achievements", icon: Trophy, color: "from-purple-400 to-indigo-400" },
  { id: "skills", label: "Skills", icon: Code2, color: "from-rose-400 to-pink-400" },
  { id: "contact", label: "Contact", icon: Mail, color: "from-sky-400 to-violet-400" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const lastScrollY = useRef(0);
  const hasEntered = useRef(false);
  const ticking = useRef(false);

  // Delayed entrance after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      hasEntered.current = true;
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Throttled scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      if (hasEntered.current) {
        if (currentY > lastScrollY.current && currentY > 80) {
          setVisible(false);
          setIsOpen(false);
        } else {
          setVisible(true);
        }
      }
      lastScrollY.current = currentY;

      // Track active section
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveLink(links[i].id);
          break;
        }
      }

      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: visible ? 0 : -120, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-5 px-3 sm:px-4"
      style={{ willChange: "transform, opacity" }}
    >
      <div
        className={`w-full max-w-5xl rounded-2xl flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-500 border shadow-2xl relative overflow-hidden ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-black/30 backdrop-blur-lg border-white/5"
        }`}
      >
        {/* Animated gradient border glow on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 hover:from-blue-500/10 hover:via-indigo-500/10 hover:to-purple-500/10 transition-all duration-700 pointer-events-none" />

        {/* Subtle noise texture — inline, no external fetch */}
        <div className="absolute inset-0 noise-texture opacity-[0.02] pointer-events-none mix-blend-overlay rounded-2xl" />

        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 relative z-10"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <a href="#hero" className="flex items-center gap-1.5 group">
            <div className="relative">
              <Sparkles className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 absolute -top-1 -right-1 transition-opacity duration-300" />
              <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-white cursor-pointer">
                Ajinkya<span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">.</span>
              </h1>
            </div>
          </a>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-0.5 bg-white/[0.04] rounded-full px-1.5 py-1 border border-white/[0.06] relative z-10">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="group relative flex items-center text-[13px] font-medium px-3.5 py-2 text-white/60 hover:text-white transition-all duration-300 rounded-full"
            >
              {activeLink === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/10"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <link.icon className={`w-3.5 h-3.5 transition-all duration-300 ${
                  activeLink === link.id
                    ? "text-blue-400"
                    : "text-white/40 group-hover:text-blue-400"
                }`} />
                <span className={activeLink === link.id ? "text-white" : ""}>{link.label}</span>
              </span>
              {activeLink !== link.id && (
                <div className="absolute inset-0 bg-white/[0.06] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden md:flex relative z-10">
          <motion.a
            href="https://drive.google.com/file/d/1U78P3fxtrH02S1PxM8HPSEYcpXzDNk2j/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
            <Download size={14} strokeWidth={2.5} className="relative z-10" />
            <span className="relative z-10">Resume</span>
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden relative z-10">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[70px] left-3 right-3 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 shadow-[0_16px_48px_rgba(0,0,0,0.6)] md:hidden overflow-hidden"
          >
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="flex flex-col gap-2 relative z-10">
              {links.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.3 }}
                  className={`flex items-center gap-3 text-[15px] font-medium rounded-xl px-4 py-3.5 transition-all duration-300 group relative overflow-hidden ${
                    activeLink === link.id
                      ? "text-white bg-white/[0.08] border border-white/10"
                      : "text-white/70 hover:text-white bg-white/[0.03] border border-transparent hover:border-white/[0.06]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${link.color} ${
                    activeLink === link.id ? "opacity-100 shadow-lg" : "opacity-60 group-hover:opacity-100"
                  } transition-all duration-300`}>
                    <link.icon size={16} strokeWidth={2.5} className="text-white" />
                  </div>
                  <span className="relative z-10">{link.label}</span>

                  {activeLink === link.id && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                  )}
                </motion.a>
              ))}

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-1" />

              {/* Mobile Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1U78P3fxtrH02S1PxM8HPSEYcpXzDNk2j/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-[15px] shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all duration-300 relative overflow-hidden group"
                onClick={() => setIsOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
                <Download size={16} strokeWidth={2.5} className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
