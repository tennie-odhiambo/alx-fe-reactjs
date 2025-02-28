import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (id, updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => (recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe))
  })),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  setRecipes: (recipes) => set(state => {
    const filteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { recipes, filteredRecipes };
  }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  }))
}));

export default useRecipeStore;