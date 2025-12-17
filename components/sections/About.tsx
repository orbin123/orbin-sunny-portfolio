import React from 'react';
import { PortfolioData, SocialLinks } from '../../types';
import { Github, Linkedin, Mail, Kaggle, Medium } from '../ui/Icons';

interface AboutProps {
  data: PortfolioData['about'];
  social: SocialLinks;
}

const StatsCard: React.FC<{ title: string; rank: string | number; icon: React.ReactNode; children: React.ReactNode; color: string }> = ({ title, rank, icon, children, color }) => (
  <div className={`relative group w-full max-w-sm mx-auto overflow-hidden rounded-xl border border-white/20 bg-black/40 backdrop-blur-md transition-all duration-500 hover:border-${color}/50 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]`}>
    {/* Card Header */}
    <div className={`flex items-center justify-between p-4 border-b border-white/10 bg-white/5`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg bg-${color}/10 text-${color}`}>
          {icon}
        </div>
        <span className="font-cinzel font-bold text-lg tracking-wider text-white/90">{title}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase text-white/40 tracking-widest">Rank</span>
        <span className={`font-serif text-xl font-bold text-${color}`}>{rank}</span>
      </div>
    </div>

    {/* Card Body */}
    <div className="p-6 space-y-4 relative">
      <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}/10 rounded-full blur-3xl -z-10`}></div>
      {children}
    </div>
  </div>
);

const About: React.FC<AboutProps> = ({ data, social }) => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center py-20 gap-20">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

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

      {/* Stats Cards Section */}
      {data.githubStats && data.leetcodeStats && (
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">

          {/* GitHub Card */}
          <StatsCard title="GITHUB" rank={data.githubStats.rank} icon={<Github size={24} />} color="gray">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-white/60 text-sm">Total Stars</span>
                <span className="text-white font-mono">{data.githubStats.totalStars}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-white/60 text-sm">Commits (Last Year)</span>
                <span className="text-white font-mono">{data.githubStats.totalCommits}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-white/60 text-sm">Total PRs</span>
                <span className="text-white font-mono">{data.githubStats.totalPRs}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-white/60 text-sm">Issues</span>
                <span className="text-white font-mono">{data.githubStats.totalIssues}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Contributed To</span>
                <span className="text-white font-mono">{data.githubStats.contributedTo}</span>
              </div>
            </div>
          </StatsCard>

          {/* LeetCode Card */}
          <StatsCard title="LEETCODE" rank={data.leetcodeStats.rank.toLocaleString()} icon={<div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 text-xs font-bold">LC</div>} color="yellow-500">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-white">{data.leetcodeStats.totalProblemsSolved}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">Solved</div>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-white">{data.leetcodeStats.badges}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">Badges</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-green-400 w-12">Easy</span>
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-green-400" style={{ width: `${(data.leetcodeStats.easy / data.leetcodeStats.totalProblemsSolved) * 100}%` }}></div>
                </div>
                <span className="text-xs text-white/60 tabular-nums">{data.leetcodeStats.easy}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-yellow-400 w-12">Med</span>
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-400" style={{ width: `${(data.leetcodeStats.medium / data.leetcodeStats.totalProblemsSolved) * 100}%` }}></div>
                </div>
                <span className="text-xs text-white/60 tabular-nums">{data.leetcodeStats.medium}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-red-400 w-12">Hard</span>
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400" style={{ width: `${(data.leetcodeStats.hard / data.leetcodeStats.totalProblemsSolved) * 100}%` }}></div>
                </div>
                <span className="text-xs text-white/60 tabular-nums">{data.leetcodeStats.hard}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 text-center">
              <span className="text-white/40 text-xs">Submissions (Last Year): </span>
              <span className="text-white font-mono ml-2">{data.leetcodeStats.submissionsLastYear}</span>
            </div>
          </StatsCard>
        </div>
      )}
    </section>
  );
};

export default About;