import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  lightBackground?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "",
  lightBackground = false
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 md:px-12 lg:px-24 ${lightBackground ? 'bg-slate-50' : 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <motion.div 
            className="w-20 h-1 bg-primary-light mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;