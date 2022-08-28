import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((current) => [...current, id]);
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  function removeFavorite(id) {
    setFavoriteMealIds((current) => current.filter((mealId) => mealId !== id));
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
