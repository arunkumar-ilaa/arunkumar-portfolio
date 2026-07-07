import {
  Search,
  Workflow,
  PencilRuler,
  MousePointerClick,
  Palette,
  Rocket,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
const steps = [
  {
    icon: Search,
    title: "Requirement Analysis",
    desc: "Understand business objectives, operational challenges, stakeholder requirements, and user needs through workshops and requirement analysis.",
  },

  {
    icon: Workflow,
    title: "Workflow Mapping",
    desc: "Define user journeys, process flows, information architecture, and system interactions to simplify complex enterprise workflows.",
  },

  {
    icon: PencilRuler,
    title: "Wireframing",
    desc: "Create low-fidelity wireframes and screen structures to validate layouts, navigation patterns, and user interactions.",
  },

  {
    icon: MousePointerClick,
    title: "Prototyping",
    desc: "Build interactive prototypes to validate concepts, gather stakeholder feedback, and refine user experiences before development.",
  },

  {
    icon: Palette,
    title: "UI Design",
    desc: "Design scalable interfaces, dashboards, and design systems with a focus on usability, consistency, and operational efficiency.",
  },

  {
    icon: Rocket,
    title: "Design Delivery",
    desc: "Collaborate with developers, support implementation, review delivered screens, and ensure design quality throughout the release cycle.",
  },
];

export default function Process() {
  return (
    <SectionWrapper>
    <section  id="process"  className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 text-center">

          <p className="text-violet-400 uppercase tracking-[0.3em] text-sm">
            PROCESS
          </p>

          <h2 className="text-5xl font-bold mt-4">
            My Design Process
          </h2>
          
          <p className="text-slate-400 mt-5 max-w-3xl mx-auto text-lg leading-8">
           A collaborative design process focused on transforming complex business requirements into intuitive, scalable, and user-centered digital products.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="
                group
                relative
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
                min-h-[260px]
                hover:border-violet-500/40
                hover:-translate-y-1
                 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
                transition-all
                duration-300
                "
              >

                <div
                  className="
                  absolute
                  top-5
                  right-5
                  text-slate-600
                  font-bold
                  text-3xl
                  "
                >
                  0{index + 1}
                </div>

                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-violet-500/10
                  flex
                  items-center
                  justify-center
                  mb-6
                  "
                >
                  <Icon
                    size={28}
                    className="text-violet-400"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {step.title}
                </h3>

                <p className="text-slate-400 leading-8">
                  {step.desc}
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