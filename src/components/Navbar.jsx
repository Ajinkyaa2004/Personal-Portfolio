import React, { useState, useEffect } from "react";
import { FolderOpen, Trophy, Code2, GraduationCap, Mail, Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-4 transition-all duration-300`}
    >
      <div
        className={`w-full max-w-5xl rounded-2xl flex items-center justify-between px-6 py-3 transition-colors duration-500 border border-white/5 shadow-2xl ${
          scrolled ? "bg-black/60 backdrop-blur-xl" : "bg-black/20 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold tracking-tight text-white/90 cursor-pointer">
            Ajinkya<span className="text-blue-500">.</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-1 items-center bg-white/5 rounded-full px-2 py-1 border border-white/10">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="group relative flex items-center space-x-2 text-sm font-medium px-4 py-2 text-white/70 hover:text-white transition-colors duration-300 rounded-full"
            >
              <span className="relative z-10 flex items-center gap-2">
                <link.icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                {link.label}
              </span>
              <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center" />
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex">
          <a
            href="https://drive.google.com/file/d/1U78P3fxtrH02S1PxM8HPSEYcpXzDNk2j/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transform hover:-translate-y-0.5"
          >
            <Download size={16} strokeWidth={2} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white/80 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[80px] left-4 right-4 bg-[#050505]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="flex items-center space-x-3 text-lg font-medium text-white/80 hover:text-white transition-colors bg-white/5 rounded-xl px-4 py-3 border border-white/5 hover:border-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="bg-white/10 p-2 rounded-lg text-white/70">
                    <link.icon size={20} strokeWidth={2} />
                  </div>
                  <span>{link.label}</span>
                </a>
              ))}
              
              {/* Mobile Resume Button */}
              <a
                href="https://drive.google.com/file/d/1U78P3fxtrH02S1PxM8HPSEYcpXzDNk2j/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 mt-4 px-6 py-4 bg-white text-black rounded-xl font-bold shadow-lg hover:bg-gray-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Download size={18} strokeWidth={3} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
