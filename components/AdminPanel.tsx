
import React, { useState } from 'react';
import { Game } from '../types';
import { CATEGORIES } from '../constants';

interface AdminPanelProps {
  onAddGame: (game: Game) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onAddGame }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    downloadUrl: '',
    category: CATEGORIES[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.downloadUrl) return;

    const newGame: Game = {
      ...formData,
      id: Date.now().toString(),
      createdAt: Date.now(),
      imageUrl: formData.imageUrl || `https://picsum.photos/seed/${formData.title}/600/400`
    };

    onAddGame(newGame);
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      downloadUrl: '',
      category: CATEGORIES[0]
    });
    setIsOpen(false);
    alert('Gemu limeongezwa kikamilifu!');
  };

  return (
    <div className="bg-slate-900 border border-blue-900/30 rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-4 bg-blue-900/20 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-blue-900/10">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
            <i className="fa-solid fa-screwdriver-wrench text-sm"></i>
          </div>
          <h2 className="font-gaming font-bold tracking-wide">ADMIN DASHBOARD</h2>
        </div>
        
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold bg-slate-950 px-3 py-1.5 rounded-full border border-slate-800">
            <i className="fa-brands fa-github"></i>
            <span>GitHub Connected</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2"
          >
            <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
            {isOpen ? 'Funga' : 'Ongeza Gemu'}
          </button>
        </div>
      </div>

      {isOpen && (
        <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 ml-1 tracking-wider">Jina la Gemu</label>
              <input 
                required
                type="text" 
                placeholder="Mfano: GTA San Andreas"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 ml-1 tracking-wider">Category</label>
              <div className="relative">
                <select 
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500 outline-none appearance-none transition-all cursor-pointer"
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value})}
                >
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"></i>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 ml-1 tracking-wider">Download Link</label>
              <div className="relative">
                <input 
                  required
                  type="url" 
                  placeholder="https://..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 pl-11 focus:ring-2 focus:ring-blue-500 outline-none text-blue-400 font-mono text-sm transition-all"
                  value={formData.downloadUrl}
                  onChange={e => setFormData({...formData, downloadUrl: e.target.value})}
                />
                <i className="fa-solid fa-link absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 ml-1 tracking-wider">Maelezo (Description)</label>
              <textarea 
                rows={3}
                placeholder="Andika sifa za gemu na jinsi ya kuinstall..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-all placeholder:text-slate-600"
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 ml-1 tracking-wider">Image Link (Optional)</label>
              <div className="relative">
                <input 
                  type="url" 
                  placeholder="Link ya picha (cover)..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 pl-11 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.imageUrl}
                  onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                />
                <i className="fa-solid fa-image absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
              </div>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-600/10 mt-2 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-paper-plane"></i>
              Chapisha Gemu (Publish Now)
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AdminPanel;
