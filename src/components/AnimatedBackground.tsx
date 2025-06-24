import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Enhanced Gradient Mesh */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 0, 110, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 60% 30%, rgba(0, 255, 136, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 90% 70%, rgba(255, 100, 200, 0.1) 0%, transparent 50%)
          `
        }}
        animate={{
          scale: [1, 1.2, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Geometric Shapes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute opacity-20"
          style={{
            width: 20 + (i % 4) * 15,
            height: 20 + (i % 4) * 15,
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0%' : '25%',
            background: `linear-gradient(45deg, ${
              i % 5 === 0 ? '#00f5ff' : 
              i % 5 === 1 ? '#ff006e' : 
              i % 5 === 2 ? '#8b5cf6' : 
              i % 5 === 3 ? '#00ff88' : '#ff6b35'
            }, transparent)`,
            border: `2px solid ${
              i % 5 === 0 ? '#00f5ff' : 
              i % 5 === 1 ? '#ff006e' : 
              i % 5 === 2 ? '#8b5cf6' : 
              i % 5 === 3 ? '#00ff88' : '#ff6b35'
            }`,
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
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 180, 360],
            scale: [1, 1.5, 0.8, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Enhanced Matrix Effect */}
      <div className="absolute inset-0 opacity-15">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute text-cyan-400 font-mono text-xs select-none"
            style={{
              left: `${(i * 4) % 100}%`,
              top: '-10%',
            }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          >
            {Array.from({ length: 25 }).map((_, j) => (
              <motion.div 
                key={j} 
                className="mb-2"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: j * 0.1,
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Floating Orbs with Enhanced Animation */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full opacity-30 blur-2xl"
          style={{
            width: 150 + Math.random() * 200,
            height: 150 + Math.random() * 200,
            background: `radial-gradient(circle, ${
              i % 4 === 0 ? 'rgba(0, 245, 255, 0.4)' : 
              i % 4 === 1 ? 'rgba(255, 0, 110, 0.4)' : 
              i % 4 === 2 ? 'rgba(139, 92, 246, 0.4)' : 'rgba(0, 255, 136, 0.4)'
            }, transparent)`
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [1, 1.8, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Particle System */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: `linear-gradient(45deg, ${
              i % 4 === 0 ? '#00f5ff' : 
              i % 4 === 1 ? '#ff006e' : 
              i % 4 === 2 ? '#8b5cf6' : '#00ff88'
            }, transparent)`,
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
            scale: [0, 2, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Animated Waves */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-64 opacity-20"
        style={{
          background: `
            linear-gradient(180deg, transparent 0%, rgba(0, 245, 255, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)
          `
        }}
        animate={{
          scaleY: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;