import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaBook, FaCode } from "react-icons/fa";
import { useEffect, useState } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/education/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setEducation(Array.isArray(data) ? data : []);
      } catch (error) {
        setEducation([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  return (
    <section id="education" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-teal-500/5 dark:bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>
        ) : education.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300">No education records found.</p>
        ) : (
          education.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto mb-8 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {item.degree}
                    </h3>

                    <p className="flex items-center gap-2 mt-1 text-indigo-600 dark:text-indigo-400 font-medium">
                      <FaUniversity />
                      {item.institute} ({item.board})
                    </p>
                  </div>

                  <p className="mt-2 sm:mt-0 px-3 py-1 text-sm font-semibold text-teal-800 dark:text-teal-200 bg-teal-100 dark:bg-teal-900/50 rounded-full shrink-0">
                    {item.start_year} - {item.end_year}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-800/50">
                  <p className="mb-6 text-gray-600 dark:text-gray-300">{item.description}</p>

                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-4">
                    Relevant Coursework
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.coursework
                      .split("\n")
                      .filter((course) => course.trim() !== "")
                      .map((course, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 border border-gray-100/50 dark:border-gray-700/50"
                        >
                          <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-gray-900 text-teal-500 shadow-sm">
                            <FaCode />
                          </div>

                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {course}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
