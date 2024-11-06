import React from 'react';
import { Stack } from 'expo-router';

const RootLayout: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="(feed)" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="(feed)/new" 
        options={{ presentation: 'modal', headerShown: false }} 
      />
    </Stack>
  );
};

export default RootLayout;
