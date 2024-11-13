import React, { useState } from "react";
import { View, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import globalStyles from "../styles/globalStyles";

interface ImageUploaderProps {
    onImageSelected: (uri: string | null) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelected }) => {
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
            const uri = result.assets[0].uri;
            setImageUri(uri);
            onImageSelected(uri); // Llamar a la función pasada como propiedad
        }
    };

    return (
        <View style={globalStyles.container}>
            <Button title="Capture Image" onPress={pickImage} />
            {imageUri && <Image source={{ uri: imageUri }} style={globalStyles.image} />}
        </View>
    );
};

export default ImageUploader;
