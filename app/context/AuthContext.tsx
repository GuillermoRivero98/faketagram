import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  _id: string;
  username: string;
  email?: string;
}

interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  signIn: (token: string, userData: User) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null, // Initial user state
  setUser: () => {}, // Placeholder function, you can provide a no-op function for now
  isAuthenticated: false, // Initial authentication state
  signIn: async () => {}, // Placeholder function
  logout: async () => {} // Placeholder function
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const token = await AsyncStorage.getItem("jwt_token");
        const userData = await AsyncStorage.getItem("user_data");
        if (token && userData) {
          setUserState(JSON.parse(userData));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error loading auth data:", error);
      }
    };
    loadAuthData();
  }, []);

  const signIn = async (token: string, userData: User) => {
    await AsyncStorage.setItem("jwt_token", token);
    await AsyncStorage.setItem("user_data", JSON.stringify(userData));
    setUserState(userData);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("jwt_token");
    await AsyncStorage.removeItem("user_data");
    setUserState(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, setUser: setUserState, isAuthenticated, signIn, logout }}>
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
