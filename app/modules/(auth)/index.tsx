import React, { useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
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
            <Stack.Screen name="Login" options={{ headerShown: false }} />
            <Stack.Screen name="Register" options={{ headerShown: false }} />
        </Stack>
    );
};

export default AuthLayout;
