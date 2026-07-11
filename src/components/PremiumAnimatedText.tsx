"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface PremiumAnimatedTextProps {
  text: string;
}

export default function PremiumAnimatedText({ text }: PremiumAnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax & Magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Tilt effect (max 3 degrees)
  const rotateX = useTransform(springY, [-50, 50], [3, -3]);
  const rotateY = useTransform(springX, [-50, 50], [-3, 3]);

  // Magnetic translation
  const translateX = springX;
  const translateY = springY;

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      const x = e.clientX - (rect.left + width / 2);
      const y = e.clientY - (rect.top + height / 2);
      
      const maxDistance = 50;
      const pullX = Math.max(-maxDistance, Math.min(maxDistance, x * 0.2));
      const pullY = Math.max(-maxDistance, Math.min(maxDistance, y * 0.2));

      mouseX.set(pullX);
      mouseY.set(pullY);
    };
    
    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      setIsHovered(false);
    };
    
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, [mouseX, mouseY]);

  const words = text.split(" ");
  const easeOutExpo = [0.19, 1, 0.22, 1] as any;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      }
    }
  };

  const charVariants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      filter: "blur(12px)",
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        duration: 1.2, 
        ease: easeOutExpo 
      }
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative cursor-pointer select-none py-4"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d"
        }}
        animate={{
          y: isHovered ? translateY.get() : [0, -3, 0],
        }}
        transition={{
          y: isHovered 
            ? { duration: 0.1 } // Let the spring handle it on hover
            : { duration: 4, repeat: Infinity, ease: "easeInOut" } // Floating effect when not hovered
        }}
        className="relative z-10 inline-block"
      >
        {/* Soft Glow Bloom on Hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1.1 : 0.9,
          }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 blur-3xl opacity-0 rounded-full z-0 mix-blend-screen pointer-events-none"
        />

        {/* Text Container with continuous gradient */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`relative z-10 flex flex-wrap text-transparent bg-clip-text transition-all duration-700 ease-out ${
            isHovered 
              ? "bg-[linear-gradient(90deg,#3b82f6,#a855f7,#3b82f6)] bg-[length:200%_auto] animate-shimmer"
              : "bg-[linear-gradient(135deg,#00f2fe_0%,#4facfe_50%,#00f2fe_100%)]"
          }`}
          style={{
            // Premium fallback colors if needed
            backgroundImage: isHovered
              ? "linear-gradient(90deg, #3b82f6, #a855f7, #3b82f6)"
              : "linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #00f2fe 100%)"
          }}
        >
          {/* Shimmer Sweep Overlay */}
          <div className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer-sweep skew-x-[-20deg]" />
          </div>

          {words.map((word, wordIndex) => (
            <div key={wordIndex} className="inline-flex mr-[0.3em] overflow-visible pb-2">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={charVariants}
                  className="inline-block font-[900] tracking-tight will-change-transform"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
