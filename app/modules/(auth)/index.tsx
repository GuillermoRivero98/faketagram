import React, { useEffect } from 'react';
import { Stack, useRouter, router } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from "../../routes/Routes";

const AuthLayout: React.FC = () => {
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            router.navigate(ROUTES.FEED);
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
