import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Shield, Lock, Mail, ArrowUpRight, Trophy, ArrowLeft } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const AuthPage = () => {
  const [step, setStep] = useState('selection'); // 'selection', 'login', 'register'
  const [role, setRole] = useState('member'); // 'member', 'admin'

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setStep('login');
  };

  const handleRegister = () => {
    setRole('member'); // Force member role for registration
    setStep('register');
  };

  const goBack = () => {
    setStep('selection');
  };

  return (
    <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
      <AnimatePresence mode="wait">
        
        {/* ÉTAPE 1 : SÉLECTION DU RÔLE */}
        {step === 'selection' && (
          <motion.div 
            key="selection"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-4xl"
          >
            <div className="text-center mb-16">
               <SectionHeader title="Qui Êtes-Vous ?" subtitle="Identification" align="center" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Carte Membre */}
              <button 
                onClick={() => handleRoleSelection('member')}
                className="group relative bg-[#0a0a0a] border border-white/20 p-12 text-left hover:border-red-600 transition-all duration-500 hover:scale-[1.02] cursor-hover overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 group-hover:text-red-600 transition duration-500">
                  <User size={64} strokeWidth={1} />
                </div>
                <h3 className="text-4xl font-black uppercase italic mb-2 group-hover:text-red-600 transition">Membre</h3>
                <p className="text-sm font-mono opacity-60 uppercase tracking-widest">Accès combattant, planning & licences</p>
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-red-600">
                  Se connecter <ArrowUpRight size={16} />
                </div>
              </button>

              {/* Carte Admin/Staff */}
              <button 
                onClick={() => handleRoleSelection('admin')}
                className="group relative bg-[#0a0a0a] border border-white/20 p-12 text-left hover:border-white transition-all duration-500 hover:scale-[1.02] cursor-hover overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition duration-500">
                  <Shield size={64} strokeWidth={1} />
                </div>
                <h3 className="text-4xl font-black uppercase italic mb-2">Staff</h3>
                <p className="text-sm font-mono opacity-60 uppercase tracking-widest">Accès Admin, Coach & Gestion</p>
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  Accès réservé <Lock size={16} />
                </div>
              </button>
            </div>

            <div className="mt-16 text-center">
              <p className="text-sm font-mono opacity-50 mb-4 uppercase">Nouveau au club ?</p>
              <button 
                onClick={handleRegister}
                className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition cursor-hover clip-path-slant"
              >
                Créer un compte Membre
              </button>
            </div>
          </motion.div>
        )}

        {/* ÉTAPE 2 : LOGIN (MEMBRE OU ADMIN) */}
        {step === 'login' && (
          <motion.div 
            key="login"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-md bg-[#0a0a0a] border border-white/20 p-8 md:p-12 relative overflow-hidden"
          >
            <button onClick={goBack} className="absolute top-8 left-8 hover:text-red-600 transition"><ArrowLeft /></button>
            <div className="absolute top-0 left-0 w-full h-2 bg-red-600" />
            
            <div className="mb-12 text-center mt-8">
               {role === 'member' ? <User size={48} className="mx-auto mb-6 text-white" /> : <Shield size={48} className="mx-auto mb-6 text-red-600" />}
               <h2 className="text-3xl font-black uppercase italic mb-2">Connexion {role === 'admin' ? 'Staff' : 'Membre'}</h2>
               <p className="text-xs font-mono opacity-50 uppercase tracking-widest">Bon retour parmi nous</p>
            </div>

            <form className="space-y-6">
              <div className="relative group">
                <Mail className="absolute left-4 top-4 text-gray-500 group-focus-within:text-red-600 transition" size={20} />
                <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 text-white focus:border-red-600 focus:outline-none transition uppercase text-xs font-bold tracking-wider" />
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-4 text-gray-500 group-focus-within:text-red-600 transition" size={20} />
                <input type="password" placeholder="Mot de passe" className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 text-white focus:border-red-600 focus:outline-none transition uppercase text-xs font-bold tracking-wider" />
              </div>
              
              <button className="w-full bg-white text-black py-5 font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition cursor-hover">
                Se Connecter
              </button>
            </form>
            
            <div className="mt-8 text-center">
               {role === 'member' && (
                  <button onClick={handleRegister} className="text-xs uppercase font-bold text-gray-500 hover:text-white transition border-b border-transparent hover:border-white pb-1">
                    Pas encore inscrit ? Créer un compte
                  </button>
               )}
            </div>
          </motion.div>
        )}

        {/* ÉTAPE 3 : INSCRIPTION (AUTO MEMBRE) */}
        {step === 'register' && (
          <motion.div 
            key="register"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-md bg-[#0a0a0a] border border-white/20 p-8 md:p-12 relative overflow-hidden"
          >
            <button onClick={goBack} className="absolute top-8 left-8 hover:text-red-600 transition"><ArrowLeft /></button>
            <div className="absolute top-0 left-0 w-full h-2 bg-white" />
            
            <div className="mb-12 text-center mt-8">
               <Trophy size={48} className="mx-auto mb-6 text-white" />
               <h2 className="text-3xl font-black uppercase italic mb-2">Rejoindre le Club</h2>
               <p className="text-xs font-mono opacity-50 uppercase tracking-widest">Inscription Adhérent</p>
            </div>

            <form className="space-y-6">
              <div className="relative group">
                <User className="absolute left-4 top-4 text-gray-500 group-focus-within:text-red-600 transition" size={20} />
                <input type="text" placeholder="Nom Complet" className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 text-white focus:border-red-600 focus:outline-none transition uppercase text-xs font-bold tracking-wider" />
              </div>
              <div className="relative group">
                <Mail className="absolute left-4 top-4 text-gray-500 group-focus-within:text-red-600 transition" size={20} />
                <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 text-white focus:border-red-600 focus:outline-none transition uppercase text-xs font-bold tracking-wider" />
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-4 text-gray-500 group-focus-within:text-red-600 transition" size={20} />
                <input type="password" placeholder="Mot de passe" className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 text-white focus:border-red-600 focus:outline-none transition uppercase text-xs font-bold tracking-wider" />
              </div>
              
              <button className="w-full bg-red-600 text-white py-5 font-black uppercase tracking-widest hover:bg-white hover:text-black transition cursor-hover">
                S'inscrire
              </button>
            </form>

            <div className="mt-8 text-center">
              <button onClick={() => { setRole('member'); setStep('login'); }} className="text-xs uppercase font-bold text-gray-500 hover:text-white transition border-b border-transparent hover:border-white pb-1">
                Déjà membre ? Se connecter
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default AuthPage;
