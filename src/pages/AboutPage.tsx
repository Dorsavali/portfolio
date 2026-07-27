import { motion } from "framer-motion";
import {Download } from "lucide-react";
import Button from "../components/common/Button";

function About() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Dorsa-Vali-CV.pdf";
    link.download = "Dorsa-Vali-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-background px-5 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">

        <div className="grid items-center lg:gap-12 lg:grid-cols-[320px_1fr]">
          <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="mx-auto w-full max-w-[320px]">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
              <img src="/images/logo.png" alt="Dorsa Vali" className="lg:aspect-[4/5] w-full rounded-2xl object-cover" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="font-[geo] text-sm font-medium text-primary">About Me</span>

            <h1 className="mt-3 font-[geo] lg:text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
              Frontend developer focused on simple and modern experiences.
            </h1>

            <div className="mt-6 space-y-4 font-[geo] text-[12px] lg:text-sm leading-7 text-text-secondary sm:text-base">
              <p>
                I'm Dorsa, a frontend developer who enjoys building responsive and user-friendly web interfaces.
              </p>

              <p>
                I work with React, TypeScript and Tailwind CSS to turn designs into clean and functional websites.
              </p>

              <p>
                I care about simple layouts, reusable components and smooth user experiences across different screen sizes.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="block font-[geo] text-xl lg:text-2xl font-bold text-primary">8+</span>
                <span className="mt-1 block font-[geo] text-xs text-text-secondary">Completed Projects</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="block font-[geo] text-xl lg:text-2xl font-bold text-primary">2+</span>
                <span className="mt-1 block font-[geo] text-xs text-text-secondary">Years Experience</span>
              </div>
            </div>

            <Button onClick={handleDownloadCV} className="mt-8 inline-flex items-center justify-center gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default About;