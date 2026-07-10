"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MessageCircle } from "lucide-react";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const { email, phone, github, linkedin, whatsapp } = portfolioData.personal;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a
              href={`mailto:${email}`}
              className="px-8 py-4 rounded-xl glass-card flex items-center gap-3 text-white hover:text-blue-400 hover:border-blue-500/50 transition-all"
            >
              <Mail size={20} />
              <span>Say Hello</span>
            </a>
            
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400 hover:bg-green-600 hover:text-white transition-all flex items-center gap-3"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full glass hover:bg-slate-800 hover:scale-110 transition-all text-slate-300 hover:text-white"
            >
              <GithubIcon />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full glass hover:bg-slate-800 hover:scale-110 transition-all text-slate-300 hover:text-blue-500"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`tel:${phone}`}
              className="p-4 rounded-full glass hover:bg-slate-800 hover:scale-110 transition-all text-slate-300 hover:text-white"
            >
              <Phone size={24} />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-slate-800/50 text-center">
        <p className="text-slate-500 text-sm">
          Designed & Built with <span className="text-blue-500">&hearts;</span> by Anisul Islam
        </p>
      </div>
    </section>
  );
}
