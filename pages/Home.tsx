
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, Star, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { CATEGORIES, CATEGORY_ICONS, MOCK_PROMPTS } from '../constants';
import PromptCard from '../components/PromptCard';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" /> 
            <span>Over 5,000+ Curated AI Prompts</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Ready-to-Use <span className="gradient-text">AI Prompts</span> <br /> 
            That Actually Work
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop guessing. Unlock the true potential of ChatGPT, Gemini, and Midjourney 
            with our verified library of elite AI prompts.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/explore" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              Browse Library <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg transition-all"
            >
              Go Premium
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-12 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
             <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">100k+ Users</span>
             </div>
             <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span className="font-medium">4.9/5 Rating</span>
             </div>
             <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-medium">Verified Prompts</span>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Explore by Category</h2>
            <p className="text-slate-400">Find the right prompt for your specific use case.</p>
          </div>
          <Link to="/explore" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 group">
            View All Categories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {CATEGORIES.slice(0, 8).map((cat) => (
            <Link 
              key={cat.id} 
              to={`/explore?category=${cat.slug}`}
              className="glass-card group p-6 rounded-2xl hover:border-blue-500/50 transition-all text-center"
            >
              <div className="w-12 h-12 bg-slate-800 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <div className="text-slate-400 group-hover:text-white transition-colors">
                  {CATEGORY_ICONS[cat.icon]}
                </div>
              </div>
              <h3 className="font-bold mb-1">{cat.name}</h3>
              <span className="text-xs text-slate-500">{cat.count} Prompts</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Prompts */}
      <section className="bg-slate-900/30 py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
            <TrendingUp className="w-5 h-5" /> Featured This Week
          </div>
          <h2 className="text-4xl font-bold mb-12">Popular Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_PROMPTS.slice(0, 3).map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">Why Choose Our Prompt Library?</h2>
            <p className="text-slate-400 mb-10 text-lg">We don't just dump text. Every prompt in our library undergoes a rigorous testing process to ensure reliable outputs across multiple AI models.</p>
            
            <ul className="space-y-6">
              {[
                { title: 'Tested & Verified', desc: 'Each prompt is tested 50+ times with different parameters.' },
                { title: 'Model Specific', desc: 'Optimized versions for GPT-4, Claude 3, and Midjourney V6.' },
                { title: 'One-Click Copy', desc: 'Copy formatted text directly to your clipboard instantly.' },
                { title: 'Continuous Updates', desc: 'We refine prompts as AI models evolve to maintain quality.' },
              ].map((benefit, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-slate-400 text-sm">{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="glass-card rounded-3xl p-2 rotate-2 shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/800/600?grayscale" 
                alt="AI Dashboard" 
                className="rounded-2xl w-full"
              />
            </div>
            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] -z-10 scale-90 translate-y-10"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Sparkles className="w-64 h-64" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Ready to Supercharge Your Workflow?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Join 100,000+ creators who are using PromptVault to get better results in half the time. 
            Start for free today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link to="/explore" className="w-full sm:w-auto px-10 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all">
              Browse Free Prompts
            </Link>
            <Link to="/pricing" className="w-full sm:w-auto px-10 py-4 bg-blue-900/30 text-white border border-white/20 backdrop-blur-sm rounded-xl font-bold text-lg hover:bg-blue-900/50 transition-all">
              Get Unlimited Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
