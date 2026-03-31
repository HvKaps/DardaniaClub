import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Heart, Plus, Trash2, Loader2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { adminService } from '../data/adminService';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('members');
  const [members, setMembers] = useState([]);
  const [events, setEvents] = useState([]);
  const [donations, setDonations] = useState([]); // CORRECTION : On ajoute la variable manquante
  const [newEvent, setNewEvent] = useState({ title: '', price: '', date: '', location: '', time: '19:00' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeTab === 'members') {
      adminService.getMembers().then(setMembers).catch(console.error);
    } else if (activeTab === 'events') {
      adminService.getEvents().then(setEvents).catch(console.error);
    } else if (activeTab === 'donations') {
      adminService.getDonations().then(setDonations).catch(console.error);
    }
  }, [activeTab]);

  const handleAddEvent = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await adminService.addEvent(newEvent);
      const updatedEvents = await adminService.getEvents();
      setEvents(updatedEvents);
      setNewEvent({ title: '', price: '', date: '', location: '', time: '19:00' });
    } catch (err) { alert("Erreur ajout"); }
    setLoading(false);
  };

  const glassCard = "bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-sm";
  const inputStyle = "w-full bg-white/5 border border-white/10 py-3 px-4 text-white focus:border-red-600 outline-none transition uppercase text-[10px] font-bold tracking-widest mb-4";

  return (
    <div className="min-h-screen pt-32 px-6 pb-20 bg-[#050505] text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto">
        <SectionHeader title="Staff Console" subtitle="Gestion Club" />

        <div className="flex flex-wrap gap-2 my-8 border-b border-white/10 pb-6">
          {['members', 'events', 'donations'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-8 py-4 font-black uppercase italic text-sm transition ${activeTab === tab ? 'bg-red-600' : 'bg-white/5 hover:bg-white/10'}`}>{tab}</button>
          ))}
        </div>

        <div className={glassCard}>
          {activeTab === 'members' && (
            <div>
              <h2 className="text-3xl font-black uppercase italic mb-8">Adhérents</h2>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 uppercase text-[10px] tracking-widest opacity-50 font-bold">
                    <th className="pb-4">Nom</th><th className="pb-4">Email</th><th className="pb-4">Pseudo</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map(m => (
                    <tr key={m.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-4 font-bold uppercase italic text-red-600">{m.prenom} {m.nom}</td>
                      <td className="py-4 opacity-70">{m.email}</td>
                      <td className="py-4 font-mono text-xs">{m.pseudo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="grid lg:grid-cols-2 gap-16">
              <form onSubmit={handleAddEvent}>
                <h3 className="text-2xl font-black uppercase italic mb-8 border-l-4 border-red-600 pl-4">Ajouter Event</h3>
                <input type="text" placeholder="Titre" value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} className={inputStyle} required />
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Date (Ex: 20 MAI)" value={newEvent.date} onChange={e => setNewEvent({...newEvent, date: e.target.value})} className={inputStyle} required />
                    <input type="number" placeholder="Prix (€)" value={newEvent.price} onChange={e => setNewEvent({...newEvent, price: e.target.value})} className={inputStyle} required />
                </div>
                <input type="text" placeholder="Lieu" value={newEvent.location} onChange={e => setNewEvent({...newEvent, location: e.target.value})} className={inputStyle} required />
                <button className="w-full py-4 bg-red-600 font-black uppercase flex justify-center">
                    {loading ? <Loader2 className="animate-spin"/> : "PUBLIER L'ÉVÉNEMENT"}
                </button>
              </form>

              <div>
                <h3 className="text-2xl font-black uppercase italic mb-8">Événements en ligne</h3>
                <div className="space-y-2">
                  {events.map(ev => (
                    <div key={ev.id} className="p-4 border border-white/10 flex justify-between items-center group">
                      <span className="font-bold">{ev.title} — {ev.price}€</span>
                      <button onClick={() => adminService.deleteEvent(ev.id).then(() => setActiveTab('events'))} className="text-red-600 opacity-0 group-hover:opacity-100 transition"><Trash2 size={18}/></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'donations' && (
            <div>
              <h2 className="text-3xl font-black uppercase italic mb-8">Donations reçues</h2>
              {donations.length === 0 ? <p className="opacity-50">Aucun don pour le moment.</p> : 
                donations.map(d => (
                  <div key={d.id} className="p-4 border-b border-white/5 flex justify-between uppercase font-bold italic">
                    <span>{d.donateurNom}</span>
                    <span className="text-red-600">{d.montant} €</span>
                  </div>
                ))
              }
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;