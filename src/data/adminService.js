const API_URL = 'https://dardania-back.onrender.com/api/admin';

const getHeaders = () => {
  const authData = localStorage.getItem('authData');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${authData}`
  };
};

export const adminService = {
  // Récupérer les adhérents (GET /api/admin/members)
  getMembers: () => 
    fetch(`${API_URL}/members`, { headers: getHeaders() })
      .then(res => res.json()),
  
  // Récupérer les événements (GET /api/admin/events)
  getEvents: () => 
    fetch(`${API_URL}/events`, { headers: getHeaders() })
      .then(res => res.json()),

  // Ajouter un événement (POST /api/admin/events)
  addEvent: (eventData) => 
    fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(eventData)
    }).then(res => res.json()),

  // Supprimer un événement (DELETE /api/admin/events/{id})
  deleteEvent: (id) => 
    fetch(`${API_URL}/events/${id}`, { 
      method: 'DELETE', 
      headers: getHeaders() 
    }),

  // Récupérer les dons (GET /api/admin/donations)
  getDonations: () => 
    fetch(`${API_URL}/donations`, { headers: getHeaders() })
      .then(res => res.json())
};