import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaUserGraduate,
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const getHighlights = (about) => [
  {
    icon: FaGraduationCap,
    label: about?.experience ?? "0+",
    description: "Experience",
  },
  {
    icon: FaLaptopCode,
    label: about?.projects ?? "0+",
    description: "Projects",
  },
  {
    icon: FaCode,
    label: about?.technologies ?? "0+",
    description: "Technologies",
  },
];

export default function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/about/")
      .then((res) => res.json())
      .then((data) => {
        setAbout(data[0] ?? null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return (
      <section
        id="about"
        className="relative py-20 md:py-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-300">
          Loading...
        </div>
      </section>
    );
  }

  if (!about) {
    return (
      <section
        id="about"
        className="relative py-20 md:py-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-300">
          No About Information Found
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 w-72 h-72 bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl" />
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
            <FaUserGraduate className="text-sm" />
            Get To Know Me
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            {about?.description}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Right Column - Info Cards (order 1 on mobile, order 2 on desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {getHighlights(about).map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="p-6 w-45  rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center group"
                  >
                    <div className="w-15 h-8 mx-auto mb-3 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-semibold text-gray-600 dark:text-white text-sm">
                      {item.label}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Description Cards */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <div className="p-5 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <FaBriefcase size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-base">
                      {about?.profession ?? "Current Role"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-1">
                      {about?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <FaCode size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-base">
                      {about?.subtitle ?? "Full Stack Development"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-1">
                      {about?.location ? `Based in ${about.location}.` : ""}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-6"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) {
                    const top =
                      el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Let's Connect
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </motion.div>

          {/* Left Column - Visual (order 2 on mobile, order 1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Outer gradient circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/15 to-purple-500/15 dark:from-indigo-500/10 dark:to-purple-500/10 animate-[spin_20s_linear_infinite]" />

              {/* Inner content */}
              <div className="absolute inset-4 rounded-full bg-white dark:bg-gray-900 shadow-2xl flex items-center justify-center border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-center px-6">
                  {/* Profile representation */}
                  <div className="mb-4">
                    <motion.div
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-5xl font-bold bg-gradient-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent"
                    >
                      SD
                    </motion.div>
                  </div>

                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Coding. Teaching. Building.
                  </p>

                  {/* Decorative badges */}
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0,
                      }}
                      className="px-2.5 py-1 text-[10px] font-medium bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-200/50 dark:border-indigo-800/50"
                    >
                      Python
                    </motion.span>
                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.3,
                      }}
                      className="px-2.5 py-1 text-[10px] font-medium bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 rounded-full border border-purple-200/50 dark:border-purple-800/50"
                    >
                      SQL
                    </motion.span>
                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.6,
                      }}
                      className="px-2.5 py-1 text-[10px] font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-full border border-amber-200/50 dark:border-amber-800/50"
                    >
                      React
                    </motion.span>
                  </div>

                  {/* Decorative dots */}
                  <div className="mt-4 flex items-center justify-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                </div>
              </div>

              {/* Floating graduation icon */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-2 -right-2 p-3 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 shadow-lg"
              >
                <FaGraduationCap size={20} />
              </motion.div>

              {/* Floating code icon */}
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 -left-2 p-3 rounded-xl bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 shadow-lg"
              >
                <FaCode size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

