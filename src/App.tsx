import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import FloatingElements from './components/FloatingElements';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-x-hidden">
      <AnimatedBackground />
      <ParticleBackground />
      <FloatingElements />
      
      <div className="relative z-10">
        <Navbar />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </motion.main>
      </div>
    </div>
  );
}

export default App;