
import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  isAdmin: boolean;
  onDelete: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, isAdmin, onDelete }) => {
  const handleDownload = () => {
    // Ensuring the link opens in a new tab (Chrome/Browser)
    window.open(game.downloadUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={game.imageUrl} 
          alt={game.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 px-3 py-1 bg-blue-600/90 rounded-full text-[10px] uppercase font-bold tracking-widest backdrop-blur-sm">
          {game.category}
        </div>
        {isAdmin && (
          <button 
            onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="absolute top-2 right-2 w-8 h-8 bg-red-600/90 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors"
            title="Futa Gemu"
          >
            <i className="fa-solid fa-trash text-xs"></i>
          </button>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-gaming font-bold mb-2 line-clamp-1">{game.title}</h3>
        <p className="text-slate-400 text-sm mb-6 line-clamp-2 h-10">
          {game.description}
        </p>
        
        <button 
          onClick={handleDownload}
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
        >
          <i className="fa-solid fa-download"></i>
          Pakua Sasa (Download)
        </button>
      </div>
    </div>
  );
};

export default GameCard;
