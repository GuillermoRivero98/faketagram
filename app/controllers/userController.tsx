import { getAuthToken } from './authController';

const USER_API_URL = 'http://localhost:3001/api/user';

// Obtener perfil de usuario
export const getUserProfile = async (userId: string) => {
  const token = await getAuthToken();
  try {
    const response = await fetch(`${USER_API_URL}/profile/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Error al obtener perfil');
    return data;
  } catch (error) {
    console.error("Error al obtener perfil:", error);
    throw error;
  }
};

// Actualizar perfil de usuario
export const updateUserProfile = async (userData: { username: string; profilePicture: string; description: string }) => {
  const token = await getAuthToken();
  try {
    const response = await fetch(`${USER_API_URL}/profile/edit`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Error al actualizar perfil');
    return data;
  } catch (error) {
    console.error("Error al actualizar perfil:", error);
    throw error;
  }
};
