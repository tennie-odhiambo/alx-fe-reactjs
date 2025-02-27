import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import editRecipe from "./editRecipe";

const RecipeDetails = () => {
    const {id } = useParams();
    const navigate = useNavigate();
    const recipe = useRecipeStore((state) => state.recipes.find((recipe) => recipe.id === Number(id)));
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

    if (!recipe) {
        return <h1>Recipe not found</h1>;
    }

    const handleDelete = () => {
        deleteRecipe(recipe.id);
        navigate("/");
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
            <button onClick={handleDelete} style={{background: 'red', color: 'white', padding: '8px', marginTop: '10px'}}>Delete Recipe
            </button>
        </div>
    );
};

export default RecipeDetails;