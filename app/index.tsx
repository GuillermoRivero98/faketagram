import React from 'react';
import { AuthProvider } from './context/AuthContext'; // Ajusta la ruta si es diferente
import { NavigationContainer } from '@react-navigation/native'; // Necesario para expo-router
import RootLayout from './_layout';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootLayout />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
