import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)} style={{ background: 'red', color: 'white', marginLeft: '10px' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
