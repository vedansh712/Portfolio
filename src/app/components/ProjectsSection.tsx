"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Apps", "APIs", "UI/UX"];

  const projects = [
    {
      title: "Stocai",
      description:
        "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      image: "/stocai.png",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Apps",
      live: "https://www.mystocai.com/",
      featured: true,
    },
    {
      title: "Activity Tracker",
      description:
        "RESTful API for task management with advanced filtering, real-time notifications, and team collaboration features. Built with Express.js and PostgreSQL.",
      image: "/stocai.png",
      tech: ["Express.js", "PostgreSQL", "Socket.io", "JWT"],
      category: "APIs",
      github: "#",
      featured: true,
    },
    {
      title: "Akashalabdhi",
      description:
        "Comprehensive React component library with Storybook documentation. Includes 50+ reusable components with accessibility features.",
      image: "/stocai.png",
      tech: ["React", "Storybook", "TypeScript", "CSS-in-JS"],
      category: "UI/UX",
      github: "#",
      live: "#",
      featured: false,
    },
    // {
    //   title: "Netflix-Clone",
    //   description:
    //     "Scalable chat application with WebSocket connections, message encryption, and file sharing capabilities. Supports group chats and video calls.",
    //   image: "/stocai.png",
    //   tech: ["Vue.js", "Socket.io", "Redis", "WebRTC"],
    //   category: "Web Apps",
    //   github: "#",
    //   live: "#",
    //   featured: true,
    // },
    // {
    //   title: "Analytics Dashboard",
    //   description:
    //     "Interactive data visualization dashboard with real-time metrics, custom reports, and export functionality. Built for business intelligence.",
    //   image: "/stocai.png",
    //   tech: ["Next.js", "D3.js", "Python", "FastAPI"],
    //   category: "Web Apps",
    //   github: "#",
    //   live: "#",
    //   featured: false,
    // },
    // {
    //   title: "Mobile App Backend",
    //   description:
    //     "Robust backend service for mobile applications with user management, push notifications, and offline sync capabilities.",
    //   image: "/api/placeholder/400/250",
    //   tech: ["Node.js", "MongoDB", "Firebase", "Docker"],
    //   category: "APIs",
    //   github: "#",
    //   live: "#",
    //   featured: false,
    // },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
              }`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              layout
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                  )}

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/vedansh712"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
