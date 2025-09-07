import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const activities = [
  { id: '1', name: 'ออกกำลังกายตอนเช้า' },
  { id: '2', name: 'อ่านหนังสือ 30 นาที' },
  { id: '3', name: 'ทำโจทย์ React Native' }
];

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { fontSize: 18, marginBottom: 10 }
});
