import { Briefcase, Calendar } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    period: "Dec 2022 - Present",
    role: "UX/UI Designer",
    company: "Maxbyte Technologies",
    description:
      "Designing Enterprise SaaS platforms, Manufacturing Applications, Factory TV Dashboards and AR Interfaces for industrial organizations.",
    highlights: [
      "NBC",
      "Blue Star",
      "Welspun",
      "GE Aerospace",
      "Factory TV Dashboards",
      "AR Interfaces",
      "Design Systems",
      "AI-Assisted Design",
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
  return (
    <SectionWrapper>
    <section
      id="experience"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">

          <p className="text-violet-400 uppercase tracking-widest text-sm">
            EXPERIENCE
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Professional Journey
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl text-lg">
            Building digital experiences across enterprise software,
            manufacturing platforms, dashboards and e-commerce solutions.
          </p>

        </div>

        <div className="relative">

          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10"></div>

          <div className="space-y-12">

            {experiences.map((exp, index) => (
              <div
                key={index}
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
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Briefcase size={18} />
                </div>

                <div
                  className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  "
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

                  <p className="text-violet-400 mt-1">
                    {exp.company}
                  </p>

                  <p className="text-slate-400 mt-5 leading-8">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">

                    {exp.highlights.map((item) => (
                      <span
                        key={item}
                        className="
                        px-3 py-1
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

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
    </SectionWrapper>
  );
}