import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes added yet.</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'blue' }}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
