import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createPost, uploadImage } from "../../controllers/postController";
import ImageUploader from "../../components/ImageUploader";

interface Post {
  image: string;
  caption: string;
}

const NewPostScreen: React.FC = () => {
  const [caption, setCaption] = useState("");
  const [imageUri, setImageUri] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!imageUri) {
      Alert.alert("Error", "Debes seleccionar una imagen para la publicación.");
      return;
    }

    try {
      // Primero sube la imagen y obtiene su URL
      const uploadResponse = await uploadImage(imageUri);
      const imageUrl = uploadResponse.url; // Asegúrate de que el backend devuelva la URL de la imagen

      // Luego crea la publicación con la URL de la imagen y el caption
      await createPost({ image: imageUrl, caption });
      Alert.alert("Publicación creada", "Tu publicación ha sido creada con éxito");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "No se pudo crear la publicación");
    }
  };

  return (
    <View style={styles.container}>
      <ImageUploader onImageSelected={setImageUri} /> {/* Permite al usuario seleccionar una imagen */}
      <TextInput
        placeholder="Escribe una descripción..."
        value={caption}
        onChangeText={setCaption}
        style={styles.input}
      />
      <Button title="Crear Publicación" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
  },
});

export default NewPostScreen;
