import React from 'react';
import { PortfolioData } from '../../types';
import { GraduationCap } from '../ui/Icons';

interface EducationProps {
  data: PortfolioData['education'];
}

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section className="max-w-4xl mx-auto py-12">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="font-serif text-4xl">Education</h2>
        <div className="h-[1px] bg-white/10 flex-1"></div>
        <span className="text-white/30 font-mono">03</span>
      </div>

      <div className="space-y-8 relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 py-4">
        {data.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 bg-charcoal border border-accent rounded-full group-hover:bg-accent transition-colors"></div>
            
            <div className="glass-panel p-6 md:p-8 rounded-xl hover:bg-white/5 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0 mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-cream tracking-wide">{item.degree}</h3>
                        <h4 className="text-accent font-serif italic">{item.institution}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/40 font-mono bg-white/5 px-3 py-1 rounded-full w-fit">
                        <GraduationCap size={12} /> {item.duration}
                    </div>
                </div>
                <p className="text-white/60 leading-relaxed">
                    {item.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;