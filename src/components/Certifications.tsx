import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Software Development Job Simulation',
      company: 'Datacom',
      description: 'Completed comprehensive software development simulation including debugging, feature implementation, and code optimization.',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/gCW7Xki5Y3vNpBmnn/L3NcyCoAjLno9d3T9_gCW7Xki5Y3vNpBmnn_hHx8nLyXwv4ADGTRM_1751946116556_completion_certificate.pdf',
      color: 'from-blue-500 to-cyan-500',
      skills: ['Software Development', 'Debugging', 'Code Optimization']
    },
    {
      id: 2,
      title: 'Software Engineering Job Simulation',
      company: 'Hewlett-Packard',
      description: 'Gained hands-on experience in enterprise software engineering practices and methodologies.',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/fgHAi6dLhpRsGKyyN/da2T3WZCbMAJD7bNB_fgHAi6dLhpRsGKyyN_hHx8nLyXwv4ADGTRM_1752108655129_completion_certificate.pdf',
      color: 'from-green-500 to-emerald-500',
      skills: ['Software Engineering', 'Enterprise Solutions', 'Best Practices']
    },
    {
      id: 3,
      title: 'Cybersecurity Job Simulation',
      company: 'MasterCard',
      description: 'Explored cybersecurity fundamentals and security measures in financial technology systems.',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_hHx8nLyXwv4ADGTRM_1752110069237_completion_certificate.pdf',
      color: 'from-red-500 to-pink-500',
      skills: ['Cybersecurity', 'Risk Assessment', 'Financial Tech']
    },
    {
      id: 4,
      title: 'Cloud Platform Job Simulation',
      company: 'Verizon',
      description: 'Developed expertise in cloud infrastructure, deployment strategies, and platform management.',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/uu47f3odrfruEWjKw/aNJGnRtgfiK5fQqcR_uu47f3odrfruEWjKw_hHx8nLyXwv4ADGTRM_1752016613779_completion_certificate.pdf',
      color: 'from-purple-500 to-indigo-500',
      skills: ['Cloud Computing', 'Infrastructure', 'Platform Management']
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="certifications" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized certifications and job simulations that showcase my commitment to continuous learning and professional development.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="interactive-card glass p-8 rounded-2xl"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center flex-shrink-0`}>
                  <Award size={24} className="text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-lg text-primary font-semibold">{cert.company}</p>
                </div>

                <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-muted text-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
              >
                <span>View Certificate</span>
                <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Certifications', value: '4+', color: 'from-blue-500 to-cyan-500' },
            { label: 'Job Simulations', value: '4', color: 'from-green-500 to-emerald-500' },
            { label: 'Companies', value: '4', color: 'from-purple-500 to-pink-500' },
            { label: 'Skill Areas', value: '15+', color: 'from-orange-500 to-red-500' },
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

export default Certifications;