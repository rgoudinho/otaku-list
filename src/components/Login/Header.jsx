import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>
        Aqui ficará a logo do nosso app que ainda está em estágio de
        desenvolvimento
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 24,
    textAlign: "center",
  },
});
