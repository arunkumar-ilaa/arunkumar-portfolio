import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("services");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = [
    { id: "services", label: "Expertise" },
    { id: "projects", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "process", label: "Process" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const current = sections.find((section) => {
        const element = document.getElementById(section.id);

        if (!element) return false;

        const rect = element.getBoundingClientRect();

        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
? "bg-transparent"
: "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4">

      <div className="flex items-center h-20">

          {/* Desktop Menu */}
         <div
            className={`
              hidden
              md:flex
              ml-auto
              items-center
              justify-between
              w-full
              px-3
              py-3
              transition-all
              duration-300

              ${
                scrolled
                  ? `
                  rounded-full
                  bg-slate-950/80
                  backdrop-blur-xl
                  border
                  border-white/10
                  mt-2
                  
                  shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                  `
                  : `
                  bg-transparent
                  border border-transparent
                  `
              }
            `}
          >

  {scrolled && (
  <div className="hidden md:block flex-shrink-0">
    <span className="text-violet-400 uppercase ml-5 tracking-[0.3em] text">
      ARUNKUMAR VADIVEL
    </span>
  </div>
)}
              

          <div className="flex items-center gap-8 ml-auto">

            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`
                  relative
                  transition-all
                  duration-300
                  ${
                    activeSection === item.id
                      ? "text-violet-400"
                      : "text-slate-400 hover:text-white"
                  }
                `}
              >
                {item.label}

                {activeSection === item.id && (
                  <span
                    className="
                      absolute left-0 
                      w-full
                      
                      bg-violet-400
                      rounded-full
                    "
                  />
                )}
              </a>
            ))}

            {/* LinkedIn CTA */}

            <a
              href="https://www.linkedin.com/in/arunkumar-vadivel-7a440a87/"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                hover:border-violet-500/40
                hover:bg-white/10
                hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]
                transition-all
                duration-300
              "
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              <FaLinkedinIn size={14} />

              <span className="text-sm font-medium">
                LinkedIn
              </span>
            </a>
          </div>
          </div>

          {/* Mobile Toggle */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white ml-auto"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>



        {/* Mobile Menu */}

        {mobileOpen && (
  <div
    className="
    md:hidden
    mt-3
    p-5
    rounded-3xl
    border
    border-white/10
    bg-slate-950/90
    backdrop-blur-xl
    shadow-[0_10px_50px_rgba(0,0,0,0.4)]
    flex
    flex-col
    gap-5
    "
  >
            {sections.map((item) => (
              <a
  key={item.id}
  href={`#${item.id}`}
  onClick={() => setMobileOpen(false)}
  className={`
    flex
    items-center
    justify-between
    px-4
    py-3
    rounded-xl
    transition-all
    duration-300
    ${
      activeSection === item.id
        ? "bg-violet-500/10 text-violet-400 border border-violet-500/20"
        : "text-slate-300 hover:bg-white/5"
    }
  `}
>
  <span>{item.label}</span>

  {activeSection === item.id && (
    <span className="w-2 h-2 rounded-full bg-violet-400" />
  )}
</a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10">

  <div className="flex gap-3">

    <a
      href="https://www.linkedin.com/in/arunkumar-vadivel-7a440a87/"
      target="_blank"
      rel="noreferrer"
      className="
      flex-1
      text-center
      py-3
      rounded-xl
      bg-violet-600
      hover:bg-violet-700
      transition
      "
    >
      LinkedIn
    </a>

    <a
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="
      flex-1
      text-center
      py-3
      rounded-xl
      border
      border-white/10
      bg-white/5
      hover:bg-white/10
      transition
      "
    >
      Resume
    </a>

  </div>

</div>
          </div>
        )}

      </div>
    </nav>
  );
}