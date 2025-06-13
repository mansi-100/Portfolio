import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Smartphone, Globe, Award, BookOpen, Cpu, Bug } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const interests = [
    { icon: Code, title: "Full Stack Development", description: "Building end-to-end web applications with modern frameworks" },
    { icon: Database, title: "Backend Systems", description: "Designing scalable and efficient server-side solutions" },
    { icon: Smartphone, title: "Mobile Development", description: "Creating cross-platform mobile experiences" },
    { icon: Globe, title: "API Integration", description: "Connecting systems through robust API architectures" },
    { icon: Cpu, title: "IoT Development", description: "Building smart connected devices and sensor networks" },
    { icon: Bug, title: "Bug Hunting & Testing", description: "Finding vulnerabilities and ensuring software quality" }
  ];

  return (
    <section id="about" className="py-20 relative">
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
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div 
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 245, 255, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <BookOpen className="text-cyan-400 mr-3" size={24} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-lg font-medium text-cyan-400">Master of Computer Applications (MCA)</h4>
                    <p className="text-gray-300">Semester 4 - 87% CGPA</p>
                    <p className="text-gray-400 text-sm">Specializing in Software Development & Advanced Computing</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ color: "#00f5ff" }}
              transition={{ duration: 0.3 }}
            >
              Passionate Developer & Innovation Enthusiast
            </motion.h3>
            <motion.p 
              className="text-gray-300 leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              I'm a dedicated MCA student with a strong passion for technology and innovation. 
              My journey spans full-stack development, IoT solutions, and security research, 
              driven by curiosity and the desire to create meaningful solutions.
            </motion.p>
            <motion.p 
              className="text-gray-300 leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              With hands-on experience in .NET, React, mobile development, and IoT systems, 
              I enjoy building innovative projects and finding bugs to ensure software quality. 
              I believe in writing clean, efficient code and staying updated with cutting-edge technologies.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Projects Built", value: "25+" },
                { label: "Technologies Mastered", value: "30+" },
                { label: "Bug Reports Filed", value: "50+" },
                { label: "IoT Devices Built", value: "8+" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(0, 245, 255, 0.1)",
                    borderColor: "rgba(0, 245, 255, 0.5)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-cyan-400"
                    whileHover={{ scale: 1.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-16" variants={itemVariants}>
          <motion.h3 
            className="text-2xl font-bold text-center text-white mb-8"
            whileHover={{ scale: 1.05 }}
          >
            Areas of Expertise
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/30 text-center group"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(0, 245, 255, 0.3)",
                  backgroundColor: "rgba(0, 245, 255, 0.05)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <interest.icon className="text-gray-900" size={24} />
                </motion.div>
                <motion.h4 
                  className="text-lg font-semibold text-white mb-2"
                  whileHover={{ color: "#00f5ff" }}
                >
                  {interest.title}
                </motion.h4>
                <p className="text-gray-400 text-sm">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;