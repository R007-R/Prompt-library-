
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Copy, Check, Share2, ArrowLeft, 
  Lightbulb, Info, Terminal, Sparkles, 
  AlertCircle, Crown, Clock, BarChart3,
  Calendar
} from 'lucide-react';
import { MOCK_PROMPTS } from '../constants';
import Badge from '../components/Badge';
import { Prompt } from '../types';

const PromptDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [prompt, setPrompt] = useState<Prompt | null>(null);

  useEffect(() => {
    const found = MOCK_PROMPTS.find(p => p.slug === slug);
    if (found) {
      setPrompt(found);
    } else {
      // Prompt not found logic
    }
  }, [slug]);

  const handleCopy = () => {
    if (prompt) {
      navigator.clipboard.writeText(prompt.body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!prompt) return <div className="container mx-auto px-4 py-20 text-center">Loading prompt details...</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <Link to="/explore" className="hover:text-white transition-colors">Explore</Link>
        <span>/</span>
        <Link to={`/explore?category=${prompt.category}`} className="capitalize hover:text-white transition-colors">{prompt.category.replace('-', ' ')}</Link>
        <span>/</span>
        <span className="text-slate-300 truncate max-w-[200px]">{prompt.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              {prompt.isPremium && (
                <Badge variant="accent" className="flex items-center gap-1">
                  <Crown className="w-3 h-3" /> Premium Prompt
                </Badge>
              )}
              <Badge variant="primary">{prompt.difficulty}</Badge>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Calendar className="w-4 h-4" />
                <span>Published: {new Date(prompt.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{prompt.title}</h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              {prompt.description}
            </p>

            {/* Prompt Block */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <Terminal className="w-4 h-4 text-blue-400" /> Prompt Text
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg transition-all active:scale-95"
                  >
                    {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy Prompt</>}
                  </button>
                </div>
                <div className="p-8">
                  <pre className="whitespace-pre-wrap text-lg text-slate-200 font-mono leading-relaxed">
                    {prompt.body}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-blue-400">
                <Info className="w-5 h-5" /> How to use
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {prompt.instructions}
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-purple-400">
                <Sparkles className="w-5 h-5" /> Expected Output
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed italic">
                "{prompt.exampleOutput}"
              </p>
            </div>
          </div>

          <section className="space-y-4">
             <h3 className="text-2xl font-bold">Best Use Cases</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {['Automating repetitive creative tasks', 'Overcoming writer\'s block instantly', 'Professional-grade research assistant', 'Complex technical documentation'].map((use, i) => (
                 <div key={i} className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                   <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                   <span className="text-sm text-slate-300">{use}</span>
                 </div>
               ))}
             </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="glass-card p-6 rounded-2xl sticky top-24">
            <h3 className="font-bold text-xl mb-6">Prompt Insights</h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2 block">Compatible Tools</label>
                <div className="flex flex-wrap gap-2">
                  {prompt.tools.map(tool => (
                    <Badge key={tool} variant="secondary">{tool}</Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-3 rounded-xl">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                    <BarChart3 className="w-3 h-3" /> Popularity
                  </div>
                  <div className="font-bold">High (Top 5%)</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-xl">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                    <Clock className="w-3 h-3" /> Prep Time
                  </div>
                  <div className="font-bold">~2 mins</div>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2 block">Tags</label>
                <div className="flex flex-wrap gap-2">
                  {prompt.tags.map(tag => (
                    <span key={tag} className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300 hover:text-blue-400 cursor-pointer">#{tag}</span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <button className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition-all mb-4">
                  <Share2 className="w-4 h-4" /> Share Prompt
                </button>
                {prompt.isPremium && (
                  <Link to="/pricing" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-orange-500/20">
                    <Crown className="w-4 h-4" /> Unlock All Premium
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-2xl">
            <h4 className="flex items-center gap-2 font-bold mb-2">
              <Lightbulb className="text-amber-400 w-5 h-5" /> Pro Tip
            </h4>
            <p className="text-sm text-slate-400">
              For better results, try providing 2-3 examples of the style you want before executing this prompt. AI models learn from context!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptDetail;
