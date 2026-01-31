
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search, Github, LayoutGrid, Award } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Award className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">Prompt<span className="text-blue-500">Vault</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-blue-400 ${isActive ? 'text-blue-400' : 'text-slate-300'}`}>Home</NavLink>
          <NavLink to="/explore" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-blue-400 ${isActive ? 'text-blue-400' : 'text-slate-300'}`}>Explore</NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-blue-400 ${isActive ? 'text-blue-400' : 'text-slate-300'}`}>Pricing</NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-blue-400 ${isActive ? 'text-blue-400' : 'text-slate-300'}`}>About</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/explore" className="text-slate-400 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </Link>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Login
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-500/20">
            Get Pro
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-4">
          <NavLink to="/" className="block text-slate-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/explore" className="block text-slate-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>Explore</NavLink>
          <NavLink to="/pricing" className="block text-slate-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>Pricing</NavLink>
          <div className="pt-4 flex flex-col gap-2">
            <button className="w-full bg-slate-800 text-white py-2 rounded-lg">Login</button>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Get Pro</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
