
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out px-6 md:px-12 py-6 ${
          isScrolled ? 'translate-y-[-10px] scale-[0.98]' : ''
        }`}
      >
        <div className={`max-w-[1400px] mx-auto flex justify-between items-center px-8 py-4 transition-all duration-500 rounded-full border border-white/0 ${
          isScrolled ? 'glass border-white/10' : ''
        }`}>
          <Link to="/" className="flex items-baseline space-x-1 group">
            <span className="text-2xl font-serif font-bold tracking-tighter text-white uppercase italic group-hover:text-amber-400 transition-colors duration-500">
              VALMONT
            </span>
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mb-1"></span>
          </Link>

          <div className="hidden lg:flex items-center space-x-12">
            {[
              { name: 'Accueil', path: '/' },
              { name: 'À Propos', path: '/apropos' },
              { name: 'Expertises', path: '/services' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="relative group py-2"
              >
                <span className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ${
                  location.pathname === link.path ? 'text-amber-400' : 'text-white/60 group-hover:text-white'
                }`}>
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="active-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full"
                  />
                )}
              </Link>
            ))}
            
            <Link 
              to="/contact" 
              className="bg-white px-7 py-2 rounded-full overflow-hidden relative group shadow-[0_0_20px_rgba(251,191,36,0.1)] hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all"
            >
              <div className="absolute inset-0 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <span className="relative z-10 text-[10px] font-black uppercase tracking-widest text-black group-hover:text-white transition-colors duration-500">
                Lancer un Projet
              </span>
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-end space-y-1.5 group"
          >
            <span className="w-8 h-px bg-white group-hover:w-10 transition-all duration-300"></span>
            <span className="w-6 h-px bg-white group-hover:w-10 transition-all duration-300"></span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black z-[110] flex flex-col p-12 lg:hidden"
          >
            <div className="flex justify-between items-center mb-24">
              <span className="text-xl font-serif font-bold tracking-tighter italic uppercase text-amber-400">VALMONT</span>
              <button onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-widest font-bold">Fermer</button>
            </div>
            
            <div className="flex flex-col space-y-10">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'À Propos', path: '/apropos' },
                { name: 'Expertises', path: '/services' },
                { name: 'Contact', path: '/contact' },
              ].map((link, i) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className="text-5xl font-serif hover:text-amber-400 transition-colors duration-300 italic"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
