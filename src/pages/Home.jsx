import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CLASSES_DATA, FAQ_DATA } from '../data/constants';
import SectionHeader from '../components/SectionHeader';
import HomeDonationSection from '../components/HomeDonationSection';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const navigate = useNavigate();

  // --- CONFIGURATION DE TA GALERIE (5 PHOTOS) ---
  const galleryImages = [
    { id: 1, src: '/img1.jpg', size: 'md:col-span-2 md:row-span-2 col-span-2 h-64 md:h-full' }, 
    { id: 2, src: '/img2.jpg', size: 'col-span-1 h-40 md:h-full' },
    { id: 3, src: '/img3.jpg', size: 'col-span-1 h-40 md:h-full' },
    { id: 4, src: '/img4.jpg', size: 'col-span-1 h-40 md:h-full' },
    { id: 5, src: '/img5.jpg', size: 'col-span-1 h-40 md:h-full' },
  ];
  
  return (
    <>
      {/* HERO SECTION */}
      <header className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src="/accueil.jpg" className="w-full h-full object-cover" alt="Hero" />
        </motion.div>
        
        <div className="relative z-20 text-center px-4 mix-blend-difference text-white">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <h1 className="text-[10vw] leading-[0.85] font-black uppercase italic tracking-tighter">
              <span className="block font-outline-2 text-transparent">Dardania</span>
              <span className="block text-white">Boxe</span>
            </h1>
          </motion.div>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
             <div className="h-[1px] w-12 bg-white hidden md:block" />
             <p className="uppercase tracking-[0.3em] text-xs font-bold">Provins • Boxe & Lutte • 1994</p>
             <div className="h-[1px] w-12 bg-white hidden md:block" />
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </header>

      {/* SECTION VALEURS AVEC VIDÉO LOCALE */}
      <section className="py-32 px-6 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader title="Plus qu'un club" subtitle="Nos Valeurs" />
            <p className="text-xl leading-relaxed opacity-70 mb-8 font-light">
              Le Dardania Sporting Club forge les corps et les esprits depuis 1994. 
              Une institution à Provins dédiée à la performance et au respect.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
               <div>
                 <div className="text-4xl font-black text-red-600 mb-1">98%</div>
                 <div className="text-xs uppercase tracking-widest opacity-50">Satisfaction</div>
               </div>
               <div>
                 <div className="text-4xl font-black text-red-600 mb-1">12</div>
                 <div className="text-xs uppercase tracking-widest opacity-50">Coachs Pro</div>
               </div>
            </div>
          </div>
          
          {/* LECTEUR VIDÉO YouTube */}
<div className="relative aspect-video overflow-hidden rounded-sm bg-zinc-900 border border-white/10 shadow-2xl">
  <iframe
    src="https://www.youtube.com/embed/wGbV1slRWAQ?autoplay=1&mute=1&loop=1&playlist=wGbV1slRWAQ&controls=0&showinfo=0&rel=0"
    title="Vidéo du club"
    allow="autoplay; encrypted-media"
    allowFullScreen
    className="w-full h-full"
    style={{ border: 'none' }}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
</div>
</div>
</section>

      {/* SECTION COURS */}
      <section className="py-32 bg-white text-black">
        <div className="px-6 mb-12">
           <SectionHeader title="Dominez le Ring" subtitle="Nos Disciplines" />
        </div>
        <div className="flex flex-col md:flex-row h-[70vh] w-full border-y border-black">
          {CLASSES_DATA.map((item) => (
            <div key={item.id} className="relative group flex-1 border-r border-black overflow-hidden transition-all duration-500 hover:flex-[2] cursor-pointer grayscale hover:grayscale-0">
               <img src={item.img} className="absolute inset-0 w-full h-full object-cover" alt={item.title} />
               <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition" />
               <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent text-white">
                 <h3 className="text-4xl font-black uppercase italic leading-none mb-2 md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:mb-12 md:group-hover:rotate-0 md:group-hover:translate-x-0 md:group-hover:mb-2 transition-all duration-500">
                   {item.title}
                 </h3>
                 <p className="opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 text-sm font-mono mt-2 border-t border-white/50 pt-2">
                   {item.details}
                 </p>
               </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button onClick={() => navigate('/EventPage')} className="px-8 py-4 border-2 border-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition">
            Voir les prochains combats
          </button>
        </div>
      </section>

      {/* --- SECTION GALERIE PHOTO --- */}
      <section className="py-32 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader title="L'Esprit Dardania" subtitle="Galerie" />
            <div className="hidden md:flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs mb-8">
              <Instagram size={16} /> @dardaniaboxing
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[80vh]">
            {galleryImages.map((img) => (
              <motion.div 
                key={img.id}
                whileHover={{ scale: 0.98 }}
                className={`${img.size} relative overflow-hidden bg-zinc-900 group border border-white/5`}
              >
                <img 
                  src={img.src} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" 
                  alt="Club Life" 
                  onError={(e) => { e.target.src = '/accueil.jpg' }}
                />
                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HomeDonationSection />

      {/* SECTION FAQ */}
      <section className="py-32 bg-[#0a0a0a] text-white px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Des questions ?" subtitle="FAQ" align="center" />
          <div className="space-y-4">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="border border-white/20 p-6 hover:border-red-600 transition duration-300 bg-white/5">
                <h4 className="font-bold text-lg uppercase mb-2 flex items-center gap-3">
                  <span className="text-red-600">0{i+1}.</span> {item.q}
                </h4>
                <p className="text-gray-400 pl-10 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;