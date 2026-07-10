"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import TextReveal from "./TextReveal";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { summary } = portfolioData.personal;

  const stats = [
    { number: 1.3, suffix: "+", label: "Years Experience", isDecimal: true },
    { number: 4, suffix: "+", label: "Projects Shipped" },
    { number: 7, suffix: "+", label: "Tech Categories" },
    { number: 100, suffix: "%", label: "Dedication" },
  ];

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-white/20 text-sm font-mono tracking-wider">01</span>
          <div className="h-[1px] w-12 bg-white/10" />
          <span className="text-white/40 text-sm tracking-[0.2em] uppercase">About</span>
        </motion.div>

        {/* Pull quote + Bio */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
              <TextReveal mode="word" delay={0.2}>
                I craft intelligent, scalable web experiences.
              </TextReveal>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-white/40 text-lg leading-relaxed mb-6">
              {summary}
            </p>
            <p className="text-white/30 text-base leading-relaxed">
              My journey started with building simple web interfaces and has evolved into architecting complex, AI-driven applications. I thrive on solving complex problems, learning cutting-edge technologies like LangChain and n8n, and optimizing system architectures for performance and scale.
            </p>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/[0.06] justify-items-center"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center flex flex-col items-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.isDecimal ? (
                  <span>1.3{stat.suffix}</span>
                ) : (
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-sm text-white/30 tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
