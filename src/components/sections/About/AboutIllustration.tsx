import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";

export default function AboutIllustration() {
  return (
    <div className="relative mx-auto aspect-[6/5] w-full max-w-[650px] hidden lg:flex">
      <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.45, 0.75, 0.45] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-[15%] rounded-full bg-primary/15 blur-[75px]" />

      <motion.img src="/images/about/about-girl.png" alt="Dorsa working at her development workspace" animate={{ y: [0, -7, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 h-full w-full object-contain " />

      <FloatingCard className="right-[1%] top-[14%] hidden sm:block" delay={0.7} duration={4.8} distance={10}>
        <div className="w-28 space-y-2">
          <div className="flex items-end gap-1">
            <span className="h-5 w-3 rounded-sm bg-primary/25" />
            <span className="h-8 w-3 rounded-sm bg-primary/45" />
            <span className="h-6 w-3 rounded-sm bg-primary/65" />
            <span className="h-10 w-3 rounded-sm bg-primary" />
          </div>

          <span className="block h-1.5 w-24 rounded-full bg-border" />
        </div>
      </FloatingCard>

      <FloatingCard className="bottom-[10%] right-[3%] hidden sm:block" delay={1.1} duration={4.5} distance={6}>
        <div className="w-32 space-y-2.5">
          {[80, 60, 90].map((width, index) => (
            <div key={width} className="flex items-center gap-2">
              <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + index * 0.15, type: "spring" }} className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100 text-[10px] font-bold text-green-600">
                ✓
              </motion.span>

              <span style={{ width: `${width}%` }} className="block h-1.5 rounded-full bg-primary/25" />
            </div>
          ))}
        </div>
      </FloatingCard>
    </div>
  );
}