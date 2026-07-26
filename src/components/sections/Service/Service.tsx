import { motion } from "framer-motion";
import { services } from "../../../data/Service";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="bg-background py-10 sm:py-24 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center font-[geo]"
        >
          <span className="text-sm font-medium font-[geo] uppercase tracking-[0.25em] text-primary">
            What I Do
          </span>

          <h2 className="mt-4 text-xl font-bold font-[geo] tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
            Services I Provide
          </h2>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-6 lg:mt-10 ">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}