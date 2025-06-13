import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Smartphone, Globe, Settings, Zap, Cpu, Bug, Shield, Brain } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 92 },
        { name: "JavaScript", level: 88 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: ".NET Core", level: 88 },
        { name: "C#", level: 85 },
        { name: "Node.js", level: 82 },
        { name: "PHP", level: 75 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Android", level: 85 },
        { name: "Java", level: 88 },
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "Mobile UI/UX", level: 82 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Globe,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "SQL Server", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Firebase", level: 82 }
      ]
    },
    {
      title: "IoT & Hardware",
      icon: Cpu,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Arduino", level: 85 },
        { name: "Raspberry Pi", level: 80 },
        { name: "Sensor Integration", level: 88 },
        { name: "MQTT Protocol", level: 75 },
        { name: "IoT Analytics", level: 78 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Python", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "Computer Vision", level: 82 },
        { name: "OpenCV", level: 78 },
        { name: "Data Analysis", level: 80 }
      ]
    },
    {
      title: "Security & Testing",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      skills: [
        { name: "Bug Hunting", level: 88 },
        { name: "Penetration Testing", level: 82 },
        { name: "Security Auditing", level: 85 },
        { name: "JWT Authentication", level: 90 },
        { name: "OWASP Standards", level: 80 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Settings,
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Visual Studio", level: 88 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 78 },
        { name: "Agile/Scrum", level: 85 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 relative">
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
              Skills & Expertise
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills spanning multiple domains and cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(0, 245, 255, 0.2)",
                borderColor: "rgba(0, 245, 255, 0.5)"
              }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="text-white" size={24} />
                </motion.div>
                <motion.h3 
                  className="text-lg font-bold text-white"
                  whileHover={{ color: "#00f5ff" }}
                >
                  {category.title}
                </motion.h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <motion.span 
                        className="text-gray-300 font-medium text-sm"
                        whileHover={{ color: "#00f5ff" }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span 
                        className="text-cyan-400 text-xs font-semibold"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1.5,
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced certifications section */}
        <motion.div className="mt-16" variants={itemVariants}>
          <motion.h3 
            className="text-2xl font-bold text-center text-white mb-8"
            whileHover={{ scale: 1.05 }}
          >
            Achievements & Certifications
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Microsoft Certified", description: ".NET Development", icon: "🏆", color: "from-blue-500 to-indigo-500" },
              { title: "React Expert", description: "Advanced Concepts", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
              { title: "IoT Specialist", description: "Hardware Integration", icon: "🔧", color: "from-green-500 to-teal-500" },
              { title: "Security Researcher", description: "Bug Bounty Hunter", icon: "🛡️", color: "from-red-500 to-pink-500" }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-gray-800/20 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/30 group"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0, 245, 255, 0.2)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <motion.div 
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {cert.icon}
                </motion.div>
                <motion.h4 
                  className="text-lg font-semibold text-white mb-2"
                  whileHover={{ color: "#00f5ff" }}
                >
                  {cert.title}
                </motion.h4>
                <p className="text-gray-400 text-sm">{cert.description}</p>
                <motion.div
                  className={`mt-3 h-1 bg-gradient-to-r ${cert.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: 2 + index * 0.1, duration: 0.8 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;