
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
    <div>
      <h1>Recipe Sharing App</h1>
      <Routes>
      <Route path = "/" element = {
        <div>
          <AddRecipeForm />
          <RecipeList />
        </div>
      } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;