
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const SkillsChart = () => {
  const skillsData = [
    { name: 'Programming Languages', value: 25, color: '#38BDF8' },
    { name: 'AI/ML & Data Science', value: 20, color: '#FACC15' },
    { name: 'Cloud & Platforms', value: 15, color: '#F59E0B' },
    { name: 'Web Development', value: 20, color: '#10B981' },
    { name: 'Databases', value: 10, color: '#8B5CF6' },
    { name: 'Soft Skills', value: 10, color: '#EF4444' }
  ];

  const renderCustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 p-3 rounded-lg border border-slate-600 shadow-lg">
          <p className="text-slate-200">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 px-6 bg-slate-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-slate-100 text-center mb-16">Skills Overview</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="bg-slate-900 rounded-lg p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={skillsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={1500}
                >
                  {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={renderCustomTooltip} />
                <Legend 
                  wrapperStyle={{ color: '#F1F5F9' }}
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <div key={index} className="bg-slate-700 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-slate-100 font-semibold">{skill.name}</h3>
                  <span className="text-slate-300">{skill.value}%</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.value}%`, 
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}40`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsChart;
