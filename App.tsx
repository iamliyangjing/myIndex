import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Methodology from './components/Methodology';
import Experience from './components/Experience';
import Learning from './components/Learning';
import Books from './components/Books';
import Blog from './components/Blog';
import Space from './components/Space';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans selection:bg-primary-light selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Methodology />
          <Experience />
          <Learning />
          <Books />
          <Blog />
          <Space />
        </main>
        <Footer />
        <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;