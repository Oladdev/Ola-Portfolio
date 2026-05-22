import type { FC } from "react";
import { SectionHeading } from "../ui";

export const AboutSection: FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-slate-100 dark:bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle>About Me</SectionHeading>
        <div className="prose dark:prose-invert max-w-none text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          <p className="mb-6">
            I&apos;m{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Atolagbe Precious Olawole
            </span>
            , a 200-level Software Engineering student at Babcock University.
            I don&apos;t just write code; I build tools that actually work.
          </p>
          <p>
            My coding journey bridges the gap between the rigorous, low-level
            logic of{" "}
            <span className="font-mono text-sm text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 px-1 rounded">
              C/C++
            </span>{" "}
            taught in class and the practical, user-facing utility of modern
            web development. While my peers are focused on theory, I am
            applying it—building booking systems, productivity apps, and
            collaborative platforms that solve real campus problems.
          </p>
        </div>
      </div>
    </section>
  );
};
