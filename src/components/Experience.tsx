import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building, Code, Award, Briefcase, X, Eye, Download, ZoomIn, ZoomOut } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Type definitions
interface Certificate {
  available: boolean;
  certificateImage?: string;
  recommendationImage?: string;
  certificateUrl?: string;
  recommendationUrl?: string;
  hasRecommendation?: boolean;
  certificateTitle?: string;
  recommendationTitle?: string;
  showOption?: boolean; // New field to control if certificate option should be shown
}

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: LucideIcon;
  color: string;
  certificate: Certificate;
}

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

const experiences: Experience[] = [
  {
    title: ".NET Developer Intern",
    company: "Satva Solutions",
    location: "Science City, Ahmedabad, India",
    duration: "Jan 2025 - June 2025",
    type: "Internship",
    description: "6-month intensive internship focusing on .NET development, web applications, and enterprise software solutions.",
    highlights: [
      "Developed enterprise web applications using ASP.NET Core and Ado.Net",
      "Implemented secure RESTful APIs with JWT authentication",
      "Collaborated with senior developers on large-scale projects",
      "Gained expertise in .NET development and API Integrations",
      "Built responsive frontend interfaces using React and modern CSS frameworks"
    ],
    technologies: [".NET Core", "C#", "Ado.Net", ".NET MVC", "MongoDB", "SQL Server", "React", "Azure", "JWT", "REST APIs"],
    icon: Code,
    color: "from-blue-500 to-indigo-600",
    certificate: {
      available: false,
      certificateImage: "",
      certificateUrl: "",
      certificateTitle: "Satva Solutions .NET Developer Certificate",
      showOption: true
    }
  },
  {
    title: "Android App Developer Trainee",
    company: "CognoRise InfoTech",
    location: "Chennai · Remote",
    duration: "May 2024 - Jun 2024",
    type: "Remote Internship",
    description: "2-month internship focused on real-world project development and teamwork in a remote setting.",
    highlights: [
      "Collaborated with cross-functional teams on assigned projects",
      "Improved remote work efficiency and time management skills",
      "Explored modern App development practices"
    ],
    technologies: ["Android", "Java", "XML", "Firebase"],
    icon: Briefcase,
    color: "from-yellow-400 to-orange-500",
    certificate: {
      available: true,
      certificateImage: "/ml.jpg",
      certificateUrl: "",
      certificateTitle: "CognoRise InfoTech Android Developer Certificate",
      showOption: true
    }
  },
  {
    title: "Android Application Developer Intern",
    company: "Prodigy InfoTech",
    location: "Mumbai · Remote",
    duration: "15 May 2024 - 15 June 2024",
    type: "Remote Internship",
    description: "1-month Android development internship with outstanding performance, focusing on building and deploying mobile applications with exceptional technical skills and problem-solving abilities.",
    highlights: [
      "Developed Android apps with Java and XML with outstanding remarks",
      "Built responsive layouts and interactive UI components",
      "Tested and deployed apps to Android devices",
      "Demonstrated exceptional technical skills and industry understanding",
      "Exhibited remarkable problem-solving abilities and learning aptitude",
      "Received Letter of Recommendation for exceptional performance"
    ],
    technologies: ["Android", "Java", "XML", "Firebase"],
    icon: Code,
    color: "from-pink-500 to-purple-600",
    certificate: {
      available: true,
      certificateImage: "/android_prodigy.jpg",
      recommendationImage: "/LOR.jpg",
      certificateUrl: "",
      recommendationUrl: "",
      hasRecommendation: true,
      certificateTitle: "Prodigy InfoTech Android Developer Certificate",
      recommendationTitle: "Prodigy InfoTech Letter of Recommendation",
      showOption: true
    }
  },
  {
    title: "App Developer Intern",
    company: "CodeAlpha",
    location: "Lucknow · Remote",
    duration: "May 2024 - Jun 2024",
    type: "Remote Internship",
    description: "Remote internship focused on mobile and web app development.",
    highlights: [
      "Created functional mobile applications from scratch",
      "Applied API integration techniques",
      "Enhanced debugging and deployment skills"
    ],
    technologies: ["Android","API Integrations", "XML", "APIs"],
    icon: Briefcase,
    color: "from-red-400 to-pink-500",
    certificate: {
      available: false,
      certificateImage: "",
      certificateUrl: "",
      certificateTitle: "CodeAlpha Certificate - Not Available",
      showOption: true
    }
  },
  {
    title: "Independent Project Developer",
    company: "Self-Directed Learning",
    location: "Remote",
    duration: "Jan 2023-till present",
    type: "Personal Projects",
    description: "Continuously building innovative projects to master new technologies and solve real-world problems.",
    highlights: [
      "Built full-stack applications using modern frameworks and libraries",
      "Developed IoT solution with sensor integration and data analytics",
      "Created mobile applications with cross-platform compatibility",
      "Implemented secure authentication systems and payment gateways",
      "Contributed to open-source projects and maintained GitHub repositories"
    ],
    technologies: ["React", ".NET Core", "MongoDB", "SQL Server", "Flutter", "Android", "IoT", "Arduino", "Python", "Java"],
    icon: Briefcase,
    color: "from-green-500 to-teal-600",
    certificate: {
      available: false,
      certificateImage: "",
      certificateUrl: "",
      certificateTitle: "Personal Projects Portfolio",
      showOption: false // Hide certificate option for personal projects
    }
  }
];

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
    const [activeTab, setActiveTab] = useState<'certificate' | 'recommendation'>('certificate');
    const [isZoomed, setIsZoomed] = useState(false);

    const currentImage = activeTab === 'certificate' ? certificate.certificateImage : certificate.recommendationImage;
    const currentTitle = activeTab === 'certificate' ? certificate.certificateTitle : certificate.recommendationTitle;
    const currentUrl = activeTab === 'certificate' ? certificate.certificateUrl : certificate.recommendationUrl;

    // Check if current URL is valid for download
    const hasValidDownloadUrl = currentUrl && currentUrl !== "" && currentUrl !== "#";

    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gray-800 rounded-lg max-w-6xl w-full max-h-[95vh] overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="text-white" size={20} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">Credentials</h3>
                  <p className="text-gray-300 text-sm">{currentTitle}</p>
                </div>
                
                {certificate.hasRecommendation && (
                  <div className="flex bg-gray-700/50 rounded-lg p-1">
                    <motion.button
                      onClick={() => setActiveTab('certificate')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === 'certificate'
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      Certificate
                    </motion.button>
                    <motion.button
                      onClick={() => setActiveTab('recommendation')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === 'recommendation'
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      Recommendation
                    </motion.button>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                {/* Zoom Toggle - Only show if image exists */}
                {currentImage && (
                  <motion.button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={isZoomed ? "Zoom Out" : "Zoom In"}
                  >
                    {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
                  </motion.button>
                )}
                
                {/* Download Button - Only show if valid URL exists */}
                {hasValidDownloadUrl && (
                  <motion.a
                    href={currentUrl}
                    download
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Download"
                  >
                    <Download size={20} />
                  </motion.a>
                )}
                
                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>
            
            {/* Image Display */}
            <div className="p-6 overflow-auto max-h-[calc(95vh-140px)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center"
                >
                  {currentImage ? (
                    <motion.div
                      className={`relative ${isZoomed ? 'w-full' : 'max-w-4xl'} overflow-hidden rounded-lg shadow-2xl`}
                      animate={{ scale: isZoomed ? 1.2 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={currentImage}
                        alt={currentTitle}
                        className="w-full h-auto object-contain bg-white rounded-lg"
                        style={{ 
                          maxHeight: isZoomed ? 'none' : '70vh',
                          cursor: isZoomed ? 'zoom-out' : 'zoom-in'
                        }}
                        onClick={() => setIsZoomed(!isZoomed)}
                      />
                      
                      {/* Image Overlay for Better Readability */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      className="flex flex-col items-center justify-center p-12 bg-gray-700/30 rounded-lg border-2 border-dashed border-gray-600"
                      whileHover={{ borderColor: "rgba(0, 245, 255, 0.5)" }}
                    >
                      <Award className="text-gray-400 mb-4" size={48} />
                      <p className="text-gray-400 text-lg font-medium">Certificate Image Not Available</p>
                      <p className="text-gray-500 text-sm mt-2">Please upload the certificate image</p>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
              
              {/* Action Buttons */}
              {currentImage && (
                <motion.div
                  className="flex justify-center space-x-4 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isZoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                    <span>{isZoomed ? 'Zoom Out' : 'Zoom In'}</span>
                  </motion.button>
                  
                  {/* Only show download button if valid URL exists */}
                  {hasValidDownloadUrl && (
                    <motion.a
                      href={currentUrl}
                      download
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={16} />
                      <span>Download {activeTab === 'certificate' ? 'Certificate' : 'Letter'}</span>
                    </motion.a>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section id="experience" className="py-20 relative">
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
              Experience & Learning Journey
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500 hidden md:block"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated timeline dot */}
                <motion.div 
                  className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-gray-900 hidden md:block"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.5 }}
                />

                <div className="md:ml-20">
                  <motion.div
                    className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/30 relative overflow-hidden group"
                    whileHover={{ 
                      boxShadow: "0 25px 50px rgba(0, 245, 255, 0.2)",
                      borderColor: "rgba(0, 245, 255, 0.5)"
                    }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex items-start space-x-4">
                          <motion.div
                            className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <exp.icon className="text-white" size={24} />
                          </motion.div>
                          
                          <div>
                            <motion.h3 
                              className="text-xl lg:text-2xl font-bold text-white mb-2"
                              whileHover={{ color: "#00f5ff" }}
                            >
                              {exp.title}
                            </motion.h3>
                            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 text-gray-300">
                              <motion.div 
                                className="flex items-center space-x-2 mb-2 lg:mb-0"
                                whileHover={{ x: 5 }}
                              >
                                <Building size={16} />
                                <span className="font-medium">{exp.company}</span>
                              </motion.div>
                              <motion.div 
                                className="flex items-center space-x-2 mb-2 lg:mb-0"
                                whileHover={{ x: 5 }}
                              >
                                <MapPin size={16} />
                                <span>{exp.location}</span>
                              </motion.div>
                              <motion.div 
                                className="flex items-center space-x-2"
                                whileHover={{ x: 5 }}
                              >
                                <Calendar size={16} />
                                <span>{exp.duration}</span>
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end space-y-2 mt-4 lg:mt-0">
                          <motion.span
                            className={`inline-block bg-gradient-to-r ${exp.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {exp.type}
                          </motion.span>
                          
                          {/* Certificate Button - Only show if showOption is true */}
                          {exp.certificate.showOption && (
                            exp.certificate.available ? (
                              <motion.button
                                onClick={() => setSelectedCertificate(exp.certificate)}
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Eye size={16} />
                                <span>View Certificate</span>
                              </motion.button>
                            ) : (
                              <motion.span
                                className="inline-flex items-center space-x-2 bg-gray-600/50 text-gray-400 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed"
                              >
                                <Eye size={16} />
                                <span>Certificate Pending</span>
                              </motion.span>
                            )
                          )}
                        </div>
                      </div>

                      <motion.p 
                        className="text-gray-300 mb-6 leading-relaxed"
                        whileHover={{ scale: 1.01 }}
                      >
                        {exp.description}
                      </motion.p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Award className="mr-2 text-cyan-400" size={20} />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <motion.li
                              key={idx}
                              className="text-gray-300 flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: 0.5 + idx * 0.1 }}
                              whileHover={{ x: 10, color: "#00f5ff" }}
                            >
                              <motion.div 
                                className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"
                                whileHover={{ scale: 1.5 }}
                              />
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              className="bg-gray-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm border border-gray-600/50"
                              whileHover={{ 
                                scale: 1.1, 
                                backgroundColor: "rgba(0, 245, 255, 0.2)",
                                borderColor: "rgba(0, 245, 255, 0.5)"
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ delay: 0.7 + idx * 0.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
};

export default Experience;