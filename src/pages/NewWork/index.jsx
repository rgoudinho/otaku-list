import { View, Text, StyleSheet, Button} from "react-native";
import React from "react";

export default function NewWork() {
  return (
    <View style={styles.container}>
      <Text>Essa pagina ainda está em fase de desenvolvimento</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});