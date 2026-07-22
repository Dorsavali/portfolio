import About from "@/components/sections/About/About";
import Hero from "../components/sections/Hero";

function HomePage() {
  return (
   <main className="bg-white">
      <div className="relative overflow-hidden ">
        <Hero />
        <About />
      </div>
    </main>
  );
}


export default HomePage;