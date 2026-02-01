import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Menu,
  X,
  Code,
  Terminal,
  Cpu,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Users,
  Twitter,
  Instagram,
  Ghost,
} from "lucide-react";

// --- DATA CONFIGURATION ---

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Leadership", href: "#leadership" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "Telso",
    description:
      "A comprehensive web application designed to streamline campus transport services and connect users effectively.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      demo: "https://oladdev.github.io/TELSO/",
      repo: "https://github.com/Oladdev/TELSO",
    },
  },
  {
    title: "Payment Verification System",
    description:
      "A streamlined verification interface that processes payment references with real-time feedback and success states.",
    tags: ["JavaScript", "DOM Manipulation", "CSS3"],
    links: {
      demo: "https://oladdev.github.io/Payment-Verification/",
      repo: "https://github.com/Oladdev/Payment-Verification",
    },
  },
  {
    title: "The Duo Hub",
    description:
      "A collaborative team portfolio website showcasing web and app development services with smooth interactions.",
    tags: ["React", "Framer Motion", "UI/UX"],
    links: {
      demo: "https://oladdev.github.io/The-Duo-Hub/",
      repo: "https://github.com/Oladdev/The-Duo-Hub",
    },
  },
  {
    title: '"Love Letter" Animation',
    description:
      "A creative UI experiment featuring complex CSS animations and a typewriter effect to showcase frontend detail.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    links: { demo: "#", repo: "#" },
  },
];

const SKILLS = {
  frontend: [
    "React",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "HTML5/CSS3",
    "Framer Motion",
  ],
  backend: ["C", "C++", "Java", "Strapi CMS", "Node.js Basics"],
  tools: ["Git & GitHub", "VS Code", "Vite", "Figma"],
};

const LEADERSHIP = [
  {
    role: "Senator Candidate (Computer Technology)",
    org: "Babcock University Student Association",
    period: "2025/2026 Session",
    desc: "Campaigning on a platform of digital inclusivity and better academic resources for tech students.",
  },
  {
    role: "Active Member",
    org: "Babcock University Computer Club (BUCC)",
    period: "2024 - Present",
    desc: "Participating in hackathons and peer mentoring sessions to foster a strong coding culture.",
  },
  {
    role: "Applicant",
    org: "Summer@EPFL Fellowship",
    period: "2025",
    desc: "Seeking research opportunities in Computer and Communication Sciences.",
  },
];

const BLOG_POSTS = [
  {
    title: "Mental Health in Tech: A Student's Perspective",
    excerpt:
      "Balancing algorithms and anxiety. How I manage burnout during exam season while maintaining side projects.",
    date: "Feb 2026",
    tag: "Wellness",
  },
  {
    title: "From C++ to React: My Dev Journey",
    excerpt:
      "Why understanding memory management in C++ made me a better JavaScript developer.",
    date: "Jan 2026",
    tag: "Technical",
  },
];

// --- COMPONENTS ---

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-slate-900 dark:text-white">
      {children}
    </h2>
    {subtitle && <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300 ${className}`}
  >
    {children}
  </div>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-slate-950" : "bg-slate-50"}`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold text-slate-900 dark:text-white font-mono hover:text-indigo-500 transition-colors"
          >
            &lt;Ola /&gt;
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-400"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900 dark:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
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
                Hi, I’m Ola. <br />
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

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-slate-100 dark:bg-slate-900/50"
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle>About Me</SectionHeading>
          <div className="prose dark:prose-invert max-w-none text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p className="mb-6">
              I'm{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Atolagbe Precious Olawole
              </span>
              , a 200-level Software Engineering student at Babcock University.
              I don't just write code; I build tools that actually work.
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

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <SectionHeading subtitle>Selected Projects</SectionHeading>
        <div className="grid md:grid-cols-2 gap-6">
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
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                        aria-label="GitHub Repo"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.links.demo}
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

      {/* Skills Section */}
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
                  Tools & Workflow
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

      {/* Leadership & Involvement */}
      <section id="leadership" className="py-20 px-6 max-w-4xl mx-auto">
        <SectionHeading subtitle>Leadership & Community</SectionHeading>
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

      {/* Blog Preview */}
      <section
        id="blog"
        className="py-20 px-6 bg-slate-100 dark:bg-slate-900/30"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle>Ola's Notes</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post, index) => (
              <a href="#" key={index} className="block group">
                <Card className="h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
                      {post.tag}
                    </span>
                    <span className="text-xs text-slate-400">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-indigo-500 font-medium">
                    Read more{" "}
                    <ChevronRight
                      size={14}
                      className="ml-1 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer
        id="contact"
        className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Build Something.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            Whether it's a student project collaboration or a freelance gig, I'm
            always open to discussing new ideas.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
            <a
              href="https://github.com/Oladdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/atolagbe-precious-79a429263"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/oladdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              aria-label="Twitter / X"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/pwreshy.08?igsh=MWd5OWxzb2JieHRxZw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.snapchat.com/add/i_amolaa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              aria-label="Snapchat"
            >
              <Ghost size={24} />
            </a>
            <a
              href="mailto:pwreshy@gmail.com"
              className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <form className="max-w-md mx-auto space-y-4 mb-20 text-left">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-shadow"
                placeholder="pwreshy@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-shadow"
                placeholder="Hi Ola..."
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="text-sm text-slate-500 dark:text-slate-600 border-t border-slate-200 dark:border-slate-800 pt-8">
            <p>
              &copy; 2026 Atolagbe Precious Olawole. Built with React &
              Tailwind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
