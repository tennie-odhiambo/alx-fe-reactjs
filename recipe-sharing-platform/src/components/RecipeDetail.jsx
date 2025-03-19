import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error fetching recipe details:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-600 text-xl">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4 text-gray-900">{recipe.title}</h1>
        <p className="text-gray-600 mt-2">{recipe.summary}</p>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 mt-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="mt-1">{step}</li>
            ))}
          </ol>
        </div>

        <Link to="/" className="mt-6 inline-block px-5 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
