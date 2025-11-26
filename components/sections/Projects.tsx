import React, { useRef } from 'react';
import { PortfolioData, Project } from '../../types';
import { ExternalLink, ChevronLeft, ChevronRight } from '../ui/Icons';

interface ProjectsProps {
  data: PortfolioData['projects'];
}

interface ProjectCategorySectionProps {
  title: string;
  projects: Project[];
}

const ProjectCategorySection: React.FC<ProjectCategorySectionProps> = ({ title, projects }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -600 : 600;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8 px-4 md:px-0">
        <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-white/50 hover:text-white active:scale-95"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-white/50 hover:text-white active:scale-95"
            aria-label="Scroll Right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 px-4 md:px-0 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        {projects.map((project) => (
          <div key={project.id} className="min-w-[85vw] md:min-w-[450px] flex-shrink-0 snap-start group relative rounded-2xl overflow-hidden glass-panel border-0">
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
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const categories = [
    { title: 'Deep Learning Projects', id: 'Deep Learning' },
    { title: 'Machine Learning Projects', id: 'Machine Learning' },
    { title: 'Web Development Projects', id: 'Web Development' }
  ] as const;

  return (
    <section className="max-w-6xl mx-auto py-12 space-y-24">
      {categories.map((category) => {
        const categoryProjects = data.filter(p => p.category === category.id);
        if (categoryProjects.length === 0) return null;

        return (
          <ProjectCategorySection
            key={category.id}
            title={category.title}
            projects={categoryProjects}
          />
        );
      })}
    </section>
  );
};

export default Projects;