import SectionWrapper from "./SectionWrapper";
import {
  Factory,
  LayoutDashboard,
  Monitor,
  ScanLine,
  Smartphone,
  Blocks,
} from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Enterprise Applications",
    desc: "Designing scalable Enterprise SaaS applications and business platforms that simplify complex workflows and improve operational efficiency.",
  },

  {
    icon: LayoutDashboard,
    title: "Dashboard Design",
    desc: "Designing KPI dashboards and operational interfaces that transform complex data into meaningful insights for better decision-making.",
  },

  {
    icon: Monitor,
    title: "Industrial SaaS & IIoT",
    desc: "Creating industrial monitoring solutions, Condition-Based Monitoring (CBM) platforms, and operational interfaces for manufacturing environments.",
  },

    {
    icon: ScanLine,
    title: "Web Applications",
    desc: "Designing responsive business applications, portals, and customer-facing web experiences optimized across devices.",
  },

  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Designing intuitive mobile applications for enterprise users, field operations, and customer-focused digital experiences.",
  },



  {
    icon: Blocks,
    title: "Design Systems",
    desc: "Building reusable UI components, design systems, and scalable standards to ensure consistency across enterprise products.",
  },
];

export default function Services() {
  return (
    <SectionWrapper>
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-violet-400 uppercase tracking-widest text-sm">
              CORE EXPERTISE
            </p>

            <h2 className="text-5xl font-bold mt-3">
              Core Expertise
            </h2>

            <p className="text-slate-400 max-w-3xl mt-5 text-lg leading-8">
            I design user-centered digital experiences across Enterprise SaaS platforms,
            Web Applications, Mobile Applications, Operational Dashboards, and Design
            Systems, helping organizations simplify complex workflows and improve
            business productivity.
          </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-xl
                    rounded-2xl
                    p-8
                    hover:border-violet-500/40
                    hover:-translate-y-1
                    hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-violet-500/10
                      flex items-center justify-center
                      mb-6
                    "
                  >
                    <Icon
                      size={28}
                      className="text-violet-400"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text leading-7">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}