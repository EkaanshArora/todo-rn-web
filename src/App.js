import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [todo, setTodo] = useState(['Example todo looks like me.']);
  const [textValue, onChangeText] = useState('Type a todo...');

  return (
    <View style={styles.container}>
      <Text style={styles.head}>To-Do App</Text>
      <FlatList data={todo} renderItem={({ item, index }) => (
        <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
          <Text style={{ flex: 1 }}>{`\u2022 ${item}`}</Text>
          <TouchableOpacity style={styles.button} onPress={() => {
            let temp = [...todo];
            temp.splice(index, 1);
            setTodo(temp)
          }}>
            <Text>x</Text>
          </TouchableOpacity>
        </View>
      )}></FlatList>
      <View style={{ flex: .15, flexDirection: "row", marginVertical: 20,}}>
        <TextInput style={styles.border} onChangeText={text => onChangeText(text)} value={textValue} />
        <TouchableOpacity style={styles.b2} onPress={() => {
          setTodo([...todo, textValue]);
          onChangeText('');
          }}>
          <Text style={{ color: '#fff', lineHeight:30 }}>Add me!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: '20%',
    paddingTop: '5%'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    width: 30,
    textAlignVertical: "center",
    height: 25,
  },
  border: {
    borderColor: "#007aff",
    borderWidth: 2,
    borderRadius: 4,
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    flex: 1
  },
  head: {
    fontSize: 40,
    color: "#007aff",
    textAlign: "center",
    marginBottom: "5%",
  },
  b2: {
    alignItems: "center",
    backgroundColor: "#007aff",
    width: 100,
    textAlignVertical: "center",
    //height: 30,
    borderRadius: 4,
    color: '#fff'
  }
});
export default App;