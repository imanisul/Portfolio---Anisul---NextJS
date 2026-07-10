"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-bold text-white">Experience</h2>
            <div className="h-[1px] flex-1 bg-slate-700"></div>
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-800"></div>

            {experience.map((exp, idx) => (
              <div key={idx} className="relative md:w-1/2 md:pr-12 md:ml-0 mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-[-41px] md:left-auto md:-right-[26px] top-1 w-12 h-12 rounded-full glass bg-slate-900 flex items-center justify-center border-blue-500/50 z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <Briefcase className="text-blue-400 w-5 h-5" />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass p-8 rounded-3xl group border border-slate-700/50 hover:border-blue-500/50 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-4">
                      {exp.duration}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{exp.role}</h3>
                    <h4 className="text-lg text-slate-300 font-medium mb-4">{exp.company} &bull; <span className="text-slate-400 font-normal">{exp.location}</span></h4>
                    
                    <ul className="space-y-3">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="text-slate-400 flex items-start gap-3 text-sm md:text-base leading-relaxed">
                          <span className="text-blue-500 mt-1.5 flex-shrink-0 opacity-70">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
