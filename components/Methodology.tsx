import React from 'react';
import Section from './Section';
import { PRINCIPLES } from '../constants';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Methodology: React.FC = () => {
  const { language, t } = useLanguage();
  const data = PRINCIPLES[language];

  return (
    <Section 
      id="methodology" 
      title={t("Engineering Philosophy", "工程哲学")}
      subtitle={t(
        "Coding is just the implementation; thinking is the true architecture.",
        "编码只是实现，思考才是真正的架构。"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary-light/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-primary-light" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Methodology;