"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
  SiReact, SiNextdotjs, SiRedux, SiVite, SiTailwindcss, SiTypescript,
  SiNodedotjs, SiExpress, SiPhp, SiGraphql, SiRabbitmq,
  SiMongodb, SiMysql, SiRedis, SiPostgresql,
  SiPython, SiCplusplus, SiJavascript,
  SiGithub, SiPostman, SiDocker,
  SiLangchain,
} from "react-icons/si";
import { FaAws, FaRobot, FaDatabase, FaTools } from "react-icons/fa";

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
  if (s.includes("gpt") || s.includes("claude") || s.includes("gemini") || s.includes("groq") || s.includes("genai") || s.includes("ai") || s.includes("n8n")) return <FaRobot className="text-teal-400" />;
  if (s.includes("sql") || s.includes("db")) return <FaDatabase className="text-blue-400" />;
  return <FaTools className="text-white/40" />;
};

// Build flat arrays of skill pills for marquee rows
function buildMarqueeRows() {
  const allSkills = portfolioData.skills.flatMap((cat) =>
    cat.items.map((skill) => ({ skill, category: cat.category }))
  );

  const mid = Math.ceil(allSkills.length / 2);
  return [allSkills.slice(0, mid), allSkills.slice(mid)];
}

function SkillPill({ skill }: { skill: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group shrink-0">
      <span className="text-base group-hover:scale-110 transition-transform duration-300">{getIcon(skill)}</span>
      <span className="text-sm text-white/60 group-hover:text-white/90 font-medium whitespace-nowrap transition-colors duration-300">
        {skill}
      </span>
    </div>
  );
}

export default function Skills() {
  const [rows] = [buildMarqueeRows()];

  return (
    <section id="skills" className="section-spacing relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
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
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Tools & Technologies
        </motion.h2>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            <div
              className={`flex gap-4 ${
                rowIdx % 2 === 0 ? "animate-marquee-left" : "animate-marquee-right"
              }`}
              style={{
                animationDuration: rowIdx % 2 === 0 ? "35s" : "40s",
              }}
            >
              {/* Duplicate for seamless loop */}
              {[...row, ...row].map((item, i) => (
                <SkillPill key={`${rowIdx}-${i}`} skill={item.skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Category labels below */}
      <div className="container mx-auto px-6 mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          {portfolioData.skills.map((cat, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs text-white/25 border border-white/[0.04] rounded-full"
            >
              {cat.category}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
