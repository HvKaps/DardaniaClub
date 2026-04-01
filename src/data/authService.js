const API_URL = 'https://dardania-back.onrender.com/api/auth';

export const authService = {
  // CONNEXION (Login)
  login: async (pseudo, motDePasse) => {
    // Encodage en Base64 pour le Basic Auth
    const credentials = btoa(`${pseudo}:${motDePasse}`);

    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`
      },
      body: JSON.stringify({ pseudo, motDePasse }),
    });

    if (!response.ok) {
      throw new Error('Identifiants incorrects ou accès refusé.');
    }

    const data = await response.json();
    
    // On stocke l'utilisateur et les credentials pour les appels suivants
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('authData', credentials);
    
    return data;
  },

  // INSCRIPTION (Register)
  register: async (userData) => {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        ...userData, 
        role: 'ADHERENT' 
      }),
    });

    if (!response.ok) {
      const errorMsg = await response.text();
      throw new Error(errorMsg || "Erreur lors de l'inscription");
    }
    return response.json();
  },

  // DECONNEXION
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authData');
    window.location.href = '/auth';
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};