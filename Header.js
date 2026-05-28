import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>My Todo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'crimson',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});