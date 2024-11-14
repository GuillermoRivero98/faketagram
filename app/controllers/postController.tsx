import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = 'http://localhost:3001/api/posts';

const getAuthToken = async () => {
  return await AsyncStorage.getItem("jwt_token");
};

// Obtener el feed de publicaciones
export const getPosts = async () => {
  const token = await getAuthToken();
  try {
    const response = await fetch(`${API_URL}/feed`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Error al obtener el feed');
    return data;
  } catch (error) {
    console.error("Error al obtener el feed:", error);
    throw error;
  }
};

// Subir una nueva publicación con imagen
export const uploadPost = async (imageUri: string, caption: string) => {
  const token = await getAuthToken();
  const formData = new FormData();

  try {
    // Convertir la URI de la imagen en un Blob
    const imageResponse = await fetch(imageUri);
    const imageBlob = await imageResponse.blob();

    formData.append("image", imageBlob, "photo.jpg");
    formData.append("caption", caption);

    const response = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Error al subir la publicación');
    return data;
  } catch (error) {
    console.error("Error al subir la publicación:", error);
    throw error;
  }
};

// Obtener detalles de una publicación específica
export const getPostById = async (postId: string) => {
  const token = await getAuthToken();
  try {
    const response = await fetch(`${API_URL}/${postId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Error al obtener detalles del post');
    return data;
  } catch (error) {
    console.error("Error al obtener detalles del post:", error);
    throw error;
  }
};

// Dar like a una publicación
export const likePost = async (postId: string) => {
  const token = await getAuthToken();
  try {
    const response = await fetch(`${API_URL}/${postId}/like`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Error al dar like');
    return data;
  } catch (error) {
    console.error("Error al dar like:", error);
    throw error;
  }
};

// Quitar el like de una publicación
export const removeLike = async (postId: string) => {
  const token = await getAuthToken();
  try {
    const response = await fetch(`${API_URL}/${postId}/like`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Error al quitar el like');
    return data;
  } catch (error) {
    console.error("Error al quitar el like:", error);
    throw error;
  }
};
