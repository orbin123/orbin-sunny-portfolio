import React, { useState, useEffect } from 'react';
import { Settings, X } from './components/ui/Icons';
import Nav from './components/Nav';
import AdminDrawer from './components/AdminDrawer';
import { getStoredData, saveStoredData } from './services/store';
import { PortfolioData } from './types';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Education from './components/sections/Education';

const App: React.FC = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [activeSection, setActiveSection] = useState('Home');
  
  // Admin & Auth State
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    const stored = getStoredData();
    setData(stored);
  }, []);

  const handleSaveData = (newData: PortfolioData) => {
    setData(newData);
    saveStoredData(newData);
  };

  const handleAdminClick = () => {
    if (isAuthenticated) {
      setIsAdminOpen(true);
    } else {
      setIsLoginOpen(true);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded password check
    if (passwordInput === 'admin123') {
      setIsAuthenticated(true);
      setIsLoginOpen(false);
      setIsAdminOpen(true);
      setPasswordInput('');
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  if (!data) return <div className="min-h-screen bg-charcoal flex items-center justify-center text-white">Loading...</div>;

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

      {/* Copyright Footer - Social Links Removed */}
      <footer className="fixed bottom-6 left-8 pointer-events-none z-30 mix-blend-difference text-white/30 text-xs tracking-widest uppercase">
        <span>© {data.hero.year}</span>
      </footer>

      {/* Admin Trigger Button */}
      <button 
        onClick={handleAdminClick}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/50 hover:text-accent hover:border-accent transition-all z-50 shadow-lg cursor-pointer pointer-events-auto"
      >
        <Settings size={18} />
      </button>

      {/* Admin Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
           <div className="w-full max-w-sm bg-charcoal-light border border-white/10 p-8 rounded-2xl shadow-2xl animate-fade-in relative">
              <button 
                onClick={() => { setIsLoginOpen(false); setLoginError(false); setPasswordInput(''); }} 
                className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
              >
                <X />
              </button>
              <h2 className="font-serif text-2xl text-white mb-6 text-center">Admin Access</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input 
                    type="password" 
                    placeholder="Enter Password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-accent focus:outline-none transition-colors text-center tracking-widest"
                    autoFocus
                  />
                  {loginError && <p className="text-red-400 text-xs mt-2 text-center font-mono">Incorrect password</p>}
                </div>
                <button 
                  type="submit"
                  className="w-full bg-accent text-charcoal font-bold py-3 rounded hover:bg-white transition-colors uppercase tracking-wider text-sm"
                >
                  Unlock
                </button>
              </form>
           </div>
        </div>
      )}

      <AdminDrawer 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
        data={data} 
        onSave={handleSaveData} 
      />

    </div>
  );
};

export default App;