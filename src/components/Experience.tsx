import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, GraduationCap, Users, Trophy } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'education',
      icon: GraduationCap,
      title: 'B.S. Computer Science',
      company: 'Georgia State University',
      period: '2023 - 2025',
      location: 'Atlanta, GA',
      description: 'Pursuing Bachelor\'s degree with focus on AI/ML, software engineering, and data structures.',
      achievements: [
        'Relevant Coursework: Data Structures, Algorithms, Database Systems',
        'Active member of Programming Club @ GSU',
        'Current GPA: 3.1'
      ],
      technologies: ['Java', 'Python', 'SQL', 'Software Engineering'],
      color: 'from-blue-500 to-cyan-500',
      current: true
    },
    {
      id: 2,
      type: 'leadership',
      icon: Users,
      title: 'Vice-President',
      company: 'Hindu Yuva @ GSU',
      period: '2023 - Present',
      location: 'Georgia State University',
      description: 'Leading organizational initiatives and community outreach programs for 100+ student members.',
      achievements: [
        'Coordinate cultural events and educational workshops',
        'Manage budget allocation and strategic planning',
        'Promote diversity and inclusion on campus'
      ],
      technologies: ['Leadership', 'Event Management', 'Public Speaking'],
      color: 'from-green-500 to-emerald-500',
      current: true
    },
    {
      id: 3,
      type: 'achievement',
      icon: Trophy,
      title: 'EmoryHacks Winner',
      company: 'NeuroSpeak Project',
      period: '2024',
      location: 'Emory University',
      description: '1st Place winner for developing an AI-powered speech therapy application.',
      achievements: [
        'Led cross-functional team of 4 developers',
        'Implemented AI/ML algorithms for speech analysis',
        'Achieved 95% user satisfaction in testing'
      ],
      technologies: ['React Native', 'AI/ML', 'GCP', 'Team Leadership'],
      color: 'from-yellow-500 to-orange-500',
      award: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From student to leader, here's my path in technology and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative mb-16 ${
                  isEven ? 'md:text-right md:pr-1/2' : 'md:text-left md:pl-1/2'
                }`}
              >
                {/* Timeline Node */}
                <div className={`absolute w-4 h-4 rounded-full border-4 border-background z-10 ${
                  isEven 
                    ? 'left-6 md:left-1/2 md:transform md:-translate-x-2' 
                    : 'left-6 md:left-1/2 md:transform md:-translate-x-2'
                } top-8`}>
                  <div className={`w-full h-full rounded-full bg-gradient-to-r ${exp.color}`}></div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${
                  isEven ? 'md:mr-12' : 'md:ml-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="interactive-card glass p-8 rounded-2xl"
                  >
                    {/* Header */}
                    <div className={`flex items-start gap-4 mb-6 ${
                      isEven ? 'md:flex-row-reverse md:text-right' : ''
                    }`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                          {exp.current && (
                            <span className="px-2 py-1 bg-green-400 text-black rounded-full text-xs font-bold">
                              Current
                            </span>
                          )}
                          {exp.award && (
                            <span className="px-2 py-1 bg-yellow-400 text-black rounded-full text-xs font-bold">
                              Award
                            </span>
                          )}
                        </div>
                        <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-muted text-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Projects Completed', value: '5+', color: 'from-blue-500 to-cyan-500' },
            { label: 'Hackathon Wins', value: '1', color: 'from-yellow-500 to-orange-500' },
            { label: 'Technologies', value: '15+', color: 'from-purple-500 to-pink-500' },
            { label: 'Years Learning', value: '3+', color: 'from-green-500 to-emerald-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="interactive-card glass p-6 rounded-xl text-center"
            >
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;