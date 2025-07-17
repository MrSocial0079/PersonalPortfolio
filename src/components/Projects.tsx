import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Trophy, Star } from 'lucide-react';

import neuroSpeakBrain from '../assets/neurospeak-brain.jpg';
import loveLinkHearts from '../assets/lovelink-hearts.jpg';
import movieTheater from '../assets/movie-theater.jpg';
import finunitySavings from '../assets/finunity-savings.jpg';
import safeCrashSafety from '../assets/safecrash-safety.jpg';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ['All', 'AI/ML', 'Web', 'Mobile', 'Backend'];

  const projects = [
    {
      id: 1,
      title: 'NeuroSpeak',
      subtitle: '🏆 1st Place EmoryHacks Winner',
      description: 'Revolutionary AI-powered speech therapy application for aphasia patients with advanced TTS/STT integration and personalized therapy sessions.',
      longDescription: 'Built with React Native and FastAPI, featuring Google Cloud Vertex AI for intelligent speech analysis and real-time progress tracking.',
      tags: ['React Native', 'FastAPI', 'GCP Vertex AI', 'TTS/STT', 'Machine Learning'],
      category: 'AI/ML',
      featured: true,
      award: true,
      github: 'https://github.com/ItsHariii/NeuroSpeak',
      image: neuroSpeakBrain,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'SafeCRASH',
      subtitle: 'Disaster Detection AI',
      description: 'Computer vision AI system for automated damage assessment and intelligent insurance pricing using satellite imagery.',
      longDescription: 'Deep learning system that processes satellite imagery and drone footage to assess disaster damage in real-time.',
      tags: ['Computer Vision', 'Python', 'Deep Learning', 'Insurance Tech', 'OpenCV'],
      category: 'AI/ML',
      featured: true,
      github: 'https://github.com/MrSocial0079/SafeCRASH',
      image: safeCrashSafety,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 3,
      title: 'LoveLink',
      subtitle: 'Social Connection Platform',
      description: 'Social platform with real-time messaging, matching algorithms, and secure authentication.',
      longDescription: 'Built with React and Node.js, featuring Socket.io for real-time communication and MongoDB for scalable data storage.',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT Auth'],
      category: 'Web',
      featured: true,
      github: 'https://github.com/ItsHariii/PeachHacks2025',
      image: loveLinkHearts,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 4,
      title: 'Movie Recommendation Engine',
      subtitle: 'ML Data Science Project',
      description: 'Intelligent recommendation system using collaborative filtering and content-based algorithms.',
      longDescription: 'Analyzed movie datasets using advanced feature engineering and machine learning techniques for personalized recommendations.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Data Analysis'],
      category: 'AI/ML',
      github: 'https://github.com/MrSocial0079/movies-dataset',
      image: movieTheater,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 5,
      title: 'FinUnity (F.L.A.S.H)',
      subtitle: 'Financial AI Assistant',
      description: 'AI-powered financial literacy platform helping users make informed decisions with personalized insights.',
      longDescription: 'Built with FastAPI and Firebase, featuring GCP AI for financial analysis and personalized recommendations.',
      tags: ['FastAPI', 'Firebase', 'GCP', 'AI/ML', 'FinTech'],
      category: 'AI/ML',
      image: finunitySavings,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of personal projects I've built, focusing on AI/ML, backend systems, and data science solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground neon-glow'
                  : 'glass text-foreground hover:text-primary'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`interactive-card glass rounded-2xl overflow-hidden group relative ${
                  project.featured ? 'xl:col-span-2' : ''
                }`}
              >
                {/* Award Badge */}
                {project.award && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 bg-yellow-400 text-black rounded-full text-sm font-bold">
                      <Trophy size={14} />
                      Winner
                    </div>
                  </div>
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                      <Star size={14} />
                      Featured
                    </div>
                  </div>
                )}

                {/* Image/Preview */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                      >
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
                          >
                            <Github size={20} />
                          </motion.a>
                        )}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-accent transition-colors"
                        >
                          <ExternalLink size={20} />
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>

                  {/* Stats - Removed as these are personal projects */}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-muted text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;