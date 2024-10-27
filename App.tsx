import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export default function App() {
  const [todo, setTodo] = useState<ToDo>({
    id: 1,
    title: "",
    completed: false,
  });

  const [listTodo, setListTodo] = useState<ToDo[]>([]);
  const addNew = (): void => {};

  const handleChangeInput = (value: string): void => {
    setTodo({
      ...todo,
      ["title"]: value,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textBlack}>Header</Text>
      </View>
      <View style={styles.body}>
        {/* Title */}
        <View>
          <Text style={styles.title}>TODO-APP</Text>
        </View>
        {/* Form */}
        <View>
          <TextInput
            style={styles.input}
            value={todo.title}
            placeholder="Type todo"
            onChangeText={(value) => handleChangeInput(value)}
          />
          <Button title="+ ADD NEW" />
        </View>
        {/* List to do */}
        <FlatList
          data={listTodo}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => {
            return <Text style={styles.viewDefault}> {item.title}</Text>;
          }}
        />
        <View style={styles.listContainer}></View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textBlack}>Footer</Text>
      </View>
    </View>
  );
}

// css in js => stylesheet
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  textWhite: {
    color: "#fff",
  },
  textBlack: {
    color: "#000",
  },
  header: {
    backgroundColor: "#CFE2FF",
    padding: 10,
    fontSize: 14,
    marginTop: 40,
    color: "black",
  },
  body: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 100,
    paddingRight: 10,
    paddingLeft: 10,
    height: 400,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  listContainer: {
    height: 350,
    marginTop: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  bodyText: {
    textAlign: "center",
    marginBottom: 25,
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#CFE2FF",
    padding: 10,
    fontSize: 14,
    color: "#000",
  },
  input: {
    borderWidth: 2,
    borderColor: "blue",
    padding: 10,
    height: 45,
    marginBottom: 20,
  },
  viewDefault: {
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#F8D7DA",
  },
});
