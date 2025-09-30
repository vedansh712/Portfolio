"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/vedansh712", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/vedansh712",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:vedanshsharma712@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-purple-500 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-pink-500 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Vedansh Developer
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Full Stack Developer passionate about creating amazing digital
              experiences with modern technologies and clean code.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label === "Email" ? "_self" : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  className="p-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-400 hover:text-white hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2 text-gray-400">
              <p>vedanshsharma712@gmail.com</p>
              <p>+91 9760108830</p>
              {/* <p></p> */}
            </div>
            <motion.div
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for hire
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              className="text-gray-400 text-sm flex items-center gap-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              © {currentYear} Vedansh Developer. Made with{" "}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#ef4444", "#f97316", "#ef4444"],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 inline fill-current" />
              </motion.span>{" "}
              using Next.js & Framer Motion
            </motion.p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Top</span>
            </motion.button>
          </div>
        </div>

        {/* Easter Egg Message */}
        <motion.div
          className="text-center mt-8 text-xs text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            🎉 Thanks for scrolling this far! Check the console for a special
            message 👨‍💻
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-blue-500/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-6 h-6 bg-purple-500/30 rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
}
