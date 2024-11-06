import { Stack } from 'expo-router';

const AuthLayout: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="Register" options={{ headerShown: false }} />
    </Stack>
  );
};


export default AuthLayout;