import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddBreakfast from './app/breakfasts/screens/AddBreakfast'

export default function App() {
  return (
    <View style={styles.container}>
      <AddBreakfast/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 5,
    alignItems: 'flex-start'
  },
});
