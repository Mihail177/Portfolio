import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import {
  ActiveSectionProvider,
  useActiveSection,
} from "./context/ActiveSectionContext";
import "./App.css";

const AppContent: React.FC = () => {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom of the page
      if (scrollY + windowHeight >= documentHeight - 50) {
        const lastSection = sections[sections.length - 1];
        currentSection = lastSection.getAttribute("id") || "";
      } else {
        sections.forEach((section) => {
          const sectionElement = section as HTMLElement;
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.clientHeight;

          // Adjusted offset for better desktop detection
          const offset = Math.min(windowHeight * 0.3, 200);

          if (
            scrollY >= sectionTop - offset &&
            scrollY < sectionTop + sectionHeight - offset
          ) {
            currentSection = section.getAttribute("id") || "";
          }
        });
      }

      if (currentSection !== "") {
        console.log("Current section:", currentSection);
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial section

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <div className="App">
      <ThemeToggle />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ActiveSectionProvider>
        <AppContent />
      </ActiveSectionProvider>
    </ThemeProvider>
  );
}

export default App;
