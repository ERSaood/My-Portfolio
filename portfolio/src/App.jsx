import { lazy, Suspense, memo } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SEO from "./components/SEO";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Education = lazy(() => import("./components/Education"));
const Footer = lazy(() => import("./components/Footer"));

const SectionFallback = memo(() => (
  <div className="min-h-[20rem]" />
));

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <SEO />
        <Navbar />
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
