import React from 'react';
import Section from './Section';
import { BOOKS_DATA } from '../constants';
import { BookItem } from '../types';
import { Book, CheckCircle2, Clock, Hourglass } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const StatusBadge: React.FC<{ status: BookItem['status'] }> = ({ status }) => {
  const { t } = useLanguage();

  const config = {
    'Reading': { 
      icon: Clock, 
      text: t('Reading', '阅读中'), 
      classes: 'bg-blue-100 text-blue-700 border-blue-200' 
    },
    'Finished': { 
      icon: CheckCircle2, 
      text: t('Finished', '已读完'), 
      classes: 'bg-emerald-100 text-emerald-700 border-emerald-200' 
    },
    'To Read': { 
      icon: Hourglass, 
      text: t('To Read', '想读'), 
      classes: 'bg-slate-100 text-slate-600 border-slate-200' 
    },
  };

  const { icon: Icon, text, classes } = config[status];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${classes}`}>
      <Icon className="w-3 h-3 mr-1" />
      {text}
    </span>
  );
};

const Books: React.FC = () => {
  const { language, t } = useLanguage();
  const data = BOOKS_DATA[language];

  return (
    <Section 
      id="books" 
      title={t("Reading List", "阅读书单")}
      subtitle={t(
        "Technical depth comes from both coding practice and systematic reading.",
        "技术深度不仅来自代码实践，也来自经典书籍的系统化沉淀。"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((book, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
            className="group flex bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
          >
            {/* Simulated Book Spine/Cover */}
            <div className={`w-24 md:w-32 flex-shrink-0 bg-gradient-to-br ${book.coverColor} flex items-center justify-center p-4 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10"></div>
              {/* Decorative line to look like a book spine */}
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-white/20"></div>
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Book className="text-white/90 w-8 h-8 md:w-10 md:h-10 relative z-10" />
              </motion.div>
            </div>

            <div className="p-5 md:p-6 flex flex-col justify-between w-full relative">
              {/* Hover highlight */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-slate-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex justify-between items-start mb-2 relative z-10">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{book.category}</span>
                  <StatusBadge status={book.status} />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug group-hover:text-primary transition-colors relative z-10">
                  {book.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-3 relative z-10">
                  {book.author}
                </p>
                
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 relative z-10">
                  {book.description}
                </p>
              </div>

              {/* Progress Indicator */}
              {book.status === 'Reading' && (
                <div className="mt-4 relative z-10">
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>{t("Progress", "阅读进度")}</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      className="bg-blue-500 h-1.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "45%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Books;
