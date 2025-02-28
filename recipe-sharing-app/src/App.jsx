
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <Routes>
      <Route path = "/" element = {
          <RecipeList />
      } />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;