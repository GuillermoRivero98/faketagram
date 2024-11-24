import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function FeedLayout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: '#fff',
          headerTitleStyle: styles.headerTitle,
        }}
      >
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#6200ee',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
