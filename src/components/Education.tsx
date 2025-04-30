import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

const Education: React.FC = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  const education = [
    {
      degree: "Bachelor in Information Technology",
      school: "NHL Stenden University",
      period: "2023 - Present",
      description:
        "Currently in my second year, focusing on software development and web technologies.",
      courses: [
        "Web Development",
        "Database Management",
        "Software Engineering",
        "User Interface Design",
        "Network Infrastructure",
        "API Development",
        "CI/CD",
        "Mobile Development",
      ],
    },
    {
      degree: "High School Diploma",
      school: 'Liceul Teoretic "Mircea Eliade"',
      period: "2019 - 2023",
      description:
        "Completed high school education in Chisinau, Republic of Moldova.",
      courses: [],
    },
    {
      degree: "The Ultimate React Course 2025",
      school: "Udemy",
      period: "2024",
      description:
        "Comprehensive course covering React, Next.js, Redux, and modern web development practices.",
      courses: [
        "React Fundamentals",
        "Next.js",
        "Redux",
        "Advanced React Patterns",
        "Modern Web Development",
      ],
    },
    {
      degree: "Master Node.js - Complete RESTful API Course",
      school: "Udemy",
      period: "2025 - Present",
      description:
        "Advanced Node.js course focused on building production-ready RESTful APIs with authentication, security, and payments integration.",
      courses: [
        "RESTful API Development",
        "Node.js Security Best Practices",
        "Authentication & Authorization",
        "Payment Integration",
        "Error Handling",
        "API Documentation",
        "Database Integration",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-tertiary to-primary"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="text-accent">Education</span> Journey
            </h2>
            <p className="text-textSecondary mt-4 max-w-2xl mx-auto">
              My academic path and professional development in the field of
              technology
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/20"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-accent rounded-full"></div>

                  <div
                    className={`flex ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } items-center gap-8`}
                  >
                    <div className="w-full md:w-1/2">
                      <div className="bg-tertiary p-4 md:p-6 rounded-lg shadow-lg">
                        <div className="flex flex-col items-center gap-3 mb-4">
                          <div className="p-2.5 md:p-3 bg-accent/10 rounded-full">
                            <Icon
                              name="FaGraduationCap"
                              className="text-accent text-xl md:text-2xl"
                            />
                          </div>
                          <div className="text-center">
                            <h3 className="text-lg md:text-xl font-bold text-textPrimary mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-accent text-sm md:text-base">
                              {edu.school}
                            </p>
                          </div>
                        </div>
                        <p className="text-textSecondary text-sm md:text-base mb-4 text-center">
                          {edu.description}
                        </p>
                        {edu.courses.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="text-textPrimary font-medium text-center text-sm md:text-base mb-2">
                              Key Courses:
                            </h4>
                            <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center">
                              {edu.courses.map((course, i) => (
                                <span
                                  key={i}
                                  className="px-2 md:px-3 py-1 bg-accent/10 text-accent rounded-full text-xs md:text-sm"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        <p className="text-textSecondary text-sm md:text-base mt-4 text-center">
                          {edu.period}
                        </p>
                        {edu.school === "Udemy" &&
                          edu.degree === "The Ultimate React Course 2025" && (
                            <motion.button
                              onClick={() => setShowCertificate(true)}
                              className="mt-4 flex items-center justify-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors w-full text-sm md:text-base"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Icon
                                name="FaCertificate"
                                className="text-sm md:text-base"
                              />
                              View Certificate
                            </motion.button>
                          )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.a
              href="/CV_2025-04-29_Josan_Mihail.pdf"
              download="Josan_Mihail_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-tertiary rounded-lg text-textPrimary hover:bg-accent/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name="FaDownload" className="text-accent" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCertificate(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-4xl w-full bg-tertiary p-2 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCertificate(false)}
                className="absolute top-4 right-4 text-textSecondary hover:text-accent transition-colors"
              >
                <Icon name="FaTimes" size={24} />
              </button>
              <img
                src="/react_course.jpg"
                alt="React Course Certificate"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;
