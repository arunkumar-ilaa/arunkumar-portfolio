import SectionWrapper from "./SectionWrapper";

export default function Tools() {
  const tools = [
    {
      name: "Figma",
      desc: "UI Design • Wireframes • Prototypes",
      icon: "/figma.svg",
    },
    {
      name: "Photoshop",
      desc: "UI Assets • Image Editing",
      icon: "/photoshop.svg",
    },
    {
      name: "Miro",
      desc: "User Flows • Journey Mapping",
      icon: "/miro.svg",
    },
    {
      name: "ChatGPT",
      desc: "UX Research • Content • Ideation",
      icon: "/chat-gpt.svg",
    },
  ];

  const deliverables = [
  "Wireframes",
  "Dashboard UI",
  "Information Architecture",
  "Interactive Prototypes",
  "High-Fidelity UI",
  "Design Systems",
  "Developer Handoff",
];

  return (
    <SectionWrapper>
      <section id="tools" className="py-32">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-violet-400 uppercase tracking-widest text-sm">
            TOOLS & TECHNOLOGIES
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Design Workflow
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl text-lg leading-8">
            I leverage industry-standard design, collaboration, AI, and
            front-end technologies to create intuitive user experiences and
            collaborate effectively with cross-functional product teams.
          </p>

          {/* Design Tools */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            {tools.map((tool) => (
              <div
                key={tool.name}
                className="
                group
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-6
                text-center
                hover:-translate-y-2
                hover:border-violet-500/40
                hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
                transition-all
                duration-300
                "
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="
                  w-12
                  h-12
                  mx-auto
                  mb-5
                  group-hover:scale-110
                  transition
                  "
                />

                <h3 className="font-semibold">
                  {tool.name}
                </h3>

                <p className="text-slate-500 text-sm mt-2 leading-6">
                  {tool.desc}
                </p>
              </div>
            ))}

          </div>

          {/* Developer Collaboration */}

          <div className="mt-16 max-w-3xl mx-auto">

            <p className="text-slate-500 text-sm uppercase tracking-widest mb-5 text-center">
              Developer Collaboration
            </p>

            <div
              className="
              bg-white/5
              border
              border-white/10
              rounded-full
              backdrop-blur-xl
              p-6
              "
            >
              <div className="flex flex-wrap justify-center gap-6 text-slate-300">

                <span>{"< HTML5 />"}</span>

                <span>{"{ CSS3 }"}</span>

                <span>⚛ React (Basic)</span>

                <span>▲ Tailwind CSS</span>

              </div>

            </div>

          </div>

          {/* Design Deliverables */}

          <div className="mt-14">

            <p className="text-slate-500 text-sm uppercase tracking-widest mb-6 text-center">
              Design Deliverables
            </p>

            <div className="flex flex-wrap justify-center gap-3">

              {deliverables.map((item) => (
                <span
                  key={item}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  text-sm
                  text-slate-300
                  "
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}