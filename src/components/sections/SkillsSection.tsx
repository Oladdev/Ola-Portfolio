import type { FC } from "react";
import { Code, Terminal, Cpu } from "lucide-react";
import { SectionHeading } from "../ui";
import { SKILLS } from "../../data/skills";

export const SkillsSection: FC = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle>Technical Arsenal</SectionHeading>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Code className="text-indigo-500" size={24} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Frontend
              </h3>
            </div>
            <ul className="space-y-2">
              {SKILLS.frontend.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="text-indigo-500" size={24} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Backend & Logic
              </h3>
            </div>
            <ul className="space-y-2">
              {SKILLS.backend.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="text-indigo-500" size={24} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Tools & Platforms
              </h3>
            </div>
            <ul className="space-y-2">
              {SKILLS.tools.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
