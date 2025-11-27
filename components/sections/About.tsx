import React from 'react';
import { PortfolioData, SocialLinks } from '../../types';
import { Github, Linkedin, Mail, Kaggle, Medium } from '../ui/Icons';

interface AboutProps {
  data: PortfolioData['about'];
  social: SocialLinks;
}

const About: React.FC<AboutProps> = ({ data, social }) => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center py-12">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">

        {/* Left Decorative */}
        <div className="relative hidden md:block h-full min-h-[400px] border-l border-white/10 pl-8">
          <div className="sticky top-32 space-y-12">
            <div className="text-6xl font-serif text-white/5 absolute -left-8 top-0 -z-10 rotate-90 origin-bottom-left">ABOUT</div>
            <div className="glass-panel p-8 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full aspect-[3/4] bg-white/5 flex items-center justify-center">
                <span className="font-cinzel text-4xl text-white/20">ME</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <span className="text-accent uppercase tracking-[0.3em] text-sm font-semibold">Biography</span>

          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            {data.heading}
          </h2>

          <p className="text-lg text-white/60 leading-relaxed font-light">
            {data.content}
          </p>

          <div className="pt-8 border-t border-white/10">
            <img
              src={data.signature}
              alt="Signature"
              className="h-24 w-auto ml-14  hover:rotate-10 transition-transform duration-500 origin-left"
            />
          </div>
        </div>
      </div>

      {/* Social Links - Centered at Bottom */}
      <div className="w-full max-w-4xl flex justify-center">
        <div className="glass-pill px-8 py-4 rounded-full flex items-center justify-center gap-8 border border-white/10 bg-black/20">
          {social?.email && (
            <a href={social.email} className="text-white/40 hover:text-accent transition-all hover:-translate-y-1 duration-300" title="Email">
              <Mail size={24} />
            </a>
          )}
          {social?.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-all hover:-translate-y-1 duration-300" title="LinkedIn">
              <Linkedin size={24} />
            </a>
          )}
          {social?.github && (
            <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-all hover:-translate-y-1 duration-300" title="GitHub">
              <Github size={24} />
            </a>
          )}
          {social?.kaggle && (
            <a href={social.kaggle} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-all hover:-translate-y-1 duration-300" title="Kaggle">
              <Kaggle size={24} />
            </a>
          )}
          {social?.medium && (
            <a href={social.medium} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-all hover:-translate-y-1 duration-300" title="Medium">
              <Medium size={24} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;