import { createContext, useContext } from "react";

import recipeData from "../data/recipe.json";

const RecipeContext = createContext();

function RecipeProvider({ children }) {
  const recipe = recipeData;

  return (
    <RecipeContext.Provider value={recipe}>{children}</RecipeContext.Provider>
  );
}

function useRecipe() {
  const context = useContext(RecipeContext);

  if (context === undefined)
    throw new Error("RecipeContext was used outside of the RecipeProvider");

  return context;
}

export { RecipeProvider, useRecipe };
