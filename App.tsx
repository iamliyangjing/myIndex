import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Learning from './components/Learning';
import Books from './components/Books';
import Space from './components/Space';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-light selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Learning />
          <Books />
          <Space />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;