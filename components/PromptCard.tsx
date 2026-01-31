
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Crown, Zap, Copy } from 'lucide-react';
import { Prompt } from '../types';
import Badge from './Badge';

interface PromptCardProps {
  prompt: Prompt;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  return (
    <div className="glass-card rounded-xl p-5 group hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      {prompt.isPremium && (
        <div className="absolute top-0 right-0 p-2">
           <Badge variant="accent" className="flex items-center gap-1 shadow-lg shadow-purple-500/20">
             <Crown className="w-3 h-3" /> Premium
           </Badge>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-3">
        {prompt.tools.map((tool) => (
          <Badge key={tool} variant="secondary">{tool}</Badge>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
        {prompt.title}
      </h3>
      
      <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
        {prompt.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {prompt.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider text-slate-500">#{tag}</span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
        <div className="flex items-center gap-1 text-xs text-slate-500">
          <Zap className="w-3 h-3 text-amber-500" />
          <span>{prompt.difficulty}</span>
        </div>
        <Link 
          to={`/prompt/${prompt.slug}`} 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all transform active:scale-95"
        >
          View Prompt <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default PromptCard;
