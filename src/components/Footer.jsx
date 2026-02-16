import React from 'react';

const Footer = () => (
  <footer className="bg-red-600 text-black py-16 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
       <div>
         <h2 className="text-[12vw] md:text-[6vw] leading-[0.8] font-black uppercase italic tracking-tighter mb-6">
           Dardania<br/>Sporting Club.
         </h2>
         <div className="flex gap-4 text-sm font-black uppercase tracking-wide">
           <a href="https://www.facebook.com/profile.php?id=100064104429094&locale=fr_FR" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a>
         </div>
       </div>
       <div className="text-right uppercase font-bold text-xs tracking-widest space-y-2">
         <p>Gymnase COSEC, Provins</p>
         <p>© 2024 Dardania Sporting Club</p>
       </div>
    </div>
  </footer>
);

export default Footer;
