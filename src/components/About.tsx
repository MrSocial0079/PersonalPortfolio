import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Coffee, Code2, Gamepad2, Music, Camera } from 'lucide-react';

const About = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const skills = [
    { name: 'Python', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'Java', level: 85, color: 'from-orange-400 to-orange-600' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 75, color: 'from-cyan-400 to-cyan-600' },
    { name: 'FastAPI', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Cloud Platforms', level: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'AI/ML', level: 75, color: 'from-indigo-400 to-indigo-600' },
    { name: 'Data Science', level: 70, color: 'from-red-400 to-red-600' },
  ];

  const funFacts = [
    { icon: Coffee, text: '500+ cups of coffee coded with', color: 'text-yellow-400' },
    { icon: Code2, text: '10,000+ lines of code written', color: 'text-green-400' },
    { icon: Music, text: 'Music lover - helps me focus while coding', color: 'text-blue-400' },
    { icon: Gamepad2, text: 'Badminton & Swimming enthusiast', color: 'text-purple-400' },
    { icon: Camera, text: 'Always browsing for latest tech trends', color: 'text-pink-400' },
    { icon: Sparkles, text: 'Passionate about backend & cloud systems', color: 'text-cyan-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            I'm a passionate backend-focused software engineer who loves building intelligent, scalable systems that solve real-world problems.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Bio and Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 mx-auto"
              >
                <div className="absolute inset-0 rounded-3xl neon-border animate-pulse-glow"></div>
                <img
                  src="/lovable-uploads/hero.png"
                  alt="Yasaswi Kompella"
                  className="w-full h-full object-cover rounded-3xl relative z-10"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>
            </div>

            {/* Bio */}
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-primary font-semibold">Yasaswi Kompella</span>, a Computer Science student at Georgia State University specializing in backend development, cloud platforms, AI/ML, and data science.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans building scalable backend systems with Python and Java, implementing machine learning solutions, and leveraging cloud technologies to create efficient, data-driven applications that make a meaningful impact.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="https://yasaswi-kompella.tiiny.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-foreground hover:text-primary transition-all duration-300 neon-border font-medium"
                >
                  <span>View Resume</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-center lg:text-left">
              Technical <span className="text-gradient">Skills</span>
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      {activeSkill === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-white/20 rounded-full animate-pulse"
                        />
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fun Facts Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Fun <span className="text-gradient">Facts</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="interactive-card glass p-6 rounded-xl text-center"
                >
                  <Icon size={32} className={`${fact.color} mx-auto mb-4`} />
                  <p className="text-foreground font-medium">{fact.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;