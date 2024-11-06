import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
    username: string;
    email?: string;
}

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);

    const signIn = async (token: string, userData: User) => {
        // Almacena el token en AsyncStorage y actualiza el estado de usuario
        await AsyncStorage.setItem("token", token);
        setUser(userData);
    };

    const register = async (username: string, email: string, password: string) => {
        // Implementación del registro (puedes ajustarlo según el backend)
        setUser({ username, email });
    };

    const logout = async () => {
        // Limpia el token de AsyncStorage y restablece el estado de usuario
        await AsyncStorage.removeItem("token");
        setUser(null);
    };

    return { user, signIn, logout, register };
};

export default useAuth;