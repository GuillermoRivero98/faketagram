import { useEffect, useContext } from "react";
import { useRouter } from "expo-router";
import { AuthContext } from "./context/AuthContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  // Si no se encuentra el contexto, renderizamos un mensaje o la UI de carga
  if (!authContext) {
    console.error("AuthContext no está disponible.");
    return <Text>Cargando...</Text>;
  }

  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/feed/FeedScreen");
    } else {
      router.replace("/auth/LoginScreen");
    }
  }, [isAuthenticated, router]);

  return null; // No renderizamos nada porque estamos redirigiendo
};

export default Home;
