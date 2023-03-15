import { recipesStore } from "../data/recipes";

export const useRecipes = () => {

  const getRecipesByCategory = (category) => {
    return recipesStore.filter(recipe => recipe.category.includes(category));
  }

  const getRecipesByRating = () => {
    return recipesStore.sort( (a, b) => b.averageRating - a.averageRating);
  }

  const getRecipesById = (id) => {}

  const getRecipesByRecentCreationDate = () => {
    return recipesStore.sort( (a, b) => a.creationDate - b.creationDate )
  }
  const getRecipesByOwner = (owner) => {}

  return {
    // Methods
    getRecipesByCategory,
    getRecipesById,
    getRecipesByOwner,
    getRecipesByRating,
    getRecipesByRecentCreationDate,
  }
}
