import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Shield, Lock, Mail, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../data/authService';

const AuthPage = () => {
  const [step, setStep] = useState('selection'); 
  const [role, setRole] = useState('member');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Form States
  const [formData, setFormData] = useState({
    pseudo: '', email: '', motDePasse: '', nom: '', prenom: ''
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const user = await authService.login(formData.pseudo, formData.motDePasse);
      // Redirection selon le rôle retourné par le Back
      if (user.role === 'ADMIN' || user.role === 'STAFF') navigate('/admin/dashboard');
      else navigate('/events');
    } catch (err) {
      setError("Pseudo ou mot de passe incorrect.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await authService.register(formData);
      setStep('login'); // Après inscription, on l'envoie se connecter
      alert("Inscription réussie ! Connectez-vous.");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 px-6 flex items-center justify-center bg-[#050505] text-white">
      <AnimatePresence mode="wait">
        
        {/* CHOIX DU ROLE */}
        {step === 'selection' && (
          <motion.div key="sel" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
            <button onClick={() => {setRole('member'); setStep('login')}} className="p-12 border border-white/10 hover:border-red-600 transition group bg-white/5">
              <User size={48} className="mb-4 text-red-600"/>
              <h3 className="text-4xl font-black uppercase italic">Adhérent</h3>
              <p className="opacity-50 text-xs mt-2 uppercase tracking-widest">Espace membre & planning</p>
            </button>
            <button onClick={() => {setRole('admin'); setStep('login')}} className="p-12 border border-white/10 hover:border-white transition group bg-white/5">
              <Shield size={48} className="mb-4"/>
              <h3 className="text-4xl font-black uppercase italic">Staff</h3>
              <p className="opacity-50 text-xs mt-2 uppercase tracking-widest">Console de gestion</p>
            </button>
            <button onClick={() => setStep('register')} className="md:col-span-2 py-4 border border-white/10 uppercase font-bold text-xs hover:bg-white hover:text-black transition">
              Pas encore de compte ? S'inscrire
            </button>
          </motion.div>
        )}

        {/* LOGIN FORM */}
        {step === 'login' && (
          <motion.div key="log" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="w-full max-w-md bg-white/5 p-12 border border-white/10 relative">
            <button onClick={() => setStep('selection')} className="absolute top-4 left-4 opacity-50 hover:opacity-100"><ArrowLeft/></button>
            <h2 className="text-3xl font-black uppercase italic mb-8 text-center">Connexion {role}</h2>
            
            {error && <div className="mb-6 p-4 bg-red-600/20 border border-red-600 text-red-600 text-xs flex items-center gap-2"><AlertCircle size={16}/> {error}</div>}

            <form onSubmit={handleLogin} className="space-y-4">
              <input name="pseudo" onChange={handleChange} placeholder="PSEUDO" required className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-red-600 uppercase text-xs font-bold" />
              <input name="motDePasse" type="password" onChange={handleChange} placeholder="MOT DE PASSE" required className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-red-600 uppercase text-xs font-bold" />
              <button type="submit" disabled={isLoading} className="w-full bg-red-600 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition flex justify-center">
                {isLoading ? <Loader2 className="animate-spin"/> : "SE CONNECTER"}
              </button>
            </form>
          </motion.div>
        )}

        {/* REGISTER FORM */}
        {step === 'register' && (
          <motion.div key="reg" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="w-full max-w-md bg-white/5 p-12 border border-white/10 relative">
            <button onClick={() => setStep('selection')} className="absolute top-4 left-4 opacity-50 hover:opacity-100"><ArrowLeft/></button>
            <h2 className="text-3xl font-black uppercase italic mb-8 text-center">Créer un compte</h2>
            <form onSubmit={handleRegister} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input name="prenom" onChange={handleChange} placeholder="PRÉNOM" required className="bg-white/5 border border-white/10 p-4 outline-none focus:border-red-600 text-xs font-bold uppercase" />
                <input name="nom" onChange={handleChange} placeholder="NOM" required className="bg-white/5 border border-white/10 p-4 outline-none focus:border-red-600 text-xs font-bold uppercase" />
              </div>
              <input name="pseudo" onChange={handleChange} placeholder="PSEUDO" required className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-red-600 text-xs font-bold uppercase" />
              <input name="email" type="email" onChange={handleChange} placeholder="EMAIL" required className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-red-600 text-xs font-bold uppercase" />
              <input name="motDePasse" type="password" onChange={handleChange} placeholder="MOT DE PASSE" required className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-red-600 text-xs font-bold uppercase" />
              <button type="submit" disabled={isLoading} className="w-full bg-white text-black py-4 font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition">
                {isLoading ? <Loader2 className="animate-spin mx-auto"/> : "S'INSCRIRE"}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthPage;