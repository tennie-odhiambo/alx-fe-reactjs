import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";




const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = useRecipeStore((state) => state.recipes.find((recipe) => recipe.id === Number(id)));
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

    if (!recipe) {
        return <h1>Recipe not found</h1>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};

export default RecipeDetails;