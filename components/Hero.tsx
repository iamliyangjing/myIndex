import React from 'react';
import { ArrowDown, Terminal } from 'lucide-react';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Typewriter effect variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3], 
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-primary-light rounded-full mix-blend-screen filter blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-blue-800 rounded-full mix-blend-screen filter blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center p-2 px-4 mb-8 bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-full shadow-lg"
        >
          <Terminal className="w-4 h-4 text-accent-green mr-2" />
          <span className="text-sm font-medium text-slate-300 tracking-wide font-mono">System.out.println("Hello World");</span>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {HERO_CONTENT.slogan.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl md:text-2xl text-slate-300 font-light mb-10"
        >
          <span className="font-semibold text-primary-light">{HERO_CONTENT.role}</span>
          <span className="mx-3 text-slate-500">|</span>
          <span>{HERO_CONTENT.subRole}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <button
            onClick={scrollToSkills}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-primary hover:bg-primary-light rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              {HERO_CONTENT.ctaText}
              <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
            </span>
            {/* Shimmer Effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
          </button>
        </motion.div>
      </div>

      {/* Code decorations */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-1/4 left-10 hidden lg:block font-mono text-slate-800 text-sm select-none pointer-events-none"
      >
        @SpringBootApplication<br/>
        public class App &#123;<br/>
        &nbsp;&nbsp;public static void main(String[] args) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;SpringApplication.run(App.class, args);<br/>
        &nbsp;&nbsp;&#125;<br/>
        &#125;
      </motion.div>
    </div>
  );
};

export default Hero;