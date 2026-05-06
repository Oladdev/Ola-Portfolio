import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh] flex items-center justify-center">
      <div className="w-full max-w-3xl text-center md:text-left md:flex md:items-center md:justify-between gap-12">
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
              SOFTWARE ENGINEERING STUDENT
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
              Hi, I'm Ola. <br />
              <span className="text-slate-500 dark:text-slate-400">
                I build real solutions.
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0">
              Second-year undergraduate at Babcock University. I bridge the
              gap between academic theory and practical, full-stack
              applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              View My Work <ChevronRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Decorative Code Block / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:block w-72 h-72 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl opacity-10 blur-2xl transform rotate-6"></div>
          <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-2 font-mono text-xs">
              <div className="text-indigo-500">const developer = {"{"}</div>
              <div className="pl-4 text-slate-600 dark:text-slate-400">
                name:{" "}
                <span className="text-green-600 dark:text-green-400">
                  'Ola'
                </span>
                ,
              </div>
              <div className="pl-4 text-slate-600 dark:text-slate-400">
                role:{" "}
                <span className="text-green-600 dark:text-green-400">
                  'Student'
                </span>
                ,
              </div>
              <div className="pl-4 text-slate-600 dark:text-slate-400">
                level: 200,
              </div>
              <div className="pl-4 text-slate-600 dark:text-slate-400">
                passion: [
                <span className="text-green-600 dark:text-green-400">
                  'Web'
                </span>
                ,{" "}
                <span className="text-green-600 dark:text-green-400">
                  'Logic'
                </span>
                ]
              </div>
              <div className="text-indigo-500">{"}"}</div>
              <div className="pt-2 text-slate-400 dark:text-slate-600">
                // Ready to build
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
