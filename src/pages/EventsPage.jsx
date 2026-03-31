import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Loader2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import PayPalPart from '../components/PayPalPart';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // CORRECTION : On récupère les identifiants stockés lors du login
    const authData = localStorage.getItem('authData');

    fetch('http://localhost:8080/api/admin/events', {
      headers: {
        'Authorization': `Basic ${authData}` // On prouve au serveur qu'on est connecté
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Erreur 401 ou 404");
        return res.json();
      })
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505]">
      <Loader2 className="animate-spin text-red-600" size={48} />
    </div>
  );

  return (
    <div className="min-h-screen pt-32 px-6 pb-20 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <SectionHeader title="Calendrier Combat" subtitle="Prochains Évènements" align="center" />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {events.length === 0 ? (
            <p className="text-center opacity-50 italic uppercase tracking-widest">Aucun combat prévu pour le moment.</p>
          ) : (
            events.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col md:flex-row items-center bg-white/5 border border-white/10 overflow-hidden hover:border-red-600 transition-colors"
              >
                <div className="w-full md:w-80 h-60 overflow-hidden bg-white/10">
                  {/* On utilise une image locale ou par défaut */}
                  <img src="/accueil.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" alt={event.title} />
                </div>

                <div className="flex-1 p-8">
                  <div className="flex items-center gap-3 mb-3 text-red-600 font-mono text-xs font-bold uppercase tracking-widest">
                    <Calendar size={14} /> {event.date} • {event.time || "19:00"}
                  </div>
                  <h3 className="text-4xl font-black uppercase italic mb-4">{event.title}</h3>
                  <p className="flex items-center gap-2 text-sm opacity-60 font-bold uppercase">
                    <MapPin size={16} className="text-red-600"/> {event.location}
                  </p>
                </div>

                <div className="w-full md:w-72 p-8 bg-black/40 border-l border-white/10 flex flex-col items-center">
                  <div className="text-4xl font-black mb-6 italic">{event.price} €</div>
                  <div className="w-full">
                     <PayPalPart prix={event.price} titre={event.title} onSuccess={() => alert("Réservation confirmée !")} />
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;