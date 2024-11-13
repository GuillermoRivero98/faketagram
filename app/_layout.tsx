import React from 'react';
import { Stack } from 'expo-router';

const RootLayout: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="(auth)/login" // Ruta de Inicio de Sesión
        options={{ title: "Iniciar Sesión", headerShown: false }} 
      />
      <Stack.Screen 
        name="(auth)/register" // Ruta de Registro
        options={{ title: "Registrarse", headerShown: false }} 
      />
      <Stack.Screen 
        name="(feed)" // Ruta principal del Feed
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="(feed)/new" // Ruta para crear una nueva publicación
        options={{ presentation: 'modal', title: "Nueva Publicación", headerShown: true }} 
      />
      <Stack.Screen 
        name="(profile)" // Ruta del Perfil de Usuario
        options={{ title: "Perfil", headerShown: true }} 
      />
      <Stack.Screen 
        name="(feed)/:postId" // Ruta de Detalles de una Publicación
        options={{ title: "Detalles de la Publicación", headerShown: true }} 
      />
    </Stack>
  );
};

export default RootLayout;
