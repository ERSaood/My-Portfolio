import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaChalkboardTeacher, FaCode, FaLaptopCode, FaUsers, FaLayerGroup } from "react-icons/fa";
import { useEffect, useState } from "react";
const iconMap = {
  Teacher: FaChalkboardTeacher,
  Developer: FaLaptopCode,
  Engineer: FaCode,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Experience() {
  const [timelineData, setTimelineData] = useState([]);

useEffect(() => {
  fetch("http://127.0.0.1:8000/api/experience/")
    .then((res) => res.json())
    .then((data) => {
      setTimelineData(data);
    })
    .catch((err) => console.error(err));
}, []);
  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 -left-40 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-100/20 to-purple-100/20 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-full blur-3xl" />
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
            <FaBriefcase className="text-sm" />
            My Career Path
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Work{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            A journey through my professional career and educational background.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line (desktop) / Left line (mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-9 w-0.5 bg-gradient-to-b from-indigo-300 via-purple-300 to-emerald-300 dark:from-indigo-700 dark:via-purple-700 dark:to-emerald-700 rounded-full" />

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative space-y-12 md:space-y-16"
          >
            {timelineData.map((item, index) => {
              const Icon = iconMap[item.icon] || FaBriefcase;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Content Card */}
                    <div className={`flex-1 pl-12 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <div
                        className={`group relative p-5 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden`}
                      >
                        {/* Hover gradient overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />

                        <div className="relative">
                          {/* Period Badge */}
                          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium mb-3 ${isEven ? "md:ml-auto" : ""}`}>
                            <FaCalendarAlt className="text-[10px]" />
                            {item.period}
                          </div>

                          {/* Title */}
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {item.title}
                          </h3>

                          {/* Company */}
                          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                            {item.company}
                          </p>

                          {/* Description */}
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                            {item.description}
                          </p>

                         
                         {/* Responsibilities */}
<ul className={`space-y-2 ${isEven ? "md:text-right" : "md:text-left"}`}>
  {item.responsibilities
    ?.split("\n")
    .filter((resp) => resp.trim() !== "")
    .map((resp, i) => (
      <li
        key={i}
        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
      >
        {!isEven && (
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0" />
        )}

        <span className="flex-1">{resp}</span>

        {isEven && (
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0" />
        )}
      </li>
    ))}
</ul>
                        </div>
                      </div>
                    </div>

                    {/* Dot - centered on timeline */}
                    <div className="absolute left-4 md:left-1/2 top-6 md:top-8 -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
                        className={`relative w-8 h-8 rounded-full ${item.dotColor} flex items-center justify-center shadow-lg shadow-indigo-500/20 ring-4 ring-black dark:ring-gray-950`}
                      >
                        <Icon className="text-black text-xs" />
                      </motion.div>
                    </div>

                    {/* Spacer for alternating layout on desktop */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom decorative icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border border-indigo-200/50 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
              <FaLayerGroup className="text-sm" />
              Always learning, always building
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}