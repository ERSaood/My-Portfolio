import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaUser,
  FaBook,
  FaCommentDots,
} from "react-icons/fa";
import Toast from "./Toast.jsx";
import { CgSpinner } from "react-icons/cg";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "saoodk96911@gmail.com",
    href: "mailto:saoodk96911@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 9977276945",
    href: "tel:+919977276945",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Bhopal, Madhya Pradesh",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/ERSaood",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/saood-saood",
    label: "LinkedIn",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain alphabets and spaces.";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters long.";
    } else if (formData.subject.length > 100) {
      newErrors.subject = "Subject cannot be more than 100 characters.";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message cannot be more than 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error for the field being edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const getCsrfToken = () => {
    const match = document.cookie.match(/(?:^|;\s*)csrftoken=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : "";
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) {
    return;
  }
  setIsSubmitting(true);
  setToast({ show: false, message: "", type: "success" });

  try {
    const csrfToken = getCsrfToken();
    const response = await fetch("http://127.0.0.1:8000/api/contact/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(csrfToken ? { "X-CSRFToken": csrfToken } : {}),
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      setToast({ show: true, message: data.message || "Message sent successfully!", type: "success" });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } else {
      const errorData = await response.json().catch(() => ({ error: "An unknown error occurred." }));
      setToast({ show: true, message: errorData.error || "Something went wrong. Please try again.", type: "error" });
    }
  } catch (error) {
    console.error("Submission error:", error);
    setToast({ show: true, message: "Could not connect to the server. Please try again later.", type: "error" });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -right-60 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-60 w-96 h-96 bg-red-500/5 dark:bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <FaPaperPlane className="text-sm" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Have a question or a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 text-blue-500 shadow-sm">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.label}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                  <link.icon size={22} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-lg space-y-5"
          >
            <div className="relative">
              <FaUser className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} onBlur={validateForm} className={`w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border rounded-lg focus:ring-2 outline-none transition-all ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200/80 dark:border-gray-700/50 focus:ring-blue-500 focus:border-blue-500'}`} />
              {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>}
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} onBlur={validateForm} className={`w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border rounded-lg focus:ring-2 outline-none transition-all ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200/80 dark:border-gray-700/50 focus:ring-blue-500 focus:border-blue-500'}`} />
              {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
            </div>
            <div className="relative">
              <FaBook className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} onBlur={validateForm} className={`w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border rounded-lg focus:ring-2 outline-none transition-all ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-200/80 dark:border-gray-700/50 focus:ring-blue-500 focus:border-blue-500'}`} />
              {errors.subject && <p className="text-red-500 text-xs mt-1 ml-2">{errors.subject}</p>}
            </div>
            <div className="relative">
              <FaCommentDots className="absolute top-5 left-4 text-gray-400" />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} onBlur={validateForm} rows="5" className={`w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border rounded-lg focus:ring-2 outline-none transition-all resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-200/80 dark:border-gray-700/50 focus:ring-blue-500 focus:border-blue-500'}`}></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1 ml-2">{errors.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? (
                <>
                  <CgSpinner className="animate-spin" size={20} /> Sending...
                </>
              ) : (
                <>Send Message <FaPaperPlane /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </section>
  )};
