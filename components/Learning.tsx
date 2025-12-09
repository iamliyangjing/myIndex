import React from 'react';
import Section from './Section';
import { LEARNING_DATA } from '../constants';
import { BookOpen, Cpu, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Learning: React.FC = () => {
  const { language, t } = useLanguage();
  const data = LEARNING_DATA[language];

  // Simple category mapping for icons (could be improved with explicit icon mapping in data)
  const getIcon = (category: string) => {
    if (category.includes('Language') || category.includes('语言')) return <BookOpen className="w-5 h-5 text-accent-orange" />;
    if (category.includes('Cloud') || category.includes('平台')) return <Layers className="w-5 h-5 text-primary-light" />;
    if (category.includes('Core') || category.includes('原理')) return <Cpu className="w-5 h-5 text-accent-green" />;
    return <BookOpen className="w-5 h-5 text-slate-400" />;
  };

  return (
    <Section 
      id="learning" 
      title={t("Currently Learning", "持续学习")}
      subtitle={t(
        "Staying sharp with cutting-edge technologies and deep diving into core principles.",
        "保持对前沿技术的敏锐度，持续深耕底层原理。"
      )}
      lightBackground
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Background Gradient Animation on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 via-accent-orange/5 to-accent-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded bg-slate-100 text-slate-600 uppercase tracking-wide group-hover:bg-white/80 transition-colors`}>
                  {item.category}
                </span>
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {getIcon(item.category)}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                {item.topic}
              </h3>
              <p className="text-slate-600 text-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Learning;
