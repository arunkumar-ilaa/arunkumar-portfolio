import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">


      {/* Global Background Effects */}

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Top Right Glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-violet-600/15 blur-[180px] rounded-full"/>

        {/* Middle Left Glow */}
        <div
          className="absolute top-[35%] left-[-200px] w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full"/>

        {/* Bottom Right Glow */}
        <div  className="absolute  bottom-0 right-[-150px] w-[600px] h-[600px] bg-fuchsia-600/10 blur-[180px] rounded-full "/>

      </div>


      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <Tools />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;