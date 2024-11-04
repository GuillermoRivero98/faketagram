import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextProps {
  user: User | null; 
  isAuthenticated: boolean;
  signIn(token: string, userData: User): void; 
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = (token: string, userData: User) => {
    setIsAuthenticated(true);
    setUser(userData); 
  };

  const signOut = () => {
    setIsAuthenticated(false);
    setUser(null); 
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};