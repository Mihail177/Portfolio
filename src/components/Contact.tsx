import React from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-tertiary to-primary"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-textPrimary mb-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-textSecondary mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-tertiary p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-textPrimary mb-8 text-center">
              Contact Details
            </h3>
            <div className="space-y-6">
              <motion.a
                href="mailto:mihailjosan2005@gmail.com"
                whileHover={{ scale: 1.02 }}
                className="block"
              >
                <div className="flex items-center p-4 bg-accent/5 rounded-xl transition-colors hover:bg-accent/10">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Icon name="FaEnvelope" className="text-accent text-xl" />
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-textSecondary text-sm">Email</p>
                    <p className="text-textPrimary hover:text-accent transition-colors">
                      mihailjosan2005@gmail.com
                    </p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+31684252611"
                whileHover={{ scale: 1.02 }}
                className="block"
              >
                <div className="flex items-center p-4 bg-accent/5 rounded-xl transition-colors hover:bg-accent/10">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Icon name="FaPhone" className="text-accent text-xl" />
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-textSecondary text-sm">Phone</p>
                    <p className="text-textPrimary hover:text-accent transition-colors">
                      +31 6 84252611
                    </p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=Emmen+Netherlands"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block"
              >
                <div className="flex items-center p-4 bg-accent/5 rounded-xl transition-colors hover:bg-accent/10">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Icon
                      name="FaMapMarkerAlt"
                      className="text-accent text-xl"
                    />
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-textSecondary text-sm">Location</p>
                    <p className="text-textPrimary hover:text-accent transition-colors">
                      Emmen, Netherlands
                    </p>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-tertiary p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-textPrimary mb-8 text-center">
              Connect With Me
            </h3>
            <div className="flex flex-col space-y-6">
              <motion.a
                href="https://github.com/Mihail177"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block"
              >
                <div className="flex items-center p-4 bg-accent/5 rounded-xl transition-colors hover:bg-accent/10">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Icon name="FaGithub" className="text-accent text-xl" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-textPrimary">Follow on GitHub</span>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/mihailjosan2005/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block"
              >
                <div className="flex items-center p-4 bg-accent/5 rounded-xl transition-colors hover:bg-accent/10">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Icon name="FaLinkedin" className="text-accent text-xl" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-textPrimary">
                      Connect on LinkedIn
                    </span>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
