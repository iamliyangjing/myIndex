import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import { CONTACT_INFO, FOOTER_CONTENT } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const content = FOOTER_CONTENT[language];

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      {/* Width matched with Section.tsx */}
      <div className="w-[94%] md:w-[90%] lg:w-[80%] max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-8 px-4">{content.title}</h2>
        
        <div className="flex justify-center space-x-6 md:space-x-8 mb-10 md:mb-12">
          <a 
            href={`mailto:${CONTACT_INFO.email}`} 
            className="group flex flex-col items-center justify-center p-3 md:p-4 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-primary mb-2 md:mb-3 transition-colors">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xs md:text-sm text-slate-400 group-hover:text-white">{content.emailText}</span>
          </a>

          <a 
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer" 
            className="group flex flex-col items-center justify-center p-3 md:p-4 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-slate-700 mb-2 md:mb-3 transition-colors">
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xs md:text-sm text-slate-400 group-hover:text-white">GitHub</span>
          </a>

           <a 
            href="#"
            className="group flex flex-col items-center justify-center p-3 md:p-4 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-[#0077b5] mb-2 md:mb-3 transition-colors">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xs md:text-sm text-slate-400 group-hover:text-white">LinkedIn</span>
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 text-sm text-slate-500">
          <p>{content.copyright}</p>
          <p className="mt-2 text-xs opacity-70">{content.builtWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;