
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold">Prompt<span className="text-blue-500">Vault</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              The world's largest library of professionally tested AI prompts for productivity and creative expression.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Library</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/explore" className="hover:text-blue-400 transition-colors">All Prompts</Link></li>
              <li><Link to="/category/marketing" className="hover:text-blue-400 transition-colors">Marketing Prompts</Link></li>
              <li><Link to="/category/coding" className="hover:text-blue-400 transition-colors">Coding Assistants</Link></li>
              <li><Link to="/category/art-design" className="hover:text-blue-400 transition-colors">Image Generation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors">Submit Prompt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Get the best prompts delivered weekly.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 PromptVault. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="#" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-slate-300">Terms of Service</Link>
            <span className="flex items-center gap-1">Made with <Heart className="w-3 h-3 text-red-500" /> for AI Creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
