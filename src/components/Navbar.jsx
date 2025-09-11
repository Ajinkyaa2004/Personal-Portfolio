"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FolderOpen,
  Trophy,
  Code2,
  GraduationCap,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";

const links = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    );
  }, []);

  const gradientText =
    "bg-gradient-to-r from-[#3A41C6] via-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent font-roboto";

  return (
    <nav
      ref={navRef}
      className="fixed w-full z-50 bg-white/30 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className={`text-2xl font-bold ${gradientText}`}>
            Ajinkya Dhumal !
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center ml-auto">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`flex items-center space-x-2 text-sm font-medium px-3 py-2 rounded-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-1 ${gradientText}`}
            >
              <motion.span
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <link.icon size={18} strokeWidth={2} className="text-gray-800" />
              </motion.span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown from header */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/30 backdrop-blur-xl border-t border-white/20 shadow-md"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`flex items-center space-x-3 text-lg font-medium transition-transform duration-300 ${gradientText}`}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.span
                    whileHover={{ y: -4, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 6 }}
                  >
                    <link.icon size={20} strokeWidth={2} className="text-gray-800" />
                  </motion.span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
