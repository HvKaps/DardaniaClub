import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, CreditCard, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const AdherentDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  // Simulation des inscriptions (on pourra brancher la BDD plus tard)
  const [myEvents, setMyEvents] = useState([
    { id: 1, title: "Gala Dardania 2026", date: "20 MAI", status: "Confirmé" }
  ]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (!savedUser) {
      navigate('/auth'); // Redirige si pas connecté
    } else {
      setUser(savedUser);
    }
  }, [navigate]);

  if (!user) return null;

  const cardStyle = "bg-white/5 border border-white/10 p-8 hover:border-red-600 transition-all duration-500";

  return (
    <div className="min-h-screen pt-32 px-6 pb-20 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <SectionHeader title={`Salut, ${user.pseudo}`} subtitle="Ton Espace Adhérent" />
          <div className="text-right hidden md:block">
            <span className="text-[10px] tracking-widest uppercase opacity-50 font-bold">Connecté en tant que</span>
            <p className="text-red-600 font-black italic uppercase">{user.prenom} {user.nom}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLONNE 1 : INFOS PERSO */}
          <div className={cardStyle}>
            <User className="text-red-600 mb-6" size={32} />
            <h3 className="text-xl font-black uppercase italic mb-6">Profil</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="opacity-50 uppercase">Email</span>
                <span className="font-bold">{user.email}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="opacity-50 uppercase">Rôle</span>
                <span className="font-bold text-red-600">Adhérent</span>
              </div>
            </div>
          </div>

          {/* COLONNE 2 : ACCÈS EVENTS */}
          <div className={`${cardStyle} bg-red-600 border-none text-white`}>
            <Calendar className="mb-6" size={32} />
            <h3 className="text-xl font-black uppercase italic mb-4">Prochains Combats</h3>
            <p className="text-sm mb-8 opacity-90 font-bold uppercase leading-tight">
              De nouveaux galas sont disponibles. Prends ta place avant qu'il ne soit trop tard.
            </p>
            <button 
              onClick={() => navigate('/events')}
              className="group flex items-center gap-3 bg-black text-white px-6 py-4 font-black uppercase text-xs italic tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Voir le planning <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
            </button>
          </div>

          {/* COLONNE 3 : MES RÉSERVATIONS */}
          <div className={cardStyle}>
            <CheckCircle className="text-green-500 mb-6" size={32} />
            <h3 className="text-xl font-black uppercase italic mb-6">Mes Places</h3>
            <div className="space-y-4">
              {myEvents.map(ev => (
                <div key={ev.id} className="p-4 bg-white/5 border-l-2 border-green-500">
                  <p className="text-xs font-black uppercase tracking-tighter">{ev.title}</p>
                  <p className="text-[10px] opacity-50">{ev.date} • Payé</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdherentDashboard;