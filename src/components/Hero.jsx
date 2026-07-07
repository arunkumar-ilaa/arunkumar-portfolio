import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";

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
            ARUNKUMAR V
          </p>
<div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-400">
  <div className="flex items-center gap-2">
    <MapPin size={16} className="text-violet-400" />
    <span>Coimbatore, Tamil Nadu, India</span>
  </div>

  <div className="h-4 w-px bg-white/10" />

  <span className="text-violet-300">
    Open to Opportunities
  </span>
</div>

          {/* Current Company Badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm text-slate-300">
              Currently working as UX Designer at Maxbyte Technologies
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-7xl font-bold leading-tight">
            Designing Enterprise SaaS Experiences That Simplify Complex Business Workflows.
            
          </h1>

          <p className="mt-6 text-xl text-violet-300">
            Enterprise SaaS • Web Applications • Mobile Applications • Operational Dashboards
          </p>

          <p className="mt-8 text-slate-400 text-lg max-w-4xl leading-8">
          UX/UI Designer with 3.5+ years of experience designing Enterprise SaaS products, Web Applications, Mobile Applications, and Operational Dashboards. Experienced in workflow analysis, wireframing, interactive prototyping, high-fidelity UI design, Design Systems, and developer collaboration.

          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-violet-400">3.5+</p>
              <p className="text-sm text-slate-400">Relevant UX/UI Experience</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-violet-400">200+</p>
              <p className="text-sm text-slate-400">UI Screens Delivered</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-violet-400">6+</p>
              <p className="text-sm text-slate-400">Enterprise Clients</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-violet-400">Manufacturing</p>
              <p className="text-sm text-slate-400">Domain Expertise</p>
            </div>
          </div>
        <p className="mt-8 text-slate-400 text-lg max-w-4xl leading-8">
          Specialized in Enterprise Manufacturing Platforms, Operational Dashboards, Factory TV Interfaces, and Industrial SaaS solutions.
        </p>
          {/* Trusted By */}
          <div className="mt-8">
            <p className="text-slate-500 text-sm mb-4">
              ENTERPRISE CLIENTS
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "NBC",
                "Welspun",
                "Blue Star",
                "Axium",
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
              Explore Case Studies →
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}