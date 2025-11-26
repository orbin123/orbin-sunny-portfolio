import React, { useState } from 'react';
import Nav from './components/Nav';
import { DEFAULT_DATA } from './types';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Education from './components/sections/Education';

const App: React.FC = () => {
  const data = DEFAULT_DATA;
  const [activeSection, setActiveSection] = useState('Home');

  // View Routing Logic
  const renderSection = () => {
    switch (activeSection) {
      case 'Home': return <Hero data={data.hero} onNavigate={setActiveSection} />;
      case 'About': return <About data={data.about} social={data.social} />;
      case 'Experience': return <Experience data={data.experience} />;
      case 'Projects': return <Projects data={data.projects} />;
      case 'Education': return <Education data={data.education} />;
      case 'Blog': return <Blog data={data.blog} />;
      default: return <Hero data={data.hero} onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-charcoal text-cream font-sans selection:bg-accent selection:text-charcoal">

      <Nav activeSection={activeSection} setActiveSection={setActiveSection} logoName={data.hero.name} />

      <main className="relative w-full min-h-screen pt-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 animate-fade-in">
          {renderSection()}
        </div>
      </main>

      {/* Copyright Footer */}
      <footer className="fixed bottom-6 left-8 pointer-events-none z-30 mix-blend-difference text-white/30 text-xs tracking-widest uppercase">
        <span>© {data.hero.year}</span>
      </footer>

    </div>
  );
};

export default App;