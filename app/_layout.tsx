import React from 'react';
import { Stack } from 'expo-router';
import FeedScreen from "./modules/(feed)"
import NewPostScreen from './modules/(feed)/new';

const RootLayout: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen name="FeedScreen" component={FeedScreen} options={{ headerShown: false }} />
      <Stack.Screen 
        name="NewPostScreen" 
        component={NewPostScreen} 
        options={{ presentation: 'modal', headerShown: false }} 
      />
    </Stack>
  );
};

export default RootLayout;
