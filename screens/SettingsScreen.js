import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>เปิดการตั้งค่า:</Text>
      <Switch value={enabled} onValueChange={setEnabled} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 10 }
});
