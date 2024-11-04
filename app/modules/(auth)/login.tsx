import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth"

const LoginScreen: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth(); 

    const handleLogin = () => {
        login(username, password); 
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