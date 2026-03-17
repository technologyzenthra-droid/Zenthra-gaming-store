
import React from 'react';

interface ContactModalProps {
  onClose: () => void;
  phone: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose, phone }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-md p-8 rounded-3xl relative animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-800 text-slate-400"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
            <i className="fa-solid fa-headset"></i>
          </div>
          <h2 className="text-2xl font-bold font-gaming mb-2">WASILIANA NA ADMIN</h2>
          <p className="text-slate-400 mb-8">
            Kama una tatizo lolote la kitalamu au unahitaji gemu maalum, piga simu au tuma meseji:
          </p>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 mb-8 select-all">
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Namba ya Simu</p>
            <p className="text-3xl font-gaming text-blue-400">{phone}</p>
          </div>

          <div className="flex flex-col gap-3">
            <a 
              href={`tel:${phone}`} 
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-phone"></i>
              Piga Simu Sasa
            </a>
            <a 
              href={`https://wa.me/${phone.replace(/^0/, '255')}`} 
              target="_blank"
              className="w-full py-4 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-whatsapp"></i>
              Tuma WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
