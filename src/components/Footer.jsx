import { FaLinkedinIn, FaBehance, FaEnvelope } from "react-icons/fa";

export default function Footer() {
return ( <footer className="border-t border-white/10 py-12">

  <div className="max-w-7xl mx-auto px-6">

    <div className="flex flex-col items-center text-center">

      <h3 className="text-2xl tracking-[0.1em] font-semibold">
        Arunkumar Vadivel
      </h3>

      <p className="text-slate-400 mt-2 tracking-[0.5px]">
        Senior UX/UI Designer • Enterprise Applications • Product Design
      </p>

      <div className="flex items-center gap-8 mt-6">

        <a
          href="https://www.linkedin.com/in/arunkumar-vadivel-7a440a87/"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-violet-400 transition"
        >
          <FaLinkedinIn size={20} />
        </a>

        <a
          href="https://www.behance.net/arunkumar411"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-violet-400 transition"
        >
          <FaBehance size={20} />
        </a>

        <a
          href="mailto:arunkumarvbe@gmail.com"
          className="text-slate-400 hover:text-violet-400 transition"
        >
          <FaEnvelope size={20} />
        </a>

      </div>

      <div className="w-full h-px bg-white/10 my-8" />

      <p className="text-slate-500 text-sm">
        © 2026 Arunkumar Vadivel. All rights reserved.
      </p>

    </div>

  </div>

</footer>

);
}
