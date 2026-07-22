import { motion } from "framer-motion";
import Button from "../../common/Button";

function HeroContent() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="z-10 flex w-full max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="mb-6 flex items-center gap-3">
        <span className="h-[2px] w-10 bg-primary" />
        <span className="font-medium text-primary font-[geo] text-[14px]">Hi, I'm Dorsa</span>
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="text-4xl font-bold leading-[1.15] tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl">
        I build modern
        <span className="block text-primary font-[geo]">web experiences.</span>
      </motion.h1>

      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }} className="mt-8 flex w-full flex-row  gap-3 sm:w-auto justify-center items-center font-[geo]">
        <Button onClick={() => scrollToSection("projects")} className=" w-[145px]  text-[12px]  sm:w-auto">
          View Projects
        </Button>

        <Button variant="outline" onClick={() => scrollToSection("contact")} className="w-[145px]  text-[12px]  sm:w-auto">
          Contact Me
        </Button>
      </motion.div>

      <motion.button type="button" onClick={() => scrollToSection("about")} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-12 hidden cursor-pointer items-center gap-3 text-sm font-medium text-text-secondary transition-colors hover:text-primary lg:flex">
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg">
          ↓
        </motion.span>
        Scroll down
      </motion.button>
    </motion.div>
  );
}

export default HeroContent;