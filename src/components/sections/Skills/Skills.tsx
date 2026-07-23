import { motion } from "framer-motion";
import SkillsContent from "./SkillsContent";
import SkillsOrbit from "./SkillsOrbit";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-primary py-10 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute left-[-180px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary blur-[110px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-20 lg:px-10">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="order-2 w-full lg:order-1 lg:w-[48%]">
          <SkillsContent />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="order-1 w-full lg:order-2 lg:w-[52%]">
          <SkillsOrbit />
        </motion.div>
      </div>
    </section>
  );
}