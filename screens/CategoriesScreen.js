import React from "react";
import { StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

import { FlatList } from "react-native";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <View style={styles.rootContainer}>
        <CategoryGridTitle
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      </View>
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#3f2f25",
    flex: 1,
  },
});

export default CategoriesScreen;
