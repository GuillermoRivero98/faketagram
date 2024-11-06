const API_URL = 'http://localhost:3001/api/posts';

export const getPosts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error al obtener las publicaciones');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener las publicaciones:', error);
    throw error;
  }
};

export const createPost = async (postData: { image: string; caption: string }) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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

export const getPostById = async (postId: string) => {
  try {
    const response = await fetch(`${API_URL}/${postId}`);
    if (!response.ok) {
      throw new Error('Error al obtener los detalles de la publicación');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los detalles de la publicación:', error);
    throw error;
  }
};

export const deletePost = async (postId: string) => {
  try {
    const response = await fetch(`${API_URL}/${postId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar la publicación');
    }
    return true;
  } catch (error) {
    console.error('Error al eliminar la publicación:', error);
    throw error;
  }
};