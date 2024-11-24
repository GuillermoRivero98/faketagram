// modules/profile/_EditLayout.tsx
import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';

const EditLayout = () => {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9', // Color de fondo claro
    padding: 16, // Espaciado interno
  },
});

export default EditLayout;
