import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import { CONTACT_INFO, FOOTER_CONTENT } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const content = FOOTER_CONTENT[language];

  return (
    <footer className="bg-slate-900 text-white py-16">
      {/* 
        Width Logic matched with Section.tsx:
        w-[90%] md:w-[85%] lg:w-[80%] max-w-5xl mx-auto 
      */}
      <div className="w-[90%] md:w-[85%] lg:w-[80%] max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">{content.title}</h2>
        
        <div className="flex justify-center space-x-8 mb-12">
          <a 
            href={`mailto:${CONTACT_INFO.email}`} 
            className="group flex flex-col items-center justify-center p-4 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-primary mb-3 transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-sm text-slate-400 group-hover:text-white">{content.emailText}</span>
          </a>

          <a 
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer" 
            className="group flex flex-col items-center justify-center p-4 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-slate-700 mb-3 transition-colors">
              <Github className="w-6 h-6" />
            </div>
            <span className="text-sm text-slate-400 group-hover:text-white">GitHub</span>
          </a>

           <a 
            href="#"
            className="group flex flex-col items-center justify-center p-4 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-[#0077b5] mb-3 transition-colors">
              <Linkedin className="w-6 h-6" />
            </div>
            <span className="text-sm text-slate-400 group-hover:text-white">LinkedIn</span>
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 text-sm text-slate-500">
          <p>{content.copyright}</p>
          <p className="mt-2 text-xs">{content.builtWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;