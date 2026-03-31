const API_URL = 'http://localhost:8080/api/auth/';

export const authService = {
  // CONNEXION
  login: async (pseudo, motDePasse) => {
    const credentials = btoa(`${pseudo}:${motDePasse}`);

    const response = await fetch(API_URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`
      },
      body: JSON.stringify({ pseudo, motDePasse }),
    });

    if (!response.ok) throw new Error('Identifiants incorrects.');

    const data = await response.json();
    // On stocke les infos pour les réutiliser dans les autres appels API
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('authData', credentials);
    
    return data;
  },

  // INSCRIPTION (Par défaut rôle ADHERENT)
  register: async (userData) => {
    const response = await fetch(API_URL + 'register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        ...userData, 
        role: 'ADHERENT' // Un visiteur qui s'inscrit est toujours adhérent
      }),
    });

    if (!response.ok) {
      const errorMsg = await response.text();
      throw new Error(errorMsg || "Erreur lors de l'inscription");
    }
    return response.json();
  },

  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authData');
    window.location.href = '/auth';
  },

  getCurrentUser: () => JSON.parse(localStorage.getItem('user'))
};