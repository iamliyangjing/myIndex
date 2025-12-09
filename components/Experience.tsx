import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';
import { Calendar, CheckCircle, GitBranch } from 'lucide-react';
import { ExperienceItem } from '../types';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const ExperienceCard: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:flex items-start justify-between group">
        
        {/* Left Side: Time & Company (Desktop) */}
        <div className="hidden md:block md:w-1/3 md:pr-12 md:text-right sticky top-24">
          <div className="inline-flex items-center text-primary-light font-semibold mb-1">
            <Calendar className="w-4 h-4 mr-2" />
            {item.period}
          </div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{item.company}</h3>
          <p className="text-slate-500 font-medium">{item.role}</p>
        </div>

        {/* Timeline Center Line */}
        <div className="absolute left-0 md:left-1/3 top-0 md:transform md:-translate-x-1/2 flex flex-col items-center h-full">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: index * 0.2 }}
            className="w-4 h-4 rounded-full border-4 border-slate-200 bg-white group-hover:border-primary-light group-hover:scale-125 transition-all z-10" 
          />
          <div className="w-0.5 h-full bg-slate-200 -mt-2 group-hover:bg-slate-300 transition-colors" />
        </div>

        {/* Right Side: Details */}
        <div className="md:w-2/3 md:pl-12 pb-16">
          <div className="md:hidden mb-4">
            <span className="text-sm font-bold text-primary-light uppercase tracking-wider mb-1 block">{item.period}</span>
            <h3 className="text-xl font-bold text-slate-900">{item.company}</h3>
            <p className="text-slate-500 font-medium">{item.role}</p>
          </div>

          <p className="text-slate-600 mb-6 leading-relaxed">
            {item.description}
          </p>

          <div className="space-y-3 mb-8">
            {item.achievements.map((achievement, i) => (
              <motion.div 
                key={i} 
                className="flex items-start"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-slate-700">{achievement}</span>
              </motion.div>
            ))}
          </div>

          {item.projects && item.projects.length > 0 && (
            <div className="grid grid-cols-1 gap-4">
              {item.projects.map((project, pIndex) => (
                <div key={pIndex} className="bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-primary-light/50 transition-colors hover:bg-white hover:shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-slate-800 flex items-center">
                      <GitBranch className="w-4 h-4 mr-2 text-primary" />
                      {project.name}
                    </h4>
                    {project.link && (
                      <a href={project.link} className="text-sm text-primary-light hover:underline">
                        {t('View Code', '查看代码')}
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const { language, t } = useLanguage();
  const data = EXPERIENCE_DATA[language];

  return (
    <Section 
      id="experience" 
      title={t("Experience & Projects", "工作经历 & 项目")}
      subtitle={t(
        "A track record of solving complex business problems and delivering robust systems.",
        "解决复杂业务问题与交付高健壮性系统的实战记录。"
      )}
    >
      <div className="relative mt-12">
        {data.map((item, index) => (
          <ExperienceCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
