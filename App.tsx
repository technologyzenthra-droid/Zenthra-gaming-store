
import React, { useState, useEffect, useCallback } from 'react';
import { Game } from './types';
import { STORAGE_KEY, INITIAL_GAMES, ADMIN_ACCESS_CODE, ADMIN_PHONE, GITHUB_URL } from './constants';
import Navbar from './components/Navbar';
import GameCard from './components/GameCard';
import AdminPanel from './components/AdminPanel';
import ContactModal from './components/ContactModal';
import AdminAuthModal from './components/AdminAuthModal';

const App: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [showContact, setShowContact] = useState<boolean>(false);
  const [showAuth, setShowAuth] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize games from localStorage
  useEffect(() => {
    const savedGames = localStorage.getItem(STORAGE_KEY);
    if (savedGames) {
      setGames(JSON.parse(savedGames));
    } else {
      setGames(INITIAL_GAMES);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_GAMES));
    }
  }, []);

  const handleAddGame = (newGame: Game) => {
    const updatedGames = [newGame, ...games];
    setGames(updatedGames);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedGames));
  };

  const handleDeleteGame = (id: string) => {
    const updatedGames = games.filter(g => g.id !== id);
    setGames(updatedGames);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedGames));
  };

  const handleAuth = (code: string) => {
    if (code === ADMIN_ACCESS_CODE) {
      setIsAdmin(true);
      setShowAuth(false);
      return true;
    }
    return false;
  };

  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-10 selection:bg-blue-500/30">
      <Navbar 
        onContactClick={() => setShowContact(true)} 
        onAdminClick={() => isAdmin ? setIsAdmin(false) : setShowAuth(true)}
        isAdmin={isAdmin}
      />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-12 text-center relative overflow-hidden py-10 rounded-3xl bg-slate-900/20 border border-slate-800/50">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
          
          <h1 className="text-5xl md:text-7xl font-gaming font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 drop-shadow-sm">
            ZENTHRA GAMING STORE
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto px-4">
            Pata michezo yote ya kisasa kwa urahisi zaidi. Programu, Games na Tutorial zote zipo hapa.
          </p>
          
          <div className="mt-10 max-w-lg mx-auto relative group px-4">
            <input 
              type="text"
              placeholder="Tafuta gemu (mfano: Action, RPG, Minecraft)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-700 rounded-2xl py-4 px-6 pl-14 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner group-hover:border-slate-600"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-9 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors"></i>
          </div>
        </div>

        {isAdmin && (
          <div className="mb-12">
            <AdminPanel onAddGame={handleAddGame} />
          </div>
        )}

        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="h-px flex-1 bg-slate-800"></div>
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em]">Mkusanyiko wa Games</h2>
          <div className="h-px flex-1 bg-slate-800"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredGames.length > 0 ? (
            filteredGames.map(game => (
              <GameCard 
                key={game.id} 
                game={game} 
                isAdmin={isAdmin} 
                onDelete={() => handleDeleteGame(game.id)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-24 bg-slate-900/30 rounded-3xl border border-dashed border-slate-800">
              <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-600">
                <i className="fa-solid fa-ghost text-4xl"></i>
              </div>
              <p className="text-slate-500 text-lg font-medium">Samahani, hatujapata gemu unalotafuta.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-blue-400 hover:text-blue-300 font-bold transition-colors"
              >
                Ondoa filter zote
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Modals */}
      {showContact && (
        <ContactModal onClose={() => setShowContact(false)} phone={ADMIN_PHONE} />
      )}
      
      {showAuth && (
        <AdminAuthModal 
          onClose={() => setShowAuth(false)} 
          onAuth={handleAuth} 
        />
      )}

      {/* Enhanced Footer */}
      <footer className="mt-20 border-t border-slate-900 pt-16 pb-12 px-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
              <i className="fa-solid fa-bolt text-white text-sm"></i>
            </div>
            <span className="font-gaming font-bold text-xl tracking-widest text-white">
              ZENTHRA
            </span>
          </div>
          
          <div className="flex gap-6 mb-10">
            <a href={GITHUB_URL} target="_blank" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all">
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a href={`tel:${ADMIN_PHONE}`} className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all">
              <i className="fa-solid fa-phone text-xl"></i>
            </a>
            <a href={`https://wa.me/${ADMIN_PHONE.replace(/^0/, '255')}`} target="_blank" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all">
              <i className="fa-brands fa-whatsapp text-2xl"></i>
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Zenthra Gaming Store. Developed for the gaming community.
            </p>
            <div className="flex items-center justify-center gap-4 text-xs font-bold text-slate-700 uppercase tracking-widest">
              <span>Privacy Policy</span>
              <span className="w-1 h-1 rounded-full bg-slate-800"></span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
