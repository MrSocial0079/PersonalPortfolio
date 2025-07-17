import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, MessageCircle, Heart, Coffee } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Show success message
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/MrSocial0079',
      color: 'hover:text-white',
      description: 'Check out my code'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yasaswi-kompella/',
      color: 'hover:text-blue-400',
      description: 'Let\'s connect professionally'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:yashkompella@gmail.com',
      color: 'hover:text-red-400',
      description: 'Send me an email'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yashkompella@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Alpharetta, GA',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageCircle,
      label: 'Response Time',
      value: 'Within 24 hours',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
                Whether you have a question, want to work together, or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="interactive-card glass p-6 rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Find Me Online</h4>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`interactive-card glass p-4 rounded-xl flex items-center gap-4 text-foreground ${social.color} transition-all duration-300`}
                    >
                      <Icon size={24} />
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="interactive-card glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-2 border-muted rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors peer"
                    required
                  />
                  <motion.label
                    htmlFor="name"
                    animate={{
                      y: focusedField === 'name' || formData.name ? -24 : 0,
                      scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                      color: focusedField === 'name' ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'
                    }}
                    className="absolute left-4 top-3 text-muted-foreground pointer-events-none origin-left"
                  >
                    Your Name
                  </motion.label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-2 border-muted rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                  <motion.label
                    htmlFor="email"
                    animate={{
                      y: focusedField === 'email' || formData.email ? -24 : 0,
                      scale: focusedField === 'email' || formData.email ? 0.85 : 1,
                      color: focusedField === 'email' ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'
                    }}
                    className="absolute left-4 top-3 text-muted-foreground pointer-events-none origin-left"
                  >
                    Email Address
                  </motion.label>
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-2 border-muted rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                  <motion.label
                    htmlFor="subject"
                    animate={{
                      y: focusedField === 'subject' || formData.subject ? -24 : 0,
                      scale: focusedField === 'subject' || formData.subject ? 0.85 : 1,
                      color: focusedField === 'subject' ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'
                    }}
                    className="absolute left-4 top-3 text-muted-foreground pointer-events-none origin-left"
                  >
                    Subject
                  </motion.label>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-2 border-muted rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                  />
                  <motion.label
                    htmlFor="message"
                    animate={{
                      y: focusedField === 'message' || formData.message ? -24 : 0,
                      scale: focusedField === 'message' || formData.message ? 0.85 : 1,
                      color: focusedField === 'message' ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'
                    }}
                    className="absolute left-4 top-3 text-muted-foreground pointer-events-none origin-left"
                  >
                    Your Message
                  </motion.label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg neon-glow transition-all duration-300 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-border"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2 text-lg">
            Built with <Coffee size={16} className="text-yellow-400" /> by 
            <span className="text-gradient font-semibold">Yasaswi Kompella</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 All rights reserved. Crafted with modern web technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;