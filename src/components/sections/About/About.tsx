import { motion } from "framer-motion";
import AboutContent from "./AboutContent";
import AboutIllustration from "./AboutIllustration";
import Container from "@/components/common/Container";

export default function About() {
  return (
<Container>
  <section id="about" className="relative overflow-hidden py-20 sm:py-24 lg:py-0 lg:h-[clamp(650px,75vh,760px)]">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full  blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full  blur-[120px]" />

      <div className="relative  flex  flex-col items-center  lg:flex-row lg:justify-between lg:gap-16 lg:px-10">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="order-1 w-full lg:order-2 lg:w-[48%]">
          <AboutContent />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="order-2 w-full lg:order-1   lg:w-[52%]">
          <AboutIllustration />
        </motion.div>
      </div>
    </section>
</Container>
  );
}