const API_URL = 'http://localhost:3001/api/users'; 

export const getUserProfile = async (userId: string) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`);
    
    if (!response.ok) {
      throw new Error('Error al obtener el perfil del usuario');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error al obtener el perfil del usuario:', error);
    throw error;
  }
};

export const updateUserProfile = async (userId: string, userData: { name: string; email: string }) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el perfil');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al actualizar el perfil:', error);
    throw error;
  }
};

export const login = async (credentials: { email: string; password: string }) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Error al iniciar sesión');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

export const register = async (userData: { name: string; email: string; password: string }) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Error al registrar el usuario');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    throw error;
  }
};
