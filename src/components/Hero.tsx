import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles, Code, Zap, Star } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Software Developer & Tech Enthusiast";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

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

  const handleScrollToBottom = () => {
    const sections = document.querySelectorAll("section");
    const lastSection = sections[sections.length - 1];
    lastSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Mansi_Nayak_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-pink-900/20" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Orbs */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20 blur-xl"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              background: `linear-gradient(45deg, ${
                i % 4 === 0 ? '#00f5ff' : 
                i % 4 === 1 ? '#ff006e' : 
                i % 4 === 2 ? '#8b5cf6' : '#00ff88'
              }, transparent)`
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [1, 1.5, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
          />
        ))}

        {/* Particle System */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Profile Section */}
        <motion.div
          className="mb-12"
          variants={itemVariants}
        >
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Rotating Ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #00f5ff, #ff006e, #8b5cf6, #00ff88, #00f5ff)',
                padding: '4px'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                {/* Inner Gradient */}
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center text-5xl font-bold text-gray-900 relative">
                  MN
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Icons */}
            {[Code, Zap, Star].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center"
                style={{
                  top: `${20 + index * 30}%`,
                  right: index % 2 === 0 ? '-10px' : 'auto',
                  left: index % 2 === 1 ? '-10px' : 'auto',
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                <Icon className="text-gray-900" size={16} />
              </motion.div>
            ))}

            {/* Sparkle Effect */}
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Sparkles className="text-yellow-400" size={32} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Name Section */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-4 relative"
            style={{
              background: 'linear-gradient(135deg, #00f5ff 0%, #ff006e 25%, #8b5cf6 50%, #00ff88 75%, #00f5ff 100%)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Mansi Nayak
            
            {/* Text Shadow Effect */}
            <motion.div
              className="absolute inset-0 text-6xl md:text-8xl font-black opacity-20 blur-sm"
              style={{
                background: 'linear-gradient(135deg, #00f5ff, #ff006e, #8b5cf6, #00ff88)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Mansi Nayak
            </motion.div>
          </motion.h1>
        </motion.div>

        {/* Enhanced Typing Animation */}
        <motion.div
          className="text-2xl md:text-3xl text-gray-300 mb-12 h-12 flex items-center justify-center"
          variants={itemVariants}
        >
          <div className="relative">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">
              {text}
            </span>
            <motion.span 
              className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </div>
        </motion.div>

        {/* Enhanced Description */}
        <motion.div
          className="mb-12"
          variants={itemVariants}
        >
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed relative"
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative z-10">
              Passionate MCA student specializing in full-stack development with expertise in 
              <span className="text-cyan-400 font-semibold"> .NET</span>, 
              <span className="text-purple-400 font-semibold"> React</span>, and 
              <span className="text-pink-400 font-semibold"> modern web technologies</span>. 
              Creating innovative solutions that bridge technology and user experience.
            </span>
            
            {/* Background Highlight */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.p>
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          variants={itemVariants}
        >
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mansinayak170@gmail.com"
            target="_blank"
            className="group relative px-10 py-4 rounded-full font-bold text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            {/* Button Content */}
            <div className="relative z-10 flex items-center space-x-3 text-white">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Mail size={24} />
              </motion.div>
              <span>Get In Touch</span>
            </div>
            
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.a>

          <motion.a
            href="#"
            onClick={handleClick}
            className="group relative px-10 py-4 rounded-full font-bold text-lg border-2 border-cyan-400 text-cyan-400 overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              borderColor: "#ff006e",
              color: "#ff006e"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Hover Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="relative z-10 flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Download size={24} />
              </motion.div>
              <span>Download CV</span>
            </div>
          </motion.a>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          className="flex justify-center space-x-8 mb-16"
          variants={itemVariants}
        >
          {[
            { icon: Github, href: "https://github.com/mansi-100", label: "GitHub", color: "from-gray-600 to-gray-800" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mansi-nayak-a575b3269/", label: "LinkedIn", color: "from-blue-600 to-blue-800" },
            { icon: Mail, href: "mailto:mansinayak170@gmail.com", label: "Email", color: "from-red-500 to-pink-600" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 rounded-full overflow-hidden"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-80`} />
              
              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              {/* Icon */}
              <div className="relative z-10 w-full h-full flex items-center justify-center text-white">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <social.icon size={24} />
                </motion.div>
              </div>
              
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-white/30 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={handleScrollToBottom}
        >
          <div className="flex flex-col items-center space-y-2">
            <motion.div
              className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center relative overflow-hidden"
              whileHover={{ borderColor: "#ff006e" }}
            >
              <motion.div
                className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
            >
              <ChevronDown className="text-cyan-400 group-hover:text-purple-400 transition-colors" size={24} />
            </motion.div>
            <span className="text-xs text-gray-400 font-medium">Scroll Down</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;