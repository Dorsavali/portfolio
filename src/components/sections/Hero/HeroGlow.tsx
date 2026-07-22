import { motion } from "framer-motion";

function HeroGlow() {
  return (
    <>
      <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.55, 0.35] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute h-[75%] w-[75%] rounded-full bg-primary/30 blur-[90px]" />

      <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute h-[82%] w-[82%] rounded-full border border-dashed border-primary/15" />

      <div className="absolute bottom-[8%] h-[15%] w-[65%] rounded-[50%] bg-primary/15 blur-2xl" />
    </>
  );
}

export default HeroGlow;