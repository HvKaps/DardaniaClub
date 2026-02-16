import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const DonationPage = () => (
  <div className="pt-32 px-6 min-h-screen flex flex-col items-center">
    <div className="max-w-3xl w-full text-center">
      <Heart size={64} className="mx-auto mb-8 text-red-600 animate-pulse" />
      <SectionHeader title="Soutenez Le Club" subtitle="La relève" align="center" />
      
      {/* Progress Bar Stylisée */}
      <div className="relative w-full h-6 bg-white/10 rounded-full overflow-hidden mb-4">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "65%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute h-full bg-red-600"
        />
        <div className="absolute inset-0 flex items-center justify-between px-4 text-[10px] font-black uppercase z-10 mix-blend-difference">
          <span>6 500 €</span>
          <span>Objectif: 10 000 €</span>
        </div>
      </div>
      <p className="text-sm opacity-50 mb-16 font-mono">Chaque don finance le matériel des jeunes licenciés.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[10, 20, 50, 100].map(amount => (
          <button key={amount} className="py-6 border border-white/20 font-black text-2xl hover:bg-red-600 hover:border-red-600 transition cursor-hover">
            {amount}€
          </button>
        ))}
      </div>
      
      <div className="bg-white/5 p-8 border border-white/10 text-left">
        <h4 className="font-black uppercase text-lg mb-4 text-red-600">Pourquoi donner ?</h4>
        <p className="text-sm leading-relaxed opacity-70">
          Esprit Boxe est une association loi 1901. Vos dons sont déductibles des impôts à hauteur de 66%.
          Nous utilisons les fonds pour :
        </p>
        <ul className="mt-4 space-y-2 text-xs font-bold uppercase tracking-wide opacity-80 list-disc list-inside">
          <li>Achat de gants et casques pour les débutants</li>
          <li>Déplacements en compétition régionale</li>
          <li>Organisation du Gala de Noël</li>
        </ul>
      </div>
    </div>
  </div>
);

export default DonationPage;
