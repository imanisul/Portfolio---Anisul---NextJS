"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("loader-played")) {
        setIsLoading(false);
        setHasPlayed(true);
        return;
      }
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("loader-played", "true");
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (hasPlayed) return null;

  const name = "ANISUL ISLAM";
  const subtitle = "Full Stack Developer";

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100000] bg-[#050505] flex flex-col items-center justify-center"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Name reveal */}
          <div className="flex overflow-hidden mb-4">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  delay: 0.3 + i * 0.06,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white font-[family-name:var(--font-space)]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-sm md:text-base text-white/40 tracking-[0.3em] uppercase"
          >
            {subtitle}
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/10 overflow-hidden rounded-full"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.2, duration: 2.4, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
