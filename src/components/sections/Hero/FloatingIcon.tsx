import { motion } from "framer-motion";

interface FloatingIconProps {
  src: string;
  alt: string;
  className: string;
  duration?: number;
  delay?: number;
  rotate?: boolean;
}

function FloatingIcon({ src, alt, className, duration = 4, delay = 0, rotate = false }: FloatingIconProps) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, y: [0, -10, 0], rotate: rotate ? [0, 8, -8, 0] : 0 }} transition={{ opacity: { delay, duration: 0.4 }, scale: { delay, duration: 0.4 }, y: { delay, duration, repeat: Infinity, ease: "easeInOut" }, rotate: { delay, duration: duration + 2, repeat: Infinity, ease: "easeInOut" } }} whileHover={{ scale: 1.18, rotate: 8 }} className={`absolute z-30 flex items-center justify-center rounded-2xl border border-white/70 bg-white/80 p-2.5 shadow-[0_12px_35px_rgba(70,40,140,0.15)] backdrop-blur-xl sm:p-3 ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </motion.div>
  );
}

export default FloatingIcon;