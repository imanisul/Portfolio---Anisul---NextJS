import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <Loader />
      <SmoothScroll>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        <main className="relative">
          <Hero />

          {/* Subtle divider */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <About />

          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <Skills />

          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <Experience />

          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <Projects />

          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <Contact />
        </main>
      </SmoothScroll>
    </>
  );
}
