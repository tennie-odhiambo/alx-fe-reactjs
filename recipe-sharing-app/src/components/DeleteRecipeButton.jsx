import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
  }

  return (
    <button onClick={handleDelete} style={{ background: 'red', color: 'white', marginLeft: '10px' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
