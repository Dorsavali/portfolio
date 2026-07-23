import About from "@/components/sections/About/About";
import Hero from "../components/sections/Hero";
import Skills from "@/components/sections/Skills";

function HomePage() {
  return (
   <main className="bg-white">
      <div className="relative overflow-hidden ">
        <Hero />
        <About />
        <Skills />
      </div>
    </main>
  );
}


export default HomePage;