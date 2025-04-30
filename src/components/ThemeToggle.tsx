import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import Icon from "./Icon";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 bg-tertiary rounded-full text-accent hover:bg-accent/10 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {theme === "dark" ? (
        <Icon name="FaSun" size={20} />
      ) : (
        <Icon name="FaMoon" size={20} />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
