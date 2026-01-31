
import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import PromptDetail from './pages/PromptDetail';
import Pricing from './pages/Pricing';

// Helper component for scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = window.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-500/30">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/prompt/:slug" element={<PromptDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<div className="container mx-auto px-4 py-20 text-center text-slate-400">About page coming soon...</div>} />
            <Route path="/contact" element={<div className="container mx-auto px-4 py-20 text-center text-slate-400">Contact page coming soon...</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
