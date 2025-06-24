import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderOpen, Code, Mail, Sparkles, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home, color: 'from-cyan-400 to-blue-500' },
    { name: 'About', href: '#about', icon: User, color: 'from-purple-400 to-pink-500' },
    { name: 'Experience', href: '#experience', icon: Briefcase, color: 'from-green-400 to-emerald-500' },
    { name: 'Projects', href: '#projects', icon: FolderOpen, color: 'from-orange-400 to-red-500' },
    { name: 'Skills', href: '#skills', icon: Code, color: 'from-indigo-400 to-purple-500' },
    { name: 'Contact', href: '#contact', icon: Mail, color: 'from-pink-400 to-rose-500' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-2xl shadow-2xl border-b border-cyan-400/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent flex items-center"
              style={{ backgroundSize: '200% 200%' }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="mr-3 relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={28} className="text-cyan-400" />
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap size={28} className="text-purple-400" />
                </motion.div>
              </motion.div>
              Mansi Nayak
            </motion.div>
            
            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 group overflow-hidden ${
                    activeSection === item.href.slice(1)
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 rounded-xl`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Active Background */}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 rounded-xl`}
                      layoutId="activeBackground"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  {/* Icon */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon size={18} />
                  </motion.div>
                  
                  {/* Text */}
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active Indicator */}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}
                      layoutId="activeIndicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 rounded-xl blur-xl`}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-3 rounded-xl text-gray-400 hover:text-white focus:outline-none overflow-hidden group"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-900/98 backdrop-blur-2xl border-t border-cyan-400/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative block w-full px-6 py-4 rounded-xl text-base font-bold text-left flex items-center space-x-3 transition-all duration-300 group overflow-hidden ${
                    activeSection === item.href.slice(1)
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    x: 10,
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 rounded-xl`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Active Background */}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 rounded-xl`}
                      layoutId="mobileActiveBackground"
                    />
                  )}

                  {/* Icon */}
                  <motion.div
                    className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center relative z-10`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon size={20} className="text-white" />
                  </motion.div>
                  
                  {/* Text */}
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 rounded-xl blur-xl`}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;