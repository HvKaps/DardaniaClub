import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomeDonationSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-red-600 text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
            FORCE <br/> LOCALE
          </h2>
          <div className="h-2 w-24 bg-black mb-8" />
          <p className="text-xl font-bold uppercase tracking-wide">
            Association Sportive & Bénévole
          </p>
          <p className="text-lg font-mono leading-relaxed opacity-80 mb-8 max-w-md">
            Esprit Boxe est un petit club de quartier. Ici, pas de franchise, juste de la passion.
            <br/><br/>
            Vos dons permettent d'acheter des gants pour les enfants de l'école de boxe et de financer les déplacements en compétition.
          </p>
          <button 
            onClick={() => navigate('/donate')}
            className="px-8 py-4 bg-black text-white font-black uppercase tracking-widest hover:scale-105 transition cursor-hover"
          >
            Soutenir le club <Heart size={16} className="inline ml-2 fill-current" />
          </button>
        </div>
      
      {/* Représentation visuelle de l'esprit associatif */}
      <div className="relative h-full min-h-[300px] border-4 border-black p-8 flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-sm">
         <div className="text-center space-y-4">
            <div>
               <div className="text-6xl font-black">100%</div>
               <div className="text-xs uppercase font-bold tracking-[0.3em]">Bénévoles</div>
            </div>
            <div className="w-16 h-[2px] bg-black mx-auto opacity-50" />
            <div>
               <div className="text-6xl font-black">0€</div>
               <div className="text-xs uppercase font-bold tracking-[0.3em]">Profit</div>
            </div>
            <div className="w-16 h-[2px] bg-black mx-auto opacity-50" />
            <div className="text-xl font-black italic mt-4">
               TOUT POUR LES JEUNES
            </div>
         </div>
      </div>
    </div>
    
    {/* Texte décoratif arrière-plan */}
    <div className="absolute -bottom-16 -right-4 text-[20vw] font-black opacity-10 pointer-events-none select-none italic font-outline-2 text-black">
      FAMILY
    </div>
  </section>
  );
};

export default HomeDonationSection;
