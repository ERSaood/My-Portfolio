import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/ERSaood", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/saood-saood", label: "LinkedIn" },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white/50 dark:bg-gray-950/50 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-800/50 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Copyright */}
          <div className="md:col-span-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Saood. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              Designed & Built with ❤️
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 md:justify-self-center">
            <div className="flex justify-center md:justify-start gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="md:col-span-1 md:justify-self-end">
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <link.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button onClick={handleScrollToTop} className="absolute -top-6 right-8 w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300" aria-label="Back to top">
        <FaArrowUp />
      </button>
    </footer>
  );
}