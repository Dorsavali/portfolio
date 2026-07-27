import { motion } from "framer-motion";
import { projects } from "../../../data/Projects";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";



export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured !== false,
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-8 sm:py-24 lg:py-12 relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-5  lg:gap-0 lg:px-10"
    >
    
      <div className="relative mx-auto max-w-7xl lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-primary" />
            <span className="font-medium text-[14px] text-primary font-[geo]">
              Selected Projects
            </span>
            <span className="h-[2px] w-10 bg-primary" />
          </div>

          <h2 className="text-xl font-bold font-[geo] leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            A selection of projects I've
            <span className="text-primary font-[geo]">
              {" "}
              designed and developed.
            </span>
          </h2>
        </motion.div>

        <div className="mt-10 lg:mt-20 space-y-24  lg:space-y-36">
          {featuredProjects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
      <div className=" flex justify-center">
        <Link to="/projects">
          <Button variant="primary">View All Projects</Button>
        </Link>
      </div>
    </section>
  );
}
