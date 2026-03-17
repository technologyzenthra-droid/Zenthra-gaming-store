
import React from 'react';
import { GITHUB_URL } from '../constants';

interface NavbarProps {
  onContactClick: () => void;
  onAdminClick: () => void;
  isAdmin: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick, onAdminClick, isAdmin }) => {
  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-slate-800 px-4 py-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <i className="fa-solid fa-bolt text-white text-xl"></i>
          </div>
          <span className="font-gaming font-bold text-xl md:text-2xl tracking-tighter">
            ZENTHRA
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all border border-slate-700"
            title="View on GitHub"
          >
            <i className="fa-brands fa-github text-xl"></i>
          </a>

          <button 
            onClick={onContactClick}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-full text-sm font-semibold transition-colors border border-slate-700"
          >
            <i className="fa-solid fa-phone text-blue-400"></i>
            <span className="hidden sm:inline">Wasiliana Nasi</span>
          </button>
          
          <button 
            onClick={onAdminClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border shadow-lg ${
              isAdmin 
                ? 'bg-red-900/30 border-red-500/50 text-red-400 hover:bg-red-900/50' 
                : 'bg-blue-600 border-blue-500 text-white hover:bg-blue-500'
            }`}
          >
            <i className={`fa-solid ${isAdmin ? 'fa-right-from-bracket' : 'fa-lock-open'}`}></i>
            <span className="hidden sm:inline">{isAdmin ? 'Toka Admin' : 'Admin'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
