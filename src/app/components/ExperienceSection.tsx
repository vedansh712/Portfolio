"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    // {
    //   title: "Senior Full Stack Developer",
    //   company: "TechCorp Solutions",
    //   location: "San Francisco, CA",
    //   period: "2022 - Present",
    //   description:
    //     "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
    //   achievements: [
    //     "Reduced application load time by 40% through optimization",
    //     "Led team of 5 developers on major product redesign",
    //     "Implemented CI/CD pipeline reducing deployment time by 60%",
    //   ],
    //   color: "from-blue-500 to-cyan-500",
    // },
    // {
    //   title: "Full Stack Developer",
    //   company: "StartupXYZ",
    //   location: "Austin, TX",
    //   period: "2020 - 2022",
    //   description:
    //     "Developed MVP and scaled platform from 0 to 50K users. Built real-time features and integrated third-party APIs.",
    //   achievements: [
    //     "Built core platform features from scratch",
    //     "Integrated payment processing with Stripe",
    //     "Developed real-time chat and notification system",
    //   ],
    //   color: "from-green-500 to-emerald-500",
    // },
    {
      title: "Full Stack Developer",
      company: "DreamAlle Solutions",
      location: "Remote",
      period: "2024 - 2025",
      description:
        "Lead development of scalable web applications from serving 0 to 10K+ users. Architected microservices infrastructure and mentored junior developers.",
      //   description:
      //     "Created responsive websites and web applications for diverse clients. Collaborated with designers to implement pixel-perfect UIs.",
      achievements: [
        "Reduced application load time by 30% through optimization",
        "Designed dynamic prompt pipelines for integration with OpenAI's API",
        "Led development on major product redesign to MVC principles",
        "Built core platform features from scratch",
        "Streamlined Git branching and code review practices for smoother collaboration",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Software Development Engineer",
      company: "Akashalabdhi",
      location: "IIT Roorkee",
      period: "2023 - 2024",
      description:
        "Created responsive websites and web applications for diverse clients. Collaborated with designers to implement pixel-perfect UIs.",
      //   description:
      //     "Started career building websites with HTML, CSS, and JavaScript. Learned modern frameworks and best practices.",
      achievements: [
        "Launched dynamic company website that boosted traffic by 30% in three months",
        "Implemented performance optimizations reducing load time by 20%",
        "Built mobile app with user-centric features, improving engagement",
        "Collaborated with design and business teams to deliver intuitive, market-aligned products",
      ],

      color: "from-purple-400 to-cyan-500",
    },
    {
      title: "Software Developer Intern",
      company: "Convival Tech Hub",
      location: "Remote",
      period: "6 Months",
      description:
        "Started career building websites with HTML, CSS, and JavaScript. Learned modern frameworks and best practices.",
      achievements: [
        "Completed intensive training program",
        "Built first production React application",
        "Contributed to open-source projects",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10 shadow-lg">
                  <motion.div
                    className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Content Card */}
                <motion.div
                  className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } max-w-lg`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-10 rounded-full blur-2xl`}
                    ></div>

                    {/* Header */}
                    <div className="relative z-10 mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <div
                          className={`p-2 bg-gradient-to-r ${exp.color} rounded-lg`}
                        >
                          <Briefcase className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-blue-400 mb-2">
                        {exp.company}
                      </h4>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-gray-200 mb-2">
                        Key Achievements:
                      </h5>
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{
                            duration: 0.6,
                            delay: index * 0.2 + i * 0.1 + 0.5,
                          }}
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        {/* <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Bachelor of Technology",
                institution: "Graphic Era University",
                year: "2019 - 2023",
                type: "Degree",
              },
            //   {
            //     title: "AWS Certified Solutions Architect",
            //     institution: "Amazon Web Services",
            //     year: "2023",
            //     type: "Certification",
            //   },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 text-left"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{item.institution}</p>
                <p className="text-gray-500 text-sm">{item.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
