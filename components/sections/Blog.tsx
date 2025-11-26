import React from 'react';
import { PortfolioData } from '../../types';
import { ChevronRight } from '../ui/Icons';

interface BlogProps {
  data: PortfolioData['blog'];
}

const Blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <section className="max-w-4xl mx-auto py-12">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="font-serif text-4xl">Writing</h2>
        <div className="h-[1px] bg-white/10 flex-1"></div>
        <span className="text-white/30 font-mono">04</span>
      </div>

      <div className="space-y-4">
        {data.map((post) => (
          <a 
            key={post.id} 
            href={post.link}
            className="block group glass-panel border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/5 hover:border-accent/30"
          >
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                
                {post.image && (
                    <div className="w-full md:w-48 h-48 md:h-32 flex-shrink-0 rounded-lg overflow-hidden border border-white/10 relative">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                        />
                    </div>
                )}

                <div className="flex-shrink-0 flex flex-col md:items-center md:justify-center md:w-24 border-l-2 border-accent/20 md:border-l-0 pl-4 md:pl-0">
                    <span className="text-sm text-white/40 font-mono block">{post.date.split(' ')[0]}</span>
                    <span className="text-lg font-bold text-accent block">{post.date.split(' ')[1].replace(',','')}</span>
                </div>

                <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-serif mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-3 md:mb-0 line-clamp-2">
                        {post.excerpt}
                    </p>
                </div>

                <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4 mt-4 md:mt-0 border-t border-white/10 md:border-0 pt-4 md:pt-0">
                    <span className="text-xs uppercase tracking-widest text-white/30 whitespace-nowrap">{post.readTime}</span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:bg-accent group-hover:text-charcoal group-hover:border-accent transition-all">
                        <ChevronRight size={16} />
                    </div>
                </div>

            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog;