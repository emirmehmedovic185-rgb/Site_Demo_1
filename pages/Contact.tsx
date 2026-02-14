
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', project: 'Eclairage' });

  return (
    <div className="pt-32 pb-40 bg-[#050505]">
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-8">Conciergerie Technique</span>
              <h1 className="text-6xl md:text-8xl font-serif mb-12 tracking-tighter italic">
                Initier <br /> <span className="text-white/50 not-italic">le dialogue.</span>
              </h1>
              
              <div className="space-y-12">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold mb-4">Paris</p>
                  <p className="text-lg font-serif italic text-white">12 Avenue Montaigne, 75008</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold mb-4">Côte d'Azur</p>
                  <p className="text-lg font-serif italic text-white">Saint-Tropez, France</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold mb-4">Direct</p>
                  <a href="mailto:privat@valmont.com" className="text-xl font-serif hover:text-amber-500 transition-colors">privat@valmont-elec.com</a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-16 p-12 glass relative overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input type="text" placeholder="Votre Nom" className="w-full bg-transparent border-b border-white/30 py-4 focus:outline-none focus:border-amber-500 transition-colors text-xl font-serif italic placeholder:text-white/40 text-white" />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-700"></div>
                </div>
                <div className="relative group">
                  <input type="email" placeholder="Votre Email" className="w-full bg-transparent border-b border-white/30 py-4 focus:outline-none focus:border-amber-500 transition-colors text-xl font-serif italic placeholder:text-white/40 text-white" />
                </div>
              </div>

              <div className="space-y-8">
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/70">Nature du projet</p>
                <div className="flex flex-wrap gap-4">
                  {['Neuf Prestige', 'Rénovation Luxe', 'Eclairage Design', 'Smart Home'].map(t => (
                    <button 
                      key={t}
                      type="button"
                      onClick={() => setFormState({...formState, project: t})}
                      className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-black transition-all border ${
                        formState.project === t ? 'bg-amber-600 border-amber-600' : 'border-white/20 hover:border-white/50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <textarea placeholder="Décrivez votre vision..." rows={4} className="w-full bg-transparent border border-white/30 p-8 focus:outline-none focus:border-amber-500 transition-colors text-lg font-light italic placeholder:text-white/40 resize-none text-white"></textarea>

              <button className="w-full py-8 bg-white text-black text-xs font-black uppercase tracking-[0.5em] hover:bg-amber-600 hover:text-white transition-all duration-700">
                Transmettre ma demande
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;