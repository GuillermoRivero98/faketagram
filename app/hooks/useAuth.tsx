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

    // Load the token and user data from AsyncStorage on initialization
    useEffect(() => {
        const loadAuthData = async () => {
            try {
                const token = await AsyncStorage.getItem("jwt_token");
                const userData = await AsyncStorage.getItem("user_data");
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
            await AsyncStorage.setItem("jwt_token", token);
            await AsyncStorage.setItem("user_data", JSON.stringify(userData));
            setUser(userData);
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Error saving auth data:", error);
        }
    };

    const register = async (username: string, email: string, password: string) => {
        try {
            const response = await fetch("http://localhost:5001/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await response.json();

            if (response.ok && data.token && data.user) {
                await signIn(data.token, data.user); // Sign in after successful registration
            } else {
                throw new Error(data.message || "Error en el registro");
            }
        } catch (error) {
            console.error("Error al registrar:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("jwt_token");
            await AsyncStorage.removeItem("user_data");
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

// Hook para usar el contexto de autenticación
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
