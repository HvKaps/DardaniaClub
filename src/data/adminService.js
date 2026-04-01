const API_URL = 'https://dardania-back.onrender.com';

const getHeaders = () => {
  const authData = localStorage.getItem('authData');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${authData}`
  };
};

export const adminService = {
  getMembers: () => fetch(`${API_URL}/members`, { headers: getHeaders() }).then(res => res.json()),
  
  getEvents: () => fetch(`${API_URL}/events`, { headers: getHeaders() }).then(res => res.json()),

  addEvent: (eventData) => fetch(`${API_URL}/events`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(eventData)
  }).then(res => res.json()),

  deleteEvent: (id) => fetch(`${API_URL}/events/${id}`, { 
    method: 'DELETE', 
    headers: getHeaders() 
  }),

  getDonations: () => fetch(`${API_URL}/donations`, { headers: getHeaders() }).then(res => res.json())
};