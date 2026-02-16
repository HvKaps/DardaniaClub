import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';

// Components
import NoiseOverlay from './components/NoiseOverlay';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`min-h-screen font-sans selection:bg-red-600 selection:text-white transition-colors duration-700 ${darkMode ? 'bg-[#050505] text-white' : 'bg-zinc-100 text-black'}`}>
      <NoiseOverlay />
      <CustomCursor />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default App;

