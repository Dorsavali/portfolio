import { motion } from "framer-motion";
import {  ExternalLink } from "lucide-react";

import Button from "../components/common/Button";
import { projects } from "../data/Projects";
import { Helmet } from "react-helmet-async";

function Projects() {
  return (
    <main className="bg-background py-10 sm:py-24 lg:py-10">

  <Helmet>
    <title>Projects | Dorsa Valli</title>

    <meta
      name="description"
      content="Explore the projects of Dorsa Valli, a Front-End Developer specializing in React, TypeScript, Tailwind CSS and modern web development."
    />

    <meta
      name="keywords"
      content="Dorsa Valli, Frontend Developer, React Developer, TypeScript, Portfolio"
    />

    <meta property="og:title" content="Projects | Dorsa Valli" />

    <meta
      property="og:description"
      content="Frontend Developer specializing in React and modern web technologies."
    />

    <meta
      property="og:image"
      content="https://dorsavalli.com/images/logo.webp"
    />

    <meta
      property="og:url"
      content="https://dorsavalli.com/projects"
    />

    <meta property="og:type" content="website" />

    <link
      rel="canonical"
      href="https://dorsavalli.com/projects"
    />
  </Helmet>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center font-[geo]"
        >
          <span className="text-sm font-medium font-[geo] uppercase tracking-[0.25em] text-primary">
            All Projects
          </span>

          <h2 className="mt-4 text-xl font-bold font-[geo] tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
            A collection of projects I have done.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-16 lg:mt-10"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="aspect-[16/10] overflow-hidden bg-white/5">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-[geo] text-xl font-semibold text-text-primary">
                  {project.title}
                </h2>

                <p className="mt-3 line-clamp-3 font-[geo] text-sm leading-6 text-text-secondary">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-primary/10 px-3 py-1 font-[geo] text-[11px] text-primary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 pt-6">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1"
                    >
                      <Button className="flex w-full items-center justify-center gap-2 px-3 py-2 text-xs">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="flex w-full items-center justify-center gap-2 px-3 py-2 text-xs"
                      >
                        <img
                          src="/images/footer/github.svg"
                          alt="github"
                          className="h-4 w-4"
                        />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

export default Projects;
