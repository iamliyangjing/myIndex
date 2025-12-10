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
      // Reduced vertical padding on mobile (py-12) vs desktop (py-16)
      className={`py-12 md:py-16 ${lightBackground ? 'bg-slate-50' : 'bg-white'} ${className}`}
    >
      {/* 
        Responsive Width Logic:
        - Mobile: w-[94%] (Maximize screen real estate, minimal margins)
        - Tablet: w-[90%] 
        - Desktop: w-[80%] (Keep the elegant narrow look)
        - Max Width: max-w-6xl (Allow slightly wider on huge screens)
      */}
      <div className="w-[94%] md:w-[90%] lg:w-[80%] max-w-6xl mx-auto">
        <motion.div 
          className="mb-10 md:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-2">
              {subtitle}
            </p>
          )}
          <motion.div 
            className="w-16 md:w-20 h-1 bg-primary-light mx-auto mt-4 md:mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;