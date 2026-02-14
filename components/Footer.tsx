
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-3xl font-serif font-bold tracking-tight text-white uppercase italic">
                {COMPANY_NAME}
              </span>
            </Link>
            <p className="text-gray-200 max-w-sm leading-relaxed text-sm font-light">
              Sublimer vos espaces par une maîtrise artisanale de la lumière. Spécialiste des installations architecturales et résidentielles haut de gamme.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Exploration</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Accueil</Link></li>
              <li><Link to="/apropos" className="hover:text-amber-500 transition-colors">Notre Vision</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Expertises</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Collaborer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>Paris & Côte d'Azur</li>
              <li>+33 (0)1 45 67 89 10</li>
              <li>contact@valmont-elec.com</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] uppercase tracking-widest text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Valmont Électricité & Design. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/demo" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link to="/demo" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
