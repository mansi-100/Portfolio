import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Neon Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#10b981" strokeWidth="1"/>
              <circle cx="10" cy="10" r="3" fill="#10b981"/>
              <circle cx="90" cy="10" r="3" fill="#8b5cf6"/>
              <circle cx="90" cy="90" r="3" fill="#ec4899"/>
              <circle cx="10" cy="90" r="3" fill="#3b82f6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Floating Neon Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`neon-particle-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `linear-gradient(45deg, ${
              i % 4 === 0 ? '#10b981' : 
              i % 4 === 1 ? '#8b5cf6' : 
              i % 4 === 2 ? '#ec4899' : '#3b82f6'
            }, transparent)`,
            boxShadow: `0 0 10px ${
              i % 4 === 0 ? '#10b981' : 
              i % 4 === 1 ? '#8b5cf6' : 
              i % 4 === 2 ? '#ec4899' : '#3b82f6'
            }`
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Neon Waves */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-96 opacity-20"
        style={{
          background: `
            linear-gradient(180deg, 
              transparent 0%, 
              rgba(16, 185, 129, 0.1) 30%, 
              rgba(139, 92, 246, 0.1) 60%, 
              rgba(236, 72, 153, 0.1) 100%
            )
          `
        }}
        animate={{
          scaleY: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Geometric Neon Shapes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`neon-shape-${i}`}
          className="absolute opacity-30"
          style={{
            width: 30 + (i % 3) * 20,
            height: 30 + (i % 3) * 20,
            borderRadius: i % 3 === 0 ? '50%' : '0%',
            border: `2px solid ${
              i % 4 === 0 ? '#10b981' : 
              i % 4 === 1 ? '#8b5cf6' : 
              i % 4 === 2 ? '#ec4899' : '#3b82f6'
            }`,
            boxShadow: `0 0 20px ${
              i % 4 === 0 ? '#10b981' : 
              i % 4 === 1 ? '#8b5cf6' : 
              i % 4 === 2 ? '#ec4899' : '#3b82f6'
            }40`,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Digital Rain Effect */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`digital-rain-${i}`}
            className="absolute text-emerald-400 font-mono text-sm select-none"
            style={{
              left: `${(i * 5) % 100}%`,
              top: '-10%',
              textShadow: '0 0 10px #10b981'
            }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear",
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="mb-3">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Neon Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default AnimatedBackground;