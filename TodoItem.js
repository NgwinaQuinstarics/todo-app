import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        
        <MaterialIcons name="delete" size={24} color="#333" />

        <Text style={styles.itemText}>{item.text}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: 16,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },

  itemText: {
    marginLeft: 10,
    fontSize: 16,
  },
});