"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, MapPin } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-spacing relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-white/20 text-sm font-mono tracking-wider">03</span>
          <div className="h-[1px] w-12 bg-white/10" />
          <span className="text-white/40 text-sm tracking-[0.2em] uppercase">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-20"
        >
          Where I&apos;ve Worked
        </motion.h2>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-transparent" />

          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-16 md:pl-20 pb-16 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[14px] md:left-[22px] top-1 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.15, type: "spring" }}
                  className="w-6 h-6 rounded-full border-2 border-blue-500/40 bg-[#050505] flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-glow" />
                </motion.div>
              </div>

              {/* Card */}
              <div className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.03] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold tracking-wide">
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 text-white/25 text-xs">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase size={18} className="text-white/30" />
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {exp.role}
                    </h3>
                  </div>

                  <p className="text-white/50 text-base font-medium mb-6">
                    {exp.company}
                  </p>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-3 text-white/35 text-sm leading-relaxed"
                      >
                        <span className="text-blue-500/60 mt-1.5 shrink-0">▸</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
