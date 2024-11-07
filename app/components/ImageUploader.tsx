import React, { useState } from "react";
import { View, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import globalStyles from "../styles/globalStyles";

const ImageUploader: React.FC = () => {
    const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission required", "Camera access is needed to upload images.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!imageUri) return;

    const formData = new FormData();
    formData.append("image", {
      uri: imageUri,
      type: "image/jpeg",
      name: "photo.jpg",
    } as any);

    try {
      const response = await fetch("http://localhost:5001/api/posts/upload", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert("Upload successful", "Your image has been uploaded!");
        setImageUri(null);
      } else {
        Alert.alert("Upload failed", data.message || "An error occurred.");
      }
    } catch (error) {
      Alert.alert("Error", "Could not upload image. Try again later.");
    }
  };

  return (
    <View style={globalStyles.container}>
        <Button title="Capture Image" onPress={pickImage} />
        {imageUri && <Image source={{ uri: imageUri }} style={globalStyles.image} />}
        {imageUri && <Button title="Upload Image" onPress={uploadImage} />}
    </View>
);
};

export default ImageUploader;