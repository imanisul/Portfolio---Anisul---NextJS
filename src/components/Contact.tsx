"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MessageCircle, ArrowUp } from "lucide-react";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const { email, phone, github, linkedin, whatsapp } = portfolioData.personal;

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-white/20 text-sm font-mono tracking-wider">05</span>
          <div className="h-[1px] w-12 bg-white/10" />
          <span className="text-white/40 text-sm tracking-[0.2em] uppercase">Contact</span>
        </motion.div>

        {/* Main content */}
        <div className="max-w-3xl mx-auto text-center py-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
            <TextReveal mode="word" delay={0.1}>
              Let&apos;s create something amazing together.
            </TextReveal>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/30 text-lg mb-12 max-w-xl mx-auto"
          >
            I&apos;m currently open to new opportunities. Whether you have a project in mind or just want to connect — let&apos;s talk.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <MagneticButton
              href={`mailto:${email}`}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm flex items-center gap-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-shadow duration-500"
            >
              <Mail size={16} />
              Say Hello
            </MagneticButton>

            <MagneticButton
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 hover:bg-green-500/10 font-semibold text-sm flex items-center gap-2 transition-all duration-300"
            >
              <MessageCircle size={16} />
              WhatsApp
            </MagneticButton>

            <MagneticButton
              href={`tel:${phone}`}
              className="px-8 py-4 rounded-full border border-white/[0.06] text-white/50 hover:text-white hover:border-white/20 font-medium text-sm flex items-center gap-2 transition-all duration-300"
            >
              <Phone size={16} />
              Call
            </MagneticButton>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center gap-4"
          >
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-white/[0.06] text-white/30 hover:text-white hover:border-white/20 hover:glow-blue transition-all duration-300"
            >
              <GithubIcon />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-white/[0.06] text-white/30 hover:text-blue-400 hover:border-blue-500/20 transition-all duration-300"
            >
              <LinkedinIcon />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] mt-12">
        <div className="container mx-auto px-6 py-8 flex items-center justify-between">
          <div className="text-white/20 text-sm">
            <span className="font-bold text-white/40">AI</span>
            <span className="text-blue-500/40">.</span>
            <span className="ml-3">© {new Date().getFullYear()}</span>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 rounded-full border border-white/[0.06] text-white/20 hover:text-white hover:border-white/20 transition-all duration-300 group"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </footer>
    </section>
  );
}
