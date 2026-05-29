import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const handleAdd = () => {
    if (text.trim().length > 0) {
      submitHandler(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#999"
        onChangeText={changeHandler}
        value={text}
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
  },

  button: {
    marginTop: 10,
    backgroundColor: 'crimson',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});