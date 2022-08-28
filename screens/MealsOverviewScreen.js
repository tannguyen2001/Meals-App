import React, { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const cartId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(cartId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === cartId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [cartId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
