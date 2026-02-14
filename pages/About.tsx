
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-40 bg-[#050505] selection:bg-amber-400 selection:text-black">
      {/* Hero À Propos */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-7"
          >
            <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.6em] block mb-12">L'Artisanat de Haute Précision</span>
            <h1 className="text-6xl md:text-[9vw] font-serif mb-16 tracking-tighter leading-none italic text-white">
              Une vision <br /> <span className="text-white/50 not-italic">de l'excellence.</span>
            </h1>
            <p className="text-2xl text-white/80 font-light leading-relaxed max-w-2xl mb-12">
              Depuis 2008, la Maison Valmont s'impose comme la référence de l'ingénierie électrique pour le secteur du luxe.
            </p>
            <div className="w-40 h-[1px] bg-amber-400"></div>
          </motion.div>

          <div className="lg:col-span-5 relative">
             <motion.img 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1200&auto=format&fit=crop" 
              className="w-full aspect-[4/5] object-cover grayscale border border-white/10"
             />
             <div className="absolute inset-0 border border-amber-400/20 -m-6 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Chronologie de l'Excellence */}
      <section className="py-40 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
            {[
              { year: "2008", label: "Fondation", desc: "Création de l'atelier parisien spécialisé dans la rénovation de monuments historiques." },
              { year: "2014", label: "Expansion Riviera", desc: "Ouverture du bureau de Cannes dédié aux villas d'exception et au yachting." },
              { year: "2021", label: "L'Ère Connectée", desc: "Leader en domotique invisible et intégration de systèmes audiovisuels de collection." }
            ].map((step, idx) => (
              <div key={idx} className="group cursor-default">
                <span className="text-5xl font-serif italic text-amber-400 mb-8 block group-hover:translate-x-4 transition-transform duration-700">{step.year}</span>
                <h4 className="text-[11px] uppercase tracking-[0.4em] text-white font-black mb-6">{step.label}</h4>
                <p className="text-sm text-white/70 leading-relaxed font-light uppercase tracking-widest">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodologie - IMAGE CORRIGÉE */}
      <section className="py-60 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-32 items-center">
           <div className="flex-1">
              <h2 className="text-5xl md:text-7xl font-serif tracking-tighter italic mb-12 text-white">La méthode <br /><span className="text-white/50 not-italic">Valmont.</span></h2>
              <p className="text-white/80 text-xl font-light leading-loose mb-16">
                Chaque installation est un dialogue entre l'architecture et les besoins de ses occupants. Nous suivons un protocole rigoureux pour garantir une discrétion absolue.
              </p>
              <div className="grid grid-cols-1 gap-12">
                {[
                  { t: "Étude & Concept", d: "Simulation 3D et calculs photométriques précis." },
                  { t: "Installation Discrète", d: "Passage des flux sans impact sur les matériaux nobles." },
                  { t: "Mise en Scène", d: "Programmation de scénarios lumineux personnalisés." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-10 items-center border-l border-white/10 pl-10 hover:border-amber-400 transition-colors duration-700 group">
                    <span className="text-xs font-black text-amber-400 tracking-widest group-hover:translate-x-2 transition-transform">PHASE {i + 1}</span>
                    <h4 className="text-sm uppercase tracking-[0.3em] font-medium text-white/80">{item.t}</h4>
                  </div>
                ))}
              </div>
           </div>
           <div className="flex-1 w-full">
              <div className="relative aspect-square glass overflow-hidden border border-white/5 group shadow-2xl">
                {/* IMAGE MISE À JOUR: Processus de travail méticuleux */}
                <img 
                  src="https://www.led-production.fr/img/cms/inspiration/escalier/3-escalier-led-production.jpg" 
                  alt="Processus de travail méticuleux"
                  className="w-full h-full object-cover grayscale transition-all duration-[3s] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-amber-400/5 mix-blend-overlay"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Galerie de Matériaux */}
      <section className="py-40 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-32">
          <h3 className="text-[10px] uppercase tracking-[0.8em] text-white/60 font-black mb-8">Sourcing de prestige</h3>
          <h2 className="text-4xl md:text-6xl font-serif italic tracking-tighter text-white">Des détails de collection.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0">
          {[
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
          ].map((img, i) => (
            <div key={i} className="aspect-square grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden border border-white/5">
               <img src={img} className="w-full h-full object-cover" alt={`Détail noble ${i+1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto Final */}
      <section className="py-60 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-serif mb-16 italic tracking-tighter leading-tight text-white">
            "La lumière est l'âme <br /> de vos espaces."
          </h2>
          <p className="text-[10px] uppercase tracking-[0.5em] font-black text-amber-400">Alexandre Martin — Fondateur</p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;