import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

import MealsList from "../components/MealsList/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length == 0) {
    return (
      <View style={styles.rootContainerNoItems}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <MealsList items={favoriteMeals} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#3f2f25",
    flex: 1,
  },
  rootContainerNoItems: {
    backgroundColor: "#3f2f25",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default FavoritesScreen;
