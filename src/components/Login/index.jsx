import { View, StyleSheet } from "react-native";
import React from "react";

import Header from "./Header";
import Form from "./Form";
import { StatusBar } from "expo-status-bar";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Header style={styles.header}/>
      <Form style={styles.form} navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 24,
  },
  form: { margin: 4, padding: 24 },
  header: { margin: 4, padding: 24 },
});
