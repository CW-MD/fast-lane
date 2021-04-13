import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Text></Text>
      <View style={styles.container}>
        <Text style={{ fontSize: 25 }}>Fasting Calculator</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
