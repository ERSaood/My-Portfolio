import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { MdCode,MdOutlineAutoAwesome } from "react-icons/md";
const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiPostman,
  MdOutlineAutoAwesome,
  // The skills API stores this Simple Icons-style key; VS Code lives in the
  // Visual Studio Code icon set in react-icons.
  SiVisualstudiocode: VscVscode,
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/skills/")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const skillGroups = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
].map((category) => ({
  title: category,
  skills: skills.filter((skill) => skill.category === category),
}));
  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/50 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
            <MdCode className="text-sm" />
            My Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Technical{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Technologies and tools I work with on a daily basis.
          </p>
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillGroups.map((group) => {
            const GroupIcon = MdCode;
            return (
              <motion.div
                key={group.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl bg-white dark:bg-gray-800 border ${group.borderColor} flex items-center justify-center ${group.iconBg} shadow-sm group-hover:scale-110 transition-transform duration-300`}
                    >
                      <GroupIcon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {group.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {group.skills.map((skill, index) => {
                      const SkillIcon = iconMap[skill.icon];
                      return (
                        <motion.div
                          key={skill.name}
                          custom={index}
                          variants={skillItemVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 border border-gray-100/50 dark:border-gray-700/50 group-hover:bg-white/60 dark:group-hover:bg-gray-800/60 transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm shrink-0">
                            {SkillIcon && (
                               <SkillIcon className={`${skill.color} text-base`} />
                            )}
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${group.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

