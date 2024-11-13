import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = 'http://localhost:3001/api/posts';

const getAuthToken = async () => {
  return await AsyncStorage.getItem("jwt_token");
};

export const getPosts = async () => {
  const token = await getAuthToken();
  try {
    const response = await fetch(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error("Error al obtener las publicaciones");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener las publicaciones:", error);
    throw error;
  }
};

export const getPostById = async (postId: string) => {
  const token = await getAuthToken();
  try {
    const response = await fetch(`${API_URL}/${postId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error("Error al obtener los detalles de la publicación");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los detalles de la publicación:", error);
    throw error;
  }
};

export const createPost = async (postData: { image: string; caption: string }) => {
  const token = await getAuthToken();
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error('Error al crear la publicación');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear la publicación:', error);
    throw error;
  }
};

export const uploadImage = async (imageUri: string) => {
  const token = await getAuthToken();
  const formData = new FormData();

  formData.append("image", {
    uri: imageUri,
    type: "image/jpeg",
    name: "photo.jpg",
  } as unknown as Blob);

  try {
    const response = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error al subir la imagen');
    }

    return await response.json();
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
};
