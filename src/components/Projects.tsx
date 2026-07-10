"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-white/20 text-sm font-mono tracking-wider">04</span>
          <div className="h-[1px] w-12 bg-white/10" />
          <span className="text-white/40 text-sm tracking-[0.2em] uppercase">Projects</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-20"
        >
          Featured Work
        </motion.h2>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`${idx === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="group relative p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all duration-500 overflow-hidden shine-sweep h-full">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] via-transparent to-blue-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Large background number */}
                <span className="absolute top-6 right-8 text-[8rem] md:text-[10rem] font-bold text-white/[0.02] leading-none pointer-events-none select-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-white/15 text-sm font-mono">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white/20 text-xs">{project.date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full border border-white/[0.06] text-white/30 hover:text-white hover:border-white/20 transition-all duration-300"
                        >
                          <GithubIcon />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full border border-white/[0.06] text-white/30 hover:text-white hover:border-white/20 transition-all duration-300"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-500">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/35 text-base leading-relaxed mb-8 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 text-xs font-medium text-white/40 bg-white/[0.03] border border-white/[0.06] rounded-full hover:border-white/15 hover:text-white/60 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
