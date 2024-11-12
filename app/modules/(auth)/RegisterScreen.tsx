import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

const RegisterScreen: React.FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { signIn } = useAuth();

    const handleRegister = async () => {
        if (!username || !email || !password || !confirmPassword) {
            Alert.alert("Error", "Todos los campos son obligatorios.");
            return;
        }
        if (!email.includes("@")) {
            Alert.alert("Error", "Introduce un email válido.");
            return;
        }
        if (password.length < 8) {
            Alert.alert("Error", "La contraseña debe tener al menos 8 caracteres.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Las contraseñas no coinciden.");
            return;
        }

        try {
            const response = await fetch('http://localhost:5001/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await response.json();

            if (response.ok && data.token && data.user) {
                await signIn(data.token, data.user);
                Alert.alert("Registro exitoso");
            } else {
                Alert.alert("Error en el registro", data.message || "Ocurrió un error");
            }
        } catch (error) {
            Alert.alert("Error", "No se pudo completar el registro. Intenta nuevamente.");
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
                placeholder="Email" 
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Input 
                placeholder="Password" 
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Input 
                placeholder="Confirm Password" 
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <Button text="Register" onPress={handleRegister} />
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

export default RegisterScreen;