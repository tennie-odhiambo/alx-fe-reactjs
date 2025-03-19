import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
      <p className="text-gray-600 text-sm">{recipe.summary}</p>
      <Link to={`/recipe/${recipe.id}`} className="mt-3 inline-block text-blue-500 font-semibold">
        View Recipe →
      </Link>
    </div>
  );
};

export default RecipeCard;
