
import React, { useState } from 'react';
import { Code, Database, Cloud, Brain, Users, Globe, ChevronDown, ChevronUp } from 'lucide-react';

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'R', 'HTML/CSS', 'PHP'],
      level: 'Advanced'
    },
    {
      title: 'AI/ML & Data Science',
      icon: Brain,
      skills: ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'TensorFlow', 'PyTorch', 'NumPy', 'Pandas', 'Scikit-learn'],
      level: 'Advanced'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['React', 'React Native', 'Node.js', 'FastAPI', 'Next.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'],
      level: 'Advanced'
    },
    {
      title: 'Cloud & Platforms',
      icon: Cloud,
      skills: ['Google Cloud Platform', 'Firebase', 'Vertex AI', 'AWS', 'Docker', 'Git', 'GitHub Actions'],
      level: 'Intermediate'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase Firestore', 'SQLite'],
      level: 'Intermediate'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Team Leadership', 'Problem Solving', 'Communication', 'Project Management', 'Agile Development', 'Public Speaking'],
      level: 'Advanced'
    }
  ];

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-slate-100 text-center mb-16">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isExpanded = expandedCategories.includes(index);
            
            return (
              <div
                key={index}
                className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-sky-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-sky-400/20 cursor-pointer"
                onClick={() => toggleCategory(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <IconComponent className="text-sky-400" size={32} />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">{category.title}</h3>
                      <span className="text-sm text-amber-400">{category.level}</span>
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                </div>
                
                {isExpanded && (
                  <div className="space-y-2 animate-fade-in">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                        <span className="text-slate-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Languages Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-slate-100 mb-8">Languages</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { lang: 'English', level: 'Fluent' },
              { lang: 'Hindi', level: 'Fluent/Native' },
              { lang: 'Telugu', level: 'Fluent/Native' }
            ].map((language, index) => (
              <div key={index} className="bg-slate-900/80 backdrop-blur-sm hover:bg-sky-400/20 rounded-lg px-6 py-3 transition-all duration-300 transform hover:scale-105 border border-slate-700/50">
                <span className="text-slate-100 font-medium">{language.lang}</span>
                <span className="text-slate-400 ml-2">({language.level})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
