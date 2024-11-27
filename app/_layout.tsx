import React, { useContext, useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { ROUTES } from "./routes/Routes";
import { AuthContext, AuthProvider } from "./context/AuthContext";

const Layout = () => {

  const authContext = useContext(AuthContext);
  const router = useRouter();

  // Si no se encuentra el contexto, renderizamos un mensaje o la UI de carga
  if (!authContext) {
    console.error("AuthContext no está disponible.");
  }

  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      router.replace(`./${ROUTES.FEED}`);
    } else {
      router.replace(`./${ROUTES.REGISTER}`);
    }
  }, [isAuthenticated, router]);

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name={ROUTES.LOGIN}
          options={{ title: "Iniciar Sesión", headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.REGISTER}
          options={{ title: "Registrarse", headerShown: false }}
        />
        <Stack.Screen name={ROUTES.FEED} options={{ headerShown: false }} />
        <Stack.Screen
          name={`${ROUTES.FEED}/newPostScreen`}
          options={{
            presentation: "modal",
            title: "Nueva Publicación",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name={ROUTES.PROFILE}
          options={{ title: "Perfil", headerShown: true }}
        />
        <Stack.Screen
          name={ROUTES.POST_DETAIL}
          options={{ title: "Detalles de la Publicación", headerShown: true }}
        />
      </Stack>
    </AuthProvider>
  );
};

export default Layout;


