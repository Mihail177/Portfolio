import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "Software Developer";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-primary"
    >
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-accent/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-textPrimary mb-4">
                <span className="text-accent">Mihail</span> Josan
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-textSecondary mb-8">
                <span className="text-accent">{text}</span>
                {isTyping && <span className="animate-pulse">|</span>}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-textSecondary max-w-2xl mx-auto mb-12"
            >
              Crafting digital experiences through elegant code and innovative
              solutions. Currently pursuing my degree at NHL Stenden University.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-secondary rounded-lg text-primary font-bold text-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <Icon name="FaArrowRight" />
              </motion.a>

              <motion.a
                href="https://github.com/Mihail177"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-1 bg-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative px-6 py-3 bg-tertiary rounded-lg flex items-center space-x-2">
                  <Icon name="FaGithub" size={24} className="text-accent" />
                  <span className="text-textPrimary">GitHub</span>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/mihailjosan2005/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-1 bg-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative px-6 py-3 bg-tertiary rounded-lg flex items-center space-x-2">
                  <Icon name="FaLinkedin" size={24} className="text-accent" />
                  <span className="text-textPrimary">LinkedIn</span>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-6 h-10 border-2 border-accent rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-1 h-2 bg-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
