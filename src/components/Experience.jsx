import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const experiences = [
{
period: "Dec 2022 - Present",
role: "UX/UI Designer",
company: "Maxbyte Technologies • Coimbatore",
description:
"Designed 200+ production-ready UI screens across Enterprise SaaS products, Web Applications, Mobile Applications, Operational Dashboards, and Factory TV interfaces. Collaborated with Product Managers, Business Analysts, QA engineers, and developers throughout the UX lifecycle—from workflow analysis and wireframes to interactive prototypes, high-fidelity UI, design systems, and developer handoff.",
highlights: [
"Enterprise SaaS",
"200+ UI Screens",
"Dashboard Design",
"Web Applications",
"Mobile Applications",
"Design Systems",
"NBC",
"Welspun",
"Blue Star"
],
},

{
period: "Jun 2022 - Dec 2022",
role: "Junior Executive",
company: "Deziner's Knot Pvt Ltd • Tiruppur",
description:
"Worked on responsive web and mobile application interfaces using Figma. Created wireframes, UI mockups, and interactive prototypes while collaborating with developers to deliver intuitive digital experiences.",
highlights: [
"Wireframes",
"Prototypes",
"Mobile Apps",
"Web Applications",
],
},

{
period: "Mar 2017 - May 2022",
role: "Operator",
company: "The Chennai Silks • Tiruppur",
description:
"Supported e-commerce website maintenance by designing promotional creatives, responsive landing pages, digital campaign assets, and HTML/CSS pages for marketing initiatives.",
highlights: [
"E-Commerce",
"HTMl/CSS",
"Landing Pages",
"Digital campaigns",
],
},
];

export default function Experience() {
return ( <SectionWrapper> <section id="experience" className="py-32"> <div className="max-w-7xl mx-auto px-6">

      <div className="mb-16">
        <p className="text-violet-400 uppercase tracking-widest text-sm">
          EXPERIENCE
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Relevant Experience
        </h2>
        <div className="mt-4 w-16 h-[2px] bg-violet-500 rounded-full" />
        <p className="text-slate-400 mt-5 max-w-3xl text-lg leading-8">
        UX/UI Designer with 3.5+ years of relevant experience designing Enterprise SaaS products, Web Applications, Mobile Applications, Operational Dashboards, and Design Systems. Previous experience in digital commerce strengthened my visual design expertise and front-end collaboration skills.
</p>
      </div>

      <div className="relative">

        <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-12">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-16"
            >

              <div
                className="
                absolute
                left-0
                top-2
                w-10
                h-10
                rounded-full
                bg-violet-600
                shadow-[0_0_20px_rgba(139,92,246,0.7)]
                flex
                items-center
                justify-center
                "
              >
                <Briefcase size={18} />
              </div>

              <div
                className={`
                bg-white/5
                backdrop-blur-xl
                border
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500/40
                hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
                ${
                  index === 0
                    ? "border-violet-500/20 shadow-[0_0_40px_rgba(139,92,246,0.12)]"
                    : "border-white/10"
                }
                `}
              >

                <div className="flex flex-wrap items-center gap-3 mb-4">

                  <Calendar
                    size={16}
                    className="text-violet-400"
                  />

                  <span className="text-slate-400 text-sm">
                    {exp.period}
                  </span>

                </div>

                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <div className="flex flex-wrap items-center gap-3 mt-2">

                  <p className="text-violet-400">
                    {exp.company}
                  </p>

                  {index === 0 && (
                    <span
                      className="
                      text-xs
                      px-3
                      py-1
                      rounded-full
                      bg-violet-500/20
                      text-violet-300
                      border
                      border-violet-500/20
                      "
                    >
                     Present
                    </span>
                  )}

                </div>

                <p className="text-slate-400 mt-5 leading-8">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {exp.highlights.map((item) => (
                    <span
                      key={item}
                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-sm
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </div>
  </section>
</SectionWrapper>
);
}
