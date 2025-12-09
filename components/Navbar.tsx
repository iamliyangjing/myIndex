import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, ExternalLink, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_URL } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: t('Skills', '技术栈'), id: 'skills', type: 'internal' },
    { label: t('Experience', '工作经历'), id: 'experience', type: 'internal' },
    { label: t('Reading', '书单'), id: 'books', type: 'internal' },
    { label: t('Space', '足迹'), id: 'space', type: 'internal' },
    { label: t('Blog', '博客'), url: BLOG_URL, type: 'external' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      {/* 
        Width Logic matched with Section.tsx:
        w-[90%] md:w-[85%] lg:w-[80%] max-w-5xl mx-auto 
      */}
      <div className="w-[90%] md:w-[85%] lg:w-[80%] max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className={`p-2 rounded-lg ${isScrolled ? 'bg-primary text-white' : 'bg-white/10 text-white backdrop-blur-sm'}`}>
            <Code2 className="w-6 h-6" />
          </div>
          <span className={`ml-3 font-bold text-lg tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Java<span className="text-primary-light">Dev</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <React.Fragment key={link.label}>
              {link.type === 'internal' ? (
                <button
                  onClick={() => scrollToSection(link.id!)}
                  className={`text-sm font-medium transition-colors hover:text-primary-light ${
                    isScrolled ? 'text-slate-600' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-medium transition-colors hover:text-primary-light flex items-center gap-1 ${
                    isScrolled ? 'text-slate-600' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              )}
            </React.Fragment>
          ))}
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full border transition-all ${
              isScrolled 
                ? 'border-slate-200 text-slate-600 hover:border-slate-400' 
                : 'border-white/20 text-white/80 hover:bg-white/10'
            }`}
          >
            <Globe className="w-3 h-3" />
            {language === 'en' ? 'EN' : 'CN'}
          </button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:developer@example.com"
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              isScrolled 
                ? 'bg-slate-900 text-white hover:bg-slate-800' 
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            {t('Contact Me', '联系我')}
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded border transition-all ${
              isScrolled 
                ? 'border-slate-200 text-slate-600' 
                : 'border-white/20 text-white/80'
            }`}
          >
            {language === 'en' ? 'EN' : 'CN'}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <React.Fragment key={link.label}>
                   {link.type === 'internal' ? (
                    <button
                      onClick={() => scrollToSection(link.id!)}
                      className="text-left text-slate-600 font-medium py-2 hover:text-primary"
                    >
                      {link.label}
                    </button>
                   ) : (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-left text-slate-600 font-medium py-2 hover:text-primary flex items-center"
                    >
                      {link.label}
                      <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
                    </a>
                   )}
                </React.Fragment>
              ))}
              <hr className="border-slate-100" />
               <a
                href="mailto:developer@example.com"
                className="text-center w-full py-3 bg-slate-900 text-white rounded-lg font-semibold"
              >
                {t('Contact Me', '联系我')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;