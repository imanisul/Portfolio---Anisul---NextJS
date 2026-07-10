"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { FileText, Send, ChevronDown } from "lucide-react";
import MagneticButton from "./MagneticButton";

import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTypescript, SiTailwindcss,
  SiExpress, SiRedis, SiRabbitmq, SiPostgresql, SiDocker,
  SiRedux, SiVite,
  SiLangchain, SiPython
} from "react-icons/si";
import { FaRobot, FaDatabase, FaNetworkWired } from "react-icons/fa";

const roles = [
  {
    title: "Full Stack Developer",
    color: "from-blue-400 to-cyan-400",
    tools: [
      { name: "React", Icon: SiReact, color: "text-blue-400" },
      { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
      { name: "Node.js", Icon: SiNodedotjs, color: "text-green-500" },
      { name: "MongoDB", Icon: SiMongodb, color: "text-green-500" },
      { name: "TypeScript", Icon: SiTypescript, color: "text-blue-500" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "text-cyan-400" },
    ],
  },
  {
    title: "Backend Developer",
    color: "from-green-400 to-emerald-400",
    tools: [
      { name: "Node.js", Icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express", Icon: SiExpress, color: "text-white" },
      { name: "Redis", Icon: SiRedis, color: "text-red-500" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "text-blue-400" },
      { name: "Docker", Icon: SiDocker, color: "text-blue-500" },
      { name: "APIs", Icon: FaNetworkWired, color: "text-purple-400" },
    ],
  },
  {
    title: "Frontend Developer",
    color: "from-violet-400 to-purple-400",
    tools: [
      { name: "React", Icon: SiReact, color: "text-blue-400" },
      { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
      { name: "React Native", Icon: SiReact, color: "text-blue-300" },
      { name: "Redux", Icon: SiRedux, color: "text-purple-500" },
      { name: "Vite", Icon: SiVite, color: "text-yellow-400" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "text-cyan-400" },
    ],
  },
  {
    title: "AI Enthusiast",
    color: "from-amber-400 to-orange-400",
    tools: [
      { name: "LangChain", Icon: SiLangchain, color: "text-green-400" },
      { name: "Gemini", Icon: FaRobot, color: "text-teal-400" },
      { name: "Python", Icon: SiPython, color: "text-yellow-500" },
      { name: "RAG", Icon: FaDatabase, color: "text-blue-400" },
      { name: "LLMs", Icon: FaRobot, color: "text-orange-400" },
    ],
  }
];

export default function Hero() {
  const { name, resumeUrl, email, github, linkedin } = portfolioData.personal;
  const containerRef = useRef<HTMLDivElement>(null);

  // Rotating role index
  const [roleIndex, setRoleIndex] = useState(0);

  const advanceRole = useCallback(() => {
    setRoleIndex((prev) => (prev + 1) % roles.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(advanceRole, 4000);
    return () => clearInterval(interval);
  }, [advanceRole]);

  const currentRole = roles[roleIndex];

  // Spotlight cursor effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const spotlightY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const [spotlightOpacity, setSpotlightOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
      setSpotlightOpacity(1);
    };

    const handleMouseLeave = () => setSpotlightOpacity(0);

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  // Dynamic radius for orbiting icons
  const [radius, setRadius] = useState(160);
  useEffect(() => {
    const handleResize = () => setRadius(window.innerWidth < 768 ? 140 : 200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Aurora blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/[0.07] rounded-full blur-[120px] animate-aurora" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.05] rounded-full blur-[120px] animate-aurora"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[120px] animate-aurora"
          style={{ animationDelay: "-14s" }}
        />
      </div>

      {/* Spotlight cursor */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{
          x: spotlightX,
          y: spotlightY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: spotlightOpacity,
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          transition: "opacity 0.3s",
        }}
      />

      {/* Social links — vertical bar */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-20"
      >
        <a href={github} target="_blank" rel="noreferrer" className="text-white/30 hover:text-white hover:scale-110 transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer" className="text-white/30 hover:text-blue-400 hover:scale-110 transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href={`mailto:${email}`} className="text-white/30 hover:text-cyan-400 hover:scale-110 transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
        <div className="w-[1px] h-24 bg-white/10" />
      </motion.div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12 md:mt-0">
          {/* Left — Text */}
          <div className="flex flex-col gap-6">
            {/* Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1]"
            >
              <span className="text-white/70 text-2xl md:text-3xl font-medium tracking-normal mb-4 block">
                Hi, I&apos;m Anisul
              </span>
              <span className="text-gradient">
                I build digital experiences
              </span>
            </motion.h1>

            {/* ═══ Animated rotating role ═══ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-2"
            >
              <div className="h-14 md:h-16 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <span
                      className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${currentRole.color} bg-clip-text text-transparent`}
                    >
                      {currentRole.title}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-white/60 text-lg leading-relaxed max-w-lg mt-2"
            >
              I specialize in scalable web apps and intelligent AI workflows with LangChain, React, Node.js, and cutting-edge cloud infrastructure.
            </motion.p>

            {/* Available badge & CTA buttons */}
            <div className="flex flex-col gap-6 mt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-sm font-medium w-max"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for Work
              </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton
                href="#contact"
                className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide flex items-center gap-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-shadow duration-500"
              >
                <Send size={16} />
                Get in Touch
              </MagneticButton>

              <MagneticButton
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/20 font-medium text-sm tracking-wide flex items-center gap-2 transition-all duration-300"
              >
                <FileText size={16} />
                Resume
              </MagneticButton>
            </motion.div>
            </div>
          </div>

          {/* Right — Avatar & Orbiting Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end items-center h-[400px] lg:h-[500px]"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
              {/* Glow ring */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl animate-pulse-glow" />

              {/* Image */}
              <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-white/10 z-20">
                <Image
                  src="https://github.com/imanisul.png"
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Orbiting Icons */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.5, rotate: 45 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 z-10 pointer-events-none"
                >
                  {currentRole.tools.map((tool, i) => {
                    // Distribute icons evenly around the circle
                    const angle = (i * 360) / currentRole.tools.length;
                    
                    // Convert polar to cartesian coordinates
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;

                    return (
                      <motion.div
                        key={tool.name}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{ x, y, opacity: 1 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: i * 0.1, 
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <motion.div
                          animate={{ 
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                          className="glass p-3 md:p-4 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg"
                        >
                          <tool.Icon className={`text-2xl md:text-3xl ${tool.color}`} />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-xs tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={16} className="text-white/20 animate-scroll-indicator" />
        </motion.div>
      </div>
    </section>
  );
}
