import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Smartphone, Globe, BookOpen, Cpu, Bug, Award, TrendingUp, Users, Target, Sparkles } from 'lucide-react';

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
    { 
      icon: Code, 
      title: "Full Stack Development", 
      description: "Building end-to-end web applications with modern frameworks",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    { 
      icon: Database, 
      title: "Backend Systems", 
      description: "Designing scalable and efficient server-side solutions",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    { 
      icon: Smartphone, 
      title: "Mobile Development", 
      description: "Creating cross-platform mobile experiences",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    { 
      icon: Globe, 
      title: "API Integration", 
      description: "Connecting systems through robust API architectures",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10"
    },
    { 
      icon: Cpu, 
      title: "IoT Development", 
      description: "Building smart connected devices and sensor networks",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10"
    },
    { 
      icon: Bug, 
      title: "Bug Hunting & Testing", 
      description: "Finding vulnerabilities and ensuring software quality",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-500/10 to-pink-500/10"
    }
  ];

  const stats = [
    { label: "Projects Built", value: "15+", icon: Target, color: "from-cyan-400 to-blue-500" },
    { label: "Technologies Learned", value: "10+", icon: TrendingUp, color: "from-purple-400 to-pink-500" },
    { label: "Bugs Found", value: "20+", icon: Bug, color: "from-red-400 to-orange-500" },
    { label: "Applications Developed", value: "5+", icon: Users, color: "from-green-400 to-teal-500" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/5 to-orange-500/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Spectacular Header */}
        <motion.div className="text-center mb-24" variants={itemVariants}>
          <motion.div className="relative inline-block mb-8">
            <motion.h2 
              className="text-6xl md:text-8xl font-black relative"
              style={{
                background: 'linear-gradient(135deg, #00f5ff 0%, #8b5cf6 25%, #ff006e 50%, #00ff88 75%, #00f5ff 100%)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              About Me
            </motion.h2>
            
            {/* Floating Decorative Elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  background: `linear-gradient(45deg, ${
                    i % 3 === 0 ? '#00f5ff' : i % 3 === 1 ? '#ff006e' : '#8b5cf6'
                  }, transparent)`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>
          
          <motion.div 
            className="relative w-40 h-2 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 160 } : { width: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent rounded-full"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.02 }}
          >
            Discover my journey through technology, innovation, and continuous learning
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Revolutionary Education Card */}
          <motion.div variants={itemVariants}>
            <div className="relative group">
              {/* Animated Background Layers */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div 
                className="relative bg-gray-800/40 backdrop-blur-2xl rounded-3xl p-10 border border-gray-700/50 overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 30px 60px rgba(0, 245, 255, 0.3)",
                  borderColor: "rgba(0, 245, 255, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                ))}

                {/* Header with Enhanced Icon */}
                <div className="flex items-center mb-10">
                  <motion.div
                    className="relative w-20 h-20 mr-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-1 bg-gray-800 rounded-xl flex items-center justify-center">
                      <BookOpen className="text-cyan-400" size={32} />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Education</h3>
                    <motion.div 
                      className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: 80 } : { width: 0 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </div>
                </div>

                {/* Enhanced Education Content */}
                <motion.div
                  className="relative"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative p-8 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl border border-gray-600/30 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 245, 255, 0.3) 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }} />
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-2xl font-bold text-cyan-400 mb-4">Master of Computer Applications (MCA)</h4>
                      
                      <div className="flex items-center space-x-6 mb-4">
                        <motion.div 
                          className="text-4xl font-black text-white"
                          whileHover={{ scale: 1.1, color: "#00f5ff" }}
                        >
                          9.0 CGPA
                        </motion.div>
                        
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                              animate={{ 
                                scale: [1, 1.3, 1],
                                rotate: [0, 180, 360]
                              }}
                              transition={{ 
                                duration: 2, 
                                delay: i * 0.2, 
                                repeat: Infinity,
                                repeatDelay: 3
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Specializing in Software Development & .NET Development
                      </p>
                    </div>

                    {/* Achievement Badge */}
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <Award className="text-white" size={20} />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-400/10 to-orange-500/10 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Description Section */}
          <motion.div variants={itemVariants} className="space-y-10">
            <motion.h3 
              className="text-4xl font-bold text-white mb-8 relative"
              whileHover={{ color: "#00f5ff" }}
              transition={{ duration: 0.3 }}
            >
              Passionate Developer & Innovation Enthusiast
              <motion.div
                className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
            </motion.h3>
            
            <div className="space-y-8">
              {[
                "I'm a dedicated MCA student with a strong passion for technology and innovation. My journey spans full-stack development, IoT solutions, and security research, driven by curiosity and the desire to create meaningful solutions.",
                "With hands-on experience in .NET, React, mobile development, and IoT systems, I enjoy building innovative projects and finding bugs to ensure software quality. I believe in writing clean, efficient code and staying updated with cutting-edge technologies."
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-500/5 to-pink-500/5 rounded-2xl blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 1.5,
                    }}
                  />
                  <p className="relative text-gray-300 leading-relaxed text-lg p-8 bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700/30">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Revolutionary Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative group overflow-hidden"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {/* Background with Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 rounded-2xl`}
                    whileHover={{ opacity: 0.2 }}
                  />
                  
                  <div className="relative p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 text-center">
                    {/* Animated Icon */}
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        boxShadow: "0 10px 30px rgba(0, 245, 255, 0.3)"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="text-white" size={24} />
                    </motion.div>
                    
                    {/* Value with Counter Animation */}
                    <motion.div 
                      className="text-3xl font-black text-white mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                    
                    {/* Progress Bar */}
                    <motion.div
                      className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : { width: 0 }}
                      transition={{ delay: 1 + index * 0.2 }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: "100%" } : { width: 0 }}
                        transition={{ delay: 1.5 + index * 0.2, duration: 1 }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 rounded-2xl blur-xl`}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Spectacular Areas of Expertise */}
        <motion.div className="mt-20" variants={itemVariants}>
          <motion.div className="text-center mb-16">
            <motion.h3 
              className="text-4xl font-bold text-white mb-6 relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Areas of Expertise
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="text-yellow-400" size={24} />
              </motion.div>
            </motion.h3>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 1, delay: 2 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                className="relative group overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${interest.bgColor} rounded-3xl blur-xl`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />

                <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 text-center h-full">
                  {/* Icon with Enhanced Animation */}
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-r ${interest.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 15px 40px rgba(0, 245, 255, 0.4)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <interest.icon className="text-white relative z-10" size={28} />
                    
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: 3,
                        ease: "easeInOut" 
                      }}
                    />
                  </motion.div>
                  
                  <motion.h4 
                    className="text-xl font-bold text-white mb-4"
                    whileHover={{ color: "#00f5ff" }}
                  >
                    {interest.title}
                  </motion.h4>
                  
                  <p className="text-gray-400 leading-relaxed">{interest.description}</p>
                  
                  {/* Bottom Accent */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${interest.color} rounded-b-3xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;