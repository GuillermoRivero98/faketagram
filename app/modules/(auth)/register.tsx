import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";

const RegisterScreen: React.FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { register } = useAuth(); 

    const handleRegister = () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Las contraseñas no coinciden");
            return;
        }
        register(username, email, password); 
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
