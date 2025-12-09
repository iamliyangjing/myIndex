import React from 'react';
import { motion } from 'framer-motion';
import { 
  Coffee, 
  Server, 
  Database, 
  Cloud, 
  Code2, 
  Globe, 
  GraduationCap
} from 'lucide-react';
import { PROFILE_DATA } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const profile = PROFILE_DATA[language];

  // Orbital animations config
  const orbitalIcons = [
    { icon: Coffee, color: "text-orange-500", delay: 0, radius: 200, duration: 25 },
    { icon: Server, color: "text-blue-500", delay: 5, radius: 270, duration: 30 },
    { icon: Database, color: "text-green-500", delay: 2, radius: 350, duration: 35 },
    { icon: Cloud, color: "text-sky-400", delay: 8, radius: 430, duration: 40 },
    { icon: Code2, color: "text-purple-500", delay: 1, radius: 500, duration: 45 },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden pt-16">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large faint gradient blob */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob" />
        <div 
          className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-purple-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"
          style={{ animationDelay: '2s' }}
        />
        
        {/* Orbital Rings (SVG) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-20">
          <svg viewBox="0 0 1200 1200" className="w-full h-full animate-[spin_60s_linear_infinite]">
            <circle cx="600" cy="600" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" className="text-slate-400" />
            <circle cx="600" cy="600" r="350" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="12 12" className="text-slate-400" />
            <circle cx="600" cy="600" r="500" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="16 16" className="text-slate-300" />
          </svg>
        </div>

        {/* Orbiting Icons */}
        {orbitalIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: item.duration, repeat: Infinity, ease: "linear" }}
              style={{ width: item.radius * 2, height: item.radius * 2, x: '-50%', y: '-50%' }}
            >
              <motion.div 
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg border border-slate-100 ${item.color}`}
                whileHover={{ scale: 1.2 }}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Profile Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="relative z-10 w-full max-w-md mx-auto px-6"
      >
        <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 p-8 text-center">
          
          {/* Avatar Section */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <div className="relative w-32 h-32">
               {/* Decorative Circle behind avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 to-yellow-300 blur-sm transform scale-105" />
              
              {/* Spinning Avatar Container */}
              <motion.div 
                className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg bg-white relative z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <img 
                  src={profile.avatarUrl} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <div className="absolute bottom-1 right-1 z-20 bg-blue-500 text-white p-1 rounded-full border-2 border-white">
                <Code2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="flex items-center justify-center space-x-2 text-slate-500 text-sm font-medium mb-1">
              <span>{t("Hello, I'm:", "你好，我是：")}</span>
            </div>
            
            {/* Name */}
            <div className="mb-6">
              <motion.h1 
                key={language} // Animate when language changes
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600 pb-2"
              >
                {profile.name}
              </motion.h1>
            </div>

            <hr className="border-slate-100 w-1/2 mx-auto mb-6" />

            <div className="text-left space-y-4">
               {/* Graduation Info */}
              <div className="flex items-start text-slate-600 bg-slate-50 p-3 rounded-xl">
                 <div className="p-2 bg-white rounded-lg shadow-sm mr-3">
                    <GraduationCap className="w-5 h-5 text-blue-500" />
                 </div>
                 <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{t("Education", "教育背景")}</p>
                    <p className="font-bold text-slate-800">{profile.university}</p>
                    <p className="text-sm text-slate-500">{profile.gradYear}</p>
                 </div>
              </div>

              {/* Roles List */}
              <div className="bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center mb-3">
                  <Globe className="w-4 h-4 text-slate-400 mr-2" />
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{t("My Roles", "我的角色")}</span>
                </div>
                <ul className="space-y-2">
                  {profile.roles.map((role, idx) => (
                    <motion.li 
                      key={`${language}-${idx}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (idx * 0.1) }}
                      className="text-slate-700 font-medium flex items-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-3" />
                      {role}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Hero;
