
import React from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  // 3D Tilt Effect logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex flex-col bg-[#050505] selection:bg-amber-400 selection:text-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden px-6 md:px-12">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
          {/* IMAGE RESTAURÉE: L'image de fond d'accueil qui plaisait au client */}
          <img 
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Interior Lighting Design"
            className="w-full h-full object-cover opacity-50 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050505]" />
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-amber-400/10 blur-[100px] animate-pulse" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center space-x-6 mb-10">
              <div className="h-[1px] w-16 bg-amber-400"></div>
              <span className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.7em]">
                Maison de Haute Électricité
              </span>
            </div>
            
            <h1 className="text-7xl md:text-[10vw] font-serif mb-16 leading-[0.85] text-white tracking-tighter">
              Orchestrer <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">la clarté.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-center gap-16">
              <Link 
                to="/services" 
                className="w-fit px-16 py-8 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-amber-400 hover:text-white transition-all duration-700 shadow-[0_10px_40px_rgba(251,191,36,0.15)] relative group overflow-hidden"
              >
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-amber-400 transition-transform duration-700 ease-in-out" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-700">Expertises & Design</span>
              </Link>
              <p className="max-w-xs text-[11px] text-white/70 uppercase tracking-[0.2em] font-medium leading-loose border-l border-white/10 pl-8">
                Installations résidentielles de prestige <br />Paris — Cannes — Genève
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-60 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <h2 className="text-6xl md:text-8xl font-serif mb-12 tracking-tighter leading-none italic text-white">L'émotion <br /><span className="text-amber-400 not-italic">technique.</span></h2>
              <p className="text-white/80 font-light leading-relaxed text-xl mb-16">
                Chaque projet est une partition où la lumière joue le rôle principal. Nous transformons les contraintes électriques en chefs-d'œuvre de design.
              </p>
              
              <div className="space-y-16">
                {[
                  { label: "Design Étudié", desc: "Études photométriques pour une ambiance parfaite." },
                  { label: "Domotique Noble", desc: "Intelligence invisible et interfaces de collection." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-10 items-start">
                    <span className="text-amber-400 font-serif italic text-3xl opacity-50">{idx + 1}</span>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-black mb-3">{item.label}</h4>
                      <p className="text-xs text-white/60 leading-relaxed font-medium uppercase tracking-widest">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, perspective: "1500px" }}
              className="relative aspect-[4/5] lg:aspect-square overflow-hidden border border-white/5 shadow-2xl group cursor-none"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
                alt="Architectural lighting luxury hallway"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[3s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-12 left-12">
                 <p className="text-[10px] uppercase tracking-[0.5em] font-black text-white/80">Résidence Privée, Saint-Jean-Cap-Ferrat</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Showcase Gallery */}
      <section className="py-60 bg-black px-6 md:px-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto mb-32 flex justify-between items-end">
          <h2 className="text-5xl md:text-8xl font-serif tracking-tighter italic text-white">Réalisations <br /><span className="text-white/50 not-italic">Signées.</span></h2>
          <div className="hidden md:block w-32 h-[1px] bg-amber-400 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              title: "Penthouse Opéra",
              location: "Paris VIII",
              img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1200&auto=format&fit=crop"
            },
            {
              title: "Villa Lumina",
              location: "Cap d'Ail",
              img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
            },
            {
              title: "Atelier d'Art",
              location: "Genève",
              img: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=1200&auto=format&fit=crop"
            }
          ].map((proj, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20 }}
              className="relative h-[600px] overflow-hidden group cursor-pointer border border-white/5"
            >
              <img src={proj.img} className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 p-12 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-[10px] uppercase tracking-[0.4em] text-amber-400 font-black mb-4 block">{proj.location}</span>
                <h3 className="text-4xl font-serif text-white tracking-tighter">{proj.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* High Standard Reveal */}
      <section className="py-60 bg-[#050505] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h3 className="text-[10px] uppercase tracking-[0.8em] text-amber-400 font-black mb-16">L'excellence au quotidien</h3>
            <h2 className="text-5xl md:text-8xl font-serif tracking-tighter italic mb-20 leading-tight text-white">"La lumière n'est rien sans <br /> le silence électrique."</h2>
            <Link to="/apropos" className="inline-block border-b border-amber-400 pb-4 text-[11px] uppercase tracking-[0.4em] font-black hover:text-amber-400 transition-all text-white">Découvrir notre histoire</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;