import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Header from './Header';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Do some exercise', key: '1' },
    { text: 'Take a bath', key: '2' },
    { text: 'Take breakfast', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prev) => prev.filter((todo) => todo.key !== key));
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prev) => [
        { text, key: Math.random().toString() },
        ...prev,
      ]);
    } else {
      Alert.alert('OOPS!', 'Task must be longer than 3 characters');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Header />

        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />

          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 30,
  },
  list: {
    marginTop: 20,
  },
});