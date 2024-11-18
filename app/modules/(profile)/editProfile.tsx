import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Alert, Text } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { getUserProfile, updateUserProfile } from "../../controllers/userController";

const EditProfileScreen = () => {
  const { user, setUser } = useAuth(); 
  const [username, setUsername] = useState(""); 
  const [profilePicture, setProfilePicture] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user?._id) return;

      try {
        const profile = await getUserProfile(user._id); 
        setUsername(profile.username);
        setProfilePicture(profile.profilePicture || ""); 
        setDescription(profile.description || ""); 
      } catch (error) {
        Alert.alert("Error", "No se pudo cargar el perfil.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user]);

  const handleUpdateProfile = async () => {
    if (!user?._id) {
      Alert.alert("Error", "Usuario no encontrado");
      return;
    }

    try {
      const updatedUser = await updateUserProfile({
        username,
        profilePicture,
        description,
      });
      setUser(updatedUser); 
      Alert.alert("Éxito", "Perfil actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      Alert.alert("Error", "Error al actualizar el perfil");
    }
  };

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre de usuario:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Imagen de perfil (URL):</Text>
      <TextInput
        style={styles.input}
        value={profilePicture}
        onChangeText={setProfilePicture}
        placeholder="URL de la imagen de perfil"
      />

      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Escribe una breve descripción..."
      />

      <Button title="Actualizar Perfil" onPress={handleUpdateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
  },
});

export default EditProfileScreen;
