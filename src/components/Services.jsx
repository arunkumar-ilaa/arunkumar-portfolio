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
    title: "Manufacturing Platforms",
    desc: "Designing production planning, execution, monitoring, and traceability experiences for enterprise manufacturing environments.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard UX",
    desc: "Transforming operational data into actionable insights through intuitive and scalable dashboard experiences.",
  },
  {
    icon: Monitor,
    title: "Factory TV Dashboards",
    desc: "Large-screen production monitoring interfaces optimized for visibility, readability, and real-time decision making.",
  },
  {
    icon: ScanLine,
    title: "Industrial AR Experiences",
    desc: "Augmented reality interfaces supporting equipment monitoring, operational visibility, and workforce efficiency.",
  },
  {
    icon: Smartphone,
    title: "Enterprise Mobile Apps",
    desc: "Mobile-first operational experiences supporting field teams, supervisors, and manufacturing workflows.",
  },
  {
    icon: Blocks,
    title: "Design Systems",
    desc: "Building reusable component libraries and design standards that improve consistency and accelerate product delivery.",
  },
];

export default function Services() {
  return (
    <SectionWrapper>
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-violet-400 uppercase tracking-widest text-sm">
              SPECIALIZATION
            </p>

            <h2 className="text-5xl font-bold mt-3">
              Expertise Areas
            </h2>

            <p className="text-slate-400 max-w-3xl mt-5 text-lg leading-8">
              Specialized in designing enterprise software, manufacturing
              platforms, operational dashboards, mobile applications, and
              scalable design systems that improve productivity, visibility,
              and decision-making across industrial environments.
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

                  <p className="text-slate-400 leading-7">
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