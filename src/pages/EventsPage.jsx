import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Loader2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import PayPalPart from '../components/PayPalPart';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // URL de ton API Render
  const API_URL = 'https://dardania-back.onrender.com/api/admin/events';

  useEffect(() => {
    const authData = localStorage.getItem('authData');

    // On utilise l'URL Render ici
    fetch(API_URL, {
      headers: {
        'Authorization': authData ? `Basic ${authData}` : '',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Erreur de réponse serveur");
        return res.json();
      })
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur API:", err);
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

        <div className="grid grid-cols-1 gap-8">
          {events.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-white/10">
                <p className="opacity-50 uppercase tracking-widest font-mono">Aucun combat récupéré du serveur.</p>
                <p className="text-xs mt-2 text-red-500">Vérifie que ton backend Render est bien "Live".</p>
            </div>
          ) : (
            events.map((event, index) => (
              <motion.div 
                key={event.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row items-center bg-white/5 border border-white/10 overflow-hidden hover:border-red-600 transition-all"
              >
                <div className="w-full md:w-80 h-64 overflow-hidden bg-zinc-900">
                  <img src="/accueil.jpg" className="w-full h-full object-cover grayscale" alt={event.title} />
                </div>

                <div className="flex-1 p-8">
                  <div className="flex items-center gap-3 mb-4 text-red-600 font-mono text-xs font-bold uppercase tracking-widest">
                    <Calendar size={14} /> {event.date || "Date à venir"} • {event.time || "19:00"}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase italic mb-6">{event.title}</h3>
                  <p className="flex items-center gap-2 text-sm opacity-70 uppercase font-bold">
                    <MapPin size={16} className="text-red-600"/> {event.location || "Provins"}
                  </p>
                </div>

                <div className="w-full md:w-80 p-10 bg-black/40 border-l border-white/10 flex flex-col items-center">
                  <div className="text-5xl font-black mb-8 italic">{event.price || 0} €</div>
                  <div className="w-full">
                     <PayPalPart 
                        prix={event.price} 
                        titre={event.title} 
                        eventId={event.id}
                        onSuccess={() => alert("Réservation confirmée !")} 
                     />
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