export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop",
  gloves: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=1000&auto=format&fit=crop",
  ring: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000&auto=format&fit=crop",
  trainer: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=1000&auto=format&fit=crop",
  kid: "https://images.unsplash.com/photo-1591117207239-78898dd1e8bf?q=80&w=1000&auto=format&fit=crop",
  videoBg: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1920&auto=format&fit=crop",
  event1: "https://images.unsplash.com/photo-1564415315967-7dd76769c0d9?q=80&w=1000&auto=format&fit=crop",
  event2: "https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?q=80&w=1000&auto=format&fit=crop"
};

export const CLASSES_DATA = [
  { 
    id: 1, 
    title: "BABY BOXE", 
    subtitle: "5-7 ANS", 
    img: IMAGES.kid, 
    details: "Mardi 18h05-18h55", 
    price: "90€",
    schedule: ["Mardi: 18h05 - 18h55"]
  },
  { 
    id: 2, 
    title: "ENFANTS", 
    subtitle: "8-10 ANS", 
    img: IMAGES.kid, 
    details: "Mercredi & Jeudi 18h05-18h55", 
    price: "150€",
    schedule: ["Mercredi: 18h05 - 18h55", "Jeudi: 18h05 - 18h55"]
  },
  { 
    id: 3, 
    title: "ADOS", 
    subtitle: "11-14 ANS", 
    img: IMAGES.trainer, 
    details: "Lun/Ven 18h05, Mer 19h00", 
    price: "180€",
    schedule: ["Lundi: 18h05 - 18h55", "Mercredi: 19h00 - 20h10", "Vendredi: 18h05 - 18h55"]
  },
  { 
    id: 4, 
    title: "AMATEURS", 
    subtitle: "COMPÉTITION", 
    img: IMAGES.hero, 
    details: "4 Séances / Semaine", 
    price: "240€",
    schedule: ["Lundi: 20h15 - 21h45", "Mercredi: 20h15 - 21h45", "Jeudi: 20h15 - 21h45", "Vendredi: 20h15 - 21h45"]
  },
  { 
    id: 5, 
    title: "LOISIRS", 
    subtitle: "TOUT NIVEAU", 
    img: IMAGES.gloves, 
    details: "3 Séances / Semaine", 
    price: "210€",
    schedule: ["Lundi: 19h00 - 20h10", "Jeudi: 19h00 - 20h10", "Vendredi: 19h00 - 20h10"]
  },
  { 
    id: 6, 
    title: "FEMMES", 
    subtitle: "BOXE FÉMININE", 
    img: IMAGES.event1, 
    details: "Mardi 20h15 - 21h45", 
    price: "90€",
    schedule: ["Mardi: 20h15 - 21h45"]
  },
  { 
    id: 7, 
    title: "SPORT SANTÉ", 
    subtitle: "BIEN-ÊTRE", 
    img: IMAGES.event2, 
    details: "Mardi 19h00 - 20h10", 
    price: "90€",
    schedule: ["Mardi: 19h00 - 20h10"]
  }
];

export const EVENTS_DATA = [
  { id: 1, day: "15", month: "MAI", title: "GALA DE PRINTEMPS", type: "Compétition", img: IMAGES.event1 },
  { id: 2, day: "22", month: "JUIN", title: "MASTERCLASS TYSON", type: "Stage", img: IMAGES.event2 },
  { id: 3, day: "01", month: "SEPT", title: "PORTES OUVERTES", type: "Découverte", img: IMAGES.ring },
];

export const FAQ_DATA = [
  { q: "À quel âge peut-on commencer ?", a: "Dès 5 ans pour la Baby Boxe. Nos coachs sont formés pour la pédagogie infantile." },
  { q: "Faut-il acheter son équipement ?", a: "Pour le premier cours d'essai, nous prêtons les gants. Ensuite, il faudra vos propres bandes et gants." },
  { q: "Où se trouve le club ?", a: "Au Gymnase COSEC, 4 Place du Pré Botin, 77160 Provins." },
];

export const CONTACT_INFO = {
  name: "Dardania Sporting Club",
  address: "4 Pl. du Pré Botin, 77160 Provins",
  phone: "06 69 44 94 38",
  email: "dardaniaboxe@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100064104429094&locale=fr_FR",
  location: "Gymnase COSEC"
};
