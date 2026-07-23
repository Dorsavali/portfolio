import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import SkillIcon from "./SkillIcon";
import { getSkills } from "../../../services/Skills";

export default function SkillsOrbit() {
  const {
    data: skills = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: getSkills,
  });

  if (isLoading) {
    return (
      <div className="relative mx-auto flex aspect-square w-full max-w-[540px] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="relative mx-auto flex aspect-square w-full max-w-[540px] items-center justify-center">
        <p className="text-sm text-text-secondary">Skills could not be loaded.</p>
      </div>
    );
  }

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      <motion.div animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.65, 0.35] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-[18%] rounded-full bg-primary/15 blur-[75px]" />

      <div className="absolute inset-[12%] rounded-full border border-dashed border-primary/20" />
      <div className="absolute inset-[26%] rounded-full border border-dashed border-primary/15" />

      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary/20 bg-white/90 backdrop-blur-md sm:h-40 sm:w-40">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-primary/40" />
          <span className="h-3 w-3 rounded-full bg-primary/70" />
          <span className="h-2 w-2 rounded-full bg-primary/40" />
        </div>

        <p className="mt-3 text-sm font-medium text-text-secondary">My Tech</p>
        <p className="text-xl font-bold text-primary sm:text-2xl">Stack</p>
      </motion.div>

      {skills.map((skill) => (
        <SkillIcon key={skill.id} name={skill.name} icon={skill.icon} className={skill.className} delay={skill.delay} duration={skill.duration} />
      ))}
    </div>
  );
}