
import React, { useState } from 'react';

interface AdminAuthModalProps {
  onClose: () => void;
  onAuth: (code: string) => boolean;
}

const AdminAuthModal: React.FC<AdminAuthModalProps> = ({ onClose, onAuth }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onAuth(code.toUpperCase());
    if (!success) {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-sm p-8 rounded-3xl relative animate-in slide-in-from-bottom-8 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl border border-blue-500/20">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h2 className="text-xl font-bold font-gaming">INGIZA ACCESS CODE</h2>
          <p className="text-slate-500 text-sm mt-1">Eneo hili ni la Admin tu.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input 
              autoFocus
              type="password" 
              placeholder="Code ya siri..."
              className={`w-full bg-slate-800/80 border ${error ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-700'} rounded-xl py-4 px-6 text-center text-2xl font-gaming tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all uppercase placeholder:tracking-normal placeholder:text-sm`}
              value={code}
              onChange={e => setCode(e.target.value)}
            />
          </div>
          
          {error && (
            <p className="text-red-400 text-xs text-center font-semibold animate-bounce">
              Code sio sahihi! Jaribu tena.
            </p>
          )}

          <button 
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-xl shadow-blue-600/20 transition-all active:scale-95"
          >
            Verify & Unlock
          </button>
        </form>
        
        <p className="text-center text-slate-500 text-xs mt-6">
          ZENTHRA GAMING STORE &copy; SECURITY
        </p>
      </div>
    </div>
  );
};

export default AdminAuthModal;
