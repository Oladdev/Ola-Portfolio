import type { FC } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading, Card } from "../ui";
import { PROJECTS } from "../../data/projects";

export const ProjectsSection: FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeading subtitle>Selected Projects</SectionHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                      aria-label="GitHub Repo"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                {project.challenges && (
                  <div className="mb-6 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
                    <p className="text-xs text-indigo-800 dark:text-indigo-300 italic">
                      {project.challenges}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
