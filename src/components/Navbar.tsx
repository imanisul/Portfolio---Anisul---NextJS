"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);
      setIsVisible(currentY < lastScrollY || currentY < 100);
      setLastScrollY(currentY);

      // Active section detection
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Dark / Light mode logic
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    const isLight = localStorage.getItem("theme") === "light";
    if (isLight) {
      setIsDarkMode(false);
      document.body.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-[1000] flex justify-center pt-4 px-4 transition-all duration-500`}
      >
        <nav
          className={`flex items-center justify-between w-full md:w-auto md:justify-start gap-1 px-4 py-2 md:px-2 rounded-full transition-all duration-500 ${
            isScrolled
              ? "glass-strong shadow-lg shadow-black/20"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="px-4 py-2 text-lg font-bold tracking-tight text-white mr-2"
          >
            <span className="text-white">A</span>
            <span className="text-blue-500">I</span>
            <span className="text-purple-500">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/[0.08] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Actions: Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2 ml-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="md:hidden p-2 text-white/60 hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
