import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createPost } from "../../controllers/postController";

interface Post {
    image: string;
    caption: string;
}

const NewPostScreen: React.FC = () => {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState("");
    const navigation = useNavigation();

    const handleSubmit = async () => {
        try {
            await createPost({ image, caption });
            Alert.alert("Publicación creada", "Tu publicación ha sido creada con éxito");
            navigation.goBack();
        } catch (error) {
            Alert.alert("Error", "No se pudo crear la publicación");
        }
    };

    return (
        <View style={styles.container}>
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
