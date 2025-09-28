"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bike, Code, Gamepad2, Heart } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a passionate Full Stack Developer with over 2 years of
              experience building scalable web applications and digital
              solutions. I specialize in modern JavaScript frameworks, cloud
              technologies, and creating seamless user experiences.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              {/* 
              My journey in tech started with a curiosity for problem-solving
              and has evolved into a deep passion for crafting elegant,
              efficient code. I thrive in collaborative environments and love
              mentoring junior developers. */}
              I began my journey with a mechanical engineering degree but soon
              discovered my true calling in technology. Backed by a supportive
              community and friends, I self-taught myself full-stack
              development, driven by curiosity and persistence. Today, I’ve
              reached a point where I can take a product from scratch to
              deployment as a confident and adaptable Full Stack Developer.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-blue-400 font-semibold">Fun fact:</span>{" "}
              {/* When I'm not coding, you'll find me experimenting with coffee
              brewing techniques or competing in local gaming tournaments. I
              believe the best code is written with a great cup of coffee! ☕ */}
              Outside of coding, you’ll often find me exploring new places on
              long bike rides. For me, balance between adventure and creativity
              fuels better problem-solving at work.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { number: "10+", label: "Projects Completed" },
                { number: "2+", label: "Years Experience" },
                { number: "5+", label: "Happy Clients" },
                { number: "∞", label: "Bike Rides & Game Sessions" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-blue-500 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-purple-500 rounded-lg rotate-45"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  What Drives Me
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: Code,
                      text: "Clean, maintainable code",
                      color: "text-blue-400",
                    },
                    {
                      icon: Heart,
                      text: "User-centered design",
                      color: "text-red-400",
                    },
                    {
                      icon: Bike,
                      text: "Continuous learning",
                      color: "text-yellow-400",
                    },
                    {
                      icon: Gamepad2,
                      text: "Creative problem solving",
                      color: "text-green-400",
                    },
                  ].map(({ icon: Icon, text, color }, index) => (
                    <motion.div
                      key={text}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <Icon className={`w-5 h-5 ${color}`} />
                      <span className="text-gray-300">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60"
              animate={{
                y: [0, 10, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
