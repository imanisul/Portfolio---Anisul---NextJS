"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { FileText, Send, Mail } from "lucide-react";
import { SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiTailwindcss, SiDocker } from "react-icons/si";

export default function Hero() {
  const { name, role, summary, resumeUrl, email } = portfolioData.personal;

  // Orbital tech stack icons
  const orbitIcons = [
    { icon: <SiReact className="text-blue-400 w-6 h-6" />, angle: 0 },
    { icon: <SiNextdotjs className="text-white w-6 h-6" />, angle: 60 },
    { icon: <SiNodedotjs className="text-green-500 w-6 h-6" />, angle: 120 },
    { icon: <SiPython className="text-yellow-400 w-6 h-6" />, angle: 180 },
    { icon: <SiTailwindcss className="text-cyan-400 w-6 h-6" />, angle: 240 },
    { icon: <SiDocker className="text-blue-500 w-6 h-6" />, angle: 300 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass border-blue-500/30 text-blue-400 text-sm font-medium w-max mb-2"
          >
            Available for Work
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            Hi, I&apos;m <br />
            <span className="text-gradient">{name}</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl md:text-3xl font-medium text-slate-300"
          >
            {role}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-slate-400 text-lg leading-relaxed max-w-xl"
          >
            {summary.substring(0, 150)}...
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2 hover:scale-105"
            >
              <Send size={18} />
              Hire Me
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl glass hover:bg-slate-800 text-white font-medium transition-all flex items-center gap-2 border-slate-700 hover:scale-105"
            >
              <FileText size={18} />
              Resume
            </a>
            <a
              href={`mailto:${email}`}
              className="px-8 py-4 rounded-xl glass hover:bg-slate-800 text-slate-300 hover:text-white font-medium transition-all flex items-center gap-2 border-slate-700 hover:scale-105"
            >
              <Mail size={18} />
              Email Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">
            
            {/* Orbital Rings */}
            <div className="absolute inset-4 rounded-full border-[1px] border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]" />
            <div className="absolute inset-12 rounded-full border-[1px] border-violet-500/20 shadow-[0_0_20px_rgba(139,92,246,0.1)]" />
            <div className="absolute inset-20 rounded-full border-[1px] border-slate-600/30 border-dashed animate-spin-slow" style={{ animationDuration: '40s' }} />

            {/* Orbiting Icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-0 z-20"
            >
              {orbitIcons.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 w-12 h-12 -mt-6 -ml-6 flex items-center justify-center rounded-full glass bg-slate-900 border border-slate-700 shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-md"
                    style={{
                      transform: `rotate(${item.angle}deg) translateX(180px)`,
                    }}
                  >
                    {/* Reverse rotation to keep icons upright */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                      className="drop-shadow-lg"
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Profile Avatar */}
            <div className="absolute z-10 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_40px_rgba(59,130,246,0.4)] glass hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="https://github.com/imanisul.png"
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
