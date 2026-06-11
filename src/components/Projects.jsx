import {
  Factory,
  LayoutDashboard,
  Monitor,
  ScanLine,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    image: "/nbcmock.png",
    icon: Factory,
    title: "NBC Manufacturing Intelligence Platform",
    category: "Enterprise SaaS",
    description:
      "Designed production monitoring, operational visibility and manufacturing intelligence dashboards supporting railway component manufacturing workflows and data-driven decision making.",
    tags: [
      "Dashboard UX",
      "Manufacturing",
      "Data Visualization",
    ],
    domain: "Manufacturing",
  },

  {
    icon: LayoutDashboard,
    title: "Welspun Production Traceability Platform",
    category: "Manufacturing Platform",
    description:
      "Designed end-to-end production traceability workflows covering planning, execution, tracking and operational visibility across manufacturing processes.",
    tags: [
      "Traceability",
      "Workflow UX",
      "Manufacturing",
    ],
    domain: "Manufacturing",
  },

  {
    icon: LayoutDashboard,
    title: "Blue Star Manufacturing Operations Platform",
    category: "Enterprise Application",
    description:
      "Designed operational workflows, monitoring dashboards and manufacturing interfaces supporting production management and performance visibility.",
    tags: [
      "Operations",
      "Dashboard UX",
      "Enterprise SaaS",
    ],
    domain: "Manufacturing",
  },

  {
    icon: Monitor,
    title: "Factory TV Operational Dashboard",
    category: "Industrial Dashboard",
    description:
      "Designed large-screen KPI dashboards optimized for production-floor visibility, real-time monitoring and operational awareness.",
    tags: [
      "Factory TV",
      "KPI Dashboard",
      "Industrial UX",
    ],
    domain: "Industrial UX",
  },

  {
    icon: ScanLine,
    title: "Industrial AR Monitoring Experience",
    category: "AR Interface",
    description:
      "Designed AR interfaces enabling visualization of operational data, monitoring insights and contextual information for industrial users.",
    tags: [
      "AR",
      "Industrial UX",
      "Visualization",
    ],
    domain: "AR Experience",
  },
];

export default function Projects() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <SectionWrapper>
      <section
        id="projects"
        className="py-32"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="mb-16">

            <p className="text-violet-400 uppercase tracking-widest text-sm">
              FEATURED WORK
            </p>

            <h2 className="text-5xl font-bold mt-3">
              Enterprise Projects
            </h2>

            <div className="mt-4 w-16 h-[2px] bg-violet-500 rounded-full" />

            <p className="text-slate-400 mt-5 max-w-3xl text-lg">
              A selection of enterprise platforms, manufacturing
              applications, dashboards and industrial experiences
              designed for large-scale organizations.
            </p>

          </div>

          {/* Featured NBC Project */}

          <div
            className="
            group
            mb-10
            bg-white/5
            backdrop-blur-xl
            border
            border-violet-500/20
            rounded-3xl
            p-8
            lg:p-10
            hover:border-violet-500/40
            hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]
            transition-all
            duration-500
            "
          >

            <div className="flex items-center justify-between mb-6">

              <span
                className="
                px-3
                py-1
                rounded-full
                text-xs
                bg-violet-500/10
                border
                border-violet-500/20
                text-violet-300
                "
              >
                Featured Project
              </span>

              <span className="text-violet-400 text-sm">
                01
              </span>

            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* Left Content */}

              <div>

                <p className="text-violet-400 text-sm">
                  {featuredProject.category}
                </p>

                <h3 className="text-4xl font-bold mt-3 leading-tight">
                  {featuredProject.title}
                </h3>

                <p className="text-slate-400 mt-6 leading-8">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                      px-3 py-1
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-sm
                      "
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex gap-12">

                  <div>
                    <p className="text-slate-500 text-sm">
                      Role
                    </p>

                    <p className="font-medium mt-2">
                      UX/UI Designer
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500 text-sm">
                      Domain
                    </p>

                    <p className="font-medium mt-2">
                      {featuredProject.domain}
                    </p>
                  </div>

                </div>

              </div>

              {/* Right Image */}

              <div
                className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-slate-900/50
                "
              >
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-101
                  "
                />
              </div>

            </div>

          </div>

          {/* Other Projects */}

          <div className="grid lg:grid-cols-2 gap-8">

            {otherProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <div
                  key={index}
                  className="
                  group
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  hover:border-violet-500/40
                  hover:-translate-y-2
                  hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
                  transition-all
                  duration-300
                  "
                >

                  <div className="flex justify-between items-start">

                    <div
                      className="
                      w-14 h-14
                      rounded-2xl
                      bg-violet-500/10
                      flex items-center justify-center
                      "
                    >
                      <Icon
                        size={28}
                        className="text-violet-400"
                      />
                    </div>

                    <span className="text-violet-400 text-sm">
                      0{index + 2}
                    </span>

                  </div>

                  <p className="text-violet-400 text-sm mt-8">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-semibold mt-3 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mt-5 leading-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">

                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                        px-3 py-1
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-sm
                        "
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between">

                    <div>
                      <p className="text-slate-500 text-sm">
                        Role
                      </p>

                      <p className="font-medium mt-1">
                        UX/UI Designer
                      </p>
                    </div>

                    <div>
                      <p className="text-slate-500 text-sm">
                        Domain
                      </p>

                      <p className="font-medium mt-1">
                        {project.domain}
                      </p>
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}