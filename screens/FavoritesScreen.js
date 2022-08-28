import React from "react";
import { View, Text, StyleSheet } from "react-native";

function FavoritesScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>The Favorites Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#3f2f25",
    flex: 1,
  },
});

export default FavoritesScreen;
