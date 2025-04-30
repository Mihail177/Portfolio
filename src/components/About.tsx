import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-primary"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Glowing effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-full blur-lg opacity-30"></div>
              {/* Photo container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent">
                <img
                  src="/profile.jpg"
                  alt="Mihail Josan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-accent rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-accent rounded-full"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-textPrimary"
            >
              About <span className="text-accent">Me</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-textSecondary leading-relaxed">
                I am a second-year IT student at NHL Stenden University,
                passionate about software development and creating innovative
                solutions. My journey in technology began with a curiosity for
                how things work, which has evolved into a deep interest in
                software engineering.
              </p>
              <p className="text-textSecondary leading-relaxed">
                I enjoy tackling complex problems and turning them into elegant,
                efficient solutions. My current focus is on web development,
                where I combine creativity with technical skills to build
                user-friendly applications.
              </p>
              <p className="text-textSecondary leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or learning new
                programming languages and frameworks.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              <div className="bg-tertiary p-4 rounded-lg">
                <h3 className="text-accent text-2xl font-bold">2+</h3>
                <p className="text-textSecondary">Years of Experience</p>
              </div>
              <div className="bg-tertiary p-4 rounded-lg">
                <h3 className="text-accent text-2xl font-bold">10+</h3>
                <p className="text-textSecondary">Projects Completed</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
