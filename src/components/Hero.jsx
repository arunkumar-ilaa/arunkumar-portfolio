import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";


export default function Hero() {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-violet-400 uppercase tracking-[0.3em] text-2xl">
            ARUNKUMAR VADIVEL
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight">
            Senior UX/UI Designer
          </h1>

          <p className="mt-6 text-xl  text-slate-300">
            Enterprise Applications • Dashboard UX • Manufacturing Systems • AR Experiences
          </p>

          <p className="mt-8 text-slate-400 text-lg max-w-4xl leading-8">
           Senior UX/UI Designer with 8+ years of design experience and 4+ years specializing in Enterprise Applications, Manufacturing Systems, Factory TV Dashboards and AR Experiences. Passionate about transforming complex operational workflows into intuitive digital products.

          </p>

          <div className="mt-10">
            <p className="text-slate-500 text-sm mb-4">
              TRUSTED BY
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "NBC",
                "Blue Star",
                "Welspun",
                "GE Aerospace",
                "BFAL",
                
              ].map((client) => (
                <span
                  key={client}
                  className="px-5 py-2 rounded-full bg-white/5 border border-white/10"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-12 flex-wrap">

            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Download Resume
              <Download size={18} />
            </a>

          </div>

          

        </motion.div>

      </div>
    </section>
  );
}