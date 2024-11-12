import { useState, useEffect, createContext, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
    id: string;
    username: string;
    email?: string;
}

interface AuthContextProps {
    user: User | null;
    isAuthenticated: boolean;
    signIn: (token: string, userData: User) => Promise<void>;
    register: (username: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const loadAuthData = async () => {
            try {
                const token = await AsyncStorage.getItem("token");
                const userData = await AsyncStorage.getItem("user");
                if (token && userData) {
                    setUser(JSON.parse(userData));
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error("Error loading auth data:", error);
            }
        };
        loadAuthData();
    }, []);

    const signIn = async (token: string, userData: User) => {
        try {
            await AsyncStorage.setItem("token", token);
            await AsyncStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Error saving auth data:", error);
        }
    };

    const register = async (username: string, email: string, password: string) => {
        try {
            // Implementación de la lógica de registro. Aquí hacemos una solicitud al backend.
            const response = await fetch("http://localhost:5001/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await response.json();

            if (response.ok && data.token && data.user) {
                // Almacenamos el token y los datos del usuario después del registro exitoso
                await signIn(data.token, data.user);
            } else {
                throw new Error(data.message || "Error en el registro");
            }
        } catch (error) {
            console.error("Error al registrar:", error);
            throw error; // Puedes lanzar el error para manejarlo en el componente de UI
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("user");
            setUser(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.error("Error removing auth data:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
