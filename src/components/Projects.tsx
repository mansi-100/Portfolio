import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Database, Smartphone, Globe, Filter, Eye, ShoppingCart, Brain, QrCode, Cpu } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform with JWT Authentication",
      description: "A comprehensive full-stack e-commerce application with role-based authentication, secure payment integration, and advanced user management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Stripe", "Express.js", "Redux"],
      category: "web",
      github: "#",
      live: "#",
      features: [
        "JWT-based secure authentication system",
        "Role-based access (Customer, Seller, Admin)",
        "Shopping cart and wishlist functionality",
        "Digital wallet integration",
        "Order management system",
        "Product management for sellers",
        "Admin dashboard with analytics",
        "Real-time order tracking"
      ],
      icon: ShoppingCart
    },
    {
      id: 2,
      title: "AI Vision Analyzer",
      description: "An intelligent computer vision application that analyzes images using advanced AI algorithms for object detection and classification.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      technologies: ["Python", "TensorFlow", "OpenCV", "React", "Flask", "Machine Learning"],
      category: "ai",
      github: "https://github.com/mansi-100/AI-Vision-Analyzer.git",
      live: "#",
      features: [
        "Real-time object detection",
        "Image classification with high accuracy",
        "Custom AI model training",
        "Batch processing capabilities",
        "RESTful API for integration",
        "Interactive web interface"
      ],
      icon: Brain
    },
    {
      id: 3,
      title: "QR Scanner with SMS Integration",
      description: "Smart QR code scanner that automatically detects phone numbers and enables instant SMS communication with advanced contact management.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      technologies: ["React Native", "Node.js", "Twilio API", "Camera API", "SQLite"],
      category: "mobile",
      github: "#",
      live: "#",
      features: [
        "Real-time QR code scanning",
        "Automatic phone number detection",
        "Instant SMS sending capability",
        "Contact management system",
        "Scan history tracking",
        "Custom message templates"
      ],
      icon: QrCode
    },
    {
      id: 4,
      title: "Sensor-Based Gesture Detection",
      description: "An innovative Android application that uses device sensors to detect and recognize hand gestures for seamless user interaction.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      technologies: ["Android", "Java", "Sensor APIs", "Machine Learning", "TensorFlow Lite"],
      category: "mobile",
      github: "https://github.com/mansi-100/sensor_based_gesture_detection.git",
      live: "#",
      features: [
        "Real-time gesture recognition",
        "Multiple sensor integration",
        "Machine learning algorithms",
        "Customizable gesture commands",
        "High accuracy detection",
        "Battery optimization"
      ],
      icon: Cpu
    },
    {
      id: 5,
      title: "News API Integration Platform",
      description: "A modern web application that aggregates news from multiple sources using REST APIs with real-time updates and intelligent categorization.",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
      technologies: ["JavaScript", "React", "REST API", "CSS3", "News API", "Redux"],
      category: "web",
      github: "https://github.com/mansi-100/News_api_Integration.git",
      live: "#",
      features: [
        "Real-time news aggregation",
        "Multiple news sources integration",
        "Advanced category filtering",
        "Search functionality",
        "Responsive design",
        "Bookmark favorite articles"
      ],
      icon: Globe
    },
    {
      id: 6,
      title: "Gift of Health - Medical App",
      description: "A comprehensive health and wellness Android application focused on promoting healthy lifestyle choices and medical awareness.",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      technologies: ["Android", "Java", "SQLite", "Material Design", "Firebase"],
      category: "mobile",
      github: "https://github.com/mansi-100/GiftOfHealth_Android_app.git",
      live: "#",
      features: [
        "Health tracking dashboard",
        "Medical appointment reminders",
        "Symptom checker",
        "Medicine tracker",
        "Health tips and articles",
        "Emergency contacts"
      ],
      icon: Database
    },
    {
      id: 7,
      title: "PHP CRUD Management System",
      description: "A complete web application demonstrating full CRUD operations using PHP and MySQL with advanced security features.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "web",
      github: "https://github.com/mansi-100/Mansi_PHP_CRUD.git",
      live: "#",
      features: [
        "Complete CRUD operations",
        "Secure database integration",
        "Form validation",
        "User authentication",
        "Data export functionality",
        "Responsive admin panel"
      ],
      icon: Code
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'web', name: 'Web Apps', icon: Code },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'ai', name: 'AI/ML', icon: Brain },
    { id: 'iot', name: 'IoT', icon: Cpu }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  return (
    <section id="projects" className="py-20 relative">
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
              Featured Projects
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore my innovative projects showcasing cutting-edge technologies and creative solutions
          </p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/30'
              }`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: filter === category.id ? "0 10px 25px rgba(0, 245, 255, 0.3)" : "0 5px 15px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <category.icon size={20} />
              </motion.div>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30"
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 245, 255, 0.2)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Enhanced hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gray-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-purple-500 transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Project icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <project.icon className="text-white" size={20} />
                  </motion.div>
                </div>

                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 mb-4 leading-relaxed"
                    whileHover={{ scale: 1.01 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center"
                          whileHover={{ x: 5, color: "#00f5ff" }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"
                            whileHover={{ scale: 1.5 }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="bg-gray-700/50 text-cyan-400 px-3 py-1 rounded-full text-xs border border-gray-600/50"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(0, 245, 255, 0.2)",
                          borderColor: "rgba(0, 245, 255, 0.5)"
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <Eye size={16} />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/mansi-100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 15px 30px rgba(0, 245, 255, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;