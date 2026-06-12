import SectionWrapper from "./SectionWrapper";

export default function Tools() {
  const tools = [
    {
      name: "Figma",
      desc: "UI Design & Prototyping",
      icon: "/figma.svg",
    },
    {
      name: "Photoshop",
      desc: "Visual Design & Editing",
      icon: "/photoshop.svg",
    },
    {
      name: "ChatGPT",
  desc: "Research & Ideation",
      icon: "/chat-gpt.svg",
    },
    {
      name: "Claude",
   desc: "UX Strategy & Analysis",
      icon: "/claude.svg",
    },
   {
  name: "Miro",
  desc: "Workshops & User Flows",
  icon: "/miro.svg",
  }
  ];

  return (
    <SectionWrapper>
    <section id="tools" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-violet-400 uppercase tracking-widest text-sm">
          DESIGN TOOLKIT
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Design & AI Toolkit
        </h2>

        <p className="text-slate-400 mt-5 max-w-3xl text-lg">
          Tools and AI-powered workflows I use to design, prototype, collaborate, and accelerate product delivery.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-14">

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

              <p className="text-slate-500 text-sm mt-2">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 max-w-xl mx-auto">

  <p className="text-slate-500 text-sm uppercase tracking-widest mb-5 text-center">
    Frontend Understanding
  </p>

  <div
    className="
    bg-white/5
    border
    border-white/10
    rounded-full
    backdrop-blur-xl
    p-4
    "
  >
    <div className="flex flex-wrap justify-center gap-8 text-slate-300">

      <span>{"< HTML />"}</span>

      <span>{"{ CSS }"}</span>

      <span>⚛ React.js</span>

      <span>▲ Tailwind.css</span>

    </div>

  </div>

</div>

    </section>
    </SectionWrapper>
  );
}