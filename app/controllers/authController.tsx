import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = 'http://localhost:5001/api/auth';

// Guardar el token JWT en AsyncStorage
export const saveAuthToken = async (token: string) => {
  await AsyncStorage.setItem("jwt_token", token);
};

// Obtener el token JWT desde AsyncStorage
export const getAuthToken = async () => {
  return await AsyncStorage.getItem("jwt_token");
};

// Función para registrar usuario
export const registerUser = async (userData: { username: string; email: string; password: string }) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Error en el registro');
    }
    await saveAuthToken(data.token); // Guardar el token si el registro es exitoso
    return data;
  } catch (error) {
    console.error('Error en el registro:', error);
    throw error;
  }
};

// Función para iniciar sesión
export const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Error en el inicio de sesión');
    }
    await saveAuthToken(data.token); // Guardar el token si el login es exitoso
    return data;
  } catch (error) {
    console.error('Error en el login:', error);
    throw error;
  }
};
