import React, { useState, useEffect } from "react";
import { View, Alert, ActivityIndicator, StyleSheet, Button } from "react-native";
import ProfileTemplate from "../../components/templates/ProfileTemplate";
import { getUserProfile } from "../../controllers/userController";
import { useAuth } from "../../context/AuthContext";

interface Post {
  _id: string;
  image: string;
  likes: number;
  comments: number;
}

interface UserData {
  username: string;
  profileImage: string;
  posts: Post[];
}

const ProfileScreen: React.FC = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!user?._id) return;

      try {
        const profileData = await getUserProfile(user._id);
        setUserData(profileData);
      } catch (error) {
        Alert.alert("Error", "No se pudo cargar el perfil.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfileData();
  }, [user]);

  const handleEditProfile = () => {
    // Aquí iría la lógica o navegación para editar perfil
    Alert.alert("Funcionalidad en desarrollo", "Aquí podrás editar tu perfil.");
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      {userData ? (
        <ProfileTemplate
          username={userData.username}
          profileImage={userData.profileImage}
          posts={userData.posts}
          onEditProfile={handleEditProfile}
        />
      ) : (
        <View style={styles.messageContainer}>
          <Button title="Volver a Intentar" onPress={() => setLoading(true)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  messageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
