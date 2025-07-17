
import React from 'react';
import { Download, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';

const Resume = () => {
  const timeline = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B.S. in Computer Science',
      organization: 'Georgia State University',
      period: '2023 - 2025',
      color: 'sky'
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'UX Developer Intern',
      organization: 'UnSchool',
      period: 'March 2023 - May 2023',
      color: 'amber'
    },
    {
      type: 'achievement',
      icon: Award,
      title: '1st Place - EmoryHacks',
      organization: 'NeuroSpeak Project',
      period: '2024',
      color: 'sky'
    }
  ];

  return (
    <section id="resume" className="py-20 px-6 bg-slate-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-slate-100 text-center mb-16">Resume</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Resume Actions */}
          <div className="space-y-8">
            <div className="bg-slate-700 rounded-lg p-8 border border-slate-600">
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">Get My Resume</h3>
              <div className="space-y-4">
                <button className="w-full bg-sky-400 hover:bg-sky-500 text-slate-900 px-6 py-3 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 transform hover:scale-105">
                  <Download size={20} />
                  Download Resume
                </button>
                <button className="w-full border-2 border-amber-400 hover:bg-amber-400 text-amber-400 hover:text-slate-900 px-6 py-3 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 transform hover:scale-105">
                  <ExternalLink size={20} />
                  Open in New Tab
                </button>
              </div>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700 rounded-lg p-6 text-center border border-slate-600 hover:border-sky-400/50 transition-colors">
                <div className="text-3xl font-bold text-sky-400">4+</div>
                <div className="text-slate-300">Major Projects</div>
              </div>
              <div className="bg-slate-700 rounded-lg p-6 text-center border border-slate-600 hover:border-amber-400/50 transition-colors">
                <div className="text-3xl font-bold text-amber-400">1</div>
                <div className="text-slate-300">Hackathon Win</div>
              </div>
              <div className="bg-slate-700 rounded-lg p-6 text-center border border-slate-600 hover:border-green-400/50 transition-colors">
                <div className="text-3xl font-bold text-green-400">1+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
              <div className="bg-slate-700 rounded-lg p-6 text-center border border-slate-600 hover:border-red-400/50 transition-colors">
                <div className="text-3xl font-bold text-red-400">3.1</div>
                <div className="text-slate-300">GPA</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-100 mb-6">Experience Timeline</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-600"></div>
              
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const colorClasses = {
                  sky: 'bg-sky-400 text-slate-900',
                  amber: 'bg-amber-400 text-slate-900'
                };
                
                return (
                  <div key={index} className="relative mb-8">
                    <div className={`absolute left-4 w-4 h-4 rounded-full border-4 border-slate-800 ${colorClasses[item.color as keyof typeof colorClasses]}`}></div>
                    <div className="ml-16">
                      <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
                        <div className="flex items-start gap-3">
                          <IconComponent size={20} className="text-sky-400 mt-1" />
                          <div>
                            <h4 className="font-semibold text-slate-100">{item.title}</h4>
                            <p className="text-slate-300">{item.organization}</p>
                            <p className="text-slate-400 text-sm">{item.period}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
