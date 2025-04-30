import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "../context/ActiveSectionContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection } = useActiveSection();

  console.log("Current active section in Navbar:", activeSection);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-secondary font-bold text-xl">
              MJ
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                console.log(
                  `Section ${sectionId}: ${isActive ? "active" : "inactive"}`
                );

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-accent"
                        : "text-textSecondary hover:text-secondary"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 focus:outline-none group"
              aria-label="Toggle Menu"
            >
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="flex flex-col items-center justify-center w-8 h-8"
                  animate={isOpen ? "open" : "closed"}
                >
                  <motion.span
                    className="w-6 h-0.5 bg-accent rounded-full block mb-1.5"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-accent rounded-full block mb-1.5"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-accent rounded-full block"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                className="px-2 pt-2 pb-3 space-y-1 bg-tertiary/80 backdrop-blur-sm rounded-lg mt-2"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {navItems.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? "text-accent"
                          : "text-textSecondary hover:text-secondary"
                      }`}
                      onClick={() => setIsOpen(false)}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
