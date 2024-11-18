import React from 'react';
import { Stack } from 'expo-router';
import { ROUTES } from './routes/Routes';

const RootLayout: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen
        name={'index'}
        //options={{ title: "Registrarse", headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        options={{ title: "Iniciar Sesión", headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.REGISTER}
        options={{ title: "Registrarse", headerShown: false }}
      />

      <Stack.Screen name={ROUTES.FEED} options={{ headerShown: false }} />
      <Stack.Screen name={`${ROUTES.FEED}/new`} options={{ presentation: 'modal', title: "Nueva Publicación", headerShown: true }} />
      <Stack.Screen name={ROUTES.PROFILE} options={{ title: "Perfil", headerShown: true }} />
      <Stack.Screen name={ROUTES.POST_DETAIL} options={{ title: "Detalles de la Publicación", headerShown: true }} />
    </Stack>
  );
};

export default RootLayout;
