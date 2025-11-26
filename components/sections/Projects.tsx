import React from 'react';
import { PortfolioData } from '../../types';
import { ExternalLink, Github } from '../ui/Icons';

interface ProjectsProps {
  data: PortfolioData['projects'];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section className="max-w-6xl mx-auto py-12">
       <div className="flex items-center gap-4 mb-16">
        <h2 className="font-serif text-4xl">Selected Works</h2>
        <div className="h-[1px] bg-white/10 flex-1"></div>
        <span className="text-white/30 font-mono">02</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((project) => (
          <div key={project.id} className="group relative rounded-2xl overflow-hidden glass-panel border-0">
            {/* Image Container */}
            <div className="aspect-video w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                
                {/* Tags floating on image */}
                <div className="absolute bottom-4 left-4 z-20 flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider bg-black/80 backdrop-blur px-2 py-1 rounded text-white/80 border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 relative">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-medium group-hover:text-accent transition-colors">{project.title}</h3>
                    <a href={project.link} className="text-white/30 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                        <ExternalLink size={18} />
                    </a>
                </div>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;