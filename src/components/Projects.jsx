import { Factory, LayoutDashboard, Monitor, ScanLine, Heart  } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    image: "/nbc.png",
    icon: Factory,
    title: "Industrial IoT Condition Monitoring Platform",
    category: "Industrial IoT Platform",
    description:
      "Designed a Condition Based Monitoring (CBM) platform for railway locomotives, enabling real-time monitoring of vibration data, GPS tracking, alarms, analytics, and predictive maintenance workflows.",
    tags: [
      "Industrial IoT",
      "Condition Monitoring",
      "GPS Tracking",
      "Predictive Maintenance",
      "Dashboard UX",
    ],

    domain: "Industrial IoT",
    contribution:"Information Architecture • Dashboard UX • Data Visualization"
  },

  {
    image: "/welspun.png",
    icon: LayoutDashboard,
    title: "Manufacturing Planning & Traceability Platform",
    category: "Enterprise Manufacturing Platform",
    description:
      "Designed an enterprise platform supporting enquiry management, production planning, execution workflows, traceability, production monitoring, and OEE dashboards.",
    tags: [
      "Production Planning",
      "Traceability",
      "OEE Dashboard",
      "Manufacturing",
    ],
    domain: "Enterprise Manufacturing",
    contribution:"User Flows • Information Architecture • Dashboard Design"
  },

  {
    image: "/axium.png",
    icon: LayoutDashboard,
    title: "Mold Lifecycle & Asset Management Platform",
    category: "Enterprise Asset Management Platform",
    description:
      "Designed a mold lifecycle and asset management platform supporting traceability, movement tracking, inventory monitoring, spare parts management, and reporting.",
    tags: ["Asset Management", "Traceability", "Inventory", "Enterprise UX"],
    domain: "Enterprise Asset Management",
    contribution:"Workflow Design • Dashboard UX • Design System",
    caseStudy:  "https://www.behance.net/gallery/243648545/Mold-Traceability-Dashboard",
  },

  /*{
    icon: LayoutDashboard,
    title: "Blue Star Manufacturing Operations Platform",
    category: "Enterprise Application",
    description:
      "Designed operational dashboards and monitoring workflows that improved production visibility and decision-making across manufacturing environments.",
    tags: ["Operations", "Dashboard UX", "Enterprise SaaS"],
    domain: "Manufacturing",
    
  },

  {
    icon: Monitor,
    title: "Factory TV Operational Dashboard",
    category: "Industrial Dashboard",
    description:
      "Designed large-screen production dashboards optimized for KPI visibility, production tracking, and shop-floor awareness.",
    tags: ["Factory TV", "KPI Dashboard", "Industrial UX"],
    domain: "Industrial UX",
  },*/
  {
  icon: Heart ,
  title: "Wellness Service Management App",
  category: "Mobile Application",
  description:
    "Designed an end-to-end mobile application for wellness and salon businesses, enabling appointment scheduling, service catalog management, customer interactions, and operational workflows.",
  tags: [
    "Mobile UX",
    "App Design",
    "Appointment Booking",
    "Wellness",
  ],
  domain: "Consumer Application",
  caseStudy:
    "https://www.behance.net/gallery/243697761/Wellness-Service-App",
},
];

export default function Projects() {
 const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <SectionWrapper>
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="mb-16">
            <p className="text-violet-400 uppercase tracking-widest text-sm">
              FEATURED WORK
            </p>

            <h2 className="text-5xl font-bold mt-3">
              Selected Enterprise Case Studies
            </h2>

            <div className="mt-4 w-16 h-[2px] bg-violet-500 rounded-full" />

            <p className="text-slate-400 mt-5 max-w-3xl text-lg">
              A selection of enterprise platforms, manufacturing applications,
              dashboards and industrial experiences designed for large-scale
              organizations.
            </p>
          </div>

          {/* Featured NBC Project */}

        <div className="space-y-12 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="
              group
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
                  Featured Case Study
                </span>

                <span className="text-violet-400 text-sm">
                  0{index + 1}
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-10 items-center">

                <div>

                  <p className="text-violet-400 text-sm">
                    {project.category}
                  </p>

                  <h3 className="text-4xl font-bold mt-3 leading-tight">
                    {project.title}
                  </h3>

                  {index === 0 && (
                    <p className="text-slate-500 mt-3 text-sm">
                      20+ Screens • Enterprise Dashboard • Real-Time Monitoring
                    </p>
                  )}

                  {index === 1 && (
                    <p className="text-slate-500 mt-3 text-sm">
                      30+ Screens • Production Planning • OEE Monitoring
                    </p>
                  )}

                  {index === 2 && (
                    <p className="text-slate-500 mt-3 text-sm">
                      Asset Tracking • Lifecycle Management • Reporting
                    </p>
                  )}

                  <p className="text-slate-400 mt-6 leading-8">
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

                  {index === 0 && (
                    <a
                      href="https://www.behance.net/gallery/244077447/Industrial-IoT-Locomotive-CBM-Dashboard"
                      target="_blank"
                      rel="noreferrer"
                      className="
                      inline-flex
                      items-center
                      gap-2
                      mt-6
                      px-5
                      py-3
                      rounded-xl
                      bg-violet-600
                      hover:bg-violet-700
                      transition
                      "
                    >
                      View Full Case Study
                    </a>
                  )}
                  {index === 1 && (
                  <a
                    href="https://www.behance.net/gallery/243636243/Marketing-Traceability-Enterprise-Dashboard"
                    target="_blank"
                    rel="noreferrer"
                    className="
                    inline-flex
                    items-center
                    gap-2
                    mt-6
                    px-5
                    py-3
                    rounded-xl
                    bg-violet-600
                    hover:bg-violet-700
                    transition
                    "
                  >
                    View Case Study →
                  </a>
                )}

                {index === 2 && (
                  <a
                    href="https://www.behance.net/gallery/243648545/Mold-Traceability-Dashboard"
                    target="_blank"
                    rel="noreferrer"
                    className="
                    inline-flex
                    items-center
                    gap-2
                    mt-6
                    px-5
                    py-3
                    rounded-xl
                    bg-violet-600
                    hover:bg-violet-700
                    transition
                    "
                  >
                    View Case Study →
                  </a>
                )}

                </div>

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
                    src={project.image}
                    alt={project.title}
                    className="
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    "
                  />
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-white/10">

                <div className="grid md:grid-cols-3 gap-6">

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
                      {project.domain}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500 text-sm">
                      Contribution
                    </p>

                    <p className="font-medium mt-2">
                    {project.contribution}
                  </p>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

        <div className="mb-12 mt-20">
          <p className="text-violet-400 uppercase tracking-widest text-sm">
            SELECTED PROJECTS
          </p>

          <h3 className="text-4xl font-bold mt-3">
            More Enterprise & Mobile Experiences
          </h3>

          <p className="text-slate-400 mt-4 max-w-3xl">
           Additional enterprise and mobile application experiences across asset management and consumer products.
          </p>
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
                      <Icon size={28} className="text-violet-400" />
                    </div>

                    <span className="text-violet-400 text-sm">
                      0{index + 3}
                    </span>
                  </div>

                  <p className="text-violet-400 text-sm mt-8">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold mt-3 leading-tight">
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

                  {project.caseStudy && (
                    <a
                      href={project.caseStudy}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      inline-flex
                      items-center
                      gap-2
                      mt-6
                      px-5
                      py-3
                      rounded-xl
                      bg-violet-600
                      hover:bg-violet-700
                      transition
                      "
                    >
                      View Case Study →
                    </a>
                  )}
                  

                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between">
                    <div>
                      <p className="text-slate-500 text-sm">Role</p>

                      <p className="font-medium mt-1">UX/UI Designer</p>
                    </div>

                    <div>
                      <p className="text-slate-500 text-sm">Domain</p>

                      <p className="font-medium mt-1">{project.domain}</p>
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