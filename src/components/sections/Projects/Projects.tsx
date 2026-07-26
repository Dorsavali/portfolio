import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./ProjectCard";
import { getProjects } from "../../../services/Project";

function ProjectsSkeleton() {
  return (
    <div className="mt-20 space-y-24 lg:mt-5 lg:space-y-36">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="grid animate-pulse items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div className="aspect-[16/10] rounded-[28px] bg-surface-secondary" />

          <div>
            <div className="h-4 w-36 rounded-full bg-surface-secondary" />
            <div className="mt-6 h-10 w-3/4 rounded-lg bg-surface-secondary" />
            <div className="mt-6 h-4 w-full rounded bg-surface-secondary" />
            <div className="mt-3 h-4 w-5/6 rounded bg-surface-secondary" />
            <div className="mt-3 h-4 w-2/3 rounded bg-surface-secondary" />

            <div className="mt-6 flex gap-3">
              <div className="h-9 w-24 rounded-full bg-surface-secondary" />
              <div className="h-9 w-24 rounded-full bg-surface-secondary" />
              <div className="h-9 w-24 rounded-full bg-surface-secondary" />
            </div>

            <div className="mt-8 flex gap-4">
              <div className="h-12 w-36 rounded-2xl bg-surface-secondary" />
              <div className="h-12 w-36 rounded-2xl bg-surface-secondary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  const {
    data: projects = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const featuredProjects = projects.filter(
    (project) => project.featured !== false,
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-5 sm:py-24 lg:py-5"
    >
      <div className="pointer-events-none absolute left-[-200px] top-[25%] h-[480px] w-[480px] rounded-full bg-primary/[0.04] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-220px] bottom-[10%] h-[460px] w-[460px] rounded-full bg-primary/[0.04] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-primary" />
            <span className="font-medium text-primary">Selected Projects</span>
            <span className="h-[2px] w-10 bg-primary" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            A selection of projects I've
            <span className="text-primary"> designed and developed.</span>
          </h2>
        </motion.div>

        {isLoading && <ProjectsSkeleton />}

        {isError && (
          <div className="mt-20 rounded-3xl border border-border bg-surface-secondary/50 px-6 py-12 text-center">
            <p className="font-medium text-text-primary">
              Projects could not be loaded.
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              Please check your API or db.json file.
            </p>
          </div>
        )}

        {!isLoading && !isError && featuredProjects.length === 0 && (
          <div className="mt-20 rounded-3xl border border-border bg-surface-secondary/50 px-6 py-12 text-center">
            <p className="text-text-secondary">
              No projects are available yet.
            </p>
          </div>
        )}

        {!isLoading && !isError && featuredProjects.length > 0 && (
          <div className="mt-20 space-y-24  lg:space-y-36">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
