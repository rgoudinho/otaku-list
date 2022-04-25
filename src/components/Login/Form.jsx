import { View, Button, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function Form({ navigation }) {
  const [tvEmail, octEmail] = React.useState("");
  const [tvPassword, octPassword] = React.useState("");

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleList = () => {
    if (tvEmail === "teste@email" && tvPassword === "123")
      navigation.navigate("RoutesTab");
  };

  return (
    <View>
      <View>
        <Text></Text>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          onChangeText={octEmail}
          value={tvEmail}
          placeholder="E-mail: teste@email"
        />
      </View>
      <View>
        <TextInput
          secureTextEntry
          style={styles.input}
          onChangeText={octPassword}
          value={tvPassword}
          placeholder="Senha: 123"
        />
      </View>
      <View style={styles.button}>
        <Button title="Entrar" onPress={handleList} />
        <Text style={styles.text}>ou</Text>
        <Button title="Registre-se" onPress={handleRegister} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 24,
  },
  input: {
    borderWidth: 1,
    margin: 12,
    height: 40,
    padding: 10,
    color: "black",
  },
  button: {
    marginTop: 30,
    marginHorizontal: 100,
    padding: 10,
  },
  text: {
    textAlign: "center",
    padding: 10,
  },
});
