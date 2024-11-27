import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useAuth } from "../context/AuthContext";  // Importa el hook useAuth
import { useNavigation, CommonActions } from "@react-navigation/native";
import { ROUTES } from "../routes/Routes";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();  // Usamos useAuth aquí
  const navigation = useNavigation();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigation.dispatch(
        CommonActions.navigate({
          name: ROUTES.LOGIN, 
        })
      );
    }
  }, [isAuthenticated, navigation]);

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Redirigiendo...</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
