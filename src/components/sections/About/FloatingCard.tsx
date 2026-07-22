import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}

export default function FloatingCard({ children, className = "", delay = 0, duration = 4, distance = 8 }: FloatingCardProps) {
  return (
    <motion.div animate={{ y: [0, -distance, 0] }} transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }} className={`absolute z-20 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_12px_40px_rgba(79,54,180,0.12)] backdrop-blur-md ${className}`}>
      {children}
    </motion.div>
  );
}