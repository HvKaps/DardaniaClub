import React from 'react';
import { MapPin, Train } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const ContactPage = () => (
  <div className="pt-32 px-6 min-h-screen">
    <SectionHeader title="Venir Au Club" subtitle="Localisation" />
    
    <div className="grid md:grid-cols-2 gap-16 pb-24">
      <div className="space-y-12">
        <div className="group">
           <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white"><MapPin /></div>
             <h3 className="text-2xl font-black uppercase italic">L'Adresse</h3>
           </div>
           <p className="text-xl opacity-80 pl-16">
             Gymnase COSEC<br/>
             4 Pl. du Pré Botin<br/>
             77160 Provins
           </p>
        </div>

        <div className="group">
           <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-white text-black flex items-center justify-center"><Train /></div>
             <h3 className="text-2xl font-black uppercase italic">Contact</h3>
           </div>
           <div className="pl-16 space-y-4">
             <div>
               <span className="block text-xs font-black uppercase text-red-600 mb-1">Téléphone</span>
               <p className="text-xl font-bold">06 69 44 94 38</p>
             </div>
             <div>
               <span className="block text-xs font-black uppercase mb-1">Horaires</span>
               <p className="opacity-80">Lun-Ven: 18h00 - 22h00</p>
             </div>
           </div>
        </div>
        
        <div className="pt-8">
          <a href="mailto:dardaniaboxe@gmail.com" className="text-3xl md:text-4xl font-black uppercase italic hover:text-red-600 transition break-words">
            dardaniaboxe@gmail.com
          </a>
        </div>
      </div>

      <div className="h-[500px] bg-white/5 border border-white/10 relative overflow-hidden group">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.6823377759623!2d3.292591776778464!3d48.56396997129525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e8bd63137d046f%3A0x63363309255aabd0!2s4%20Pl.%20du%20Pr%C3%A9%20Botin%2C%2077160%20Provins!5e0!3m2!1sfr!2sfr!4v1715012345678!5m2!1sfr!2sfr" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen="" 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
           className="grayscale hover:grayscale-0 transition duration-700"
         />
      </div>
    </div>
  </div>
);

export default ContactPage;
