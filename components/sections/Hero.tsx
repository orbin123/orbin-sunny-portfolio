import React from 'react';
import { Download, Mail } from '../ui/Icons';
import { PortfolioData } from '../../types';

interface HeroProps {
  data: PortfolioData['hero'];
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ data, onNavigate }) => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center relative">

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl filter pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl filter pointer-events-none"></div>

      {/* Profile Image (Optional - Small and minimal if included, or hidden based on design preference, using a small avatar here) */}
      <div className="mb-8 relative group">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 relative z-10">
          <img src={data.heroImage} alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
        </div>
        <div className="absolute inset-0 rounded-full border border-accent/30 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>

      {/* Main Text Block */}
      <div className="relative text-center z-10">

        {/* Floating Badge 1 */}
        <div className="hidden md:block absolute -top-6 -left-12 animate-float" style={{ animationDelay: '0s' }}>
          <div className="glass-pill px-6 py-2 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-xs uppercase tracking-widest font-bold text-white/80">{data.year}</span>
          </div>
        </div>

        {/* Big Typography */}
        <div className="relative">
          {/* Glass Overlay Effect for Text - Left */}
          <div className="hidden md:block absolute top-1/2 -left-10 w-48 h-16 glass-pill -translate-y-1/2 -rotate-3 z-20 pointer-events-none"></div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-cream leading-none relative z-10 mix-blend-overlay opacity-90">
            PORTFOLIO
          </h1>

          {/* Glass Overlay Effect for Text - Right */}
          <div className="hidden md:block absolute top-1/2 -right-10 w-56 h-20 glass-pill -translate-y-1/2 rotate-2 z-20 pointer-events-none"></div>
        </div>

        {/* Subheading / Intro */}
        <div className="mt-8 md:mt-12 space-y-4">
          <h2 className="font-cinzel text-xl md:text-2xl tracking-widest text-accent/80">
            Hello, I'm {data.name}
          </h2>
          <p className="font-sans text-white/60 uppercase tracking-wider text-sm md:text-base">
            — {data.title} —
          </p>
        </div>

        {/* Floating Badge 2 (Curiosity) */}
        <div className="hidden md:block absolute -bottom-2 -right-16 animate-float" style={{ animationDelay: '2s' }}>
          <div className="glass-pill px-6 py-2 rounded-full flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cream"></div>
            <span className="font-serif italic text-lg text-white">Curiosity</span>
          </div>
        </div>

      </div>

      {/* CTA Buttons */}
      <div className="mt-16 flex flex-col md:flex-row gap-6 z-30">
        <a
          href={data.cvLink}
          className="group relative overflow-hidden px-8 py-4 bg-cream text-charcoal font-semibold tracking-wider rounded-full transition-transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <span className="relative z-10 flex items-center gap-2">
            Download CV <Download size={18} />
          </span>
        </a>

        <a
          href={`mailto:${data.contactEmail}`}
          className="group px-8 py-4 glass-panel text-white font-semibold tracking-wider rounded-full transition-all hover:bg-white/10 flex items-center justify-center gap-2"
        >
          Contact Info <Mail size={18} />
        </a>
      </div>

    </section>
  );
};

export default Hero;