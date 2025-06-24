import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, Zap, Code2, Sparkles } from 'lucide-react';

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
      {/* Neon Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-slate-900 to-violet-900/10" />
        
        {/* Animated Neon Grid */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Neon Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              background: `radial-gradient(circle, ${
                i % 4 === 0 ? 'rgba(16, 185, 129, 0.2)' : 
                i % 4 === 1 ? 'rgba(139, 92, 246, 0.2)' : 
                i % 4 === 2 ? 'rgba(236, 72, 153, 0.2)' : 'rgba(59, 130, 246, 0.2)'
              }, transparent)`
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Futuristic Profile Section */}
        <motion.div
          className="mb-16"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative w-56 h-56 mx-auto mb-12"
            whileHover={{ scale: 1.05 }}
          >
            {/* Neon Ring Animation */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-emerald-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{
                filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))'
              }}
            />
            
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-violet-400"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{
                filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))'
              }}
            />

            {/* Profile Content */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-800 to-gray-900 flex items-center justify-center border border-gray-700">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-400 via-violet-500 to-pink-500 flex items-center justify-center text-6xl font-black text-gray-900 relative overflow-hidden">
                MN
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Floating Tech Icons */}
            {[Code2, Zap, Sparkles].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute w-12 h-12 bg-gradient-to-r from-emerald-400 to-violet-500 rounded-full flex items-center justify-center"
                style={{
                  top: `${15 + index * 25}%`,
                  right: index % 2 === 0 ? '-20px' : 'auto',
                  left: index % 2 === 1 ? '-20px' : 'auto',
                  filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.8))'
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.7,
                }}
              >
                <Icon className="text-gray-900" size={20} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Neon Name Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-black mb-6 relative"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #8b5cf6 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(16, 185, 129, 0.5))'
            }}
            whileHover={{
              filter: 'drop-shadow(0 0 50px rgba(16, 185, 129, 0.8))',
              scale: 1.02
            }}
          >
            Mansi Nayak
          </motion.h1>
        </motion.div>

        {/* Typing Animation with Neon Effect */}
        <motion.div
          className="text-3xl md:text-4xl mb-16 h-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <span 
              className="font-bold"
              style={{
                color: '#10b981',
                textShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.4)'
              }}
            >
              {text}
            </span>
            <motion.span 
              className={`ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}
              style={{
                color: '#ec4899',
                textShadow: '0 0 20px rgba(236, 72, 153, 0.8)'
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </div>
        </motion.div>

        {/* Enhanced Description */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed relative p-8 rounded-2xl"
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
            whileHover={{ 
              borderColor: 'rgba(16, 185, 129, 0.5)',
              boxShadow: '0 0 30px rgba(16, 185, 129, 0.2)'
            }}
          >
            Passionate MCA student specializing in full-stack development with expertise in 
            <span className="text-emerald-400 font-bold"> .NET</span>, 
            <span className="text-violet-400 font-bold"> React</span>, and 
            <span className="text-pink-400 font-bold"> modern web technologies</span>. 
            Creating innovative solutions that bridge technology and user experience.
          </motion.p>
        </motion.div>

        {/* Neon Action Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mansinayak170@gmail.com"
            target="_blank"
            className="group relative px-12 py-5 rounded-full font-bold text-lg overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #10b981, #8b5cf6)',
              boxShadow: '0 0 30px rgba(16, 185, 129, 0.5)',
              border: '2px solid rgba(16, 185, 129, 0.3)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 50px rgba(16, 185, 129, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative z-10 flex items-center space-x-3 text-white">
              <Mail size={24} />
              <span>Get In Touch</span>
            </div>
          </motion.a>

          <motion.a
            href="#"
            onClick={handleClick}
            className="group relative px-12 py-5 rounded-full font-bold text-lg border-2 border-emerald-400 text-emerald-400 overflow-hidden"
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
            }}
            whileHover={{ 
              scale: 1.05,
              borderColor: '#ec4899',
              color: '#ec4899',
              boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative z-10 flex items-center space-x-3">
              <Download size={24} />
              <span>Download CV</span>
            </div>
          </motion.a>
        </motion.div>

        {/* Neon Social Links */}
        <motion.div
          className="flex justify-center space-x-10 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { icon: Github, href: "https://github.com/mansi-100", label: "GitHub", color: '#6b7280' },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mansi-nayak-a575b3269/", label: "LinkedIn", color: '#3b82f6' },
            { icon: Mail, href: "mailto:mansinayak170@gmail.com", label: "Email", color: '#ec4899' }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-20 h-20 rounded-full overflow-hidden"
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: `2px solid ${social.color}`,
                boxShadow: `0 0 20px ${social.color}40`
              }}
              whileHover={{ 
                scale: 1.2, 
                y: -10,
                boxShadow: `0 0 40px ${social.color}80`
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              <div className="w-full h-full flex items-center justify-center text-white">
                <social.icon size={28} style={{ color: social.color }} />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Futuristic Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={handleScrollToBottom}
        >
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              className="w-8 h-14 border-2 border-emerald-400 rounded-full flex justify-center relative"
              style={{
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)'
              }}
              whileHover={{ 
                borderColor: '#ec4899',
                boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)'
              }}
            >
              <motion.div
                className="w-2 h-6 bg-emerald-400 rounded-full mt-2"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                  boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)'
                }}
              />
            </motion.div>
            <ChevronDown 
              className="text-emerald-400" 
              size={28}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.8))'
              }}
            />
            <span 
              className="text-sm text-gray-400 font-medium"
              style={{
                textShadow: '0 0 10px rgba(16, 185, 129, 0.3)'
              }}
            >
              Explore More
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;