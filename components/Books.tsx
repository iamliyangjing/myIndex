import React from 'react';
import Section from './Section';
import { BOOKS_DATA } from '../constants';
import { BookItem } from '../types';
import { CheckCircle2, Clock, Hourglass, ExternalLink } from 'lucide-react';
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

// 3D Book Component
const ThreeDBook: React.FC<{ book: BookItem; index: number }> = ({ book, index }) => {
  // Dimensions for the 3D construction
  const width = 160;
  const height = 240;
  const depth = 35; // thickness

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div 
        className="relative group cursor-pointer mb-6"
        style={{ width, height, perspective: '1000px' }}
        onClick={() => window.open(book.link, '_blank')}
      >
        <div 
          className="relative w-full h-full transition-all duration-500 ease-out preserve-3d group-hover:[transform:rotateY(-30deg)_rotateX(5deg)_translateZ(20px)_translateX(10px)]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front Cover */}
          <div 
            className="absolute inset-0 z-10 rounded-r-sm shadow-xl"
            style={{ 
              transform: `translateZ(${depth / 2}px)`,
              backgroundImage: `url(${book.coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-white/20 rounded-r-sm pointer-events-none" />
            
            {/* Book crease/spine shadow on cover */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Back Cover */}
          <div 
            className="absolute inset-0 bg-slate-800 rounded-l-sm"
            style={{ 
              transform: `rotateY(180deg) translateZ(${depth / 2}px)`,
              backgroundColor: book.coverColor 
            }}
          />

          {/* Spine (Left) */}
          <div 
            className="absolute top-0 bottom-0 left-0 flex items-center justify-center overflow-hidden"
            style={{ 
              width: depth,
              transform: `rotateY(-90deg) translateZ(${depth / 2}px)`,
              backgroundColor: book.coverColor,
              // Darken spine slightly for realism
              filter: 'brightness(0.9)'
            }}
          >
             {/* Spine Title (Rotated) */}
             <div 
                className="whitespace-nowrap text-white/90 text-[10px] font-bold tracking-wider"
                style={{ transform: 'rotate(90deg)' }}
             >
                {book.title.length > 25 ? book.title.substring(0, 22) + '...' : book.title}
             </div>
          </div>

          {/* Pages (Right) */}
          <div 
            className="absolute top-2 bottom-2 right-0 bg-white"
            style={{ 
              width: depth - 4, // slightly recessed
              transform: `rotateY(90deg) translateZ(${width - (depth / 2) - 2}px)`,
              background: 'linear-gradient(to right, #f1f5f9 0%, #fff 20%, #f1f5f9 40%, #fff 60%, #f1f5f9 80%, #fff 100%)'
            }}
          />
          
          {/* Pages (Top) */}
          <div 
            className="absolute top-0 right-0 left-0 bg-white"
            style={{ 
              height: depth - 4,
              transform: `rotateX(90deg) translateZ(${depth/2 - 2}px) translateX(2px)`,
              width: width - 4,
              background: '#f8fafc'
            }}
          />
          
          {/* Pages (Bottom) */}
           <div 
            className="absolute bottom-0 right-0 left-0 bg-white shadow-inner"
            style={{ 
              height: depth - 4,
              transform: `rotateX(-90deg) translateZ(${height - (depth/2) - 2}px) translateX(2px)`,
              width: width - 4,
              background: '#f8fafc'
            }}
          />
        </div>
        
        {/* Shadow beneath the book */}
        <div className="absolute bottom-0 left-4 right-4 h-4 bg-black/20 blur-xl rounded-[100%] transition-all duration-500 group-hover:scale-110 group-hover:opacity-40" />
      </div>

      {/* Book Metadata */}
      <div className="text-center max-w-[200px]">
        <div className="mb-2 flex justify-center">
          <StatusBadge status={book.status} />
        </div>
        <h3 
          className="font-bold text-slate-800 leading-tight mb-1 hover:text-primary cursor-pointer transition-colors"
          onClick={() => window.open(book.link, '_blank')}
        >
          {book.title}
        </h3>
        <p className="text-sm text-slate-500 mb-2">{book.author}</p>
        
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {book.description}
        </p>
        
        <a 
          href={book.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs text-primary font-medium mt-2 hover:underline"
        >
          <ExternalLink className="w-3 h-3 mr-1" />
          Details
        </a>
      </div>
    </motion.div>
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
      {/* Increased vertical gap for mobile (gap-16) to prevent 3D elements overlapping with text below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-8 justify-items-center mt-8 md:mt-12">
        {data.map((book, index) => (
          <ThreeDBook key={index} book={book} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Books;