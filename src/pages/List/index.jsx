import { View, Text, StyleSheet } from "react-native";
import React from "react";

import ListComponent from "../../components/List";

export default function List() {
  return (
    <View style={styles.container}>
      <ListComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1,},
});