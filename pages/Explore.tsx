
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { MOCK_PROMPTS, CATEGORIES } from '../constants';
import PromptCard from '../components/PromptCard';
import { ToolType, SkillLevel } from '../types';

const Explore: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Filters
  const selectedCategory = searchParams.get('category') || 'all';
  const selectedTool = searchParams.get('tool') || 'All';
  const selectedDifficulty = searchParams.get('difficulty') || 'All';
  const selectedPrice = searchParams.get('price') || 'All';

  const filteredPrompts = useMemo(() => {
    return MOCK_PROMPTS.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesTool = selectedTool === 'All' || p.tools.includes(selectedTool as ToolType);
      const matchesDifficulty = selectedDifficulty === 'All' || p.difficulty === selectedDifficulty;
      const matchesPrice = selectedPrice === 'All' || 
                           (selectedPrice === 'Premium' ? p.isPremium : !p.isPremium);

      return matchesSearch && matchesCategory && matchesTool && matchesDifficulty && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedTool, selectedDifficulty, selectedPrice]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All' || value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col gap-8">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Explore Library</h1>
            <p className="text-slate-400">Discover prompts from the world's best AI engineers.</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search prompts, tags, tools..." 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mr-2">
            <SlidersHorizontal className="w-4 h-4" /> Filters:
          </div>
          
          {/* Category Filter */}
          <select 
            value={selectedCategory}
            onChange={(e) => updateFilter('category', e.target.value)}
            className="bg-slate-800 border border-slate-700 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Categories</option>
            {CATEGORIES.map(c => <option key={c.id} value={c.slug}>{c.name}</option>)}
          </select>

          {/* Tool Filter */}
          <select 
            value={selectedTool}
            onChange={(e) => updateFilter('tool', e.target.value)}
            className="bg-slate-800 border border-slate-700 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Tools</option>
            <option value="ChatGPT">ChatGPT</option>
            <option value="Gemini">Gemini</option>
            <option value="Claude">Claude</option>
            <option value="Midjourney">Midjourney</option>
          </select>

          {/* Price Filter */}
          <select 
            value={selectedPrice}
            onChange={(e) => updateFilter('price', e.target.value)}
            className="bg-slate-800 border border-slate-700 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Prices</option>
            <option value="Free">Free Only</option>
            <option value="Premium">Premium Only</option>
          </select>

          <div className="ml-auto flex items-center bg-slate-800 p-1 rounded-lg">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center text-sm">
          <p className="text-slate-400">Showing <span className="text-white font-medium">{filteredPrompts.length}</span> prompts</p>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Sort by:</span>
            <button className="flex items-center gap-1 font-medium hover:text-blue-400 transition-colors">
              Newest First <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Grid View */}
        {filteredPrompts.length > 0 ? (
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
            {filteredPrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center glass-card rounded-3xl">
             <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-slate-600" />
             </div>
             <h3 className="text-2xl font-bold mb-2">No prompts found</h3>
             <p className="text-slate-400 max-w-sm mx-auto">Try adjusting your filters or search keywords to find what you're looking for.</p>
             <button 
               onClick={() => {
                 setSearchTerm('');
                 setSearchParams({});
               }}
               className="mt-6 text-blue-400 hover:text-blue-300 font-medium"
             >
               Clear all filters
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
