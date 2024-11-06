import React from 'react';
import { Button, Alert } from 'react-native';
import { deletePost } from '../../controllers/postController';

interface DeletePostButtonProps {
  postId: string;
}

const DeletePostButton: React.FC<DeletePostButtonProps> = ({ postId }) => {
  const handleDelete = async () => {
    try {
      await deletePost(postId);
      Alert.alert('Publicación eliminada');
      // Aquí puedes redirigir al feed o actualizar el estado
    } catch (error) {
      Alert.alert('Error', 'No se pudo eliminar la publicación');
    }
  };

  return <Button title="Eliminar" onPress={handleDelete} />;
};

export default DeletePostButton;