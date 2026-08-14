import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaArrowRight, FaCode, FaLaptopCode } from "react-icons/fa";
import myphoto from "../assets/myphoto.jpeg"; 
import { useEffect, useState } from "react";

export default function Hero() {
    const [resumeUrl, setResumeUrl] = useState("");

useEffect(() => {
  fetch("http://127.0.0.1:8000/api/resume/")
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        setResumeUrl(data[0].resume);
      }
    })
    .catch((err) => console.error(err));
}, []);

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const top = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

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

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                {/* Gradient blobs */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100/40 to-purple-100/40 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        {/* Greeting badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/50 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                            Available for opportunities
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
                        >
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                Saood
                            </span>
                        </motion.h1>

                        {/* Professional Title */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4"
                        >
                            Full Stack Web Developer
                        </motion.p>

                        {/* Introduction */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
                        >
                            IT Training Officer and Full Stack Web Developer with a B.Tech in Computer Science Engineering. 
                            I build responsive and scalable web applications using React, Python, Django, and MySQL.
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10"
                        >
                            <button
                                onClick={() => handleScrollTo("projects")}
                                className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                View My Projects
                                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-200" />
                            </button>

                            <a
                                href={resumeUrl|| "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5 ${
    resumeUrl
      ? "border-2 border-gray-300 hover:border-indigo-500"
      : "opacity-50 cursor-not-allowed"
  }`}>
                                Download Resume
                                <FaExternalLinkAlt className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                            </a>
                        </motion.div>

                        {/* Social Links */}
                            <span className="text-lg font-medium text-gray-400 dark:text-gray-500">
                            Available for Freelance! 
                            Open to Full Time Opportunities
                            </span>
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-4 justify-center lg:justify-start"
                        >
                            <span className="text-sm font-medium text-gray-400 dark:text-gray-500">
                                Connect with me
                            </span>
                            <div className="h-px w-8 bg-gray-300 dark:bg-gray-700" />
                            <a
                                href="https://github.com/ERSaood"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                                aria-label="GitHub Profile"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/saood-qureshi-3ba00232b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Developer Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        className="relative order-1 lg:order-2 flex items-center justify-center"
                    >
                        {/* Animated developer code brackets */}
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                            {/* Outer gradient circle */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/10 dark:to-purple-500/10 animate-[spin_20s_linear_infinite]" />

                            {/* Inner content */}
                            <div className="absolute inset-4 rounded-full bg-white dark:bg-gray-900 shadow-2xl flex items-center justify-center border border-gray-200/50 dark:border-gray-700/50">
                                <div className="text-center" style={{ backgroundImage: `url(${myphoto})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%', borderRadius: '50%' }}>
                                </div>
                            </div>

                            {/* Floating code icon */}
                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-2 -right-2 p-3 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 shadow-lg"
                            >
                                <FaCode size={20} />
                            </motion.div>

                            {/* Floating laptop icon */}
                            <motion.div
                                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-2 -left-2 p-3 rounded-xl bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 shadow-lg"
                            >
                                <FaLaptopCode size={20} />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none" />
        </section>
    );
}

