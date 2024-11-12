import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

const LoginScreen: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useAuth();

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert("Error", "Todos los campos son obligatorios.");
            return;
        }

        try {
            const response = await fetch('http://localhost:5001/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();

            if (response.ok && data.token && data.user) {
                await signIn(data.token, data.user);
                Alert.alert("Inicio de sesión exitoso");
            } else {
                Alert.alert("Error en el inicio de sesión", data.message || "Credenciales no válidas");
            }
        } catch (error) {
            Alert.alert("Error", "Error de conexión. Intenta nuevamente.");
        }
    };

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Username" 
                value={username}
                onChangeText={setUsername}
            />
            <Input 
                placeholder="Password" 
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button text="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
});

export default LoginScreen;