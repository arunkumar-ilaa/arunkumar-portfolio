import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center pt-24"
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

          {/* Current Company Badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm text-slate-300">
              UX Designer @ Maxbyte Technologies
            </span>
          </div>

          <h1 className="mt-6 text-3xl md:text-6xl font-bold leading-tight">
            Designing Enterprise Products <br />
            for Manufacturing & Industrial Operations
           
           
           
          </h1>

          <p className="mt-6 text-xl text-violet-300">
            Senior UX/UI Designer • Enterprise Product Design
          </p>

          <p className="mt-8 text-slate-400 text-lg max-w-4xl leading-8">
           UX/UI Designer with 8+ years of design experience and 4+ years specializing in Enterprise SaaS, 
           Manufacturing Execution Systems (MES), Industrial IoT Platforms, and Factory Operations Dashboards.

          Experienced in designing enterprise applications, mobile products, and marketing experiences, 
          with a strong focus on simplifying complex workflows into intuitive, scalable, and data-driven digital solutions.

          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-violet-400">4+</p>
              <p className="text-sm text-slate-400">Years UX/UI</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-violet-400">8+</p>
              <p className="text-sm text-slate-400">Years Design</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-violet-400">150+</p>
              <p className="text-sm text-slate-400">Enterprise Screens</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-violet-400">6+</p>
              <p className="text-sm text-slate-400">Enterprise Clients</p>
            </div>
          </div>

          {/* Trusted By */}
          <div className="mt-10">
            <p className="text-slate-500 text-sm mb-4">
              TRUSTED BY
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "NBC",
                
                "Welspun",
                "Blue Star",
                "Byte Factory",
                "BFAL"
                
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

          {/* Buttons */}
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