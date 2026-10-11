import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';
import { SkillCategory, SkillItem } from '../types';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const SkillCard: React.FC<{ category: SkillCategory; index: number }> = ({ category, index }) => {
  const Icon = category.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex items-center mb-6 relative z-10">
        <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg group-hover:bg-primary-light/10 transition-colors">
          <Icon className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-primary-light transition-colors" />
        </div>
        <h3 className="ml-4 text-xl font-bold text-slate-800 dark:text-slate-100">{category.title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2 relative z-10">
        {category.skills.map((skill: SkillItem) => (
          <span
            key={skill.name}
            className="text-sm px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-600"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { language, t } = useLanguage();
  const categories = SKILL_CATEGORIES[language];

  return (
    <Section 
      id="skills" 
      title={t("Tech Stack & Skills", "技术栈 & 核心能力")}
      subtitle={t(
        "Core technologies and engineering practices used across backend and AI application projects.",
        "在后端业务与 AI 应用项目中使用的核心技术与工程实践。"
      )}
      lightBackground
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
