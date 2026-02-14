
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Éclairage Architectural",
    description: "Nous concevons des environnements où la lumière ne se contente pas d'éclairer, elle révèle. Intégration invisible pour des résidences d'exception.",
    image: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?auto=format&fit=crop&q=80&w=1600",
    features: ["IRC 98+ Haute Fidélité", "Protocole DALI/KNX", "Gestion Scénographique"],
    details: "Nos études photométriques garantissent un confort visuel absolu tout en soulignant les volumes de votre architecture.",
    technical: "Flux lumineux : 450lm/m — Température : 2700K Warm Dim"
  },
  {
    title: "Smart Home & Domotique",
    description: "Une technologie au service de votre confort. Pilotage centralisé de l'éclairage, du climat et de la sécurité via des interfaces minimalistes.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1600",
    features: ["Intégration Control4/Lutron", "Scénarios Automatisés", "Sécurité Réseau VIP"],
    details: "Finition en laiton massif ou verre trempé. L'intelligence s'efface pour laisser place à la serrénité.",
    technical: "Protocoles : Zigbee, Thread, Matter — Temps de réponse < 50ms"
  },
  {
    title: "Tableaux Électriques d'Art",
    description: "Parce que l'invisible mérite aussi l'excellence. Nos coffrets sont réalisés avec une précision chirurgicale pour vos équipements sensibles.",
    /* IMAGE MISE À JOUR: Tableaux Électriques d'Art */
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1600&auto=format&fit=crop",
    features: ["Câblage Structuré", "Protection Foudre", "Filtration Audio/Vidéo"],
    details: "Chaque raccordement est un témoignage de notre rigueur. Fiabilité absolue pour les demeures connectées.",
    technical: "Composants : Schneider Electric Silver Line — Certification NF-C 15-100"
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-60 bg-[#050505] selection:bg-amber-400 selection:text-black">
      {/* Header dense */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.5em] block mb-8">Catalogue d'Expertises de Prestige</span>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 tracking-tighter leading-none text-white">
            Maîtrise <br /> <span className="italic text-white/50">Sans Limite.</span>
          </h1>
          <p className="text-xl text-white/80 font-light leading-loose max-w-2xl">
            Nous intervenons sur des chantiers où chaque millimètre compte. Notre approche combine ingénierie de pointe, protocoles de sécurité militaires et sensibilité esthétique de haute couture.
          </p>
        </motion.div>
      </section>

      {/* Grid Interactive Renforcée */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-60">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {services.map((s, idx) => (
             <motion.div
              key={idx}
              whileHover={{ y: -15 }}
              className="group relative h-[700px] overflow-hidden border border-white/5 bg-black cursor-pointer shadow-2xl"
             >
                <div className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-1000">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-12 w-full transition-all duration-700">
                  <span className="text-amber-400 font-serif italic text-5xl mb-6 block">0{idx + 1}</span>
                  <h3 className="text-3xl font-serif text-white mb-6 tracking-tighter italic">{s.title}</h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {s.description}
                  </p>
                  
                  <div className="space-y-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <div className="w-8 h-[1px] bg-amber-400"></div>
                        <span className="text-[10px] uppercase tracking-widest text-white/90 font-bold">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Info technique révélée */}
                  <div className="mt-8 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                    <p className="text-[9px] text-amber-400/60 uppercase tracking-widest font-black mb-2">Données Techniques</p>
                    <p className="text-[10px] text-white/60 uppercase tracking-widest">{s.technical}</p>
                  </div>
                </div>

                {/* Overlay au hover complet */}
                <div className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:pointer-events-auto p-16 flex flex-col justify-center translate-y-full group-hover:translate-y-0">
                   <h4 className="text-black text-[11px] font-black uppercase tracking-[0.6em] mb-10">Signature Valmont</h4>
                   <p className="text-black text-3xl font-serif italic leading-relaxed mb-12">
                     "{s.details}"
                   </p>
                   <div className="mt-auto flex items-center space-x-6">
                      <span className="h-[1px] w-20 bg-black"></span>
                      <button className="text-black text-[11px] font-black uppercase tracking-widest hover:translate-x-4 transition-transform">
                        Solliciter une étude
                      </button>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Section des Standards Techniques - IMAGES CORRIGÉES */}
      <section className="py-40 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-400/5 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-4xl md:text-6xl font-serif tracking-tighter italic text-white mb-12">Protocoles <br /><span className="text-amber-400 not-italic">Sans Concession.</span></h2>
              <p className="text-white/80 text-xl font-light leading-loose mb-12">
                Nous ne nous contentons pas de poser des câbles. Nous bâtissons l'infrastructure nerveuse de votre demeure. Chaque raccordement est doublement vérifié par nos ingénieurs certifiés.
              </p>
              <div className="grid grid-cols-2 gap-12">
                 <div>
                    <h5 className="text-white font-serif text-4xl italic mb-3">98+</h5>
                    <p className="text-[10px] uppercase tracking-widest text-amber-400 font-black">CRI (Fidélité Couleur)</p>
                 </div>
                 <div>
                    <h5 className="text-white font-serif text-4xl italic mb-3">IP67</h5>
                    <p className="text-[10px] uppercase tracking-widest text-amber-400 font-black">Étanchéité Certifiée</p>
                 </div>
                 <div>
                    <h5 className="text-white font-serif text-4xl italic mb-3">24/7</h5>
                    <p className="text-[10px] uppercase tracking-widest text-amber-400 font-black">Monitoring Réseau</p>
                 </div>
                 <div>
                    <h5 className="text-white font-serif text-4xl italic mb-3">0ms</h5>
                    <p className="text-[10px] uppercase tracking-widest text-amber-400 font-black">Latence Domotique</p>
                 </div>
              </div>
           </motion.div>
           <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  /* IMAGE CORRIGÉE 1: Détail technique haute précision */
                  "https://www.mon-club-elec.fr/wp-content/uploads/2023/09/f76157dbf6c6cbb0bef3524a73777fee.jpg",
                  /* IMAGE CORRIGÉE 2: Composant technique moderne */
                  "https://isegp.fr/wp-content/uploads/2023/02/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable-1-2.jpg"
                ].map((img, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className={`aspect-square glass p-4 overflow-hidden border border-white/10 ${i % 2 !== 0 ? 'mt-12' : ''}`}
                  >
                    <img src={img} className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700" alt="Détail technique haute précision" />
                  </motion.div>
                ))}
              </div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
           </div>
        </div>
      </section>

      {/* Interactive CTA */}
      <section className="py-60 px-6 text-center bg-[#050505] relative">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
         >
           <h2 className="text-5xl md:text-8xl font-serif tracking-tighter text-white italic mb-12">Un projet <br /> d'envergure ?</h2>
           <Link to="/contact" className="inline-flex items-center space-x-12 px-20 py-8 border border-amber-400 text-amber-400 text-[11px] font-black uppercase tracking-[0.6em] hover:bg-amber-400 hover:text-black transition-all group">
             <span>Initialiser le Dossier</span>
             <span className="w-12 h-px bg-amber-400 group-hover:bg-black transition-colors"></span>
           </Link>
         </motion.div>
      </section>
    </div>
  );
};

export default Services;