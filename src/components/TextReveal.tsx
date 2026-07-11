"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  mode?: "word" | "character" | "line";
  once?: boolean;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  mode = "word",
  once = true,
}: TextRevealProps) {
  if (mode === "character") {
    const chars = children.split("");
    return (
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.1 }}
        className={`inline-block ${className}`}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
              visible: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: {
                  delay: delay + i * 0.03,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (mode === "line") {
    return (
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once, amount: 0.1 }}
          transition={{
            delay,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={className}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  // Word mode (default)
  const words = children.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.3em]">
          <motion.span
            variants={{
              hidden: { y: 20, opacity: 0, filter: "blur(8px)" },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  delay: delay + i * 0.05,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
