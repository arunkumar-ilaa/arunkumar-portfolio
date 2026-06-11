import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const experiences = [
{
period: "Dec 2022 - Present",
role: "Senior UX/UI Designer",
company: "Maxbyte Technologies",
description:
"Designing Enterprise Applications, Manufacturing Platforms, Factory TV Dashboards and AR Experiences for global industrial organizations. Collaborating with cross-functional teams to transform complex operational workflows into intuitive digital products.",
highlights: [
"NBC",
"Blue Star",
"Welspun",
"GE Aerospace",
"Factory TV Dashboards",
"AR Experiences",
"Design Systems",
"AI-Assisted Design Workflows",
],
},

{
period: "Jun 2022 - Dec 2022",
role: "UI/UX Designer",
company: "Deziner's Knot",
description:
"Designed web and mobile applications with a focus on user journeys, wireframes, prototyping and UI design.",
highlights: [
"Wireframes",
"Prototypes",
"Mobile Apps",
"Web Applications",
],
},

{
period: "Mar 2017 - May 2022",
role: "Web Designer",
company: "The Chennai Silks",
description:
"Designed e-commerce pages, promotional campaigns and responsive experiences for one of South India's leading retail brands.",
highlights: [
"E-Commerce",
"Magento",
"Landing Pages",
"Responsive Design",
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
          Professional Journey
        </h2>
        <div className="mt-4 w-16 h-[2px] bg-violet-500 rounded-full" />
        <p className="text-slate-400 mt-5 max-w-3xl text-lg">
          Building digital experiences across enterprise software,
          manufacturing platforms, dashboards and e-commerce solutions.
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

                <h3 className="text-2xl font-semibold">
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
                      Current Role
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
