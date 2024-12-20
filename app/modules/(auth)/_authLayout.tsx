import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { ROUTES } from "../../routes/Routes";
import * as Linking from 'expo-linking';

const AuthLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      Linking.openURL(ROUTES.FEED);
    }
  }, [isAuthenticated]);

  return (
    <Stack>
      <Stack.Screen name="LoginScreen" options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
