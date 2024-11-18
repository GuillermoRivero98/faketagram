import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  _id: string; // Cambiamos `id` por `_id` para alinearlo con el backend
  username: string;
  email: string;
  profileImage?: string; // Opcional, si el usuario tiene una imagen de perfil
}

interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  signIn: (token: string, userData: User) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const token = await AsyncStorage.getItem("jwt_token");
        const userData = await AsyncStorage.getItem("user");
        if (token && userData) {
          setUser(JSON.parse(userData));
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
      await AsyncStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("jwt_token");
      await AsyncStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: !!user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
