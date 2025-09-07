import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ user, setUser }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User: {user?.email}</Text>
      <Button title="Logout" onPress={() => setUser(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 20 }
});
