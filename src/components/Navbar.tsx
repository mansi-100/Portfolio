import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderOpen, Code, Mail, Zap } from 'lucide-react';

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
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Contact', href: '#contact', icon: Mail },
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
          ? 'bg-slate-900/95 backdrop-blur-2xl border-b border-emerald-400/20' 
          : 'bg-transparent'
      }`}
      style={{
        boxShadow: scrolled ? '0 0 30px rgba(16, 185, 129, 0.2)' : 'none'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Neon Logo */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="text-3xl font-black text-emerald-400 flex items-center"
              style={{
                textShadow: '0 0 20px rgba(16, 185, 129, 0.8)'
              }}
            >
              <motion.div
                className="mr-3"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.8))'
                }}
              >
                <Zap size={32} />
              </motion.div>
              Mansi Nayak
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 group ${
                    activeSection === item.href.slice(1)
                      ? 'text-emerald-400'
                      : 'text-gray-300 hover:text-emerald-400'
                  }`}
                  style={{
                    background: activeSection === item.href.slice(1) 
                      ? 'rgba(16, 185, 129, 0.1)' 
                      : 'transparent',
                    border: activeSection === item.href.slice(1) 
                      ? '1px solid rgba(16, 185, 129, 0.3)' 
                      : '1px solid transparent',
                    boxShadow: activeSection === item.href.slice(1) 
                      ? '0 0 20px rgba(16, 185, 129, 0.3)' 
                      : 'none'
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon size={18} />
                  </motion.div>
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-3 rounded-xl text-gray-400 hover:text-emerald-400 focus:outline-none"
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                boxShadow: '0 0 15px rgba(16, 185, 129, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ 
                boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)'
              }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
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
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-slate-900/98 backdrop-blur-2xl border-t border-emerald-400/20"
            style={{
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.2)'
            }}
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
                  className={`block w-full px-6 py-4 rounded-xl text-base font-bold text-left flex items-center space-x-3 transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-emerald-400'
                      : 'text-gray-300 hover:text-emerald-400'
                  }`}
                  style={{
                    background: activeSection === item.href.slice(1) 
                      ? 'rgba(16, 185, 129, 0.1)' 
                      : 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    boxShadow: activeSection === item.href.slice(1) 
                      ? '0 0 20px rgba(16, 185, 129, 0.3)' 
                      : 'none'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    x: 10,
                    boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-violet-500 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      boxShadow: '0 0 15px rgba(16, 185, 129, 0.5)'
                    }}
                  >
                    <item.icon size={20} className="text-gray-900" />
                  </motion.div>
                  <span>{item.name}</span>
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