
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'success';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    secondary: 'bg-slate-700/50 text-slate-300 border-slate-600/50',
    accent: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    danger: 'bg-red-500/10 text-red-400 border-red-500/20',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  };

  return (
    <span className={`px-2 py-0.5 text-xs font-medium border rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
