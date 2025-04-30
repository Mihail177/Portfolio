import React from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        {
          name: "React",
          icon: <Icon name="FaReact" size={32} className="text-[#61DAFB]" />,
        },
        {
          name: "TypeScript",
          icon: (
            <Icon
              name="SiTypescript"
              library="si"
              size={32}
              className="text-[#3178C6]"
            />
          ),
        },
        {
          name: "JavaScript",
          icon: <Icon name="FaJs" size={32} className="text-[#F7DF1E]" />,
        },
        {
          name: "HTML5",
          icon: <Icon name="FaHtml5" size={32} className="text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <Icon name="FaCss3Alt" size={32} className="text-[#1572B6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: (
            <Icon
              name="SiTailwindcss"
              library="si"
              size={32}
              className="text-[#06B6D4]"
            />
          ),
        },
      ],
    },
    {
      name: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <Icon name="FaNodeJs" size={32} className="text-[#339933]" />,
        },
        {
          name: "Express.js",
          icon: (
            <Icon
              name="SiExpress"
              library="si"
              size={32}
              className="text-[#000000]"
            />
          ),
        },
        {
          name: "Java",
          icon: <Icon name="FaJava" size={32} className="text-[#007396]" />,
        },
        {
          name: "MongoDB",
          icon: (
            <Icon
              name="SiMongodb"
              library="si"
              size={32}
              className="text-[#47A248]"
            />
          ),
        },
      ],
    },
    {
      name: "Tools",
      skills: [
        {
          name: "Git",
          icon: <Icon name="FaGitAlt" size={32} className="text-[#F05032]" />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-tertiary to-primary opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-16">
            <span className="text-accent">Technical</span> Skills
          </h2>

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-textPrimary mb-8 text-center">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      className="group relative"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-200"></div>
                      <div className="relative flex flex-col items-center justify-center p-6 bg-tertiary rounded-xl space-y-4">
                        <div className="transform transition-transform duration-300 group-hover:scale-110">
                          {skill.icon}
                        </div>
                        <h4 className="text-textPrimary font-medium text-center">
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
