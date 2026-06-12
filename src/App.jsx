import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);

      const contactSection = document.getElementById("contact");

      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();

        setShowTop(rect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">

      {/* Scroll Progress Bar */}

      <div
        className="
        fixed
        top-0
        left-0
        z-[9999]
        h-[3px]
        bg-violet-500
        transition-all
        duration-150
        "
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Global Background Effects */}

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-violet-600/15 blur-[180px] rounded-full" />

        <div className="absolute top-[35%] left-[-200px] w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-[-150px] w-[600px] h-[600px] bg-fuchsia-600/10 blur-[180px] rounded-full" />

      </div>

      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <Tools />
      <Process />
      <Contact />
      <Footer />

      {/* Scroll To Top */}

      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
          fixed
          bottom-8
          right-8
          z-50
          text-left
          transition-all
          duration-300
          hover:scale-105
          "
        >
          <p className="text-sm text-slate-600">
            You've reached the end.
          </p>

          <p
            className="
            caveat
            mt-1
            text-violet-400
            text-2xl
            leading-none
            "
          >
            Let's start again ↖
          </p>
        </button>
      )}

    </main>
  );
}

export default App;