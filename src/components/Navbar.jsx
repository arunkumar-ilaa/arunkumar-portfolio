import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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

    return () =>
      window.removeEventListener("scroll", handleScroll);
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
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }
    `}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-end items-center h-20">

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8">

            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`
                transition
                ${
                  activeSection === item.id
                    ? "text-violet-400"
                    : "text-slate-400 hover:text-white"
                }
              `}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
              px-4
              py-2
              rounded-lg
              bg-violet-600
              hover:bg-violet-700
              transition
              "
            >
              Resume
            </a>

          </div>

          {/* Mobile Toggle */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}

        {mobileOpen && (
          <div
            className="
            md:hidden
            pb-6
            flex
            flex-col
            gap-5
            text-right
            "
          >
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className={`
                ${
                  activeSection === item.id
                    ? "text-violet-400"
                    : "text-slate-400"
                }
              `}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
              text-violet-400
              "
            >
              Resume
            </a>
          </div>
        )}

      </div>
    </nav>
  );
}