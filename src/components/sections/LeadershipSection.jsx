import { Users } from "lucide-react";
import { SectionHeading } from "../ui";
import { LEADERSHIP } from "../../data/leadership";

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 px-6 max-w-4xl mx-auto">
      <SectionHeading subtitle>
        <span className="flex items-center gap-2">
          <Users className="w-6 h-6 text-indigo-500" />
          Leadership & Community
        </span>
      </SectionHeading>

      <div className="space-y-6">
        {LEADERSHIP.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors border-l-4 border-indigo-500 pl-4 bg-white dark:bg-transparent"
          >
            <div className="sm:w-1/3">
              <h4 className="font-bold text-slate-900 dark:text-white">
                {item.role}
              </h4>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono mt-1">
                {item.period}
              </p>
            </div>
            <div className="sm:w-2/3">
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {item.org}
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
