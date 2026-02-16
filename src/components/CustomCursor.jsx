import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Detecter les éléments interactifs pour grossir le curseur
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('.cursor-hover')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full border border-red-500 pointer-events-none z-[10000] hidden md:flex items-center justify-center mix-blend-difference bg-white/10 backdrop-blur-[1px]"
      animate={{ 
        x: mousePosition.x - (isHovering ? 32 : 12), 
        y: mousePosition.y - (isHovering ? 32 : 12),
        width: isHovering ? 64 : 24,
        height: isHovering ? 64 : 24,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="w-1 h-1 bg-red-500 rounded-full" />
    </motion.div>
  );
};

export default CustomCursor;
