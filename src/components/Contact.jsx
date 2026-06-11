import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper>
    <section
      id="contact"
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div
          className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-12
          lg:p-16
          "
        >

          

          <div className="relative z-10">

            <p className="text-violet-400 uppercase tracking-[0.3em] text-sm">
              CONTACT
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
              Let's Build Better
              <br />
              Digital Experiences
            </h2>

            <p className="text-slate-400 text-lg mt-6 max-w-3xl leading-8">
              I'm open to UX/UI Design, Product Design, Enterprise SaaS,
              Dashboard UX and Digital Product opportunities.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <div
                className="
                bg-white/5
                border
                border-white/10
                rounded-2xl
                p-6
                "
              >
                <Mail className="text-violet-400 mb-4" />

                <p className="text-slate-500 text-sm">
                  Email
                </p>

                <p className="mt-2 font-medium">
                  arunkumarvbe@gmail.com
                </p>
              </div>

              <div
                className="
                bg-white/5
                border
                border-white/10
                rounded-2xl
                p-6
                "
              >
                <Phone className="text-violet-400 mb-4" />

                <p className="text-slate-500 text-sm">
                  Phone
                </p>

                <p className="mt-2 font-medium">
                  +91 95665 80806
                </p>
              </div>

              <div
                className="
                bg-white/5
                border
                border-white/10
                rounded-2xl
                p-6
                "
              >
                <MapPin className="text-violet-400 mb-4" />

                <p className="text-slate-500 text-sm">
                  Location
                </p>

                <p className="mt-2 font-medium">
                  Tiruppur, Tamil Nadu
                </p>
              </div>

            </div>

            <div className="flex flex-wrap gap-4 mt-12">

              <a
                href="mailto:arunkumarvbe@gmail.com"
                className="
                px-6
                py-3
                rounded-xl
                bg-violet-600
                hover:bg-violet-700
                transition
                font-medium
                "
              >
                Contact Me
              </a>

              <a
                href="https://www.linkedin.com/in/arunkumar-vadivel-7a440a87/"
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-3
                px-6
                py-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                "
              >
                <FaLinkedinIn />
                LinkedIn
              </a>

              <a
                href="https://www.behance.net/arunkumar411"
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-3
                px-6
                py-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                "
              >
                <FaBehance />
                Behance
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                px-6
                py-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                "
              >
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
   </SectionWrapper>
  );
}