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
    title: "Enterprise Platforms",
    desc: "Designing enterprise applications, manufacturing platforms, and operational systems that simplify complex business workflows.",
  },

  {
    icon: LayoutDashboard,
    title: "Dashboard UX",
    desc: "Transforming operational and business data into actionable insights through scalable dashboard experiences and data visualization.",
  },

  {
    icon: Monitor,
    title: "Industrial IoT & Monitoring",
    desc: "Designing monitoring platforms, condition-based monitoring systems, and real-time operational visibility solutions.",
  },

  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Creating intuitive mobile experiences for enterprise operations, wellness products, and customer-facing applications.",
  },

  {
    icon: ScanLine,
    title: "Landing Pages & Marketing Sites",
    desc: "Designing high-converting landing pages, campaign experiences, and responsive websites focused on engagement and business goals.",
  },

  {
    icon: Blocks,
    title: "Design Systems",
    desc: "Building reusable component libraries, design standards, and scalable systems that accelerate product development.",
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
            Specialized in designing enterprise software, industrial platforms,
            operational dashboards, mobile applications, and marketing experiences.
            Focused on creating scalable digital products that improve productivity,
            visibility, and decision-making across business and manufacturing environments.
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