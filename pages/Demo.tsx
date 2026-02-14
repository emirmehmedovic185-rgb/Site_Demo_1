
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Demo: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#050505] px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full glass p-16 text-center border-amber-400/20"
      >
        <h1 className="text-4xl font-serif italic text-white mb-8 leading-tight">
          Espace en cours <br /> de personnalisation
        </h1>
        <div className="w-12 h-[1px] bg-amber-400 mx-auto mb-10"></div>
        <p className="text-white/70 text-sm uppercase tracking-[0.3em] font-light leading-relaxed mb-12">
          Ceci est un site démo. <br /> Cette page est entièrement personnalisable selon vos besoins spécifiques.
        </p>
        <Link 
          to="/" 
          className="inline-block px-12 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-amber-400 hover:text-white transition-all duration-500 shadow-xl"
        >
          Retour à l'accueil
        </Link>
      </motion.div>
    </div>
  );
};

export default Demo;
