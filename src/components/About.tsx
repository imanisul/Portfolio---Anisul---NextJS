"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2, BrainCircuit, Rocket, Coffee } from "lucide-react";

export default function About() {
  const { summary } = portfolioData.personal;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-bold text-white">About the Developer</h2>
          <div className="h-[1px] flex-1 bg-slate-700"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-blue-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px] group-hover:bg-violet-500/20 transition-all" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all" />
            
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed relative z-10 mb-6">
              {summary}
            </p>
            <p className="text-slate-400 text-base leading-relaxed relative z-10">
              My journey started with building simple web interfaces and has evolved into architecting complex, AI-driven applications. I thrive on solving complex problems, learning cutting-edge technologies like LangChain and n8n, and optimizing system architectures for performance and scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 grid grid-cols-2 gap-6"
          >
            {[
              { icon: <Code2 className="text-blue-400 w-8 h-8" />, title: "1.3+ Years", desc: "Experience" },
              { icon: <Rocket className="text-violet-400 w-8 h-8" />, title: "3+ Major", desc: "Projects Delivered" },
              { icon: <BrainCircuit className="text-green-400 w-8 h-8" />, title: "AI-Driven", desc: "Solutions Built" },
              { icon: <Coffee className="text-orange-400 w-8 h-8" />, title: "100%", desc: "Dedication" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-6 rounded-2xl flex flex-col gap-4 border-slate-700/50 hover:border-slate-500/50 transition-all shadow-lg"
              >
                <div className="p-3 bg-slate-800/50 rounded-xl w-max">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.title}</h3>
                  <p className="text-sm text-slate-400 font-medium">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
