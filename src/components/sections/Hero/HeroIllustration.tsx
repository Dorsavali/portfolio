import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";
import HeroGlow from "./HeroGlow";

function HeroIllustration() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.85, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }} className="relative flex w-full max-w-[520px] items-center justify-center lg:max-w-[620px]">
      <HeroGlow />

      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative z-20 w-[78%] sm:w-[72%] lg:w-[75%]">
        <img src="/icons/hero/dorsa.png" alt="Dorsa working with a laptop" className="h-auto w-full object-contain drop-shadow-[0_28px_30px_rgba(82,45,160,0.18)]" />
      </motion.div>

      <FloatingIcons />
    </motion.div>
  );
}

export default HeroIllustration;