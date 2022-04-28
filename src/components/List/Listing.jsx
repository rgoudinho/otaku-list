import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";

import animes from "../../services/animeList";

export default function Listing() {
  const Item = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
        <Text>{item.studio}</Text>
        <Text>
          {item.numberEpisodesSeen}/{item.totalEpisodeAmount}
        </Text>
      </View>
    );
  };

  return (
    // <View>
      <FlatList
        data={animes}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    // </View> 
  );
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "gray",
    margin: 4,
  },
});
