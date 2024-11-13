import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = 'http://localhost:3001/api/posts';

const getAuthToken = async () => {
  return await AsyncStorage.getItem("jwt_token");
};

// Obtener comentarios de una publicación
export const getComments = async (postId: string) => {
  const token = await getAuthToken();
  try {
    const response = await fetch(`${API_URL}/${postId}/comments`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error("Error al obtener los comentarios");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al obtener los comentarios:", error);
    throw error;
  }
};

// Agregar un nuevo comentario a una publicación
export const addComment = async (postId: string, content: string) => {
  const token = await getAuthToken();
  try {
    const response = await fetch(`${API_URL}/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      throw new Error("Error al agregar el comentario");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al agregar el comentario:", error);
    throw error;
  }
};

// Actualizar un comentario en una publicación
export const updateComment = async (postId: string, commentId: string, content: string) => {
  const token = await getAuthToken();
  try {
    const response = await fetch(`${API_URL}/${postId}/comments/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      throw new Error("Error al actualizar el comentario");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al actualizar el comentario:", error);
    throw error;
  }
};

// Eliminar un comentario de una publicación
export const deleteComment = async (postId: string, commentId: string) => {
  const token = await getAuthToken();
  try {
    const response = await fetch(`${API_URL}/${postId}/comments/${commentId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error("Error al eliminar el comentario");
    }

    return true;
  } catch (error) {
    console.error("Error al eliminar el comentario:", error);
    throw error;
  }
};
