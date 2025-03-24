import React from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-slate-900 transition-colors duration-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,100,255,0.05),transparent_25%),radial-gradient(circle_at_70%_80%,rgba(100,255,100,0.075),transparent_25%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(100,100,255,0.1),transparent_25%),radial-gradient(circle_at_70%_80%,rgba(100,255,100,0.1),transparent_25%)]" />
      <ThemeToggle />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App