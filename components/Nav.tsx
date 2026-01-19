import React, { useState } from 'react';
import { Menu, X } from './ui/Icons';

interface NavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  logoName: string;
}

const NAV_ITEMS = ['Home', 'Experience', 'Projects', 'Education', 'Blog', 'About'];

const Nav: React.FC<NavProps> = ({ activeSection, setActiveSection, logoName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 px-6 flex justify-between items-center animate-slide-down transition-all duration-700 ease-in-out border-b ${scrolled
            ? 'bg-black/80 backdrop-blur-md shadow-lg py-4 border-white/10'
            : 'mix-blend-difference py-6 border-transparent'
          } text-cream`}
      >
        <div
          className="font-cinzel text-xl font-bold tracking-widest cursor-pointer hover:text-accent transition-colors"
          onClick={() => setActiveSection('Home')}
        >
          {logoName.toUpperCase().split(' ')[0] || 'PORTFOLIO'}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-serif text-sm tracking-wider">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveSection(item)}
                className={`relative py-1 transition-all duration-300 ${activeSection === item ? 'text-accent' : 'text-cream/70 hover:text-white'
                  }`}
              >
                {item}
                {activeSection === item && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
      </nav>

      {/* Mobile Menu Overlay - Rendered outside nav to avoid blend mode inheritance */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex flex-col items-center justify-center gap-8 animate-fade-in">
          <button className="absolute top-6 right-6 text-white hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveSection(item);
                setIsOpen(false);
              }}
              className="font-serif text-4xl text-white hover:text-accent transition-colors tracking-wide"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Nav;