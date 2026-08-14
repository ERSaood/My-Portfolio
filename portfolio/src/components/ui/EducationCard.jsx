import { motion } from "framer-motion";
import { FaUniversity, FaBook } from "react-icons/fa";
import { cardVariants } from "../../constants/animations";

/**
 * Reusable education card component
 * Eliminates 3 nearly-identical card structures in Education component
 * 
 * Props:
 *   education - Education data object with:
 *     - title: Degree/level title
 *     - institution: School/university name
 *     - year: Graduation/pass year
 *     - coursework: Array of course objects with { name } property
 */
export default function EducationCard({ education }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-3xl mx-auto rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 hover:-translate-y-2"
    >
      <div className="p-6 md:p-8">
        {/* Header with title and year badge */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {education.title}
            </h3>
            <p className="flex items-center gap-2 mt-1 text-indigo-600 dark:text-indigo-400 font-medium">
              <FaUniversity />
              {education.institution}
            </p>
          </div>
          <p className="mt-2 sm:mt-0 px-3 py-1 text-sm font-semibold text-teal-800 dark:text-teal-200 bg-teal-100 dark:bg-teal-900/50 rounded-full shrink-0">
            {education.year}
          </p>
        </div>

        {/* Coursework section */}
        <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-800/50">
          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-4">
            Relevant Coursework
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.coursework.map((course) => (
              <div
                key={course.name}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 border border-gray-100/50 dark:border-gray-700/50"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-gray-900 text-teal-500 shadow-sm">
                  <FaBook />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {course.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
