import { motion } from "framer-motion";
import type { Service } from "../../../types/Service";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex w-full flex-col rounded-[16px] border border-primary/10 bg-white p-6 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
    >
      <div className="flex h-50 items-center justify-center overflow-hidden rounded-[22px] bg-primary/[0.06] p-6">
        <img
          src={service.illustration}
          alt={`${service.title} illustration`}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col pt-6 font-[geo]">
        <h3 className="text-xl font-bold font-[geo] tracking-tight text-text-primary">
          {service.title}
        </h3>

        <p className="mt-3 line-clamp-2 font-[geo] text-[14px] text-base leading-7 text-text-secondary">
          {service.description}
        </p>
      </div>
    </motion.article>
  );
}
