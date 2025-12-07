import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl font-bold mb-8">准备好构建可扩展的系统了吗？</h2>
        
        <div className="flex justify-center space-x-8 mb-12">
          <a 
            href={`mailto:${CONTACT_INFO.email}`} 
            className="group flex flex-col items-center justify-center p-4 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-primary mb-3 transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-sm text-slate-400 group-hover:text-white">发送邮件</span>
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
          <p>{CONTACT_INFO.copyright}</p>
          <p className="mt-2 text-xs">基于 React, TypeScript & Tailwind CSS 构建</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
