import { motion } from "framer-motion";

interface SkillIconProps {
  name: string;
  icon: string;
  className: string;
  delay?: number;
  duration?: number;
}

export default function SkillIcon({ name, icon, className, delay = 0, duration = 4 }: SkillIconProps) {
  return (
    <motion.div animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }} transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.12 }} className={`absolute z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl border border-border/70 bg-white/90 backdrop-blur-md transition-colors duration-500 hover:border-primary/30 sm:h-[72px] sm:w-[72px] ${className}`}>
      <img src={icon} alt={name} className="h-8 w-8 object-contain sm:h-9 sm:w-9" />

      <span className="pointer-events-none absolute -bottom-8 whitespace-nowrap rounded-lg bg-text-primary px-2 py-1 text-[10px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {name}
      </span>
    </motion.div>
  );
}