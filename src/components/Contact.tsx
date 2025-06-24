import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, MessageCircle, Send, Check, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

// Update your handleSubmit function like this:

// Update your handleSubmit function like this:

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const serviceID = 'service_fya3htx';
  const adminTemplateID = 'template_zb2wlmn';
  const userTemplateID = 'template_vf747z2';
  const publicKey = 'PIwUvePlyexDt9QBg';

  // Create template parameters matching your EmailJS template variables
  const adminTemplateParams = {
    from_name: formData.from_name,
    from_email: formData.from_email,  // Match template variable {{from_email}}
    subject: formData.subject,
    message: formData.message
  };

  const userTemplateParams = {
    from_name: formData.from_name,
    email: formData.from_email,  // For auto-reply template that uses {{email}}
    subject: formData.subject,
    message: formData.message
  };

  try {
    // Send admin notification
    await emailjs.send(serviceID, adminTemplateID, adminTemplateParams, publicKey);
    
    // Send user confirmation
    await emailjs.send(serviceID, userTemplateID, userTemplateParams, publicKey);

    setIsSubmitted(true);
    setFormData({ from_name: '', from_email: '', subject: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 3000);
  } catch (error) {
    alert('❌ Failed to send message. Try again later.');
    console.error('EmailJS error:', error);
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mansinayak170@gmail.com",
      href: "mailto:mansinayak170@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/mansi-100",
      href: "https://github.com/mansi-100",
      color: "from-gray-500 to-gray-700"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/mansi-nayak-a575b3269/",
      color: "from-blue-600 to-blue-800"
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects? Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h3 className="text-2xl font-bold text-white mb-8">Get In Touch</motion.h3>
            <motion.p className="text-gray-300 mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, innovative projects, or collaborate on cutting-edge technology solutions.
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mr-4`}>
                    <info.icon className="text-white" size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                  <ExternalLink className="text-cyan-400" size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/30 relative overflow-hidden">
              <div className="relative z-10">
                <motion.h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageCircle className="mr-3 text-cyan-400" size={24} />
                  Send a Message
                </motion.h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="from_name" className="text-sm text-gray-300 mb-2 block">Name *</label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="from_email" className="text-sm text-gray-300 mb-2 block">Email *</label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm text-gray-300 mb-2 block">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm text-gray-300 mb-2 block">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white resize-none"
                      placeholder="Tell me about your project or just say hi!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 ${
                      isSubmitted
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <Check size={20} />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
