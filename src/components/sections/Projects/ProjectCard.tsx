import { motion } from "framer-motion";
import type { Project } from "../../../types/Project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mb-15  grid items-center gap-10 lg:grid-cols-2"
    >
      <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
        <div className="group relative rounded-[28px] bg-primary/[0.06] p-3 sm:p-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_70px_rgba(30,25,60,0.12)]">
            <div className="flex h-11 items-center gap-2 border-b border-border bg-surface-secondary px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />

              <div className="mx-auto flex h-6 w-40 items-center justify-center rounded-md border border-border bg-white px-3 sm:w-52">
                <span className="max-w-full truncate text-[10px] text-text-secondary">
                  {project.demoUrl ?? project.githubUrl}
                </span>
              </div>
            </div>

            <div className="aspect-[16/10] overflow-hidden bg-surface-secondary">
              <img
                src={project.thumbnail}
                alt={`${project.title} project preview`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-full bg-primary/15 blur-[45px]" />
        </div>
      </div>

      <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
        <div className="mb-5 flex items-center gap-4">
          <span className="font-medium text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-10 bg-primary/40" />
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] font-[geo] text-text-secondary">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-[geo] font-bold tracking-tight text-text-primary sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-xl text-[12px] font-[geo] text-base leading-8 text-text-secondary sm:text-md">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border font-[geo] border-primary/15 bg-primary/[0.06] px-4 py-2 text-[12px] font-medium text-primary"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border px-6 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:border-primary/40 hover:text-primary"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 fill-current"
            >
              <path d="M12 .7C5.7.7.7 5.8.7 12.1c0 5 3.2 9.3 7.7 10.8.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-3 0 0 1-.3 3.1 1.2a10.7 10.7 0 0 1 5.7 0C17 6.4 18 6.7 18 6.7c.6 1.6.2 2.7.1 3 .7.8 1.2 1.8 1.2 3 0 4.4-2.6 5.3-5.1 5.6.4.4.8 1 .8 2.1v3c0 .4.2.7.8.6a11.4 11.4 0 0 0 7.7-10.8C23.3 5.8 18.3.7 12 .7Z" />
            </svg>
            View GitHub
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-primary-hover"
            >
              Live Preview
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  d="M7 17 17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
