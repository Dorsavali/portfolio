import About from "@/components/sections/About/About";
import Hero from "../components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact/Contact";

function HomePage() {
  return (
   <main className="bg-white">
      <div className="relative overflow-hidden ">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact/>
      </div>
    </main>
  );
}


export default HomePage;