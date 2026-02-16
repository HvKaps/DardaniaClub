import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="fixed w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <Link to="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white group-hover:scale-110 transition duration-500">
            <img src="/logo.jpg" alt="Dardania SC Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-black tracking-widest uppercase hidden md:block text-lg">Dardania S.C.</span>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
            {[
              { name: 'donate', path: '/donate' },
              { name: 'contact', path: '/contact' }
            ].map(item => (
               <li key={item.name}>
                 <Link 
                  to={item.path}
                  className={`cursor-pointer hover:text-red-500 transition-colors ${isActive(item.path) ? 'text-red-500 line-through decoration-2' : ''}`}
                 >
                   {item.name}
                 </Link>
               </li>
            ))}
          </ul>
          
          <button onClick={() => setDarkMode(!darkMode)} className="cursor-pointer hover:rotate-12 transition">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link 
            to="/auth"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-red-600 hover:text-white transition duration-300 clip-path-slant"
          >
            Connexion
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            className="fixed inset-0 z-40 bg-black text-white flex flex-col items-center justify-center gap-8"
          >
            {[
              { name: 'home', path: '/' },
              { name: 'donate', path: '/donate' },
              { name: 'contact', path: '/contact' },
              { name: 'auth', path: '/auth' }
            ].map(item => (
              <Link 
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-black uppercase italic hover:text-red-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
