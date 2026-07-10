"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
  SiReact, SiNextdotjs, SiRedux, SiVite, SiTailwindcss, SiTypescript,
  SiNodedotjs, SiExpress, SiPhp, SiGraphql, SiRabbitmq,
  SiMongodb, SiMysql, SiRedis, SiPostgresql,
  SiPython, SiCplusplus, SiJavascript,
  SiGithub, SiPostman, SiDocker,
  SiLangchain,
} from "react-icons/si";
import { FaAws, FaRobot, FaDatabase, FaTools, FaNetworkWired, FaServer, FaCode, FaLaptopCode, FaBrain } from "react-icons/fa";

const getIcon = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes("react")) return <SiReact className="text-blue-400" />;
  if (s.includes("next")) return <SiNextdotjs className="text-white" />;
  if (s.includes("redux")) return <SiRedux className="text-purple-500" />;
  if (s.includes("vite")) return <SiVite className="text-yellow-400" />;
  if (s.includes("tailwind")) return <SiTailwindcss className="text-cyan-400" />;
  if (s.includes("typescript") || s.includes("tsx")) return <SiTypescript className="text-blue-500" />;
  if (s.includes("node")) return <SiNodedotjs className="text-green-500" />;
  if (s.includes("express")) return <SiExpress className="text-white" />;
  if (s.includes("php")) return <SiPhp className="text-indigo-400" />;
  if (s.includes("graphql")) return <SiGraphql className="text-pink-500" />;
  if (s.includes("rabbitmq")) return <SiRabbitmq className="text-orange-500" />;
  if (s.includes("mongo")) return <SiMongodb className="text-green-500" />;
  if (s.includes("mysql")) return <SiMysql className="text-blue-500" />;
  if (s.includes("redis")) return <SiRedis className="text-red-500" />;
  if (s.includes("postgres")) return <SiPostgresql className="text-blue-400" />;
  if (s.includes("python")) return <SiPython className="text-yellow-500" />;
  if (s.includes("c++")) return <SiCplusplus className="text-blue-600" />;
  if (s.includes("javascript")) return <SiJavascript className="text-yellow-400" />;
  if (s.includes("github")) return <SiGithub className="text-white" />;
  if (s.includes("postman")) return <SiPostman className="text-orange-500" />;
  if (s.includes("docker")) return <SiDocker className="text-blue-500" />;
  if (s.includes("aws")) return <FaAws className="text-orange-400" />;
  if (s.includes("langchain") || s.includes("langgraph")) return <SiLangchain className="text-green-400" />;
  if (s.includes("microservices")) return <FaNetworkWired className="text-purple-400" />;
  if (s.includes("gpt") || s.includes("claude") || s.includes("gemini") || s.includes("groq") || s.includes("genai") || s.includes("ai") || s.includes("n8n") || s.includes("anti-gravity")) return <FaRobot className="text-teal-400" />;
  if (s.includes("cursor")) return <FaCode className="text-purple-400" />;
  if (s.includes("sql") || s.includes("db")) return <FaDatabase className="text-blue-400" />;
  return <FaTools className="text-white/40" />;
};

const getCategoryIcon = (category: string) => {
  const c = category.toLowerCase();
  if (c.includes("ai")) return <FaBrain className="text-teal-400" />;
  if (c.includes("frontend")) return <FaLaptopCode className="text-blue-400" />;
  if (c.includes("backend")) return <FaServer className="text-green-400" />;
  if (c.includes("database")) return <FaDatabase className="text-orange-400" />;
  if (c.includes("cloud")) return <FaAws className="text-cyan-400" />;
  if (c.includes("programming")) return <FaCode className="text-purple-400" />;
  return <FaTools className="text-gray-400" />;
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...portfolioData.skills.map((c) => c.category)];

  const displayedSkills = activeCategory === "All"
    ? portfolioData.skills
    : portfolioData.skills.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="section-spacing relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-white/20 text-sm font-mono tracking-wider">02</span>
          <div className="h-[1px] w-12 bg-white/10" />
          <span className="text-white/40 text-sm tracking-[0.2em] uppercase">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          Tools & Technologies
        </motion.h2>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex overflow-x-auto pb-4 pt-2 gap-3 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap flex-shrink-0 snap-start px-5 py-2.5 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                  : "bg-white/[0.02] text-white/40 border border-white/[0.04] hover:bg-white/[0.06] hover:text-white/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-6 min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeCategory === "All" ? (
            <motion.div
              key="all-sliders"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 overflow-hidden py-4 -mx-6 px-6"
            >
              {/* Slider Row 1 (Left) */}
              <div className="relative w-full flex overflow-hidden">
                <div className="flex w-max animate-marquee-left gap-6 hover:[animation-play-state:paused]">
                  {[...portfolioData.skills.slice(0, 3), ...portfolioData.skills.slice(0, 3)].map((category, idx) => (
                    <div
                      key={`row1-${category.category}-${idx}`}
                      className="w-[300px] md:w-[400px] flex-shrink-0 relative group overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 shine-sweep hover:border-white/[0.12] transition-colors duration-500"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.05]">
                            {getCategoryIcon(category.category)}
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {category.category}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2.5 mt-auto">
                          {category.items.slice(0, 6).map((skill) => (
                            <div key={skill} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03]">
                              <span className="text-sm">{getIcon(skill)}</span>
                              <span className="text-xs font-medium text-white/70">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Row 2 (Right) */}
              <div className="relative w-full flex overflow-hidden">
                <div className="flex w-max animate-marquee-right gap-6 hover:[animation-play-state:paused]">
                  {[...portfolioData.skills.slice(3, 6), ...portfolioData.skills.slice(3, 6)].map((category, idx) => (
                    <div
                      key={`row2-${category.category}-${idx}`}
                      className="w-[300px] md:w-[400px] flex-shrink-0 relative group overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 shine-sweep hover:border-white/[0.12] transition-colors duration-500"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-cyan-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.05]">
                            {getCategoryIcon(category.category)}
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {category.category}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2.5 mt-auto">
                          {category.items.slice(0, 6).map((skill) => (
                            <div key={skill} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03]">
                              <span className="text-sm">{getIcon(skill)}</span>
                              <span className="text-xs font-medium text-white/70">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full md:w-2/3 lg:w-1/2 mx-auto"
            >
              {displayedSkills.map((category) => (
                <div
                  key={category.category}
                  className="relative group overflow-hidden rounded-3xl border border-white/[0.1] bg-white/[0.03] p-8 md:p-10 shine-sweep hover:border-white/[0.2] transition-colors duration-500 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-purple-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/[0.1] group-hover:scale-110 transition-transform duration-300">
                        {getCategoryIcon(category.category)}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {category.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto">
                      {category.items.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.1] transition-colors duration-300"
                        >
                          <span className="text-lg">{getIcon(skill)}</span>
                          <span className="text-sm font-medium text-white/80 group-hover:text-white">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
