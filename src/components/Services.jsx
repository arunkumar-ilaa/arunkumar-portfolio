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
    desc: "Enterprise applications supporting production planning, execution and operational workflows.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard UX",
    desc: "Operational dashboards, KPI monitoring and industrial analytics experiences.",
  },
  {
    icon: Monitor,
    title: "Factory TV Dashboards",
    desc: "Large-screen production visibility systems designed for shop-floor environments.",
  },
  {
    icon: ScanLine,
    title: "AR Interfaces",
    desc: "Industrial AR experiences supporting monitoring, visualization and decision making.",
  },
  {
    icon: Smartphone,
    title: "Enterprise Mobile Apps",
    desc: "Enterprise mobile experiences optimized for field and operational teams.",
  },
  {
    icon: Blocks,
    title: "Design Systems",
    desc: "Reusable UI components and scalable design foundations for faster product delivery.",
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
            What I Design
          </h2>

          <p className="text-slate-400 max-w-3xl mt-5 text-lg">
            Designing enterprise-grade experiences that simplify complex
            industrial workflows and operational decision-making.
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
                rounded-3xl
                p-8
                hover:border-violet-500/40
                hover:-translate-y-1
                hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
                transition-all
                duration-300
              "
              >
                <div className="
                  w-14 h-14
                  rounded-2xl
                  bg-violet-500/10
                  flex items-center justify-center
                  mb-6
                ">
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