import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { filteredRecipes, searchTerm, filterRecipes } = useRecipeStore(state => ({filteredRecipes: state.filteredRecipes, searchTerm: state.searchTerm, filterRecipes: state.filterRecipes}));

  filterRecipes();

  return (
    <div>
      <h2>Recipe List</h2>
      {filtereedRecipes.length === 0 ? <p>No recipes found</p> : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;