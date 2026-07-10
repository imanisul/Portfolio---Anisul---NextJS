"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
  SiReact, SiNextdotjs, SiRedux, SiVite, SiTailwindcss, SiTypescript,
  SiNodedotjs, SiExpress, SiPhp, SiGraphql, SiRabbitmq,
  SiMongodb, SiMysql, SiRedis, SiPostgresql,
  SiPython, SiCplusplus, SiJavascript,
  SiGithub, SiPostman, SiDocker,
  SiLangchain,
} from "react-icons/si";
import { FaDatabase, FaRobot, FaTools, FaAws } from "react-icons/fa";

const getIconForSkill = (skill: string) => {
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
  if (s.includes("langchain")) return <SiLangchain className="text-green-400" />;
  if (s.includes("gpt") || s.includes("claude") || s.includes("ai") || s.includes("n8n")) return <FaRobot className="text-teal-400" />;
  if (s.includes("sql") || s.includes("db")) return <FaDatabase className="text-blue-400" />;
  return <FaTools className="text-slate-400" />;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-4xl font-bold text-white">Tools & Technologies</h2>
          <div className="h-[1px] flex-1 bg-slate-700"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="glass p-8 rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-colors group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                  {category.category.toLowerCase().includes('ai') ? <FaRobot className="text-teal-400 text-xl" /> : 
                   category.category.toLowerCase().includes('frontend') ? <SiReact className="text-blue-400 text-xl" /> : 
                   category.category.toLowerCase().includes('backend') ? <SiNodedotjs className="text-green-400 text-xl" /> : 
                   category.category.toLowerCase().includes('database') ? <FaDatabase className="text-blue-400 text-xl" /> : 
                   <FaTools className="text-slate-400 text-xl" />}
                </div>
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.items.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx} 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-950/50 border border-slate-800 hover:border-slate-500 transition-colors shadow-sm"
                  >
                    <div className="text-lg">
                      {getIconForSkill(skill)}
                    </div>
                    <span className="text-slate-300 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
