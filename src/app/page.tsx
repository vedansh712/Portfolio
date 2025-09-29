"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LoadingAnimation from "./components/LoadingAnimation";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Easter egg console message
    console.log(`
    🚀 Welcome to my portfolio!
    
    ┌─────────────────────────────────────┐
    │  Looking for a Full Stack Developer? │
    │  You've come to the right place! 🎯  │
    └─────────────────────────────────────┘
    
    Built with ❤️ using Next.js, TypeScript & Framer Motion
    `);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div
      className={`${isDarkMode ? "dark" : ""} transition-colors duration-300`}
    >
      <div
        className={`${
          isDarkMode ? "bg-gray-900 text-white" : "bg-black text-gray-900"
        } min-h-screen transition-colors duration-300`}
      >
        {/* Theme Toggle */}
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -150, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
          <Footer />
        </motion.main>
      </div>
    </div>
  );
}
