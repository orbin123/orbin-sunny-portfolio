import React, { useState } from 'react';
import { X, Plus, Trash2, Save } from './ui/Icons';
import { PortfolioData, Experience, Project, BlogPost, Education } from '../types';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (newData: PortfolioData) => void;
}

const AdminDrawer: React.FC<AdminDrawerProps> = ({ isOpen, onClose, data, onSave }) => {
  const [localData, setLocalData] = useState<PortfolioData>(data);
  const [activeTab, setActiveTab] = useState<'general' | 'social' | 'experience' | 'projects' | 'education' | 'blog'>('general');

  // Sync local state when prop changes (if needed, mostly on open)
  React.useEffect(() => {
    if (isOpen) setLocalData(data);
  }, [isOpen, data]);

  const handleSave = () => {
    onSave(localData);
    onClose();
  };

  const updateHero = (key: keyof PortfolioData['hero'], value: string) => {
    setLocalData(prev => ({
      ...prev,
      hero: { ...prev.hero, [key]: value }
    }));
  };

  const updateAbout = (key: keyof PortfolioData['about'], value: string) => {
    setLocalData(prev => ({
      ...prev,
      about: { ...prev.about, [key]: value }
    }));
  };

  const updateSocial = (key: keyof PortfolioData['social'], value: string) => {
    setLocalData(prev => ({
      ...prev,
      social: { ...prev.social, [key]: value }
    }));
  };

  // Helper generic updaters for arrays
  const updateArrayItem = <T extends { id: string }>(
    section: 'experience' | 'projects' | 'education' | 'blog',
    id: string,
    field: keyof T,
    value: any
  ) => {
    setLocalData(prev => ({
      ...prev,
      [section]: (prev[section] as unknown as T[]).map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const addItem = (section: 'experience' | 'projects' | 'education' | 'blog') => {
    const id = Math.random().toString(36).substr(2, 9);
    let newItem: any;

    if (section === 'experience') {
      newItem = { id, role: 'New Role', company: 'New Company', duration: '2025', description: 'Description...' };
    } else if (section === 'projects') {
      newItem = { id, title: 'New Project', description: 'Description...', tags: ['Tag'], image: 'https://picsum.photos/600/400', link: '#' };
    } else if (section === 'education') {
      newItem = { id, degree: 'New Degree', institution: 'University', duration: '2025', description: 'Description...' };
    } else {
      newItem = { id, title: 'New Post', date: 'Oct 12, 2024', excerpt: 'Snippet...', link: '#', readTime: '1 min', image: '' };
    }

    setLocalData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const deleteItem = (section: 'experience' | 'projects' | 'education' | 'blog', id: string) => {
    setLocalData(prev => ({
      ...prev,
      [section]: (prev[section] as any[]).filter(item => item.id !== id)
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-charcoal-light border-l border-white/10 h-full shadow-2xl flex flex-col animate-slide-in">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20">
          <h2 className="font-cinzel text-xl text-white">Admin Console</h2>
          <div className="flex gap-4">
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 bg-accent text-charcoal px-4 py-1.5 rounded font-semibold hover:bg-white transition-colors text-sm"
            >
              <Save size={16} /> Save Changes
            </button>
            <button onClick={onClose} className="text-white/50 hover:text-white">
              <X />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 overflow-x-auto hide-scrollbar">
          {['general', 'social', 'experience', 'projects', 'education', 'blog'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex-1 py-4 px-4 text-sm uppercase tracking-wider font-medium transition-colors whitespace-nowrap ${
                activeTab === tab ? 'text-accent border-b-2 border-accent bg-white/5' : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-accent font-serif text-lg border-b border-white/10 pb-2">Hero Section</h3>
                <Input label="Name" value={localData.hero.name} onChange={v => updateHero('name', v)} />
                <Input label="Title" value={localData.hero.title} onChange={v => updateHero('title', v)} />
                <Input label="Year Label" value={localData.hero.year} onChange={v => updateHero('year', v)} />
                <Input label="Profile Image URL" value={localData.hero.heroImage} onChange={v => updateHero('heroImage', v)} />
                <Input label="CV Link" value={localData.hero.cvLink} onChange={v => updateHero('cvLink', v)} />
                <Input label="Contact Email" value={localData.hero.contactEmail} onChange={v => updateHero('contactEmail', v)} />
              </div>

              <div className="space-y-4">
                <h3 className="text-accent font-serif text-lg border-b border-white/10 pb-2">About Section</h3>
                <Input label="Heading" value={localData.about.heading} onChange={v => updateAbout('heading', v)} />
                <TextArea label="Content" value={localData.about.content} onChange={v => updateAbout('content', v)} />
                <Input label="Signature" value={localData.about.signature} onChange={v => updateAbout('signature', v)} />
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="space-y-6">
               <div className="space-y-4">
                <h3 className="text-accent font-serif text-lg border-b border-white/10 pb-2">Social Links</h3>
                <Input label="Email (mailto:)" value={localData.social?.email || ''} onChange={v => updateSocial('email', v)} />
                <Input label="LinkedIn" value={localData.social?.linkedin || ''} onChange={v => updateSocial('linkedin', v)} />
                <Input label="GitHub" value={localData.social?.github || ''} onChange={v => updateSocial('github', v)} />
                <Input label="Kaggle" value={localData.social?.kaggle || ''} onChange={v => updateSocial('kaggle', v)} />
                <Input label="Medium" value={localData.social?.medium || ''} onChange={v => updateSocial('medium', v)} />
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-accent font-serif text-lg">Experience Timeline</h3>
                <button onClick={() => addItem('experience')} className="text-xs flex items-center gap-1 bg-white/10 px-2 py-1 rounded hover:bg-white/20">
                  <Plus size={12} /> Add
                </button>
              </div>
              {localData.experience.map((exp, idx) => (
                <div key={exp.id} className="p-4 border border-white/10 rounded bg-white/5 relative group">
                  <button onClick={() => deleteItem('experience', exp.id)} className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={16} /></button>
                  <div className="grid gap-3">
                    <Input label="Role" value={exp.role} onChange={v => updateArrayItem<Experience>('experience', exp.id, 'role', v)} />
                    <Input label="Company" value={exp.company} onChange={v => updateArrayItem<Experience>('experience', exp.id, 'company', v)} />
                    <Input label="Duration" value={exp.duration} onChange={v => updateArrayItem<Experience>('experience', exp.id, 'duration', v)} />
                    <TextArea label="Description" value={exp.description} onChange={v => updateArrayItem<Experience>('experience', exp.id, 'description', v)} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-accent font-serif text-lg">Projects</h3>
                <button onClick={() => addItem('projects')} className="text-xs flex items-center gap-1 bg-white/10 px-2 py-1 rounded hover:bg-white/20">
                  <Plus size={12} /> Add
                </button>
              </div>
              {localData.projects.map((proj) => (
                <div key={proj.id} className="p-4 border border-white/10 rounded bg-white/5 relative group">
                  <button onClick={() => deleteItem('projects', proj.id)} className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={16} /></button>
                  <div className="grid gap-3">
                    <Input label="Title" value={proj.title} onChange={v => updateArrayItem<Project>('projects', proj.id, 'title', v)} />
                    <TextArea label="Description" value={proj.description} onChange={v => updateArrayItem<Project>('projects', proj.id, 'description', v)} />
                    <Input label="Image URL" value={proj.image} onChange={v => updateArrayItem<Project>('projects', proj.id, 'image', v)} />
                    <Input label="Link" value={proj.link} onChange={v => updateArrayItem<Project>('projects', proj.id, 'link', v)} />
                    <Input label="Tags (comma separated)" value={proj.tags.join(', ')} onChange={v => updateArrayItem<Project>('projects', proj.id, 'tags', v.split(',').map((t: string) => t.trim()))} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-accent font-serif text-lg">Education</h3>
                <button onClick={() => addItem('education')} className="text-xs flex items-center gap-1 bg-white/10 px-2 py-1 rounded hover:bg-white/20">
                  <Plus size={12} /> Add
                </button>
              </div>
              {localData.education.map((edu) => (
                <div key={edu.id} className="p-4 border border-white/10 rounded bg-white/5 relative group">
                  <button onClick={() => deleteItem('education', edu.id)} className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={16} /></button>
                  <div className="grid gap-3">
                    <Input label="Degree" value={edu.degree} onChange={v => updateArrayItem<Education>('education', edu.id, 'degree', v)} />
                    <Input label="Institution" value={edu.institution} onChange={v => updateArrayItem<Education>('education', edu.id, 'institution', v)} />
                    <Input label="Duration" value={edu.duration} onChange={v => updateArrayItem<Education>('education', edu.id, 'duration', v)} />
                    <TextArea label="Description" value={edu.description} onChange={v => updateArrayItem<Education>('education', edu.id, 'description', v)} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'blog' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-accent font-serif text-lg">Blog Posts</h3>
                <button onClick={() => addItem('blog')} className="text-xs flex items-center gap-1 bg-white/10 px-2 py-1 rounded hover:bg-white/20">
                  <Plus size={12} /> Add
                </button>
              </div>
              {localData.blog.map((post) => (
                <div key={post.id} className="p-4 border border-white/10 rounded bg-white/5 relative group">
                   <button onClick={() => deleteItem('blog', post.id)} className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={16} /></button>
                  <div className="grid gap-3">
                    <Input label="Title" value={post.title} onChange={v => updateArrayItem<BlogPost>('blog', post.id, 'title', v)} />
                    <Input label="Date" value={post.date} onChange={v => updateArrayItem<BlogPost>('blog', post.id, 'date', v)} />
                    <Input label="Read Time" value={post.readTime} onChange={v => updateArrayItem<BlogPost>('blog', post.id, 'readTime', v)} />
                    <Input label="Link" value={post.link} onChange={v => updateArrayItem<BlogPost>('blog', post.id, 'link', v)} />
                    <Input label="Image URL (Optional)" value={post.image || ''} onChange={v => updateArrayItem<BlogPost>('blog', post.id, 'image', v)} />
                    <TextArea label="Excerpt" value={post.excerpt} onChange={v => updateArrayItem<BlogPost>('blog', post.id, 'excerpt', v)} />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// UI Helper Components for Admin
const Input = ({ label, value, onChange }: { label: string, value: string, onChange: (val: string) => void }) => (
  <div>
    <label className="block text-xs text-white/40 uppercase tracking-wider mb-1">{label}</label>
    <input 
      type="text" 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-black/30 border border-white/10 rounded p-2 text-sm text-white focus:border-accent focus:outline-none transition-colors"
    />
  </div>
);

const TextArea = ({ label, value, onChange }: { label: string, value: string, onChange: (val: string) => void }) => (
  <div>
    <label className="block text-xs text-white/40 uppercase tracking-wider mb-1">{label}</label>
    <textarea 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      rows={3}
      className="w-full bg-black/30 border border-white/10 rounded p-2 text-sm text-white focus:border-accent focus:outline-none transition-colors resize-none"
    />
  </div>
);

export default AdminDrawer;