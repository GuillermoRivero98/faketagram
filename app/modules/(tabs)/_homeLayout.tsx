// modules/home/_HomeLayout.tsx
import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';

const HomeLayout = () => {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default HomeLayout;
