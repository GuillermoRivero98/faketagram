import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Alert, Text } from "react-native"; 
import { useAuth } from "../../context/AuthContext";
import { getUserProfile, updateUserProfile } from '../../controllers/userController';

const EditProfileScreen = () => {
  const { user, setUser } = useAuth(); 
  const [name, setName] = useState(user?.username || ''); 
  const [email, setEmail] = useState(user?.email || '');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        try {
          const profile = await getUserProfile(user._id); 
          setName(profile.name);
          setEmail(profile.email);
        } catch (error) {
          Alert.alert("Error", "No se pudo cargar el perfil.");
        }
      }
      setLoading(false);
    };

    fetchUserProfile();
  }, [user]);

  const handleUpdateProfile = async () => {
    if (!user) {
      Alert.alert('Error', 'Usuario no encontrado'); 
      return;
    }

    try {
      const updatedUser = await updateUserProfile(user._id, { name, email });
      setUser(updatedUser);
      Alert.alert('Éxito', 'Perfil actualizado con éxito'); 
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      Alert.alert('Error', 'Error al actualizar el perfil'); 
    }
  };

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
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
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
  },
});

export default EditProfileScreen;
