import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaGithub,
  FaExternalLinkAlt,
  FaCodeBranch,
  FaLaptopCode,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiMysql } from "react-icons/si";

const techDetailsMap = {
  HTML: { icon: FaHtml5, color: "text-orange-500" },
  CSS: { icon: FaCss3Alt, color: "text-blue-500" },
  JavaScript: { icon: FaJs, color: "text-yellow-500" },
  "React.js": { icon: FaReact, color: "text-cyan-500" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-teal-500" },
  Python: { icon: FaPython, color: "text-blue-600" },
  Django: { icon: SiDjango, color: "text-green-700 dark:text-green-500" },
  MySQL: { icon: SiMysql, color: "text-orange-600 dark:text-orange-400" },
  Git: { icon: FaGithub, color: "text-orange-600 dark:text-orange-500" }, // Using FaGithub for Git as FaGitAlt is already imported
  GitHub: { icon: FaGithub, color: "text-gray-700 dark:text-gray-300" },
};

const getTechDetails = (techName) => {
  const details = techDetailsMap[techName];
  if (details) {
    return { name: techName, ...details };
  }
  // Fallback for unknown technologies
  return { name: techName, icon: FaCodeBranch, color: "text-gray-500" };
};

const toList = (value) => {
  if (Array.isArray(value)) {
    return value.filter(Boolean).map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
       
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-pink-500/5 dark:bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/50 border border-purple-200/50 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            <FaCodeBranch className="text-sm" />
            My Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            A selection of projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {loading && (
          <div className="text-center text-gray-500 dark:text-gray-400 text-lg">
            Loading projects...
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 dark:text-red-400 text-lg">
            Error loading projects: {error.message}
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 text-lg">
            No Projects Found.
          </div>
        )}

        {/* Only render projects grid if not loading, no error, and projects exist */}
        {!loading && !error && projects.length > 0 && (
          <>
        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative flex flex-col rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Screenshot Placeholder */}
              <div className="aspect-video rounded-t-2xl overflow-hidden border-b border-gray-200/50 dark:border-gray-800/50">
               <img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover rounded-t-2xl"
/>
              </div>

              <div className="flex flex-col flex-grow p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow mb-4">{project.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-2">Features</h4>
                  <ul className="space-y-1.5">
                    {toList(project.features).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <span className="w-1 h-1 rounded-full bg-purple-500 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {toList(project.technologies).map((techName) => {
                      const tech = getTechDetails(techName);
                      const TechIcon = tech.icon;
                      return (
                        <div key={tech.name} className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 ${tech.color}`}>
                          <TechIcon />
                          <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-auto flex gap-3 pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 rounded-lg transition-all duration-200">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg shadow-lg shadow-purple-500/20 transition-all duration-200">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </>
        )}
      </div>
    </section>
  );
}