// Centralized data used across the portfolio
// Importing data instead of defining it in multiple files eliminates duplication
// and ensures consistency across the entire app

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    icon: "FaGithub",
    href: "https://github.com/ERSaood",
    label: "GitHub",
  },
  {
    icon: "FaLinkedin",
    href: "https://linkedin.com/in/saood-qureshi-3ba00232b",
    label: "LinkedIn",
  },
];

export const contactInfo = [
  {
    icon: "FaEnvelope",
    label: "Email",
    value: "saoodk96911@gmail.com",
    href: "mailto:saoodk96911@gmail.com",
  },
  {
    icon: "FaPhone",
    label: "Phone",
    value: "+91 9977276945",
    href: "tel:+919977276945",
  },
  {
    icon: "FaMapMarkerAlt",
    label: "Location",
    value: "Bhopal, Madhya Pradesh",
  },
];

export const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Education data with unified structure
// Replaced the old coursework, coursework1, coursework2 arrays
// Now each education level has consistent structure
export const educationData = [
  {
    id: 1,
    level: "Bachelor of Technology",
    title: "Bachelor of Technology in Computer Science Engineering",
    institution: "ALL SAINTS' COLLEGE OF TECHNOLOGY BHOPAL (RGPV University)",
    year: "2022",
    coursework: [
      { name: "Web Development" },
      { name: "Data Structures & Algorithms" },
      { name: "Database Management" },
      { name: "Object-Oriented Programming" },
    ],
  },
  {
    id: 2,
    level: "Higher Secondary",
    title: "Higher Secondary Education",
    institution: "SAIFIA H.SEC. SCHOOL BHOPAL (MP BOARD)",
    year: "2018",
    coursework: [
      { name: "Mathematics" },
      { name: "Physics" },
      { name: "Chemistry" },
      { name: "English" },
      { name: "Hindi" },
    ],
  },
  {
    id: 3,
    level: "High School",
    title: "High School Education",
    institution: "New Eastern st. SCHOOL BHOPAL (MP BOARD)",
    year: "2016",
    coursework: [
      { name: "Mathematics" },
      { name: "Science" },
      { name: "Social Science" },
      { name: "General English" },
      { name: "General Hindi" },
      { name: "Special Urdu" },
    ],
  },
];
