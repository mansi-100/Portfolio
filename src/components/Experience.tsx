import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building, Code, Award, Briefcase } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: ".NET Developer Intern",
      company: "Satva Solutions",
      location: "Remote",
      duration: "Jan 2025 - June 2025",
      type: "Internship",
      description: "6-month intensive internship focusing on .NET development, web applications, and enterprise software solutions.",
      highlights: [
        "Developed enterprise web applications using ASP.NET Core and Entity Framework",
        "Implemented secure RESTful APIs with JWT authentication",
        "Collaborated with senior developers on large-scale projects",
        "Gained expertise in agile development methodologies and code reviews",
        "Built responsive frontend interfaces using React and modern CSS frameworks"
      ],
      technologies: [".NET Core", "C#", "Entity Framework", "SQL Server", "React", "Azure", "JWT", "REST APIs"],
      icon: Code,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Independent Project Developer",
      company: "Self-Directed Learning",
      location: "Remote",
      duration: "2023 - Present",
      type: "Personal Projects",
      description: "Continuously building innovative projects to master new technologies and solve real-world problems.",
      highlights: [
        "Built 25+ full-stack applications using modern frameworks",
        "Developed IoT solutions with sensor integration and data analytics",
        "Created mobile applications with cross-platform compatibility",
        "Implemented secure authentication systems and payment gateways",
        "Contributed to open-source projects and maintained GitHub repositories"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "React Native", "IoT", "Arduino", "Python"],
      icon: Briefcase,
      color: "from-green-500 to-teal-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Learning Journey
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500 hidden md:block"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated timeline dot */}
                <motion.div 
                  className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-gray-900 hidden md:block"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.5 }}
                />

                <div className="md:ml-20">
                  <motion.div
                    className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/30 relative overflow-hidden group"
                    whileHover={{ 
                      boxShadow: "0 25px 50px rgba(0, 245, 255, 0.2)",
                      borderColor: "rgba(0, 245, 255, 0.5)"
                    }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex items-start space-x-4">
                          <motion.div
                            className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <exp.icon className="text-white" size={24} />
                          </motion.div>
                          
                          <div>
                            <motion.h3 
                              className="text-xl lg:text-2xl font-bold text-white mb-2"
                              whileHover={{ color: "#00f5ff" }}
                            >
                              {exp.title}
                            </motion.h3>
                            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 text-gray-300">
                              <motion.div 
                                className="flex items-center space-x-2 mb-2 lg:mb-0"
                                whileHover={{ x: 5 }}
                              >
                                <Building size={16} />
                                <span className="font-medium">{exp.company}</span>
                              </motion.div>
                              <motion.div 
                                className="flex items-center space-x-2 mb-2 lg:mb-0"
                                whileHover={{ x: 5 }}
                              >
                                <MapPin size={16} />
                                <span>{exp.location}</span>
                              </motion.div>
                              <motion.div 
                                className="flex items-center space-x-2"
                                whileHover={{ x: 5 }}
                              >
                                <Calendar size={16} />
                                <span>{exp.duration}</span>
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        <motion.span
                          className={`inline-block bg-gradient-to-r ${exp.color} text-white px-3 py-1 rounded-full text-sm font-medium mt-4 lg:mt-0`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.type}
                        </motion.span>
                      </div>

                      <motion.p 
                        className="text-gray-300 mb-6 leading-relaxed"
                        whileHover={{ scale: 1.01 }}
                      >
                        {exp.description}
                      </motion.p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Award className="mr-2 text-cyan-400" size={20} />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <motion.li
                              key={idx}
                              className="text-gray-300 flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: 0.5 + idx * 0.1 }}
                              whileHover={{ x: 10, color: "#00f5ff" }}
                            >
                              <motion.div 
                                className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"
                                whileHover={{ scale: 1.5 }}
                              />
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              className="bg-gray-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm border border-gray-600/50"
                              whileHover={{ 
                                scale: 1.1, 
                                backgroundColor: "rgba(0, 245, 255, 0.2)",
                                borderColor: "rgba(0, 245, 255, 0.5)"
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ delay: 0.7 + idx * 0.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;