import React, { useState, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  image: string;
  features: string[];
  icons: JSX.Element[];
  longDescription: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "java", name: "Java" },
    { id: "web", name: "Web Development" },
    { id: "python", name: "Python" },
  ];

  const projects = [
    {
      id: 1,
      title: "JabberPoint - Modern Presentation Tool",
      description:
        "A modern Java-based presentation tool following DTAP workflow principles and SOLID design patterns.",
      category: "java",
      technologies: ["Java", "CI/CD", "SOLID", "DTAP"],
      githubUrl: "https://github.com/trifancristi19/SQ",
      image: "/project-images/jabberpoint.jpg",
      features: [
        "Java-based presentation creation and viewing",
        "XML-based presentation format",
        "DTAP workflow integration",
        "Comprehensive test coverage",
        "Modern Swing-based UI",
      ],
      icons: [
        <Icon key="java" name="FaJava" className="text-[#007396]" />,
        <Icon
          key="actions"
          name="SiGithubactions"
          library="si"
          className="text-[#2088FF]"
        />,
      ],
      longDescription:
        "JabberPoint is a comprehensive presentation tool that demonstrates advanced software engineering principles. The project implements SOLID design patterns and follows a strict DTAP (Development, Testing, Acceptance, Production) workflow, ensuring high-quality code and reliable deployment processes.",
    },
    {
      id: 2,
      title: "Data Processing API",
      description:
        "A full-stack web application with Express.js backend and PostgreSQL database, featuring user authentication and data management.",
      category: "web",
      technologies: ["Express.js", "PostgreSQL", "Node.js", "REST API"],
      githubUrl: "https://github.com/BlossomAnukposi/DataProcessing",
      image: "/project-images/data-processing.jpg",
      features: [
        "RESTful API implementation",
        "PostgreSQL database integration",
        "User authentication system",
        "Frontend interface",
        "Contract testing",
      ],
      icons: [
        <Icon
          key="express"
          name="SiExpress"
          library="si"
          className="text-[#000000]"
        />,
        <Icon
          key="postgresql"
          name="SiPostgresql"
          library="si"
          className="text-[#336791]"
        />,
        <Icon key="api" name="TbApi" library="tb" className="text-[#FF6B6B]" />,
      ],
      longDescription:
        "This project implements a robust API structure using Express.js and PostgreSQL. It features comprehensive user authentication, data processing capabilities, and follows best practices for API development including contract testing and proper documentation.",
    },
    {
      id: 3,
      title: "Smart Lock System",
      description:
        "An innovative security system combining facial recognition and NFC technology for enhanced access control.",
      category: "python",
      technologies: ["Python", "Facial Recognition", "NFC", "Security"],
      githubUrl: "https://github.com/Mihail177/Group-H_Period_4",
      image: "/project-images/smart-lock.jpg",
      features: [
        "Facial recognition authentication",
        "NFC reader integration",
        "Real-time access control",
        "Security monitoring",
        "User management system",
      ],
      icons: [
        <Icon key="python" name="FaPython" className="text-[#3776AB]" />,
        <Icon key="database" name="FaDatabase" className="text-[#336791]" />,
        <Icon key="server" name="FaServer" className="text-[#FF6B6B]" />,
      ],
      longDescription:
        "A cutting-edge security solution that combines facial recognition technology with NFC authentication. The system provides a dual-layer security approach, making it both secure and user-friendly. Built with Python, it demonstrates practical application of computer vision and IoT technologies.",
    },
    {
      id: 4,
      title: "Modern React Portfolio",
      description:
        "A modern and responsive portfolio website built with React.js and Tailwind CSS, showcasing projects and skills.",
      category: "web",
      technologies: ["React.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      githubUrl: "https://github.com/Mihail177/ReactJs",
      image: "/project-images/react-portfolio.jpg",
      features: [
        "Responsive design with Tailwind CSS",
        "Modern UI/UX with Framer Motion animations",
        "TypeScript for type safety",
        "Component-based architecture",
        "Dark/Light theme support",
      ],
      icons: [
        <Icon key="react" name="FaReact" className="text-[#61DAFB]" />,
        <Icon
          key="tailwind"
          name="SiTailwindcss"
          library="si"
          className="text-[#06B6D4]"
        />,
        <Icon
          key="typescript"
          name="SiTypescript"
          library="si"
          className="text-[#3178C6]"
        />,
      ],
      longDescription:
        "A modern portfolio website built with React.js and Tailwind CSS, featuring smooth animations powered by Framer Motion. The project demonstrates modern web development practices, including responsive design, component-based architecture, and TypeScript integration for enhanced type safety.",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-tertiary to-primary opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-16">
            <span className="text-accent">Featured</span> Projects
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1.5 md:px-4 md:py-2 text-sm rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? "bg-accent text-primary"
                    : "bg-tertiary text-textPrimary hover:bg-accent/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative bg-tertiary p-6 rounded-xl">
                    <div className="flex flex-col items-center mb-4">
                      <h3 className="text-xl font-bold text-textPrimary text-center mb-2">
                        {project.title}
                      </h3>
                      <p className="text-textSecondary text-center">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {project.technologies.map(
                        (tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon name="FaGithub" size={24} />
                      </a>
                      <button
                        className="px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-tertiary p-6 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-textSecondary hover:text-accent transition-colors"
              >
                <Icon name="FaTimes" size={20} />
              </button>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-textPrimary mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-textSecondary mb-6">
                  {selectedProject.longDescription}
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-accent mb-3 text-center">
                  Key Features:
                </h4>
                <div className="flex justify-center">
                  <ul className="list-disc space-y-2 text-textSecondary pl-6 inline-block">
                    {selectedProject.features.map(
                      (feature: string, index: number) => (
                        <li key={index} className="text-left">
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mt-6 justify-center">
                  {selectedProject.technologies.map(
                    (tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="mt-6 flex justify-center">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    <Icon name="FaGithub" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
