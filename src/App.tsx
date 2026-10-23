import React, { useEffect, useState } from 'react';
import './App.css';
import { FloatingBackground } from './components/FloatingBackground';
import { ConfettiCanvas } from './components/ConfettiCanvas';
import { Bloop } from './components/Bloop';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [pokes, setPokes] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      try {
        return parseInt(localStorage.getItem('bloop-pokes') || '0', 10) || 0;
      } catch {
        return 0;
      }
    }
    return 0;
  });

  // Theme synchronization with HTML element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handlePoke = () => {
    setPokes((prev) => {
      const next = prev + 1;
      try {
        localStorage.setItem('bloop-pokes', String(next));
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  };

  return (
    <>
      <FloatingBackground />
      <Bloop pokes={pokes} onPoke={handlePoke} />
      <ConfettiCanvas />

      <Header theme={theme} onToggleTheme={handleToggleTheme} />

      <main id="top">
        <Hero />
        <Marquee />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer pokes={pokes} />
    </>
  );
};

export default App;
