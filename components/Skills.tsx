import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';
import { SkillCategory, SkillItem } from '../types';
import { motion } from 'framer-motion';

const SkillCard: React.FC<{ category: SkillCategory; index: number }> = ({ category, index }) => {
  const Icon = category.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Magic Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex items-center mb-6 relative z-10">
        <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-primary-light/10 transition-colors">
          <Icon className="w-6 h-6 text-slate-600 group-hover:text-primary-light transition-colors" />
        </div>
        <h3 className="ml-4 text-xl font-bold text-slate-800">{category.title}</h3>
      </div>
      
      <div className="space-y-4 relative z-10">
        {category.skills.map((skill: SkillItem, idx) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700">{skill.name}</span>
              <span className="text-sm text-slate-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <motion.div 
                className="bg-primary h-2 rounded-full group-hover:bg-primary-light transition-colors duration-300"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 + (idx * 0.1), ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <Section 
      id="skills" 
      title="技术栈 & 核心能力" 
      subtitle="构建高可用、高性能分布式系统的全面技术储备。"
      lightBackground
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;