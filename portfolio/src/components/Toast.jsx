import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

export default function Toast({ show, message, type = "success", onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -50, x: "-50%" }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed top-6 left-1/2 z-[9999] min-w-[320px] max-w-[90vw]"
        >
          <div
            className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl border backdrop-blur-lg ${
              type === "success"
                ? "bg-green-50 dark:bg-green-950/80 border-green-200/60 dark:border-green-800/60 text-green-800 dark:text-green-200"
                : "bg-red-50 dark:bg-red-950/80 border-red-200/60 dark:border-red-800/60 text-red-800 dark:text-red-200"
            }`}
          >
            <span className="flex-shrink-0">
              {type === "success" ? (
                <FaCheckCircle size={20} className="text-green-500 dark:text-green-400" />
              ) : (
                <FaExclamationCircle size={20} className="text-red-500 dark:text-red-400" />
              )}
            </span>
            <p className="flex-1 text-sm font-medium">{message}</p>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Close notification"
            >
              <FaTimes size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

