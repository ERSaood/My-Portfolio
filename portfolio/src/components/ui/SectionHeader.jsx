import { motion } from "framer-motion";
import { sectionHeaderVariants } from "../../constants/animations";

/**
 * Reusable section header component
 * Eliminates duplicated header structure across all sections (About, Skills, Experience, Projects, Education, Contact)
 * 
 * Props:
 *   badgeIcon - React icon component for the badge
 *   badgeText - Text to display in the badge
 *   badgeColor - Background color classes (e.g., "bg-indigo-50 dark:bg-indigo-950/50")
 *   badgeBorder - Border color classes
 *   badgeTextColor - Text color classes
 *   title - Main section title
 *   titleHighlight - Highlighted portion of title (optional)
 *   titleGradient - Gradient for highlighted text
 *   description - Optional description text below title
 */
export default function SectionHeader({
  badgeIcon: BadgeIcon,
  badgeText,
  badgeColor,
  badgeBorder,
  badgeTextColor,
  title,
  titleHighlight,
  titleGradient,
  description,
}) {
  return (
    <motion.div
      variants={sectionHeaderVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-12 md:mb-16"
    >
      {/* Badge */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${badgeColor} border ${badgeBorder} ${badgeTextColor} text-sm font-medium mb-4`}
      >
        <BadgeIcon className="text-sm" />
        {badgeText}
      </div>

      {/* Title with optional highlight */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        {title}{" "}
        {titleHighlight && (
          <span
            className={`bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}
          >
            {titleHighlight}
          </span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
